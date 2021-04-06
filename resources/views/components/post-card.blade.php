<div class="card post-card {{$alt ? 'post-card-alt' : ''}}">
    <img src="{{$post -> image}}" alt="Sample">
    <div class="card-body p-md-5">
        <h3>{{$post -> name}}</h3>

        <p>{{ $post->extract }} ...</p>
        <div class="custom-card-footer">
            <a href="{{ route('post', $post->slug) }}" class="btn btn-sm btn-custom-light">Read more</a>
        </div>
    </div>
</div>
