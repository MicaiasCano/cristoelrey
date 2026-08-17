// Base de datos de recetas / iglesias
const recipes = [
  {
    recipe: "MONTE CASTRO",
    image: "img/Monte Castro.jpg",
    description: "Marcos Sastre 5062<br>Bº Montecastro<br>C.A.B.A.<br>Prov. Buenos Aires. Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, S&aacute;bado:<br>19.00hs<br>Domingo:<br>9.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Alfredo Narvaez",
    link: "https://maps.app.goo.gl/8o6NPLMM4PMuAkdA7",
  },
  {
    recipe: "ADONAI",
    image: "./img/filial Adonai.jpg",
    description: "Cazon 6675<br>(e/ Chopin y Chasaing)<br>Gregorio de Laferrere<br>Prov. Buenos Aires. Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles, Viernes:<br>19.00hs<br>Domingo:<br>18.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Ernesto Villan",
    link: "https://maps.app.goo.gl/8o6NPLMM4PMuAkdA7",
  },{
    recipe: "Km 28",
    image: "img/Logo_Corona_Argentina_Dorada.png",
    description: "Calle del Tejar 2360<br>Bº 17 De Octubre<br>Rafael Castillo<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles, Sabado: 19.00hs<br>Domingo: 18.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Rodolfo Herrera",
    link: "https://www.google.com/maps/place/Del+Tejar+2360,+B1755+Rafael+Castillo,+Provincia+de+Buenos+Aires/@-34.7317471,-58.6502659,15z/data=!3m1!4b1!4m10!1m2!2m1!1sCalle+del+Tejar+2360,++Barrio+17+De+Octubre,+Rafael+Castillo!3m6!1s0x95bcc41cfec9419f:0x9e091d5082c630d3!8m2!3d-34.7317485!4d-58.6318119!15sCjxDYWxsZSBkZWwgVGVqYXIgMjM2MCwgIEJhcnJpbyAxNyBEZSBPY3R1YnJlLCBSYWZhZWwgQ2FzdGlsbG-SARFjb21wb3VuZF9idWlsZGluZ-ABAA!16s%2Fg%2F11lfl4516m?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D",
  },
  {
    recipe: "ORO VERDE",
    image: "img/Logo_Corona_Argentina_Dorada.png",
    description: "Puentecito 3132<br>Ruta Nac. Nº 3. Km 36<br>Gonzalez Catan<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles, Jueves y Sabado: 20.00hs<br>Domingo: 10.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Hugo Roldan",
    link: "https://www.google.com/maps/place/Puentecito+3130,+B1763FIJ+Virrey+del+Pino,+Provincia+de+Buenos+Aires/@-34.8144178,-58.6469213,19z/data=!3m1!4b1!4m6!3m5!1s0x95bcdcaa995ff03d:0xd86ef53e7ec74f49!8m2!3d-34.8144178!4d-58.6462776!16s%2Fg%2F11f3vqv3v5?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    recipe: "ISIDRO CASANOVA",
    image: "img/Logo_Corona_Argentina_Dorada.png",
    description: "Pujol 3563<br>Ruta Nac. Nº 3. Km 21<br>Isidro Casanova<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles, Viernes, Sabado: 20.00hs<br>Domingo: 19.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Mario Guerrero",
    link: "https://www.google.com/maps/place/EMR,+Pujol+3564,+B1754+San+Justo,+Provincia+de+Buenos+Aires/@-34.7013601,-58.5784579,19z/data=!3m1!4b1!4m6!3m5!1s0x95bcc66d28db20c5:0x262f2298d16cdb11!8m2!3d-34.7013601!4d-58.5778142!16s%2Fg%2F11q2stf6rd?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
  },
  {
    recipe: "BARRIO LA LOMA",
    image: "img/Logo_Corona_Argentina_Dorada.png",
    description: "Recuero 6693<br>(e/ M. Paz y Varela)<br>Gregorio de Laferrere<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, Sabado: 19.30hs<br><br><b>Enc. de Obra:</b><br>Pastor Mariano Villalba",
    link: "https://www.google.com/maps/place/Recuero+6690,+B1757DQV+Gregorio+de+Laferrere,+Provincia+de+Buenos+Aires/@-34.7610418,-58.5901952,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcc508b3819ebf:0xa63d1667663f009a!8m2!3d-34.7610418!4d-58.5876203!16s%2Fg%2F11mxb319th?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
  },
  {
    recipe: "LA ROCA SAGRADA ES CRISTO",
    image: "img/Logo_Corona_Argentina_Dorada.png",
    description: "Marconi 6555<br>(esq. El Lazo)<br>Isidro Casanova<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles, Sabado: 20.00hs<br>Domingo: 18.00hs<br>Cena del Se&ntilde;or: 10.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Daniel Carrizo",
    link: "https://www.google.com/maps/place/Guillermo+Marconi+6555,+B1765LHA+Isidro+Casanova,+Provincia+de+Buenos+Aires/@-34.7319368,-58.5689928,19z/data=!3m1!4b1!4m6!3m5!1s0x95bcc592ddc55a73:0x37eea8d5a70a81ca!8m2!3d-34.7319368!4d-58.5683491!16s%2Fg%2F11gmz4h44f?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    recipe: "SAN JOSE OESTE",
    image: "img/Logo_Corona_Argentina_Dorada.png",
    description: "Pj. San Jose Oeste<br>Prov. Santiago del Estero<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles: 18.00hs<br>Domingo: 10.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Jesus Corvalan",
    link: "https://maps.app.goo.gl/BC38UQTZMQEsKdSY7",
  },
  {
    recipe: "QUITILIPI",
    image: "img/Logo_Corona_Argentina_Dorada.png",
    description: "Irigoyen 1700<br>fte. al Bº Nueva Esperanza<br>Prov. Chaco<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles, Sabado: 19.30hs<br>Domingos: 8.30hs<br><br><b>Enc. de Obra:</b><br>Pastor Domingo Lugo",
    link: "https://www.google.com/maps/place/La+predicadora+FM+106.7+MHz./@-26.8606128,-60.2276313,17z/data=!4m6!3m5!1s0x9446c9238d2b3775:0x3c8501eaec871a62!8m2!3d-26.860226!4d-60.2272937!16s%2Fg%2F11kfbx9q1b?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
  },
  {
    recipe: "LA CUMBRE DEL CALVARIO",
    image: "img/Logo_Corona_Argentina_Dorada.png",
    description: "Raulies 2815<br>Rafael Castillo<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles: 19.30hs<br>Sabado: 19.00hs<br>Domingo: 9.30hs<br><br><b>Enc. de Obra:</b><br>Pastor Jose Villalba",
    link: "https://www.google.com/maps/place/Raulies+2815,+B1755+Rafael+Castillo,+Provincia+de+Buenos+Aires/@-34.7347075,-58.6261529,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcc41901ac2183:0x96433100a550167!8m2!3d-34.7347075!4d-58.6261529?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
  },
  /* ===============================
  filial MONTECASTRO. Anexos
  =================================== */  
  {
    recipe: "LOMA HERMOSA",
    image: "img/Logo_Corona_Argentina.png",
    description: "Dr. Miguel Rosella 10009<br>Bº El Libertador<br>Pdo. 3 de Febrero<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles, Sabado: 19.00hs<br>Domingo: 18.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Abel Narvaez",
    link: "https://www.google.com/maps/place/Dr.+Miguel+Rosella+9999,+B1657+El+Libertador,+Provincia+de+Buenos+Aires/@-34.5580264,-58.6134464,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcbbd0ae1055f7:0xa12b375add8e3e8!8m2!3d-34.5580264!4d-58.6108715!16s%2Fg%2F11p5ttz7y3?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "JOSE C. PAZ",
    image: "img/Logo_Corona_Argentina.png",
    description: "18 de Octubre 2650<br>Jose C. Paz<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, Sabado: 19.00hs<br>Domingo: 18.00hs<br><br><b>Enc. de Obra:</b><br>Evangelista Angel Narvaez",
    link: "https://www.google.com/maps/place/Iglesia+Evang%C3%A9lica+Pentecostal+Cristo+El+Rey+(+Fichero+de+culto+1994)+Anexo+Jos%C3%A9+C+Paz./@-34.5173361,-58.7667871,17z/data=!3m1!4b1!4m6!3m5!1s0x95bc99ec3887f2d7:0x90ef9434f61a4022!8m2!3d-34.5173361!4d-58.7667871!16s%2Fg%2F11kk49c_4p?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "TINOGASTA",
    image: "img/Logo_Corona_Argentina.png",
    description: "Tinogasta 1656<br>Gregorio de Lafarrere<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves: 19.00hs<br>Domingo: 18.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Raul Augier",
    link: "https://www.google.com/maps/place/Tinogasta+1656,+B1757HMA+Gregorio+de+Laferrere,+Provincia+de+Buenos+Aires/@-34.7253665,-58.5922537,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcc5d06c1a4fcb:0x306c69d24ed4d45d!8m2!3d-34.7253665!4d-58.5896788!16s%2Fg%2F11rwkytv19?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "SAN PETERSBURGO",
    image: "img/Logo_Corona_Argentina.png",
    description: "Calle Adolfo Berro (bis)<br>(e/Jose Ignacio Rucci y Colonia)<br>Isidro Casanova<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles: 19.00hs<br>Sabado: 18.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Raul Augier",
    link: "https://www.google.com/maps/place/34%C2%B042'29.2%22S+58%C2%B034'01.6%22W/@-34.708108,-58.569691,16z/data=!4m4!3m3!8m2!3d-34.7081111!4d-58.5671111?hl=es&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "FRANCISCO ALVAREZ",
    image: "img/Logo_Corona_Argentina.png",
    description: "Juana de Ibarbourou 1105<br>Francisco Alvarez<br>Pdo. Moreno<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Mi&eacute;rcoles, Viernes: 19.30hs<br>Sabado (Esc. Biblica): 10.30hs<br><br><b>Enc. de Obra:</b><br>Evangelista Angel Narvaez",
    link: "https://www.google.com/maps/place/34%C2%B035'26.0%22S+58%C2%B052'42.3%22W/@-34.59055,-58.878424,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-34.59055!4d-58.878424?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "MORENO",
    image: "img/Logo_Corona_Argentina.png",
    description: "Moron 1792<br>Moreno<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Lunes y Jueves<br>19.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Abel Narvaez",
    link: "https://maps.app.goo.gl/VgzFEgiJ9ASdh5xv8"
  },
  {
    recipe: "LA BUENA SEMILLA",
    image: "img/Logo_Corona_Argentina.png",
    description: "Eduardo Sivori 1273<br>Bº Libertad<br>Merlo<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves,<br>Sadado: 19.00hs<br>Domingo:9.00hs<br><br><b>Enc. de Obra:</b><br>Diacono Pablo Grizzia",
    link: "https://www.google.com/maps/place/Eduardo+Sivori+1273,+B1716+Libertad,+Provincia+de+Buenos+Aires/@-34.69888,-58.6770492,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcc0e22a9b1d2b:0x1bccc658511c80a2!8m2!3d-34.69888!4d-58.6744743!16s%2Fg%2F11pyjcwypl?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "LOMAS DE ZAMORA",
    image: "img/Logo_Corona_Argentina.png",
    description: "Fallieres 2176<br>(e/Recondo y Necol)<br>Villa Fiorito<br>Loma de Zamora<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles, Viernes<br>y Sabado: 19.00hs<br><br><b>Enc. de Obra:</b><br>Evangelista Marcelo Fiamingo",
    link: "https://www.google.com/maps/place/Fallieres+2176,+B1821FAR+Villa+Fiorito,+Provincia+de+Buenos+Aires/@-34.7135696,-58.4513352,17z/data=!4m5!3m4!1s0x95bccc32719a72ad:0xd55017354a0f0d3b!8m2!3d-34.7135696!4d-58.4513352?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "FH",
    image: "img/Logo_Corona_Argentina.png",
    description: "Av. Patricios 9520<br>Pontevedra<br>Merlo<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles: 18.00hs<br>Viernes: 19.00hs<br>Domingo: 9.00hs<br><br><b>Enc. de Obra:</b><br>Presbitero Ramon Arce",
    link: "https://www.google.com/maps/place/Av.+Patricios+9520,+B1761FRW+Pontevedra,+Provincia+de+Buenos+Aires/@-34.7266008,-58.7320592,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcc1d0940abb73:0xa33aea6142c00b06!8m2!3d-34.7266008!4d-58.7294843?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "MARCOS PAZ",
    image: "img/Logo_Corona_Argentina.png",
    description: "Espa&ntilde;a 3189<br>(esq. Bordoni)<br>Marcos Paz<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Lunes, Jueves,<br>Sabado: 19.00hs<br><br><b>Enc. de Obra:</b><br>Presbitero Ramon Arce",
    link: "https://www.google.com/maps/place/Espa%C3%B1a+3189,+B1727JGM+Marcos+Paz,+Provincia+de+Buenos+Aires/@-34.7971388,-58.8440451,17z/data=!3m1!4b1!4m6!3m5!1s0x95bceea5697cad61:0xc60699b391ef7635!8m2!3d-34.7971388!4d-58.8414702!16s%2Fg%2F11p42q6dnj?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "KM 26,700",
    image: "img/Logo_Corona_Argentina.png",
    description: "Rodney 4550<br>Ruta Nac. Nº 3. Km 26<br>Gregorio de Laferrere<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles, Sabado: 19.00hs<br><br><b>Enc. de Obra:</b><br>Diacono Javier Soberon",
    link: "https://www.google.com/maps/place/Rodney+4550,+B1757DCT+Gregorio+de+Laferrere,+Provincia+de+Buenos+Aires/@-34.7409393,-58.6095934,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcc43615dbaf8b:0x73c3798cdc11b0ad!8m2!3d-34.7409393!4d-58.6070185!16s%2Fg%2F11gmz758fx?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "GIARDINO",
    image: "img/Logo_Corona_Argentina.png",
    description: "Risso Patrón 5587<br>Gregorio de Laferrere<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, Sabado: 19.30hs<br><br><b>Enc. de Obra:</b><br>Evangelista Alejandro Sotelo",
    link: "https://www.google.com/maps/place/Risso+Patr%C3%B3n+5587,+B1757DLS+Gregorio+de+Laferrere,+Provincia+de+Buenos+Aires/@-34.7496015,-58.5995232,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcc5b2a830b1bf:0xb5f6e6d4dcad927b!8m2!3d-34.7496015!4d-58.5995232!16s%2Fg%2F11s9k69f34?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "SARANDÍ",
    image: "img/Logo_Corona_Argentina.png",
    description: "Gral. Deheza 1419<br>(e/Los Pozos y Cnel. Casacuberta)<br>Sarand&iacute; - Avellaneda<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, S&aacute;bado: 20.00hs<br><br><b>Enc. de Obra:</b><br>Hermano Julio Pinto",
    link: "https://www.google.com/maps/place/Gral.+Deheza+1419,+B1872DNC+Sarand%C3%AD,+Provincia+de+Buenos+Aires/@-34.69872,-58.3565043,17z/data=!3m1!4b1!4m6!3m5!1s0x95a332dcae08787b:0x6c8d8837413b9e0!8m2!3d-34.69872!4d-58.3539294!16s%2Fg%2F11hb84d_j3?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "CAÑUELAS",
    image: "img/Logo_Corona_Argentina.png",
    description: "R. Berrueta 749<br>Bº La Union<br>Ca&ntilde;uelas<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles, Viernes: 19.30hs<br>Domingo: 17.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Raimundo Kwas",
    link: "https://www.google.com/maps/place/R.+Berrueta+749,+B1814BGC+Ca%C3%B1uelas,+Provincia+de+Buenos+Aires/@-35.064865,-58.7493133,17z/data=!3m1!4b1!4m6!3m5!1s0x95bd1f5c9ac3a607:0x9c60af08c579ca4c!8m2!3d-35.064865!4d-58.7467384!16s%2Fg%2F11vl9jsp32?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "9 DE JULIO",
    image: "img/Logo_Corona_Argentina.png",
    description: "Av. Mitre 2578<br>(e/ J.V.Gonzalez y Roca)<br>9 de Julio<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves: 19.30hs<br>Domingo: 10.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Jorge Fredes",
    link: "https://www.google.com/maps/place/Av.+Bartolom%C3%A9+Mitre+2578,+B6500+9+de+julio,+Provincia+de+Buenos+Aires/@-34.6756011,-58.351176,17z/data=!3m1!4b1!4m6!3m5!1s0x95a33317d7218cdb:0xc69604047f9ccf32!8m2!3d-34.6756011!4d-58.3486011!16s%2Fg%2F11v0t4zl5w?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "PUNTA ALTA",
    image: "img/Logo_Corona_Argentina.png",
    description: "Mendoza 550<br>Bahia Blanca<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes y Jueves: 20.00hs<br>S&aacute;bados: 19.30hs<br>Domingo: 9.30hs<br><br><b>Enc. de Obra:</b><br>Evangelista Gustavo Fernandez",
    link: "https://maps.app.goo.gl/GTvoXBkYjZzScqy18"
  }, 
  {
    recipe: "BAHIA BLANCA",
    image: "img/Logo_Corona_Argentina.png",
    description: "Esmeralda y Santa Fe<br>Bahia Blanca<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, Sabado: 19.30hs<br>Domingo: 19.00hs<br><br><b>Enc. de Obra:</b><br>Presbitero Jose Velasquez",
    link: "https://www.google.com/maps/place/Santa+Fe+%26+Esmeralda,+B8001+Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.7478249,-62.263445,15z/data=!3m1!4b1!4m6!3m5!1s0x95eda2dc7801f92d:0x8a91904fd7395925!8m2!3d-38.7478264!4d-62.2449911!16s%2Fg%2F11h9rnqjm4?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "ESQUEL",
    image: "img/Logo_Corona_Argentina.png",
    description: "Chacabuco 1121<br>(e/ Av. Fontana y Sarmiento)<br>Prov. Chubut<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Viernes: 20.00hs<br>Sabado: 19.00hs<br><br><b>Enc. de Obra:</b><br>Presbitero Ezequiel Jampi",
    link: "https://www.google.com/maps/place/Iglesia+Evangelica+Pentecostal+Cristo+el+Rey+anexo+Esquel/@-42.9157498,-71.3160322,19.04z/data=!4m14!1m7!3m6!1s0x961dac3cb839c44d:0xa50e5d842b2bc092!2sChacabuco+1121,+U9200+Esquel,+Chubut!3b1!8m2!3d-42.9159041!4d-71.3158905!3m5!1s0x961dad001ea027f3:0xf035f1fc78bd79c2!8m2!3d-42.9157669!4d-71.3159017!16s%2Fg%2F11lvv6ftdn?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "BARILOCHE",
    image: "img/Logo_Corona_Argentina.png",
    description: "Cacique Prafil 4939<br>(esq. Emilio Espinosa)<br>Bº 2 de Abril<br>Prov. Rio Negro<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles: 19.00hs<br>Viernes: 20.00hs<br>Domingo: 19.00hs<br><br><b>Enc. de Obra:</b><br>Presbitero Ezequiel Jampi",
    link: "https://www.google.com/maps/place/Juan+Baldini,+R8400+San+Carlos+de+Bariloche,+R%C3%ADo+Negro/@-41.1706805,-71.3401036,17z/data=!3m1!4b1!4m6!3m5!1s0x961a652b1c6f110f:0xb72191a5152e39ab!8m2!3d-41.1706805!4d-71.3375287!16s%2Fg%2F11h7kpfx0_?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D315!16s%2Fg%2F11fjz5_mmc?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "GRAL. ROCA",
    image: "img/Logo_Corona_Argentina.png",
    description: "Almirante Brown 4468<br>e/ Rosario de Santa Fe<br>y Saavedra. Bº Nuevo<br>Prov. Rio Negro<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles, Sabado: 20.00hs<br>Domingo: 10.00hs<br><br><b>Enc. de Obra:</b><br>Presbitero Mario Bravo",
    link: "https://www.google.com/maps/place/38%C2%B059'43.8%22S+67%C2%B035'14.8%22W/@-38.9954851,-67.5900098,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-38.9954851!4d-67.5874349?hl=es&entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "SALTA",
    image: "img/Logo_Corona_Argentina.png",
    description: "Mendoza 3205<br>Bº San Silvestre<br>Manzana 22 - Lote 8<br>Salta Capital - Prov. Salta<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, Sabado: 19.00hs<br>Domingo: 9.00hs<br><br><b>Enc. de Obra:</b><br>Presbitero Hugo Oyola",
    link: "https://www.google.com/maps/place/Mendoza+3205,+A4400+Salta/@-24.7878569,-65.4487792,17z/data=!3m1!4b1!4m5!3m4!1s0x941bc246d30772db:0xaa4bfa487470b9b8!8m2!3d-24.7878569!4d-65.4462043?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "TUCUMAN",
    image: "img/Logo_Corona_Argentina.png",
    description: "Batalla de Suipacha 2218<br>San Miguel de Tucuman<br>Prov. Tucuman<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles, Sabado,<br>Domingo: 19.30hs<br><br><b>Enc. de Obra:</b><br>Evangelista Miguel Angel Samorano",
    link: "https://www.google.com/maps/place/Batalla+de+Suipacha+2218,+T4001+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n/@-26.7986083,-65.2124566,17z/data=!3m1!4b1!4m6!3m5!1s0x94225dcb6d045b5d:0xaba884c3b73565a8!8m2!3d-26.7986083!4d-65.2098817!16s%2Fg%2F11fvr20fmt?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "PARANA",
    image: "img/Logo_Corona_Argentina.png",
    description: "Av. Ramirez 732<br>Cdad. Parana<br>Prov. Entre Rios<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles, Sabado,<br>Domingo: 19.30hs<br><br><b>Enc. de Obra:</b><br>Pastor Daniel Cejas",
    link: "https://www.google.com/maps/place/Av.+Francisco+Ram%C3%ADrez+732,+E3100+Paran%C3%A1,+Entre+R%C3%ADos/@-31.7222569,-60.5166284,17z/data=!3m1!4b1!4m6!3m5!1s0x95b452729fcb3a7b:0x61dfd54757ee7820!8m2!3d-31.7222569!4d-60.5140535!16s%2Fg%2F11lmqbc8jh?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "CONSCRIPTO BERNARDI",
    image: "img/Logo_Corona_Argentina.png",
    description: "Mendoza y 9 de Julio<br>Cdad. Crespo<br>Prov. Entre Rios<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Sabado: 18.00hs<br>Domingo: 10.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Vega",
    link: "https://www.google.com/maps/place/Mendoza+%26+9+de+Julio,+E3116+Crespo,+Entre+R%C3%ADos/@-32.0227254,-60.3056791,17z/data=!3m1!4b1!4m6!3m5!1s0x95b42358718add79:0x47988e67ff155873!8m2!3d-32.0227254!4d-60.3031042!16s%2Fg%2F11gdpvn3k9?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "SAUCE de LUNA",
    image: "img/Logo_Corona_Argentina.png",
    description: "Gobernador Racedo<br>Dpto. Sauce de Luna<br>Prov. Entre Rios<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Sabado: 18.00hs<br>Domingo: 10.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Vega",
    link: "https://www.google.com/maps/place/E3100+Gdor.+Racedo,+Entre+R%C3%ADos/@-31.586566,-60.1340386,13z/data=!3m1!4b1!4m6!3m5!1s0x95b465aae87d4b4f:0x286f8011d53549ce!8m2!3d-31.5865877!4d-60.0602181!16s%2Fg%2F1td1wmks?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "POSADAS",
    image: "img/Logo_Corona_Argentina.png",
    description: "Rta. Nac. Nº12 6725<br>Cdad. Posadas<br>Prov. Misiones<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves,<br>Sabado: 19.00hs<br>Domingo: 18.30hs<br><br><b>Enc. de Obra:</b><br>Evangelista Ivan Caneva",
    link: "https://www.google.com/maps/place/RN12/@-29.1775469,-58.8590571,17z/data=!3m1!4b1!4m6!3m5!1s0x95b127b91b639589:0x19f72c946f4a4390!8m2!3d-29.1775469!4d-58.8564822!16s%2Fm%2F02q067p?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "CAPITAN MIRANDA",
    image: "img/Logo_Corona_Paraguay.png",
    description: "Ucrania y Capitan Miranda<br>Dpto. Itapu&aacute;<br>fraccionamiento Lopoja<br>Manzana 15<br>Paraguay<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes y Jueves: 19.30hs<br>Sabado: 19.00hs<br>Domingo: 9.00hs<br><br><b>Enc. de Obra:</b><br>Presbitero Esteban Narvaez",
    link: "https://www.google.com/maps/place/27%C2%B014'12.9%22S+55%C2%B048'10.4%22W/@-27.236914,-55.8054709,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-27.236914!4d-55.802896?hl=es&entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "CAÑETE",
    image: "img/Logo_Corona_Chile.png",
    description: "Estero El Carmen s/n<br>Poblacion La Esperanza<br>Region Bio Bio<br>Comuna Ca&ntilde;ete<br>Chile<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes y Jueves: 20.00hs<br>Sabados: 19.00hs<br>Domingo: 11.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Rodrigo Palma",
    link: "https://www.google.com/maps/place/Iglesia+Evang%C3%A9lica+Pentecostal+Cristo+el+Rey/@-37.7977007,-73.3890128,17z/data=!3m1!4b1!4m6!3m5!1s0x966a0bafe3b33e07:0x4561df879a4ca5d9!8m2!3d-37.7977007!4d-73.3890128!16s%2Fg%2F11sb79p7xl?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "EBEN-EZER",
    image: "img/Logo_Corona_Argentina.png",
    description: "Pedro M. Obligado 1115<br>Isidro Casanova<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Sabado: 19.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Sergio Flores",
    link: "https://www.google.com/maps/place/Pedro+M.+Obligado+1115,+B1765CIW+Isidro+Casanova,+Provincia+de+Buenos+Aires/@-34.7326002,-58.5759077,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcc594cec98815:0xb2c95c2043dbbb3e!8m2!3d-34.7326002!4d-58.5733328!16s%2Fg%2F11p5ttx7h8?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "EBEN-EZER",
    image: "img/Logo_Corona_Argentina.png",
    description: "Ruiz de los Llanos 430<br>Isidro Casanova<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles: 19.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Sergio Flores",
    link: "https://www.google.com/maps/place/Ruiz+de+los+Llanos+430,+B1765BRJ+Isidro+Casanova,+Provincia+de+Buenos+Aires/@-34.724258,-58.5771589,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcc5e8591b1ab3:0x897bb18f21131a1d!8m2!3d-34.724258!4d-58.574584!16s%2Fg%2F11w24dmv6l?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "DIOS PELEARÁ POR NOSOTROS",
    image: "img/Logo_Corona_Argentina.png",
    description: "Calle Pedernera<br>(e/Ardiles y Domingo F. Sarmiento)<br>Cdad. de Justo Daract<br>Prov. San Luis<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles y Sabado: 19.00hs<br><br><b>Enc. de Obra:</b><br>Hermano Sebastian",
    link: "https://www.google.com/maps/place/33%C2%B051'26.2%22S+65%C2%B011'09.5%22W/@-33.8573081,-65.1859587,17z/data=!4m4!3m3!8m2!3d-33.857286!4d-65.185972?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "KM 17 RTA. 13",
    image: "img/Logo_Corona_Argentina.png",
    description: "km17 - Rta. 13<br>El Soberbio<br>Prov. Misiones<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Jueves y Sabado: 18.30hs<br><br><b>Enc. de Obra:</b><br>Diacono Marcos Moretti",
    link: "https://www.google.com/maps/place/Iglesia+evangelica+Cristo+El+Rey/@-27.2229539,-54.3185057,17z/data=!3m1!4b1!4m6!3m5!1s0x94f99d003af94f07:0x792311db0be292d4!8m2!3d-27.2229539!4d-54.3185057!16s%2Fg%2F11x88z_7pp?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "COLONIA EL CEIBO",
    image: "img/Logo_Corona_Argentina.png",
    description: "km18 - Rta. 15<br>El Soberbio<br>Prov. Misiones<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles y Sabado: 18.30hs<br><br><b>Enc. de Obra:</b><br>Evangelista Juan Carlos Schimelfenig",
    link: "https://www.google.com/maps/place/27%C2%B008'11.4%22S+54%C2%B009'39.9%22W/@-27.1364928,-54.1636443,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-27.1364928!4d-54.1610694?hl=es&entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "COLONIA CHAFARIZ",
    image: "img/Logo_Corona_Argentina.png",
    description: "km29 Rta. 13<br>San Vicente<br>Prov. Misiones<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>#<br><br><b>Enc. de Obra:</b><br>Presbitero Julio Quadro",
    link: "#"
  },
  {
    recipe: "BARRIO UNIDO",
    image: "img/Logo_Corona_Argentina.png",
    description: "km49 Rta. 13<br>San Vicente<br>Prov. Misiones<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>#<br><br><b>Enc. de Obra:</b><br>Presbitero Daniel Dos Santos",
    link: "#"
  },
  {
    recipe: "COLONIA MOJON GRANDE",
    image: "img/Logo_Corona_Argentina.png",
    description: "km42 Rta. 13<br>San Vicente<br>Prov. Misiones<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>#<br><br><b>Enc. de Obra:</b><br>Presbitero Daniel Dos Santos",
    link: "#"
  }, 
  {
    recipe: "TALAGANTE",
    image: "img/Logo_Corona_Chile.png",
    description: "Santa Berta 350<br>Talagante<br>Region Metropolitana<br>Chile<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves: 20.00hs<br>Domingo: 18.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Jonathan Jofre",
    link: "https://www.google.com/maps/place/Sta.+Berta+350,+Talagante,+Regi%C3%B3n+Metropolitana,+Chile/@-33.6584232,-70.947572,15z/data=!3m1!4b1!4m6!3m5!1s0x9662e3ca3cbe64f7:0x6ac27ed238b49b6d!8m2!3d-33.6584246!4d-70.929118!16s%2Fg%2F11kq8f8s3g?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D"
  },
  /* ===============================
  filial ADONAI. Anexos
  =================================== */  
  {
    recipe: "CORONEL RAMOS",
    image: "img/Logo_Corona_Argentina.png",
    description: "La Bastilla y Coronel Ramos<br>Gregorio de Laferrere<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, Sabado: 19.30hs<br><br><b>Enc. de Obra:</b><br>Presbitero Dario Yegros",
    link: "https://www.google.com/maps/place/La+Bastilla,+Provincia+de+Buenos+Aires/@-34.7431427,-58.6311597,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcc417005bc7b5:0x9bfcacde570ddafd!8m2!3d-34.7431427!4d-58.6285848!16s%2Fg%2F1vgw9tmz?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "CASA DE ORACION",
    image: "img/Logo_Corona_Argentina.png",
    description: "San Matias 5525<br>(100 mts de Calderon)<br>Gonzalez Catan<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes y Jueves: 19.30hs<br>Domingo: 10.00hs<br><br><b>Enc. de Obra:</b><br>Diacono Elias Cuenca",
    link: "https://www.google.com/maps/place/San+Mat%C3%ADas+5525,+B1759DCC+Gonz%C3%A1lez+Cat%C3%A1n,+Provincia+de+Buenos+Aires/@-34.732185,-58.645268,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcc6aab0291f7f:0xc1b9203b637f4a5f!8m2!3d-34.732185!4d-58.645268!16s%2Fg%2F11rd5bpt_0?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "KM 36",
    image: "img/Logo_Corona_Argentina.png",
    description: "Daubert 7958<br>Ca&ntilde;ada de Gomez y Atalaya (Km36)<br>Virrey del Pino<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes y Jueves: 19.30hs<br>Domingo: 10.00hs<br><br><b>Enc. de Obra:</b><br>Presbitero Angel Cardozo",
    link: "https://www.google.com/maps/place/Daubert+7963,+B1763IIM+Virrey+del+Pino,+Provincia+de+Buenos+Aires/@-34.8185526,-58.6369743,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcdb4fe2745129:0xa96d6daf7fc73118!8m2!3d-34.8185526!4d-58.6343994!16s%2Fg%2F11fml393_n?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "CATAN",
    image: "img/Logo_Corona_Argentina.png",
    description: "Concepcion Valle y Jacobo Leopardi<br>Gonzalez Catan<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves y Sabado: 19.30hs<br><br><b>Enc. de Obra:</b><br>Evangelista Elio Sanchez",
    link: "https://www.google.com/maps/place/Cristo+el+rey+,anexo:Gonz%C3%A1lez+Catan,(filial+Adonai)/@-34.7734904,-58.6550795,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcc300416386c1:0xd434fcb84c7f9090!8m2!3d-34.7734904!4d-58.6550795!16s%2Fg%2F11x346f3k1?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "LA AURORA",
    image: "img/Logo_Corona_Argentina.png",
    description: "Zarate 1685<br>(e/Terrero y Bartolom&eacute; de la Casas)<br>Rafael Castillo<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles, Sabado: 19.00hs<br>Domingo: 9.00hs<br><br><b>Enc. de Obra:</b><br>Presbitero Hector Fragata",
    link: "https://www.google.com/maps/place/Z%C3%A1rate+1806,+B1755BDB+Rafael+Castillo,+Provincia+de+Buenos+Aires/@-34.7139103,-58.6245065,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcc697cc713d2f:0xac954ca2950183!8m2!3d-34.7139103!4d-58.6219316!16s%2Fg%2F11s9k_9w_j?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "EZEIZA",
    image: "img/Logo_Corona_Argentina.png",
    description: "Progreso 845<br>(Rio Hondo y La Rioja)<br>Bº Villa Golf<br>Ezeiza<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles, Viernes: 19.00hs<br>Domingo: 9.30hs<br><br><b>Enc. de Obra:</b><br>Evangelista Gabriel Rios",
    link: "https://www.google.com/maps/place/IGLESIA+EVANGELICA+PENTECOSTAL+CRISTO+EL+REY+1994+ANEXO+EZEIZA/@-34.8593479,-58.5418277,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcd13ee19e1cbb:0x1d289f004b46fcd2!8m2!3d-34.8593479!4d-58.5418277!16s%2Fg%2F11l3519b0m?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "MARIANO ACOSTA",
    image: "img/Logo_Corona_Argentina.png",
    description: "Posse 4141<br>(e/Benito Juarez y Emiliano Zapata)<br>Mariano Acosta<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves y Sabado: 19.00hs<br><br><b>Enc. de Obra:</b><br>Presbitero Jorge Gutierrez",
    link: "https://www.google.com/maps/place/Juan+Posse+4168,+B1723GPT+Mariano+Acosta,+Provincia+de+Buenos+Aires/@-34.7284257,-58.8090214,17z/data=!3m1!4b1!4m6!3m5!1s0x95bceb6d51576849:0x2bedc4d3c8d746cf!8m2!3d-34.7284257!4d-58.8064465!16s%2Fg%2F11s_vky1j1?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "DOMSELAAR",
    image: "img/Logo_Corona_Argentina.png",
    description: "Sargento Cabral 1062<br>(e/Chaco y Corrientes)<br>Domselaar - San Vicente<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Lunes, Miercoles y Sabado: 19.00hs<br>Domingo: 10.00hs<br><br><b>Enc. de Obra:</b><br>Diacono Miguel Nuñez",
    link: "https://www.google.com/maps/place/35%C2%B003'45.2%22S+58%C2%B016'49.7%22W/@-35.062547,-58.280459,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-35.062547!4d-58.280459?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "GLEW",
    image: "img/Logo_Corona_Argentina.png",
    description: "Antonio Luis Beruti 3465<br>(e/Alejandro Casona y Miguel Cane)<br>Glew<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves y Sabado: 19.30hs<br>Domingo: 10.00hs<br><br><b>Enc. de Obra:</b><br>Diacono Jonathan Palacios",
    link: "https://www.google.com/maps/place/Antonio+Luis+Berutti+3443,+B1856IWY+Glew,+Provincia+de+Buenos+Aires/@-34.8803481,-58.3556879,17z/data=!3m1!4b1!4m6!3m5!1s0x95a32aa3a03d1c91:0xaf5a8ca29894c0db!8m2!3d-34.8803481!4d-58.353113!16s%2Fg%2F11jpgncvbx?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "LOS NUÑEZ",
    image: "img/Logo_Corona_Argentina.png",
    description: "Paraje Los Nu&ntilde;ez<br>(200mts de Rta. 211)<br>Prov. Santiago del Estero<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Domingo: 18.00hs<br><br><b>Enc. de Obra:</b><br>Presbitero Jose Villan",
    link: "https://www.google.com/maps/place/IGLESIA+EVANGELICA+PENTECOSTAL+CRISTO+EL+REY+Fichero+de+culto1994,+Los+Nu%C3%B1ez,+Santiago+del+Estero/data=!4m2!3m1!1s0x94235bea9d946b01:0xcca0db4983fb0d9b?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI1LjIzLjQYACDXggMqmQEsOTQyNjc3MjcsOTQyODQ0NzgsOTQyMjMyOTksOTQyMTY0MTMsOTQyODA1NzYsOTQyMTI0OTYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTc1MjMsOTQyMTg2NTMsOTQyMjk4MzksOTQyNzUxNjgsOTQyNzk2MTksNDcwODQzOTMsOTQyMTMyMDAsOTQyNTgzMjVCAkFS&skid=b4677cee-9f93-44fe-a963-bd3e9d93b4a3&g_st=awb"
  },
  {
    recipe: "TERMAS",
    image: "img/Logo_Corona_Argentina.png",
    description: "Uruguay 572<br>(Bº Herrera)<br>Termas de R&iacute;o Hondo<br>Prov. Santiago del Estero<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Jueves: 19.00hs<br><br><b>Enc. de Obra:</b><br>Presbitero Jose Villan",
    link: "https://www.google.com/maps/place/Uruguay+572,+G4220+Termas+de+R%C3%ADo+Hondo,+Santiago+del+Estero/@-27.4844801,-64.8674589,17z/data=!3m1!4b1!4m6!3m5!1s0x94236e7861c2b031:0x12b7a846d0e8b0e9!8m2!3d-27.4844801!4d-64.8674589!16s%2Fg%2F11s5sbf4l7?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "CATAMARCA",
    image: "img/Logo_Corona_Argentina.png",
    description: "Bº Catamarca (sobre Rta. 211)<br>Prov. Santiago del Estero<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles: 19.00hs<br><br><b>Enc. de Obra:</b><br>Presbitero Jose Villan",
    link: "#"
  },
  /* ===============================
  filial KM 28. Anexos
  =================================== */
  {
    recipe: "ATALAYA",
    image: "img/Logo_Corona_Argentina.png",
    description: "Armonia y Lanza<br>Gonzalez Catan<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Jueves, Domingo: 18.00hs<br><br><b>Enc. de Obra:</b><br>Presbitero Miguel Noceda",
    link: "https://www.google.com/maps/place/Armon%C3%ADa+%26+Lanza,+B1759+Gonz%C3%A1lez+Cat%C3%A1n,+Provincia+de+Buenos+Aires/@-34.7462108,-58.6470461,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcc3f6368c91dd:0x4c87d31ae4d0a4e8!8m2!3d-34.7462108!4d-58.6470461!16s%2Fg%2F11gdqkzzxt?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D"
  },

  /* ===============================
  filial LA ROCA SAGRADA. Anexos
  =================================== */
  {
    recipe: "VIRREY DEL PINO",
    image: "img/Logo_Corona_Argentina.png",
    description: "Planez y Paramorimbo<br>Bº La Recoleta<br>Ruta Nac. Nº 3, Km 43<br>Virrey del Pino<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Jueves: 19.00hs<br>Domingo: 09.30hs<br><br><b>Enc. de Obra:</b><br>Pastor Daniel Carrizo",
    link: "https://www.google.com/maps/place/Miguel+Planes+%26+Paramaribo,+B1764+Virrey+del+Pino,+Provincia+de+Buenos+Aires/@-34.8871426,-58.6612126,17z/data=!4m16!1m9!3m8!1s0x95bcdc1a747e0d9f:0x322d61a12468d95!2sMiguel+Planes+%26+Paramaribo,+B1764+Virrey+del+Pino,+Provincia+de+Buenos+Aires!3b1!8m2!3d-34.8871306!4d-58.6612255!10e5!16s%2Fg%2F11f30m8fdt!3m5!1s0x95bcdc1a747e0d9f:0x322d61a12468d95!8m2!3d-34.8871306!4d-58.6612255!16s%2Fg%2F11f30m8fdt?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
  },

  /* ===============================
  filial ORO VERDE. Anexos
  =================================== */
  {
    recipe: "BARRIO SAN PEDRO",
    image: "img/Logo_Corona_Argentina.png",
    description: "Bollini 8465<br>Ruta Nac. Nº 3, Km 35<br>Virrey del Pino<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, Sabado: 20.00hs<br>Domingo: 19.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Luis Lazarte",
    link: "https://www.google.com/maps/place/C.+Francisco+Bollini+8465,+B1763IQO+Virrey+del+Pino,+Provincia+de+Buenos+Aires/@-34.8246027,-58.6329443,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcdb43be5c2ca1:0x682dc4e24eb0fa31!8m2!3d-34.8246027!4d-58.6303694!16s%2Fg%2F11h7k_79ln?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "JUAN MANUEL DE ROSAS",
    image: "img/Logo_Corona_Argentina.png",
    description: "17 De Noviembre 152<br>Ruta Nac. Nº 3, Km 34<br>Gonzalez Catan<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles, Viernes: 19.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Osmar Fiorentin",
    link: "#"
  },
  {
    recipe: "BARRIO NICOLE",
    image: "img/Logo_Corona_Argentina.png",
    description: "Manzana 51, Lote 20<br>Ruta Nac. Nº 3, Km 35<br>Gonzalez Catan<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, Sabado: 20.00hs<br>Domingo: 19.00hs<br><br><b>Enc. de Obra:</b><br>Presbitero Miguel Leiva",
    link: "#"
  },
  {
    recipe: "BARRIO LOS ALAMOS",
    image: "img/Logo_Corona_Argentina.png",
    description: "Cachimayo 8555<br>Ruta Nac. Nº 3, Km 35<br>Gonzalez Catan<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, Sabado: 20.00hs<br>Domingo: 18.00hs<br><br><b>Enc. de Obra:</b><br>Evangelista Fabian Martinez",
    link: "https://www.google.com/maps/place/Iglesia+Evang%C3%A9lica+Pentecostal+Cristo+El+Rey+(Los+%C3%81lamos),+B1763+Virrey+del+Pino,+Provincia+de+Buenos+Aires/data=!4m2!3m1!1s0x95bcdb0d54008139:0xb18933398a4eb22a?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI1LjI1LjIYACCenQoqhwEsOTQyNzUzMTUsOTQyMjMyOTksOTQyMTY0MTMsOTQyMTI0OTYsOTQyNzQ4ODIsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTc1MjMsOTQyMTg2NTMsOTQyMjk4MzksOTQyNzUxNjgsNDcwODQzOTMsOTQyMTMyMDAsOTQyNTgzMjVCAkFS&skid=61e5574a-3c82-47ac-9886-f25ba18c0043&g_st=aw"
  },
  {
    recipe: "UNION ESCUELA",
    image: "img/Logo_Corona_Argentina.png",
    description: "Prov. Formosa<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles, Sabado: 20.00hs<br>Domingo: 19.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Hugo Roldan",
    link: "#"
  },

  /* ===============================
  filial ISIDRO CASANOVA. Anexos
  =================================== */

  /* ===============================
  filial SAN JOSÉ OESTE. Anexos
  =================================== */
  {
    recipe: "TAQUELLO",
    image: "img/Logo_Corona_Argentina.png",
    description: "Pje. Taquello<br>Prov. Santiago del Estero<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves,<br>Domingo: 16.00hs<br><br><b>Enc. de Obra:</b><br>Presbitero Nazareno",
    link: "#"
  },
  {
    recipe: "MAILIN",
    image: "img/Logo_Corona_Argentina.png",
    description: "Bº El Cha&ntilde;ar<br>Prov. Santiago del Estero<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Sabado: 20.00hs<br><br><b>Enc. de Obra:</b><br>Presbitero Nazareno",
    link: "https://www.google.com/maps/place/Mail%C3%ADn,+Santiago+del+Estero/@-28.4781301,-63.2745682,15z/data=!3m1!4b1!4m6!3m5!1s0x943a6a6eb66b945d:0x8eac3b79a37f2850!8m2!3d-28.4821356!4d-63.2764489!16s%2Fg%2F11r80t228?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "TACO TOTORAYO",
    image: "img/Logo_Corona_Argentina.png",
    description: "Pje. Taco Totorayo<br>Prov. Santiago del Estero<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Sabado: 15.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Ramon Mores",
    link: "#"
  },

  /* ===============================
  filial QUITILIPI. Anexos
  =================================== */
  {
    recipe: "EL PARAISAL",
    image: "img/Logo_Corona_Argentina.png",
    description: "(sobre Ruta 4)<br>El Paraisal<br>Prov. Chaco<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Sabado: 19.00hs<br>Domingo: 8.30hs<br><br><b>Enc. de Obra:</b><br>Presbitero Jose Rojas",
    link: "https://www.google.com/maps/place/Iglesia+Evangelista+Pentecostal+Cristo+el+Rey+anexo+El+Parisal/@-26.5009629,-60.0681101,17z/data=!3m1!4b1!4m6!3m5!1s0x9441450037d98db5:0x66dc00998be8f35c!8m2!3d-26.5009629!4d-60.0681101!16s%2Fg%2F11w1gl9mdl?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "MACHAGAI",
    image: "img/Logo_Corona_Argentina.png",
    description: "12 de Octubre<br>frente Bº Reserva<br>Reserva 3 (sobre el ferrocaril)<br>Prov. Chaco<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Sabado: 19.30hs<br>Domingo: 18.30hs<br><br><b>Enc. de Obra:</b><br>Prebistero Sergio Ocampos",
    link: "https://www.google.com/maps/place/Iglesia+Evangelica+Pentecostal+Cristo+El+Rey+Anexo+Machagai/@-26.9264749,-60.0645719,17z/data=!3m1!4b1!4m6!3m5!1s0x9446baf11a330385:0x587f95af0106ffb0!8m2!3d-26.9264749!4d-60.0645719!16s%2Fg%2F11rqfz5rpj?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "PAMPA VERDE",
    image: "img/Logo_Corona_Argentina.png",
    description: "Ruta Nac. Nº 9<br>Pampa Verde<br>Prov. Chaco<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Domingo: 19.30hs<br><br><b>Enc. de Obra:</b><br>Prebistero Sergio Ocampos",
    link: "#"
  },
  {
    recipe: "SAENZ PEÑA",
    image: "img/Logo_Corona_Argentina.png",
    description: "Calle 2, (e/ 37 y 39)<br>Bº Ex. Aeroclub<br>Prov. Chaco<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Sabado: 19.30hs<br>Domingo: 18.30hs<br><br><b>Enc. de Obra:</b><br>Presbitero Sergio Medina",
    link: "https://www.google.com/maps/place/Iglesia+Evang%C3%A9lica+Pentecostal+Cristo+el+Rey+Anexo+S%C3%A1ez+Pe%C3%B1a/@-26.8144377,-60.4450516,17z/data=!4m15!1m8!3m7!1s0x9446d36057f99f6b:0x9c2d8aa99969eef!2sIglesia+Evang%C3%A9lica+Pentecostal+Cristo+el+Rey+Anexo+S%C3%A1ez+Pe%C3%B1a!8m2!3d-26.8144888!4d-60.4451452!10e5!16s%2Fg%2F11tcbv81fv!3m5!1s0x9446d36057f99f6b:0x9c2d8aa99969eef!8m2!3d-26.8144888!4d-60.4451452!16s%2Fg%2F11tcbv81fv?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "CHARATA",
    image: "img/Logo_Corona_Argentina.png",
    description: "Av. Pringles y Monseñor De Carlo<br>Cda. Charata<br>Prov. Chaco<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves: 19.30hs<br>Sabado: 19.00hs<br>Domingo: 8.30hs<br><br><b>Enc. de Obra:</b><br>Presbitero Armando Cardozo",
    link: "https://www.google.com/maps/place/Iglesia+Evang%C3%A9lica+Pentecostal+Cristo+el+Rey+anexo+charata/@-27.222106,-61.1919292,17z/data=!3m1!4b1!4m6!3m5!1s0x94475b005e3fdb61:0xe576d92586121a3a!8m2!3d-27.222106!4d-61.1919292!16s%2Fg%2F11vq6rgdxr?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "SAN BERNARDO",
    image: "img/Logo_Corona_Argentina.png",
    description: "Ayacucho y Lapacho<br>Bº Vivero Sur<br>Cdad. San Bernardo<br>Prov. Chaco<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Sabado,<br>Domingo: 19.30hs<br><br><b>Enc. de Obra:</b><br>Presbitero Oscar Garay",
    link: "https://www.google.com/maps/place/Iglesia+Evang%C3%A9lica+Pentecostal+Cristo+el+Rey/@-27.291402,-60.7240263,17z/data=!3m1!4b1!4m6!3m5!1s0x9447197177460e93:0x29350b849727ed27!8m2!3d-27.291402!4d-60.7214514!16s%2Fg%2F11rmzpzhbv?hl=es&entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "LA CLOTILDE",
    image: "img/Logo_Corona_Argentina.png",
    description: "Córdoba<br>(por San Martin y Sarmiento)<br>Prov. Chaco<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles, Sabado: 19.00hs<br>Domingo: 09.00hs<br><br><b>Enc. de Obra:</b><br>Presbitero Oscar Gimenez",
    link: "https://www.google.com/maps/place/Iglesia+Evang%C3%A9lica+Pentecostal+Cristo+el+Rey+Anexo+La+Clotilde/@-27.1757006,-60.6352403,17z/data=!4m6!3m5!1s0x9447210062634ebf:0x24f4bc879fd878f0!8m2!3d-27.1757444!4d-60.635105!16s%2Fg%2F11vycdjbhj?entry=ttu"
  },
  {
    recipe: "VILLA DOS TRECE",
    image: "img/Logo_Corona_Argentina.png",
    description: "Hipolito Yrigoyen 1850<br>Prov. Formosa<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles, Sabado: 19.00hs<br>Domingo: 18.00hs<br><br><b>Enc. de Obra:</b><br>Presbitero Oscar Gimenez",
    link: "https://www.google.com/maps/place/IGLESIA+EVANGELICA+PENTECOSTAL+CRISTO+EL+REY/@-26.1874611,-59.3719997,17z/data=!4m6!3m5!1s0x9443bd8e03dad679:0x1e82a5bc4dfdc95b!8m2!3d-26.1874611!4d-59.3719998!16s%2Fg%2F11t55_rfkq?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "MOJON DE FIERRO",
    image: "img/Logo_Corona_Argentina.png",
    description: "Prov. Formosa<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Mi&eacute;rcoles, S&aacute;bado: 19.30hs<br>Domingo: 9.00hs<br><br><b>Enc. de Obra:</b><br>Presbitero Oscar Gimenez",
    link: "#"
  },
  {
    recipe: "MISION LAISHI",
    image: "img/Logo_Corona_Argentina.png",
    description: "Prov. Formosa<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, Sabado,<br>Domingo: 19.30hs<br><br><b>Enc. de Obra:</b><br>Evangelista Cristian Benitez",
    link: "#"
  },
  {
    recipe: "PAMPA DE LOS GUANACOS",
    image: "img/Logo_Corona_Argentina.png",
    description: "Av. San Martin<br>e/ San Lorenzo y Av. General Paz<br>San Martin<br>Prov. Santiago del Estero<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles: 20.00hs<br>Sabado, Domingo: 19.30hs<br><br><b>Enc. de Obra:</b><br>Presbitero Lisandro David Lugo",
    link: "#"
  },

  /* ===============================
  filial LA CUMBRE DEL CALVARIO. Anexos
  =================================== */
  {
    recipe: "CASA DE ORACION",
    image: "img/Logo_Corona_Argentina.png",
    description: "Las Amapolas 1750<br>Tristan Suarez<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Viernes: 19.30hs<br><br><b>Enc. de Obra:</b><br>Evangelista Oscar Villanueva",
    link: "https://www.google.com/maps/place/Las+Amapolas+1750,+B1806+Trist%C3%A1n+Su%C3%A1rez,+Provincia+de+Buenos+Aires/@-34.9053386,-58.549964,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcd7823f063081:0x8aa3e31624ad0125!8m2!3d-34.9053386!4d-58.5473891!16s%2Fg%2F11s9gq52vx?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "TRISTAN SUAREZ",
    image: "img/Logo_Corona_Argentina.png",
    description: "Malambo 1500<br>Bº La Uni&oacute;n<br>Tristan Suarez<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles, Sabado: 19.30hs<br><br><b>Enc. de Obra:</b><br>Presbitero Raul Merlo",
    link: "https://www.google.com/maps/place/El+Malambo+1500,+B1806+La+Uni%C3%B3n,+Provincia+de+Buenos+Aires/@-34.8957559,-58.563353,13.53z/data=!4m5!3m4!1s0x95bcd764e42c2467:0xe128cc30f0f62094!8m2!3d-34.89262!4d-58.5457375?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    recipe: "CRISTO ES LA PEÑA",
    image: "img/Logo_Corona_Argentina.png",
    description: "Antequera 2965<br>(e/Luj&aacute;n y Alag&oacute;n)<br>Gonz&aacute;lez Cat&aacute;n<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves,<br>Sabado: 19.30hs<br><br><b>Enc. de Obra:</b><br>Prebistero Ramon Martinez",
    link: "https://www.google.com/maps/place/Antequera+2965,+B1759+Gonz%C3%A1lez+Cat%C3%A1n,+Provincia+de+Buenos+Aires/@-34.7482329,-58.6406557,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcc40b8e2d21dd:0x146fd90621de73ef!8m2!3d-34.7482329!4d-58.6406557?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
  },
];/* ==========================================
   1. REFERENCIAS AL DOM
   ========================================== */
