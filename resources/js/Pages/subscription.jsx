import React from "react";
import Layout from "../Components/Layout";


const Home = () => {
    

    return (

        <div className="main-content">
            <div id="mc_embed_signup">
                <form action="https://uabc.us6.list-manage.com/subscribe/post?u=030b610020d1ae1879c1643e9&amp;id=6b65691459" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"  target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
	                    <h2>Subscribe</h2>
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
