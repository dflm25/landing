<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
            // $accountId = Auth::user()->account_id ?? 1;
            $response = Attribute::with('values')->paginate(10);
            return response()->json($response);
        }
        return view('app', ['title' => 'Atributos', 'script' => 'attributes/attributes']);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        DB::transaction(function () use ($request) {
            $attribute = Attribute::create([
                'name' => $request->name,
            ]);

            foreach ($request->attribute_values as $value) {
                AttributeValue::create(attributes: [
                    'attribute_id' => $attribute->id,
                    'value' => $value,
                ]);
            }
        });

        return response()->json(['message' => 'Atributo creado correctamente.']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
