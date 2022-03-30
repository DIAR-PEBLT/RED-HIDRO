//let map = L.map('map').setView([-15.488396, -70.167500], 8)

//L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', { foo: 'bar', attribution: '&copy; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>' }).addTo(map);

//marcadores

//var marcador = L.marker([-15.72133, -70.70477], {
//draggable: true,
//title: "Presa Lagunillas",



//}).addTo(map).bindPopup("<h1>Presa Lagunillas</h1> <p> Reservorio Lagunillas 580 MM3 </p><img src='./img/presa.jpg'/> <a href='https://datastudio.google.com/u/2/reporting/3dc19c28-3194-448d-9bcd-fa0bc7b20a7a/page/qX5SC'target='blank'>Datos Aqui</a> <iframe width='600' height='500' src='https://datastudio.google.com/embed/reporting/8d756330-5145-4e50-a8cf-7db63867695b/page/qX5SC' frameborder='0' style='border:0' allowfullscreen></iframe>");




// Configuracion del Marcador
var marcador_rojo = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    iconSize: [20, 33], // size of the icon
    //shadowSize: [50, 64], // size of the shadow
    //iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62], // the same for the shadow
    //popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var marcador_Amarillo = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png",
    iconSize: [20, 33], // size of the icon
    //shadowSize: [50, 64], // size of the shadow
    //iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62], // the same for the shadow
    //popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var marcador_Verde = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    iconSize: [22, 33], // size of the icon
    //shadowSize: [50, 64], // size of the shadow
    //iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62], // the same for the shadow
    //popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});




// Varios Mapas Base 
var Google = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', { foo: 'bar', attribution: '&copy; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>' }),
    OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }),
    CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    });

// Varios Marcadores segun tipo (Proyectos)
var Ichocollo = L.marker([-15.66680, -70.82266], {
        icon: marcador_rojo,
        draggable: false,
        title: "Río Ichocollo",
    }).bindPopup("Datos en Construcción", {
        maxWidth: "auto"
    }),
    garganta_larga = L.marker([-15.72068, -70.70347], {
        icon: marcador_rojo,
        draggable: false,
        title: "Aforador Garganta Larga",
    }).bindPopup("Datos en Construcción", { maxWidth: "auto" }),
    boca_cabana_mañazo = L.marker([-15.65959, -70.46939], {
        icon: marcador_rojo,
        draggable: false,
        title: "Bocatoma Cabana - Mañazo",
    }).bindPopup("Datos en Construcción", { maxWidth: "auto" }),
    boca_huataquita = L.marker([-15.65734, -70.46796], {
        icon: marcador_Verde,
        draggable: false,
        title: "Bocatoma Huataquita",
    }).bindPopup("Datos en Construcción", { maxWidth: "auto" }),
    captacion_huataquita = L.marker([-15.67904, -70.40971], {
        icon: marcador_Verde,
        draggable: false,
        title: "Captación Huataquita - Callapoca",
    }).bindPopup("Datos en Construcción", { maxWidth: "auto" }),
    bocatoma_cabanilla = L.marker([-15.67103, -70.38460], {
        icon: marcador_Verde,
        draggable: false,
        title: "Bocatoma Cabanilla",
    }).bindPopup("Datos en Construcción", { maxWidth: "auto" }),
    canal_cabana = L.marker([-15.70628, -70.35953], {
        icon: marcador_Verde,
        draggable: false,
        title: "Canal Principal Cabana",
    }).bindPopup("Datos en Construcción", { maxWidth: "auto" }),
    canal_mañazo = L.marker([-15.70673, -70.35971], {
        icon: marcador_Verde,
        draggable: false,
        title: "Canal Principal Mañazo",
    }).bindPopup("Datos en Construcción", { maxWidth: "auto" }),
    bocatoma_yanarico = L.marker([-15.62643, -70.33333], {
        icon: marcador_Verde,
        draggable: false,
        title: "Bocatoma Yanarico",
    }).bindPopup("Datos en Construcción", { maxWidth: "auto" }),
    bocatoma_yocara = L.marker([-15.59562, -70.29974], {
        icon: marcador_Verde,
        draggable: false,
        title: "Bocatoma Yocara",
    }).bindPopup("Datos en Construcción", { maxWidth: "auto" }),
    bocatoma_canteria = L.marker([-15.55887, -70.26945], {
        icon: marcador_Verde,
        draggable: false,
        title: "Bocatoma Canteria",
    }).bindPopup("Datos en Construcción", { maxWidth: "auto" }),
    captacion_sedaj = L.marker([-15.46719, -70.10607], {
        icon: marcador_Verde,
        draggable: false,
        title: "Captación Seda Juliaca",
    }).bindPopup("Datos en Construcción", { maxWidth: "auto" })

;


//Agrupando los Marcadores de Tipo Proyecto
var Captacion = L.layerGroup([Ichocollo, garganta_larga, boca_cabana_mañazo]);

//Agrupando los Marcadores de Tipo Estudio
var Distribución = L.layerGroup([boca_huataquita, captacion_huataquita, bocatoma_cabanilla, canal_cabana, canal_mañazo, bocatoma_yanarico,
    bocatoma_yocara, bocatoma_canteria, captacion_sedaj
]);

// Agrpando los Marcadores de Tipo Idea de Proyecto

//var Idea = L.layerGroup([asillo, acora_totorani, conavire]);

//Agregando los grupos de Capas al Mapa
var map = L.map('map', {
    center: [-15.67758, -70.39955],
    zoom: 10,
    layers: [OpenStreetMap_Mapnik, Captacion, Distribución]
});

// Agrupando los Mapas Base
var baseMaps = {
    "Google": Google,
    "OpenStreetMap": OpenStreetMap_Mapnik,
    "Dark": CartoDB_DarkMatter
};



// Creando Capas de Marcadores
var Capas = {
    '<img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png" width="10" height="15"/> Red de Captación': Captacion,
    //'<img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png" width="10" height="15"/> Estudios': Estudio,
    '<img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png" width="10" height="15"/> Red de Distribución': Distribución,
};


// Creando Control de Capas
L.control.layers(baseMaps, Capas).addTo(map);


// Color GRis 
var baseMaps = {
    "<span style='color: gray'>Grayscale</span>": grayscale,
    "Streets": streets
};