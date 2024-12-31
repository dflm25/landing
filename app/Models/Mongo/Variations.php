<?php

namespace App\Models\Mongo;

use MongoDB\Laravel\Eloquent\Model;

class Variations extends Model
{
    protected $connection = 'mongodb'; // Conexión MongoDB
    protected $collection = 'products'; // Nombre de la colección

    protected $fillable = [
        'product_id',
        'combinations',
    ];
}
