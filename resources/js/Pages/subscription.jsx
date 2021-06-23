import React from "react";
import Layout from "../Components/Layout";
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t, i18n } = useTranslation();

    return (

        <div className="main-content">
            <div id="mc_embed_signup">
                <form action="https://gmail.us6.list-manage.com/subscribe/post?u=9fca2ea7ed8f9b708512e7873&amp;id=ffc5e5c85c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"  target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
	                    <h2>{t('Subscribe')}</h2>
                        <p>{t('writeEmail')}</p>
                        <div >
	                        <input type="email"  name="EMAIL"  id="mce-EMAIL"></input>
                        </div>
	                    <div id="mce-responses" >
		                    <div  id="mce-error-response" ></div>
		                        <div  id="mce-success-response" ></div>
	                        </div>    
                            <div  aria-hidden="true"></div>
                                <div><input type="submit" name="subscribe" id="mc-embedded-subscribe"/></div>
                            </div>
                        
                </form>
            </div>

        </div>

    );
};

Home.layout = (page) => <Layout children={page} title={"Health 101 - Subscription"} />;
export default Home;
