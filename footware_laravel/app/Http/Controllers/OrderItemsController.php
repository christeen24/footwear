<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrderItems;
use Illuminate\Support\Facades\Validator;

class OrderItemsController extends Controller
{
    private $status = 200;

    public function index()
    {
        $orderItems = OrderItems::all();
        if (count($orderItems) > 0) {
            return response()->json(["status" => $this->status, "success" => true, "count" => count($orderItems), "data" => $orderItems]);
        } else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! no record found"]);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'order_id' => 'required',
            'item_id' => 'required'
        ]);
        
        if($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "Whoops! failed to update, try again.", "validation_errors" => $validator->errors()]);
        }

        $id = $request->id;
        $orderItemsArray = array(
            "order_id" => $request->order_id,
            "item_id" => $request->item_id
            
        );

        if($id !="") {           
            $orderItems = OrderItems::find($id);
            if(!is_null($orderItems)){
                $updated_status = OrderItems::where("id", $id)->update($orderItemsArray);
                if($updated_status == 1) {
                    return response()->json(["status" => $this->status, "success" => true, "message" => "order details updated successfully"]);
                }
                else {
                    return response()->json(["status" => "failed", "message" => "Whoops! failed to update, try again."]);
                }               
            }                   
        }
        else {
            $orderItems = OrderItems::create($orderItemsArray);
            if(!is_null($orderItems)) {            
                return response()->json(["status" => $this->status, "success" => true, "message" => "order record created successfully", "data" => $orderItems]);
            }    
            else {
                return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! failed to create."]);
            }
        }


        // $order = Order::create($orderArray);
        // if(!is_null($order)) {            
        //     return response()->json(["status" => $this->status, "success" => true, "message" => "Order record created successfully", "data" => $order]);
        // }    
        // else {
        //     return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! failed to create."]);
        // }
        
    }

    public function show($id)
    {
        $orderItems = OrderItems::find($id);

        if(!is_null($orderItems)) {
            return response()->json(["status" => $this->status, "success" => true, "data" => $orderItems]);
        }
        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! no Order found"]);
        }
    }
}
