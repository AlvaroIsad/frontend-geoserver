var map = L.map("map", {
    center: [-9.526812102530073, -77.52944905770515],
    zoom: 15,
    zoomControl: false // Oculta el control de zoom
});

var osy = L.tileLayer("https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}");
var osm = L.tileLayer("https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"); 
var oss = L.tileLayer("https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}").addTo(map);
var osz = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");

// Capa en blanco funcional
var blankLayer = L.tileLayer('', {
    attribution: '',
    maxZoom: 22,
    minZoom: 0,
    noWrap: true,
    bounds: [[-90, -180], [90, 180]]
});

var usuarios = L.tileLayer.wms("https://91f6-2803-a3e0-1956-30c0-a9d7-83fa-8096-28ae.ngrok-free.app/geoserver/catastro_huaraz/wms?",{
				layers:"clientes suministro",
				format:"image/png",
				transparent:true,
				    minZoom: 0,
				    maxZoom: 22

}); 

var manzana = L.tileLayer.wms("https://91f6-2803-a3e0-1956-30c0-a9d7-83fa-8096-28ae.ngrok-free.app/geoserver/catastro_huaraz/wms?",{
				layers:"manzana",
				format:"image/png",
				transparent:true,
    minZoom: 0,
    maxZoom: 22

}); 

var lotes = L.tileLayer.wms("https://91f6-2803-a3e0-1956-30c0-a9d7-83fa-8096-28ae.ngrok-free.app/geoserver/catastro_huaraz/wms?",{
				layers:"lotes",
				format:"image/png",
				transparent:true,
    minZoom: 0,
    maxZoom: 22

}); 

var cnx_agua = L.tileLayer.wms("https://91f6-2803-a3e0-1956-30c0-a9d7-83fa-8096-28ae.ngrok-free.app/geoserver/catastro_huaraz/wms?",{
				layers:"acometidas agua",
				format:"image/png",
				transparent:true,
    minZoom: 0,
    maxZoom: 22

}); 

var cnx_desague = L.tileLayer.wms("https://91f6-2803-a3e0-1956-30c0-a9d7-83fa-8096-28ae.ngrok-free.app/geoserver/catastro_huaraz/wms?",{
				layers:"acometidas alcantarillado",
				format:"image/png",
				transparent:true,
    minZoom: 0,
    maxZoom: 22

}); 

var calles = L.tileLayer.wms("https://91f6-2803-a3e0-1956-30c0-a9d7-83fa-8096-28ae.ngrok-free.app/geoserver/catastro_huaraz/wms?",{
                layers:"calles",
                format:"image/png",
                transparent:true,
    minZoom: 0,
    maxZoom: 22

}); 

var ruta_lectura = L.tileLayer.wms("https://91f6-2803-a3e0-1956-30c0-a9d7-83fa-8096-28ae.ngrok-free.app/geoserver/catastro_huaraz/wms?",{
                layers:"ruta lectura",
                format:"image/png",
                transparent:true,
    minZoom: 0,
    maxZoom: 22

}); 

var ruta_reparto = L.tileLayer.wms("https://91f6-2803-a3e0-1956-30c0-a9d7-83fa-8096-28ae.ngrok-free.app/geoserver/catastro_huaraz/wms?",{
                layers:"ruta reparto",
                format:"image/png",
                transparent:true,
    minZoom: 0,
    maxZoom: 22

}); 

var secuencia_ruta_lectura = L.tileLayer.wms("https://91f6-2803-a3e0-1956-30c0-a9d7-83fa-8096-28ae.ngrok-free.app/geoserver/catastro_huaraz/wms?",{
                layers:"secuencia ruta de lectura",
                format:"image/png",
                transparent:true,
    minZoom: 0,
    maxZoom: 22

}); 

var secuencia_ruta_reparto = L.tileLayer.wms("https://91f6-2803-a3e0-1956-30c0-a9d7-83fa-8096-28ae.ngrok-free.app/geoserver/catastro_huaraz/wms?",{
                layers:"secuencia ruta de reparto",
                format:"image/png",
                transparent:true,
    minZoom: 0,
    maxZoom: 22

}); 

