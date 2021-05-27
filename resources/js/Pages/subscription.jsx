import React from "react";
import Layout from "../Components/Layout";


const Home = () => {
    

    return (

        <div className="main-content">
            <p>Hola Mundo!</p>
            <input type="text" id="SB" name="s"/>
        </div>

    );
};

Home.layout = (page) => <Layout children={page} title={"Health 101 - Subscription"} />;
export default Home;
