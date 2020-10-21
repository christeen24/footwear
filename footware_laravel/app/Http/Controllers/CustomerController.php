<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;
use Illuminate\Support\Facades\Validator;

class CustomerController extends Controller
{
    private $status = 200;

    public function index()
    {
        $customers = Customer::all();
        if (count($customers) > 0) {
            return response()->json(["status" => $this->status, "success" => true, "count" => count($customers), "data" => $customers]);
        } else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! no record found"]);
        }
    }

    public function show($id)
    {
        $customer = Customer::find($id);

        if(!is_null($customer)) {
            return response()->json(["status" => $this->status, "success" => true, "data" => $customer]);
        }
        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! no Grocery found"]);
        }
    }

    

}
