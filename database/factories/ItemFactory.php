<?php

namespace Database\Factories;

use App\Models\Item;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ItemFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Item::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word(),
            'user_id' => 1,
            'size' => $this->faker->numberBetween(1000, 9999999999),
            'type' => $this->faker->mimeType(),
            'is_dir' => $this->faker->boolean(),
            'key' => Str::random(16)

        ];
    }
}
