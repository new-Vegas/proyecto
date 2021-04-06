import React from "react";
import Layout from "../Components/Layout";
import { usePage } from "@inertiajs/inertia-react";
import { useTranslation } from 'react-i18next';
import { EncuestaContestar } from "../Components/EncuestaContestar";

const Survey = () => {
    const {surveyData: {survey}} = usePage().props;
    const { t } = useTranslation();

    return (
        <div className="main-content mt-4">
            <h1>{survey.name}</h1>
            <EncuestaContestar conf={JSON.parse(survey.config)}></EncuestaContestar>
        </div>
    );
};

Survey.layout = (page) => <Layout children={page} title={"Health 101 - " + page.props.surveyData.survey.name} />;
export default Survey;

/*
aviableFrom: "2021-02-21 16:59:50"
aviableTo: "2021-02-21 16:59:50"
config: "[{"type": "checkbox", "label": "Is this the only question of this survey?", "required": true}]"
created_at: "2021-02-21T16:59:56.000000Z"
enabled: 0
id: 11
image: "#"
name: "Radom title 4"
public: 0
responseLimit: -1
slug: "radom-title-4-1"
updated_at: "2021-02-21T17:34:51.000000Z"
user_id: 6
*/