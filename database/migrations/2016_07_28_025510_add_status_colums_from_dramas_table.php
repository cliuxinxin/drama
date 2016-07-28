<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddStatusColumsFromDramasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('dramas', function (Blueprint $table) {
            $table->date('episode_update_date');
            $table->string('newest_season');
            $table->string('newest_number');
            $table->date('newest_date');
            $table->string('next_season');
            $table->string('next_number');
            $table->date('next_date');
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
            $table->dropColumn('episode_update_date');
            $table->dropColumn('newest_season');
            $table->dropColumn('newest_number');
            $table->dropColumn('newest_date');
            $table->dropColumn('next_season');
            $table->dropColumn('next_number');
            $table->dropColumn('next_date');
        });
    }
}
