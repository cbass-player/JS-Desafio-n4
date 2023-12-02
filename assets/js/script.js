import propVenta from './data/propiedades_venta.js';
import propAlquiler from './data/propiedades_alquier.js';

const mostrarProp = (props, containerId) => {
    const container = document.getElementById(containerId);

    // Filtro de los tres casos
    const propVentaLimitados = props.slice(0, 3);


    propVentaLimitados.forEach((prop) => {
        const card = document.createElement("div");
        card.className = "col-md-4 mb-4";

        // Definición del template de cada Card
        const cardContent = `
        <div class="card">
        <img src=${prop.src} class="card-img-top" alt=${prop.ID} />
        <div class="card-body">
          <h5 class="card-title">
            ${prop.nombre}
          </h5>
          <p class="card-text">
            ${prop.descripcion}
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones |
            <i class="fas fa-bath"></i>  ${prop.baños} Baños
          </p>
          <p><i class="fas fa-dollar-sign"></i> ${Intl.NumberFormat("de-DE").format(prop.costo)}</p>
          <p class=${prop.smoke? 'text-success' : 'text-danger'}>
            <i class="fas ${prop.smoke? 'fa-smoking':'fa-smoking-ban'} "></i> ${prop.smoke ? 'Permitido fumar' : 'No se permite fumar'}
          </p>
          <p class=${prop.pets? 'text-success' : 'text-danger'}>
            <i class=" fas ${prop.pets? 'fa-paw':'fa-ban'}"></i> ${prop.pets ? 'Mascotas permitidas' : 'No se permiten mascotasr'}
          </p>
        </div>
      </div>`;
      card.innerHTML = cardContent; // Se asigna el cotenido a la tarjeta, la cual es un div.
      container.appendChild(card); //Se asigna al elemento leido desde el HTML (container) la tarjeta con su contenido y clases de bootstrap
    });
};

mostrarProp(propVenta, 'venta-row');
mostrarProp(propAlquiler, 'alquiler-row');


