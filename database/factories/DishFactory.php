<?php

namespace Database\Factories;

use App\Models\Dish;
use Illuminate\Database\Eloquent\Factories\Factory;

class DishFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Dish::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->sentence(2),
            'category_id' => $this->faker->numberBetween(1, 3),
            'img' => $this->faker->numberBetween(01, 10) . '.jpg',
            'sale' => $this->faker->boolean(30),
            'price' => $this->faker->numberBetween(30.00, 199.99),
            'description' => json_encode($this->faker->paragraphs(3)),
        ];
    }
}
