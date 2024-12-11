<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Attribute;
use App\Models\AttributeValue;

class AttributeSeeder extends Seeder
{

    protected $accountId;
    protected $colors;

    public function __construct($accountId)
    {
        $this->accountId = $accountId;
        $this->colors = config('constants.COLORS');
    }

    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Crear el atributo 'Talla'
        $sizeAttribute = Attribute::create(['name' => 'Talla', 'business_info_id' => $this->accountId]);

        // Agregar valores de 'Talla'
        $sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
        foreach ($sizes as $size) {
            AttributeValue::create([ 'attribute_id' => $sizeAttribute->id, 'value' => $size ]);
        }

        // Crear el atributo 'Color'
        $colorAttribute = Attribute::create(['name' => 'Color', 'business_info_id' => $this->accountId]);

        // Agregar valores de 'Color'
        foreach ($this->colors as $color) {
            AttributeValue::create([ 
                'attribute_id' => $colorAttribute->id, 
                'value' => $color['name'],
                'code' => $color['hex']
            ]);
        }
    }
}
