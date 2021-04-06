<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Livewire\WithPagination;
use App\Models\Category;
use \Cviebrock\EloquentSluggable\Services\SlugService;

class CategoryTable extends Component
{
    use WithPagination;

    public $isOpen = 0, $ES_name, $EN_name, $category_id;
    public function render()
    {
        return view('livewire.category-table', [
            'categories' => Category::paginate(7),
        ]);
    }



    public function create()
    {
        $this->resetInputFields();
        $this->openModal();
    }

    public function openModal()
    {
        $this->isOpen = true;
    }


    public function closeModal()
    {
        $this->isOpen = false;
    }

    private function resetInputFields(){
        $this->ES_name = '';
        $this->EN_name= '';
        $this->category_id= '';
    }

    public function store()
    {
        $this->validate([
            'ES_name' => 'required',
            'EN_name' => 'required',
        ]);

        Category::updateOrCreate(['id' => $this->category_id], [
            'ES_name' => $this->ES_name,
            // 'ES_name' => $this->ES_name,
            'slug' => SlugService::createSlug(Category::class, 'slug', $this->EN_name),
            'EN_name' => $this->EN_name,
        ]);

        session()->flash('message', 
            $this->category_id ? 'Category Successfully.' : 'Category Created Successfully.');

        $this->closeModal();
        $this->resetInputFields();
    }

    public function edit($id)
    {
        $category = Category::findOrFail($id);
        $this->category_id = $id;
        $this->ES_name = $category->ES_name;
        $this->EN_name = $category->EN_name;
    
        $this->openModal();
    }

    public function delete($id)
    {
        Category::find($id)->delete();
        session()->flash('message', 'Category Deleted Successfully.');
    }
}
