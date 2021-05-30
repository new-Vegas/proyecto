import React from "react";
import Layout from "../Components/Layout";
import { usePage, InertiaLink } from "@inertiajs/inertia-react";
import { useTranslation } from 'react-i18next';
import PostMini from "../Components/PostMini";


/**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    var disqus_config = function () {
    this.page.url = 'http://127.0.0.1:8000/post/'+post.slug;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = post.slug; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };

    var chat = function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://proyectois.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    };



const Home = () => {
    const {p, similar} = usePage().props;
    const { t, i18n } = useTranslation();
    let post = p.post;
    console.log(post.views);
    post.setViews;
    return (

        <div className="main-content">

        <nav aria-label="breadcrumb" className="mt-4 mt-md-5">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><InertiaLink href="/">{t('home')}</InertiaLink></li>
                <li className="breadcrumb-item active" aria-current="page">{i18n.language === 'en' ? post.name : post.name_ES}</li>
            </ol>
        </nav>

        <div className="row">

            <div className="container mt-4 mt-md-1 col-12 col-lg-8">
                <section className="hero">
                    <img src={post.image}></img>
                </section>
                  {chat()}
                <div className="post-card details p-5">
                    <h3>{i18n.language === 'en' ? post.name : post.name_ES}</h3>
                    <div dangerouslySetInnerHTML={{__html: i18n.language === 'en' ? post.content : post.content_ES}} />
                </div>
            </div>

            <div className="col-4" id="left">

                {similar.map((s, i) => <PostMini key={i} name={i18n.language === 'en' ? s.name : s.name_ES} slug={s.slug} image={s.image} extract={(i18n.language === 'en' ? s.content : s.content_ES).split(' ').filter((_, i) => i < 10).join(" ")}></PostMini>)}

            </div>
            <div id="disqus_thread"></div>
                            <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
            <div className="container col-12 d-none">

                {/* <form action="" className="mt-5 mb-5 message">
                    <div className="row m-0">

                        <div className="col-10">
                            <input type="text" className="form-control" placeholder="Comment here . . . "></input>
                        </div>

                        <div className="col-1">
                            <button type="submit" className="btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat" viewBox="0 0 16 16">
                                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>

                <div className="card d-flex flex-row mx-4 mt-4 mt-md-3 vertical-align-center p-3 p-md-2 comment">
                    <img src="https://www.pinclipart.com/picdir/middle/148-1486972_mystery-man-avatar-circle-clipart.png" alt="user"></img>
                    <p>
                        Martin - Hello!
                    </p>
                </div>

                <div className="card d-flex flex-row mx-4 mt-4 mt-md-2 vertical-align-center p-3 p-md-2 comment">
                    <img src="https://www.pinclipart.com/picdir/middle/148-1486972_mystery-man-avatar-circle-clipart.png" alt="user"></img>
                    <p>
                        Martin - Hello!
                    </p>
                </div> */}
            </div>
        </div>
    </div>
    );
};

Home.layout = (page) => <Layout children={page} title={"Health 101 - " + page.props.p.post.name} />;
export default Home;
