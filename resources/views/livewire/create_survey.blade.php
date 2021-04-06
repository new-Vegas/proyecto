<div class="fixed z-10 inset-0 overflow-y-auto ease-out duration-400">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>?
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <form id="surveyForm">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="">
                        <h2 class="font-semibold text-xl text-gray-800 leading-tight mb-3">General Information</h2>
                        <input class="hidden" type="number" wire:model="user_id">
                        
                        <div class="mb-4">
                            <label for="txtSTitle" class="block text-gray-700 text-sm font-bold mb-2">Title:</label>
                            <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hidden" id="txtSTitle" placeholder="Enter Title" wire:model="name">
                            <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="txtVTitle" placeholder="Enter Title">
                            @error('name') <span class="text-red-500">{{ $message }}</span>@enderror
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Aviable From:</label>
                            <input id="txtSAvFrom" type="datetime" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hidden" wire:model="aviableFrom">
                            <input id="txtVAvFrom" type="datetime" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            @error('aviableFrom') <span class="text-red-500">{{ $message }}</span>@enderror
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Aviable To:</label>
                            <input id="txtSAvTo" type="datetime" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hidden" wire:model="aviableTo">
                            <input id="txtVAvTo" type="datetime" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            @error('aviableTo') <span class="text-red-500">{{ $message }}</span>@enderror
                        </div>

                        <div class="mb-4">
                            <label for="chVEnabled" class="block text-gray-700 text-sm font-bold mb-2">Enabled:</label>
                            <input id="chSEnabled" type="checkbox" class="hidden shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="chEnabled" wire:model="enabled" >
                            <input id="chVEnabled" type="checkbox" class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="chEnabled" >
                            @error('enabled') <span class="text-red-500">{{ $message }}</span>@enderror
                        </div>

                        <h2 class="font-semibold text-xl text-gray-800 leading-tight mb-3">Questions</h2>

                        <div class="mb-4 hidden">
                            <textarea rows="5" id="inpConfig" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" wire:model="config"></textarea>
                            @error('config') <span class="text-red-500">{{ $message }}</span>@enderror
                        </div>

                        <div id="questionsContainer"></div>

                        <button id="addQuestionBtn" type="button" class="mt-2 mb-3 inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                            + Add question
                        </button>

                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">

                    <button id="btnSubmitO" class="hidden" wire:click.prevent="store()" type="button"></button>

                    <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                        <button id="btnSubmit" type="button" class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                        Save
                        </button>
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
</div>
<script>
const questionCard = () => `
<div class="question bg-gray-200 rounded p-3 mt-2">
    <a href="javascript: void(0);" style="float:right;font-size:1.1em;">x</a>
    <div class="mb-4 mt-1">
        <label class="block text-gray-700 text-sm font-bold mb-2">Question:</label>
        <input txtLabel type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Question text here . . .">
    </div>
    
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Response type:</label>
        <div class="relative inline-block w-full text-gray-700">
            <select typeSelect class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="checkbox">Yes/No</option>
                <option value="multi">Multiple Options</option>
            </select>
        </div>
    </div>

    <div class="flex flex-wrap-mx-2 space-y-4 md:space-y-0 mb-3">
        <div class="w-full px-2 md:w-1/2">
            <label class="block text-gray-700 text-sm font-bold mb-2">Required:</label>
            <input chRequired type="checkbox" class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="hidden w-full px-2 md:w-1/2">
            <label class="block text-gray-700 text-sm font-bold mb-2">Limit to one option:</label>
            <input chUniqueOption type="checkbox" class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
    </div>

    <div optionsSection class="hidden custom-config bg-gray-400" style="padding: 0.5em;border-radius: 0.5em;">
        <label class="block text-gray-700 text-sm font-bold mb-2">Options:</label>
        
        <input inpOption class="mb-1 w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="First option"/>
        <input inpOption class="mb-1 w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Second option"/>

        <div class="options-container"></div>

        <button btnNewOption type="button" class="mt-2 inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5">
            + Add Option
        </button>
    </div>
</div>`;

