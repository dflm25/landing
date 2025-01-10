<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\HasUuid;

class Media extends Model
{
    use HasUuid;

    protected $table = 'medias';

    protected $fillable = [
        'path',
        'extension',
        'alt',
        'size',
        'business_info_id',
    ];
}
