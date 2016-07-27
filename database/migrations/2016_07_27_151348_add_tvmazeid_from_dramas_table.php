<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddTvmazeidFromDramasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('dramas', function (Blueprint $table) {
            $table->integer('tvmazeid');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('dramas', function (Blueprint $table) {
            $table->dropColumn('tvmazeid');
        });
    }
}
