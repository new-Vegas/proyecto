import React from 'react';

window.pc = [];
export default function postsSeen (posts){
    var i, seen=0;
    for(i = 0; i < pc.length; i++)
        if(pc[i]==posts.id)seen++;
    if(seen!=1)pc[pc.length++]=posts.id;
    console.log(pc)
}