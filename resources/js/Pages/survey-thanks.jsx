import React from "react";
import Layout from "../Components/Layout";
import { usePage, InertiaLink } from "@inertiajs/inertia-react";
import { useTranslation } from 'react-i18next';
const Survey = () => {
    const { t } = useTranslation();

    return (
        <div className="main-content my-5">
            <h1 className="my-5">{t('thanks-msg')}</h1>
            <div className="d-flex justify-content-center my-5">
                <InertiaLink href="/" className="btn btn-outline-success">{"< " + t('home')}</InertiaLink>                
            </div>
        </div>
    );
};

Survey.layout = (page) => <Layout children={page} title="Health 101" />;
export default Survey;