<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

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
    }

    public function getById($request, $model)
    {
        return $model::where([
            'id' => $request->id,
            'business_info_id'=> Auth::user()->businessInfo->id
        ])->first();
    }

    public function getAll($model)
    {
        $model = 'App\Models\\' . $model;

        return $model::where([
            'business_info_id'=> Auth::user()->businessInfo->id
        ])->orderBy('name', 'desc')->get();
    }
}
