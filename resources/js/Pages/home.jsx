import React, {useState} from "react";
import Layout from "../Components/Layout";
import { usePage } from "@inertiajs/inertia-react";
import PostCard from "../Components/PostCard";
import { useTranslation } from 'react-i18next';
import lunr from "lunr";

var wordFilter = function (token) {
    return token.toString().split(" ").map(function (str) {
      return token.clone().update(function () { return str })
    })
}

const Home = () => {
    let {posts} = usePage().props;
    const { t, i18n } = useTranslation();
    const [category, setCategory] = useState(document.CC);
    var documents=[], elemento={};
    var i;
    document.changedCat = function (cat, cat_id) {
        setCategory(cat);
    };

    posts = posts[category];
    
    for (i = 0; i <posts.length ; i++) {
        documents[i]=[{
            id:posts[i].id,
            names:posts[i].names,
            names_ES:posts[i].names_ES,
            slug:posts[i].slug,
            content:posts[i].content,
            content_ES:posts[i].content_ES
        }];
        console.log();
    }

    const idx = lunr(function(){
        this.ref("id");
        this.field("names");
        this.field("name_ES");
        this.field("slug");
        this.field("content");
        this.field("content_ES");

        documents.forEach(function (doc) { this.add(doc) }, this)
    });

    const r = idx.search("SINOCARE");
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
            </div>
        </>
    );
};

Home.layout = (page) => <Layout children={page} title={'Home'} />;
export default Home;
