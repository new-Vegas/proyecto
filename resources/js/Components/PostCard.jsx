import React from 'react';
import {InertiaLink} from '@inertiajs/inertia-react';
import {useTranslation} from 'react-i18next';
import postsSeen from "../Components/seenPosts";

export default function PostCard(props) {
    const { i18n, t } = useTranslation();
    const {id, alt, image, name, name_ES, extract, slug} = props;

    function MyComponent() {
        return <div dangerouslySetInnerHTML={{__html: extract}} />;
    }

    return (
        <div className={`card post-card ${alt ? 'post-card-alt' : ''}`}>
            <div className="image-container">
                <img src={image} alt="Sample"></img>
            </div>
            <div className="card-body px-md-5 pb-md-4 pt-md-5">
                <h3>{i18n.language === 'en' ? name : name_ES}</h3>

                <MyComponent></MyComponent>
                <div className="custom-card-footer">
                    <InertiaLink href={`/post/${slug}`} className="btn btn-sm btn-custom-light" onClick={()=>postsSeen(props)}>{t('Read more')}</InertiaLink>
                </div>
            </div>
        </div>
    );
}
