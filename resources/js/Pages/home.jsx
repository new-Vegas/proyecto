import React, {useState} from "react";
import Layout from "../Components/Layout";
import { usePage } from "@inertiajs/inertia-react";
import PostCard from "../Components/PostCard";
import { useTranslation } from 'react-i18next';
import postsSeen from "../Components/seenPosts";

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
    return RB;
}

const Home = () => {
    let {posts} = usePage().props;
    const { t, i18n } = useTranslation();
    const [category, setCategory] = useState(document.CC);
    const [RBusqueda, setRBusqueda] = useState([]);
    
    localStorage.setItem('PC',0);

    document.changedCat = function (cat, cat_id) {
        setCategory(cat);
    };

    posts = posts[category];

    var callInBusqueda = function (){
        setRBusqueda(busqueda(posts,(document.getElementById("SB") !=null? document.getElementById("SB").value : [])));
    }

    var callOutBusqueda = function (){
        var URL = "http://www.google.com/search?q=";
        var value = document.getElementById("SB") !=null? document.getElementById("SB").value : [];
        var search = URL.concat(value); 
        window.open(search).focus();
    }
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    var disqus_config = function () {
    this.page.url = 'http://127.0.0.1:8000/';  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = "PAGE_IDENTIFIER"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };

    var chat = function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://proyectois.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    };
    
    return (
        <>
            <section className="hero">
                <div className="content">
                    <h3>Health 101</h3>
                    <p>{t('hero.text')}</p>
                </div>
            </section>

            <div className="container mt-4">
            <h3 className="text-uppercase mt-5 mb-4">{t('search')}</h3>
                <label htmlFor="header-search">
                    <span className="visually-hidden">Search blog posts</span>
                </label>
                <input type="text" id="SB" placeholder={t('searchBar')} name="s" onKeyUp={() => callInBusqueda()}/>
                <button type="submit" onClick={() =>callInBusqueda()} className="btn btn-sm btn-custom-light">Search</button>
                <button type="submit" onClick={() =>callOutBusqueda()} className="btn btn-sm btn-custom-light">Search in Google</button>
                {posts.filter(x=>RBusqueda.includes(x.id)).map((p, i) => <PostCard id={p.id} key={i} alt={i%2==0} name_ES={p.name_ES} image={p.image} name={p.name} extract={(i18n.language === 'en' ? p.content : p.content_ES).split(' ').filter((_, i) => i < 20).join(" ")} slug={p.slug} ></PostCard>).reverse()}
                
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

                {chat()}
                <p>{t('about.text.4')}</p>
                <h2 className="text-uppercase mt-5 mb-4">{t('last post')}</h2>
                {posts.filter(x=>!window.pc.includes(x.id)).map((p, i) => <PostCard id={p.id} key={i} alt={i%2==0} name_ES={p.name_ES} image={p.image} name={p.name} extract={(i18n.language === 'en' ? p.content : p.content_ES).split(' ').filter((_, i) => i < 20).join(" ")} slug={p.slug}></PostCard>)}            
                <div id="disqus_thread"></div>
                <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
            </div>
        </>
    );
};

Home.layout = (page) => <Layout children={page} title={'Home'} />;
export default Home;
