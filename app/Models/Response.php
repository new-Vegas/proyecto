<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Response extends Model
{
    use HasFactory;
    
    protected $fillable = ['ip', 'data', 'survey_id'];


    public function Survey()
    {
        return $this->belongsTo(Survey::class);
    }
}
