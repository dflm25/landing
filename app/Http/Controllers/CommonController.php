<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\AttributeValue;

class CommonController extends Controller
{
    //
    public function index(Request $request)
    {
        $model = 'App\Models\\' . $request->model;

        if ($request->action == 'all') {
            return $this->getAll($request->model);
        }

        if ($request->action == 'byId') {
            return $this->getById($request, $model);
        }

        if ($request->action == 'byIdNoAccount') {
            return $this->byIdNoAccount($request, $model);
        }

        if ($request->action == 'customProduct') {
            return $this->customProduct($request);
        }
    }

    public function getById($request, $model)
    {
        $with = isset($request->with) ? explode(',', $request->with) : [];
        return $model::where([
            'id' => $request->id,
            'business_info_id'=> Auth::user()->businessInfo->id
        ])
        ->when(count($with) > 0, function ($query) use ($with) {
            return $query->with($with);
        })
        ->first();
    }

    public function getAll($model)
    {
        $model = 'App\Models\\' . $model;

        return $model::where([
            'business_info_id'=> Auth::user()->businessInfo->id
        ])->orderBy('name', 'desc')->get();
    }

    public function byIdNoAccount($request, $model)
    {
        $with = explode(',', $request->with);
        $response = $model::where('id', $request->id)
            ->when(count($with) > 0, function ($query) use ($with) {
                return $query->with($with);
            })
            ->first();

        return $response;
    }

    public function customProduct($request)
    {
        $product = \App\Models\Product::where('id', $request->id)
            ->with('attributes', 'combinations')
            ->first();

        foreach ($product->attributes as $attributes) {
            $attributes->values = AttributeValue::where('attribute_id', $attributes->attribute->id)->get();
        }

        return $product;
    }
}
