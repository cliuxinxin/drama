<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddSomeInfoToDramasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('dramas', function (Blueprint $table) {
            $table->string('cnname');
            $table->string('status');
            $table->string('airedfrom');
            $table->string('type');
            $table->string('imdb')->nullabe();
            $table->text('summary');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('profiles', function (Blueprint $table) {
            $table->dropColumn('cnname');
            $table->dropColumn('status');
            $table->dropColumn('airedfrom');
            $table->dropColumn('type');
            $table->dropColumn('imdb');
            $table->dropColumn('summary');
        });
    }
}
