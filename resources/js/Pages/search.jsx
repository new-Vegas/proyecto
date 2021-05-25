import React, {useState} from "react";
import Layout from "../Components/Layout";
import { usePage } from "@inertiajs/inertia-react";
import PostCard from "../Components/PostCard";
import { useTranslation } from 'react-i18next';
import { InertiaLink } from "@inertiajs/inertia-react";
let searchOnce = false;
/* window.dayPost = 0; */

var fetch = function (variable, clave) {
    var i, aux1, aux2, result=0;
    aux1 = variable.toLowerCase().split(/[!,?,., ,:,;,',",\,]/);
    aux2 = clave.toLowerCase();
    for(i=1; i<aux1.length;i++){
        if(aux2.localeCompare(aux1[i])==0){result = 1; break;}
    }
    return result;
}

var busqueda = function(posts, clave){
    var i, j=0, RB=[];
    for (i = 0; i < posts.length ; i++) {
        /* if(busqueda(posts[i].name,clave)==1){RB[j]=posts[i].id;j++}
        else if(busqueda(posts[i].name_ES,clave)==1){RB[j]=posts[i].id;j++} */
        if(fetch(posts[i].content,clave)==1){RB[j]=posts[i].id;j++;}
        else if(fetch(posts[i].content_ES,clave)==1){RB[j]=posts[i].id;j++;}
    }
    console.log(RB);
    searchOnce = true;
    return RB;
}

/* var randomPost = function(){
    window.dayPost = 0;
} */

const Home = () => {
    const { t, i18n } = useTranslation();
    let {posts} = usePage().props;
    const [category, setCategory] = useState(document.CC);
    const [RBusqueda, setRBusqueda] = useState([]);
    /* const [postRand, setpostRand] = useState(); */
    posts = posts[category];

    if(!searchOnce)setRBusqueda(busqueda(posts,(window.searchVal != null ? window.searchVal:[])));
    /* if(!searchOnce)setpostRand(window.dayPost); */
    return (

        <div className="main-content">

        <nav aria-label="breadcrumb" className="mt-4 mt-md-5">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><InertiaLink href="/">{t('home')}</InertiaLink></li>
                <li className="breadcrumb-item active" aria-current="page">{t('search')}</li>
            </ol>
        </nav>

        <div className="row">
            {/* {posts.filter(x=>postRand.includes(x.id)).map((p, i) => <PostCard id={p.id} key={i} alt={i%2==0} name_ES={p.name_ES} image={p.image} name={p.name} extract={(i18n.language === 'en' ? p.content : p.content_ES).split(' ').filter((_, i) => i < 20).join(" ")} slug={p.slug}></PostCard>)} */}
            {posts.filter(x=>RBusqueda.includes(x.id)).map((p, i) => <PostCard id={p.id} key={i} alt={i%2==0} name_ES={p.name_ES} image={p.image} name={p.name} extract={(i18n.language === 'en' ? p.content : p.content_ES).split(' ').filter((_, i) => i < 20).join(" ")} slug={p.slug}></PostCard>)}
        </div>
    </div>
    );
};

Home.layout = (page) => <Layout children={page} title={"Health 101 - Search"} />;
export default Home;

