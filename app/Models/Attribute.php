<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\HasUuid;

class Attribute extends Model
{
    use HasFactory, HasUuid;

    protected $fillable = [
        'name',
        'business_info_id',
    ];

    public function values()
    {
        return $this->hasMany(AttributeValue::class);
    }
}
