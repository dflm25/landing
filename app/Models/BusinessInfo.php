<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Database\Seeders\AttributeSeeder;
use App\Traits\HasUuid;

class BusinessInfo extends Model
{
    use HasFactory, HasUuid;

    protected $table = 'business_info';
    protected $fillable = ['name', 'address', 'email', 'phone', 'subdomain'];

    protected static function booted()
    {
        static::created(function ($account) {
            // $seeder = new AttributeSeeder($account->id);
            // $seeder->run();
        });
    }
}
