<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BusinessInfoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'logo_url' => 'nullable|file|mimes:jpeg,png,jpg,gif,svg|max:2048', // No requerido
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'El nombre es requerido',
            'name.string' => 'El nombre debe ser una cadena de texto',
            'name.max' => 'El nombre no debe exceder los 255 caracteres',
            'logo_url.file' => 'El logo debe ser un archivo',
            'logo_url.mimes' => 'El logo debe ser un archivo de tipo: jpeg, png, jpg, gif, svg',
            'logo_url.max' => 'El logo no debe exceder los 2048 kilobytes',
        ];
    }
}
