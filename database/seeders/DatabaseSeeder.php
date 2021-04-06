<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\UserType;
use App\Models\Post;
use App\Models\Survey;
use App\Models\Category;
use App\Models\CategoryPost;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(5)->create();
        UserType::factory(3)->create();
        Post::factory(15)->create();
        Category::factory(5)->create();
        CategoryPost::factory(20)->create();
        Survey::factory(10)->create();

    }
}
