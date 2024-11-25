<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\HasUuid;

class business_info extends Model
{
    use HasFactory, HasUuid;

    protected $fillable = ['name', 'address', 'email', 'phone'];
}
