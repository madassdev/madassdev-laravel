<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $fillable = [
        "parent_id","name", "size", "type", "is_dir"
    ];

    public function user(){
        return $this->belongsTo(App\Models\User::class);
    }

    public function subItems()
    {
        return $this->hasMany(Item::class, 'parent_id', 'id');
    }

    public function parent()
    {
        return $this->belongsTo(Item::class, 'parent_id', 'id');
    }
}
