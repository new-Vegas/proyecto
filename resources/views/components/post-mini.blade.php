<div class="card post-card sub-post ms-4">
    <img src="{{$spost -> image}}" alt="similar post image">
    <div class="card-body">
        <h3>{{ $spost -> name }}</h3>
        <p>{{ $spost->miniextract }} ...</p>
        <div class="custom-card-footer">
            <a href="{{ route('post', $spost->slug) }}" class="btn btn-sm btn-custom-light">Read more</a>
        </div>
    </div>
</div>
