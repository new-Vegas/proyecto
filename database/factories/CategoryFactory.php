<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Category::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $en_name = $this->faker->word;
        return [
            'ES_name' => $this->faker->word,
            'EN_name' => $en_name,
            'slug' => $en_name,
        ];
    }
}
