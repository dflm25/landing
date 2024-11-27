<?php

namespace App\Http\Controllers;

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
            // $accountId = Auth::user()->account_id ?? 1;
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
        //
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
