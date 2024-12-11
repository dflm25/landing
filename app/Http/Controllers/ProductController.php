<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if ($request->expectsJson()) {
            $response = Product::where([ 'business_id'=> 1 ])->paginate(10);
            return response()->json($response);
        }
        return view('app', ['title' => 'Productos', 'script' => 'products/products']);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('app', ['title' => 'Crear un producto', 'script' => 'products/createProduct']);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if ($request->hasFile('picture')) {
            $logoPath = $request->file('picture')->store('product', 'public');
        }

        $product = new Product();
        $product->business_info_id = Auth::user()->businessInfo->id;
        $product->name = $request->input('name');
        $product->description = $request->input('description');
        $product->base_price = $request->input('base_price');

        if ($logoPath) {
            $product->picture = $logoPath;
        }
        $product->save();

        return response()->json(['message' => 'Atributo creado correctamente.', 'status' => 'success', 'data' => $product], 201);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        if ($request->expectsJson()) {
            $response = Product::find($id);
            return response()->json($response);
        }
        return view('app', [
            'title' => 'Productos', 'script' => 'products/createProduct', 'id' => $id
        ]);
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
