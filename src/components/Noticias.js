import { novedades } from '../json/news.json';

export function Noticias(element) {

	document.querySelector('#noticias').innerHTML = `
    <div class="container">
		<div class="row">
			<div class="col s12">
				<div class="main__titulares">
					<h3 class="main__h3">NOTICIAS</h3>
					<p class="main__p">Noticias, eventos, presentaciones...</p>
					<div class="main__linea"></div>
				</div>
        
            <div id="noticiasCards" class="noticias__cards">
                <template id="blog">
                    <div class="noticias__card">
                        <div class="noticias__imagen">
                            <img class="noticias__img" src="{{img}}" alt="icono" />
                        </div>
                        <div class="noticias__detalles">
                            <h4 class="noticias__h4">
                                {{title}}
                            </h4>
                            <p class="noticias__fecha">
                                {{date}}
                            </p>
                            <p class="noticias__descripcion">
                                {{description}}
                            </p>
                        </div>
                        <div class="noticias__info">
                                <a href="{{url}}" target="_blank" class="noticias__a">Ver más</a>
                        </div>
                    </div>
                </template>
            </div>
            	<div class="proyectos__info">
					<a href="https://www.linkedin.com/in/rubenterrelameiro/recent-activity/all/" target="_blank" class="proyectos__trabajos">VER MÁS EN LINKEDIN</a>
				</div>
            </div>
        </div>
    </div>    
    `

    // Noticias

	const noticiasJSON = novedades;
	console.log(noticiasJSON)

	const templateNovedades = document.getElementById('blog');
	const contenedorNovedades = document.querySelector('#noticiasCards');

    for (let i = 0; i < Math.min(noticiasJSON.length, 3); i++) {
        const novedades = noticiasJSON[i];
        const clon = templateNovedades.content.cloneNode(true);

        clon.querySelector('.noticias__img').src = novedades.img;
        clon.querySelector('.noticias__img').alt = novedades.title;
        clon.querySelector('.noticias__h4').textContent = novedades.title;
        clon.querySelector('.noticias__fecha').textContent = novedades.date;
        clon.querySelector('.noticias__descripcion').textContent = novedades.description;
        clon.querySelector('.noticias__a').href = novedades.url;

        contenedorNovedades.appendChild(clon);
    }

}