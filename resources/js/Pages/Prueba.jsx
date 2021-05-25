import React, {useState} from "react";
import Layout from "../Components/Layout";
import { usePage } from "@inertiajs/inertia-react";
import PostCard from "../Components/PostCard";
import { useTranslation } from 'react-i18next';
import postsSeen from "../Components/seenPosts";

var signin = function(correo){
    /*instrucciones para sql*/
}

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

const Home = () => {
    let {posts} = usePage().props;
    const { t, i18n } = useTranslation();
    const [category, setCategory] = useState(document.CC);
    posts = posts[category];

    return (

        <div className="main-content">
            <p>Hola Mundo!</p>
            {posts.filter(x=>!window.pc.includes(x.id)).map((p, i) => <PostCard id={p.id} key={i} alt={i%2==0} name_ES={p.name_ES} image={p.image} name={p.name} extract={(i18n.language === 'en' ? p.content : p.content_ES).split(' ').filter((_, i) => i < 20).join(" ")} slug={p.slug}></PostCard>)}            
            <button type="submit" onClick={() =>singin(document.getElementById('signinbox'))} className="btn btn-sm btn-custom-light">Search in Google</button>
        </div>
    );
};

Home.layout = (page) => <Layout children={page} title={"Health 101 - prueba"} />;
export default Home;

