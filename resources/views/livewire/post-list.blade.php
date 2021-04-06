<div>
    @php
    $alt=FALSE;
    @endphp

    @foreach($posts as $post)
        
        <x-post-card :post="$post" :alt="$alt" />


        @php
        $alt = !$alt
        @endphp

    @endforeach
</div>
