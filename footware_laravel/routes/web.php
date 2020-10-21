<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST,GET,DELETE,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FootwearController;
use App\Http\Controllers\CustomerController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('footwears', 'App\Http\Controllers\FootwearController@index');

Route::get('footwears/{id}', 'App\Http\Controllers\FootwearController@show');


Route::get('customers', 'App\Http\Controllers\CustomerController@index');

Route::get('customers/{id}', 'App\Http\Controllers\CustomerController@show');
