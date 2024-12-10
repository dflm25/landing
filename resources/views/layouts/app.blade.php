@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <h1>{{ $title ?? '' }}</h1>
@stop

@section('content')

@stop

@section('css')
    {{-- Add here extra stylesheets --}}
    {{-- <link rel="stylesheet" href="/css/admin_custom.css"> --}}
@stop

@section('js')
    @php
        $file = 'resources/js/pages/'.($script ?? '').'.jsx';
    @endphp
    @viteReactRefresh
    @if(isset($script))
        @vite(['resources/sass/app.scss', $file])
    @endif
@stop
