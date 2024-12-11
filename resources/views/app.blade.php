@extends('layouts.app')

@section('content')
<div id="root" data-id="{{ $id ?? false }}" data-accountId="{{ auth()->user()->businessInfo->id ?? false }}"></div>
@endsection
