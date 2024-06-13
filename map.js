//let map = L.map('map').setView([-15.488396, -70.167500], 8)

//L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', { foo: 'bar', attribution: '&copy; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>' }).addTo(map);

//marcadores

//var marcador = L.marker([-15.72133, -70.70477], {
//draggable: true,
//title: "Presa Lagunillas",



//}).addTo(map).bindPopup("<h1>Presa Lagunillas</h1> <p> Reservorio Lagunillas 580 MM3 </p><img src='./img/presa.jpg'/> <a href='https://datastudio.google.com/u/2/reporting/3dc19c28-3194-448d-9bcd-fa0bc7b20a7a/page/qX5SC'target='blank'>Datos Aqui</a> <iframe width='600' height='500' src='https://datastudio.google.com/embed/reporting/8d756330-5145-4e50-a8cf-7db63867695b/page/qX5SC' frameborder='0' style='border:0' allowfullscreen></iframe>");


// //visualización de coordenadas del mouse
//L.control.mousePosition().addTo(map);

// //barra de escala
// L.control.scale().addTo(map);


// Configuracion del Marcador
var marcador_rojo = L.icon({
    iconUrl: "./img/red_c_marker.png",
    iconSize: [20, 20], // size of the icon
    //shadowSize: [50, 64], // size of the shadow
    //iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62], // the same for the shadow
    //popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var marcador_azul = L.icon({
    iconUrl: "./img/blue_c_marker.png",
    iconSize: [20, 20], // size of the icon
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
        attribution: "<a href='https://hugoaluque.github.io/Hector-Hugo-Anamuro-Luque/'target='blank'> By HugoAñamuro</a> ",
    }).bindPopup("<iframe width='650' height='350' src='https://datastudio.google.com/embed/reporting/532ddce7-2923-4c65-a12b-8f95c4088471/page/qX5SC' frameborder='0' style='border:0' allowfullscreen></iframe>", { maxWidth: "auto" }),
    garganta_larga = L.marker([-15.72068, -70.70347], {
        icon: marcador_rojo,
        draggable: false,
        title: "Aforador Garganta Larga",
    }).bindPopup("<iframe width='650' height='350' src='https://datastudio.google.com/embed/reporting/a576f07e-f55c-41d2-8161-83497f5c1e6d/page/qX5SC' frameborder='0' style='border:0' allowfullscreen></iframe>", { maxWidth: "auto" }),
    boca_cabana_mañazo = L.marker([-15.65959, -70.46939], {
        icon: marcador_rojo,
        draggable: false,
        title: "Bocatoma Cabana - Mañazo",
    }).bindPopup("<iframe width='650' height='350' src='https://datastudio.google.com/embed/reporting/be0b3fe5-cfed-4f9d-9632-46668e0ab318/page/qX5SC' frameborder='0' style='border:0' allowfullscreen></iframe>", { maxWidth: "auto" }),
    boca_huataquita = L.marker([-15.65734, -70.46796], {
        icon: marcador_azul,
        draggable: false,
        title: "Bocatoma Huataquita",
    }).bindPopup("<iframe width='650' height='350' src='https://datastudio.google.com/embed/reporting/5d9cb5f6-5a8a-457d-88ae-5dd450d0bd58/page/qX5SC' frameborder='0' style='border:0' allowfullscreen></iframe>", { maxWidth: "auto" }),
    captacion_huataquita = L.marker([-15.67904, -70.40971], {
        icon: marcador_azul,
        draggable: false,
        title: "Captación Huataquita - Callapoca",
    }).bindPopup("<iframe width='650' height='350' src='https://datastudio.google.com/embed/reporting/79029ba9-6be8-41a9-8e2b-d00f79809adb/page/qX5SC' frameborder='0' style='border:0' allowfullscreen></iframe>", { maxWidth: "auto" }),
    bocatoma_cabanilla = L.marker([-15.67103, -70.38460], {
        icon: marcador_azul,
        draggable: false,
        title: "Bocatoma Cabanilla",
    }).bindPopup("<iframe width='650' height='350' src='https://datastudio.google.com/embed/reporting/819988fc-fbd0-4f4b-9aff-0f4e19cc49c4/page/qX5SC' frameborder='0' style='border:0' allowfullscreen></iframe>", { maxWidth: "auto" }),
    canal_cabana = L.marker([-15.70628, -70.35953], {
        icon: marcador_azul,
        draggable: false,
        title: "Canal Principal Cabana",
    }).bindPopup("<iframe width='650' height='350' src='https://datastudio.google.com/embed/reporting/737ed00c-5b58-42a9-8444-cbbafe8102f8/page/qX5SC' frameborder='0' style='border:0' allowfullscreen></iframe>", { maxWidth: "auto" }),
    canal_mañazo = L.marker([-15.70673, -70.35971], {
        icon: marcador_azul,
        draggable: false,
        title: "Canal Principal Mañazo",
    }).bindPopup("<iframe width='650' height='350' src='https://datastudio.google.com/embed/reporting/d21cf873-79d6-457c-8ba4-c7576a0e5a9c/page/qX5SC' frameborder='0' style='border:0' allowfullscreen></iframe>", { maxWidth: "auto" }),
    bocatoma_yanarico = L.marker([-15.62643, -70.33333], {
        icon: marcador_azul,
        draggable: false,
        title: "Bocatoma Yanarico",
    }).bindPopup("<iframe width='650' height='350' src='https://datastudio.google.com/embed/reporting/863d79c1-b609-48aa-9c7f-11bc94147cf0/page/qX5SC' frameborder='0' style='border:0' allowfullscreen></iframe>", { maxWidth: "auto" }),
    bocatoma_yocara = L.marker([-15.59562, -70.29974], {
        icon: marcador_azul,
        draggable: false,
        title: "Bocatoma Yocará",
    }).bindPopup("<iframe width='650' height='350' src='https://datastudio.google.com/embed/reporting/ab16556c-6c20-4002-90a7-d99c047374b0/page/qX5SC' frameborder='0' style='border:0' allowfullscreen></iframe>", { maxWidth: "auto" }),
    bocatoma_canteria = L.marker([-15.55887, -70.26945], {
        icon: marcador_azul,
        draggable: false,
        title: "Bocatoma Canteria",
    }).bindPopup("<iframe width='650' height='350' src='https://datastudio.google.com/embed/reporting/3fbba1ab-9326-40e8-a348-3e7c3af06de0/page/qX5SC' frameborder='0' style='border:0' allowfullscreen></iframe>", { maxWidth: "auto" }),
    captacion_sedaj = L.marker([-15.46719, -70.10607], {
        icon: marcador_azul,
        draggable: false,
        title: "Captación Seda Juliaca",
    }).bindPopup("<iframe width='650' height='350' src='https://datastudio.google.com/embed/reporting/30c22d30-ec24-4af1-aef9-de74b721b047/page/qX5SC' frameborder='0' style='border:0' allowfullscreen></iframe>", { maxWidth: "auto" })

