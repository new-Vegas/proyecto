<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Livewire\WithPagination;
use App\Models\UserType;


class UtypeTable extends Component
{
    use WithPagination;

    public $isOpen = 0, $name, $nameES, $descENG, $descES, $utype_id;


    public function render()
    {
        return view('livewire.utype-table', [
            'utypes' => UserType::paginate(7),
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
        $this->name = '';
        $this->nameES = '';
        $this->descENG= '';
        $this->descES= '';
        $this->utype_id= '';
    }

    public function store()
    {
        $this->validate([
            'name' => 'required',
            'nameES' => 'required',
        ]);

        UserType::updateOrCreate(['id' => $this->utype_id], [
            'name' => $this->name,
            'nameES' => $this->nameES,
            'descENG' => $this->descENG,
            'descES' => $this->descES,
        ]);

        session()->flash('message', 
            $this->utype_id ? 'User Type Successfully.' : 'User Type Created Successfully.');

        $this->closeModal();
        $this->resetInputFields();
    }

    public function edit($id)
    {
        $utype = UserType::findOrFail($id);
        $this->utype_id = $id;
        $this->name = $utype->name;
        $this->nameES = $utype->nameES;
        $this->descENG = $utype->descENG;
        $this->descES = $utype->descES;
    
        $this->openModal();
    }

    public function delete($id)
    {
        UserType::find($id)->delete();
        session()->flash('message', 'User Type Deleted Successfully.');
    }
}
