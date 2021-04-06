<?php

namespace Database\Factories;

use App\Models\Survey;
use Illuminate\Database\Eloquent\Factories\Factory;

class SurveyFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Survey::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->sentence,
            'name_ES' => $this->faker->sentence,
            'slug' => $this->faker->slug,
            'image' => $this->faker->imageUrl(1280, 720),
            'config' => '[{"type": "text", "label": "Simple text question?", "required": false}, {"type": "number", "label": "What is your favorite number?", "required": false}, {"type": "checkbox", "label": "27 is a prime number?", "required": false}, {"type": "radio", "label": "What of the following is the best algorithm?", "options": ["Linear Regression", "Logistic Regression", "Random Forest", "Multi Layer Perceptron", "K Means"], "required": false}, {"type": "checkbox", "label": "Select all the characteristics of the neural networks", "options": ["Require a lot of data", "Require labeled data", "Work better with normalized data", "More layers is better than the same number of layers with more neurons", "The training process requires a lot of computational power"], "required": false}]',
            'enabled' => 1,
            'responseLimit' => rand(2, 5),
            'aviableFrom' => $this->faker->dateTimeBetween('-10 days', '+5 days'),
            'aviableTo' => $this->faker->dateTimeBetween('+1 week', '+3 week'),
            'user_id' => rand(1, 5),
        ];
    }
}