var sector = L.tileLayer.wms("https://91f6-2803-a3e0-1956-30c0-a9d7-83fa-8096-28ae.ngrok-free.app/geoserver/catastro_huaraz/wms?",{
                layers:"fondo sector",
                format:"image/png",
                transparent:true,
    minZoom: 0,
    maxZoom: 22

});

var baseMaps = {
				"Google Satelite":oss,
				"Google Hibrido":osy,
				"Google Maps":osm,
				"Street Maps":osz,
    				"Mapa en Blanco": blankLayer
};

var wms = {
				"Manzana":manzana,
				"Lotes":lotes,
				"Clientes":usuarios,
				"Cnx de agua":cnx_agua,
				"Cnx de alcantarillado":cnx_desague,
                "Calles":calles,
                "Rutas de lectura":ruta_lectura,
                "Rutas de reparto":ruta_reparto,
                "Secuencia de lectura":secuencia_ruta_lectura,
                "Secuencia de reparto":secuencia_ruta_reparto,
                "Sectores":sector

};

var ubi = {
                "Huaraz": L.layerGroup().on("add", function () {
                    map.setView([-9.526812102530073, -77.52944905770515], 15);
                }),
                "Caraz": L.layerGroup().on("add", function () {
                    map.setView([-9.046777, -77.809134], 16);
                }),
                "Aija": L.layerGroup().on("add", function () {
                    map.setView([-9.7811551, -77.6093811], 17.5);
                }),
                "Chiquian": L.layerGroup().on("add", function () {
                    map.setView([-10.150457, -77.156520], 16.5);
                })
};

