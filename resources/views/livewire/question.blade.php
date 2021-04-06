<h2 class="font-semibold text-xl text-gray-800 leading-tight mb-3">Preview</h2>

@foreach (json_decode($config) as $elm)
                            <div class="mb-4">
                                <label for="chEnabled" class="block text-gray-700 text-sm font-bold mb-2">{{$elm->caption}}</label>
                                @switch(strtolower($elm->type))
                                    @case('textarea')
                                        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                        {{property_exists($elm, 'required') && $elm->required ? 'required':''}}></textarea>
                                        @break

                                    @case('select')
                                        <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                        {{property_exists($elm, 'required') && $elm->required ? 'required':''}}>
                                            @foreach($elm->options as $opt)
                                                <option>{{$opt}}</option>
                                            @endforeach
                                        </select>
                                        @break

                                    @case('number')
                                        <input type="number" 
                                            {{$elm->min ? 'min="' . $elm->min . '"' : ''}} 
                                            {{$elm->max ? 'max="' . $elm->max . '"' : ''}} 
                                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                            {{property_exists($elm, 'required') && $elm->required ? 'required':''}}
                                            >
                                        @break
                                    
                                    @case('text')
                                        <input type="text" 
                                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                            {{property_exists($elm, 'required') && $elm->required ? 'required':''}}
                                            >
                                        @break

                                    @case('check')
                                        <input type="checkbox" class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" wire:model="enabled" >
                                        @break

                                    @case('checkbox')
                                        <input type="checkbox" class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" wire:model="enabled" >
                                        @break

                                    
                                    @default
                                        <p style="color: red;"><b>Invalid input type</b></p>
                                        @break
                                @endswitch
                    
                                @error('config') <span class="text-red-500">{{ $message }}</span>@enderror
                            </div>
                        @endforeach