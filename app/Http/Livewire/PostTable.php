<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Livewire\WithPagination;
use App\Models\Post;
use App\Models\UserType;
use illuminate\Http\Request;
use \Cviebrock\EloquentSluggable\Services\SlugService;

class PostTable extends Component
{
    public $blogs, $name, $content, $post_id, $name_ES, $content_ES, $enabled, $image, $usr_type_id, $user_types, $category;
    public $isOpen = 0;
    public $filter;

    use WithPagination;

    public function mount(Request $request)
    {
        $this->filter = $request->query('filter');
    }

    public function render()
    {
        if (!empty($this->filter)) {
            $posts = Post::sortable()
                ->where('posts.name', 'like', '%'.$this->filter.'%')->paginate(7);//->get();
        } else {
            $posts = Post::sortable()->paginate(7);;
        }
        return view('livewire.post-table')
            ->with('posts', $posts)
            ->with('filter', $this->filter)
            ->with('userTypes', UserType::all());
    }

    public function indexFiltering(Request $request)
    {
        $filter = $request->query('filter');
        if (!empty($filter)) {
            $posts = Post::sortable()
                ->where('post.name', 'like', '%'.$filter.'%')
                ->get();
        } else {
            $posts = Post::sortable()
                ->get();
        }
        return view('livewire.post-table')->with('posts', $posts)->with('filter', $filter);
    }

    public function create()
    {
        $this->resetInputFields();
        $this->openModal();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function openModal()
    {
        $this->isOpen = true;
    }
  
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function closeModal()
    {
        $this->isOpen = false;
    }
  
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    private function resetInputFields(){
        $this->name= '';
        $this->name_ES= '';
        $this->content = '';
        $this->content_ES= '';
        $this->enabled = true;
        $this->image= '';
        $this->usr_type_id=1;
        $this->post_id = '';
        $this->category = '';
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function store()
    {
        $this->validate([
            'name' => 'required',
            'content' => 'required',
        ]);

        Post::updateOrCreate(['id' => $this->post_id], [
            'name' => $this->name,
            'slug' => SlugService::createSlug(Post::class, 'slug', $this->name),
            'name_ES' => $this->name_ES,
            'content' => $this->content,
            'content_ES' => $this->content_ES,
            'image' => $this->image,
            'enabled' => $this->enabled,
            'usr_type_id' => $this->usr_type_id,
            'category' => $this->category,
            'user_id' => auth()->id()
        ]);

        session()->flash('message', 
            $this->post_id ? 'Post Updated Successfully.' : 'Post Created Successfully.');

        $this->closeModal();
        $this->resetInputFields();
    }
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function edit($id)
    {
        $post = Post::findOrFail($id);
        $this->post_id = $id;
        $this->name= $post->name;
        $this->name_ES= $post->name_ES;
        $this->content = $post->content;
        $this->content_ES = $post->content_ES;
        $this->enabled= $post->enabled;
        $this->usr_type_id = $post->usr_type_id;
        $this->image= $post->image;

        $this->openModal();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function delete($id)
    {
        Post::find($id)->delete();
        session()->flash('message', 'Post Deleted Successfully.');
    }
}
