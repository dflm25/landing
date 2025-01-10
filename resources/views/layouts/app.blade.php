@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <h1>{{ $title ?? '' }}</h1>
@stop

@section('content')

@stop

@section('css')
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/intro.js@7.2.0/minified/introjs.min.css">
@stop

@section('js')
    <script src="https://cdn.jsdelivr.net/npm/intro.js@7.2.0/intro.min.js"></script>
    @php
        $file = 'resources/js/pages/'.($script ?? '').'.jsx';
    @endphp
    @viteReactRefresh
    @if(isset($script))
        @vite(['resources/sass/app.scss', $file])
    @endif
@stop