;



//Agrupando los Marcadores de Tipo Proyecto
var Captacion = L.layerGroup([Ichocollo, garganta_larga, boca_cabana_mañazo]);

//Agrupando los Marcadores de Tipo Estudio
var Distribución = L.layerGroup([boca_huataquita, captacion_huataquita, bocatoma_cabanilla, canal_cabana, canal_mañazo, bocatoma_yanarico,
    bocatoma_yocara, bocatoma_canteria, captacion_sedaj
]);

//Afluentes Ichocollo




// Agrpando los Marcadores de Tipo Idea de Proyecto

//var Idea = L.layerGroup([asillo, acora_totorani, conavire]);

//Agregando los grupos de Capas al Mapa
var map = L.map('map', {
    center: [-15.67758, -70.39955],
    zoom: 11,
    maxBounds: [
        //surOeste
        [-15.847102, -70.026775],
        //norEste
        [-15.421305, -70.841130]
    ],

    layers: [OpenStreetMap_Mapnik, Captacion, Distribución]
});



// Agrupando los Mapas Base
var baseMaps = {
    "Google Satellite": Google,
    "OpenStreetMap": OpenStreetMap_Mapnik,
    "Cartografía Oscura": CartoDB_DarkMatter
};



// Creando Capas de Marcadores
var Capas = {
    '<img src="./img/red_c_marker.png" width="15" height="15"/> Red de Captación': Captacion,
    //'<img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png" width="10" height="15"/> Estudios': Estudio,
    '<img src="./img/blue_c_marker.png" width="15" height="15"/> Red de Distribución': Distribución,
};


// Creando Control de Capas
L.control.layers(baseMaps, Capas, {
    position: 'bottomleft',
    collapsed: false
}).addTo(map);

//Adicionando Logo Institucional

L.Control.Watermark = L.Control.extend({
    onAdd: function(map) {
        var img = L.DomUtil.create('img');
        img.src = 'img/PEBLT.png';
        img.style.width = '150px';
        return img;
    },
    onRemove: function(map) {},
});
L.control.watermark = function(opts) {
    return new L.Control.Watermark(opts);
}
L.control.watermark({ position: 'topleft' }).addTo(map);
// Color GRis 
var baseMaps = {
    "<span style='color: gray'>Grayscale</span>": grayscale,
    "Streets": streets
};