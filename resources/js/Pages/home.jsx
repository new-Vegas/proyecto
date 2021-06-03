import React, {useState} from "react";
import Layout from "../Components/Layout";
import { usePage } from "@inertiajs/inertia-react";
import PostCard from "../Components/PostCard";
import { useTranslation } from 'react-i18next';

const Home = () => {
    let {posts} = usePage().props;
    const { t, i18n } = useTranslation();
    const [category, setCategory] = useState(document.CC);
    
    
    document.changedCat = function (cat, cat_id) {
        setCategory(cat);
    };

    posts = posts[category];
    
    
    return (
        <>
            <section className="hero">
                <div className="content">
                    <h3>Health 101</h3>
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
                {posts.filter(x=>!window.pc.includes(x.id)).reverse().map((p, i) => <PostCard id={p.id} key={i} alt={i%2==0} name_ES={p.name_ES} image={p.image} name={p.name} extract={(i18n.language === 'en' ? p.content : p.content_ES).split(' ').filter((_, i) => i < 20).join(" ")} slug={p.slug}></PostCard>)}            
                 <h3 className="text-uppercase mt-5 mb-4">{t('sugerencias')}</h3>
                <p>deja aqui tus sugerencias</p>
              <button type="submit" onClick={event =>  window.location.href='/sugerencias'}className="btn btn-sm btn-custom-light">Click here</button>
            </div>
            
        </>
    );
};

Home.layout = (page) => <Layout children={page} title={'Health 101'} />;
export default Home;
