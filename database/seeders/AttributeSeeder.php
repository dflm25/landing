<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Attribute;
use App\Models\AttributeValue;

class AttributeSeeder extends Seeder
{

    protected $accountId;

    public function __construct($accountId)
    {
        $this->accountId = $accountId;
    }

    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Crear el atributo 'Talla'
        $sizeAttribute = Attribute::create(['name' => 'Talla']);

        // Agregar valores de 'Talla'
        $sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
        foreach ($sizes as $size) {
            AttributeValue::create([
                'attribute_id' => $sizeAttribute->id,
                'value' => $size,
                'business_info_id' => $this->accountId,
            ]);
        }

        // Crear el atributo 'Color'
        $colorAttribute = Attribute::create(['name' => 'Color']);

        // Agregar valores de 'Color'
        $colors = ['Rojo', 'Verde', 'Azul', 'Negro', 'Blanco', 'Amarillo'];

        foreach ($colors as $color) {
            AttributeValue::create([
                'attribute_id' => $colorAttribute->id,
                'value' => $color,
            ]);
        }
    }
}
