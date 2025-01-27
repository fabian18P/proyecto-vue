export const modulos = {
    modulos: [
        // MODULO 1
        {
            id: "1", color: "red", nombre: "Estructura de las plantas",
            subModulo: [
                {
                    id:"11", nombre: "Células vegetales",
                    resumen: "Las células vegetales son eucariotas; es decir, células con núcleo verdadero. Tienen muchos componentes en común con la célula animal, pero la pared celular, la vacuola y los plastidios son componentes exclusivos de las células vegetales. <br> Para estudiar la célula vegetal, podemos dividirlas en tres secciones; le invitamos a seguir los enlaces para conocer más sobre ellas:",
                    descripcion : [
                        {
                            texto: "El siguiente mapa conceptual resume las partes de la célula vegetal: Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, soluta cum! Cupiditate quia, optio asperiores blanditiis dolore ipsam ex nisi iusto amet deleniti maxime, natus architecto. Perspiciatis tempore ipsam minus? ",
                            imagen: [
                                { url:"https://bcw-media.s3.ap-northeast-1.amazonaws.com/text_to_image_v6_poster_01_f038887d26.jpg", descripcion: "Figura 1. Células hijas separadas por nuevas paredes celulares, por Dr. phil.nat Thomas Geier (CC BY-SA 3.0)" },
                                { url:"https://bcw-media.s3.ap-northeast-1.amazonaws.com/text_to_image_v6_poster_01_f038887d26.jpg", descripcion: "Figura 1. Células hijas separadas por nuevas paredes celulares, por Dr. phil.nat Thomas Geier (CC BY-SA 3.0)" }
                            ]
                        },
                        {
                            texto: "El siguiente mapa conceptual resume las partes de la célula vegetal: Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, soluta cum! Cupiditate quia, optio asperiores blanditiis dolore ipsam ex nisi iusto amet deleniti maxime, natus architecto. Perspiciatis tempore ipsam minus? ",
                            imagen: [
                                { url:"https://bcw-media.s3.ap-northeast-1.amazonaws.com/text_to_image_v6_poster_01_f038887d26.jpg", descripcion: "Figura 1. Células hijas separadas por nuevas paredes celulares, por Dr. phil.nat Thomas Geier (CC BY-SA 3.0)" }
                            ]
                        }
                    ],
                    // CONTENIDO ---------------
                    seccion: [
                        {
                            id: "111", nombre: "Pared Celular",
                            contenido: [
                                {
                                    subTitulo:"Rigidez y forma",
                                    descripcion: "La pared de las células vegetales está formada principalmente por celulosa, que es un polisacárido de glucosa. <br> Gracias a la rigidez que proporciona la celulosa, la pared protege la célula vegetal, le da resistencia contra patógenos, la limita del medio, le da sostén y forma. Existen otras sustancias en la pared, como la hemicelulosa (otra forma de celulosa) y la lignina, sustancia que no solo da rigidez a la pared, sino que evita su descomposición. <br> También hay pectinas, que son sustancias que contienen azúcares; están presentes en grandes cantidades en las paredes de las células de frutos como la guayaba y la naranja. Ayudan a la plasticidad de la pared celular. En la industria alimenticia, se usan como agentes gelificantes en jaleas y mermeladas. <br> Algunas células poseen ceras, cutina y suberina, que son lípidos que dan impermeabilidad a la pared celular; y, el carbohidrato calosa, que también defiende a la célula contra la invasión de patógenos. <br> En muchas células vegetales que han dejado de crecer, la pared celular se divide en dos secciones: una pared primaria y una pared secundaria. La pared es secretada por la célula viva, por lo que la capa más joven está junto a la membrana celular; y, la capa más vieja, hacia fuera. <br> La pared primaria se forma inmediatamente después de la división celular, antes de que la célula complete su crecimiento. En la figura 1, se muestra la formación de nuevas paredes celulares en células de cebolla. <br> La pared primaria posee proteínas que le ayudan a la resistencia contra enfermedades y para la adherencia de la membrana plasmática a la pared. <br> Las paredes primarias de células adyacentes están separadas por la lámina media, una estructura que se compone principalmente de sustancias como la pectina. <br> La pared secundaria, si existe, está unida a la membrana plasmática porque se forma de último, cuando la célula ha finalizado su crecimiento. Se depositan en ella compuestos como lignina y suberina. <br> Entre las células adyacentes, están los plasmodesmos, canales continuos de citoplasma que atraviesan las paredes celulares y permiten la comunicación entre células y el paso de sustancias (ver figura 2). <br>",
                                    imagen: [
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 1. Células hijas separadas por nuevas paredes celulares, por Dr. phil.nat Thomas Geier (CC BY-SA 3.0)"},
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 2. Estructura de la pared celular. Creada por UNED, a partir de imagen de Mariana Ruiz Villarreal (CC0 1.0)."}
                                    ]
                                }
                            ]
                        },
                        {
                            id: "112", nombre: "Membranas",
                            contenido: [
                                {
                                    subTitulo:"Sistema de membranas de la célula vegetal",
                                    descripcion: "La célula vegetal cuenta con un complejo sistema de membranas. Este se compone de:<ul><li><li>Plasmalema</li><li>Retículo endoplasmático</li><li>Aparato de Golgi</li><li>Vacuola</li><li>Membrana nuclear</li></ul>Las membranas están formadas por fosfolípidos y proteínas. No son sólidos rígidos, sino más bien estructuras muy flexibles en las que las moléculas pueden progagarse hacia los lados. Existen espacios en las membranas a través de las cuales pueden difundirse moléculas pequeñas (ver figura 3).",
                                    imagen: [
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 3. Estructura de la membrana celular. Creada por UNED, a partir de imagen de Honor Lake en Clker.com (CC0)"}
                                    ]
                                },
                                {
                                    subTitulo:"Plasmalema",
                                    descripcion: "La membrana plasmática o plasmalema lleva a cabo las siguientes funciones:<ul><li>Delimita el citoplasma de la célula.<li>Media el transporte de sustancias hacia el interior y el exterior (permeabilidad pasiva) y el transporte activo, gracias a las que actúan como acarreadoras o como canales. </li><li>Forma la pared celular. </li><li>Traslada sustancias reguladoras del crecimiento y la diferenciación celular. </li></ul>",
                                    imagen: [
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 4. Estructura de la membrana celular. Creada por UNED a partir de imagen de Bruce Blaus (CC BY)"}
                                    ]
                                },
                                {
                                    subTitulo:"Sistema de membranas de la célula vegetal",
                                    descripcion: "La célula vegetal cuenta con un complejo sistema de membranas. Este se compone de:<ul><li><li>Plasmalema</li><li>Retículo endoplasmático</li><li>Aparato de Golgi</li><li>Vacuola</li><li>Membrana nuclear</li></ul>Las membranas están formadas por fosfolípidos y proteínas. No son sólidos rígidos, sino más bien estructuras muy flexibles en las que las moléculas pueden progagarse hacia los lados. Existen espacios en las membranas a través de las cuales pueden difundirse moléculas pequeñas (ver figura 3).",
                                    imagen: [
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 3. Estructura de la membrana celular. Creada por UNED, a partir de imagen de Honor Lake en Clker.com (CC0)"}
                                    ]
                                },
                                {
                                    subTitulo:"Plasmalema",
                                    descripcion: "La membrana plasmática o plasmalema lleva a cabo las siguientes funciones:<ul><li>Delimita el citoplasma de la célula.<li>Media el transporte de sustancias hacia el interior y el exterior (permeabilidad pasiva) y el transporte activo, gracias a las que actúan como acarreadoras o como canales. </li><li>Forma la pared celular. </li><li>Traslada sustancias reguladoras del crecimiento y la diferenciación celular. </li></ul>",
                                    imagen: [
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 4. Estructura de la membrana celular. Creada por UNED a partir de imagen de Bruce Blaus (CC BY)"}
                                    ]
                                },
                                {
                                    subTitulo:"Sistema de membranas de la célula vegetal",
                                    descripcion: "La célula vegetal cuenta con un complejo sistema de membranas. Este se compone de:<ul><li><li>Plasmalema</li><li>Retículo endoplasmático</li><li>Aparato de Golgi</li><li>Vacuola</li><li>Membrana nuclear</li></ul>Las membranas están formadas por fosfolípidos y proteínas. No son sólidos rígidos, sino más bien estructuras muy flexibles en las que las moléculas pueden progagarse hacia los lados. Existen espacios en las membranas a través de las cuales pueden difundirse moléculas pequeñas (ver figura 3).",
                                    imagen: [
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 3. Estructura de la membrana celular. Creada por UNED, a partir de imagen de Honor Lake en Clker.com (CC0)"}
                                    ]
                                },
                                {
                                    subTitulo:"Plasmalema",
                                    descripcion: "La membrana plasmática o plasmalema lleva a cabo las siguientes funciones:<ul><li>Delimita el citoplasma de la célula.<li>Media el transporte de sustancias hacia el interior y el exterior (permeabilidad pasiva) y el transporte activo, gracias a las que actúan como acarreadoras o como canales. </li><li>Forma la pared celular. </li><li>Traslada sustancias reguladoras del crecimiento y la diferenciación celular. </li></ul>",
                                    imagen: [
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 4. Estructura de la membrana celular. Creada por UNED a partir de imagen de Bruce Blaus (CC BY)"}
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        // MODULO 2
        {
            id: "2", color: "blue", nombre: "FRUTAS",
            subModulo: [
                {
                    id:"21", nombre: "PROPIEDADES",
                    resumen: "Las células vegetales son eucariotas; es decir, células con núcleo verdadero. Tienen muchos componentes en común con la célula animal, pero la pared celular, la vacuola y los plastidios son componentes exclusivos de las células vegetales. <br> Para estudiar la célula vegetal, podemos dividirlas en tres secciones; le invitamos a seguir los enlaces para conocer más sobre ellas:",
                    descripcion : [
                        {
                            texto: "El siguiente mapa conceptual resume las partes de la célula vegetal: Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, soluta cum! Cupiditate quia, optio asperiores blanditiis dolore ipsam ex nisi iusto amet deleniti maxime, natus architecto. Perspiciatis tempore ipsam minus? ",
                            imagen: [
                                { url:"https://bcw-media.s3.ap-northeast-1.amazonaws.com/text_to_image_v6_poster_01_f038887d26.jpg", descripcion: "Figura 1. Células hijas separadas por nuevas paredes celulares, por Dr. phil.nat Thomas Geier (CC BY-SA 3.0)" },
                                { url:"https://bcw-media.s3.ap-northeast-1.amazonaws.com/text_to_image_v6_poster_01_f038887d26.jpg", descripcion: "Figura 1. Células hijas separadas por nuevas paredes celulares, por Dr. phil.nat Thomas Geier (CC BY-SA 3.0)" },
                                { url:"https://bcw-media.s3.ap-northeast-1.amazonaws.com/text_to_image_v6_poster_01_f038887d26.jpg", descripcion: "Figura 1. Células hijas separadas por nuevas paredes celulares, por Dr. phil.nat Thomas Geier (CC BY-SA 3.0)" },
                                { url:"https://bcw-media.s3.ap-northeast-1.amazonaws.com/text_to_image_v6_poster_01_f038887d26.jpg", descripcion: "Figura 1. Células hijas separadas por nuevas paredes celulares, por Dr. phil.nat Thomas Geier (CC BY-SA 3.0)" }
                            ]
                        },
                        {
                            texto: "El siguiente mapa conceptual resume las partes de la célula vegetal: Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, soluta cum! Cupiditate quia, optio asperiores blanditiis dolore ipsam ex nisi iusto amet deleniti maxime, natus architecto. Perspiciatis tempore ipsam minus? ",
                            imagen: [
                                { url:"https://bcw-media.s3.ap-northeast-1.amazonaws.com/text_to_image_v6_poster_01_f038887d26.jpg", descripcion: "Figura 1. Células hijas separadas por nuevas paredes celulares, por Dr. phil.nat Thomas Geier (CC BY-SA 3.0)" }
                            ]
                        }
                    ],
                    // CONTENIDO ---------------
                    seccion: [
                        {
                            id: "211", nombre: "GARBANZO",
                            contenido: [
                                {
                                    subTitulo:"Rigidez y forma",
                                    descripcion: "La pared de las células vegetales está formada principalmente por celulosa, que es un polisacárido de glucosa. <br> Gracias a la rigidez que proporciona la celulosa, la pared protege la célula vegetal, le da resistencia contra patógenos, la limita del medio, le da sostén y forma. Existen otras sustancias en la pared, como la hemicelulosa (otra forma de celulosa) y la lignina, sustancia que no solo da rigidez a la pared, sino que evita su descomposición. <br> También hay pectinas, que son sustancias que contienen azúcares; están presentes en grandes cantidades en las paredes de las células de frutos como la guayaba y la naranja. Ayudan a la plasticidad de la pared celular. En la industria alimenticia, se usan como agentes gelificantes en jaleas y mermeladas. <br> Algunas células poseen ceras, cutina y suberina, que son lípidos que dan impermeabilidad a la pared celular; y, el carbohidrato calosa, que también defiende a la célula contra la invasión de patógenos. <br> En muchas células vegetales que han dejado de crecer, la pared celular se divide en dos secciones: una pared primaria y una pared secundaria. La pared es secretada por la célula viva, por lo que la capa más joven está junto a la membrana celular; y, la capa más vieja, hacia fuera. <br> La pared primaria se forma inmediatamente después de la división celular, antes de que la célula complete su crecimiento. En la figura 1, se muestra la formación de nuevas paredes celulares en células de cebolla. <br> La pared primaria posee proteínas que le ayudan a la resistencia contra enfermedades y para la adherencia de la membrana plasmática a la pared. <br> Las paredes primarias de células adyacentes están separadas por la lámina media, una estructura que se compone principalmente de sustancias como la pectina. <br> La pared secundaria, si existe, está unida a la membrana plasmática porque se forma de último, cuando la célula ha finalizado su crecimiento. Se depositan en ella compuestos como lignina y suberina. <br> Entre las células adyacentes, están los plasmodesmos, canales continuos de citoplasma que atraviesan las paredes celulares y permiten la comunicación entre células y el paso de sustancias (ver figura 2). <br>",
                                    imagen: [
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 1. Células hijas separadas por nuevas paredes celulares, por Dr. phil.nat Thomas Geier (CC BY-SA 3.0)"},
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 2. Estructura de la pared celular. Creada por UNED, a partir de imagen de Mariana Ruiz Villarreal (CC0 1.0)."}
                                    ]
                                },
                                {
                                    subTitulo:"PAPAPSD",
                                    descripcion: "La pared de las células vegetales está formada principalmente por celulosa, que es un polisacárido de glucosa. <br> Gracias a la rigidez que proporciona la celulosa, la pared protege la célula vegetal, le da resistencia contra patógenos, la limita del medio, le da sostén y forma. Existen otras sustancias en la pared, como la hemicelulosa (otra forma de celulosa) y la lignina, sustancia que no solo da rigidez a la pared, sino que evita su descomposición. <br> También hay pectinas, que son sustancias que contienen azúcares; están presentes en grandes cantidades en las paredes de las células de frutos como la guayaba y la naranja. Ayudan a la plasticidad de la pared celular. En la industria alimenticia, se usan como agentes gelificantes en jaleas y mermeladas. <br> Algunas células poseen ceras, cutina y suberina, que son lípidos que dan impermeabilidad a la pared celular; y, el carbohidrato calosa, que también defiende a la célula contra la invasión de patógenos. <br> En muchas células vegetales que han dejado de crecer, la pared celular se divide en dos secciones: una pared primaria y una pared secundaria. La pared es secretada por la célula viva, por lo que la capa más joven está junto a la membrana celular; y, la capa más vieja, hacia fuera. <br> La pared primaria se forma inmediatamente después de la división celular, antes de que la célula complete su crecimiento. En la figura 1, se muestra la formación de nuevas paredes celulares en células de cebolla. <br> La pared primaria posee proteínas que le ayudan a la resistencia contra enfermedades y para la adherencia de la membrana plasmática a la pared. <br> Las paredes primarias de células adyacentes están separadas por la lámina media, una estructura que se compone principalmente de sustancias como la pectina. <br> La pared secundaria, si existe, está unida a la membrana plasmática porque se forma de último, cuando la célula ha finalizado su crecimiento. Se depositan en ella compuestos como lignina y suberina. <br> Entre las células adyacentes, están los plasmodesmos, canales continuos de citoplasma que atraviesan las paredes celulares y permiten la comunicación entre células y el paso de sustancias (ver figura 2). <br>",
                                    imagen: [
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 1. Células hijas separadas por nuevas paredes celulares, por Dr. phil.nat Thomas Geier (CC BY-SA 3.0)"},
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 2. Estructura de la pared celular. Creada por UNED, a partir de imagen de Mariana Ruiz Villarreal (CC0 1.0)."},
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 1. Células hijas separadas por nuevas paredes celulares, por Dr. phil.nat Thomas Geier (CC BY-SA 3.0)"},
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 2. Estructura de la pared celular. Creada por UNED, a partir de imagen de Mariana Ruiz Villarreal (CC0 1.0)."}
                                    ]
                                }
                            ]
                        },
                        {
                            id: "212", nombre: "MANI",
                            contenido: [
                                {
                                    subTitulo:"Sistema de membranas de la célula vegetal",
                                    descripcion: "La célula vegetal cuenta con un complejo sistema de membranas. Este se compone de:<ul><li><li>Plasmalema</li><li>Retículo endoplasmático</li><li>Aparato de Golgi</li><li>Vacuola</li><li>Membrana nuclear</li></ul>Las membranas están formadas por fosfolípidos y proteínas. No son sólidos rígidos, sino más bien estructuras muy flexibles en las que las moléculas pueden progagarse hacia los lados. Existen espacios en las membranas a través de las cuales pueden difundirse moléculas pequeñas (ver figura 3).",
                                    imagen: [
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 3. Estructura de la membrana celular. Creada por UNED, a partir de imagen de Honor Lake en Clker.com (CC0)"}
                                    ]
                                },
                                {
                                    subTitulo:"Plasmalema",
                                    descripcion: "La membrana plasmática o plasmalema lleva a cabo las siguientes funciones:<ul><li>Delimita el citoplasma de la célula.<li>Media el transporte de sustancias hacia el interior y el exterior (permeabilidad pasiva) y el transporte activo, gracias a las que actúan como acarreadoras o como canales. </li><li>Forma la pared celular. </li><li>Traslada sustancias reguladoras del crecimiento y la diferenciación celular. </li></ul>",
                                    imagen: [
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 4. Estructura de la membrana celular. Creada por UNED a partir de imagen de Bruce Blaus (CC BY)"}
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id:"22", nombre: "CULTURA",
                    resumen: "Las células vegetales son eucariotas; es decir, células con núcleo verdadero. Tienen muchos componentes en común con la célula animal, pero la pared celular, la vacuola y los plastidios son componentes exclusivos de las células vegetales. <br> Para estudiar la célula vegetal, podemos dividirlas en tres secciones; le invitamos a seguir los enlaces para conocer más sobre ellas:",
                    descripcion : [
                        {
                            texto: "El siguiente mapa conceptual resume las partes de la célula vegetal: Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, soluta cum! Cupiditate quia, optio asperiores blanditiis dolore ipsam ex nisi iusto amet deleniti maxime, natus architecto. Perspiciatis tempore ipsam minus? ",
                            imagen: [
                                { url:"https://bcw-media.s3.ap-northeast-1.amazonaws.com/text_to_image_v6_poster_01_f038887d26.jpg", descripcion: "Figura 1. Células hijas separadas por nuevas paredes celulares, por Dr. phil.nat Thomas Geier (CC BY-SA 3.0)" }
                            ]
                        },
                        {
                            texto: "El siguiente mapa conceptual resume las partes de la célula vegetal: Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, soluta cum! Cupiditate quia, optio asperiores blanditiis dolore ipsam ex nisi iusto amet deleniti maxime, natus architecto. Perspiciatis tempore ipsam minus? ",
                            imagen: [
                                { url:"https://bcw-media.s3.ap-northeast-1.amazonaws.com/text_to_image_v6_poster_01_f038887d26.jpg", descripcion: "Figura 1. Células hijas separadas por nuevas paredes celulares, por Dr. phil.nat Thomas Geier (CC BY-SA 3.0)" }
                            ]
                        }
                    ],
                    // CONTENIDO ---------------
                    seccion: [
                        {
                            id: "221", nombre: "AAAAAAAA",
                            contenido: [
                                {
                                    subTitulo:"Rigidez y forma",
                                    descripcion: "La pared de las células vegetales está formada principalmente por celulosa, que es un polisacárido de glucosa. <br> Gracias a la rigidez que proporciona la celulosa, la pared protege la célula vegetal, le da resistencia contra patógenos, la limita del medio, le da sostén y forma. Existen otras sustancias en la pared, como la hemicelulosa (otra forma de celulosa) y la lignina, sustancia que no solo da rigidez a la pared, sino que evita su descomposición. <br> También hay pectinas, que son sustancias que contienen azúcares; están presentes en grandes cantidades en las paredes de las células de frutos como la guayaba y la naranja. Ayudan a la plasticidad de la pared celular. En la industria alimenticia, se usan como agentes gelificantes en jaleas y mermeladas. <br> Algunas células poseen ceras, cutina y suberina, que son lípidos que dan impermeabilidad a la pared celular; y, el carbohidrato calosa, que también defiende a la célula contra la invasión de patógenos. <br> En muchas células vegetales que han dejado de crecer, la pared celular se divide en dos secciones: una pared primaria y una pared secundaria. La pared es secretada por la célula viva, por lo que la capa más joven está junto a la membrana celular; y, la capa más vieja, hacia fuera. <br> La pared primaria se forma inmediatamente después de la división celular, antes de que la célula complete su crecimiento. En la figura 1, se muestra la formación de nuevas paredes celulares en células de cebolla. <br> La pared primaria posee proteínas que le ayudan a la resistencia contra enfermedades y para la adherencia de la membrana plasmática a la pared. <br> Las paredes primarias de células adyacentes están separadas por la lámina media, una estructura que se compone principalmente de sustancias como la pectina. <br> La pared secundaria, si existe, está unida a la membrana plasmática porque se forma de último, cuando la célula ha finalizado su crecimiento. Se depositan en ella compuestos como lignina y suberina. <br> Entre las células adyacentes, están los plasmodesmos, canales continuos de citoplasma que atraviesan las paredes celulares y permiten la comunicación entre células y el paso de sustancias (ver figura 2). <br>",
                                    imagen: [
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 1. Células hijas separadas por nuevas paredes celulares, por Dr. phil.nat Thomas Geier (CC BY-SA 3.0)"},
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 2. Estructura de la pared celular. Creada por UNED, a partir de imagen de Mariana Ruiz Villarreal (CC0 1.0)."}
                                    ]
                                }
                            ]
                        },
                        {
                            id: "222", nombre: "BBBBBBB",
                            contenido: [
                                {
                                    subTitulo:"Sistema de membranas de la célula vegetal",
                                    descripcion: "La célula vegetal cuenta con un complejo sistema de membranas. Este se compone de:<ul><li><li>Plasmalema</li><li>Retículo endoplasmático</li><li>Aparato de Golgi</li><li>Vacuola</li><li>Membrana nuclear</li></ul>Las membranas están formadas por fosfolípidos y proteínas. No son sólidos rígidos, sino más bien estructuras muy flexibles en las que las moléculas pueden progagarse hacia los lados. Existen espacios en las membranas a través de las cuales pueden difundirse moléculas pequeñas (ver figura 3).",
                                    imagen: [
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 3. Estructura de la membrana celular. Creada por UNED, a partir de imagen de Honor Lake en Clker.com (CC0)"}
                                    ]
                                },
                                {
                                    subTitulo:"Plasmalema",
                                    descripcion: "La membrana plasmática o plasmalema lleva a cabo las siguientes funciones:<ul><li>Delimita el citoplasma de la célula.<li>Media el transporte de sustancias hacia el interior y el exterior (permeabilidad pasiva) y el transporte activo, gracias a las que actúan como acarreadoras o como canales. </li><li>Forma la pared celular. </li><li>Traslada sustancias reguladoras del crecimiento y la diferenciación celular. </li></ul>",
                                    imagen: [
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 4. Estructura de la membrana celular. Creada por UNED a partir de imagen de Bruce Blaus (CC BY)"}
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
         // MODULO 3
         {
            id: "3", color: "indigo", nombre: "FRUTAS",
            subModulo: [
                {
                    id:"31", nombre: "PROPIEDADES",
                    resumen: "Las células vegetales son eucariotas; es decir, células con núcleo verdadero. Tienen muchos componentes en común con la célula animal, pero la pared celular, la vacuola y los plastidios son componentes exclusivos de las células vegetales. <br> Para estudiar la célula vegetal, podemos dividirlas en tres secciones; le invitamos a seguir los enlaces para conocer más sobre ellas:",
                    descripcion : [
                        {
                            texto: "El siguiente mapa conceptual resume las partes de la célula vegetal: Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, soluta cum! Cupiditate quia, optio asperiores blanditiis dolore ipsam ex nisi iusto amet deleniti maxime, natus architecto. Perspiciatis tempore ipsam minus? ",
                            imagen: [
                                { url:"https://bcw-media.s3.ap-northeast-1.amazonaws.com/text_to_image_v6_poster_01_f038887d26.jpg", descripcion: "Figura 1. Células hijas separadas por nuevas paredes celulares, por Dr. phil.nat Thomas Geier (CC BY-SA 3.0)" },
                                { url:"https://bcw-media.s3.ap-northeast-1.amazonaws.com/text_to_image_v6_poster_01_f038887d26.jpg", descripcion: "Figura 1. Células hijas separadas por nuevas paredes celulares, por Dr. phil.nat Thomas Geier (CC BY-SA 3.0)" },
                                { url:"https://bcw-media.s3.ap-northeast-1.amazonaws.com/text_to_image_v6_poster_01_f038887d26.jpg", descripcion: "Figura 1. Células hijas separadas por nuevas paredes celulares, por Dr. phil.nat Thomas Geier (CC BY-SA 3.0)" },
                                { url:"https://bcw-media.s3.ap-northeast-1.amazonaws.com/text_to_image_v6_poster_01_f038887d26.jpg", descripcion: "Figura 1. Células hijas separadas por nuevas paredes celulares, por Dr. phil.nat Thomas Geier (CC BY-SA 3.0)" }
                            ]
                        },
                        {
                            texto: "El siguiente mapa conceptual resume las partes de la célula vegetal: Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, soluta cum! Cupiditate quia, optio asperiores blanditiis dolore ipsam ex nisi iusto amet deleniti maxime, natus architecto. Perspiciatis tempore ipsam minus? ",
                            imagen: [
                                { url:"https://bcw-media.s3.ap-northeast-1.amazonaws.com/text_to_image_v6_poster_01_f038887d26.jpg", descripcion: "Figura 1. Células hijas separadas por nuevas paredes celulares, por Dr. phil.nat Thomas Geier (CC BY-SA 3.0)" }
                            ]
                        }
                    ],
                    // CONTENIDO ---------------
                    seccion: [
                        {
                            id: "311", nombre: "GARBANZO",
                            contenido: [
                                {
                                    subTitulo:"Rigidez y forma",
                                    descripcion: "La pared de las células vegetales está formada principalmente por celulosa, que es un polisacárido de glucosa. <br> Gracias a la rigidez que proporciona la celulosa, la pared protege la célula vegetal, le da resistencia contra patógenos, la limita del medio, le da sostén y forma. Existen otras sustancias en la pared, como la hemicelulosa (otra forma de celulosa) y la lignina, sustancia que no solo da rigidez a la pared, sino que evita su descomposición. <br> También hay pectinas, que son sustancias que contienen azúcares; están presentes en grandes cantidades en las paredes de las células de frutos como la guayaba y la naranja. Ayudan a la plasticidad de la pared celular. En la industria alimenticia, se usan como agentes gelificantes en jaleas y mermeladas. <br> Algunas células poseen ceras, cutina y suberina, que son lípidos que dan impermeabilidad a la pared celular; y, el carbohidrato calosa, que también defiende a la célula contra la invasión de patógenos. <br> En muchas células vegetales que han dejado de crecer, la pared celular se divide en dos secciones: una pared primaria y una pared secundaria. La pared es secretada por la célula viva, por lo que la capa más joven está junto a la membrana celular; y, la capa más vieja, hacia fuera. <br> La pared primaria se forma inmediatamente después de la división celular, antes de que la célula complete su crecimiento. En la figura 1, se muestra la formación de nuevas paredes celulares en células de cebolla. <br> La pared primaria posee proteínas que le ayudan a la resistencia contra enfermedades y para la adherencia de la membrana plasmática a la pared. <br> Las paredes primarias de células adyacentes están separadas por la lámina media, una estructura que se compone principalmente de sustancias como la pectina. <br> La pared secundaria, si existe, está unida a la membrana plasmática porque se forma de último, cuando la célula ha finalizado su crecimiento. Se depositan en ella compuestos como lignina y suberina. <br> Entre las células adyacentes, están los plasmodesmos, canales continuos de citoplasma que atraviesan las paredes celulares y permiten la comunicación entre células y el paso de sustancias (ver figura 2). <br>",
                                    imagen: [
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 1. Células hijas separadas por nuevas paredes celulares, por Dr. phil.nat Thomas Geier (CC BY-SA 3.0)"},
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 2. Estructura de la pared celular. Creada por UNED, a partir de imagen de Mariana Ruiz Villarreal (CC0 1.0)."}
                                    ]
                                },
                                {
                                    subTitulo:"PAPAPSD",
                                    descripcion: "La pared de las células vegetales está formada principalmente por celulosa, que es un polisacárido de glucosa. <br> Gracias a la rigidez que proporciona la celulosa, la pared protege la célula vegetal, le da resistencia contra patógenos, la limita del medio, le da sostén y forma. Existen otras sustancias en la pared, como la hemicelulosa (otra forma de celulosa) y la lignina, sustancia que no solo da rigidez a la pared, sino que evita su descomposición. <br> También hay pectinas, que son sustancias que contienen azúcares; están presentes en grandes cantidades en las paredes de las células de frutos como la guayaba y la naranja. Ayudan a la plasticidad de la pared celular. En la industria alimenticia, se usan como agentes gelificantes en jaleas y mermeladas. <br> Algunas células poseen ceras, cutina y suberina, que son lípidos que dan impermeabilidad a la pared celular; y, el carbohidrato calosa, que también defiende a la célula contra la invasión de patógenos. <br> En muchas células vegetales que han dejado de crecer, la pared celular se divide en dos secciones: una pared primaria y una pared secundaria. La pared es secretada por la célula viva, por lo que la capa más joven está junto a la membrana celular; y, la capa más vieja, hacia fuera. <br> La pared primaria se forma inmediatamente después de la división celular, antes de que la célula complete su crecimiento. En la figura 1, se muestra la formación de nuevas paredes celulares en células de cebolla. <br> La pared primaria posee proteínas que le ayudan a la resistencia contra enfermedades y para la adherencia de la membrana plasmática a la pared. <br> Las paredes primarias de células adyacentes están separadas por la lámina media, una estructura que se compone principalmente de sustancias como la pectina. <br> La pared secundaria, si existe, está unida a la membrana plasmática porque se forma de último, cuando la célula ha finalizado su crecimiento. Se depositan en ella compuestos como lignina y suberina. <br> Entre las células adyacentes, están los plasmodesmos, canales continuos de citoplasma que atraviesan las paredes celulares y permiten la comunicación entre células y el paso de sustancias (ver figura 2). <br>",
                                    imagen: [
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 1. Células hijas separadas por nuevas paredes celulares, por Dr. phil.nat Thomas Geier (CC BY-SA 3.0)"},
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 2. Estructura de la pared celular. Creada por UNED, a partir de imagen de Mariana Ruiz Villarreal (CC0 1.0)."},
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 1. Células hijas separadas por nuevas paredes celulares, por Dr. phil.nat Thomas Geier (CC BY-SA 3.0)"},
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 2. Estructura de la pared celular. Creada por UNED, a partir de imagen de Mariana Ruiz Villarreal (CC0 1.0)."}
                                    ]
                                }
                            ]
                        },
                        {
                            id: "312", nombre: "MANI",
                            contenido: [
                                {
                                    subTitulo:"Sistema de membranas de la célula vegetal",
                                    descripcion: "La célula vegetal cuenta con un complejo sistema de membranas. Este se compone de:<ul><li><li>Plasmalema</li><li>Retículo endoplasmático</li><li>Aparato de Golgi</li><li>Vacuola</li><li>Membrana nuclear</li></ul>Las membranas están formadas por fosfolípidos y proteínas. No son sólidos rígidos, sino más bien estructuras muy flexibles en las que las moléculas pueden progagarse hacia los lados. Existen espacios en las membranas a través de las cuales pueden difundirse moléculas pequeñas (ver figura 3).",
                                    imagen: [
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 3. Estructura de la membrana celular. Creada por UNED, a partir de imagen de Honor Lake en Clker.com (CC0)"}
                                    ]
                                },
                                {
                                    subTitulo:"Plasmalema",
                                    descripcion: "La membrana plasmática o plasmalema lleva a cabo las siguientes funciones:<ul><li>Delimita el citoplasma de la célula.<li>Media el transporte de sustancias hacia el interior y el exterior (permeabilidad pasiva) y el transporte activo, gracias a las que actúan como acarreadoras o como canales. </li><li>Forma la pared celular. </li><li>Traslada sustancias reguladoras del crecimiento y la diferenciación celular. </li></ul>",
                                    imagen: [
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 4. Estructura de la membrana celular. Creada por UNED a partir de imagen de Bruce Blaus (CC BY)"}
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id:"32", nombre: "CULTURA",
                    resumen: "Las células vegetales son eucariotas; es decir, células con núcleo verdadero. Tienen muchos componentes en común con la célula animal, pero la pared celular, la vacuola y los plastidios son componentes exclusivos de las células vegetales. <br> Para estudiar la célula vegetal, podemos dividirlas en tres secciones; le invitamos a seguir los enlaces para conocer más sobre ellas:",
                    descripcion : [
                        {
                            texto: "El siguiente mapa conceptual resume las partes de la célula vegetal: Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, soluta cum! Cupiditate quia, optio asperiores blanditiis dolore ipsam ex nisi iusto amet deleniti maxime, natus architecto. Perspiciatis tempore ipsam minus? ",
                            imagen: [
                                { url:"https://bcw-media.s3.ap-northeast-1.amazonaws.com/text_to_image_v6_poster_01_f038887d26.jpg", descripcion: "Figura 1. Células hijas separadas por nuevas paredes celulares, por Dr. phil.nat Thomas Geier (CC BY-SA 3.0)" }
                            ]
                        },
                        {
                            texto: "El siguiente mapa conceptual resume las partes de la célula vegetal: Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, soluta cum! Cupiditate quia, optio asperiores blanditiis dolore ipsam ex nisi iusto amet deleniti maxime, natus architecto. Perspiciatis tempore ipsam minus? ",
                            imagen: [
                                { url:"https://bcw-media.s3.ap-northeast-1.amazonaws.com/text_to_image_v6_poster_01_f038887d26.jpg", descripcion: "Figura 1. Células hijas separadas por nuevas paredes celulares, por Dr. phil.nat Thomas Geier (CC BY-SA 3.0)" }
                            ]
                        }
                    ],
                    // CONTENIDO ---------------
                    seccion: [
                        {
                            id: "321", nombre: "AAAAAAAA",
                            contenido: [
                                {
                                    subTitulo:"Rigidez y forma",
                                    descripcion: "La pared de las células vegetales está formada principalmente por celulosa, que es un polisacárido de glucosa. <br> Gracias a la rigidez que proporciona la celulosa, la pared protege la célula vegetal, le da resistencia contra patógenos, la limita del medio, le da sostén y forma. Existen otras sustancias en la pared, como la hemicelulosa (otra forma de celulosa) y la lignina, sustancia que no solo da rigidez a la pared, sino que evita su descomposición. <br> También hay pectinas, que son sustancias que contienen azúcares; están presentes en grandes cantidades en las paredes de las células de frutos como la guayaba y la naranja. Ayudan a la plasticidad de la pared celular. En la industria alimenticia, se usan como agentes gelificantes en jaleas y mermeladas. <br> Algunas células poseen ceras, cutina y suberina, que son lípidos que dan impermeabilidad a la pared celular; y, el carbohidrato calosa, que también defiende a la célula contra la invasión de patógenos. <br> En muchas células vegetales que han dejado de crecer, la pared celular se divide en dos secciones: una pared primaria y una pared secundaria. La pared es secretada por la célula viva, por lo que la capa más joven está junto a la membrana celular; y, la capa más vieja, hacia fuera. <br> La pared primaria se forma inmediatamente después de la división celular, antes de que la célula complete su crecimiento. En la figura 1, se muestra la formación de nuevas paredes celulares en células de cebolla. <br> La pared primaria posee proteínas que le ayudan a la resistencia contra enfermedades y para la adherencia de la membrana plasmática a la pared. <br> Las paredes primarias de células adyacentes están separadas por la lámina media, una estructura que se compone principalmente de sustancias como la pectina. <br> La pared secundaria, si existe, está unida a la membrana plasmática porque se forma de último, cuando la célula ha finalizado su crecimiento. Se depositan en ella compuestos como lignina y suberina. <br> Entre las células adyacentes, están los plasmodesmos, canales continuos de citoplasma que atraviesan las paredes celulares y permiten la comunicación entre células y el paso de sustancias (ver figura 2). <br>",
                                    imagen: [
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 1. Células hijas separadas por nuevas paredes celulares, por Dr. phil.nat Thomas Geier (CC BY-SA 3.0)"},
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 2. Estructura de la pared celular. Creada por UNED, a partir de imagen de Mariana Ruiz Villarreal (CC0 1.0)."}
                                    ]
                                }
                            ]
                        },
                        {
                            id: "322", nombre: "BBBBBBB",
                            contenido: [
                                {
                                    subTitulo:"Sistema de membranas de la célula vegetal",
                                    descripcion: "La célula vegetal cuenta con un complejo sistema de membranas. Este se compone de:<ul><li><li>Plasmalema</li><li>Retículo endoplasmático</li><li>Aparato de Golgi</li><li>Vacuola</li><li>Membrana nuclear</li></ul>Las membranas están formadas por fosfolípidos y proteínas. No son sólidos rígidos, sino más bien estructuras muy flexibles en las que las moléculas pueden progagarse hacia los lados. Existen espacios en las membranas a través de las cuales pueden difundirse moléculas pequeñas (ver figura 3).",
                                    imagen: [
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 3. Estructura de la membrana celular. Creada por UNED, a partir de imagen de Honor Lake en Clker.com (CC0)"}
                                    ]
                                },
                                {
                                    subTitulo:"Plasmalema",
                                    descripcion: "La membrana plasmática o plasmalema lleva a cabo las siguientes funciones:<ul><li>Delimita el citoplasma de la célula.<li>Media el transporte de sustancias hacia el interior y el exterior (permeabilidad pasiva) y el transporte activo, gracias a las que actúan como acarreadoras o como canales. </li><li>Forma la pared celular. </li><li>Traslada sustancias reguladoras del crecimiento y la diferenciación celular. </li></ul>",
                                    imagen: [
                                        {url:"https://multimedia.uned.ac.cr/pem/planeta_planta/image/01-estructura/01-celulas-vegetales/01.jpg", descripcion: "Figura 4. Estructura de la membrana celular. Creada por UNED a partir de imagen de Bruce Blaus (CC BY)"}
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};