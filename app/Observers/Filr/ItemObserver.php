<?php

namespace App\Observers\Filr;

class ItemObserver
{
    public function creating(Item $item)
    {
        // Generate key
        $item->key = md5("filr".time());
        // Set User
        $item->user_id = auth()->id();
        
    }
}