const option = () => `
<div txtOption class="relative mb-1">
    <input inpOption class="w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="New Option"/>
    <a class="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-gray-600 rounded-r-lg hover:bg-gray-500 focus:bg-gray-700">x</a>
</div>`;

document.getElementById('addQuestionBtn').addEventListener('click', function() {
    let elm = document.createElement('div');
    elm.innerHTML = questionCard();
    document.getElementById('questionsContainer').append(elm);

    let questions = document.querySelectorAll('div.question'),
    q = questions[questions.length-1];

    //questions.forEach(q => {
    const lbl = q.querySelector('[txtLabel]'),
    typeSelector = q.querySelector('[typeSelect]'),
    required = q.querySelector('[chRequired]'),
    optLimit = q.querySelector('[chUniqueOption]'),
    optionsSection = q.querySelector('[optionsSection]'),
    optionsContainer = q.querySelector('.options-container'),
    btnAddOption = q.querySelector('[btnNewOption]');

    q.querySelector('a').addEventListener('click', function(e) {
        e.currentTarget.parentElement.remove();
    })

    typeSelector.addEventListener('change', function() {
        const typ = typeSelector.value;
        if (!typ || typ != 'multi') {
            optionsSection.classList.add('hidden');
            optLimit.parentElement.classList.add('hidden');
            return;
        }

        switch(typ) {
            case 'multi':
                optionsSection.classList.remove('hidden');
                optLimit.parentElement.classList.remove('hidden');
                break;
        }

        btnAddOption.addEventListener('click', function() {

            let div = document.createElement('div');
            div.innerHTML = option();
            optionsContainer.append(div);

            const rmList = optionsContainer.querySelectorAll('a'),
            e = rmList[rmList.length-1];

            //rmList.forEach(e => {
            e.addEventListener('click', function() {
                e.parentElement.parentElement.remove();
            });
            //});
        });
    });
    //});
});


function collectConfig() {
    let questions = document.querySelectorAll('div.question'),
    config = [];

    questions.forEach(q => {
        const lbl = q.querySelector('[txtLabel]'),
        typeSelector = q.querySelector('[typeSelect]'),
        required = q.querySelector('[chRequired]'),
        optLimit = q.querySelector('[chUniqueOption]'),
        optionsSection = q.querySelector('[optionsSection]'),
        optionsContainer = q.querySelector('.options-container'),
        btnAddOption = q.querySelector('[btnNewOption]');

        const tp = typeSelector.value.trim();
        let mapp = [];
        optionsSection.querySelectorAll('input[type="text"').forEach(e => {
            mapp.push(e.value);
        });

        let current = {
            label: lbl.value,
            type:  tp == 'multi' ? (optLimit.checked ? 'radio' : 'checkbox') : tp,
            required: required.checked,
            options: tp.toLowerCase() === 'multi' ? mapp : undefined,
        };
        config.push(current);
    });

    return JSON.stringify(config);
}

let txtTitleH = document.getElementById('txtSTitle'),
        txtTitleV = document.getElementById('txtVTitle'),
        txtSAvFrom = document.getElementById('txtSAvFrom'),
        txtVAvFrom = document.getElementById('txtVAvFrom'),
        txtSAvTo = document.getElementById('txtSAvTo'),
        txtVAvTo = document.getElementById('txtVAvTo'),
        chSEnabled = document.getElementById('chSEnabled'),
        chVEnabled = document.getElementById('chVEnabled');

    txtTitleV.value = txtTitleH.value;
    txtVAvFrom.value = txtSAvFrom.value;
    txtVAvTo.value = txtSAvTo.value;
    chVEnabled.checked = chSEnabled.checked;

