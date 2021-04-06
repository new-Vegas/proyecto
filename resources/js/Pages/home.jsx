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
                    {/* <h5>'messages.welcome'</h5> */}
                    <p>{t('hero.text')}</p>
                </div>
            </section>

            <div className="container mt-4">
                <h2 className="text-uppercase mt-5 mb-4">{t('last post')}</h2>
                
                {posts.map((p, i) => <PostCard key={i} alt={i%2==0} name_ES={p.name_ES} image={p.image} name={p.name} extract={(i18n.language === 'en' ? p.content : p.content_ES).split(' ').filter((_, i) => i < 20).join(" ")} slug={p.slug}></PostCard>)}
            </div>
        </>
    );
};

Home.layout = (page) => <Layout children={page} title={'Home'} />;
export default Home;