L.Control.CustomLayers = L.Control.extend({
    onAdd: function(map) {
        var container = L.DomUtil.create("div", "custom-layers-control");

        // Evita que el panel interfiera con el mapa
        L.DomEvent.disableClickPropagation(container);

        // 📌 Título con imagen
        var titleContainer = L.DomUtil.create("div", "panel-title-container", container);
        var titleImage = L.DomUtil.create("img", "panel-title-image", titleContainer);
        titleImage.src = "gald-perfecto.png"; // Ruta de la imagen
        titleImage.alt = "Título del Panel"; // Texto alternativo de la imagen

        // 📌 Sección Mapas Base (Desplegable)
        var baseSection = L.DomUtil.create("details", "", container);
        baseSection.open = true; // 🔹 Inicia abierto
        var baseSummary = L.DomUtil.create("summary", "section-title", baseSection);
        baseSummary.innerHTML = "🗺️ Mapas Base";

        Object.keys(baseMaps).forEach(function(name) {
            var button = L.DomUtil.create("button", "layer-btn", baseSection);
            button.innerHTML = name;
            button.onclick = function() {
                map.eachLayer(function(layer) { map.removeLayer(layer); });
                baseMaps[name].addTo(map);
            };
        });

        // 📌 Sección Ubicaciones (Desplegable)
        var ubiSection = L.DomUtil.create("details", "", container);
        ubiSection.open = true; // 🔹 Inicia abierto
        var ubiSummary = L.DomUtil.create("summary", "section-title", ubiSection);
        ubiSummary.innerHTML = "📍 Ubicaciones";

        Object.keys(ubi).forEach(function(name) {
            var button = L.DomUtil.create("button", "layer-btn", ubiSection);
            button.innerHTML = name;
            button.onclick = function() {
                ubi[name].fire("add"); 
            };
        });

        // 📌 Sección Capas WMS (Desplegable)
        var wmsSection = L.DomUtil.create("details", "", container);
        wmsSection.open = true; // 🔹 Inicia abierto
        var wmsSummary = L.DomUtil.create("summary", "section-title", wmsSection);
        wmsSummary.innerHTML = "📌 Capas WMS";

        Object.keys(wms).forEach(function(name) {
            var layerContainer = L.DomUtil.create("div", "layer-container", wmsSection);
            var checkbox = L.DomUtil.create("input", "layer-checkbox", layerContainer);
            checkbox.type = "checkbox";
            checkbox.id = name;
            checkbox.onchange = function() {
                if (this.checked) {
                    map.addLayer(wms[name]);
                } else {
                    map.removeLayer(wms[name]);
                }
            };

            var label = L.DomUtil.create("label", "wms-label", layerContainer);
            label.htmlFor = name;
            label.innerHTML = name;
        });

        // 📌 SECCIÓN HERRAMIENTAS (Desplegable)
        var toolsSection = L.DomUtil.create("details", "", container);
        toolsSection.open = true; // 🔹 Inicia abierto
        var toolsSummary = L.DomUtil.create("summary", "section-title", toolsSection);
        toolsSummary.innerHTML = "🛠️ Herramientas";

        var toolsContent = L.DomUtil.create("div", "section-content", toolsSection);

        // 🔹 BOTÓN IDENTIDAD
        var identityButton = L.DomUtil.create("button", "layer-btn", toolsContent);
        identityButton.innerHTML = "ℹ️ Identidad";
        identityButton.onclick = function () {
            if (identityActive) {
                identityActive = false;
                identityButton.style.background = "#007bff"; // Azul = inactivo
                identityButton.innerHTML = "ℹ️ Identidad";
                updateIdentityInfoBox("Modo Identidad Desactivado");
                map._container.style.cursor = "grab";
                toggleMapLock(false);
            } else {
                // ❌ Si está midiendo, lo apaga antes de activar identidad
                if (measuring) {
                    measuring = false;
                    measureButton.style.background = "#007bff";
                    measureButton.innerHTML = "📏 Medición";
                }

                identityActive = true;
                identityButton.style.background = "#dc3545"; // Rojo = activo
                identityButton.innerHTML = "❌ Desactivar Identidad";
                updateIdentityInfoBox("Modo Identidad Activado");
                map._container.style.cursor = "pointer";
                toggleMapLock(true);
            }
        };

        /// 🔹 BOTÓN MEDICIÓN
        var measureButton = L.DomUtil.create("button", "layer-btn", toolsContent);
        measureButton.innerHTML = "📏 Medición";
        measureButton.onclick = function () {
            if (measuring) {
                measuring = false;
                measureButton.style.background = "#007bff"; // Azul = inactivo
                measureButton.innerHTML = "📏 Medición";
                map._container.style.cursor = "grab";
                toggleMapLock(false);
            } else {
                // ❌ Si está en Identidad, lo apaga antes de activar Medición
                if (identityActive) {
                    identityActive = false;
                    identityButton.style.background = "#007bff";
                    identityButton.innerHTML = "ℹ️ Identidad";
                    updateIdentityInfoBox("Modo Identidad Desactivado");
                }

                measuring = true;
                measureButton.style.background = "#dc3545"; // Rojo = activo
                measureButton.innerHTML = "❌ Finalizar Medición";
                map._container.style.cursor = "crosshair";
                toggleMapLock(true);
            }
        };

	// 🔹 BOTÓN BÚSQUEDA INSCRIPCIÓN
	var searchButton = L.DomUtil.create("button", "layer-btn", toolsContent);
	searchButton.innerHTML = "🔍 Buscar";
	searchButton.onclick = function () {
		// Mostrar el modal de búsqueda
	document.getElementById("searchModal").style.display = "block";
	};

        return container;

    }
});

// Agregar el panel al mapa
var customLayersControl = new L.Control.CustomLayers({ position: "topright" });
map.addControl(customLayersControl);

//L.control.layers(baseMaps, wms, { collapsed: true, position: "topright" }).addTo(map);

//L.control.layers(ubi, null, { collapsed: true, position: "topright" }).addTo(map);

L.control.zoom({
    position: "bottomleft"
}).addTo(map);

var identityActive = false;
var measuring = false;
var mapLocked = false;

function toggleMapLock(lock) {
    if (lock) {
        map.dragging.disable();
        map.scrollWheelZoom.disable();
        map.touchZoom.disable();
        map.doubleClickZoom.disable();
        map.boxZoom.disable();
        map.keyboard.disable();
        mapLocked = true;
    } else {
        map.dragging.enable();
        map.scrollWheelZoom.enable();
        map.touchZoom.enable();
        map.doubleClickZoom.enable();
        map.boxZoom.enable();
        map.keyboard.enable();
        mapLocked = false;
    }
}

