INSERT INTO users (name, email, password) VALUES ('usuario', 'usuario@gmail.com', 'password'); /*USUARIO PARA CREAR Y USAR*/
INSERT INTO posts (user_id, usr_type_id, name, name_ES, slug, image, content, content_ES, enabled) VALUES (1, 1, 'Glucose Meter','Medidor de Glucosa','producto','https://puu.sh/HzJV6.png','Product: GLUCOSE, SUGAR, GLUCOSE METER WITH 25 REACTIVE STRIPS AND 25 LANCETS + DIGITAL OXYMETERCode: 724049159153 glucometer/ OX50D oximeterBrand name: YASEEModel Number: GLM-75Power Supply: 3v Battery (Not Included)Power supply mode: BatteryType: Blood testing equipmentBlood sample type: capillary whole bloodAcceptable hematocrit range: 25% - 65%.Test time: 5/8 secondsMemory time: 180Operating relative humidity: 20% - 80% relative humidityIncludes 25 test stripsUses CR2032 battery','Producto: GLUCOMETRO MEDIDOR DE GLUCOSA, AZUCAR, CON 25 TIRAS REACTIVAS Y 25 LANCETAS + OXIMETRO DIGITALCódigo: 724049159153 glucomtro/ OX50D oximetroNombre de la marca: YASEENúmero de modelo: GLM-75Fuente de alimentación: Batería 3v (No Incluida)Modo de suministro de energía: BateriasTipo: Equipos de análisis de sangreTipo de muestra de sangre: sangre entera capilarRango de hematocrito aceptable: 25% - 65%Tiempo de prueba: 5/8 segundosTiempo de memoria: 180Humedad relativa de funcionamiento: 20% - 80% de humedad relativaIncluye 25 tiras reactivasIncluye 25 lancetasUtiliza Bateria CR2032',1);
INSERT INTO posts (user_id, usr_type_id, name, name_ES, slug, image, content, content_ES, enabled) VALUES (1, 1,'Sinocare - Sugar Test in Blood','Sinocare - Prueba de Azucar en Sangre','producto','https://puu.sh/HzK8s.png','The Safe-AQ Smart diabetes test kit is everything you need in one small package. The small, sleek design fits in the palm of your hand, making it ultra-portable so you can keep track of it with you wherever you go. Simple and accurate testing to help you get accurate and fast results in just 5 seconds. New modern design with large display for easier and more discreet use.','El Safe-AQ Smart diabetes kit de prueba es todo lo que necesita en un pequeño paquete. El diseño pequeño y elegante encaja en la palma de su mano, por lo que es ultra-portable para que pueda mantenerse al tanto con usted dondequiera que vaya. Pruebas sencillas y precisas que le ayudarán a obtener resultados exactos y rápidos en sólo 5 segundos. Nuevo diseño moderno con la exhibición grande para un uso más fácil y más discreto.',1);
INSERT INTO posts (user_id, usr_type_id, name, name_ES, slug, image, content, content_ES, enabled) VALUES (1, 1, 'One Touch Verio Flex System Kit', 'One Touch Verio Flex System Kit', 'producto', 'https://puu.sh/HzKc4.png', 'Glycemia mounting system. For use only with original LIFESCAN ONETOUCH VERIO test strips. Easy to use and ready to use (no code required). The kit includes: measuring tool, 10 genuine test strips, 10 delicate pointed needles, delicate pointed pen, pouch and user manual. Device equipped with Bluetooth connection for data exchange.', 'Sistema de montaje de la glicemia. Para usar solo con las bandas reactivas originales LIFESCAN ONETOUCH VERIO Fácil de usar y listo para usar (no necesita código). El kit incluye: herramienta para la medición, 10 tiras reactivas auténticas, 10 agujas puntiagudas delicadas, bolígrafo puntiagudo delicado, funda y manual para el uso. Dispositivo dotado de conexión Bluetooth para el intercambio de datos.' ,1);
INSERT INTO category_posts (post_id, category_id) VALUES (1,3);
INSERT INTO category_posts (post_id, category_id) VALUES (2,3);
INSERT INTO category_posts (post_id, category_id) VALUES (3,3);


