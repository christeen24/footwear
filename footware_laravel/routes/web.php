<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST,GET,DELETE,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FootwearController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\OrderController;


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

//routes of footwear
Route::get('footwears', 'App\Http\Controllers\FootwearController@index');

Route::get('footwears/{id}', 'App\Http\Controllers\FootwearController@show');

//routes of customer
Route::get('customers', 'App\Http\Controllers\CustomerController@index');

Route::get('customers/{id}', 'App\Http\Controllers\CustomerController@show');

//routes of order
Route::get('orders', 'App\Http\Controllers\OrderController@index');

Route::post('orders','App\Http\Controllers\OrderController@store');

Route::get('orders/{id}', 'App\Http\Controllers\OrderController@show');

