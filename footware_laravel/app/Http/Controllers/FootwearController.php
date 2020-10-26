<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Footwear;
use Illuminate\Support\Facades\Validator;

class FootwearController extends Controller
{
    private $status = 200;


    public function index()
    {
        $footwears = Footwear::all();
        if (count($footwears) > 0) {
            return response()->json([
                "status" => $this->status, 
                "success" => true, 
                "count" => count($footwears), 
                "data" => $footwears
            ] 
        );
        } else {
            return response()->json([
                "status" => "failed", 
                "success" => false, 
                "message" => "Whoops! no record found"
            ]);
        }
    }


    public function show($id)
    {
        $footwear = Footwear::find($id);

        if(!is_null($footwear)) {
            return response()->json([
                "status" => $this->status, 
                "success" => true, 
                "data" => $footwear
            ]);
        }
        else {
            return response()->json([
                "status" => "failed", 
                "success" => false, 
                "message" => "Whoops! no Footwear found"
            ]);
        }
    }

}