var searchModal = document.createElement("div");
searchModal.id = "searchModal";
// Reutilizamos estilos base del modal de identidad
searchModal.style.position = "fixed";
searchModal.style.top = "50%";
searchModal.style.left = "50%";
searchModal.style.transform = "translate(-50%, -50%)";
searchModal.style.background = "#fff";
searchModal.style.padding = "20px";
searchModal.style.border = "1px solid black";
searchModal.style.borderRadius = "8px";
searchModal.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.5)";
searchModal.style.display = "none";
searchModal.style.zIndex = "1000";
searchModal.style.width = "400px";
searchModal.style.maxWidth = "90%";
searchModal.style.maxHeight = "80%";
searchModal.style.overflow = "auto";
searchModal.style.fontSize = "14px";

// Header y botón de cerrar
var searchHeader = document.createElement("div");
searchHeader.style.cursor = "grab";
searchHeader.style.background = "#007bff";
searchHeader.style.color = "white";
searchHeader.style.padding = "10px";
searchHeader.style.fontWeight = "bold";
searchHeader.innerHTML = "🔍 BUSCAR INSCRIPCIÓN";

var closeSearchBtn = document.createElement("button");
closeSearchBtn.innerHTML = "❌";
closeSearchBtn.style.background = "transparent";
closeSearchBtn.style.top = "20px";
closeSearchBtn.style.position = "absolute";
closeSearchBtn.style.right = "25px";
closeSearchBtn.style.border = "none";
closeSearchBtn.style.color = "white";
closeSearchBtn.style.fontSize = "25px";
closeSearchBtn.style.cursor = "pointer";
closeSearchBtn.onclick = function() {
  searchModal.style.display = "none";
};
searchHeader.appendChild(closeSearchBtn);
searchModal.appendChild(searchHeader);

// Contenido: input + botón buscar
var searchContent = document.createElement("div");
searchContent.style.marginTop = "15px";
searchContent.innerHTML = `
  <label for="inscripInput">Número de Inscripción:</label><br>
  <input type="text" id="inscripInput" style="width:100%; padding:6px; margin:8px 0;border:1px solid #000;border-radius:4px;box-sizing:border-box;"><br>
  <button id="inscripSearchBtn" style="padding:8px 16px;">Buscar</button>
`;
searchModal.appendChild(searchContent);

var inscripLabel = searchContent.querySelector('label[for="inscripInput"]');
inscripLabel.style.color = 'black';

// Añadimos el modal al body
document.body.appendChild(searchModal);

// Variables de estado para arrastrar
var isSearchDragging = false,
    searchOffsetX = 0,
    searchOffsetY = 0;

// Cuando el usuario presiona el ratón sobre el header…
searchHeader.onmousedown = function(e) {
  isSearchDragging = true;
  // Calculamos el offset entre el punto de clic y la esquina del modal
  searchOffsetX = e.clientX - searchModal.getBoundingClientRect().left;
  searchOffsetY = e.clientY - searchModal.getBoundingClientRect().top;
  searchModal.style.cursor = "grabbing";
};

// Al mover el ratón por toda la página…
document.addEventListener("mousemove", function(e) {
  if (!isSearchDragging) return;
  // Reposicionamos el modal
  searchModal.style.left = (e.clientX - searchOffsetX) + "px";
  searchModal.style.top  = (e.clientY - searchOffsetY) + "px";
  // Desactivamos el transform: translate central
  searchModal.style.transform = "none";
});

// Cuando suelta el ratón…
document.addEventListener("mouseup", function() {
  if (!isSearchDragging) return;
  isSearchDragging = false;
  searchModal.style.cursor = "grab";
});

// Crear la ventana modal para la información
var modal = document.createElement("div");
modal.id = "identityModal";
modal.style.position = "fixed";
modal.style.top = "50%";
modal.style.left = "50%";
modal.style.transform = "translate(-50%, -50%)";
modal.style.background = "#fff";
modal.style.padding = "20px";  // Reducido de 20px a 10px
modal.style.border = "1px solid black";
modal.style.borderRadius = "8px";
modal.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.5)";
modal.style.display = "none";
modal.style.zIndex = "1000";

