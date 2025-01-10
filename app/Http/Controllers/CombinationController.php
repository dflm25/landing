<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductAttributeStock;
use App\Models\ProductAttribute;

class CombinationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        ProductAttribute::where('product_id', $request->product_id)->delete();
        ProductAttributeStock::where('product_id', $request->product_id)->delete();

        foreach($request->input('attributes') as $key => $item) {
            ProductAttribute::create([
                'product_id' => $request->product_id,
                'attribute_id' => $item['id']
            ]);
        }

        foreach($request->combinations as $key => $item) {
            ProductAttributeStock::create([
                'product_id' => $request->product_id,
                'name' => $item['name'],
                'attribute_value_first' => $item['attribute_value_first'],
                'attribute_value_second' => $item['attribute_value_second'],
                'stock' => $item['stock'] ?? 0,
                'price' => $item['price'] ?? 0,
                'price_discount' => $item['price_discount'] ?? $item['price'] ?? 0,
            ]);
        }

        return response()->json(['message' => 'Attributos guardador correctamente!', 'status' => 'success'], 201);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
        return ProductAttributeStock::where('product_id', $id)->orderBy('name')->get();
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
