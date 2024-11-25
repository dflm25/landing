<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BusinessInfo extends FormRequest
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
        $rules = [
            'name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:business_info,email',
            'phone' => 'required|string|max:15',
        ];

        if ($this->route('business_info')) {
            $rules['email'] = 'required|email|max:255|unique:business_info,email,' . $this->route('business_info');
        }

        return $rules;
    }
}