modal.style.width = "450px";  // Aumentamos el ancho
modal.style.height = "400px"; // Ajustamos la altura para que sea menor que el ancho
modal.style.maxWidth = "90%"; // Evita que sea demasiado grande en pantallas pequeñas
modal.style.maxHeight = "80%"; // Mantiene una buena proporción
modal.style.overflow = "auto";
modal.style.fontSize = "14px"; // Tamaño de letra más pequeño

// Crear barra superior para mover la ventana
var modalHeader = document.createElement("div");
modalHeader.style.cursor = "grab";
modalHeader.style.background = "#007bff"; // Azul
modalHeader.style.color = "white";
modalHeader.style.padding = "10px";
modalHeader.style.fontWeight = "bold";
modalHeader.style.display = "flex";
modalHeader.style.justifyContent = "space-between";
modalHeader.style.alignItems = "center";
//modalHeader.innerHTML = "INFORMACION DEL CLIENTE";

// Botón para cerrar la ventana modal (ubicado en la parte superior derecha)
var closeModalBtn = document.createElement("button");
closeModalBtn.innerHTML = "❌"; // Usar un icono de X
closeModalBtn.style.position = "absolute";
closeModalBtn.style.top = "20px";
closeModalBtn.style.right = "25px";
closeModalBtn.style.border = "none";
closeModalBtn.style.background = "transparent";
closeModalBtn.style.fontSize = "25px";
closeModalBtn.style.cursor = "pointer";
closeModalBtn.onclick = function () {
    modal.style.display = "none";
};

// Agregar botón de cerrar al header
modalHeader.appendChild(closeModalBtn);
modal.appendChild(modalHeader);

// Contenedor de información dentro del modal
var modalContent = document.createElement("div");
modalContent.style.marginTop = "10px";
modalContent.style.lineHeight = "1.3";  // ESPACIADO REDUCIDO ENTRE ETIQUETAS
modalContent.style.fontSize = "14px";
modal.appendChild(modalContent);
document.body.appendChild(modal);

// Función para hacer la ventana movible
var isDragging = false, offsetX = 0, offsetY = 0;

modalHeader.onmousedown = function (e) {
    isDragging = true;
    offsetX = e.clientX - modal.getBoundingClientRect().left;
    offsetY = e.clientY - modal.getBoundingClientRect().top;
    modal.style.cursor = "grabbing";
};

document.onmousemove = function (e) {
    if (isDragging) {
        modal.style.left = e.clientX - offsetX + "px";
        modal.style.top = e.clientY - offsetY + "px";
        modal.style.transform = "none"; // Desactiva el centrado automático
    }
};

document.onmouseup = function () {
    isDragging = false;
    modal.style.cursor = "grab";
};

// Contenedor de información dentro del modal con espacios entre etiquetas
var modalContent = document.createElement("div");
modalContent.style.marginTop = "20px";  // Espacio entre el botón y el contenido
modalContent.style.lineHeight = "1.6";  // Aumenta el espacio entre líneas
modalContent.style.fontSize = "14px";  // Un poco más grande para mejor lectura

modal.appendChild(closeModalBtn);
modal.appendChild(modalContent);
document.body.appendChild(modal);

