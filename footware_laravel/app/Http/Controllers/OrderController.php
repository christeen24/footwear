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
            'fname' => 'required',
            'lname' => 'required',
            'email' => 'required',
            'address' => 'required',
            'country' => 'required',
            'postalcode' => 'required',
            'items' => 'required',
            'price' => 'required'
        ]);
        
        if($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "Whoops! failed to update, try again.", "validation_errors" => $validator->errors()]);
        }

        $id = $request->id;
        $orderArray = array(
            "fname" => $request->fname,
            "lname" => $request->lname,
            "email" => $request->email,
            "company" => $request->company,
            "address" => $request->address,
            "country" => $request->country,
            "postalcode" => $request->postalcode,
            "items" => $request->items,
            "price" => $request->price
            
        );

        if($id !="") {           
            $order = Order::find($id);
            if(!is_null($order)){
                $updated_status = Order::where("id", $id)->update($orderArray);
                if($updated_status == 1) {
                    return response()->json(["status" => $this->status, "success" => true, "message" => "order details updated successfully"]);
                }
                else {
                    return response()->json(["status" => "failed", "message" => "Whoops! failed to update, try again."]);
                }               
            }                   
        }
        else {
            $order = Order::create($orderArray);
            if(!is_null($order)) {            
                return response()->json(["status" => $this->status, "success" => true, "message" => "order record created successfully", "data" => $order]);
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
