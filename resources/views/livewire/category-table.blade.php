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
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">Create New Category</button>
    @if($isOpen)
        @include('livewire.create-category')
    @endif

    <table class="table-fixed w-full">
        <thead>
            <tr class="bg-gray-100">
                <th class="px-4 py-2">ID</th>
                <th class="px-4 py-2">Name</th>
                <th class="px-4 py-2">Spanish Name</th>
                <th class="px-4 py-2">URL</th>
                <th class="px-4 py-2">Created at</th>
                <th class="px-4 py-2"></th>
            </tr>
        </thead>
        <tbody>
            @foreach($categories as $category)
            <tr>
                <td class="border px-4 py-2">{{ $category->id }}</td>
                <td class="border px-4 py-2">{{ $category->EN_name }}</td>
                <td class="border px-4 py-2">{{ $category->ES_name }}</td>
                <td class="border px-4 py-2">
                    <a class="text-pink-700" href='{{url("Category/{$category->slug}")}}'>/Category/{{ $category->slug }}</a>
                </td>
                <td class="border px-4 py-2">{{ $category->created_at->diffForHumans() }}</td>
                <td class="border px-4 py-2">
                    <button wire:click="edit({{ $category->id }})"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                    <button wire:click="delete({{ $category->id }})"
                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <br>
    {{ $categories->links() }}
</div>