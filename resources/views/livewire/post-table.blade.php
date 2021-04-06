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
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">Create New Blog</button>
    @if($isOpen)
    @include('livewire.create')
    @endif
    <div class="relative mx-4 mb-4 mt-1">
        <input type="text" wire:model="filter" class="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Search..." />
        <button class="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
    </div>

    <table class="table-fixed w-full">
        <thead>
            <tr class="bg-gray-100">
                <th class="px-4 py-2 w-20">ID</th>
                <th class="px-4 py-2">@sortablelink('name', 'Title')</th>
                <th class="px-4 py-2 w-20">User</th>
                <th class="px-4 py-2">Created at</th>
                <th class="px-4 py-2">URL</th>
                <th class="px-4 py-2">Enabled</th>
                <th class="px-4 py-2">Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach($posts as $post)
            <tr>
                <td class="border px-4 py-2">{{ $post->id }}</td>
                <td class="border px-4 py-2">{{ $post->name }}</td>
                <td class="border px-4 py-2">{{ $post->user->name }}</td>
                <td class="border px-4 py-2">{{ $post->created_at->diffForHumans() }}</td>
                <td class="border px-4 py-2">
                    <a class="text-pink-700" href='{{url("post/{$post->slug}")}}'>{{$post->slug}}</a>
                </td>
                <td class="border px-4 py-2">{{ $post->enabled }}</td>
                <td class="border px-4 py-2">
                    <button wire:click="edit({{ $post->id }})"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                    <button wire:click="delete({{ $post->id }})"
                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <br>
    {{ $posts->links() }}
</div>

<div id="options" class="hidden">
    @foreach($userTypes as $type)
        <option value="{{$type->id}}">{{$type->name}}</option>
    @endforeach
</div>