// Función para actualizar la ventana modal con la información
function updateModalContent(message, layerType) {
    if (!message) {
        modal.style.display = "none";
    } else {
        // Determinar el símbolo y título según la capa
        let symbol = '';
        let layerTitle = '';

        switch (layerType) {
            case 'clientes suministro':
                symbol = '🟢';
                layerTitle = 'INFORMACION DEL CLIENTE';
                break;
            case 'manzana':
                symbol = '🍎';
                layerTitle = 'INFORMACION DE LA MANZANA';
                break;
            case 'lotes':
                symbol = '🏠';
                layerTitle = 'INFORMACION DEL LOTE';
                break;
            case 'acometida agua':
                symbol = '💧';
                layerTitle = 'INFORMACION DE CNX AGUA';
                break;
            case 'acometida alcantarillado':
                symbol = '🚽';
                layerTitle = 'INFORMACION DE CNX DESAGUE';
                break;
            default:
                symbol = '🟢';
                layerTitle = 'INFORMACION DEL CLIENTE';
        }

        // Cambiar el título del modal
        modalHeader.innerHTML = layerTitle;

        // Formatear el mensaje con el símbolo correspondiente
        let formattedMessage = message.replace(/<br>/g, "<br><br>" + symbol + " ");
        modalContent.innerHTML = symbol + " " + formattedMessage; // Añadir primero el símbolo inicial
        modal.style.display = "block";
    }
}

var identityInfoBox = L.control({ position: "bottomleft" });
var identityInfoBoxTimeout = null;

identityInfoBox.onAdd = function (map) {
    this._div = L.DomUtil.create("div", "identity-box");
    this._div.style.background = "#f0f8ff"; // Azul claro
    this._div.style.padding = "8px";
    this._div.style.border = "1px solid black";
    this._div.style.borderRadius = "5px";
    this._div.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.3)";
    this._div.style.display = "none";
    return this._div;
};

identityInfoBox.addTo(map);

// Función para actualizar el infobox de Identity
function updateIdentityInfoBox(message) {
    identityInfoBox._div.innerHTML = `<b>${message}</b>`;
    identityInfoBox._div.style.display = "block";

    if (identityInfoBoxTimeout) clearTimeout(identityInfoBoxTimeout);

    identityInfoBoxTimeout = setTimeout(() => {
        identityInfoBox._div.style.display = "none";
    }, 3000);
}

map.on('click', function(e) {
    if (identityActive) {

        proj4.defs([
            ["EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs"],
            ["EPSG:32718", "+proj=utm +zone=18 +south +datum=WGS84 +units=m +no_defs"]
        ]);

        var bounds = map.getBounds();

        // Convertir SW y NE a EPSG:32718
        var sw = proj4("EPSG:4326", "EPSG:32718", [bounds.getSouthWest().lng, bounds.getSouthWest().lat]);
        var ne = proj4("EPSG:4326", "EPSG:32718", [bounds.getNorthEast().lng, bounds.getNorthEast().lat]);

        // Definir minY, minX, maxY, maxX para WMS 1.3.0 (orden lat,long)
        var minX = sw[0];  // longitud mínima
        var minY = sw[1];  // latitud mínima
        var maxX = ne[0];  // longitud máxima
        var maxY = ne[1];  // latitud máxima

        var size = map.getSize();

        const layerName = encodeURIComponent("catastro_huaraz:clientes suministro");

        var url = `https://91f6-2803-a3e0-1956-30c0-a9d7-83fa-8096-28ae.ngrok-free.app/geoserver/catastro_huaraz/wms?` +
	    `SERVICE=WMS&` +
	    `VERSION=1.3.0&` +
	    `REQUEST=GetFeatureInfo&` +
	    `LAYERS=${layerName}&` +
	    `QUERY_LAYERS=${layerName}&` +
	    `TRANSPARENT=true&` +
	    `INFO_FORMAT=application/json&` +
	    `FEATURE_COUNT=10&` +
	    `I=${Math.floor(e.containerPoint.x)}&` +
	    `J=${Math.floor(e.containerPoint.y)}&` +
	    `CRS=EPSG:32718&` +
	    `WIDTH=${size.x}&` +
	    `HEIGHT=${size.y}&` +
	    `BBOX=${minX},${minY},${maxX},${maxY}`;

        console.log("Clic en:", e.latlng);
        console.log("URL generada:", url);

        fetch(url)
            .then(response => response.json())  // Cambié a JSON porque pusiste INFO_FORMAT=json
            .then(data => {
                if (!data.features || data.features.length === 0) {
                    console.error("No se encontraron features en la respuesta JSON.");
                    updateModalContent("No se encontraron datos.");
                    return;
                }

                let modalInfo = "";
                const firstFeature = data.features[0];
                let featureContent = "";
                let hasValidData = false;

                for (const key in firstFeature.properties) {
                    if (firstFeature.properties.hasOwnProperty(key)) {
                        const value = firstFeature.properties[key];
                        if (value != null) {
                            featureContent += `<b style='font-size: 12px;'>${key}:</b> <span style='font-size: 12px;'>${value}</span><br>`;
                            hasValidData = true;
                        }
                    }
                }

                if (hasValidData) {
                    modalInfo += `<div style='margin-bottom: 10px;'>${featureContent}</div>`;
                }

                console.log("Actualizando modal con la siguiente información:", modalInfo);
                updateModalContent(modalInfo, "clientes suministro");
            })
            .catch(error => {
                console.error("Error obteniendo la información:", error);
                updateModalContent("Error al obtener datos del servidor.");
            });
    }
});

