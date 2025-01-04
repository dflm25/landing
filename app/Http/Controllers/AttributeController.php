<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

use App\Http\Requests\AttributesRequest;
use App\Models\Attribute;
use App\Models\AttributeValue;

class AttributeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if ($request->expectsJson()) {
            if ($request->action === 'all') {
                $response = Attribute::with('values')->where('business_info_id',  Auth::user()->businessInfo->id)->get();
                return response()->json($response);
            }

            $response = Attribute::with('values')->where('business_info_id',  Auth::user()->businessInfo->id)->paginate(10);
            return response()->json($response);
        }
        return view('app', ['title' => 'Atributos', 'script' => 'attributes/attributes']);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AttributesRequest $request)
    {
        DB::transaction(function () use ($request) {
            $attribute = Attribute::create([
                'name' => $request->name,
                'business_info_id' =>  Auth::user()->businessInfo->id
            ]);

            foreach ($request->attribute_values as $value) {
                AttributeValue::create(attributes: [
                    'attribute_id' => $attribute->id,
                    'value' => $value,
                ]);
            }
        });

        return response()->json(['message' => 'Atributo creado correctamente.', 'status' => 'success']);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $attribute = Attribute::with('values')->select('id', 'name')->findOrFail($id);
        return response()->json($attribute);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        DB::transaction(function () use ($request, $id) {
            $attribute = Attribute::findOrFail($id);
            $attribute->update([
                'name' => $request->name,
                'business_info_id' =>  Auth::user()->businessInfo->id
            ]);

            $attribute->values()->delete();

            foreach ($request->attribute_values as $value) {
                AttributeValue::create(attributes: [
                    'attribute_id' => $attribute->id,
                    'value' => $value,
                ]);
            }
        });

        return response()->json(['message' => 'Atributo actualizado correctamente.', 'status' => 'success']);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $response = Attribute::findOrFail($id)->delete();
        return response()->json(['message' => 'Atributo eliminado correctamente.', 'status' => 'success']);
    }
}
