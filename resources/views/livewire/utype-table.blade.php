<div class="bg-white overflow-hidden shadow-xl sm:rounded-lg px-4 py-4">
    @if (session()->has('message'))
    <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md my-3" role="alert">
        <div class="flex">
            <div>
                <p class="text-sm">{{ session('message') }}</p>
            </div>
        </div>
    </div>
    @endif
    <button wire:click="create()"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">Create New User Type</button>
    @if($isOpen)
        @include('livewire.create-utype')
    @endif

    <table class="table-fixed w-full">
        <thead>
            <tr class="bg-gray-100">
                <th class="px-4 py-2">ID</th>
                <th class="px-4 py-2">Name</th>
                <th class="px-4 py-2">Spanish Name</th>
                <th class="px-4 py-2">Description</th>
                <th class="px-4 py-2">Spanish Description</th>
                <th class="px-4 py-2">Created at</th>
                <th class="px-4 py-2"></th>
            </tr>
        </thead>
        <tbody>
            @foreach($utypes as $type)
            <tr>
                <td class="border px-4 py-2">{{ $type->id }}</td>
                <td class="border px-4 py-2">{{ $type->name }}</td>
                <td class="border px-4 py-2">{{ $type->nameES }}</td>
                <td class="border px-4 py-2">{{ $type->descENG }}</td>
                <td class="border px-4 py-2">{{ $type->descES }}</td>
                <td class="border px-4 py-2">{{ $type->created_at->diffForHumans() }}</td>
                <td class="border px-4 py-2">
                    <button wire:click="edit({{ $type->id }})"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                    <button wire:click="delete({{ $type->id }})"
                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <br>
    {{ $utypes->links() }}
</div>