document.getElementById("inscripSearchBtn").onclick = function() {
  var numero = document.getElementById("inscripInput").value.trim();
  if (!numero) return alert("Introduce un número de inscripción.");

  // Construimos un WFS/GetFeature con filtro CQL para la capa clientes suministro
  var layerName = encodeURIComponent("catastro_huaraz:clientes suministro");
  var cql = encodeURIComponent(INSCRIPCION='${numero}'); 
  var url = `
    https://91f6-2803-a3e0-1956-30c0-a9d7-83fa-8096-28ae.ngrok-free.app/
    geoserver/catastro_huaraz/ows?
    service=WFS&
    version=1.1.0&
    request=GetFeature&
    typeName=${layerName}&
    outputFormat=application/json&
    cql_filter=${cql}
  `.replace(/\s+/g, '');

  fetch(url)
    .then(r => r.json())
    .then(data => {
      if (!data.features || data.features.length === 0) {
        return alert("No se encontró la inscripción especificada.");
      }
      // Si hay geometría, la añadimos y hacemos fitBounds
      var feat = data.features[0];
      var geojson = L.geoJSON(feat, {
        style: { color: "#f00", weight: 3 }
      }).addTo(map);
      map.fitBounds(geojson.getBounds(), { maxZoom: 18 });

      // Cerramos modal
      document.getElementById("searchModal").style.display = "none";
    })
    .catch(err => {
      console.error(err);
      alert("Error en la búsqueda. Revisa la consola.");
    });
};



// Variables para medición
var measuring = false;
var measurementLayer = L.layerGroup().addTo(map);
var measurementPoints = [];
var distancePopups = []; // Para almacenar los popups
var measurementInfoBoxTimeout = null; // Variable para manejar la desaparición del infobox
var temporaryLine = null;

// Crear infobox para mostrar estado de medición
var measurementInfoBox = L.control({ position: "bottomleft" });
var measurementInfoBoxTimeout = null;

measurementInfoBox.onAdd = function (map) {
    this._div = L.DomUtil.create("div", "measurement-box");
    this._div.style.background = "#ffebcd"; // Beige claro
    this._div.style.padding = "8px";
    this._div.style.border = "1px solid black";
    this._div.style.borderRadius = "5px";
    this._div.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.3)";
    this._div.style.display = "none";
    return this._div;
};

measurementInfoBox.addTo(map);

// Función para actualizar el infobox de Medición
function updateMeasurementInfoBox(message) {
    measurementInfoBox._div.innerHTML = `<b>${message}</b>`;
    measurementInfoBox._div.style.display = "block";

    if (measurementInfoBoxTimeout) clearTimeout(measurementInfoBoxTimeout);

    measurementInfoBoxTimeout = setTimeout(() => {
        measurementInfoBox._div.style.display = "none";
    }, 3000);
}

// Función para calcular la distancia entre puntos
function calculateDistance(latlngs) {
    var totalDistance = 0;
    for (var i = 1; i < latlngs.length; i++) {
        totalDistance += latlngs[i - 1].distanceTo(latlngs[i]);
    }
    return totalDistance.toFixed(2); // Devuelve la distancia en metros con 2 decimales
}

