<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

use App\Models\Mongo\Variations;
use App\Models\ProductAttributeImage;
use App\Models\Attribute;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if ($request->expectsJson()) {
            $response = Product::where([ 'business_info_id'=> Auth::user()->businessInfo->id ])->paginate(10);
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
        if ($request->hasFile('logo_url')) {
            $logoPath = $request->file('logo_url')->store('product', 'public');
        }

        $product = Product::create([
            'business_info_id' => Auth::user()->businessInfo->id,
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'base_price' => $request->input('base_price'),
            'price_discount' => $request->input('price_discount'),
            'picture' => $logoPath ?? null
        ]);

        return response()->json(['message' => 'Producto creado correctamente.', 'status' => 'success', 'data' => $product], 201);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        if ($request->expectsJson()) {
            $response = Product::with(['attributes', 'images'])->where('id', $id)->first();
            $combinations = Variations::where('product_id', $id)->get();
            $response['combinations'] = $combinations[0]->combinations ?? [];

            if (isset($response->images[0]->attribute_id)) {
                $response['attribute_by_pictures'] = $response->images[0]->attribute_id;

            }

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
        $product = Product::find($id);
        $product->name = $request->input('name');
        $product->description = $request->input('description');
        $product->base_price = $request->input('base_price');

        if ($request->hasFile('logo_url')) {
            $logoPath = $request->file('logo_url')->store('product', 'public');
            $product->picture = $logoPath;
        }

        if (Variations::where('product_id', $id)->count() === 0) {
            Variations::create([
                'product_id' => $id,
                'combinations' => json_decode($request->input('combinations'))
            ]);
        } else {
            Variations::where('product_id', $id)->update([
                'combinations' => json_decode($request->input('combinations'))
            ]);
        }

        if ($request->hasFile('pictures')) {
            foreach ($request->file('pictures') as $key => $file) {
                $logoPath = $file->store('product/'.$product->id, 'public');

                ProductAttributeImage::create([
                    'attribute_id' => $request->attribute_by_pictures,
                    'attribute_value_id' => $request->combination_id[$key],
                    'product_id' => $product->id,
                    'image' => $logoPath
                ]);
            }
        }
        $product->save();

        return response()->json(['message' => 'Producto actualizado correctamente', 'status' => 'success'], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
