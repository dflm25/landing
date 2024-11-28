<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\BusinessInfo;

class BusinessController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if ($request->expectsJson()) {
            if ($request->user_id) {
                $businessInfo = BusinessInfo::where('user_id', Auth::user()->id)->first();

                return response()->json($businessInfo, 200);
            }
        }

        return view('app', ['title' => 'Informacion de tu compañia', 'script' => 'business/business']);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'logo_url' => 'required|file|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $logoPath = $request->file('logo_url')->store('logos', 'public');
        $existingBusinessInfo = BusinessInfo::where('user_id', Auth::user()->id)->first();

        if ($existingBusinessInfo) {
            $existingBusinessInfo->name = $request->input('name');
            $existingBusinessInfo->logo_url = $logoPath;
            $existingBusinessInfo->save();

            return response()->json(['message' => 'Business information updated successfully', 'data' => $existingBusinessInfo], 200);
        }
        $businessInfo = new BusinessInfo();
        $businessInfo->user_id = Auth::user()->id;
        $businessInfo->name = $request->input('name');
        $businessInfo->logo_url = $logoPath;
        $businessInfo->save();

        return response()->json(['message' => 'Business information saved successfully', 'data' => $businessInfo], 201);
    }
}
