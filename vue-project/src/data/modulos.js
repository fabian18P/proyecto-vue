export const modulos = {
  modulos: [
    // MODULO 1
    {
      id: "1", color: "red", nombre: "Estructura de las plantas", img: "static/moduloUno/modulo1.png",
      subModulo: [
        {
          id:"11", nombre: "Células vegetales",
          resumen: "Las células vegetales son eucariotas; es decir, células con núcleo verdadero. Tienen muchos componentes en común con la célula animal, pero la pared celular, la vacuola y los plastidios son componentes exclusivos de las células vegetales. \n Para estudiar la célula vegetal, podemos dividirlas en tres secciones; le invitamos a seguir los enlaces para conocer más sobre ellas:",
          descripcion : [
            {
              texto: "La siguiente gráfica resume las partes de la célula vegetal:",
              imagen: [
                { url:"https://dr282zn36sxxg.cloudfront.net/datastreams/f-d%3Af5062683d9ce1d48ed7df23b8a4e82797193595b1365c90c53aa9466%2BIMAGE_TINY%2BIMAGE_TINY.1", descripcion: "Estructura de las celular vegetales | By: Douglas Wilkin, Ph.D. Jean Brainard, Ph.D." }
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
                  descripcion: `La pared de las células vegetales está formada principalmente por <strong>celulosa</strong>, que es un polisacárido de glucosa.

                                Gracias a la rigidez que proporciona la celulosa, la pared protege la célula vegetal, le da resistencia contra patógenos, la limita del medio, le da sostén y forma. Existen otras sustancias en la pared, como la <strong>hemicelulosa</strong> (otra forma de celulosa) y la <strong>lignina</strong>, sustancia que no solo da rigidez a la pared, sino que evita su descomposición.

                                También hay <strong>pectinas,</strong> que son sustancias que contienen azúcares; están presentes en grandes cantidades en las paredes de las células de frutos como la guayaba y la naranja. Ayudan a la plasticidad de la pared celular. En la industria alimenticia, se usan como agentes gelificantes en jaleas y mermeladas.

                                Algunas células poseen <strong>ceras, cutina y suberina,</strong> que son lípidos que dan impermeabilidad a la pared celular; y, el carbohidrato <strong>calosa,</strong> que también defiende a la célula contra la invasión de patógenos.

                                En muchas células vegetales que han dejado de crecer, la pared celular se divide en dos secciones: una pared primaria y una pared secundaria. La pared es secretada por la célula viva, por lo que la capa más joven está junto a la membrana celular; y, la capa más vieja, hacia fuera.

                                La <strong>pared primaria</strong> se forma inmediatamente después de la división celular, antes de que la célula complete su crecimiento. En la figura 1, se muestra la formación de nuevas paredes celulares.

                                La pared primaria posee proteínas que le ayudan a la resistencia contra enfermedades y para la adherencia de la membrana plasmática a la pared.

                                Las paredes primarias de células adyacentes están separadas por la <strong>lámina media,</strong> una estructura que se compone principalmente de sustancias como la pectina.

                                La <strong>pared secundaria,</strong> si existe, está unida a la membrana plasmática porque se forma de último, cuando la célula ha finalizado su crecimiento. Se depositan en ella compuestos como lignina y suberina.

                                Entre las células adyacentes, están los <strong>plasmodesmos,</strong> canales continuos de citoplasma que atraviesan las paredes celulares y permiten la comunicación entre células y el paso de sustancias (ver figura 2).`,
                  imagen: [
                      {url:"https://mmegias.webs.uvigo.es/5-celulas/ampliaciones/imagenes/2-pared-celular-fragmoplasto.png", descripcion: "Figura 1. Formación de la nueva pared celular gracias a la actividad del fragmoplasto."},
                      {url:"https://www.lifeder.com/wp-content/uploads/2020/01/Plasmodesmos-1.jpg", descripcion: "Figura 2. Vía simplástica y apoplástica y la participación de los plasmodesmos."}
                  ]
                }
              ]
            },
            {
              id: "112", nombre: "Membranas",
              contenido: [
                {
                  subTitulo:"Sistema de membranas de la célula vegetal",
                  descripcion: `La célula vegetal cuenta con un complejo sistema de membranas. Este se compone de:
                                ◉ Plasmalema
                                ◉ Retículo endoplasmático
                                ◉ Aparato de Golgi
                                ◉ Vacuola
                                ◉ Membrana nuclear

                                Las membranas están formadas por <strong>fosfolípidos</strong> y <strong>proteínas</strong>. No son sólidos rígidos, sino más bien estructuras muy flexibles en las que las moléculas pueden progagarse hacia los lados. Existen espacios en las membranas a través de las cuales pueden difundirse moléculas pequeñas (ver figura 1).`,
                  imagen: [
                      {url:"https://cdn.kastatic.org/ka-perseus-images/8bd8295352accd0e2640a4af5a2049de34e5753b.png", descripcion: "Figura 1. Los principales componentes de la membrana plasmática son los lípidos (fosfolípidos y colesterol)."}
                  ]
                },
                {
                  subTitulo:"Plasmalema",
                  descripcion: `La membrana plasmática o plasmalema lleva a cabo las siguientes funciones:
                                ◉ Delimita el citoplasma de la célula.
                                ◉ Media el transporte de sustancias hacia el interior y el exterior (permeabilidad pasiva) y el transporte activo, gracias a las que actúan como acarreadoras o como canales.
                                ◉ Forma la pared celular.
                                ◉ Traslada sustancias reguladoras del crecimiento y la diferenciación celular.

                                <strong style='font-size:48px'>Retículo endoplasmático</strong>
                                El retículo endoplasmático es una doble membrana en el citoplasma. Sirve como un sistema de comunicación dentro de la célula. Se presenta en dos formas:
                                ◉ <strong>Liso (REL).</strong> Participa en la síntesis de lípidos.
                                ◉ <strong>Rugoso (RER).</strong> Con ribosomas. Interviene en la síntesis de proteínas.

                                Los <strong>ribosomas</strong> son estructuras en las que se lleva a cabo la síntesis de proteínas (ver figura 2).
                                `,
                  imagen: [
                      {url:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMmu1fm_OpkGvAb2qN_MmfsAn7LuU-QF4Ffg6ggE6FBVlUxHJZ9U-_kGi-0-oG3VkIfd_lUdSohaR-lJ65bNfMMbKzzBgh5VERTG19WWOawVBjMGxhB5Nh1uJ_1lg2pSQjQCd_80CDqlgb/s1600/Reticulo-endoplasmatico-liso.gif", descripcion: "Figura 2. El retículo endoplasmático liso es uno de los principales orgánulos de las células eucariotas."}
                  ]
                },
                {
                  subTitulo:"Aparato de Golgi",
                  descripcion: `El aparato de Golgi es un conjunto de sacos aplanados. Participa en el empaquetamiento de proteínas y otras sustancias, principalmente para la formación de la pared celular (ver figura 3).

                                <strong style='font-size:48px'>Vacuola</strong>
                                La vacuola es un compartimiento cerrado dentro de la célula vegetal. Almacena en su interior agua, sales, moléculas orgánicas, pigmentos, enzimas, ácidos y cristales, entre otros. Sus enzimas hacen la digestión de varios materiales. Puede ocupar hasta 90% del volumen total de la célula (ver figura 4).

                                <strong style='font-size:48px'>Membrana nuclear</strong>
                                La membrana nuclear o carioteca consta de un par de membranas (interna y externa) que permite el intercambio de materiales entre el núcleo y el citoplasma.
                                `,
                  imagen: [
                      {url:"https://www.lifeder.com/wp-content/uploads/2020/06/aparato-de-Golgi-ilust-lifeder.jpg", descripcion: "Figura 3. El aparato de Golgi es un orgánulo celular eucariota que se encarga de la síntesis, el procesamiento y la distribución de diferentes macromoléculas."},
                      {url:"https://cdn0.ecologiaverde.com/es/posts/2/3/9/que_es_una_vacuola_4932_0_600.jpg", descripcion: "Figura 4. La vacuola es un orgánulo intracelular separado del entorno citosólico por medio de una membrana. "}
                  ]
                }
              ]
            },
            {
              id: "113", nombre: "Organelas",
              contenido: [
                {
                  subTitulo:"Organelas e inclusiones citoplasmáticas de la célula vegetal",
                  descripcion: `En el citoplasma de la célula vegetal se encuentran, además de la vacuola, una serie de estructuras, entre ellas:
                                ◉ Núcleo
                                ◉ Microtúbulos y microfilamentos
                                ◉ Microcuerpos
                                ◉ Mitocondrias
                                ◉ Plastidios

                                <strong style='font-size:48px'>Nucleo</strong>
                                El núcleo controla las actividades de las células (para determinar cuáles proteínas se necesitan y cuándo); además, almacena la información genética y la pasa a las células hijas en la división celular.
                                La información genética está almacenada en el <strong>ADN</strong> (ácido desoxirribonucleico). El ADN más las proteínas histonas forman hebras que reciben en conjunto el nombre de <strong>cromatina.</strong> La cromatina se condensa en la división celular para formar cuerpos con forma de bastón llamados <strong>cromosomas.</strong>
                                El <strong>nucleoplasma</strong> es la solución acuosa con muchas enzimas en la que están suspendidos la cromatina y el <strong>nucleolo</strong> (corpúsculo esférico formado por ARN y proteínas) (ver figura 1).
                                `,
                  imagen: [
                      {url:"https://www.lifeder.com/wp-content/uploads/2020/06/n%C3%BAcleo-celular-lifeder-ilust.jpg", descripcion: "Figura 1. Nucleo de celula eucariota."}
                  ]
                },
                {
                  subTitulo:"Microtúbulos y microfilamentos",
                  descripcion: `Los <strong>microtúbulos</strong> son cilindros largos y huecos de proteína tubulina. Sus funciones se relacionan con la división celular, el movimiento celular y la formación de la pared celular.

                                Los <strong>microfilamentos</strong> son estructuras sólidas de menor tamaño que los microtúbulos, compuestas por la proteína actina. También se relacionan con la producción de movimiento celular.

                                <strong style='font-size:48px'>Microcuerpos</strong>
                                Los microcuerpos son organelas esféricas delimitadas por una membrana simple. Hay dos tipos: peroxisomas y glioxisomas; están relacionadas con la fotosíntesis y la conversión de grasas en carbohidratos durante la germinación de las semillas.

                                <strong style='font-size:48px'>Mitocondrias</strong>
                                Las mitocondrias se encargan de la respiración celular. Más de la mitad de las reacciones químicas de la célula se producen en las mitocondrias. La matriz o fluido en el interior de la mitocondria es una solución acuosa con enzimas, ácidos nucleicos y proteínas (ver figura 2).
                                `,
                  imagen: [
                      {url:"https://www.buscador.com/wp-content/uploads/2020/10/diagrama-de-la-mitocondria.png", descripcion: "Figura 2. Estructura de la mitocondria."}
                  ]
                },
                {
                  subTitulo:"Plastidios",
                  descripcion: `Los plastidios están rodeados por una envoltura que tiene doble membrana. Según la clase de pigmentos que contengan, se clasifican en los siguientes:
                                ◉ <strong>Cloroplastos.</strong> Contienen principalmente <strong>clorofila</strong>, el pigmento verde que capta la luz solar. También tienen carotenoides. En ellos se lleva a cabo la <strong>fotosíntesis.</strong> El estroma del cloroplasto tiene membranas apiladas como sacos, llamadas <strong>tilacoides</strong>, donde está la clorofila. Las pilas o grupos de tilacoides se llaman granum o grana. Los cloroplastos muestran un movimiento denominado <strong>ciclosis</strong>.
                                ◉ <strong>Cromoplastos.</strong> Sintetizan y almacenan carotenoides. Son responsables de dar coloraciones rojizas, amarillas o naranja a flores, frutos, etc (ver figura 3).
                                ◉ <strong>Leucoplastos.</strong> Sin pigmentos. Pueden ser tipo <strong>amiloplastos</strong> (almacenan almidón), <strong>elaioplastos</strong> (almacenan aceites) o <strong>proteinoplastos</strong> (almacenan proteínas). Si se dejan a la luz, pueden transformarse en cloroplastos.
                                `,
                  imagen: [
                      {url:"https://cdn0.ecologiaverde.com/es/posts/0/1/0/que_son_los_cromoplastos_5010_0_600.jpg", descripcion: "Figura 3. Pared de Cromoplastos."}
                  ]
                }
              ]
            }
          ]
        },



        {
          id:"12", nombre: "Tejidos vegetales",
          resumen: `Las células vegetales son eucariotas; es decir, células con núcleo verdadero. Tienen muchos componentes en común con la célula animal, pero la pared celular, la vacuola y los plastidios son componentes exclusivos de las células vegetales.

                    En las plantas hay dos categorías de tejidos. Siga los enlaces para conocer más sobre ellos.
                    `,
          descripcion : [
            {
              texto: "El la siguiente imagen de muestra un mapa conceptual jerarquico sobre los tejidos:",
              imagen: [
                { url:"https://mmegias.webs.uvigo.es/1-vegetal/v-iconos/tejidos-plantas.png", descripcion: "Clasificación tradicional de los tejidos de las plantas." }
              ]
            }
          ],
          // CONTENIDO ---------------
          seccion: [
            {
              id: "121", nombre: "Tejidos meristemáticos",
              contenido: [
                {
                  subTitulo:"Tejidos meristemáticos o meristemos",
                  descripcion: `Los tejidos meristemáticos son <strong>no diferenciados,</strong> es decir, son <strong>simples,</strong> no especializados en una función particular.

                                Las células que forman los meristemos están en <strong>constante división celular,</strong> pues su función es originar nuevas células repetidamente (aunque en algunos casos, esa actividad se inicia tras un periodo de reposo). Mantienen la capacidad de dividirse durante <strong> toda su vida.</strong>

                                Las células meristemáticas están muy juntas entre sí, sin espacios intercelulares. Sus paredes celulares son delgadas (poca celulosa), el núcleo es grande, a veces sin vacuolas o con pocas vacuolas pequeñas.

                                Existen diferentes formas de clasificar los meristemos:

                                <strong>A. Según el <strong>origen</strong> de las células iniciales, se clasifican en las siguientes:</strong>
                                &nbsp; ◉ Meristemos de <strong>engrosamiento primario.</strong> Intervienen en el engrosamiento de las <strong>monocotiledóneas</strong> (maíz, frijol, arroz, trigo, orquídeas, palmas, etc.).
                                &nbsp; ◉ Meristemos de <strong>engrosamiento secundario.</strong> Intervienen en el engrosamiento de las plantas <strong>leñosas</strong> (arbustos y árboles de los grupos de las dicotiledóneas y las gimnospermas).

                                <strong>B. Según los tejidos que producen, los meristemos se clasifican en los siguientes:</strong>
                                &nbsp; ◉ <strong>Protodermis.</strong> Origina la <strong>epidermis.</strong>
                                &nbsp; ◉ <strong>Fundamental.</strong> Da origen al <strong>parénquima.</strong>
                                &nbsp; ◉ <strong>Procambium.</strong> Origina los tejidos <strong>conductores</strong> xilema y floema.

                                <strong>C. Según la <strong>posición,</strong> los meristemos se clasifican en los siguientes:</strong>
                                &nbsp; ◉ Meristemos apicales, que están en los ápices o puntas del tallo y de la raíz. Provienen del embrión; es decir, son los primeros que aparecen. Causan la elongación o el crecimiento longitudinal del tallo y de la raíz. Lo que conocemos como yemas son meristemos. En la raíz, la caliptra o cofia protege el meristemo apical (ver figura 1).
                                &nbsp; ◉ Meristemos intercalares, que están en posiciones intermedias de la planta, por ejemplo, en los nudos de elongación. También, producen crecimiento longitudinal (ver figura 2).
                                &nbsp; ◉ Meristemos laterales, que están distribuidos en toda la planta. Como están distribuidos a manera de cilindros, al dividirse, sus células provocan el engrosamiento o el crecimiento en grosor (crecimiento secundario) de los tallos y las raíces de las plantas leñosas. Los meristemos laterales pueden ser de dos tipos:
                                - <strong>Cambium vascular.</strong> Origina el xilema y el floema secundarios de los árboles y de los arbustos.
                                - <strong>Cambium suberoso o felógeno.</strong> Produce la peridermis, tejido que sustituye la epidermis del tallo y la raíz de las plantas leñosas.`,
                  imagen: [
                      {url:"https://mmegias.webs.uvigo.es/1-vegetal/v-imagenes-grandes/imagenes/meristemo-primario-todo.jpg", descripcion: "Figura 1. Los tejidos meristemáticos son los responsables del crecimiento vegetal."},
                      {url:"https://plantix.net/es/library/assets/custom/crop-images/sugarcane.jpeg", descripcion: "Figura 2. Tallo de caña de azucar."}
                  ]
                }
              ]
            },
            {
              id: "122", nombre: "Tejidos adultos",
              contenido: [
                {
                  subTitulo:"Tejidos adultos",
                  descripcion: `Los tejidos <strong>adultos</strong> o <strong>permanentes</strong> provienen de la diferenciación de los tejidos meristemáticos.

                                Las células de la mayoría de los tejidos adultos han perdido la capacidad de dividirse, ya que sus funciones vitales han disminuido o las células están muertas a la madurez. A veces están llenas de aire o de agua.

                                El cuerpo de la planta consta de tres grupos básicos de tejidos (ver figura 1):

                                ◉ <strong>Tejidos dérmicos.</strong> Son las capas más externas del cuerpo de la planta y, por tanto, fungen como tejidos de protección contra daños mecánicos y patógenos. Son la <strong>epidermis</strong> y la <strong>peridermis.</strong> En las plantas <strong>leñosas,</strong> la peridermis reemplaza la epidermis de los tallos y de las raíces de las plantas leñosas.
                                ◉ <strong>Tejidos fundamentales.</strong> Constituyen la mayor parte del cuerpo de la planta. El <strong>parénquima</strong> (tejido más abundante), el <strong>colénquima</strong> y el <strong>esclerénquima</strong> son tejidos fundamentales.
                                ◉ <strong>Tejidos conductores.</strong> Son tejidos complejos que transportan agua, nutrientes elaborados, hormonas y minerales dentro de la planta. El <strong>xilema</strong> y el <strong>floema</strong> son los tejidos conductores o vasculares.

                                Los tejidos adultos también se pueden clasificar como <strong>primarios</strong> si provienen de los meristemos primarios. Son la epidermis, el parénquima, el colénquima, el esclerénquima y el xilema y el floema primarios.

                                Los tejidos adultos <strong>secundarios</strong> se originan de meristemos secundarios. Son la peridermis, el xilema secundario y el floema secundario.
                                `,
                  imagen: [
                      {url:"https://i.ytimg.com/vi/Fw0mB_ULqgU/sddefault.jpg?v=5fcc107a", descripcion: "Figura 1. Tejidos vegetales"}
                  ]
                }
              ]
            },
            {
              id: "123", nombre: "Tejidos dérmicos",
              contenido: [
                {
                  subTitulo:"Tejidos adultos",
                  descripcion: `Los tejidos dérmicos, al constituir la parte más externa de la planta, protegen el cuerpo vegetal de daños mecánicos y patógenos (ver figura 1).

                                La epidermis protege la raíz, el tallo, las hojas, las flores, los frutos y las semillas.

                                En las plantas leñosas, por lo general durante el primer año, la peridermis reemplaza la epidermis de la raíz y del tallo. En ciertas plantas esto sucede varios años después, cuando el vegetal comienza su crecimiento secundario.
                                `,
                  imagen: [
                      {url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Leaf_Structure_es.svg/600px-Leaf_Structure_es.svg.png", descripcion: "Figura 1. Representación de tejido dermico."}
                  ]
                },
                {
                  subTitulo:"Epidermis",
                  descripcion: `La epidermis es un tejido formado por células epidérmicas, sin cloroplastos, que tienen una pared externa gruesa, para proteger de la desecación. En muchas especies leñosas, como los pinos, la pared de las células epidérmicas tiene lignina y cutina; estas sustancias ayudan a impedir la salida del agua del interior de la planta hacia afuera.

                                La cutina es una sustancia de naturaleza lipídica. Forma una película llamada cutícula sobre la epidermis.

                                No hay cutícula ni en la raíz ni en los órganos sumergidos de las plantas acuáticas, porque estos órganos deben poder absorber agua. En la imagen se observa cómo las gotas de agua resbalan sobre una hoja de nenufar, gracias a su cutícula (ver figura 2).

                                En la epidermis de las hojas, los pétalos, los estambres y el gineceo de la flor, así como en los tallos verdes, se encuentran poros llamados estomas.

                                Un estoma es un poro o abertura en la epidermis, formada por dos células con forma de riñón llamadas células guardianas, también conocidas como células oclusivas o células de cierre. Estas dos células, al moverse, abren o cierran la abertura llamada ostiolo o poro. Sus células sí tienen cloroplastos y muchos carbohidratos.

                                Los estomas mantienen la homeostasis (regulan el medio interno de la planta). Además, controlan la pérdida de vapor de agua y el ingreso de dióxido de carbono.

                                En algunas especies, las células oclusivas de los estomas cuentan con células que las acompañan, llamadas células subsidiarias.

                                En las plantas acuáticas con hojas flotantes, los estomas están solo en el haz de la hoja. Muchas plantas parásitas no tienen estomas.

                                Las paredes de las células oclusivas que miran al poro están engrosadas. Cuando las células oclusivas están turgentes (llenas de agua), el ostiolo o poro se abre. Si pierden la turgencia, las guardianas células se “arrugan” y se cierra el poro (ver figura 3).

                                En ocasiones, la epidermis también cuenta con tricomas. Estas son excrecencias o apéndices que se pueden encontrar en las células. El origen de la palabra tricoma proviene de un vocablo griego tríchoma (τρίχωμα ) que significa 'pelo', ya que muchos tricomas de células epidérmicas parecen pelos.

                                Los tricomas tienen múltiples funciones: los pelos de las hojas pueden ser urticantes; de esa manera, repelen a los animales herbívoros. También reducen la transpiración y reflejan la radiación solar. Los tricomas de la raíz (pelos radicales) contribuyen a incrementar la superficie de absorción de agua.`,
                  imagen: [
                      {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9gpeaKTrf6U-TOLyYZFPB5zqfuA6BaGe6HzDC42Tt_nzwvsRxNwsUbDED4du0i0adu64&usqp=CAU", descripcion: "Figura 2. Hoja de nenufar."},
                      {url:"https://st4.depositphotos.com/3687893/30830/i/450/depositphotos_308308992-stock-photo-close-up-tradescantia-spathacea-stomata.jpg", descripcion: "Figura 3. Epidermis de hoja de Tradescantia pallida."},
                  ]
                },
                {
                  subTitulo:"Peridermis",
                  descripcion: `En las plantas leñosas, por lo general durante el primer año, la peridermis reemplaza la epidermis de la raíz y del tallo. En ciertas plantas, esto sucede varios años después, cuando el vegetal comienza su crecimiento secundario. El vocablo peridermis proviene del griego peri= 'alrededor', y derma = 'piel'.

                                Este tejido de protección es el conjunto de tres tejidos:
                                ◉ cambium suberoso o felógeno.
                                ◉ felodermis.
                                ◉ corcho.

                                El cambium suberoso o felógeno se divide constantemente por ser un tejido meristemático. Como producto de su división, se forman los tejidos felodermis hacia el interior y corcho hacia el exterior.

                                La felodermis también se conoce como corteza secundaria. Está formada, en buena parte, por células vivas.

                                El corcho también se llama felema o súber. Este tejido es impermeable a gases y agua. Las células que lo componen tienen paredes celulares reforzadas con una sustancia llamada suberina y están muertas a la madurez.

                                La figura 4, muestra un corte de un árbol. La peridermis está teñida de color oscuro.

                                En los tallos y en las raíces de las plantas leñosas se observan aberturas en la peridermis, llamadas lenticelas.

                                Las lenticelas están formadas por células separadas por grandes espacios intercelulares. Las primeras lenticelas, por lo general, se forman debajo de los estomas. Al igual que estos, funcionan como un poro por el cual ocurre un intercambio de gases entre la atmósfera y la planta. Sin embargo, a diferencia de los estomas, las lenticelas no poseen células oclusivas, por lo que permanecen abiertas (ver figura 5).`,
                  imagen: [
                      {url:"https://blogs.upm.es/innebioveg/wp-content/uploads/sites/452/2018/02/image028-1024x734.jpg", descripcion: "Figura 4. Tallo de dicotiledónea leñosa."},
                      {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnADy5T-8Rv3voewPZOh71mRSlR-8bMtzKcw&s", descripcion: "Figura 5. Lenticelas en un árbol"}
                  ]
                }
              ]
            },
            {
              id: "124", nombre: "Tejidos fundamentales",
              contenido: [
                {
                  subTitulo:"Tejidos adultos",
                  descripcion: `Los tejidos fundamentales parénquima, colénquima y esclerénquima (ver figura 1) constituyen la mayor parte del cuerpo de la planta, ya que ocupan el espacio entre la epidermis y los tejidos conductores.

                                Los tejidos fundamentales intervienen en la fotosíntesis, en el almacenamiento de agua y de nutrientes y en el sostén.`,
                  imagen: [
                      {url:"https://pbs.twimg.com/media/DV2KvJcXUAE46qi.jpg", descripcion: "Figura 1. Tejidos fundamentales de una planta."}
                  ]
                },
                {
                  subTitulo:"Parénquima",
                  descripcion: `El parénquima es el tejido más abundante de la planta, ya que se encuentra en las hojas (mesófilo), en la médula de los tallos, en la pulpa de los frutos, etc.

                                Sus células son isodiamétricas (igual forma y tamaño), están vivas a la madurez y tienen paredes primarias delgadas y sin lignina. Hay varios tipos de parénquima, según su función:

                                ◉ <strong>Clorénquima.</strong> También se conoce como parénquima clorofílico, ya que posee cloroplastos y hace fotosíntesis. En las hojas, el clorénquima se presenta en dos formas: como parénquima o mesófilo en empalizada, con células alargadas, y parénquima o mesófilo esponjoso, con grandes espacios intercelulares (ver figura 18).
                                ◉ <strong>Parénquima de almacenamiento.</strong> Acumula sustancias energéticas. En la papa, por ejemplo, hay una gran cantidad de parénquima de almacenamiento o reserva. La figura 19 es del parénquima de reserva de una raíz.
                                ◉ <strong>Aerénquima.</strong> También llamado parénquima aerífero; posee grandes espacios intercelulares llenos de aire. Es típico de las plantas que habitan en medios acuáticos, bajos en oxígeno (ver figura 20).
                                ◉ <strong>Parénquima acuífero.</strong> También llamado hidrénquima, reserva agua en plantas suculentas. Sus células tienen vacuolas muy grandes, llenas de agua (ver figura 21).`,
                  imagen: [
                      {url:"https://www.biologia.edu.ar/botanica/tema11/images11/syringa_parenquima_esponjoso_paradermal.jpg", descripcion: "Figura 2. Estructura de Clorénquima."},
                      {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6SgmxW62QBFXLGdgcfHSO6T0k5aPP5lT1bg&s", descripcion: "Figura 3. Estructura de Parénquima de almacenamiento"},
                      {url:"https://www.biologia.edu.ar/botanica/tema11/images11/myriop.jpg", descripcion: "Figura 4. Estructura de Aerénquima"},
                      {url:"https://mmegias.webs.uvigo.es/1-vegetal/v-imagenes-grandes/imagenes/parenquima-acuifero.jpg", descripcion: "Figura 5. Estructura de Parénquima acuífero"}
                  ]
                },
                {
                  subTitulo:"Esclerénquima",
                  descripcion: `El esclerénquima es un tejido complejo que, al igual que el colénquima, da sostén estructural a la planta. Difiere del colénquima en cuanto a que proporciona rigidez (Ver figura 6).

                                Las células del esclerénquima están muertas a la madurez: pierden el protoplasma, pero queda su pared celular con alto contenido de lignina.

                                El esclerénquima consta de dos tipos de células:
                                ◉ <strong>Fibras.</strong> Células estrechas y muy alargadas, a veces lignificadas y otras engrosadas por celulosa y pectina. El ser humano ha utilizado las fibras del yute, lino, cáñamo, bambú, etc., para fabricar artesanías y ropa, entre otros.
                                ◉ <strong>Esclereidas.</strong> También son llamadas células pétreas. Son más o menos isodiamétricas, muy lignificadas. Aisladas o en grupo, a veces asociadas al xilema o al floema. Contribuyen a resistir el aplastamiento. Ejemplo: las esclereidas de la pera y el cas (la sensación arenosa al comer estos frutos se debe a las esclereidas).`,
                  imagen: [
                      {url:"https://www.lifeder.com/wp-content/uploads/2019/01/colenquima.jpg", descripcion: "Figura 6. Tejidos de Colénquima."}
                  ]
                }
              ]
            },
            {
              id: "125", nombre: "Tejidos conductores",
              contenido: [
                {
                  subTitulo:"Tejidos conductores",
                  descripcion: `Los tejidos conductores son el <strong>xilema</strong> y el <strong>floema</strong> (ver figura 1).  Estos son tejidos complejos que están asociados a células de otros tejidos como el parénquima y el esclerénquima.

                                El xilema es el tejido que conduce agua y minerales desde la raíz hasta el resto de la planta.

                                El floema transporta sustancias elaboradas como carbohidratos y hormonas desde su sitio de producción hasta el resto de la planta.`,
                  imagen: [
                      {url:"https://i.pinimg.com/736x/ea/89/e0/ea89e0af0958448159da25c76096fbe1.jpg", descripcion: "Figura 1. Funcionamiento del xilema y floema."}
                  ]
                },
                {
                  subTitulo:"Xilema",
                  descripcion: `El xilema es un tejido conductor de agua y de minerales disueltos, desde la raíz hasta el resto de la planta. También proporciona sostén.

                                Las plantas que tienen solo crecimiento primario desarrollan xilema primario a partir del tejido meristemático denominado procambium. En las plantas leñosas, hay xilema secundario que es originado por el meristemo llamado cambium vascular.

                                Las células conductoras del xilema se llaman elementos traqueales. Estas son células alargadas con pared secundaria, sin protoplasto en la madurez y, generalmente, con puntuaciones en las paredes.

                                Por un lado, los elementos traqueales poseen en las paredes laterales unos engrosamientos secundarios que pueden semejar anillos, hélices, escaleras, redes o puntuaciones. Por otro lado, tienen puntuaciones, las cuales son depresiones en las paredes celulares atravesadas por plasmodesmos (conexiones citoplasmáticas entre una célula y otra). Los elementos traqueales pueden ser de dos tipos:
                                ◉ <strong>Traqueidas. Células alargadas.</strong> Son más primitivas. Son los únicos elementos traqueales en las briópsidas y en las coníferas.
                                ◉ <strong>Miembros de los vasos</strong> (o elementos de los vasos). Estas células, además de puntuaciones, pueden tener perforaciones (áreas sin paredes primarias ni secundarias) que son como hoyos o huecos en la pared celular. La parte de la pared con las perforaciones se llama placa de perforación. Los miembros de los vasos se unen longitudinalmente en el sitio donde están las placas de perforación y forman una columna continua (como un tubo o un vaso).

                                En las <strong>angiospermas</strong> existen tanto traqueidas como miembros de los vasos, pero hay más miembros de los vasos (ver figura 2).`,
                  imagen: [
                      {url:"https://www.biologia.edu.ar/botanica/tema15/images15/vaso1.jpg", descripcion: "Figura 2. Estructura de los elementos de los vasos."}
                  ]
                },
                {
                  subTitulo:"Floema",
                  descripcion: `El <strong>floema</strong> es un tejido conductor de sustancias elaboradas (principalmente carbohidratos de la fotosíntesis). Conduce esas sustancias desde el sitio de producción al resto de la planta.

                                Las plantas que tienen solo crecimiento primario desarrollan floema primario a partir del tejido meristemático denominado procambium. En las plantas leñosas hay floema secundario que es originado por el meristemo llamado cambium vascular.

                                Las células conductoras del floema se llaman elementos cribosos. El término criboso se refiere a que un grupo de poros forma como una malla o rejilla, a través de la cual se conectan los protoplastos de las células adyacentes. La zona donde se encuentran los poros se llama área cribosa.

                                Hay dos tipos de elementos cribosos: las células cribosas (más primitivas) y los miembros o elementos de los tubos cribosos.

                                ◉ <strong>Células cribosas.</strong> En las plantas vasculares sin semillas y en las gimnospermas, las células cribosas son los únicos elementos cribosos. Las áreas cribosas son indiferenciadas, con poros de diámetro angosto, distribuidos por todas las paredes celulares.
                                ◉ <strong>Miembros de los tubos cribosos.</strong> Solo se encuentran en las angiospermas. Las áreas cribosas de algunas paredes tienen unos poros más grandes que los de otras paredes de la misma célula (esa parte con los poros más grandes se llama placa cribosa). Los miembros de los tubos cribosos se unen longitudinalmente en sus extremos y forman los tubos cribosos.

                                Las <strong>células de transferencia floemática</strong> son células asociadas al floema que colectan los carbohidratos producidos en las hojas y los transportan hasta el tubo criboso (ver figura 3).`,
                  imagen: [
                      {url:"https://www.biologia.edu.ar/botanica/tema16/images16/floe42b.jpg", descripcion: "Figura 3. Trasporte de solutos y fotoasimilados."}
                  ]
                }
              ]
            }
          ]
        },
        {
          id:"13", nombre: "Órganos de las plantas",
          resumen: `Los órganos son agrupaciones de tejidos con una función en común. Las plantas traqueófitas o vasculares cuentan con los siguientes órganos vegetativos: Raíz, Tallos y Hojas.

                    Las angiospermas, además, poseen los siguientes órganos relacionados con la reproducción sexual: Flores, Frutos y Semillas.

                    En las gimnospermas y en las angiospermas, los embriones se hallan dentro de las semillas.`,
          descripcion : [
            {
              texto: "La siguiente gráfica trata sobre los órganos vegetativos de las plantas.",
              imagen: [
                { url:"https://cdn0.bioenciclopedia.com/es/posts/9/9/7/partes_de_una_planta_799_orig.jpg", descripcion: "Gráfica de partes de una planta." }
              ]
            },
            {
              texto: "La siguiente gráfica muestran los organos necesarios para la reproducción sexual en las plantas angiospermas.",
              imagen: [
                { url:"https://i.ytimg.com/vi/0ZT1mADnQqE/maxresdefault.jpg", descripcion: "Ciclo de la reproducción sexual: Angiospermas." }
              ]
            }
          ],
          // CONTENIDO ---------------
          seccion: [
            {
              id: "131", nombre: "Raíz",
              contenido: [
                {
                  subTitulo:`La raíz`,
                  descripcion: `La raíz es el órgano responsable del anclaje de la planta al sustrato. También tiene como función la absorción de agua y de minerales. En algunas especies, almacena y conduce sustancias necesarias para el desarrollo de la planta (ver figura 1).

                                Desde hace miles de años, los seres humanos han cultivado raíces que almacenan grandes cantidades de carbohidratos. Estos son ejemplos de especies con raíces de almacenamiento: la zanahoria, la remolacha, la yuca, el rábano y el chayote.`,
                  imagen: [
                      {url:"https://www.abc.com.py/resizer/qSdoMyZmlLjv9qyZuW2eK7qvgCc=/arc-anglerfish-arc2-prod-abccolor/public/JOAJY52BPFDM7AUXLEOWHLILLY.jpg", descripcion: "Figura 1. Estructura de la raíz."}
                  ]
                },
                {
                  subTitulo:`Estructura de la raíz`,
                  descripcion: `En la raíz, se distinguen las siguientes partes:
                                ◉ <strong>Caliptra.</strong> Masa de células que protege el meristema apical de la raíz y le ayuda a penetrar el suelo.

                                ◉ <strong>Mucílago o mucigel.</strong> Sustancia con apariencia de baba que lubrica la raíz para ayudar a penetrar el suelo. Permite la adherencia de bacterias y protege contra la desecación.

                                ◉ <strong>Epidermis o rizodermis</strong> (a la epidermis de la raíz se le puede llamar rizodermis). Absorbe agua y minerales. Esta función es facilitada por los pelos radicales.

                                ◉ <strong>Corteza o parénquima cortical (o córtex).</strong> Conjunto de células de parénquima que está entre la epidermis y el cilindro vascular (ver figura 2).

                                ◉ <strong>Cilindro vascular.</strong> Parte interna de la raíz formada por los tejidos vasculares: xilema (transporte de agua y minerales) y floema (transporte de sustancias elaboradas en fotosíntesis). El cilindro vascular está encerrado por una capa de células de parénquima llamada periciclo.

                                ◉ <strong>Endodermis.</strong> Conjunto de células que regula el paso de agua a los conductos vasculares por medio de las bandas de Caspary.

                                ◉ <strong>Banda de Caspary.</strong> Deposiciones de suberina y a veces de lignina en forma de bandas. Son impermeables al agua y a los iones. En la fotografía, se muestra la banda de Caspary presente en la raíz de Equisetum giganteum (ver figura 3).`,
                  imagen: [
                      {url:"https://mmegias.webs.uvigo.es/2-organos-v/o-imagenes-grandes/imagenes/raiz-primaria-m-04.png", descripcion: "Figura 2. Estructura de Corteza o parénquima cortical."},
                      {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtzoQH4zp0qxpVmq-qoiJvCJufxBBYPD3Yg&s", descripcion: "Figura 3. Endodermis de raíz y banda de Caspary."}
                  ]
                },
                {
                  subTitulo:`Tipos de raíces`,
                  descripcion: `◉ <strong>Aéreas.</strong> Se encuentran, en ambientes inundables. Se originan en ramas o tallos laterales; cuelgan desde las partes aéreas de la planta. Ejemplos: mangles, palma chonta o caminadora, maíz y orquídea.

                                ◉ <strong>Zancudas o fúlcreas.</strong> Cuando las raíces aéreas tocan el suelo, se convierten en zancudas. Cuelgan de la parte aérea de la planta y alcanzan el suelo. Ejemplo: maíz, mangle, copey, etc.

                                ◉ <strong>Acuáticas.</strong> Las plantas acuáticas con raíces presentan tejido vascular vestigial y muchos pelos radicales plumosos, con gran cantidad de espacios llenos de aire para almacenar oxígeno y dióxido de carbono. Ejemplos: lirio de agua, sagitaria y loto (mostrada en la imagen).

                                ◉ <strong>Pneumatóforos.</strong> Raíces de aireación de plantas que viven en lugares inundados o mal drenados. Crecen por encima de la superficie acuática, en contra de la gravedad. Ejemplo: mangle salado o palo de sal.

                                ◉ <strong>Gambas.</strong> Raíces columnares, triangulares o tubulares, también conocidas como contrafuertes que se originan en la base de algunos árboles. Proporcionan mayor anclaje, especialmente en zonas muy lluviosas o en suelos con tierra muy suelta. Ejemplos: ceiba y árbol de Guanacaste.

                                ◉ <strong>Haustorios.</strong> Raíces de plantas parásitas que penetran en los tejidos de la planta hospedera. Ejemplo: matapalo.

                                ◉ <strong>Raíces de almacenamiento.</strong> Almacenan grandes cantidades de sustancias elaboradas en la fotosíntesis. Ejemplos: zanahoria, rábano, camote.

                                ◉ <strong>Raíces alargadas y carnosas.</strong> Raíces de plantas de ambientes desérticos o con periodos largos de sequía. Tienen gran cantidad de parénquima y pueden almacenar mucha agua. Ejemplo: cactus de candelabro, pasto de laguna (Isoetes storkii). Otras plantas tienen raíces laterales de gran longitud que se extienden para buscar agua, como el higuerón blanco.`,
                  imagen: [
                      {url:"https://arc-anglerfish-arc2-prod-abccolor.s3.amazonaws.com/public/6DJRYW3EJRFGNEIRSBA3WGLHRQ.jpg", descripcion: "Figura 4. Tipos de raíces en las plantas."}
                  ]
                }
              ]
            },
            {
              id: "132", nombre: "Tallos",
              contenido: [
                {
                  subTitulo:`Tallo`,
                  descripcion: `El tallo tiene, entre sus funciones, la conducción de agua y otras sustancias necesarias para la planta. Además, son el sitio de soporte de las hojas, ayudan en la resistencia mecánica y pueden almacenar sustancias necesarias para la planta (ver figura 1).

                                En la parte terminal del vástago, se encuentra la yema terminal o meristema apical. Después, se van formando yemas laterales (axilares) en las axilas o en bases de las hojas.

                                La yema terminal inhibe el desarrollo de las laterales: esto se llama dominancia apical. Cuando se elimina la yema terminal al podar una planta, se promueve el desarrollo de yemas laterales, y se estimula la ramificación.`,
                  imagen: [
                      {url:"https://blogs.upm.es/innebioveg/wp-content/uploads/sites/452/2018/02/image028-1024x734.jpg", descripcion: "Figura 1. Estructura del tallo."}
                  ]
                },
                {
                  subTitulo:`Tipos de tallos`,
                  descripcion: `◉ <strong>Bulbo.</strong> Tallo carnoso, corto, subterráneo y cubierto con hojas o escamas engrosadas (catáfilas), capaces de almacenar agua y otros fluidos. Ejemplos: cebolla, lirios.

                                ◉ <strong>Bulbillos.</strong> Bulbos pequeños desarrollados a partir de yemas del bulbo progenitor. Ejemplos: ajo y ciertos lirios (ver figura 2).

                                ◉ <strong>Tubérculo.</strong> Tallo engrosado, subterráneo o aéreo, rico en sustancias de reserva. Ejemplos: papa, yampí y ñame. Los “ojos” del tubérculo son yemas; cada yema puede originar una nueva planta al sembrarse.

                                ◉ <strong>Estolón.</strong> Tallo lateral, basal, con entrenudos largos que desarrollan raíces para formar una nueva planta en el extremo. Ejemplos: zacates de la familia Poaceae, fresa.

                                ◉ <strong>Cladodio.</strong> Tallo segmentado o rama aplanada y articulada; funciona como una hoja. Ejemplo: cladodios de tuna y otros cactos.

                                ◉ <strong>Cormo.</strong> Tallo corto, erecto, generalmente ensanchado a manera de tubérculo. Ejemplo: el tallo subterráneo del banano y el del taro o tiquisque (Colocasia esculenta).

                                La estructura que pareciera ser el tallo del banano es, en realidad, un pseudotallo o tallo falso formado por la agrupación de bases de hojas.

                                ◉ <strong>Rizoma.</strong> Tallo carnoso, por lo general subterráneo. Posee rudimentos foliares u hojas tipo catáfilas en los nudos, yemas axilares y raíces adventicias. Ejemplos: jengibre, tallo subterráneo de la caña agria (ver figura 3).

                                ◉ <strong>Zarcillo.</strong> Rama modificada o de origen foliar, enroscada como un resorte. Ejemplo: los colochos de las plantas de chayote y de pepino.`,
                  imagen: [
                      {url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/ARS_red_onion.jpg/1200px-ARS_red_onion.jpg", descripcion: "Figura 2. Bulbo de cebolla."},
                      {url:"https://cdn0.ecologiaverde.com/es/posts/4/8/8/rizomas_definicion_y_ejemplos_de_plantas_1884_orig.jpg", descripcion: "Figura 3. Rizoma de kion o jengibre."}
                  ]
                }
              ]
            },
            {
              id: "133", nombre: "Hojas",
              contenido: [
                {
                  subTitulo:`Las hojas`,
                  descripcion: `Las hojas tienen entre sus funciones:
                                ◉ Realizar la fotosíntesis. Las células de las hojas tienen muchos cloroplastos.
                                ◉ Efectuar el intercambio gaseoso (a través de los estomas).
                                ◉ Sintetizar sustancias de importancia en el metabolismo de la planta (como carbohidratos).
                                ◉ Servir de alimento para otros organismos.
                                ◉ En algunos casos, almacenar sustancias alimenticias o agua.
                                ◉ Algunas hojas son modificadas en espinas.
                                ◉ Las hojas de las plantas carnívoras, como las de Drosera spatulata, están modificadas para atrapar insectos y otros artrópodos (ver figura 1).`,
                  imagen: [
                      {url:"https://www.viveroelencanto.com/wp-content/uploads/2023/08/1049-DROSERA-SPATULATA-3.jpg", descripcion: "Figura 1. Planta carnívora Drosera spatulata."}
                  ]
                },
                {
                  subTitulo:`Estructura externa de una hoja simple`,
                  descripcion: `A la cara superior de la lámina se le denomina haz; y, a la inferior, envés. Las venas que se observan en la lámina pueden estar dispuestas en forma paralela, ramificada o palmeada.

                                En ocasiones, en la base o en el pecíolo, se encuentran excrecencias en forma de hojita llamadas estípulas (ver figura 2).`,
                  imagen: [
                      {url:"https://upload.wikimedia.org/wikipedia/commons/d/d9/Interpetiolar_stipule_-_Rubiaceae_family_%2811569654543%29.jpg", descripcion: "Figura 2. Estípula en planta rubiácea."}
                  ]
                },
                {
                  subTitulo:`Estructura externa de una hoja compuesta`,
                  descripcion: `La lámina de una hoja compuesta está constituida de partes separadas con forma de pequeñas láminas denominadas foliolos u hojuelas (son como hojitas). Los peciolos de las hojas compuestas también pueden tener estípulas (ver figura 3).`,
                  imagen: [
                      {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQ7T7ltlbHDNiUiZo38FHgaIh_On58lMsddXBq71RiWoCUqvfvBPAak-OJkx9tx73vts&usqp=CAU", descripcion: "Figura 3. Hoja compuesta."}
                  ]
                }
              ]
            },
            {
              id: "134", nombre: "Flores",
              contenido: [
                {
                  subTitulo:`Las flores`,
                  descripcion: `La flor es una modificación del tallo, la cual a su vez contiene hojas modificadas. El tallo modificado (eje floral) se denomina receptáculo. El receptáculo se conecta al tallo foliar o floral a través del pedúnculo o pedicelo. Las flores nacen en la axila de otra hoja diferenciada llamada bráctea.

                                Las flores completas tienen 3 partes (ver figura 1):
                                ◉ <strong>Periantio o perianto.</strong> Estructuras protectoras y coloreadas (pétalos y sépalos).
                                ◉ <strong>Androceo.</strong> Estructuras que producen polen.
                                ◉ <strong>Gineceo.</strong> Estructuras que producen óvulos.

                                Algunas definiciones relacionadas con las flores:
                                ◉ <strong>Flor incompleta.</strong> Cuando le falta alguna parte a la flor (el gineceo, el androceo o el perianto).
                                ◉ <strong>Flor bisexual o perfecta.</strong> Flor que posee androceo y gineceo.
                                ◉ <strong>Flor unisexual o imperfecta.</strong> Cuando falta una de las dos partes sexuales (el androceo o el gineceo).
                                ◉ <strong>Flor estaminada.</strong> Flor imperfecta que tiene solo androceo.
                                ◉ <strong>Flor carpelar.</strong> Flor imperfecta o unisexual solo con el gineceo.
                                ◉ <strong>Especie monoica.</strong> Cuando hay flores estaminadas y carpeladas en un mismo individuo o planta.
                                ◉ <strong>Especie dioica.</strong> Cuando las flores estaminadas están en un individuo y las flores carpeladas están en otro individuo o planta aparte.
                                ◉ <strong>Especie polígama.</strong> Hay flores bisexuales y unisexuales en una misma planta.
                                ◉ <strong>Verticilo.</strong> Conjunto de tres o más hojas que brotan de un tallo en el mismo nudo.`,
                  imagen: [
                      {url:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Mature_flower_cropped-es.svg/320px-Mature_flower_cropped-es.svg.png?20080323142611", descripcion: "Figura 1. Anatomía simplificada de una flor madura."}
                  ]
                },
                {
                  subTitulo:`Tipos de inflorescencias`,
                  descripcion: `Existen diversos tipos de inflorescencias (ver figura 2):

                                ◉ <strong>Racimo.</strong> Inflorescencia con eje prolongado en la que las flores se disponen sobre pedicelos bien formados. Ejemplos: sábila y hierba de santa Bárbara.

                                ◉ <strong>Espiga.</strong> Inflorescencia con eje prolongado; a diferencia del racimo, las flores son sésiles (es decir, no tienen pedicelo). Ejemplos: llantén, piña.

                                El amento es una espiga que cuelga; su eje es blando. Ejemplos: sauce y roble.

                                ◉ <strong>Espádice.</strong> El eje principal está engrosado. Una bráctea denominada espata cubre una espiga. Ejemplos: cala, anturio.

                                ◉ <strong>Umbela.</strong> Flores con pedicelos de mismo largo, que nacen en el mismo punto de un eje principal. Ejemplos: agapanto, apio y zanahoria.

                                ◉ <strong>Corimbo.</strong> Tipo de racimo, cuyas flores de la parte baja de su eje igualan en altura a las flores de la parte apical; similar a una umbela. Ejemplos: pera, ciruela, Achillea sp.

                                ◉ <strong>Capítulo.</strong> También denominado cabezuela, se parece a un espádice compacto; numerosas flores sésiles muy unidas entre sí y rodeadas de brácteas. Ejemplos: margarita, manzanilla, girasol (familia Asteraceae).`,
                  imagen: [
                      {url:"https://www.asturnatura.com/Imagenes/articulos/identificacion/inflorescencias-racemosas-simples.webp", descripcion: "Figura 2. Tipos de inflorescencias."}
                  ]
                }
              ]
            },
            {
              id: "135", nombre: "Frutos",
              contenido: [
                {
                  subTitulo:`Los Frutos`,
                  descripcion: `El fruto es el ovario maduro de la flor. Se llama pericarpo a todo el tejido que rodea las semillas.

                                El pericarpo tiene tres partes (ver figura 1):
                                ◉ <strong>Epicarpo.</strong> Capa más externa, delgada y endurecida, conocida como cáscara.
                                ◉ <strong>Mesocarpo.</strong> Parte media, generalmente carnosa.
                                ◉ <strong>Endocarpo.</strong> Parte interna que rodea directamente las semillas.`,
                  imagen: [
                      {url:"https://strapi.morfologiavegetal.info/uploads/Prunus_armeniaca_027_1100_477285bc5d.jpg", descripcion: "Figura 1. Morfología de pericarpo."}
                  ]
                },
                {
                  subTitulo:`Tipos de frutos`,
                  descripcion: `◉ <strong>Baya.</strong> Fruto simple desarrollado a partir de una flor de un solo carpelo. Es carnoso e indehiscente (al madurar no se abre espontáneamente). El pericarpo es suculento y las semillas están sumergidas en la pulpa. Ejemplos: anona, tomate, berenjena, limón (baya tipo hesperidio), pepino (baya tipo pepónide).

                                ◉ <strong>Drupa.</strong> Fruto simple, carnoso, con endocarpo endurecido como hueso. Ejemplos: coco, durazno, jocote, aguacate, marañón (ver figura 2).

                                ◉ <strong>Aquenio.</strong> Fruto simple, seco, pequeño e indehiscente. Una semilla unida a la pared del fruto en un solo sitio. Ejemplos: moriseco, girasol, fresa.

                                Los aquenios de la fresa y del girasol suelen confundirse con semillas.

                                ◉ <strong>Cariopsis o cariópside.</strong> Fruto pequeño, indehiscente, seco. La semilla está unida completamente a la pared del fruto. Ejemplos: zacates, maíz, arroz.

                                ◉ <strong>Nuez.</strong> Fruto simple, seco, indehiscente (que no se abre espontáneamente al madurar). Tiene una sola semilla y un pericarpo endurecido. Ejemplos: fruto del roble encino, avellanas, castañas. Las almendras y las pecanas no son nueces en el sentido botánico, sino semillas de drupas.

                                ◉ <strong>Legumbre.</strong> Fruto simple, seco, dehiscente (se abre espontáneamente al llegar a la madurez), derivado de un carpelo que se abre a lo largo de dos suturas. Ejemplos: las vainas de leguminosas como el frijol, el poró y el árbol de Guanacaste.

                                ◉ <strong>Cápsula.</strong> Fruto simple y dehiscente. Se deriva de un ovario compuesto de dos o más carpelos. Ejemplos: copey, caoba, seso vegetal.

                                ◉ <strong>Sicono.</strong> Conjunto de frutos derivados de flores distintas, rodeadas por un receptáculo carnoso. Ejemplo: higos (Ficus) (ver figura 3).`,
                  imagen: [
                      {url:"https://upload.wikimedia.org/wikipedia/commons/9/9e/Autumn_Red_peaches.jpg", descripcion: "Figura 2. Durazno fruto tipo drupa."},
                      {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ylu_Wrl4bbqxT03eIw46OrqOXhDbQHX46Q&s", descripcion: "Figura 3. Higo fruto tipo sinoco."}
                  ]
                }
              ]
            },
            {
              id: "136", nombre: "Semillas",
              contenido: [
                {
                  subTitulo:`Las semillas`,
                  descripcion: `Las semillas son estructuras reproductivas resultantes de la fecundación en plantas gimnospermas y angiospermas. La semilla es capaz de originar una nueva planta después de un periodo de dormancia o latencia hasta que encuentre condiciones adecuadas de humedad, de temperatura y de oxígeno.

                                En las gimnospermas, la semilla está protegida por brácteas o escamas. En las angiospermas, las semillas están cubiertas por los frutos. Por lo general, las semillas poseen tres partes (ver figura 1):
                                ◉ <strong>Embrión.</strong> Producto de la fecundación de un gameto femenino por parte de un gameto masculino y subsecuente división mitótica del cigoto. En el embrión se localizan estructuras que se convertirán en las partes de la planta adulta, además de una o varias hojas modificadas denominadas cotiledones. Los cotiledones nutren al embrión y pueden realizar fotosíntesis cuando la planta germina.
                                ◉ <strong>Endospermo.</strong> Tejido que nutre al embrión.
                                ◉ <strong>Testa o cubierta seminal.</strong> Cubierta dura que protege al embrión y al endospermo.`,
                  imagen: [
                      {url:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjoxTb-0R26D0a6tPd72NFdQ0oIpnqyWYgMhZBn8fbdLwyXyvUxpd0_J2JpYJHEfPhGPohk6GZ6AsZsCNFHzVMOE5uD5asqFywaymhm_DwScvAtV4-QI9yAqi1w3G0nnKQWvNdqoO1Jv0/s1600/partes+semilla.JPG", descripcion: "Figura 1. Partes de las semillas."}
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
      id: "2", color: "blue", nombre: "Fisiología Vegetal", img: "static/moduloDos/modulo2.png",
      subModulo: [
        {
          id:"21", nombre: "Fotosíntesis",
          resumen: `La fotosíntesis es un proceso químico mediante el cual las plantas transforman la energía lumínica del Sol, dióxido de carbono y agua en carbohidratos. La ecuación general de la fotosíntesis es la siguiente:

                    6CO2 + 6H2O + luz -> C6H12O6 + 6O2

                    El proceso fotosintético se lleva a cabo en dos fases:
                    ◉ Fase luminosa o de reacciones fotoquímicas, en la que la clorofila del cloroplasto capta la luz solar y se generan las moléculas ATP y NADPH. El ATP, adenosín trifosfato, es un nucleótido que almacena la energía que las células requieren para llevar a cabo sus actividades. El NADPH, nicotinamida adenina dinucleótido fosfato, es una coenzima que se conoce como “poder reductor”, debido a que dona electrones durante el proceso de síntesis de carbohidratos a partir del dióxido de carbono del aire.

                    ◉ Fase oscura, en la que se usan el ATP y el NADPH producidos en la fase de reacciones fotoquímicas para convertir el dióxido de carbono en carbohidratos.`,
          descripcion : [
            {
              texto: `En la siguiente figura se ve el ciclo de la fotosíntesis:`,
              imagen: [
                { url:"https://cdn0.ecologiaverde.com/es/posts/8/4/9/fases_de_la_fotosintesis_2948_1_600.jpg", descripcion: "Etapas de la fotosíntesis." }
              ]
            }
          ],
          // CONTENIDO ---------------
          seccion: [
            {
              id: "211", nombre: "Fase luminosa",
              contenido: [
                {
                  subTitulo:"Fase luminosa",
                  descripcion: `La fase luminosa o independiente de la luz es un conjunto de reacciones fotoquímicas que ocurre en las <strong>membranas de los tilacoides en los cloroplastos</strong> (ver figura 1).`,
                  imagen: [
                      {url:"https://www.lifeder.com/wp-content/uploads/2018/12/fase-luminosa-fotosintesis.jpg", descripcion: "Figura 1. Ciclo de la fase luminosa de la fotosíntesis."}
                  ]
                },
                {
                  subTitulo:"Cloroplastos",
                  descripcion: `En los cloroplastos se almacena la clorofila, un pigmento fotosintético de color verde que absorbe energía luminosa.

                                Cada especie vegetal posee un número determinado de cloroplastos. El trigo y las plantas del género Arabidopsis (de la familia Brassicaceae, misma de la coliflor y del repollo) poseen un alto número de estos plastidios, ya que cuentan con cerca de cien cloroplastos por célula. Por el contrario, en algas unicelulares solo hay un cloroplasto por individuo.

                                En las células del musgo Bryum capillare hay aproximadamente diez cloroplastos por célula (ver figura 2).`,
                  imagen: [
                      {url:"https://periodicallyamended.wordpress.com/wp-content/uploads/2016/09/plant-cells.jpg?w=640&h=360", descripcion: "Figura 2. Cloroplastos visibles en células del musgo Bryum capillare."}
                  ]
                },
                {
                  subTitulo:"Pigmentos fotosintéticos",
                  descripcion: `El pigmento fotosintético más abundante en los organismos autótrofos es la clorofila. Hay varios tipos de clorofila; la más abundante de ellas es la clorofila a, presente en todos los organismos fotosintéticos. Del espectro de luz visible, la clorofila absorbe principalmente la luz violeta-azul y la luz roja cercana, y refleja el color verde (refleja el verde porque no lo absorbe) (ver figura 3).

                                Además de la clorofila, hay otros pigmentos antena que ayudan a absorber la energía luminosa que la clorofila no puede captar; por ejemplo, los carotenoides (lípidos con colores amarillentos o rojizos que se hallan en los cloroplastos) y las ficobilinas (presentes en algas). La energía absorbida por los pigmentos antena se transfiere a la clorofila.`,
                  imagen: [
                      {url:"https://cdn.kastatic.org/ka-perseus-images/8074e9d227ce3d3a2f2dfb5dcd22d016f32a8a1b.png", descripcion: "Figura 3. Espectro electromagnético de pigmentos."}
                  ]
                },
                {
                  subTitulo:"Fotosistemas",
                  descripcion: `En las membranas de los tilacoides de los cloroplastos, se encuentran complejos de moléculas llamados fotosistemas. Estos constan de los pigmentos fotosintéticos y una serie de moléculas transportadoras de electrones. Cada fotosistema dispone de una zona llamada centro de reacción, donde ocurren las principales reacciones de la fase luminosa. Hay dos tipos de fotosistemas (ver figura 4):
                                ◉ <strong>Fotosistema II (PS II).</strong> En su centro de reacción está un par de moléculas de clorofila a denominada P680 (porque la luz que absorbe la clorofila P680 tiene una longitud de onda de 680 nm).
                                ◉ <strong>Fotosistema I (PS I).</strong> En su centro de reacción está un par de moléculas de clorofila a denominada P700 (esta clorofila absorbe rayos de luz con una longitud de onda de 700 nm).`,
                  imagen: [
                      {url:"https://cdn.kastatic.org/ka-perseus-images/87d5fb92015150da4750a329313e4536ee2dc17d.png", descripcion: "Figura 4. Reacciones de Fotosistemas."}
                  ]
                },
                {
                  subTitulo:"Fotofosforilación y la formación de ATP y NADPH",
                  descripcion: `En la primera etapa de la fotosíntesis, se producen los compuestos ATP y NADPH (poder reductor), los cuales se requieren en la fase independiente de la luz. En los fotosistemas, la producción de estos compuestos se da en un proceso denominado fotofosforilación, el cual es iniciado por la absorción de luz. La fotofosforilación puede ser acíclica o cíclica.

                                ◉ <strong>Fotofosforilación acíclica.</strong> En las plantas, este proceso inicia en el fotosistema II, cuando un fotón de luz es captado por los pigmentos antena hasta llegar al centro de reacción del fotosistema. Esto produce la excitación de un electrón de la clorofila P680 (adquiere un nivel de energía más alto). El electrón excitado se transfiere a la plastoquinona (PQ), molécula receptora de electrones.

                                El electrón excitado no regresa al centro de reacción, por eso, el proceso se denomina fotofosforilación “acíclica”, porque el electrón no vuelve al centro de reacción. La clorofila P680 repone ese electrón por medio de la ruptura de una molécula de agua. La luz rompe la molécula de agua mediante la siguiente reacción, denominada fotólisis:

                                H2O + luz → 2H+ + 2e- + 1/2 O2

                                Así, el oxígeno liberado en el proceso de la fotosíntesis proviene de la molécula de agua.

                                El electrón que recibió la plastoquinona abandona el fotosistema II mediante una cadena de moléculas transportadoras de electrones, entre ellas: las denominadas citocromo b6f y la plastocianina (PC). A su paso por esa cadena, va liberando energía. Parte de esta energía contribuye al bombeo de iones hidrógeno, desde el estroma del cloroplasto hasta los tilacoides, y genera una gradiente de protones. Los protones vuelven al estroma pasando a través de una proteína llamada ATP sintasa; como consecuencia de estos eventos, se produce ATP.

                                El electrón, después de abandonar el fotosistema II, llega al centro de reacción del fotosistema I, donde está la clorofila P700. Los pigmentos antena absorben luz y el electrón vuelve a adquirir un nivel elevado de energía; lo recibe una molécula aceptora de electrones y pasa por otra cadena transportadora. Dicho electrón será repuesto con un electrón proveniente del fotosistema II (y que llega por medio de la cadena de moléculas transportadoras de electrones). Al final de la cadena, una molécula de NADP+ ganará dos electrones con niveles elevados de energía para transformarse en poder reductor, NADPH (ver figura 5).

                                ◉ <strong>Fotofosforilación cíclica.</strong> En este tipo de fotofosforilación solo interviene el fotosistema I. El movimiento cíclico de los electrones a través del fotosistema I genera dos moléculas de ATP. Ni se libera oxígeno ni se produce NADPH. En las bacterias fotosintéticas, solo se da la fotofosforilación cíclica, ya que únicamente cuentan con un fotosistema.

                                En las plantas se producen los dos tipos de fotofosforilación. La fotosíntesis, en estos organismos, depende de la corriente eléctrica generada por el flujo de electrones: desde el agua hasta el fotosistema II; de este, al fotosistema I; y de este, al NADP+.`,
                  imagen: [
                      {url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Thylakoid_membrane_2.svg/1200px-Thylakoid_membrane_2.svg.png", descripcion: "Figura 5. Reacciones fotoquímicas dependientes de la luz."}
                  ]
                }
              ]
            },
            {
              id: "212", nombre: "Fase oscura",
              contenido: [
                {
                  subTitulo:"Fase oscura",
                  descripcion: `El nombre de fase "oscura" de la fotosíntesis puede prestarse a confusión, ya que las reacciones de esta etapa ocurren en todo momento, de día o de noche. El adjetivo se refiere a que las reacciones químicas que suceden en esta etapa son independientes de la luz; sin embargo, sí requiere de dos moléculas producidas en la fase luminosa: el ATP y el NADPH (poder reductor). Estos dos compuestos se utilizan para fijar el CO2 de la atmósfera (incorporándolo en moléculas orgánicas presentes en la planta) y producir carbohidratos simples en el estroma.

                                Las reacciones químicas de esta fase se denominan en conjunto ciclo de Calvin. El ciclo de Calvin consta de tres etapas: carboxilación, reducción y regeneración.

                                ◉ <strong>Carboxilación o fijación de carbono.</strong> En esta etapa, el CO2 se fija a una molécula aceptora (aceptora = que recibe) llamada ribulosa 1,5 bifosfato, gracias a la acción de la enzima rubisco (1,5-bifosfato carboxilasa/oxigenasa). Se produce el compuesto fosfoglicerato (PGA); este tiene tres carbonos, por eso, a esta vía metabólica de fijación de carbono se le llama C3, y a las plantas que siguen esta ruta metabólica se les denomina plantas C3.

                                ◉ <strong>Reducción.</strong> El fosfoglicerato se reduce y se transforma en un compuesto llamado gliceraldehído-3-fosfato (PGAL). Esta reacción requiere el ATP y el NADPH formados en la fase luminosa.

                                ◉ <strong>Regeneración.</strong> Se regenera la molécula aceptora ribulosa 1,5 bifosfato mediante la acción del ATP y de diversas enzimas. Se producen carbohidratos (ver figura 1).`,
                  imagen: [
                      {url:"https://cdn.kastatic.org/ka-perseus-images/59aa08e5c654e1ca502fca7e2ebf4957e2fdadb7.png", descripcion: "Figura 1. Etapas del ciclo de Calvin en una planta C3."}
                  ]
                },
                {
                  subTitulo:"Fotorrespiración",
                  descripcion: `La enzima rubisco se puede unir tanto al oxígeno como al dióxido de carbono. Debido a esto, en ocasiones, ocurre un proceso denominado fotorrespiración (no se debe confundir ni con la fotosíntesis ni con la respiración) que se caracteriza porque el oxígeno compite con el CO2 por unirse a la rubisco en la fase oscura (ver figura 2).

                                En la fotorrespiración, se consume oxígeno y se desprende dióxido de carbono. Este despilfarro de carbono y de energía no es beneficioso para la planta.

                                La fotorrespiración se da, sobre todo, cuando hace calor y hay muy poca humedad; entonces, los estomas se cierran para evitar la transpiración. Como resultado, el oxígeno formado en la fase luminosa se queda acumulado en los tejidos de la hoja y compite con el CO2, y afecta la velocidad de fijación de carbono. Una importante cantidad de cultivos comerciales sufren pérdidas de productividad todos los años debido a la fotorrespiración.`,
                  imagen: [
                      {url:"https://cdn.goconqr.com/uploads/media/image/18873612/desktop_db675486-9091-471d-9326-3b1b6b443384.jpg", descripcion: "Figura 2. Ciclo de la Fotorrespiración."}
                  ]
                },
                {
                  subTitulo:"Plantas C4",
                  descripcion: `La mayoría de las plantas utilizan una vía metabólica de fijación de carbono C3, en la que el primer producto estable es un compuesto de tres átomos de carbono. Todo el proceso fotosintético ocurre en las células del mesófilo de la hoja. Estos vegetales no tienen mecanismos para contrarrestar la fotorrespiración.

                                En la naturaleza, existen algunas especies de plantas, en las que antes de producirse la carboxilación (primera etapa del ciclo de Calvin), se origina un primer compuesto estable de cuatro carbonos. A estas plantas se las denomina C4. Algunas especies C4 son la caña de azúcar, el maíz y el sorgo (familia Poaceae) (ver figura 3).

                                A diferencia de las plantas C3, en las plantas C4, las reacciones de la fase luminosa y las de la fase oscura suceden en diferentes lugares: las reacciones de la fase luminosa se producen en las células del mesófilo de la hoja, mientras que el ciclo de Calvin sucede en las células de la vaina (un tipo de células de parénquima que se localiza alrededor de las venas de las hojas).

                                Las plantas C4 cuentan con la enzima PEP-carboxilasa, la cual fija el CO2 a un compuesto de tres carbonos llamado PEP (fosfoenolpiruvato) para producir un primer compuesto estable de cuatro carbonos denominado oxoloacetato, que luego se reduce a malato. La PEP-carboxilasa, a diferencia de la rubisco, no fija oxígeno.

                                El malato pasa a las células de la vaina. Ahí se descompone liberando CO2; la rubisco fija el dióxido de carbono y se producen las reacciones del ciclo de Calvin.

                                De esta manera, las plantas pueden minimizar la fotorrespiración, ya que en las células de la vaina, la concentración de CO2 siempre es tan alta como para permitir que ocurra la fotosíntesis, incluso en días en los que los estomas permanecen cerrados por ser muy calurosos o secos.`,
                  imagen: [
                      {url:"https://bloglatam.jacto.com/wp-content/uploads/2022/06/cultivo-de-cana-de-azucar-scaled.jpeg", descripcion: "Figura 3. Cultivo de caña de azúcar."}
                  ]
                },
                {
                  subTitulo:"Plantas CAM",
                  descripcion: `Al igual que las C4, las plantas CAM están adaptadas a ambientes, por lo general, áridos. Esta ruta metabólica se observa en las plantas suculentas de la familia de las crasuláceas (CAM significa “metabolismo ácido de las crasuláceas”), en muchas especies de cactos, en la piña y en ciertas especies de orquídeas (ver figura 4).

                                A diferencia de las plantas C3 y C4, las plantas CAM abren sus estomas de noche, cuando la temperatura ha bajado; de esta manera, minimizan la pérdida de agua por transpiración. Así, la asimilación de dióxido de carbono ocurre de noche.

                                En las plantas CAM, el CO2 asimilado también se fija al PEP mediante la acción de la enzima PEP-carboxilasa. El oxoloacetato producido se transforma en malato, que se almacena en las vacuolas. Luego, en el día, el malato se descompone y se libera dióxido de carbono. El CO2 entra posteriormente al ciclo de Calvin.`,
                  imagen: [
                      {url:"https://laderasur.com/wp-content/uploads/2023/02/1140-drought-tolerant-plants-for-your-landscape-succulent.imgcache.revf087f8060e0fc29d487e78189c3d42c0-1024x588.jpg", descripcion: "Figura 4. Plantas crasuláceas."}
                  ]
                }
              ]
            }
          ]
        },
        {
          id:"22", nombre: "Respiración celular",
          resumen: `Para poder realizar sus actividades, las células necesitan continuamente convertir la energía de los carbohidratos en energía utilizable en forma de ATP. Esto es posible gracias a la respiración celular. Mediante este proceso, se libera la energía almacenada en los enlaces químicos de la glucosa.

                    Las plantas almacenan carbohidratos principalmente como almidón. Entonces, este compuesto debe hidrolizarse hasta la forma de glucosa, que es la molécula que inicia la respiración. La glucosa también puede provenir de la sacarosa.

                    La glucosa se oxida y se degrada a dióxido de carbono y agua, con producción de ATP. La ecuación general de la respiración resume lo que sucede en el proceso:

                    C6H12O6 + 6O2 -> 6CO2 + 6H2O + energía

                    La producción de energía en forma de ATP genera calor; por lo tanto, no puede liberarse el ATP de una sola vez, sino que sucede de modo paulatino, en varias etapas:`,
          descripcion : [
            {
              texto: `La respiración celular es un conjunto de reacciones químicas que se llevan en la célula vegetal, principalmente en la mitocondria. Este proceso hace posible la obtención de energía a partir de la glucosa y del oxígeno.

                      En la siguiente imagen se sintetiza las etapas del proceso respiratorio en la célula vegetal:`,
              imagen: [
                { url:"https://cloudfront-us-east-1.images.arcpublishing.com/abccolor/XQBF3BBHWVEBFIGPS5DNROLEHU.jpg", descripcion: "Función de respiración de las plantas." }
              ]
            }
          ],
          // CONTENIDO ---------------
          seccion: [
            {
              id: "221", nombre: "Glucólisis",
              contenido: [
                {
                  subTitulo:"Glucólisis",
                  descripcion: `La glucólisis o glicólisis es la primera etapa de la respiración celular y se lleva a cabo en el citoplasma de la célula vegetal. Puede darse en ausencia de oxígeno. Una molécula de glucosa se rompe y se forman dos moléculas de un compuesto de tres carbonos denominado piruvato. Al final de la glucólisis, se obtienen dos moléculas netas de ATP (ver figura 1).

                                Después de que ocurre la glucólisis, el piruvato es transportado a la matriz de la mitocondria, donde se une a la coenzima A para formar una molécula llamada acetil coenzima A (acetil Co-A). Se produce, además, poder reductor en forma de NAD (nicotidamida adenina dinucleótido) y se libera CO2.`,
                  imagen: [
                      {url:"https://concepto.de/wp-content/uploads/2019/06/glucolisis-glucosa-celula-aerobica-anaerobica-e1561503953173.jpg", descripcion: "Figura 1. Etapas de la glucósis."}
                  ]
                }
              ]
            },
            {
              id: "222", nombre: "Ciclo de Krebs",
              contenido: [
                {
                  subTitulo:"Ciclo de Krebs o ciclo del ácido cítrico",
                  descripcion: `En la matriz de la mitocondria ocurre la segunda etapa de la respiración celular, denominada ciclo de Krebs, ciclo del ácido cítrico o ciclo del ácido tricarboxílico. En esta fase, se descompone la molécula de acetil Co-A y se produce dióxido de carbono. El acetil Co-A se une a una molécula de cuatro carbonos (oxalacetato) para producir ácido cítrico (citrato), compuesto de seis carbonos. Este compuesto pasa por una serie de reacciones hasta volver a regenerar el oxalacetato.

                                En el ciclo se libera más CO2 y se producen dos moléculas más de ATP, además de NADH y una coenzima llamada flavin adenin dinucleótido (FADH2). También se produce ubiquinol a partir de la reducción de la coenzima Q10 o ubiquinona, molécula que funge como transportadora de electrones (ver figura 1).`,
                  imagen: [
                      {url:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8i1cFsVtgzeyJnRZRpDzEJJpDeLVT9uWjZBtM6CcxF9ps0vPaEP6sjgG_kbHenvIQi_70IycKqnLpV8YWVzIq6nj8BDOknvoo2blfzzo_-WBL_j73X8ik4FTZQ_CltjD5vlMRJ8YUtEUS/s1600/014_Ciclo-Krebs_resumen.png", descripcion: "Figura 1. Ciclo de Krebs."}
                  ]
                }
              ]
            },
            {
              id: "223", nombre: "Transporte",
              contenido: [
                {
                  subTitulo:"Transporte de electrones y fosforilación oxidativa",
                  descripcion: `La última etapa de la respiración celular ocurre en las crestas de la mitocondria. En ella, la energía restante de la glucosa se libera por completo. En las crestas mitocondriales se encuentra una cadena de moléculas transportadoras de electrones (cadena respiratoria), entre ellas la ubiquinona (ver figura 1).

                                El NADH y el FADH2 se oxidan. Los hidrógenos que transportan se disocian en electrones y protones. Los electrones pasan por la cadena respiratoria hasta llegar al oxígeno, que es el aceptor final. Una vez que el oxígeno acepta electrones y protones, se forma agua.

                                Los protones son bombeados hacia el espacio entre las membranas de la mitocondria, en contra de la gradiente de concentración. Posteriormente, los protones se mueven de nuevo hacia la matriz mitocondrial, esta vez a favor de la gradiente de concentración. De esta manera, se produce la fuerza necesaria para acoplar un grupo fosfato al ADP (adenosín difosfato), para así generar 32 moléculas de ATP en una reacción catalizada por enzimas ATP sintasas. Entonces, al final del proceso de respiración celular se producen, aproximadamente, 36 moléculas de ATP.`,
                  imagen: [
                      {url:"https://cdn.kastatic.org/ka-perseus-images/f0e94a2d16a8d0b72a06dbbf32cb0ac752c08f88.png", descripcion: "Figura 1. Proceso de Transporte de electrones y fosforilación oxidativa."}
                  ]
                }
              ]
            }
          ]
        },
        {
          id:"23", nombre: "Relaciones hídricas",
          resumen: `El funcionamiento de la planta depende en gran medida del agua, su componente principal. Las relaciones que se establecen entre las plantas y el agua incluyen la absorción del líquido por el sistema radical, su transporte por medio de los tejidos vasculares y su salida del organismo vegetal en la transpiración.`,
          descripcion : [
            {
              texto: `En el siguiente imagen se ve el proceso de la absorción, el transporte y la transpiración celular.`,
              imagen: [
                { url:"https://i.ytimg.com/vi/614QiGdC5Io/maxresdefault.jpg", descripcion: "Etapas de la respiración celular." }
              ]
            }
          ],
          // CONTENIDO ---------------
          seccion: [
            {
              id: "231", nombre: "El agua",
              contenido: [
                {
                  subTitulo:"El agua en la planta",
                  descripcion: `El agua es el compuesto de mayor importancia para las plantas, ya que todos los procesos fisiológicos de los vegetales requieren la presencia de este líquido. Pero ¿qué es lo que hace a esta molécula tan especial para las plantas?

                                ◉ El agua se conoce como “el disolvente universal”. Esto se debe, en gran parte, a que la molécula de agua es polar: una parte de ella es parcialmente positiva y la otra parte es negativa; esta característica le permite al agua disolver otras moléculas polares como sales minerales y carbohidratos simples, sustancias indispensables en la nutrición de las plantas.
                                ◉ La alta capacidad calorífica y el alto calor de vaporización del agua ayudan a que la energía calórica de las plantas pueda disiparse en la evaporación y permiten que las plantas puedan tolerar los cambios de temperatura y a que su organismo se enfríe para mantener una temperatura estable y constante. Ambas propiedades se deben a los puentes de hidrógeno que se forman entre las moléculas de agua (ver figura 1).
                                ◉ El agua tiene la propiedad de adherirse a diversas superficies. Esto hace posible que, dentro de la planta, el agua se adhiera al tejido vascular, permitiendo que el líquido y los nutrientes lleguen a todos los órganos vegetales.
                                ◉ Las moléculas del agua se unen entre sí. Esta propiedad, denominada cohesión, es, junto con la propiedad de adhesión, la responsable de que dentro de los tallos de las plantas se puedan mantener columnas de agua y nutrientes.`,
                  imagen: [
                      {url:"https://cdn.kastatic.org/ka-perseus-images/5f63a726887ec3d1ced6a5be867f4d6edc13bbf2.png", descripcion: "Figura 1. Modelo de moléculas de agua enlazadas por puentes de hidrógeno."}
                  ]
                },
                {
                  subTitulo:"¿Por qué las plantas necesitan tanta agua?",
                  descripcion: `Las plantas requieren más agua para sobrevivir que otros organismos, debido a que continuamente pierden líquido por la transpiración. Se dice que la transpiración es “un mal necesario”, ya que en la mayoría de las plantas, los estomas deben permanecer abiertos durante el día, con el fin de captar dióxido de carbono para la fotosíntesis (ver figura 2).`,
                  imagen: [
                      {url:"https://2354223add.clvaw-cdnwnd.com/7d9c0f54b03f426c8e76ab6e2538bf82/200000325-22f0b22f0e/Diapositiva33.jpg?ph=2354223add", descripcion: "Figura 2. Proceso traspiración de las plantas."}
                  ]
                }
              ]
            },
            {
              id: "232", nombre: "Absorción",
              contenido: [
                {
                  subTitulo:"Absorción y movimiento del agua",
                  descripcion: `La mayor parte del agua que utilizan las plantas es absorbida de manera pasiva por el sistema radical vía ósmosis; es decir, pasa a través de las membranas celulares sin gasto de energía metabólica, desde una solución con menor concentración de solutos a otra con mayor concentración. Como resultado de la ósmosis, las células vegetales pueden permanecer turgentes al estar en un medio hipotónico (con menor concentración de solutos), pues el agua entra en su interior y llena sus vacuolas.

                                En caso de que una célula vegetal sea colocada en un medio hipertónico, el agua se sale de la célula; se produce, entonces, el fenómeno denominado plasmólisis, en el cual el protoplasto se despega de la pared celular y causa la contracción de las células.

                                El sistema radical consta de múltiples raíces individuales de distintas edades. En las raíces, por lo general, hay una gran cantidad de pelos absorbentes que incrementan la superficie de absorción.

                                La raíz sirve solamente como superficie de absorción. Gracias a la transpiración de la parte aérea de la planta, el agua se absorbe y llega hasta las partes más lejanas de la raíz. En otras palabras, la transpiración es la fuerza que impulsa la absorción del agua, ya que crea una fuerza de succión que bombea el agua al interior de la raíz.

                                La teoría más aceptada por los botánicos sobre cómo el agua vence la fuerza de la gravedad dentro de una planta es la de cohesión-tensión. Esta explica que, al transpirar, se genera un déficit de agua; cuando a una célula le falta agua, absorberá líquido de la célula vecina y esta de la célula vecina, y así, sucesivamente. Debido a las propiedades de adhesión y de cohesión del agua, basta con que se absorba una sola molécula de agua para que otras se adhieran y se forme una columna ascendente de agua a lo largo de todo el xilema.

                                En la figura 1, se muestran los eventos que suceden según la teoría de cohesión-tensión:
                                <strong>1.</strong> El agua se mueve por ósmosis hacia el interior de la raíz y, de ahí, al xilema.
                                <strong>2.</strong> Las propiedades de cohesión y de adhesión del agua impulsan la formación de una columna de agua en el xilema.
                                <strong>3.</strong> El agua se mueve del xilema hacia las células del mesófilo de las hojas. De ahí, se evapora y se difunde a través de los estomas al exterior en forma de vapor de agua.

                                Varios factores pueden afectar la absorción de agua por parte de la planta:

                                ◉ La temperatura del suelo afecta la velocidad de absorción. Cuando la temperatura es baja, el agua se vuelve más viscosa y se mueve menos, lo cual dificulta la absorción.
                                ◉ La aireación deficiente del suelo afecta el metabolismo de la planta y retrasa el crecimiento de la raíz.
                                ◉ Una alta concentración de sales minerales en el suelo hace que el agua salga de la planta en vez de ser absorbida.
                                ◉ Una baja disponibilidad de agua en el suelo dificulta la absorción de agua.
                                ◉ El tipo de raíz puede afectar la absorción del agua según el ambiente en que se esté; por ejemplo: un sistema de raíz pivotante puede absorber agua en capas más profundas del suelo, lo que le confiere a la planta mayor resistencia ante la sequía.

                                Una vez absorbida el agua, el líquido es filtrado por la endodermis de la raíz y se dirige hacia los conductos del xilema, por medio del cual se distribuye a toda la planta. De los tallos, el agua ingresa por los peciolos, se mueve por las venas de las hojas y pasa a las láminas de la hoja para salir por los estomas en forma de vapor de agua (ver figura 2).`,
                  imagen: [
                      {url:"https://www.researchgate.net/publication/259175751/figure/fig5/AS:434638222041094@1480637235973/Figura-II13-Modelo-simplificado-del-sistema-de-transporte-de-sustancias-en-las-plantas.png", descripcion: "Figura 1. Movimiento de agua y soluto desde la raíz hasta las hojas."},
                      {url:"https://www.biologia.edu.ar/botanica/tema20/images20/raiz13.jpg", descripcion: "Figura 2. Estructura de la raíz."}
                  ]
                }
              ]
            },
            {
              id: "233", nombre: "Transpiración",
              contenido: [
                {
                  subTitulo:"Factores que afectan la transpiración",
                  descripcion: `La evapotranspiración (ver figura 1) incluye dos etapas: la evaporación del agua en la hoja y la difusión del vapor de agua hasta el exterior a través de los estomas. La cantidad de agua que transpira una planta varía según la especie y el hábitat; por ejemplo, una sola planta de maíz puede perder cerca de doscientos litros de agua por transpiración en toda su vida. Entre 50 y 85% de la lluvia que cae en un terreno con vegetación vuelve a la atmósfera por la transpiración de las plantas.`,
                  imagen: [
                      {url:"https://i0.wp.com/www.tipsytemasagronomicos.com/wp-content/uploads/2016/09/dedsdasdasdsadsa.png?fit=640%2C483&ssl=1&resize=1280%2C720", descripcion: "Figura 1. Figura de la evapotranspiración en las plantas."}
                  ]
                },
                {
                  subTitulo:"Varios factores afectan la transpiración:",
                  descripcion: `◉ La transpiración es mayor cuando el aire está seco o la velocidad del viento es alta, ya que se crea una gradiente de humedad. También, es elevada cuando hay altas temperaturas, ya que aumenta la velocidad de salida del agua.
                                ◉ Un incremento en la cantidad de luz abre los estomas (para la fotosíntesis) y aumenta la transpiración.
                                ◉ Un aumento en la humedad atmosférica o una elevada humedad del suelo también podrían favorecer la transpiración, ya que contribuyen a la turgencia de las células oclusivas de los estomas y, en consecuencia, los poros estomáticos pueden permanecer más abiertos.
                                ◉ Una concentración alta de dióxido de carbono hace que el estoma tenga menor apertura, por cuanto habrá menos transpiración. No obstante, lo mismo sucede cuando hay una concentración alta de oxígeno (ver figura 2).`,
                  imagen: [
                      {url:"https://live.staticflickr.com/2937/14344294801_bd04b3e9f4_c.jpg", descripcion: "Figura 2. Estomas de Nerium con altas cantidades de oxígeno."}
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
      id: "3", color: "indigo", nombre: "Diversidad y conservación", img: "static/moduloTres/modulo3.png",
      subModulo: [
        {
          id:"31", nombre: "Clasificación y evolución",
          resumen: `La taxonomía vegetal es la rama de la botánica que se encarga de la clasificación de las plantas según distintos criterios, normas y leyes. La taxonomía clasifica las plantas en categorías taxonómicas.

                    Las principales categorías taxonómicas botánicas, por orden decreciente de jerarquía, son las siguientes:

                    Reino (Plantae) -> División, Clase, Orden, Familia, Género y Especie

                    Para designar las especies, se emplea el sistema binomial, propuesto inicialmente por Carlos Linneo en el siglo XVIII. Cada especie recibe un nombre científico, generalmente en latín, compuesto por dos palabras: género + epíteto específico.

                    La primera palabra se denomina género y la segunda palabra es el epíteto específico.

                    En el reino Plantae, hay dos divisiones principales:
                    ◉ Bryophyta: hepáticas, antoceros y musgos.
                    ◉ Tracheophyta: helechos, pinos, plantas con flores.`,
          descripcion : [
            {
              texto: `En la siguiente imagen se ve la clasificación de la taxonomía de las plantas.`,
              imagen: [
                { url:"https://files.passeidireto.com/072e9766-c1d3-4096-8ded-7e3fe7fd3591/bg1.png", descripcion: "Jerarquía de la taxonomía." }
              ]
            }
          ],
          // CONTENIDO ---------------
          seccion: [
            {
              id: "311", nombre: "División Bryophyta",
              contenido: [
                {
                  subTitulo:"División Bryophyta",
                  descripcion: `Las briófitas son plantas pequeñas y primitivas comunes en lugares muy húmedos. No tienen tejidos vasculares (xilema, floema) ni producen semillas. La fase dominante es el gametofito (fase haploide que contiene gametos). El esporofito es dependiente del gametofito y produce esporas. Existen tres clases en la división Bryophyta: Hepaticopsida, Anthocerotopsida y Bryopsida (ver figura 1).`,
                  imagen: [
                      {url:"https://cdn0.ecologiaverde.com/es/posts/9/3/9/que_son_las_plantas_briofitas_definicion_1939_0_600.jpg", descripcion: "Figura 1. Planta perteneciente a la briófitas."}
                  ]
                },
                {
                  subTitulo:"Hepaticopsida",
                  descripcion: `En la clase Hepaticopsida se clasifican las plantas conocidas como hepáticas. Su cuerpo se denomina talo y tiene forma de abanico. Tienen células con cuerpos oleosos que contienen aceites y sustancias aromáticas (ver figura 2).`,
                  imagen: [
                      {url:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Lunularia_cruciata.jpg/1200px-Lunularia_cruciata.jpg", descripcion: "Figura 2. Hepática del género Marchantia."}
                  ]
                },
                {
                  subTitulo:"Anthocerotopsida",
                  descripcion: `En esta clase están los antoceros que, por su forma, también se conocen como hepáticas con cuernos. Muchas especies de antoceros cuentan con cavidades mucilaginosas ocupadas por colonias de cianobacterias del género Nostoc (ver figura 3).`,
                  imagen: [
                      {url:"https://inaturalist-open-data.s3.amazonaws.com/photos/331616234/original.jpeg", descripcion: "Figura 3. Anthoceros del cianobacterias del género Nostoc."}
                  ]
                },
                {
                  subTitulo:"Bryopsida",
                  descripcion: `En Costa Rica, arriba de los 1700 m s. n. m., crece el musgo Sphagnum, propio de los pantanos de altura denominados turberas (ver figura 4).

                                El siguiente video resume las principales características de los musgos y las hepáticas, las briófitas más comunes.`,
                  imagen: [
                      {url:"https://inaturalist-open-data.s3.amazonaws.com/photos/32634490/original.jpg", descripcion: "Figura 4. Clase de Bryopsida."}
                  ]
                }
              ]
            },
            {
              id: "312", nombre: "División Tracheophyta",
              contenido: [
                {
                  subTitulo:"División Tracheophyta",
                  descripcion: `Las traqueófitas son plantas de mayor tamaño que las briófitas y cuentan con tejido vascular (xilema y floema). Su fase dominante es el esporofito (fase diploide que contiene esporas). El gametofito produce las células sexuales haploides y es dependiente del esporofito.

                                La división Tracheophyta se separa en las clases: Lycopodiopsida, Psilotopsida, Equisetopsida, Polypodiopsida, Cycadopsida, Coniferopsida, Gingkopsida, Gnetopsida y Angiospermopsida (ver figura 1).`,
                  imagen: [
                      {url:"https://upload.wikimedia.org/wikipedia/commons/0/0d/Psilotum.jpg", descripcion: "Figura 1. Planta perteneciente a la familia Tracheophyta."}
                  ]
                },
                {
                  subTitulo:"Lycopodiopsida",
                  descripcion: `Las pertenecientes a esta clase son plantas como los licopodios o los ciprecillos y las selaginelas. Por lo general, se les encuentra en zonas muy húmedas, especialmente arriba de los 1500 m s. n. m. En la imagen, se aprecian plantas de la especie Lycopodium clavatum con estróbilos (estructuras con forma de cono y que cuentan con hojas reproductivas que contienen esporas) (ver figura 2).`,
                  imagen: [
                      {url:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Lycopodium_annotinum_04.jpg/220px-Lycopodium_annotinum_04.jpg", descripcion: "Figura 2. Lycopodium clavatum."}
                  ]
                },
                {
                  subTitulo:"Psilotopsida",
                  descripcion: `En esta clase, se encuentra la grama de playa Psilotum nudum. Se puede observar en Cahuita, en la provincia de Limón. En los tallos, se observan protuberancias; cada una de ellas corresponde a la fusión de tres esporangios. Dentro de ellos, hay esporas alargadas. Estas plantas poseen un pequeño tallo subterráneo llamado rizoma (ver figura 3).`,
                  imagen: [
                      {url:"https://www.picturethisai.com/wiki-image/1080/153723489520451623.jpeg", descripcion: "Figura 3. Psilotum nudum."}
                  ]
                },
                {
                  subTitulo:"Equisetopsida",
                  descripcion: `Esta clase se integra por las colas de caballo, Equisetum. Se caracterizan por sus tallos ramificados de forma verticilada, con células de paredes gruesas y ricas en silicatos. Los estróbilos se encuentran en el extremo de las ramas fértiles.

                                Las esporas de Equisetum cuentan con eláteres. Estas son estructuras alargadas que contribuyen a su dispersión por medio del viento (ver figura 4).`,
                  imagen: [
                      {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dDacstIiTEn5Hl8sDfZPrusL7WDZFHk7Ew&s", descripcion: "Figura 4. Estróbilo de Equisetum sp."}
                  ]
                },
                {
                  subTitulo:"Polypodiopsida",
                  descripcion: `En esta oportunidad, se trata de helechos. En Costa Rica, existen más de 200 especies. Sus hojas se denominan frondas y, en su borde o envés, se encuentran agrupaciones de esporangios denominadas soros (ver figura 5).`,
                  imagen: [
                      {url:"https://www.taxateca.com/images/dominioeukaryota/Reinoplantae/filomonilophyta/clasepolypodiopsida/fern.jpg", descripcion: "Figura 5. Helechos de Polypodiopsida."}
                  ]
                },
                {
                  subTitulo:"Cycadopsida",
                  descripcion: `En esta clase, se encuentran las cicas y las zamias. Las plantas de este grupo cuentan con semillas carnosas cubiertas por conjuntos de hojas especializadas o conos. Se parecen a palmeras pequeñas, con hojas divididas y semillas grandes, por lo general, rojizas. Son dioicas, es decir, las plantas femeninas están separadas de las masculinas (ver figura 6).`,
                  imagen: [
                      {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4-3FpoSqQ7UXfehHYKj4P2UIyu6wbGZ-k9g&s", descripcion: "Figura 6. Helecho de Cycadopsida."}
                  ]
                },
                {
                  subTitulo:"Coniferopsida",
                  descripcion: `También se llaman gimnospermas o plantas con semillas desnudas. Son las coníferas, es decir, pinos, cipreses, araucarias. En algunos casos son dioicas, pero también, hay plantas monoicas (con los órganos masculinos y femeninos en un mismo individuo).

                                Las semillas están expuestas y se desarrollan en la superficie de escamas u hojas modificadas que forman un estróbilo. Los estróbilos se denominan conos o piñas (ver figura 7).`,
                  imagen: [
                      {url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Spar_naalden.jpg/266px-Spar_naalden.jpg", descripcion: "Figura 7. Semilla de Coniferopsida."}
                  ]
                },
                {
                  subTitulo:"Cycadopsida",
                  descripcion: `No está representada en Costa Rica. Abundaba en la era Mesozoica (hace 248-65 millones de años). Únicamente sobrevive una especie: Gingko biloba, caracterizada por las hojas con forma de abanico y un corte en el medio (bilobadas) (ver figura 8).`,
                  imagen: [
                      {url:"https://upload.wikimedia.org/wikipedia/commons/3/3b/Cycas_inflorescence.jpg", descripcion: "Figura 8. Familia Cycadopsida."}
                  ]
                },
                {
                  subTitulo:"Gnetopsida",
                  descripcion: `Plantas con semillas desnudas (no envueltas por un fruto). En Costa Rica, está solo Gnetum leyboldii, el bejuco de dosel. Esta es una trepadora que alcanza el dosel en bosques de zonas bajas y húmedas. Los estróbilos masculinos de las plantas de esta clase se encuentran agrupados, similares a las flores (ver figura 9).`,
                  imagen: [
                      {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjpuzAvO-eSsarnbmwaWnjo8jwY3ht9NvdAw&s", descripcion: "Figura 9. Canutillos de la familia Gnetopsida."}
                  ]
                },
                {
                  subTitulo:"Angiospermopsida",
                  descripcion: `Las angiospermas son plantas con flores y semillas contenidas en frutos verdaderos. En este grupo, los esporangios están agregados y asociados con hojas especializadas para formar las flores con estambres y carpelos (ver figura 10).

                                Este es el grupo dominante del reino Plantae, ya que alrededor de 90% de las plantas existentes son angiospermas. Existen aproximadamente 260 000 especies de plantas con flores distribuidas en unas quinientas familias.

                                Las angiospermas se dividen en dos grupos, según el número de cotiledones (primeras hojas) que posee el embrión:
                                ◉ <strong>Monocotiledóneas.</strong> Embrión con un cotiledón. Las hojas casi siempre tienen venación paralela; las flores cuentan con piezas florales dispuestas en grupos de tres y no presentan crecimiento secundario. Además, en el tallo los haces vasculares, están ubicados de manera dispersa.
                                ◉ <strong>Dicotiledóneas.</strong> Embrión con dos cotiledones. Las hojas, por lo general, tienen nervaduras ramificadas. Las piezas florales están en grupos de cuatro o cinco (o sus múltiplos). En muchas especies, se da crecimiento secundario. En los tallos, la disposición de los haces vasculares forma un anillo, continuo o discontinuo.

                                Algunas de las familias de angiospermas con mayor número de especies son las siguientes:
                                ◉ <strong>Orchidaceae.</strong> Orquídeas (monocotiledóneas) como las guarias y la vainilla.
                                ◉ <strong>Poaceae.</strong> Monocotiledóneas con un fruto tipo cariopsis como el zacate, el bambú, la caña de azúcar, el maíz, el trigo y el arroz.
                                ◉ <strong>Asteraceae.</strong> Plantas dicotiledóneas con flores compuestas como la Santa Lucía, la manzanilla y la margarita.
                                ◉ <strong>Fabaceae.</strong> Dicotiledóneas con frutos que son una legumbre, como el frijol, el tamarindo, el árbol de Guanacaste, el poró, la dormilona y el malinche.

                                En la figura 11, se resumen las principales diferencias entre monocotiledóneas y dicotiledóneas.`,
                  imagen: [
                    {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThUlfZboz1k3HDWh-J2Pkp6c6kuHoHszBQHQ&s", descripcion: "Figura 10. Ilustración de flores pertenecientes a la familia Angiospermopsida."},
                    {url:"https://us.123rf.com/450wm/normaals/normaals2004/normaals200400002/143663474-ilustraci%C3%B3n-de-vector-de-monocotiled%C3%B3neas-y-dicotiled%C3%B3neas-esquema-de-divisi%C3%B3n-de-comparaci%C3%B3n-de.jpg", descripcion: "Figura 11. Ilustración de la diferencia entre monocotiledóneas y dicotiledóneas."}
                  ]
                }
              ]
            },
            {
              id: "313", nombre: "Historia evolutiva",
              contenido: [
                {
                  subTitulo:"Historia evolutiva de las plantas",
                  descripcion: `Las primeras plantas aparecieron hace cientos de millones de años y tuvieron un origen acuático (ver figura 1).`,
                  imagen: [
                      {url:"https://agencia.unq.edu.ar/wp-content/uploads/2022/08/improntas-de-hojas-dest1.jpg", descripcion: "Figura 1. Resto fosil de plata acuática."}
                  ]
                },
                {
                  subTitulo:"Plantas de la era Paleozoica",
                  descripcion: `En la era Paleozoica (la primera del Eón Fanerozoico), aparecen algas de la clase Charophyceae; estas son los ancestros del Reino Plantae, al final del periodo Ordovícico y principios del periodo Silúrico (hace como 460 millones de años).

                                A finales del periodo Silúrico y a principios del periodo Devónico (420 millones de años), ya existían plantas de las clases Hepaticopsida, Anthocerotopsida, Bryopsida y Rhyniopsida (extinta). En estas primeras plantas, ya era posible observar anteridios (órganos reproductores masculinos); arquegonios (órganos reproductores femeninos), embriones, alternancia de generaciones, epidermis, esporangios y esporas.

                                En los comienzos del periodo Devónico (400 millones de años), ya estaban plantas de las clases Lycopodiopsida, Psilotopsida, Equisetopsida y Pteridopsida (Polypodiopsida). Todas estas tienen especies presentes hoy día. La generación dominante es el esporofito diploide. Cuentan con traqueidas, frondas y rizomas.

                                A mediados del Devónico, hace unos 380 millones de años, aparecieron plantas de las clases Aneurophytopsida y Archaeopteridopsida, ya extintas. Estas tenían tallos leñosos y se consideran precursores de las plantas con semillas (ver figura 2).

                                A finales del Devónico (hace 360 millones de años), surgen las plantas conocidas como “helechos con semillas del Paleozoico”, de las clases Lyginopteridopsida, Medullosopsida y Callistophytopsida. En estas plantas, se distinguían estructuras como semillas, glándulas secretoras y nucela (parte interna del primordio seminal) (ver figura 3).

                                En el periodo Carbonífero (hace unos 355 millones de años), se origina la selva húmeda y caliente. Aparecen representantes de las clases Cycadopsida y Coniferopsida. También, surge la clase Gingkopsida, con solo un representante vivo en la actualidad (la especie Gingko biloba). Ya se ven características como la cubierta seminal pétrea o carnosa y la movilización de las reservas alimenticias de las semillas.`,
                  imagen: [
                      {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpvBWEogtRp2yfwJSgl7ID8g2_3BArYgf1JFL5aoCJY-ZLXWnOJS1uubpU2jQbBNsSCQ&usqp=CAU", descripcion: "Figura 2. Fósil de Archaeopteris sp."},
                      {url:"https://upload.wikimedia.org/wikipedia/commons/4/40/Neuropteris_flexuosa_fossil_plant_%28Mazon_Creek_Lagerstatte%2C_Francis_Creek_Shale%2C_Middle_Pennsylvanian%3B_coal_mine_dump_pile_near_Essex%2C_northern_Illinois%2C_USA%29_%2814910119354%29.jpg", descripcion: "Figura 3. Neuropteris, del orden Medullosales."}
                  ]
                },
                {
                  subTitulo:"Plantas que aparecieron en la era Mesozoica",
                  descripcion: `En la era Mesozoica, a mediados del periodo Triásico (hace unos 230 millones de años), surgen las coníferas que son ancestros de los actuales pinos y cipreses. Hay presencia de conductos resiníferos y semillas ariladas o aladas (ver figura 4).

                                También, aparecen los “helechos con semillas del Mesozoico”, pertenecientes a las clases Coristospermopsida, Peltaspermopsida y Glossopteridopsida, todos extintos.

                                A principios del periodo Jurásico (de 210 a 180 millones de años atrás), surgen clases como la Caytoniopsida, Pentoxylopsida y Bennetitopsida, todas extintas hoy. También, aparece la clase Gnetopsida. Al parecer, aquí emergen las primeras plantas con flores y caracteres como el nervio foliar longitudinal con muchos nervios secundarios, estructuras bisexuales rodeadas de hojas estériles e inserción de primordios seminales sobre un receptáculo.

                                Los primeros fósiles de la clase Angiospermopsida datan de principios del periodo Cretácico (hace unos 135 millones de años), antes del desarrollo de los mamíferos. En esta clase, surge el carpelo (ovario con primordios seminales, estilo y estigma), que dio origen a los frutos. En la actualidad, es la clase con más especies representadas en el planeta. Se cree que las primeras plantas angiospermas fueron acuáticas.`,
                  imagen: [
                      {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaWNchxWfLBBSNYjznm-d7lAp2BwqQtakULA&s", descripcion: "Figura 4. Fósil de semilla aladas."}
                  ]
                }
              ]
            }
          ]
        },
        {
          id:"32", nombre: "Biomas",
          resumen: `Los biomas son regiones del planeta que tienen flora, fauna y clima similares. Existen biomas terrestres y acuáticos.`,
          descripcion : [
            {
              texto: `En la siguiente imagen se puede ver los diferenten biomas más destacados del mundo:`,
              imagen: [
                { url:"https://ecosiglos.com/wp-content/uploads/2019/08/tipos-de-biomas.jpg", descripcion: "Fotografía de grupos de biomas" }
              ]
            }
          ],
          // CONTENIDO ---------------
          seccion: [
            {
              id: "321", nombre: "Biomas terrestres",
              contenido: [
                {
                  subTitulo:"Biomas terrestres",
                  descripcion: `Muchas de las características de la vegetación de los biomas terrestres son adaptaciones que tienen relación con la forma en que las plantas obtienen, retienen y utilizan el agua y los minerales del sustrato donde crecen. Existen diversos tipos de biomas terrestres, como el boque tropical seco, el bosque tropical lluvioso, la sabana, el desierto, la taiga y la tundra (ver figura 1).`,
                  imagen: [
                      {url:"https://arc-anglerfish-arc2-prod-abccolor.s3.amazonaws.com/public/J65EENCQMVES3HTLBFG5QEYVLU.jpg", descripcion: "Figura 1. Los 4 mayores biomas terrestres."}
                  ]
                },
                {
                  subTitulo:"Bosque tropical seco",
                  descripcion: `Se encuentra en latitudes tropicales y se caracteriza por su clima cálido todo el año y su prolongada estación seca.

                                En la vegetación predominan los árboles deciduos que pierden las hojas en los meses más secos. Esta estrategia les permite conservar agua en época de escasez. Sus raíces son profundas, lo cual facilita la captación de agua subterránea.

                                Los claros de bosque formados por la caída de las hojas posibilitan el crecimiento de plantas de sotobosque. En las zonas de mayor humedad del bosque seco tropical, se observan plantas siempreverdes (ver figura 2).`,
                  imagen: [
                      {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIrJ2xrTrxTyKbY4GQMNST4j1k9qQQXKST2g&s", descripcion: "Figura 2. Bioma bosqué tropical seco."}
                  ]
                },
                {
                  subTitulo:"Bosque tropical lluvioso",
                  descripcion: `Se encuentra en latitudes tropicales. El clima es cálido todo el año y la precipitación anual es muy elevada. En general, los suelos de este bioma tienen un contenido bajo en nutrientes.

                                Muchas plantas cuentan con hojas grandes que ofrecen una superficie amplia para captar la luz necesaria en la fotosíntesis. Además, por lo general, las hojas terminan en un extremo puntiagudo que permite que el exceso de agua escurra; de esta manera, se previene la formación de hongos.

                                En este bioma, hay una gran diversidad de plantas epífitas como lianas, bromelias y orquídeas, las cuales aprovechan la luz del dosel.

                                La corteza de los árboles del bosque tropical lluvioso suele ser delgada, pues debido a la elevada humedad, no corren el peligro de desecarse. Estas plantas suelen tener raíces de tipo gamba que sirven como contrafuerte (ver figura 3).`,
                  imagen: [
                      {url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Selva_Humeda_Farallones_de_Cali.JPG/1200px-Selva_Humeda_Farallones_de_Cali.JPG", descripcion: "Figura 3. Bioma Bosque tropical lluvioso."}
                  ]
                },
                {
                  subTitulo:"Sabana",
                  descripcion: `Las sabanas son regiones de clima tropical seco. Se caracterizan por la abundante presencia de pastos. Debido a la baja precipitación, los árboles son escasos y se encuentran dispersos; por lo general, cerca de las fuentes de agua. Poseen hojas coriáceas y corteza gruesa para resistir al fuego, ya que, en la época seca, suelen caer muchos rayos (ver figura 4).`,
                  imagen: [
                      {url:"https://cdn0.bioenciclopedia.com/es/posts/4/8/0/sabana_caracteristicas_flora_y_fauna_84_orig.jpg", descripcion: "Figura 4. Bioma Sabana."}
                  ]
                },
                {
                  subTitulo:"Desierto",
                  descripcion: `Estos biomas se caracterizan por ser extensiones áridas e inhóspitas, con poca vida vegetal y animal debido a la baja precipitación. Existen desiertos cálidos y fríos. Los desiertos cálidos son muy calientes durante el verano y cálidos el resto del año. En los desiertos fríos, hay un largo invierno con temperaturas muy bajas.

                                Muchas plantas de los desiertos cálidos, como los cactos, son capaces de almacenar agua en sus gruesos tallos protegidos por una cubierta cerosa. Además, tienen hojas modificadas en forma de espinas; de esta manera, evitan la desecación por transpiración y se protegen contra herbívoros.

                                Las raíces de las plantas de los desiertos en general son muy extensas, de manera que puedan absorber rápidamente el agua de las escasas precipitaciones. En muchos casos, las semillas pueden permanecer latentes por un largo periodo, hasta que absorban suficiente agua para germinar y desarrollarse (ver figura 5).`,
                  imagen: [
                      {url:"https://static.nationalgeographic.es/files/styles/image_3200/public/2462.600x450.webp?w=1600&h=900", descripcion: "Figura 5. Bioma desierto."}
                  ]
                },
                {
                  subTitulo:"Taiga",
                  descripcion: `En la taiga, hay inviernos largos y muy fríos con días cortos; y, veranos húmedos, con días largos y frecuentes incendios. La elevada precipitación cae como nieve en el invierno y como lluvia en el verano. Los suelos son poco profundos, ácidos y escasos en nutrientes.

                                Las plantas dominantes son las coníferas como los pinos y los abetos. Estas plantas siempreverdes tienen hojas muy pequeñas con forma de aguja y una cubierta cerosa, para evitar la pérdida de agua por transpiración. El color oscuro de las hojas permite absorber la mayor cantidad de energía luminosa posible. La forma cónica de los árboles deja que la nieve se escurra (ver figura 6).`,
                  imagen: [
                      {url:"https://cdn0.bioenciclopedia.com/es/posts/0/8/0/taiga_que_es_y_caracteristicas_80_orig.jpg", descripcion: "Figura 6. Bioma de Taiga."}
                  ]
                },
                {
                  subTitulo:"Tundra",
                  descripcion: `La tundra es el bioma más seco y con la más baja temperatura del planeta. Los días de verano son de 24 horas debido a la cercanía al Polo Norte.

                                La biodiversidad de la tundra es muy baja. Las plantas dominantes en este bioma son los musgos y pequeños arbustos. La poca altura de estos organismos contribuye a la resistencia contra el viento (ver figura 7).`,
                  imagen: [
                      {url:"https://concepto.de/wp-content/uploads/2018/10/tundra1-e1539985627461-800x400.jpg", descripcion: "Figura 7. Bioma de Tundra."}
                  ]
                }
              ]
            },
            {
              id: "322", nombre: "Biomas acuáticos",
              contenido: [
                {
                  subTitulo:"Biomas acuáticos",
                  descripcion: `Los biomas acuáticos pueden ser de agua dulce o salada. Las plantas de estos ecosistemas tienen a su disposición abundantes agua y minerales; sin embargo, deben efectuar adaptaciones especiales para el intercambio de gases y mantener el equilibrio osmótico. Algunos biomas acuáticos son los lagos, las lagunas y los manglares (ver figura 1).`,
                  imagen: [
                      {url:"https://i0.wp.com/endemico.org/wp-content/uploads/2021/10/Canicura-1.jpg?fit=1800%2C966&ssl=1", descripcion: "Figura 1. Cuerpo de agua entre montañas."}
                  ]
                },
                {
                  subTitulo:"Lagos y lagunas",
                  descripcion: `Los lagos son extensos cuerpos de agua quieta, por lo general dulce, rodeados por tierra firme. Las lagunas son de menor tamaño. En sus orillas, se encuentran plantas ancladas en el sustrato, como la tifa (Typha sp.) y plantas flotantes como las del género Wolffia y el lirio o jacinto de agua, Eichhornia crassipes. Estas plantas habitan cerca de la superficie, con el fin de captar luz para la fotosíntesis.

                                La mayoría de las plantas acuáticas son angiospermas, aunque también hay representantes de otros grupos, como el helecho acuático del género Azolla.

                                Las plantas con hojas que permanecen sumergidas tienen hojas muy delgadas, lo cual facilita el intercambio gaseoso en el medio acuático. Asimismo, son capaces de captar luz de baja intensidad.

                                Las raíces, los tallos y las hojas de las plantas acuáticas poseen un aerénquima bien desarrollado. Los grandes espacios llenos de aire de este tejido permiten la flotación. En ciertas especies, en los sustratos bajos en oxígeno, este gas se difunde de las hojas hasta las raíces vía aerénquima; asimismo, el dióxido de carbono de las raíces puede pasar a través del aerénquima a las hojas, el cual se aprovecha en la fotosíntesis (ver figura 2).`,
                  imagen: [
                      {url:"https://cdn0.ecologiaverde.com/es/posts/0/2/7/50_plantas_acuaticas_nombres_y_caracteristicas_con_imagenes_1720_orig.jpg", descripcion: "Figura 2. Planta acúatica nenúfar."}
                  ]
                },
                {
                  subTitulo:"Manglares",
                  descripcion: `Los manglares son biomas de aguas salobres o saladas, propios de regiones tropicales y subtropicales.

                                Se observan en las costas, en los estuarios, en las desembocaduras de ríos y en las marismas, entre otros.

                                Se caracterizan por la presencia de árboles de mangle. Estos son tolerantes al agua salada, gracias a la presencia de un sistema de filtración de sales que le permite secretar el exceso de sal a través de glándulas localizadas en las hojas.

                                Otra de las adaptaciones de los árboles de los manglares son las raíces fúlcreas y neumatóforos que posibilitan la sobrevivencia en suelos anegados, bajos en oxígeno (ver figura 3).`,
                  imagen: [
                      {url:"https://wwflac.awsassets.panda.org/img/manglarescolombia2024_788879.jpg", descripcion: "Figura 3. Neumatóforos sobresaliendo del suelo."}
                  ]
                }
              ]
            }
          ]
        },
        {
          id:"33", nombre: "Ambiente y conservación",
          resumen: `Casi todos los ecosistemas de la Tierra han sufrido las consecuencias directas o indirectas de las acciones del ser humano. Muchos ambientes han sido degradados debido a la deforestación, a la urbanización, a la contaminación y a la extracción de organismos de su hábitat natural.

                    Para contrarrestar los daños causados al planeta, los seres humanos han desarrollado estrategias que aprovechan el proceso natural de sucesión ecológica para la restauración de ambientes degradados. Siga los enlaces anteriores para conocer más sobre los conceptos mencionados.`,
          descripcion : [
            {
              texto: `En la siguiente imagen se puede apreciar la sucesión ambiental que ocurre para restablecer un bioma:`,
              imagen: [
                { url:"https://ecosistemas.win/wp-content/uploads/la-sucesion-ecologica-clave-para-restaurar-los-ecosistemas.png", descripcion: "Proceso de la sucesión ecológica." }
              ]
            }
          ],
          // CONTENIDO ---------------
          seccion: [
            {
              id: "331", nombre: "Sucesión ecológica",
              contenido: [
                {
                  subTitulo:"Sucesión ecológica",
                  descripcion: `La sucesión ecológica es un proceso que ocurre en la naturaleza (ver figura 1) y en el que se producen cambios secuenciales en las comunidades biológicas. Por ejemplo, cuando sucede una alteración en la naturaleza, como un incendio forestal, se establecen, primero, unas especies y estas, luego, son sustituidas por otras. Estas transformaciones son predecibles y se dan de manera relativamente ordenada. Hay dos tipos de sucesiones: primaria y secundaria.`,
                  imagen: [
                      {url:"https://bioteoria.wordpress.com/wp-content/uploads/2015/10/sucesic3b3n-eco.jpg", descripcion: "Figura 1. Etapas de la sucesión ecológica."}
                  ]
                },
                {
                  subTitulo:"Sucesión primaria",
                  descripcion: `La sucesión primaria ocurre en sitios baldíos donde no hay vida como resultado de la formación de un nuevo terreno, la exposición de roca nueva o el arrasamiento provocado por la lava de una erupción volcánica.

                                La sucesión primaria inicia con el establecimiento de especies pioneras como líquenes y musgos. Estos cambian las características físicoquímicas del sustrato. Posteriormente, aparacen plantas de pequeño tamaño, como pastos, arbustos; y, luego, árboles, hasta culminar en una comunidad clímax dominada por ciertas especies. El equilibrio que caracteriza la comunidad clímax puede ser alterado por factores climáticos, ecológicos y evolutivos (ver figura 2).`,
                  imagen: [
                      {url:"https://cdn0.ecologiaverde.com/es/posts/1/5/4/sucesion_primaria_1451_1_600.jpg", descripcion: "Figura 2. Sucesión primaria."}
                  ]
                },
                {
                  subTitulo:"Sucesión secundaria",
                  descripcion: `La sucesión secundaria pasa, con mayor frecuencia, en la naturaleza. Ocurre en sitios donde existía previamente una comunidad biológica, la cual fue afectada por alteraciones como la deforestación o el fuego. En este caso, pueden permanecer, en el terreno, nutrientes, materia orgánica, semillas y ciertos organismos, por eso, las plantas pueden colonizar el lugar más rápidamente. Por tanto, los cambios en las etapas tempranas de la sucesión secundaria se producen relativamente rápido. (ver figura 3).`,
                  imagen: [
                      {url:"https://twenergy.com/wp-content/uploads/2020/06/definici%C3%B3n-sucesi%C3%B3n-ecol%C3%B3gica.jpg", descripcion: "Figura 3. Restablecimiento de la flora de luego de un incendio."}
                  ]
                }
              ]
            },
            {
              id: "332", nombre: "Restauración",
              contenido: [
                {
                  subTitulo:"Restauración de ambientes degradados",
                  descripcion: `Los profesionales en manejo de recursos naturales, con frecuencia, deben darse a la tarea de restaurar los ambientes que han sido explotados de manera no sostenible (ver figura 1). La restauración de ambientes degradados tiene por objetivo mitigar y revertir los daños producidos por el ser humano en los ecosistemas, con el fin de restablecer las características de los hábitats naturales.

                                Una estrategia para restaurar ambientes degradados es fomentar la sucesión ecológica mediante la regeneración natural. El proceso de regeneración natural es cuando, en un terreno, aparecen distintas plantas (de semillas que estaban en el sitio) sin intervención del ser humano.

                                Un hábitat degradado puede recuperarse por sí solo cuando no hay obstáculos que impiden que se regenere. No obstante, cuando la degradación es muy alta, los mecanismos de regeneración pueden verse afectados. En este caso, el ser humano debe intervenir para eliminar los factores que obstaculizan la regeneración natural. Uno de esos factores es la presencia de especies no nativas o invasoras.

                                Entonces, primero, es necesario eliminar o controlar las especies no nativas o invasoras. Seguidamente, se debe cultivar plantas nativas propias del lugar, así como procurar que el sitio esté conectado con otros parches de hábitat natural.

                                Las personas que disfrutan de un jardín o un patio pueden contribuir a restaurar el ambiente de su comunidad también al “imitar” la naturaleza. Así, al mantener las plantas nativas que naturalmente crecerían en el sitio, proveen alimento y refugio a polinizadores y otros animales silvestres. El aprovechamiento de los restos de estas plantas para fabricar compost también beneficia el suelo al aportarle materia orgánica.`,
                  imagen: [
                      {url:"https://www.portalambiental.com.mx/sites/default/files/styles/full_content/public/media/image/2021/07/reforestacion_conafor.jpeg?itok=11owg_re", descripcion: "Figura 1. Reforestación de un valle tropical."}
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
