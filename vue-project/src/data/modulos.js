export const modulos = {
  modulos: [
    // MODULO 1
    {
      id: "1", color: "red", nombre: "Estructura de las plantas",
      subModulo: [
        {
          id:"11", nombre: "Células vegetales",
          resumen: "Las células vegetales son eucariotas; es decir, células con núcleo verdadero. Tienen muchos componentes en común con la célula animal, pero la pared celular, la vacuola y los plastidios son componentes exclusivos de las células vegetales. \n Para estudiar la célula vegetal, podemos dividirlas en tres secciones; le invitamos a seguir los enlaces para conocer más sobre ellas:",
          descripcion : [
            {
              texto: "La siguiente gráfica resume las partes de la célula vegetal:",
              imagen: [
                { url:"/static/moduloUno/parte_celula.jpeg", descripcion: "Esquema de una célula vegetal con las principales estructuras celulares (Quiroga - Martín)" }
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

                                La <strong>pared primaria</strong> se forma inmediatamente después de la división celular, antes de que la célula complete su crecimiento. En la figura 1, se muestra la formación de nuevas paredes celulares en células de cebolla.

                                La pared primaria posee proteínas que le ayudan a la resistencia contra enfermedades y para la adherencia de la membrana plasmática a la pared.

                                Las paredes primarias de células adyacentes están separadas por la <strong>lámina media,</strong> una estructura que se compone principalmente de sustancias como la pectina.

                                La <strong>pared secundaria,</strong> si existe, está unida a la membrana plasmática porque se forma de último, cuando la célula ha finalizado su crecimiento. Se depositan en ella compuestos como lignina y suberina.

                                Entre las células adyacentes, están los <strong>plasmodesmos,</strong> canales continuos de citoplasma que atraviesan las paredes celulares y permiten la comunicación entre células y el paso de sustancias (ver figura 2).`,
                  imagen: [
                      {url:"", descripcion: ""}
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

                                Las membranas están formadas por <strong>fosfolípidos</strong> y <strong>proteínas</strong>. No son sólidos rígidos, sino más bien estructuras muy flexibles en las que las moléculas pueden progagarse hacia los lados. Existen espacios en las membranas a través de las cuales pueden difundirse moléculas pequeñas (ver figura 3).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Plasmalema",
                  descripcion: `La membrana plasmática o plasmalema lleva a cabo las siguientes funciones:
                                ◉ Delimita el citoplasma de la célula.
                                ◉ Media el transporte de sustancias hacia el interior y el exterior (permeabilidad pasiva) y el transporte activo, gracias a las que actúan como acarreadoras o como canales.
                                ◉ Forma la pared celular.
                                ◉ Traslada sustancias reguladoras del crecimiento y la diferenciación celular.

                                Las membranas están formadas por fosfolípidos y proteínas. No son sólidos rígidos, sino más bien estructuras muy flexibles en las que las moléculas pueden progagarse hacia los lados. Existen espacios en las membranas a través de las cuales pueden difundirse moléculas pequeñas (ver figura 3).

                                <strong style='font-size:48px'>Retículo endoplasmático</strong>
                                El retículo endoplasmático es una doble membrana en el citoplasma. Sirve como un sistema de comunicación dentro de la célula. Se presenta en dos formas:
                                ◉ <strong>Liso (REL).</strong> Participa en la síntesis de lípidos.
                                ◉ <strong>Rugoso (RER).</strong> Con ribosomas. Interviene en la síntesis de proteínas.

                                Los <strong>ribosomas</strong> son estructuras en las que se lleva a cabo la síntesis de proteínas (ver figura 4).
                                `,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Aparato de Golgi",
                  descripcion: `El aparato de Golgi es un conjunto de sacos aplanados. Participa en el empaquetamiento de proteínas y otras sustancias, principalmente para la formación de la pared celular (ver figura 5).

                                <strong style='font-size:48px'>Vacuola</strong>
                                La vacuola es un compartimiento cerrado dentro de la célula vegetal. Almacena en su interior agua, sales, moléculas orgánicas, pigmentos, enzimas, ácidos y cristales, entre otros. Sus enzimas hacen la digestión de varios materiales. Puede ocupar hasta 90% del volumen total de la célula (ver figura 6).

                                <strong style='font-size:48px'>Membrana nuclear</strong>
                                La membrana nuclear o carioteca consta de un par de membranas (interna y externa) que permite el intercambio de materiales entre el núcleo y el citoplasma.
                                `,
                  imagen: [
                      {url:"", descripcion: ""}
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
                                El <strong>nucleoplasma</strong> es la solución acuosa con muchas enzimas en la que están suspendidos la cromatina y el <strong>nucleolo</strong> (corpúsculo esférico formado por ARN y proteínas).
                                `,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Microtúbulos y microfilamentos",
                  descripcion: `Los <strong>microtúbulos</strong> son cilindros largos y huecos de proteína tubulina. Sus funciones se relacionan con la división celular, el movimiento celular y la formación de la pared celular.

                                Los <strong>microfilamentos</strong> son estructuras sólidas de menor tamaño que los microtúbulos, compuestas por la proteína actina. También se relacionan con la producción de movimiento celular.

                                <strong style='font-size:48px'>Microcuerpos</strong>
                                Los microcuerpos son organelas esféricas delimitadas por una membrana simple. Hay dos tipos: peroxisomas y glioxisomas; están relacionadas con la fotosíntesis y la conversión de grasas en carbohidratos durante la germinación de las semillas.

                                <strong style='font-size:48px'>Mitocondrias</strong>
                                Las mitocondrias se encargan de la respiración celular. Más de la mitad de las reacciones químicas de la célula se producen en las mitocondrias. La matriz o fluido en el interior de la mitocondria es una solución acuosa con enzimas, ácidos nucleicos y proteínas (ver figura 8).
                                `,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Plastidios",
                  descripcion: `Los plastidios están rodeados por una envoltura que tiene doble membrana. Según la clase de pigmentos que contengan, se clasifican en los siguientes:
                                ◉ <strong>Cloroplastos.</strong> Contienen principalmente <strong>clorofila</strong>, el pigmento verde que capta la luz solar. También tienen carotenoides. En ellos se lleva a cabo la <strong>fotosíntesis.</strong> El estroma del cloroplasto tiene membranas apiladas como sacos, llamadas <strong>tilacoides</strong>, donde está la clorofila. Las pilas o grupos de tilacoides se llaman granum o grana. Los cloroplastos muestran un movimiento denominado <strong>ciclosis</strong>.
                                ◉ <strong>Cromoplastos.</strong> Sintetizan y almacenan carotenoides. Son responsables de dar coloraciones rojizas, amarillas o naranja a flores, frutos, etc. Ver figura 9.
                                ◉ <strong>Leucoplastos.</strong> Sin pigmentos. Pueden ser tipo <strong>amiloplastos</strong> (almacenan almidón), <strong>elaioplastos</strong> (almacenan aceites) o <strong>proteinoplastos</strong> (almacenan proteínas). Si se dejan a la luz, pueden transformarse en cloroplastos.
                                `,
                  imagen: [
                      {url:"", descripcion: ""}
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
              texto: "El siguiente mapa conceptual resume los distintos tipos de tejidos vegetales.",
              imagen: [
                { url:"", descripcion: "" }
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
                                &nbsp; ◉ Meristemos apicales, que están en los ápices o puntas del tallo y de la raíz. Provienen del embrión; es decir, son los primeros que aparecen. Causan la elongación o el crecimiento longitudinal del tallo y de la raíz. Lo que conocemos como yemas son meristemos. En la raíz, la caliptra o cofia protege el meristemo apical (ver figura 10 y figura 11).
                                &nbsp; ◉ Meristemos intercalares, que están en posiciones intermedias de la planta, por ejemplo, en los nudos de elongación. También, producen crecimiento longitudinal (ver figura 12).
                                &nbsp; ◉ Meristemos laterales, que están distribuidos en toda la planta. Como están distribuidos a manera de cilindros, al dividirse, sus células provocan el engrosamiento o el crecimiento en grosor (crecimiento secundario) de los tallos y las raíces de las plantas leñosas. Los meristemos laterales pueden ser de dos tipos:
                                - <strong>Cambium vascular.</strong> Origina el xilema y el floema secundarios de los árboles y de los arbustos.
                                - <strong>Cambium suberoso o felógeno.</strong> Produce la peridermis, tejido que sustituye la epidermis del tallo y la raíz de las plantas leñosas.`,
                  imagen: [
                      {url:"", descripcion: ""}
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

                                El cuerpo de la planta consta de tres grupos básicos de tejidos:

                                ◉ <strong>Tejidos dérmicos.</strong> Son las capas más externas del cuerpo de la planta y, por tanto, fungen como tejidos de protección contra daños mecánicos y patógenos. Son la <strong>epidermis</strong> y la <strong>peridermis.</strong> En las plantas <strong>leñosas,</strong> la peridermis reemplaza la epidermis de los tallos y de las raíces de las plantas leñosas.
                                ◉ <strong>Tejidos fundamentales.</strong> Constituyen la mayor parte del cuerpo de la planta. El <strong>parénquima</strong> (tejido más abundante), el <strong>colénquima</strong> y el <strong>esclerénquima</strong> son tejidos fundamentales.
                                ◉ <strong>Tejidos conductores.</strong> Son tejidos complejos que transportan agua, nutrientes elaborados, hormonas y minerales dentro de la planta. El <strong>xilema</strong> y el <strong>floema</strong> son los tejidos conductores o vasculares.

                                Los tejidos adultos también se pueden clasificar como <strong>primarios</strong> si provienen de los meristemos primarios. Son la epidermis, el parénquima, el colénquima, el esclerénquima y el xilema y el floema primarios.

                                Los tejidos adultos <strong>secundarios</strong> se originan de meristemos secundarios. Son la peridermis, el xilema secundario y el floema secundario.
                                `,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                }
              ]
            },
            {
              id: "123", nombre: "Tejidos dérmicos",
              contenido: [
                {
                  subTitulo:"Tejidos adultos",
                  descripcion: `Los tejidos dérmicos, al constituir la parte más externa de la planta, protegen el cuerpo vegetal de daños mecánicos y patógenos.

                                La epidermis protege la raíz, el tallo, las hojas, las flores, los frutos y las semillas.

                                En las plantas leñosas, por lo general durante el primer año, la peridermis reemplaza la epidermis de la raíz y del tallo. En ciertas plantas esto sucede varios años después, cuando el vegetal comienza su crecimiento secundario.
                                `,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Epidermis",
                  descripcion: `La epidermis es un tejido formado por células epidérmicas, sin cloroplastos, que tienen una pared externa gruesa, para proteger de la desecación. En muchas especies leñosas, como los pinos, la pared de las células epidérmicas tiene lignina y cutina; estas sustancias ayudan a impedir la salida del agua del interior de la planta hacia afuera.

                                La cutina es una sustancia de naturaleza lipídica. Forma una película llamada cutícula sobre la epidermis.

                                No hay cutícula ni en la raíz ni en los órganos sumergidos de las plantas acuáticas, porque estos órganos deben poder absorber agua. En la imagen se observa cómo las gotas de agua resbalan sobre una hoja de kale, gracias a su cutícula (ver figura 13).

                                En la epidermis de las hojas, los pétalos, los estambres y el gineceo de la flor, así como en los tallos verdes, se encuentran poros llamados estomas.

                                Un estoma es un poro o abertura en la epidermis, formada por dos células con forma de riñón llamadas células guardianas, también conocidas como células oclusivas o células de cierre. Estas dos células, al moverse, abren o cierran la abertura llamada ostiolo o poro. Sus células sí tienen cloroplastos y muchos carbohidratos.

                                Los estomas mantienen la homeostasis (regulan el medio interno de la planta). Además, controlan la pérdida de vapor de agua y el ingreso de dióxido de carbono.

                                En algunas especies, las células oclusivas de los estomas cuentan con células que las acompañan, llamadas células subsidiarias.

                                En las plantas acuáticas con hojas flotantes, los estomas están solo en el haz de la hoja. Muchas plantas parásitas no tienen estomas.

                                Las paredes de las células oclusivas que miran al poro están engrosadas. Cuando las células oclusivas están turgentes (llenas de agua), el ostiolo o poro se abre. Si pierden la turgencia, las guardianas células se “arrugan” y se cierra el poro (ver figura 14).

                                En ocasiones, la epidermis también cuenta con tricomas. Estas son excrecencias o apéndices que se pueden encontrar en las células. El origen de la palabra tricoma proviene de un vocablo griego tríchoma (τρίχωμα ) que significa 'pelo', ya que muchos tricomas de células epidérmicas parecen pelos.

                                Los tricomas tienen múltiples funciones: los pelos de las hojas pueden ser urticantes; de esa manera, repelen a los animales herbívoros. También reducen la transpiración y reflejan la radiación solar. Los tricomas de la raíz (pelos radicales) contribuyen a incrementar la superficie de absorción de agua (ver figura 15).`,
                  imagen: [
                      {url:"", descripcion: ""}
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

                                La figura 16, muestra un corte de un árbol. La peridermis está teñida de color oscuro.

                                En los tallos y en las raíces de las plantas leñosas se observan aberturas en la peridermis, llamadas lenticelas.

                                Las lenticelas están formadas por células separadas por grandes espacios intercelulares. Las primeras lenticelas, por lo general, se forman debajo de los estomas. Al igual que estos, funcionan como un poro por el cual ocurre un intercambio de gases entre la atmósfera y la planta. Sin embargo, a diferencia de los estomas, las lenticelas no poseen células oclusivas, por lo que permanecen abiertas (ver figura 17).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                }
              ]
            },
            {
              id: "124", nombre: "Tejidos fundamentales",
              contenido: [
                {
                  subTitulo:"Tejidos adultos",
                  descripcion: `Los tejidos fundamentales parénquima, colénquima y esclerénquima constituyen la mayor parte del cuerpo de la planta, ya que ocupan el espacio entre la epidermis y los tejidos conductores.

                                Los tejidos fundamentales intervienen en la fotosíntesis, en el almacenamiento de agua y de nutrientes y en el sostén.`,
                  imagen: [
                      {url:"", descripcion: ""}
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
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Esclerénquima",
                  descripcion: `El esclerénquima es un tejido complejo que, al igual que el colénquima, da sostén estructural a la planta. Difiere del colénquima en cuanto a que proporciona rigidez.

                                Las células del esclerénquima están muertas a la madurez: pierden el protoplasma, pero queda su pared celular con alto contenido de lignina.

                                El esclerénquima consta de dos tipos de células:
                                ◉ <strong>Fibras.</strong> Células estrechas y muy alargadas, a veces lignificadas y otras engrosadas por celulosa y pectina. El ser humano ha utilizado las fibras del yute, lino, cáñamo, bambú, etc., para fabricar artesanías y ropa, entre otros (ver figura 26).
                                ◉ <strong>Esclereidas.</strong> También son llamadas células pétreas. Son más o menos isodiamétricas, muy lignificadas. Aisladas o en grupo, a veces asociadas al xilema o al floema. Contribuyen a resistir el aplastamiento. Ejemplo: las esclereidas de la pera y el cas (la sensación arenosa al comer estos frutos se debe a las esclereidas)(ver figura 27).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                }
              ]
            },
            {
              id: "125", nombre: "Tejidos conductores",
              contenido: [
                {
                  subTitulo:"Tejidos conductores",
                  descripcion: `Los tejidos conductores son el <strong>xilema</strong> y el <strong>floema.</strong> Estos son tejidos complejos que están asociados a células de otros tejidos como el parénquima y el esclerénquima.

                                El xilema es el tejido que conduce agua y minerales desde la raíz hasta el resto de la planta.

                                El floema transporta sustancias elaboradas como carbohidratos y hormonas desde su sitio de producción hasta el resto de la planta.`,
                  imagen: [
                      {url:"", descripcion: ""}
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

                                En las <strong>angiospermas</strong> existen tanto traqueidas como miembros de los vasos, pero hay más miembros de los vasos (ver figura 28 y figura 29).`,
                  imagen: [
                      {url:"", descripcion: ""}
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

                                Las <strong>células de transferencia floemática</strong> son células asociadas al floema que colectan los carbohidratos producidos en las hojas y los transportan hasta el tubo criboso (ver figura 30).`,
                  imagen: [
                      {url:"", descripcion: ""}
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
              texto: "El siguiente esquema trata sobre los órganos vegetativos de las plantas traqueófitas.",
              imagen: [
                { url:"", descripcion: "" }
              ]
            },
            {
              texto: "En el siguiente esquema, se muestran los aspectos principales de los órganos relacionados con la reproducción sexual en las plantas angiospermas.",
              imagen: [
                { url:"", descripcion: "" }
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
                  descripcion: `La raíz es el órgano responsable del anclaje de la planta al sustrato. También tiene como función la absorción de agua y de minerales. En algunas especies, almacena y conduce sustancias necesarias para el desarrollo de la planta.

                                Desde hace miles de años, los seres humanos han cultivado raíces que almacenan grandes cantidades de carbohidratos. Estos son ejemplos de especies con raíces de almacenamiento: la zanahoria, la remolacha, la yuca, el rábano y el chayote.`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:`Estructura de la raíz`,
                  descripcion: `En la raíz, se distinguen las siguientes partes:
                                ◉ <strong>Caliptra.</strong> Masa de células que protege el meristema apical de la raíz y le ayuda a penetrar el suelo.

                                ◉ <strong>Mucílago o mucigel.</strong> Sustancia con apariencia de baba que lubrica la raíz para ayudar a penetrar el suelo. Permite la adherencia de bacterias y protege contra la desecación.

                                ◉ <strong>Epidermis o rizodermis</strong> (a la epidermis de la raíz se le puede llamar rizodermis). Absorbe agua y minerales. Esta función es facilitada por los pelos radicales.

                                ◉ <strong>Corteza o parénquima cortical (o córtex).</strong> Conjunto de células de parénquima que está entre la epidermis y el cilindro vascular (ver figura 31).

                                ◉ <strong>Cilindro vascular.</strong> Parte interna de la raíz formada por los tejidos vasculares: xilema (transporte de agua y minerales) y floema (transporte de sustancias elaboradas en fotosíntesis). El cilindro vascular está encerrado por una capa de células de parénquima llamada periciclo.

                                ◉ <strong>Endodermis.</strong> Conjunto de células que regula el paso de agua a los conductos vasculares por medio de las bandas de Caspary.

                                ◉ <strong>Banda de Caspary.</strong> Deposiciones de suberina y a veces de lignina en forma de bandas. Son impermeables al agua y a los iones. En la fotografía, se muestra la banda de Caspary presente en la raíz de Equisetum giganteum (ver figura 32).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:`Tipos de raíces`,
                  descripcion: `◉ <strong>Aéreas.</strong> Se encuentran, en ambientes inundables. Se originan en ramas o tallos laterales; cuelgan desde las partes aéreas de la planta. Ejemplos: mangles, palma chonta o caminadora, maíz y orquídea (ver figura 33).

                                ◉ <strong>Zancudas o fúlcreas.</strong> Cuando las raíces aéreas tocan el suelo, se convierten en zancudas. Cuelgan de la parte aérea de la planta y alcanzan el suelo. Ejemplo: maíz, mangle, copey, etc.

                                ◉ <strong>Acuáticas.</strong> Las plantas acuáticas con raíces presentan tejido vascular vestigial y muchos pelos radicales plumosos, con gran cantidad de espacios llenos de aire para almacenar oxígeno y dióxido de carbono. Ejemplos: lirio de agua, sagitaria y loto (mostrada en la imagen) (ver figura 34).

                                ◉ <strong>Pneumatóforos.</strong> Raíces de aireación de plantas que viven en lugares inundados o mal drenados. Crecen por encima de la superficie acuática, en contra de la gravedad. Ejemplo: mangle salado o palo de sal (ver figura 35).

                                ◉ <strong>Gambas.</strong> Raíces columnares, triangulares o tubulares, también conocidas como contrafuertes que se originan en la base de algunos árboles. Proporcionan mayor anclaje, especialmente en zonas muy lluviosas o en suelos con tierra muy suelta. Ejemplos: ceiba y árbol de Guanacaste (ver figura 36).

                                ◉ <strong>Haustorios.</strong> Raíces de plantas parásitas que penetran en los tejidos de la planta hospedera. Ejemplo: matapalo (ver figura 37).

                                ◉ <strong>Raíces de almacenamiento.</strong> Almacenan grandes cantidades de sustancias elaboradas en la fotosíntesis. Ejemplos: zanahoria, rábano, camote.

                                ◉ <strong>Raíces alargadas y carnosas.</strong> Raíces de plantas de ambientes desérticos o con periodos largos de sequía. Tienen gran cantidad de parénquima y pueden almacenar mucha agua. Ejemplo: cactus de candelabro, pasto de laguna (Isoetes storkii). Otras plantas tienen raíces laterales de gran longitud que se extienden para buscar agua, como el higuerón blanco.`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                }
              ]
            },
            {
              id: "132", nombre: "Tallos",
              contenido: [
                {
                  subTitulo:`Tallo`,
                  descripcion: `El tallo tiene, entre sus funciones, la conducción de agua y otras sustancias necesarias para la planta. Además, son el sitio de soporte de las hojas, ayudan en la resistencia mecánica y pueden almacenar sustancias necesarias para la planta.

                                En la parte terminal del vástago, se encuentra la yema terminal o meristema apical. Después, se van formando yemas laterales (axilares) en las axilas o en bases de las hojas.

                                La yema terminal inhibe el desarrollo de las laterales: esto se llama dominancia apical. Cuando se elimina la yema terminal al podar una planta, se promueve el desarrollo de yemas laterales, y se estimula la ramificación.`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:`Tipos de tallos`,
                  descripcion: `◉ <strong>Bulbo.</strong> Tallo carnoso, corto, subterráneo y cubierto con hojas o escamas engrosadas (catáfilas), capaces de almacenar agua y otros fluidos. Ejemplos: cebolla, lirios.

                                ◉ <strong>Bulbillos.</strong> Bulbos pequeños desarrollados a partir de yemas del bulbo progenitor. Ejemplos: ajo y ciertos lirios (ver figura 38).

                                ◉ <strong>Tubérculo.</strong> Tallo engrosado, subterráneo o aéreo, rico en sustancias de reserva. Ejemplos: papa, yampí y ñame. Los “ojos” del tubérculo son yemas; cada yema puede originar una nueva planta al sembrarse (ver figura 39).

                                ◉ <strong>Estolón.</strong> Tallo lateral, basal, con entrenudos largos que desarrollan raíces para formar una nueva planta en el extremo. Ejemplos: zacates de la familia Poaceae, fresa (ver figura 40).

                                ◉ <strong>Cladodio.</strong> Tallo segmentado o rama aplanada y articulada; funciona como una hoja. Ejemplo: cladodios de tuna y otros cactos (ver figura 41).

                                ◉ <strong>Cormo.</strong> Tallo corto, erecto, generalmente ensanchado a manera de tubérculo. Ejemplo: el tallo subterráneo del banano y el del taro o tiquisque (Colocasia esculenta).

                                La estructura que pareciera ser el tallo del banano es, en realidad, un pseudotallo o tallo falso formado por la agrupación de bases de hojas (ver figura 42 y 43).

                                ◉ <strong>Rizoma.</strong> Tallo carnoso, por lo general subterráneo. Posee rudimentos foliares u hojas tipo catáfilas en los nudos, yemas axilares y raíces adventicias. Ejemplos: jengibre, tallo subterráneo de la caña agria (ver figura 44).

                                ◉ <strong>Zarcillo.</strong> Rama modificada o de origen foliar, enroscada como un resorte. Ejemplo: los colochos de las plantas de chayote y de pepino (ver figura 45).`,
                  imagen: [
                      {url:"", descripcion: ""}
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
                                ◉ Las hojas de las plantas carnívoras, como las de Drosera spatulata, están modificadas para atrapar insectos y otros artrópodos (ver figura 46).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:`Estructura externa de una hoja simple`,
                  descripcion: `A la cara superior de la lámina se le denomina haz; y, a la inferior, envés. Las venas que se observan en la lámina pueden estar dispuestas en forma paralela, ramificada o palmeada.

                                En ocasiones, en la base o en el pecíolo, se encuentran excrecencias en forma de hojita llamadas estípulas (ver figura 48).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:`Estructura externa de una hoja compuesta`,
                  descripcion: `La lámina de una hoja compuesta está constituida de partes separadas con forma de pequeñas láminas denominadas foliolos u hojuelas (son como hojitas). Los peciolos de las hojas compuestas también pueden tener estípulas (ver figura 49).`,
                  imagen: [
                      {url:"", descripcion: ""}
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

                                Las flores completas tienen 3 partes (ver figura 50):
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
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:`Tipos de inflorescencias`,
                  descripcion: `Existen diversos tipos de inflorescencias:

                                ◉ <strong>Racimo.</strong> Inflorescencia con eje prolongado en la que las flores se disponen sobre pedicelos bien formados. Ejemplos: sábila y hierba de santa Bárbara (ver figura 52 y 53).

                                ◉ <strong>Espiga.</strong> Inflorescencia con eje prolongado; a diferencia del racimo, las flores son sésiles (es decir, no tienen pedicelo). Ejemplos: llantén (ver figura 54), piña.

                                El amento es una espiga que cuelga; su eje es blando. Ejemplos: sauce y roble (ver figura 55).

                                ◉ <strong>Espádice.</strong> El eje principal está engrosado. Una bráctea denominada espata cubre una espiga. Ejemplos: cala, anturio (ver figura 56 y 57).

                                ◉ <strong>Umbela.</strong> Flores con pedicelos de mismo largo, que nacen en el mismo punto de un eje principal. Ejemplos: agapanto, apio y zanahoria (ver figura 58 y 59).

                                ◉ <strong>Corimbo.</strong> Tipo de racimo, cuyas flores de la parte baja de su eje igualan en altura a las flores de la parte apical; similar a una umbela (ver figura 60). Ejemplos: pera, ciruela, Achillea sp. (ver figura 61).

                                ◉ <strong>Capítulo.</strong> También denominado cabezuela, se parece a un espádice compacto; numerosas flores sésiles muy unidas entre sí y rodeadas de brácteas (ver figura 62). Ejemplos: margarita, manzanilla, girasol (familia Asteraceae) (ver figura 63).`,
                  imagen: [
                      {url:"", descripcion: ""}
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

                                El pericarpo tiene tres partes (ver figura 64):
                                ◉ <strong>Epicarpo.</strong> Capa más externa, delgada y endurecida, conocida como cáscara.
                                ◉ <strong>Mesocarpo.</strong> Parte media, generalmente carnosa.
                                ◉ <strong>Endocarpo.</strong> Parte interna que rodea directamente las semillas.`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:`Tipos de frutos`,
                  descripcion: `◉ <strong>Baya.</strong> Fruto simple desarrollado a partir de una flor de un solo carpelo. Es carnoso e indehiscente (al madurar no se abre espontáneamente). El pericarpo es suculento y las semillas están sumergidas en la pulpa. Ejemplos: anona, tomate, berenjena, limón (baya tipo hesperidio), pepino (baya tipo pepónide) (ver figura 65).

                                ◉ <strong>Drupa.</strong> Fruto simple, carnoso, con endocarpo endurecido como hueso. Ejemplos: coco, durazno, jocote, aguacate, marañón (ver figura 66).

                                ◉ <strong>Aquenio.</strong> Fruto simple, seco, pequeño e indehiscente. Una semilla unida a la pared del fruto en un solo sitio. Ejemplos: moriseco, girasol, fresa.

                                Los aquenios de la fresa y del girasol suelen confundirse con semillas (ver figura 67).

                                ◉ <strong>Cariopsis o cariópside.</strong> Fruto pequeño, indehiscente, seco. La semilla está unida completamente a la pared del fruto. Ejemplos: zacates, maíz, arroz (ver figura 68).

                                ◉ <strong>Nuez.</strong> Fruto simple, seco, indehiscente (que no se abre espontáneamente al madurar). Tiene una sola semilla y un pericarpo endurecido. Ejemplos: fruto del roble encino, avellanas, castañas. Las almendras y las pecanas no son nueces en el sentido botánico, sino semillas de drupas (ver figura 69).

                                ◉ <strong>Legumbre.</strong> Fruto simple, seco, dehiscente (se abre espontáneamente al llegar a la madurez), derivado de un carpelo que se abre a lo largo de dos suturas. Ejemplos: las vainas de leguminosas como el frijol, el poró y el árbol de Guanacaste (ver figura 70).

                                ◉ <strong>Cápsula.</strong> Fruto simple y dehiscente. Se deriva de un ovario compuesto de dos o más carpelos. Ejemplos: copey, caoba, seso vegetal (ver figura 71).

                                ◉ <strong>Sicono.</strong> Conjunto de frutos derivados de flores distintas, rodeadas por un receptáculo carnoso. Ejemplo: higos (Ficus) (ver figura 72).`,
                  imagen: [
                      {url:"", descripcion: ""}
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

                                En las gimnospermas, la semilla está protegida por brácteas o escamas. En las angiospermas, las semillas están cubiertas por los frutos. Por lo general, las semillas poseen tres partes (ver figura 73, 74, 75):
                                ◉ <strong>Embrión.</strong> Producto de la fecundación de un gameto femenino por parte de un gameto masculino y subsecuente división mitótica del cigoto. En el embrión se localizan estructuras que se convertirán en las partes de la planta adulta, además de una o varias hojas modificadas denominadas cotiledones. Los cotiledones nutren al embrión y pueden realizar fotosíntesis cuando la planta germina.
                                ◉ <strong>Endospermo.</strong> Tejido que nutre al embrión.
                                ◉ <strong>Testa o cubierta seminal.</strong> Cubierta dura que protege al embrión y al endospermo.`,
                  imagen: [
                      {url:"", descripcion: ""}
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
      id: "2", color: "blue", nombre: "Fisiología Vegetal",
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
              texto: ``,
              imagen: [
                { url:"", descripcion: "" }
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
                  descripcion: `La fase luminosa o independiente de la luz es un conjunto de reacciones fotoquímicas que ocurre en las <strong>membranas de los tilacoides en los cloroplastos.</strong>`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Cloroplastos",
                  descripcion: `En los cloroplastos se almacena la clorofila, un pigmento fotosintético de color verde que absorbe energía luminosa.

                                Cada especie vegetal posee un número determinado de cloroplastos. El trigo y las plantas del género Arabidopsis (de la familia Brassicaceae, misma de la coliflor y del repollo) poseen un alto número de estos plastidios, ya que cuentan con cerca de cien cloroplastos por célula. Por el contrario, en algas unicelulares solo hay un cloroplasto por individuo.

                                En las células del musgo Bryum capillare hay aproximadamente diez cloroplastos por célula (ver figura 1).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Pigmentos fotosintéticos",
                  descripcion: `El pigmento fotosintético más abundante en los organismos autótrofos es la clorofila. Hay varios tipos de clorofila; la más abundante de ellas es la clorofila a, presente en todos los organismos fotosintéticos. Del espectro de luz visible, la clorofila absorbe principalmente la luz violeta-azul y la luz roja cercana, y refleja el color verde (refleja el verde porque no lo absorbe) (ver figura 2).

                                Además de la clorofila, hay otros pigmentos antena que ayudan a absorber la energía luminosa que la clorofila no puede captar; por ejemplo, los carotenoides (lípidos con colores amarillentos o rojizos que se hallan en los cloroplastos) y las ficobilinas (presentes en algas). La energía absorbida por los pigmentos antena se transfiere a la clorofila.`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Fotosistemas",
                  descripcion: `En las membranas de los tilacoides de los cloroplastos, se encuentran complejos de moléculas llamados fotosistemas. Estos constan de los pigmentos fotosintéticos y una serie de moléculas transportadoras de electrones. Cada fotosistema dispone de una zona llamada centro de reacción, donde ocurren las principales reacciones de la fase luminosa. Hay dos tipos de fotosistemas:
                                ◉ <strong>Fotosistema II (PS II).</strong> En su centro de reacción está un par de moléculas de clorofila a denominada P680 (porque la luz que absorbe la clorofila P680 tiene una longitud de onda de 680 nm).
                                ◉ <strong>Fotosistema I (PS I).</strong> En su centro de reacción está un par de moléculas de clorofila a denominada P700 (esta clorofila absorbe rayos de luz con una longitud de onda de 700 nm).`,
                  imagen: [
                      {url:"", descripcion: ""}
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

                                El electrón, después de abandonar el fotosistema II, llega al centro de reacción del fotosistema I, donde está la clorofila P700. Los pigmentos antena absorben luz y el electrón vuelve a adquirir un nivel elevado de energía; lo recibe una molécula aceptora de electrones y pasa por otra cadena transportadora. Dicho electrón será repuesto con un electrón proveniente del fotosistema II (y que llega por medio de la cadena de moléculas transportadoras de electrones). Al final de la cadena, una molécula de NADP+ ganará dos electrones con niveles elevados de energía para transformarse en poder reductor, NADPH (ver figura 3).

                                ◉ <strong>Fotofosforilación cíclica.</strong> En este tipo de fotofosforilación solo interviene el fotosistema I. El movimiento cíclico de los electrones a través del fotosistema I genera dos moléculas de ATP. Ni se libera oxígeno ni se produce NADPH. En las bacterias fotosintéticas, solo se da la fotofosforilación cíclica, ya que únicamente cuentan con un fotosistema.

                                En las plantas se producen los dos tipos de fotofosforilación. La fotosíntesis, en estos organismos, depende de la corriente eléctrica generada por el flujo de electrones: desde el agua hasta el fotosistema II; de este, al fotosistema I; y de este, al NADP+.`,
                  imagen: [
                      {url:"", descripcion: ""}
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
                                ◉ <strong>Regeneración.</strong> Se regenera la molécula aceptora ribulosa 1,5 bifosfato mediante la acción del ATP y de diversas enzimas. Se producen carbohidratos (ver figura 4).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Fotorrespiración",
                  descripcion: `La enzima rubisco se puede unir tanto al oxígeno como al dióxido de carbono. Debido a esto, en ocasiones, ocurre un proceso denominado fotorrespiración (no se debe confundir ni con la fotosíntesis ni con la respiración) que se caracteriza porque el oxígeno compite con el CO2 por unirse a la rubisco en la fase oscura.

                                En la fotorrespiración, se consume oxígeno y se desprende dióxido de carbono. Este despilfarro de carbono y de energía no es beneficioso para la planta.

                                La fotorrespiración se da, sobre todo, cuando hace calor y hay muy poca humedad; entonces, los estomas se cierran para evitar la transpiración. Como resultado, el oxígeno formado en la fase luminosa se queda acumulado en los tejidos de la hoja y compite con el CO2, y afecta la velocidad de fijación de carbono. Una importante cantidad de cultivos comerciales sufren pérdidas de productividad todos los años debido a la fotorrespiración.`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Plantas C4",
                  descripcion: `La mayoría de las plantas utilizan una vía metabólica de fijación de carbono C3, en la que el primer producto estable es un compuesto de tres átomos de carbono. Todo el proceso fotosintético ocurre en las células del mesófilo de la hoja. Estos vegetales no tienen mecanismos para contrarrestar la fotorrespiración.

                                En la naturaleza, existen algunas especies de plantas, en las que antes de producirse la carboxilación (primera etapa del ciclo de Calvin), se origina un primer compuesto estable de cuatro carbonos. A estas plantas se las denomina C4. Algunas especies C4 son la caña de azúcar, el maíz y el sorgo (familia Poaceae) (ver figura 5).

                                A diferencia de las plantas C3, en las plantas C4, las reacciones de la fase luminosa y las de la fase oscura suceden en diferentes lugares: las reacciones de la fase luminosa se producen en las células del mesófilo de la hoja, mientras que el ciclo de Calvin sucede en las células de la vaina (un tipo de células de parénquima que se localiza alrededor de las venas de las hojas) (ver figura 6).

                                Las plantas C4 cuentan con la enzima PEP-carboxilasa, la cual fija el CO2 a un compuesto de tres carbonos llamado PEP (fosfoenolpiruvato) para producir un primer compuesto estable de cuatro carbonos denominado oxoloacetato, que luego se reduce a malato. La PEP-carboxilasa, a diferencia de la rubisco, no fija oxígeno.

                                El malato pasa a las células de la vaina. Ahí se descompone liberando CO2; la rubisco fija el dióxido de carbono y se producen las reacciones del ciclo de Calvin.

                                De esta manera, las plantas pueden minimizar la fotorrespiración, ya que en las células de la vaina, la concentración de CO2 siempre es tan alta como para permitir que ocurra la fotosíntesis, incluso en días en los que los estomas permanecen cerrados por ser muy calurosos o secos.`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Plantas CAM",
                  descripcion: `Al igual que las C4, las plantas CAM están adaptadas a ambientes, por lo general, áridos. Esta ruta metabólica se observa en las plantas suculentas de la familia de las crasuláceas (CAM significa “metabolismo ácido de las crasuláceas”), en muchas especies de cactos, en la piña y en ciertas especies de orquídeas (ver figura 7).

                                A diferencia de las plantas C3 y C4, las plantas CAM abren sus estomas de noche, cuando la temperatura ha bajado; de esta manera, minimizan la pérdida de agua por transpiración. Así, la asimilación de dióxido de carbono ocurre de noche.

                                En las plantas CAM, el CO2 asimilado también se fija al PEP mediante la acción de la enzima PEP-carboxilasa. El oxoloacetato producido se transforma en malato, que se almacena en las vacuolas. Luego, en el día, el malato se descompone y se libera dióxido de carbono. El CO2 entra posteriormente al ciclo de Calvin.`,
                  imagen: [
                      {url:"", descripcion: ""}
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
              texto: ``,
              imagen: [
                { url:"", descripcion: "" }
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
                  descripcion: `La glucólisis o glicólisis es la primera etapa de la respiración celular y se lleva a cabo en el citoplasma de la célula vegetal. Puede darse en ausencia de oxígeno. Una molécula de glucosa se rompe y se forman dos moléculas de un compuesto de tres carbonos denominado piruvato. Al final de la glucólisis, se obtienen dos moléculas netas de ATP.

                                Después de que ocurre la glucólisis, el piruvato es transportado a la matriz de la mitocondria, donde se une a la coenzima A para formar una molécula llamada acetil coenzima A (acetil Co-A). Se produce, además, poder reductor en forma de NAD (nicotidamida adenina dinucleótido) y se libera CO2.`,
                  imagen: [
                      {url:"", descripcion: ""}
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

                                En el ciclo se libera más CO2 y se producen dos moléculas más de ATP, además de NADH y una coenzima llamada flavin adenin dinucleótido (FADH2). También se produce ubiquinol a partir de la reducción de la coenzima Q10 o ubiquinona, molécula que funge como transportadora de electrones (ver figura 8).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                }
              ]
            },
            {
              id: "223", nombre: "Transporte",
              contenido: [
                {
                  subTitulo:"Transporte de electrones y fosforilación oxidativa",
                  descripcion: `La última etapa de la respiración celular ocurre en las crestas de la mitocondria. En ella, la energía restante de la glucosa se libera por completo. En las crestas mitocondriales se encuentra una cadena de moléculas transportadoras de electrones (cadena respiratoria), entre ellas la ubiquinona.

                                El NADH y el FADH2 se oxidan. Los hidrógenos que transportan se disocian en electrones y protones. Los electrones pasan por la cadena respiratoria hasta llegar al oxígeno, que es el aceptor final. Una vez que el oxígeno acepta electrones y protones, se forma agua.

                                Los protones son bombeados hacia el espacio entre las membranas de la mitocondria, en contra de la gradiente de concentración. Posteriormente, los protones se mueven de nuevo hacia la matriz mitocondrial, esta vez a favor de la gradiente de concentración. De esta manera, se produce la fuerza necesaria para acoplar un grupo fosfato al ADP (adenosín difosfato), para así generar 32 moléculas de ATP en una reacción catalizada por enzimas ATP sintasas. Entonces, al final del proceso de respiración celular se producen, aproximadamente, 36 moléculas de ATP.`,
                  imagen: [
                      {url:"", descripcion: ""}
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
              texto: ``,
              imagen: [
                { url:"", descripcion: "" }
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
                                ◉ La alta capacidad calorífica y el alto calor de vaporización del agua ayudan a que la energía calórica de las plantas pueda disiparse en la evaporación y permiten que las plantas puedan tolerar los cambios de temperatura y a que su organismo se enfríe para mantener una temperatura estable y constante. Ambas propiedades se deben a los puentes de hidrógeno que se forman entre las moléculas de agua (ver figura 9).
                                ◉ El agua tiene la propiedad de adherirse a diversas superficies. Esto hace posible que, dentro de la planta, el agua se adhiera al tejido vascular, permitiendo que el líquido y los nutrientes lleguen a todos los órganos vegetales.
                                ◉ Las moléculas del agua se unen entre sí. Esta propiedad, denominada cohesión, es, junto con la propiedad de adhesión, la responsable de que dentro de los tallos de las plantas se puedan mantener columnas de agua y nutrientes.`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"¿Por qué las plantas necesitan tanta agua?",
                  descripcion: `Las plantas requieren más agua para sobrevivir que otros organismos, debido a que continuamente pierden líquido por la transpiración. Se dice que la transpiración es “un mal necesario”, ya que en la mayoría de las plantas, los estomas deben permanecer abiertos durante el día, con el fin de captar dióxido de carbono para la fotosíntesis.`,
                  imagen: [
                      {url:"", descripcion: ""}
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

                                En caso de que una célula vegetal sea colocada en un medio hipertónico, el agua se sale de la célula; se produce, entonces, el fenómeno denominado plasmólisis, en el cual el protoplasto se despega de la pared celular y causa la contracción de las células (ver video 1).

                                El sistema radical consta de múltiples raíces individuales de distintas edades. En las raíces, por lo general, hay una gran cantidad de pelos absorbentes que incrementan la superficie de absorción.

                                La raíz sirve solamente como superficie de absorción. Gracias a la transpiración de la parte aérea de la planta, el agua se absorbe y llega hasta las partes más lejanas de la raíz. En otras palabras, la transpiración es la fuerza que impulsa la absorción del agua, ya que crea una fuerza de succión que bombea el agua al interior de la raíz.

                                La teoría más aceptada por los botánicos sobre cómo el agua vence la fuerza de la gravedad dentro de una planta es la de cohesión-tensión. Esta explica que, al transpirar, se genera un déficit de agua; cuando a una célula le falta agua, absorberá líquido de la célula vecina y esta de la célula vecina, y así, sucesivamente. Debido a las propiedades de adhesión y de cohesión del agua, basta con que se absorba una sola molécula de agua para que otras se adhieran y se forme una columna ascendente de agua a lo largo de todo el xilema.

                                En la figura 10, se muestran los eventos que suceden según la teoría de cohesión-tensión:
                                <strong>1.</strong> El agua se mueve por ósmosis hacia el interior de la raíz y, de ahí, al xilema.
                                <strong>2.</strong> Las propiedades de cohesión y de adhesión del agua impulsan la formación de una columna de agua en el xilema.
                                <strong>3.</strong> El agua se mueve del xilema hacia las células del mesófilo de las hojas. De ahí, se evapora y se difunde a través de los estomas al exterior en forma de vapor de agua.

                                Varios factores pueden afectar la absorción de agua por parte de la planta:

                                ◉ La temperatura del suelo afecta la velocidad de absorción. Cuando la temperatura es baja, el agua se vuelve más viscosa y se mueve menos, lo cual dificulta la absorción.
                                ◉ La aireación deficiente del suelo afecta el metabolismo de la planta y retrasa el crecimiento de la raíz.
                                ◉ Una alta concentración de sales minerales en el suelo hace que el agua salga de la planta en vez de ser absorbida.
                                ◉ Una baja disponibilidad de agua en el suelo dificulta la absorción de agua.
                                ◉ El tipo de raíz puede afectar la absorción del agua según el ambiente en que se esté; por ejemplo: un sistema de raíz pivotante puede absorber agua en capas más profundas del suelo, lo que le confiere a la planta mayor resistencia ante la sequía.

                                Una vez absorbida el agua, el líquido es filtrado por la endodermis de la raíz y se dirige hacia los conductos del xilema, por medio del cual se distribuye a toda la planta. De los tallos, el agua ingresa por los peciolos, se mueve por las venas de las hojas y pasa a las láminas de la hoja para salir por los estomas en forma de vapor de agua.`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                }
              ]
            },
            {
              id: "233", nombre: "Transpiración",
              contenido: [
                {
                  subTitulo:"Factores que afectan la transpiración",
                  descripcion: `La evapotranspiración incluye dos etapas: la evaporación del agua en la hoja y la difusión del vapor de agua hasta el exterior a través de los estomas. La cantidad de agua que transpira una planta varía según la especie y el hábitat; por ejemplo, una sola planta de maíz puede perder cerca de doscientos litros de agua por transpiración en toda su vida. Entre 50 y 85% de la lluvia que cae en un terreno con vegetación vuelve a la atmósfera por la transpiración de las plantas.`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Varios factores afectan la transpiración:",
                  descripcion: `◉ La transpiración es mayor cuando el aire está seco o la velocidad del viento es alta, ya que se crea una gradiente de humedad. También, es elevada cuando hay altas temperaturas, ya que aumenta la velocidad de salida del agua.
                                ◉ Un incremento en la cantidad de luz abre los estomas (para la fotosíntesis) y aumenta la transpiración.
                                ◉ Un aumento en la humedad atmosférica o una elevada humedad del suelo también podrían favorecer la transpiración, ya que contribuyen a la turgencia de las células oclusivas de los estomas y, en consecuencia, los poros estomáticos pueden permanecer más abiertos.
                                ◉ Una concentración alta de dióxido de carbono hace que el estoma tenga menor apertura, por cuanto habrá menos transpiración. No obstante, lo mismo sucede cuando hay una concentración alta de oxígeno (ver figura 11 y video 2).`,
                  imagen: [
                      {url:"", descripcion: ""}
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
      id: "3", color: "indigo", nombre: "Diversidad y conservación",
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
              texto: ``,
              imagen: [
                { url:"", descripcion: "" }
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
                  descripcion: `Las briófitas son plantas pequeñas y primitivas comunes en lugares muy húmedos. No tienen tejidos vasculares (xilema, floema) ni producen semillas. La fase dominante es el gametofito (fase haploide que contiene gametos). El esporofito es dependiente del gametofito y produce esporas. Existen tres clases en la división Bryophyta: Hepaticopsida, Anthocerotopsida y Bryopsida.`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Hepaticopsida",
                  descripcion: `En la clase Hepaticopsida se clasifican las plantas conocidas como hepáticas. Su cuerpo se denomina talo y tiene forma de abanico. Tienen células con cuerpos oleosos que contienen aceites y sustancias aromáticas (ver figura 1).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Anthocerotopsida",
                  descripcion: `En esta clase están los antoceros que, por su forma, también se conocen como hepáticas con cuernos. Muchas especies de antoceros cuentan con cavidades mucilaginosas ocupadas por colonias de cianobacterias del género Nostoc (ver figura 2).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Bryopsida",
                  descripcion: `En Costa Rica, arriba de los 1700 m s. n. m., crece el musgo Sphagnum, propio de los pantanos de altura denominados turberas (ver figura 3).

                                El siguiente video resume las principales características de los musgos y las hepáticas, las briófitas más comunes.`,
                  imagen: [
                      {url:"", descripcion: ""}
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

                                La división Tracheophyta se separa en las clases: Lycopodiopsida, Psilotopsida, Equisetopsida, Polypodiopsida, Cycadopsida, Coniferopsida, Gingkopsida, Gnetopsida y Angiospermopsida.`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Lycopodiopsida",
                  descripcion: `Las pertenecientes a esta clase son plantas como los licopodios o los ciprecillos y las selaginelas. Por lo general, se les encuentra en zonas muy húmedas, especialmente arriba de los 1500 m s. n. m. En la imagen, se aprecian plantas de la especie Lycopodium clavatum con estróbilos (estructuras con forma de cono y que cuentan con hojas reproductivas que contienen esporas) (ver figura 4).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Psilotopsida",
                  descripcion: `En esta clase, se encuentra la grama de playa Psilotum nudum. Se puede observar en Cahuita, en la provincia de Limón. En los tallos, se observan protuberancias; cada una de ellas corresponde a la fusión de tres esporangios. Dentro de ellos, hay esporas alargadas. Estas plantas poseen un pequeño tallo subterráneo llamado rizoma (ver figura 5).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Equisetopsida",
                  descripcion: `Esta clase se integra por las colas de caballo, Equisetum. Se caracterizan por sus tallos ramificados de forma verticilada, con células de paredes gruesas y ricas en silicatos. Los estróbilos se encuentran en el extremo de las ramas fértiles (ver figura 6).

                                Las esporas de Equisetum cuentan con eláteres. Estas son estructuras alargadas que contribuyen a su dispersión por medio del viento (ver figura 7).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Polypodiopsida",
                  descripcion: `En esta oportunidad, se trata de helechos. En Costa Rica, existen más de 200 especies. Sus hojas se denominan frondas y, en su borde o envés, se encuentran agrupaciones de esporangios denominadas soros (ver figura 8).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Cycadopsida",
                  descripcion: `En esta clase, se encuentran las cicas y las zamias. Las plantas de este grupo cuentan con semillas carnosas cubiertas por conjuntos de hojas especializadas o conos. Se parecen a palmeras pequeñas, con hojas divididas y semillas grandes, por lo general, rojizas. Son dioicas, es decir, las plantas femeninas están separadas de las masculinas (ver figura 9).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Coniferopsida",
                  descripcion: `También se llaman gimnospermas o plantas con semillas desnudas. Son las coníferas, es decir, pinos, cipreses, araucarias. En algunos casos son dioicas, pero también, hay plantas monoicas (con los órganos masculinos y femeninos en un mismo individuo).

                                Las semillas están expuestas y se desarrollan en la superficie de escamas u hojas modificadas que forman un estróbilo. Los estróbilos se denominan conos o piñas (ver figura 10).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Cycadopsida",
                  descripcion: `No está representada en Costa Rica. Abundaba en la era Mesozoica (hace 248-65 millones de años). Únicamente sobrevive una especie: Gingko biloba, caracterizada por las hojas con forma de abanico y un corte en el medio (bilobadas) (ver figura 11).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Gnetopsida",
                  descripcion: `Plantas con semillas desnudas (no envueltas por un fruto). En Costa Rica, está solo Gnetum leyboldii, el bejuco de dosel. Esta es una trepadora que alcanza el dosel en bosques de zonas bajas y húmedas. Los estróbilos masculinos de las plantas de esta clase se encuentran agrupados, similares a las flores (ver figura 12).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Angiospermopsida",
                  descripcion: `Las angiospermas son plantas con flores y semillas contenidas en frutos verdaderos. En este grupo, los esporangios están agregados y asociados con hojas especializadas para formar las flores con estambres y carpelos.

                                Este es el grupo dominante del reino Plantae, ya que alrededor de 90% de las plantas existentes son angiospermas. Existen aproximadamente 260 000 especies de plantas con flores distribuidas en unas quinientas familias.

                                Las angiospermas se dividen en dos grupos, según el número de cotiledones (primeras hojas) que posee el embrión:
                                ◉ <strong>Monocotiledóneas.</strong> Embrión con un cotiledón. Las hojas casi siempre tienen venación paralela; las flores cuentan con piezas florales dispuestas en grupos de tres y no presentan crecimiento secundario. Además, en el tallo los haces vasculares, están ubicados de manera dispersa.
                                ◉ <strong>Dicotiledóneas.</strong> Embrión con dos cotiledones. Las hojas, por lo general, tienen nervaduras ramificadas. Las piezas florales están en grupos de cuatro o cinco (o sus múltiplos). En muchas especies, se da crecimiento secundario. En los tallos, la disposición de los haces vasculares forma un anillo, continuo o discontinuo.

                                Algunas de las familias de angiospermas con mayor número de especies son las siguientes:
                                ◉ <strong>Orchidaceae.</strong> Orquídeas (monocotiledóneas) como las guarias y la vainilla.
                                ◉ <strong>Poaceae.</strong> Monocotiledóneas con un fruto tipo cariopsis como el zacate, el bambú, la caña de azúcar, el maíz, el trigo y el arroz.
                                ◉ <strong>Asteraceae.</strong> Plantas dicotiledóneas con flores compuestas como la Santa Lucía, la manzanilla y la margarita.
                                ◉ <strong>Fabaceae.</strong> Dicotiledóneas con frutos que son una legumbre, como el frijol, el tamarindo, el árbol de Guanacaste, el poró, la dormilona y el malinche.

                                En el video 2, se resumen las principales diferencias entre monocotiledóneas y dicotiledóneas.`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                }
              ]
            },
            {
              id: "313", nombre: "Historia evolutiva",
              contenido: [
                {
                  subTitulo:"Historia evolutiva de las plantas",
                  descripcion: `Las primeras plantas aparecieron hace cientos de millones de años y tuvieron un origen acuático.`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Plantas de la era Paleozoica",
                  descripcion: `En la era Paleozoica (la primera del Eón Fanerozoico), aparecen algas de la clase Charophyceae; estas son los ancestros del Reino Plantae, al final del periodo Ordovícico y principios del periodo Silúrico (hace como 460 millones de años).

                                A finales del periodo Silúrico y a principios del periodo Devónico (420 millones de años), ya existían plantas de las clases Hepaticopsida, Anthocerotopsida, Bryopsida y Rhyniopsida (extinta). En estas primeras plantas, ya era posible observar anteridios (órganos reproductores masculinos); arquegonios (órganos reproductores femeninos), embriones, alternancia de generaciones, epidermis, esporangios y esporas.

                                En los comienzos del periodo Devónico (400 millones de años), ya estaban plantas de las clases Lycopodiopsida, Psilotopsida, Equisetopsida y Pteridopsida (Polypodiopsida). Todas estas tienen especies presentes hoy día. La generación dominante es el esporofito diploide. Cuentan con traqueidas, frondas y rizomas.

                                A mediados del Devónico, hace unos 380 millones de años, aparecieron plantas de las clases Aneurophytopsida y Archaeopteridopsida, ya extintas. Estas tenían tallos leñosos y se consideran precursores de las plantas con semillas (ver figura 13).

                                A finales del Devónico (hace 360 millones de años), surgen las plantas conocidas como “helechos con semillas del Paleozoico”, de las clases Lyginopteridopsida, Medullosopsida y Callistophytopsida. En estas plantas, se distinguían estructuras como semillas, glándulas secretoras y nucela (parte interna del primordio seminal) (ver figura 14).

                                En el periodo Carbonífero (hace unos 355 millones de años), se origina la selva húmeda y caliente. Aparecen representantes de las clases Cycadopsida y Coniferopsida. También, surge la clase Gingkopsida, con solo un representante vivo en la actualidad (la especie Gingko biloba). Ya se ven características como la cubierta seminal pétrea o carnosa y la movilización de las reservas alimenticias de las semillas.`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Plantas que aparecieron en la era Mesozoica",
                  descripcion: `En la era Mesozoica, a mediados del periodo Triásico (hace unos 230 millones de años), surgen las coníferas que son ancestros de los actuales pinos y cipreses. Hay presencia de conductos resiníferos y semillas ariladas o aladas.

                                También, aparecen los “helechos con semillas del Mesozoico”, pertenecientes a las clases Coristospermopsida, Peltaspermopsida y Glossopteridopsida, todos extintos.

                                A principios del periodo Jurásico (de 210 a 180 millones de años atrás), surgen clases como la Caytoniopsida, Pentoxylopsida y Bennetitopsida, todas extintas hoy. También, aparece la clase Gnetopsida. Al parecer, aquí emergen las primeras plantas con flores y caracteres como el nervio foliar longitudinal con muchos nervios secundarios, estructuras bisexuales rodeadas de hojas estériles e inserción de primordios seminales sobre un receptáculo.

                                Los primeros fósiles de la clase Angiospermopsida datan de principios del periodo Cretácico (hace unos 135 millones de años), antes del desarrollo de los mamíferos. En esta clase, surge el carpelo (ovario con primordios seminales, estilo y estigma), que dio origen a los frutos. En la actualidad, es la clase con más especies representadas en el planeta. Se cree que las primeras plantas angiospermas fueron acuáticas.`,
                  imagen: [
                      {url:"", descripcion: ""}
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
              texto: ``,
              imagen: [
                { url:"", descripcion: "" }
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
                  descripcion: `Muchas de las características de la vegetación de los biomas terrestres son adaptaciones que tienen relación con la forma en que las plantas obtienen, retienen y utilizan el agua y los minerales del sustrato donde crecen. Existen diversos tipos de biomas terrestres, como el boque tropical seco, el bosque tropical lluvioso, la sabana, el desierto, la taiga y la tundra.`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Bosque tropical seco",
                  descripcion: `Se encuentra en latitudes tropicales y se caracteriza por su clima cálido todo el año y su prolongada estación seca.

                                En la vegetación predominan los árboles deciduos que pierden las hojas en los meses más secos. Esta estrategia les permite conservar agua en época de escasez. Sus raíces son profundas, lo cual facilita la captación de agua subterránea.

                                Los claros de bosque formados por la caída de las hojas posibilitan el crecimiento de plantas de sotobosque. En las zonas de mayor humedad del bosque seco tropical, se observan plantas siempreverdes (ver figura 15).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Bosque tropical lluvioso",
                  descripcion: `Se encuentra en latitudes tropicales. El clima es cálido todo el año y la precipitación anual es muy elevada. En general, los suelos de este bioma tienen un contenido bajo en nutrientes.

                                Muchas plantas cuentan con hojas grandes que ofrecen una superficie amplia para captar la luz necesaria en la fotosíntesis. Además, por lo general, las hojas terminan en un extremo puntiagudo que permite que el exceso de agua escurra; de esta manera, se previene la formación de hongos.

                                En este bioma, hay una gran diversidad de plantas epífitas como lianas, bromelias y orquídeas, las cuales aprovechan la luz del dosel.

                                La corteza de los árboles del bosque tropical lluvioso suele ser delgada, pues debido a la elevada humedad, no corren el peligro de desecarse. Estas plantas suelen tener raíces de tipo gamba que sirven como contrafuerte (ver figura 16).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Sabana",
                  descripcion: `Las sabanas son regiones de clima tropical seco. Se caracterizan por la abundante presencia de pastos. Debido a la baja precipitación, los árboles son escasos y se encuentran dispersos; por lo general, cerca de las fuentes de agua. Poseen hojas coriáceas y corteza gruesa para resistir al fuego, ya que, en la época seca, suelen caer muchos rayos (ver figura 17).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Desierto",
                  descripcion: `Estos biomas se caracterizan por ser extensiones áridas e inhóspitas, con poca vida vegetal y animal debido a la baja precipitación. Existen desiertos cálidos y fríos. Los desiertos cálidos son muy calientes durante el verano y cálidos el resto del año. En los desiertos fríos, hay un largo invierno con temperaturas muy bajas (ver figura 18).

                                Muchas plantas de los desiertos cálidos, como los cactos, son capaces de almacenar agua en sus gruesos tallos protegidos por una cubierta cerosa. Además, tienen hojas modificadas en forma de espinas; de esta manera, evitan la desecación por transpiración y se protegen contra herbívoros.

                                Las raíces de las plantas de los desiertos en general son muy extensas, de manera que puedan absorber rápidamente el agua de las escasas precipitaciones. En muchos casos, las semillas pueden permanecer latentes por un largo periodo, hasta que absorban suficiente agua para germinar y desarrollarse (ver figura 19).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Taiga",
                  descripcion: `En la taiga, hay inviernos largos y muy fríos con días cortos; y, veranos húmedos, con días largos y frecuentes incendios. La elevada precipitación cae como nieve en el invierno y como lluvia en el verano. Los suelos son poco profundos, ácidos y escasos en nutrientes.

                                Las plantas dominantes son las coníferas como los pinos y los abetos. Estas plantas siempreverdes tienen hojas muy pequeñas con forma de aguja y una cubierta cerosa, para evitar la pérdida de agua por transpiración. El color oscuro de las hojas permite absorber la mayor cantidad de energía luminosa posible. La forma cónica de los árboles deja que la nieve se escurra (ver figura 20).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Tundra",
                  descripcion: `La tundra es el bioma más seco y con la más baja temperatura del planeta. Los días de verano son de 24 horas debido a la cercanía al Polo Norte.

                                La biodiversidad de la tundra es muy baja. Las plantas dominantes en este bioma son los musgos y pequeños arbustos. La poca altura de estos organismos contribuye a la resistencia contra el viento (ver figura 21).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                }
              ]
            },
            {
              id: "322", nombre: "Biomas acuáticos",
              contenido: [
                {
                  subTitulo:"Biomas acuáticos",
                  descripcion: `Los biomas acuáticos pueden ser de agua dulce o salada. Las plantas de estos ecosistemas tienen a su disposición abundantes agua y minerales; sin embargo, deben efectuar adaptaciones especiales para el intercambio de gases y mantener el equilibrio osmótico. Algunos biomas acuáticos son los lagos, las lagunas y los manglares.`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Lagos y lagunas",
                  descripcion: `Los lagos son extensos cuerpos de agua quieta, por lo general dulce, rodeados por tierra firme. Las lagunas son de menor tamaño. En sus orillas, se encuentran plantas ancladas en el sustrato, como la tifa (Typha sp.) y plantas flotantes como las del género Wolffia y el lirio o jacinto de agua, Eichhornia crassipes. Estas plantas habitan cerca de la superficie, con el fin de captar luz para la fotosíntesis.

                                La mayoría de las plantas acuáticas son angiospermas, aunque también hay representantes de otros grupos, como el helecho acuático del género Azolla (ver figura 22).

                                Las plantas con hojas que permanecen sumergidas tienen hojas muy delgadas, lo cual facilita el intercambio gaseoso en el medio acuático. Asimismo, son capaces de captar luz de baja intensidad.

                                Las raíces, los tallos y las hojas de las plantas acuáticas poseen un aerénquima bien desarrollado. Los grandes espacios llenos de aire de este tejido permiten la flotación. En ciertas especies, en los sustratos bajos en oxígeno, este gas se difunde de las hojas hasta las raíces vía aerénquima; asimismo, el dióxido de carbono de las raíces puede pasar a través del aerénquima a las hojas, el cual se aprovecha en la fotosíntesis (ver figura 23).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Manglares",
                  descripcion: `Los manglares son biomas de aguas salobres o saladas, propios de regiones tropicales y subtropicales.

                                Se observan en las costas, en los estuarios, en las desembocaduras de ríos y en las marismas, entre otros.

                                Se caracterizan por la presencia de árboles de mangle. Estos son tolerantes al agua salada, gracias a la presencia de un sistema de filtración de sales que le permite secretar el exceso de sal a través de glándulas localizadas en las hojas (ver figura 24).

                                Otra de las adaptaciones de los árboles de los manglares son las raíces fúlcreas y neumatóforos que posibilitan la sobrevivencia en suelos anegados, bajos en oxígeno (ver figura 25).`,
                  imagen: [
                      {url:"", descripcion: ""}
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
              texto: ``,
              imagen: [
                { url:"", descripcion: "" }
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
                  descripcion: `La sucesión ecológica es un proceso que ocurre en la naturaleza y en el que se producen cambios secuenciales en las comunidades biológicas. Por ejemplo, cuando sucede una alteración en la naturaleza, como un incendio forestal, se establecen, primero, unas especies y estas, luego, son sustituidas por otras. Estas transformaciones son predecibles y se dan de manera relativamente ordenada. Hay dos tipos de sucesiones: primaria y secundaria.`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Sucesión primaria",
                  descripcion: `La sucesión primaria ocurre en sitios baldíos donde no hay vida como resultado de la formación de un nuevo terreno, la exposición de roca nueva o el arrasamiento provocado por la lava de una erupción volcánica.

                                La sucesión primaria inicia con el establecimiento de especies pioneras como líquenes y musgos. Estos cambian las características físicoquímicas del sustrato. Posteriormente, aparacen plantas de pequeño tamaño, como pastos, arbustos; y, luego, árboles, hasta culminar en una comunidad clímax dominada por ciertas especies. El equilibrio que caracteriza la comunidad clímax puede ser alterado por factores climáticos, ecológicos y evolutivos (ver figura 26 y 27).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                },
                {
                  subTitulo:"Sucesión secundaria",
                  descripcion: `La sucesión secundaria pasa, con mayor frecuencia, en la naturaleza. Ocurre en sitios donde existía previamente una comunidad biológica, la cual fue afectada por alteraciones como la deforestación o el fuego. En este caso, pueden permanecer, en el terreno, nutrientes, materia orgánica, semillas y ciertos organismos, por eso, las plantas pueden colonizar el lugar más rápidamente. Por tanto, los cambios en las etapas tempranas de la sucesión secundaria se producen relativamente rápido. (ver figura 28).`,
                  imagen: [
                      {url:"", descripcion: ""}
                  ]
                }
              ]
            },
            {
              id: "332", nombre: "Restauración",
              contenido: [
                {
                  subTitulo:"Restauración de ambientes degradados",
                  descripcion: `Los profesionales en manejo de recursos naturales, con frecuencia, deben darse a la tarea de restaurar los ambientes que han sido explotados de manera no sostenible. La restauración de ambientes degradados tiene por objetivo mitigar y revertir los daños producidos por el ser humano en los ecosistemas, con el fin de restablecer las características de los hábitats naturales.

                                Una estrategia para restaurar ambientes degradados es fomentar la sucesión ecológica mediante la regeneración natural. El proceso de regeneración natural es cuando, en un terreno, aparecen distintas plantas (de semillas que estaban en el sitio) sin intervención del ser humano.

                                Un hábitat degradado puede recuperarse por sí solo cuando no hay obstáculos que impiden que se regenere. No obstante, cuando la degradación es muy alta, los mecanismos de regeneración pueden verse afectados. En este caso, el ser humano debe intervenir para eliminar los factores que obstaculizan la regeneración natural. Uno de esos factores es la presencia de especies no nativas o invasoras.

                                Entonces, primero, es necesario eliminar o controlar las especies no nativas o invasoras. Seguidamente, se debe cultivar plantas nativas propias del lugar, así como procurar que el sitio esté conectado con otros parches de hábitat natural.

                                Las personas que disfrutan de un jardín o un patio pueden contribuir a restaurar el ambiente de su comunidad también al “imitar” la naturaleza. Así, al mantener las plantas nativas que naturalmente crecerían en el sitio, proveen alimento y refugio a polinizadores y otros animales silvestres. El aprovechamiento de los restos de estas plantas para fabricar compost también beneficia el suelo al aportarle materia orgánica (ver figura 29).`,
                  imagen: [
                      {url:"", descripcion: ""}
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