document.getElementById('btnSubmit').addEventListener('click', function (e) {
    let i = document.getElementById('inpConfig');
    i.value = collectConfig();

    let ev = new Event('input', {bubles:true, cancelable: true});
    i.dispatchEvent(ev);


    let txtTitleH = document.getElementById('txtSTitle'),
        txtTitleV = document.getElementById('txtVTitle'),
        txtSAvFrom = document.getElementById('txtSAvFrom'),
        txtVAvFrom = document.getElementById('txtVAvFrom'),
        txtSAvTo = document.getElementById('txtSAvTo'),
        txtVAvTo = document.getElementById('txtVAvTo'),
        chSEnabled = document.getElementById('chSEnabled'),
        chVEnabled = document.getElementById('chVEnabled');

    txtTitleH.value = txtTitleV.value;
    txtTitleH.dispatchEvent(new Event('input', {bubles:true, cancelable: true}));
    
    txtSAvFrom.value = txtVAvFrom.value;
    txtSAvFrom.dispatchEvent(new Event('input', {bubles:true, cancelable: true}));
    
    txtSAvTo.value = txtVAvTo.value;
    txtSAvTo.dispatchEvent(new Event('input', {bubles:true, cancelable: true}));
    
    chSEnabled.checked = chVEnabled.checked;
    chSEnabled.dispatchEvent(new Event('input', {bubles:true, cancelable: true}));
    chSEnabled.dispatchEvent(new Event('change', {bubles:true, cancelable: true}));
    console.log(chSEnabled.checked, chVEnabled.checked);

    document.getElementById('btnSubmitO').click();
});

function preloadConf() {
    const container = document.getElementById('questionsContainer');
    let conf = document.getElementById('inpConfig').value.trim();
    conf = conf ? JSON.parse(conf) : undefined;

    console.log(conf);

    if (!conf) return;

    conf.forEach(question => {
        let q = document.createElement('div');
        q.innerHTML = questionCard();
        document.getElementById('questionsContainer').append(q);

        const lbl = q.querySelector('[txtLabel]'),
            typeSelector = q.querySelector('[typeSelect]'),
            required = q.querySelector('[chRequired]'),
            optLimit = q.querySelector('[chUniqueOption]'),
            optionsSection = q.querySelector('[optionsSection]'),
            optionsContainer = q.querySelector('.options-container'),
            btnAddOption = q.querySelector('[btnNewOption]');

        q.querySelector('a').addEventListener('click', function(e) {
            e.currentTarget.parentElement.remove();
        });

        typeSelector.addEventListener('change', function() {
            const typ = typeSelector.value;
            if (!typ || typ != 'multi') {
                optionsSection.classList.add('hidden');
                optLimit.parentElement.classList.add('hidden');
                return;
            }

            switch(typ) {
                case 'multi':
                    optionsSection.classList.remove('hidden');
                    optLimit.parentElement.classList.remove('hidden');
                    break;
            }
        });

        btnAddOption.addEventListener('click', function() {

            let div = document.createElement('div');
            div.innerHTML = option();
            optionsContainer.append(div);

            const rmList = optionsContainer.querySelectorAll('a'),
            e = rmList[rmList.length-1];

            //rmList.forEach(e => {
            e.addEventListener('click', function() {
                e.parentElement.parentElement.remove();
            });
            //});
        });

        // fill data
            //events
        let inputEv = new Event('input', {bubles:true, cancelable: true}),
        changeEv = new Event('change', {bubles:true, cancelable: true}),
        clickEv = new Event('click', {bubles:true, cancelable: true});

            //useful info
        const hasOptions= question.options && typeof(question.options) === 'object' && question.options.length;

            // add data and update card
        lbl.value = question.label || question.caption;
        lbl.dispatchEvent(inputEv);
        question.type = ['radio', 'select'].includes(question.type) ? 'multi' : question.type;
        if (question.type === 'checkbox' && hasOptions) {
            question.type = 'multi';
        }
        switch (question.type) {
            case 'textarea':
                question.type = 'text';
                break;
            case 'check':
                question.type += 'box';
                break;
        }

        typeSelector.value = question.type;
        typeSelector.dispatchEvent(changeEv);
        required.checked = question.required;
        optLimit.checked = question.type === 'radio';

        if (hasOptions) {
            question.options.forEach((o, i) => {
                if (i>1) {
                    btnAddOption.dispatchEvent(clickEv);
                }
                optionsSection.querySelectorAll('input[type="text"]')[i].value = o;
            });
        }
    });
}
preloadConf();
</script>