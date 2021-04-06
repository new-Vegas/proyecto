<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <!-- <x-jet-welcome /> -->

                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg px-4 py-4">
                    <h2 class="font-semibold text-xl text-gray-800 leading-tight text-center mb-3">Number of visits</h2>
                    <canvas id="visitsContainer" height="100" class="mb-3"></canvas>
                    <h2 class="mt-3 font-semibold text-xl text-gray-800 leading-tight text-center mb-3">Today visits distribution</h2>
                    <canvas id="pathsContainer" height="110" class="mb-3"></canvas>
                    <h2 class="mt-4 font-semibold text-xl text-gray-800 leading-tight text-center mb-3">Languague distribution</h2>
                    <canvas id="langsContainer" height="80" class="mb-3"></canvas>
                </div>


            </div>
        </div>
    </div>

    <script src="{{ asset('js/vendor/Chart.min.js') }}"></script>
    <script src="{{ asset('js/vendor/palette.js') }}"></script>
    <span id="visits" data-visits="{{json_encode($today)}}"></span>
    <span id="paths" data-paths="{{json_encode($paths)}}"></span>
    <span id="langs" data-langs="{{json_encode($langs)}}"></span>
    <script src="{{ asset('js/charts-homepage.js') }}"></script>
</x-app-layout>
