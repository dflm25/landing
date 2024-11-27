<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\BusinessInfo;

class CheckBusinnesData
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $id = Auth::id();

        if (BusinessInfo::where('user_id', $id)->count() === 0) {
            return redirect('business-info');
        }
        return $next($request);
    }
}
