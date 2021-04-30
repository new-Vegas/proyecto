/*Base de la pagina*/
INSERT INTO categories (ES_name, EN_name, slug) VALUES ('Participantes', 'Participants', 'participants');
INSERT INTO categories (ES_name, EN_name, slug) VALUES ('Colaboradores', 'Collaborators', 'collab');
INSERT INTO categories (ES_name, EN_name, slug) VALUES ('Productos', 'Products', 'product');
INSERT INTO categories (ES_name, EN_name, slug) VALUES ('Articulos', 'Articles', 'articles');
INSERT INTO categories (ES_name, EN_name, slug) VALUES ('Noticias', 'News', 'news');
INSERT INTO categories (ES_name, EN_name, slug) VALUES ('Foros', 'Forums', 'foros');

INSERT INTO user_types (name, nameES, descENG, descES) VALUES (' ', ' ', ' ', ' ');
INSERT INTO users (name, email, password) VALUES ('user', 'user@mail.com', 'equipo1234');/*Es necesario que exista un user*/

/*Pasos para agregar un post*/
INSERT INTO posts (user_id, usr_type_id, name, name_ES, slug, image, content, content_ES, enabled)  /*se genera el post*/
VALUES (1, 1, 'Hello World!', 'Hola mundo!', 'post', 'https://i.pinimg.com/originals/24/5a/e1/245ae17922e87954167a22bb77addf89.jpg', 'These is a test post', 'Este es un post de prueba', 1);
INSERT INTO category_posts (post_id, category_id) VALUES (1, 4);/*se anexa el post a una categoria*/

/****NOTAS****/
/****
- Cada valor que no este entre comillas por favor cambiarlo por el valor que da su base de datos.
- El slug hacerlo unico para cada post.
- Los id son enteros, no le pongan comillas.
****/
