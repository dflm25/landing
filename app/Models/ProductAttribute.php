<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Traits\HasUuid;

class ProductAttribute extends Model
{
    //
    use HasFactory, HasUuid;
    public $timestamps = false;

    protected $table = 'product_attributes';
    protected $fillable = [
        'product_id',
        'attribute_id'
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function attribute()
    {
        return $this->belongsTo(Attribute::class);
    }
}
