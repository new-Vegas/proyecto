import React, {useState} from "react";
import Layout from "../Components/Layout";
import { usePage, InertiaLink } from "@inertiajs/inertia-react";
import PostCard from "../Components/PostCard";
import { useTranslation } from 'react-i18next';

const Category = () => {
    const {posts, cat} = usePage().props;
    const {category} = cat;
    const { t, i18n } = useTranslation();

    const [utype, setUtype] = useState(document.CCId);

    document.changedCat = function (cat, cat_id) {
        document.CCId = cat_id;
        document.CC = cat;
        setUtype(cat_id);
    };

    return (
    <div className="main-content">
        <nav aria-label="breadcrumb" className="mt-4 mt-md-5">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><InertiaLink href="/">{t('home')}</InertiaLink></li>
                <li className="breadcrumb-item active">
                    <span className={i18n.language != 'en' ? 'hidden' : ''}>{category.EN_name}</span>
                    <span className={i18n.language != 'es' ? 'hidden' : ''}>{category.ES_name}</span>
                </li>
            </ol>
        </nav>

        <div className="">

            <h2 className="text-uppercase mt-5 mb-4">
                <span className={i18n.language != 'en' ? 'hidden' : ''}>{category.EN_name}</span>
                <span className={i18n.language != 'es' ? 'hidden' : ''}>{category.ES_name}</span>
            </h2>

            {posts.filter(p => p.usr_type_id === utype).map((p, i) => <PostCard key={i} alt={i%2==0} name_ES={p.name_ES} image={p.image} name={p.name} extract={(i18n.language === 'en' ? p.content : p.content_ES).split(' ').filter((_, i) => i < 20).join(" ")} slug={p.slug}></PostCard>)}
        </div>
    </div>
    );
};

Category.layout = (page) => <Layout children={page} title={"Health 101 - " + page.props.cat.category.EN_name} />;
export default Category;