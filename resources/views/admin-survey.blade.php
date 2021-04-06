<x-app-layout>
<link rel="stylesheet" href="{{ asset('css/tabulator.min.css') }}">

    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Surveys') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <livewire:survey-table>
            </div>
        </div>
    </div>


    <!-- React JS -->
    <script src="{{ asset('js/moment.min.js') }}"></script>
    <script src="{{ asset('js/tabulator.min.js') }}"></script>
    <script src="https://use.fontawesome.com/5de7dce74d.js"></script>

</x-app-layout>