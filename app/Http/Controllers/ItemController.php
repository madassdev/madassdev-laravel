<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function index()
    {
        $items = Item::
        // whereUserId(auth()->id())->
        whereNull('parent_id')->get();
        return response()->json([
            "success" => true,
            "data" => [
                "items" => $items
            ]
        ]);
    }

    public function store(Request $request)
    {
        $rules = [
            "parent_id" => "required|sometimes|exists:items,id",
            "name" => "required|string|max:50",
            "size" => "required|numeric|min:0",
            "type" => "required|sometimes",
            "is_dir" => "required|sometimes",
        ];
        $request->validate($rules);

        $item = Item::create($request->validated());

        return response()->json([
            "success" => true,
            "data" => [
                "item" => $item
            ]
        ]);
    }

    public function update(Request $request, Item $item)
    {
        $rules = [
            "parent_id" => "required|sometimes|exists:items,id",
            "name" => "required|string|max:50",
            "size" => "required|numeric|min:0",
            "type" => "required|sometimes",
            "is_dir" => "required|sometimes",
        ];

        $request->validate($rules);

        $item = $item->update($request->validated());

        return response()->json([
            "success" => true,
            "data" => [
                "item" => $item
            ]
        ]);
    }
}
