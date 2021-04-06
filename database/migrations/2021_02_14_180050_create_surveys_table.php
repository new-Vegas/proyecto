<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSurveysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('surveys', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('user_id');

            $table->string('name');
            $table->string('name_ES');
            $table->string('slug');
            $table->string('image')->default('');
            $table->json('config');
            $table->boolean('enabled')->default(0);
            $table->boolean('public')->default(0);
            $table->integer('responseLimit')->default(-1);
            $table->datetime('aviableFrom');
            $table->datetime('aviableTo');

            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('surveys');
    }
}
