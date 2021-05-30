<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use Kyslik\ColumnSortable\Sortable;
use App\Models\Category;

class Post extends Model
{
    use HasFactory, Sortable, Sluggable;

    protected $fillable = ['name', 'name_ES', 'content_ES', 'content', 'image', 'enabled', 'slug', 'user_id', 'usr_type_id', 'views'];
    public $sortable = ['name'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getExtractAttribute() {
        return substr(($this->content), 0, strpos(($this->content), ' ', 100));
    }

    public function getMiniextractAttribute() {
        return substr(($this->content), 0, strpos(($this->content), ' ', 40));
    }

    public function sameCat() {
        return $this->where('usr_type_id', $this->usr_type_id)
            ->where('id', '!=', $this->id)
            ->with('user')
            ->take(3)
            ->get();
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

    public function searchableAs()
    {
        return 'id';
    }

    public function categories() {
        return $this->belongsToMany(
            Category::class,
            'category_posts',
            'post_id',
            'category_id');
    }
    
    public function setviews(){
        $data = $this::find($this->id);
        $data->views = $data->views + 1;
        $data->save();
    }
}