const DOM = {
  recipeGrid: document.getElementById('recipeGrid'),
  searchInput: document.getElementById('searchInput'),
  emptyState: document.getElementById('emptyState'),
  chatBtn: document.getElementById('chatWidgetBtn'),
  chatPopup: document.getElementById('chatWidgetPopup')
};

/* ==========================================
   2. UTILIDADES
   ========================================== */
const isMobileUserAgent = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const fieldIncludes = (fieldValue, query) =>
  fieldValue ? fieldValue.toLowerCase().includes(query) : false;

/* ==========================================
   3. RENDERIZADO DE RECETAS
   ========================================== */
function createCardElement(recipe) {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-image-wrapper">
      <img src="${recipe.image}" alt="${recipe.recipe}" loading="lazy">
      <div class="card-gradient"></div>
    </div>
    <div class="card-content">
      <h2 class="card-title">${recipe.recipe}</h2>
      <p class="card-description">${recipe.description}</p>
      <div class="card-footer">
        <a href="${recipe.link}" target="_blank" rel="noopener noreferrer" class="card-button">
          cómo llegar
        </a>
      </div>
    </div>
  `;
  return card;
}

function renderRecipes(filteredRecipes = []) {
  if (!DOM.recipeGrid) return;

  DOM.recipeGrid.innerHTML = '';
  const isEmpty = filteredRecipes.length === 0;

  if (DOM.emptyState) {
    DOM.emptyState.style.display = isEmpty ? 'block' : 'none';
  }

  if (isEmpty) return;

  const fragment = document.createDocumentFragment();
  filteredRecipes.forEach(recipe => {
    fragment.appendChild(createCardElement(recipe));
  });

  DOM.recipeGrid.appendChild(fragment);
}

/* ==========================================
   4. LÓGICA DE BÚSQUEDA
   ========================================== */
function handleSearch(e) {
  const query = e.target.value.toLowerCase().trim();

  if (typeof recipes === 'undefined') return;

  const filtered = recipes.filter(recipe =>
    fieldIncludes(recipe.recipe, query) ||
    fieldIncludes(recipe.description, query) ||
    fieldIncludes(recipe.tag, query)
  );

  renderRecipes(filtered);
}

/* ==========================================
   5. WIDGET DE CHAT
   ========================================== */
function initChatWidget() {
  const { chatBtn, chatPopup } = DOM;

  if (!chatBtn || !chatPopup) return;

  const isMobile = isMobileUserAgent();

  const links = chatPopup.querySelectorAll('[data-desktop][data-mobile]');
  links.forEach(link => {
    const targetUrl = link.getAttribute(isMobile ? 'data-mobile' : 'data-desktop');
    if (targetUrl) link.setAttribute('href', targetUrl);
  });

  chatBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    chatPopup.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!chatPopup.contains(e.target) && !chatBtn.contains(e.target)) {
      chatPopup.classList.remove('active');
    }
  });
}

/* ==========================================
   6. INICIALIZACIÓN
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
  initChatWidget();

  if (DOM.searchInput) {
    DOM.searchInput.addEventListener('input', handleSearch);
  }

  if (typeof recipes !== 'undefined') {
    renderRecipes(recipes);
  }
});




// Configuración de datos
const SLIDES = [
  {
    image: "./img/Bandera_Argentina.jpg",
    title: "Argentina"
  },
  {
    image: "./img/Bandera_Paraguay.jpg",
    title: "Paraguay"
  },
  {
    image: "./img/Bandera_Chile.jpg",
    title: "Chile"
  },
//  {
//    image: "./img/Bandera_Peru.jpg",
//    title: "Peru"
//  }
];

// Parámetros de la animación 3D
const CONFIG = {
  gap: 8,          // Distancia horizontal entre tarjetas
  tilt: 12,        // Inclinación en el eje Y (grados)
  sideTilt: 8,     // Inclinación en el eje Z (grados)
  depth: 240,      // Profundidad 3D (px)
  scaleStep: 0.16, // Reducción de escala por nivel
  maxVisible: 2,   // Tarjetas visibles a cada lado de la activa
  dimOpacity: 0.4  // Opacidad de las tarjetas inactivas (0 a 1)
};

let activeIndex = 0;
let isLocked = false;

const container = document.querySelector('.coverflow-container');
const track = document.getElementById('coverflowTrack');

// Inicializar la galería
function initGallery() {
  track.innerHTML = '';
  
  SLIDES.forEach((slide, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-index', index);
    
    card.innerHTML = `
      <img src="${slide.image}" alt="${slide.title}">
      <div class="card-gradient"></div>
      <div class="card-title">${slide.title}</div>
      <div class="card-dimmer"></div>
    `;
    
    card.addEventListener('click', () => handleCardClick(index));
    track.appendChild(card);
  });

  updateCoverflow();
}

// Calcular y aplicar transformaciones 3D
function updateCoverflow(dragOffset = 0, isDraggingStatus = false) {
  const cards = Array.from(track.children);
  const total = cards.length;

  cards.forEach((card, i) => {
    // MAGIA: Sumamos la posición activa con el movimiento del dedo en tiempo real
    let rel = i - (activeIndex + dragOffset);

    // Cálculo de ciclo continuo (Loop)
    if (rel > total / 2) rel -= total;
    if (rel < -total / 2) rel += total;

    const absRel = Math.abs(rel);
    const isVisible = absRel <= CONFIG.maxVisible;
    const isActive = rel === 0 && dragOffset === 0;

    const currentDepth = window.innerWidth <= 768 ? 500 : (CONFIG.depth || 240);
    const currentGap = window.innerWidth <= 768 ? 4 : (CONFIG.gap || 8);

    const scale = Math.max(0.4, 1 - absRel * CONFIG.scaleStep);
    const tx = rel * (currentGap * 30);
    const tz = -absRel * currentDepth;
    const ry = -rel * CONFIG.tilt;
    const rz = rel * CONFIG.sideTilt;

    // APAGAR TRANSICIÓN CSS SI ESTÁ ARRASTRANDO (evita el lag del dedo)
    card.style.transition = isDraggingStatus ? 'none' : '';

    // Transformación CSS
    card.style.transform = `
      translate(-50%, -50%) 
      translateX(${tx}px) 
      translateZ(${tz}px) 
      rotateY(${ry}deg) 
      rotateZ(${rz}deg) 
      scale(${scale})
    `;

    card.style.opacity = isVisible ? 1 : 0;
    card.style.pointerEvents = isVisible ? 'auto' : 'none';
    card.style.cursor = isActive ? 'default' : 'pointer';

    const dimmer = card.querySelector('.card-dimmer');
    if (dimmer) {
      dimmer.style.transition = isDraggingStatus ? 'none' : '';
      dimmer.style.opacity = isActive ? 0 : CONFIG.dimOpacity;
    }
  });
}

// Bloqueo temporal para animaciones fluidas
function lockTransition() {
  isLocked = true;
  setTimeout(() => {
    isLocked = false;
  }, 600); // Coincide con el tiempo de transición CSS (0.6s)
}

function handleCardClick(index) {
  if (isLocked) return;
  lockTransition();
  
  if (index === activeIndex) {
    activeIndex = (activeIndex + 1) % SLIDES.length;
  } else {
    activeIndex = index;
  }
  updateCoverflow();
}

// Navegación con teclado (Flecha izquierda / derecha)
container.addEventListener('keydown', (e) => {
  if (isLocked) return;

  if (e.key === 'ArrowRight') {
    lockTransition();
    activeIndex = (activeIndex + 1) % SLIDES.length;
    updateCoverflow();
  } else if (e.key === 'ArrowLeft') {
    lockTransition();
    activeIndex = (activeIndex - 1 + SLIDES.length) % SLIDES.length;
    updateCoverflow();
  }
});
// ==========================================
// SOPORTE PARA DESLIZAR EN TIEMPO REAL (SWIPE/DRAG)
// ==========================================
let startX = 0;
let isDragging = false;
let dragOffset = 0;

// Determina cuántos píxeles hay que arrastrar para pasar "1" tarjeta completa.
// Usamos el 40% del ancho de la pantalla para que sea proporcional.
const dragSensitivity = window.innerWidth * 0.4; 

// Eventos táctiles (Móviles)
container.addEventListener('touchstart', (e) => {
  if (isLocked) return;
  isDragging = true;
  startX = e.touches[0].clientX;
}, { passive: true });

container.addEventListener('touchmove', (e) => {
  if (!isDragging || isLocked) return;
  const currentX = e.touches[0].clientX;
  const diffX = startX - currentX; // Positivo si vas izq, negativo si vas der
  
  // Convertimos los píxeles a "porcentaje de tarjeta" (ej: 0.5 es media tarjeta)
  dragOffset = diffX / dragSensitivity;
  
  // Actualizamos la galería en tiempo real sin animaciones CSS
  updateCoverflow(dragOffset, true);
}, { passive: true });

container.addEventListener('touchend', finalizarDeslizamiento);

// Eventos de mouse (Computadoras)
container.addEventListener('mousedown', (e) => {
  if (isLocked) return;
  isDragging = true;
  startX = e.clientX;
  container.style.cursor = 'grabbing';
});

container.addEventListener('mousemove', (e) => {
  if (!isDragging || isLocked) return;
  const currentX = e.clientX;
  const diffX = startX - currentX;
  
  dragOffset = diffX / dragSensitivity;
  updateCoverflow(dragOffset, true);
});

container.addEventListener('mouseup', finalizarDeslizamiento);
container.addEventListener('mouseleave', () => {
  if (isDragging) finalizarDeslizamiento();
});

// Función para soltar la tarjeta
function finalizarDeslizamiento() {
  if (!isDragging) return;
  isDragging = false;
  container.style.cursor = 'default';

  // Si arrastró más del 25% (0.25) cambiamos de tarjeta definitivamente
  if (dragOffset > 0.25) {
    activeIndex = (activeIndex + 1) % SLIDES.length;
  } else if (dragOffset < -0.25) {
    activeIndex = (activeIndex - 1 + SLIDES.length) % SLIDES.length;
  }

  // Reiniciamos el offset a 0 y devolvemos la transición de CSS (false)
  dragOffset = 0;
  lockTransition(); // Bloquea clics rápidos mientras termina de animar
  updateCoverflow(0, false);
}

// Renderizar al cargar la página
document.addEventListener('DOMContentLoaded', initGallery);
