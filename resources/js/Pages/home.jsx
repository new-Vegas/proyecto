import React, {useState} from "react";
import Layout from "../Components/Layout";
import { usePage } from "@inertiajs/inertia-react";
import PostCard from "../Components/PostCard";
import { useTranslation } from 'react-i18next';

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
        console.log('ID:' + posts[i].id);
        /* if(busqueda(posts[i].name,clave)==1){RB[j]=posts[i].id;j++}
        else if(busqueda(posts[i].name_ES,clave)==1){RB[j]=posts[i].id;j++} */
        if(fetch(posts[i].content,clave)==1){RB[j]=posts[i].id;j++;}
        else if(fetch(posts[i].content_ES,clave)==1){RB[j]=posts[i].id;j++;}
    }
    console.log(RB);
    return RB;
}

const Home = () => {
    let {posts} = usePage().props;
    const { t, i18n } = useTranslation();
    const [category, setCategory] = useState(document.CC);
    const [RBusqueda, setRBusqueda] = useState(sessionStorage.getItem("RBusqueda")!=null ? sessionStorage.getItem("RBusqueda").split(',').map(x=>+x) : []);
    document.changedCat = function (cat, cat_id) {
        setCategory(cat);
    };

    posts = posts[category];

    var auxFunction = function (){
        setRBusqueda(busqueda(posts,(document.getElementById("SB") !=null? document.getElementById("SB").value : [])));
        sessionStorage.setItem("RBusqueda",RBusqueda);
    }

    return (
        <>
            <section className="hero">
                <div className="content">
                    <h3>Health 101</h3>
                    {/* <h5>'messages.welcome'</h5> */}
                    <p>{t('hero.text')}</p>
                </div>
            </section>

            <div className="container mt-4">
                <h3 className="text-uppercase mt-5 mb-4">{t('about')}</h3>
                <p>{t('about.text.1')}</p>
                <p>{t('about.text.2')}</p>
                <p>{t('about.text.3')}</p>
                <ul>
                    <li>- {t('about.list.1')}</li>
                    <li>- {t('about.list.2')}</li>
                    <li>- {t('about.list.3')}</li>
                    <li>- {t('about.list.4')}</li>
                    <li>- {t('about.list.5')}</li>
                </ul>

                <p>{t('about.text.4')}</p>
                <h2 className="text-uppercase mt-5 mb-4">{t('last post')}</h2>
                {posts.map((p, i) => <PostCard key={i} alt={i%2==0} name_ES={p.name_ES} image={p.image} name={p.name} extract={(i18n.language === 'en' ? p.content : p.content_ES).split(' ').filter((_, i) => i < 20).join(" ")} slug={p.slug}></PostCard>)}
                <h3 className="text-uppercase mt-5 mb-4">{t('search')}</h3>
                <label htmlFor="header-search">
                    <span className="visually-hidden">Search blog posts</span>
                </label>
                <input
                    type="text"
                    id="SB"
                    placeholder="Search blog posts"
                    name="s" 
                    onKeyPress={() => auxFunction()}
                />
                <button type="submit" onClick={() => auxFunction()}>Search</button>
                {posts.filter(x=>RBusqueda.includes(x.id)).map((p, i) => <PostCard key={i} alt={i%2==0} name_ES={p.name_ES} image={p.image} name={p.name} extract={(i18n.language === 'en' ? p.content : p.content_ES).split(' ').filter((_, i) => i < 20).join(" ")} slug={p.slug}></PostCard>)}
                {console.log(RBusqueda)}
            </div>
        </>
    );
};

Home.layout = (page) => <Layout children={page} title={'Home'} />;
export default Home;
