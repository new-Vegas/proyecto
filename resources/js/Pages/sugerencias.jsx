import React, {useState} from "react";
import Layout from "../Components/Layout";
import { usePage } from "@inertiajs/inertia-react";
import PostCard from "../Components/PostCard";
import { useTranslation } from 'react-i18next';
import postsSeen from "../Components/seenPosts";

/**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    var disqus_config = function () {
    this.page.url = 'http://127.0.0.1:8000/sugerencias';  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = sugerencias; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };

    var chat = function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://proyectois.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    };



const Home = () => {
    let {posts} = usePage().props;
    const { t, i18n } = useTranslation();
    const [category, setCategory] = useState(document.CC);
    posts = posts[category];

    return (

        <div align='center' className="main-content">
           <img src="https://blog.total.es/wp-content/uploads/2020/07/iStock-1152176251_blog-650x460.jpg"
                ></img>
            <p> 
             <h3>Tu sugerencia es importate para nosotros, nos ayudarias a mejorar cada vez el contenido de la página.
            </h3>
            </p>
              {chat()}
            <div id="disqus_thread"></div>
                            <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
        </div>
    );
};

Home.layout = (page) => <Layout children={page} title={"Health 101"} />;
export default Home;
