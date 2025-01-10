<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

use App\Models\Media;

class MediaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if ($request->expectsJson()) {
            $response = Media::where('business_info_id',  Auth::user()->businessInfo->id)->paginate(10);

            return response()->json($response);
        }

        return view('app', ['title' => 'Galeria de fotos', 'script' => 'medias/medias']);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $businessId = Auth::user()->businessInfo->id;
        $logoPath = null;
        if ($request->hasFile('image')) {
            $logoPath = $request->file('image')->store('company_'.$businessId, 'public');
        }

        Media::create([
            'business_info_id' => $businessId,
            'path' => $logoPath,
            'alt' => $request->alt ?? null,
        ]);

        return response()->json(['message' => 'Imagen cargada correctament!', 'status' => 'success'], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $media = Media::find($id);
        if ($media && $media->path) {
            Storage::disk('public')->delete($media->path);
            Media::destroy($id);
        }

        return response()->json(['message' => 'Imagen eliminada correctamente!', 'status' => 'success'], 200);
    }
}
