import React, { useEffect, useState } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { useTranslation } from 'react-i18next';
import { usePage } from "@inertiajs/inertia-react";

window.searchVal = '';

export default function Layout({ title, children }) {

    useEffect(() => {
        document.title = title;
    }, [title]);

    const { t, i18n } = useTranslation(),
        {types, categories, loggedIn} = usePage().props,
        useTypes = !document.location.pathname.includes('/post/') && !document.location.pathname.includes('/survey/');

    let [currentType , setcurrentType] = useState(types && types[0] ? types[0].name : '');
    document.CC = currentType;
    document.CCId = types[0].id;

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
    }

    const setCategory = (cat, cat_id) => {
        if (useTypes) {
            document.CCId = cat_id;
            document.changedCat(cat, cat_id);
            setcurrentType(cat);
        }
    };

    const logOut = function () {
        document.querySelector('a.btnLogout').click();
    };

    var setsearchVal = function (){
        window.searchVal = document.getElementById("SB")!=null?document.getElementById("SB").value : '';
    }

    var callOutBusqueda = function (){
        var URL = "http://www.google.com/search?q=";
        var value = document.getElementById("SB") !=null? document.getElementById("SB").value : [];
        var search = URL.concat(value); 
        window.open(search).focus();
    }

    return (
            <div className="custom-container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <InertiaLink
                            className="navbar-brand"
                            href="\"
                        >
                            Come balanceado
                        </InertiaLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav me-auto">
                                {categories.map((c, i) => (
                                    <li className="nav-item" key={i}>
                                        <InertiaLink className={`nav-link ${document.location.pathname.includes(c.slug) ? 'active' : ''}`} href={`/Category/${c.slug}`}>
                                            <span className={i18n.language != 'en' ? 'hidden' : ''}>{c.EN_name}</span>
                                            <span className={i18n.language != 'es' ? 'hidden' : ''}>{c.ES_name}</span>
                                        </InertiaLink>
                                    </li>
                                ))}
                            </ul>
                            
                            <input type="text" id="SB" placeholder={t('searchBar')} name="s"/>
                            <InertiaLink className="btn btn-sm btn-custom-light" href={`/search/`} onClick={() =>setsearchVal()}>{t('search')}</InertiaLink>
                            <button type="submit" onClick={() =>callOutBusqueda()} className="btn btn-sm btn-custom-light">{t('searchGoogle')}</button>
                            
                            <section className="navbar-text lang-section">
                                <h6>
                                    {loggedIn ? (
                                        <>
                                        <a href='/dashboard' className="text-sm text-gray-700 underline" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline bi bi-speedometer mr-2" viewBox="0 0 16 16">
                                            <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                                            <path fillRule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"/>
                                        </svg>
                                        </a>
                                        <a href="#" className="text-sm text-gray-700" onClick={logOut}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline mr-2 bi bi-door-open" viewBox="0 0 16 16">
                                                <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                                                <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
                                            </svg>
                                        </a>
                                        </>
                                    ) : (
                                        <a href='/dashboard' className="text-sm text-gray-700 underline" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline bi bi-speedometer mr-2" viewBox="0 0 16 16">
                                                <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                                                <path fillRule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"/>
                                            </svg>
                                        </a> 
                                    )}

                                    {/* @if (Route::has('login'))
                                        @auth
                                            
                                        @else
                                            
                                            @if (Route::has('register'))
                                            @endif
                                        @endauth
                                    @endif */}
                                    <a
                                        className={i18n.language == 'en' ? 'active' : ''}
                                        onClick={()=>i18n.changeLanguage('en')}
                                    >
                                        En
                                    </a>
                                    |
                                    <a
                                        className={i18n.language == 'es' ? 'active' : ''}
                                        onClick={()=>i18n.changeLanguage('es')}
                                    >
                                        Es
                                    </a>
                                </h6>
                            </section>
                        </div>
                    </div>
                </nav>

                {useTypes ? 
                    <div className={`d-flex bg-light`} id="usrLevels">
                        {types.map(t => <div key={t.name} onClick={()=>setCategory(t.name, t.id)} className={(t.name === currentType ? 'selected' : '')}>
                            <p className={i18n.language != 'en' ? 'hidden' : ''}>{t.name}</p>
                            <p className={i18n.language != 'es' ? 'hidden' : ''}>{t.nameES}</p>
                        </div>)}
                    </div>
                : <></>}

                {children}

                <footer className="bg-dark text-white text-center p-1">
                    <h1 className="">Health 101</h1>
                    {t("Contact")}
                     <p className="">Social Media: 
                        <a href="https://www.facebook.com/Comebalanceadouabc20-101021035158385">  &nbsp;Facebook Page  </a>
                        <a href="https://www.facebook.com/groups/413938496303058?_rdc=1&_rdr">    &nbsp;Facebook Group   </a>
                    </p>
                    <div className="mt-3 footer-links d-flex flex-column flex-md-row">
                        {/* <InertiaLink>Privacy</InertiaLink>
                        <InertiaLink>Terms of Service</InertiaLink>
                        <InertiaLink>Ad Choices</InertiaLink>
                        <InertiaLink>Web Accessibility</InertiaLink> */}
                    </div>
                    <InertiaLink className="btn btn-sm btn-custom-light" href={`/subscription/`} >Subscribe</InertiaLink>
                </footer>
            </div>
    );
}
