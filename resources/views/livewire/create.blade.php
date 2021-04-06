<div class="fixed z-10 inset-0 overflow-y-auto ease-out duration-400">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline"
        style="max-width: 85vw;">
            <form>
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="">
                        <div class="mb-4">
                            <label for="exampleFormControlInput1" class="block text-gray-700 text-sm font-bold mb-2">Title:</label>
                            <input type="text" id="name_EN_fake" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="exampleFormControlInput1" placeholder="Enter Title">
                            <input type="text" id="name_EN" class="hidden" id="exampleFormControlInput1" placeholder="Enter Title" wire:model="name">
                            @error('name') <span class="text-red-500">{{ $message }}</span>@enderror
                        </div>
                        <div class="mb-4">
                            <label for="" class="block text-gray-700 text-sm font-bold mb-2">Title in spanish:</label>
                            <input type="text" id="name_ES_fake" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Title in Spanish">
                            <input type="text" id="name_ES" class="hidden" placeholder="Enter Title in Spanish" wire:model="name_ES">
                            @error('name_ES') <span class="text-red-500">{{ $message }}</span>@enderror
                        </div>
                        <div class="mb-4">
                            <label for="" class="block text-gray-700 text-sm font-bold mb-2">Cover</label>
                            <input type="text" id="image_fake" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Image URL">
                            <input type="text" id="image" class="hidden" wire:model="image">
                            @error('image') <span class="text-red-500">{{ $message }}</span>@enderror
                        </div>
                        
                        <div class="flex flex-wrap-mx-2 space-y-4 md:space-y-0 mb-3">
                            <div class="w-full px-2 md:w-1/3">
                                <label class="block text-gray-700 text-sm font-bold mb-2">Enabled:</label>
                                <input type="checkbox" id="enabled_fake" class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <input type="checkbox" id="enabled" class="hidden" wire:model="enabled">
                                @error('enabled') <span class="text-red-500">{{ $message }}</span>@enderror
                            </div>
                            <div class="w-full px-2 md:w-1/3">
                                <label class="block text-gray-700 text-sm font-bold mb-2">User type:</label>
                                <select id="usr_type_id_fake" class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"></select>
                                <input id="usr_type_id" class="hidden" wire:model="usr_type_id"/>
                                @error('usr_type_id') <span class="text-red-500">{{ $message }}</span>@enderror
                            </div>
                            <div class="w-full px-2 md:w-1/3">
                                <label class="block text-gray-700 text-sm font-bold mb-2">Category:</label>
                                <select id="category_fake" class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline">
                                    <option>None</option>
                                </select>
                                <input id="category" class="hidden" wire:model="category"/>
                                @error('usr_type_id') <span class="text-red-500">{{ $message }}</span>@enderror
                            </div>
                        </div>
                        <div class="mb-4 mt-4">
                            <div id="newtxt"></div>
                            <label for="exampleFormControlInput2" class="block text-gray-700 text-sm font-bold mb-2">Body:</label>
                            <textarea id="0" data-count="0" posttxt class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="exampleFormControlInput2" wire:model="content" placeholder="Enter body"></textarea>
                            @error('content') <span class="text-red-500">{{ $message }}</span>@enderror
                        </div>
                        <div class="mb-4">
                            <div id="newtxt"></div>
                            <label for="exampleFormControlInput2" class="block text-gray-700 text-sm font-bold mb-2">Body in spanish:</label>
                            <textarea id="ES_0" data-count="0" ESposttxt class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="exampleFormControlInput2" wire:model="content_ES" placeholder="Enter body in spanish"></textarea>
                            @error('content_ES') <span class="text-red-500">{{ $message }}</span>@enderror
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                        <button id="saveBTN" type="button" class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                        Save
                        </button>

                        <button id="realBtn" wire:click.prevent="store()" type="button" class="hidden">Save</button>
                    </span>
                    <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                        <button wire:click="closeModal()" type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                            Cancel
                        </button>
                    </span>
                </div>
            </form>
        </div>
    </div>
    <script>

    const usr_type_id_fake = document.getElementById('usr_type_id_fake');
    usr_type_id_fake.innerHTML = document.getElementById('options').innerHTML;

    function initialize(count=0) {
        tinymce.init({
            selector: '#' + count,
            plugins: 'advlist autolink lists link image charmap print preview hr anchor pagebreak',
            toolbar_mode: 'floating',
            height: '60vh',
        }).then(function (res) {
            if (!res.length) {
                const elm = document.querySelector('[posttxt]');
                count++;
                elm.id = count;
                initialize(count);
            }
        });
    }
    function initializeES(count=0) {
        tinymce.init({
            selector: '#ES_' + count,
            plugins: 'advlist autolink lists link image charmap print preview hr anchor pagebreak',
            toolbar_mode: 'floating',
            height: '60vh',
        }).then(function (res) {
            if (!res.length) {
                const elm = document.querySelector('[ESposttxt]');
                count++;
                elm.id = "ES_" + count;
                initializeES(count);
            }
        });
    }


    initialize();
    initializeES();

    const name_ES = document.getElementById('name_ES');
    const name_ES_fake = document.getElementById('name_ES_fake');
    const name_EN = document.getElementById('name_EN');
    const name_EN_fake = document.getElementById('name_EN_fake');
    const image_fake = document.getElementById('image_fake');
    const image = document.getElementById('image');
    const enabled_fake = document.getElementById('enabled_fake');
    const enabled = document.getElementById('enabled');
    const usr_type_id = document.getElementById('usr_type_id');

    name_ES_fake.value = name_ES.value;
    name_EN_fake.value = name_EN.value;
    enabled_fake.checked = enabled.checked;
    image_fake.value = image.value;
    usr_type_id_fake.value = usr_type_id.value;

    document.getElementById('saveBTN').addEventListener('click', function(ev) {
        const e = document.querySelector('[posttxt]');
        const e2 = document.querySelector('[ESposttxt]');
                tinymce.editors.forEach(ed => {
            if (ed.id === e.id) e.value = ed.getContent();
            if (ed.id === e2.id) e2.value = ed.getContent();
        });

        name_ES.value = name_ES_fake.value;
        name_EN.value = name_EN_fake.value;
        image.value = image_fake.value;
        enabled.checked = enabled_fake.checked;
        usr_type_id.value = usr_type_id_fake.value;

        e.dispatchEvent(new Event('input', {bubles:true, cancelable: true}));
        e2.dispatchEvent(new Event('input', {bubles:true, cancelable: true}));
        name_ES.dispatchEvent(new Event('input', {bubles:true, cancelable: true}));
        name_EN.dispatchEvent(new Event('input', {bubles:true, cancelable: true}));
        image.dispatchEvent(new Event('input', {bubles:true, cancelable: true}));
        enabled.dispatchEvent(new Event('change', {bubles:true, cancelable: true}));
        usr_type_id.dispatchEvent(new Event('input', {bubles:true, cancelable: true}));
        document.getElementById('realBtn').click();
    });

    </script>
</div>