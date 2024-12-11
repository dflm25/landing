<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Traits\HasUuid;

class AttributeValue extends Model
{
    use HasFactory, HasUuid;

    protected $fillable = ['attribute_id', 'value', 'code'];

    public function attribute()
    {
        return $this->belongsTo(Attribute::class);
    }
}
