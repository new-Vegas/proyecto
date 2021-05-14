import React from 'react'
import postsSeen from "../Components/seenPosts";

export default function PostMini({name, extract, slug, image}) {
    
    let sandbox = document.createElement('div');
    sandbox.innerHTML = extract;
    extract = sandbox.innerText;

    return (
        <div className="card post-card sub-post ms-4">
    <img src={image} alt="similar post image"></img>
    <div className="card-body">
        <h3>{name}</h3>
        <p>{extract} ...</p>
        <div className="custom-card-footer">
            <a href={slug} className="btn btn-sm btn-custom-light" onClick={()=>postsSeen(props)}>Read more</a>
        </div>
    </div>
</div>
    )
}
