<x-app-layout>
<link rel="stylesheet" href="{{ asset('css/tabulator.min.css') }}">
<span id="data" class="hidden" data-questions="{{$questions}}" data-responses="{{json_encode($responses)}}"></span>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Survey Responses') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div id="questions-container"></div>
    </div>


    <!-- React JS -->
    <script src="{{ asset('js/moment.min.js') }}"></script>
    <script src="{{ asset('js/tabulator.min.js') }}"></script>
    <script src="{{ asset('js/vendor/Chart.min.js') }}"></script>
    <script src="{{ asset('js/vendor/palette.js') }}"></script>
    <script src="{{ asset('js/survey-responses.js') }}"></script>
    <script src="https://use.fontawesome.com/5de7dce74d.js"></script>

</x-app-layout>