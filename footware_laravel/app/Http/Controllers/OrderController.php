<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    private $status = 200;

    public function index()
    {
        $orders = Order::all();
        if (count($orders) > 0) {
            return response()->json(["status" => $this->status, "success" => true, "count" => count($orders), "data" => $orders]);
        } else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! no record found"]);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'item_id' => 'required',
            'customer_id' => 'required',
            'gross_amount' => 'required',
            'date' => 'required'
        ]);
        
        if($validator->fails()) {
            return response()->json(["status" => "failed", "validation_errors" => $validator->errors()]);
        }

        $id = $request->id;
        $groceryArray = array(
            "item_id" => $request->item_id,
            "customer_id" => $request->customer_id,
            "gross_amount" => $request->gross_amount,
            "date" => $request->date
        );

        {
            $order = Order::create($orderArray);
            if(!is_null($order)) {            
                return response()->json(["status" => $this->status, "success" => true, "message" => "Order record created successfully", "data" => $order]);
            }    
            else {
                return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! failed to create."]);
            }
        }
    }

    public function show($id)
    {
        $order = Order::find($id);

        if(!is_null($order)) {
            return response()->json(["status" => $this->status, "success" => true, "data" => $order]);
        }
        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! no Order found"]);
        }
    }
}