// Función para iniciar/terminar la medición
function toggleMeasurement() {
    measuring = !measuring;
    updateMeasurementInfoBox(measuring ? "Medición Activa" : "Medición Desactivada");

    if (!measuring) {
        resetMeasurement(); // Reiniciar cuando se desactiva
    }
}

// Función para resetear la medición
function resetMeasurement() {
    measurementPoints = [];
    measurementLayer.clearLayers();
    distancePopups.forEach(popup => map.closePopup(popup)); // Cierra los popups de distancia
    distancePopups = []; // Vaciar la lista de popups
    if (temporaryLine) {
        map.removeLayer(temporaryLine);
        temporaryLine = null;
    }
}

// Evento de clic izquierdo para medir
map.on("click", function (e) {
    if (measuring && !identityActive) { // Solo mide si Identity está desactivado
        measurementPoints.push(e.latlng);

        // Dibujar un marcador
        L.marker(e.latlng).addTo(measurementLayer);

        // Si hay más de un punto, trazar línea y calcular distancia
        if (measurementPoints.length > 1) {
            var polyline = L.polyline(measurementPoints, { color: "red" }).addTo(measurementLayer);

            // Calcular distancia
            var totalDistance = calculateDistance(measurementPoints);

            // Mostrar la distancia en un popup
            var popup = L.popup()
                .setLatLng(e.latlng)
                .setContent("Distancia: " + totalDistance + " m")
                .openOn(map);

            distancePopups.push(popup); // Guardar el popup para cerrarlo después
        }
    }
});

// Evento de movimiento del mouse para la línea temporal
map.on("mousemove", function (e) {
    if (measuring && measurementPoints.length > 0) {
        if (temporaryLine) {
            map.removeLayer(temporaryLine);
        }
        
        // Dibujar línea temporal desde el último punto hasta el cursor
        temporaryLine = L.polyline([measurementPoints[measurementPoints.length - 1], e.latlng], { color: "blue", dashArray: "5,5" });
        temporaryLine.addTo(map);
    }
});

// Evento de clic derecho para reiniciar la medición y cerrar popups
map.on("contextmenu", function () {
    if (measuring) {
        resetMeasurement();
    }
});

L.Control.ZoomSlider = L.Control.extend({
    onAdd: function(map) {
        var container = L.DomUtil.create("div", "leaflet-bar leaflet-control leaflet-control-zoom");
        container.style.position = "absolute";
        container.style.right = "10px"; // Mover a la parte derecha
        container.style.bottom = "85px"; // Ubicar encima de los botones de zoom
        container.style.padding = "5px";
        container.style.background = "white";
        container.style.border = "1px solid #ccc";
        container.style.borderRadius = "5px";
        container.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.3)";
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.alignItems = "center";

        // Crear el input tipo range (barra deslizante)
        var slider = L.DomUtil.create("input", "zoom-slider", container);
        slider.type = "range";
        slider.min = map.getMinZoom();
        slider.max = map.getMaxZoom();
        slider.value = map.getZoom();
        slider.style.writingMode = "bt-lr"; // Rotación para que sea vertical
        slider.style.appearance = "slider-vertical"; // Para navegadores que lo soportan
        slider.style.width = "8px"; 
        slider.style.height = "120px"; // Tamaño de la barra
        slider.style.cursor = "pointer";

        // Evitar que el mapa se mueva cuando se usa la barra
        L.DomEvent.disableClickPropagation(container);
        L.DomEvent.disableClickPropagation(slider);
        L.DomEvent.on(slider, "mousedown", L.DomEvent.stopPropagation); // No arrastrar el mapa
        L.DomEvent.on(slider, "touchstart", L.DomEvent.stopPropagation); // Evitar scroll en móviles

        // Evento para actualizar el zoom al mover el slider
        L.DomEvent.on(slider, "input", function() {
            map.setZoom(slider.value);
        });

        // Sincronizar el slider cuando el usuario haga zoom manualmente
        map.on("zoomend", function() {
            slider.value = map.getZoom();
        });

        return container;
    }
});

// Agregar la barra de zoom al mapa
//map.addControl(new L.Control.ZoomSlider({ position: "bottomright" }));
