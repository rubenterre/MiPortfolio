import { proyectos } from '../json/proyectos.json';

export function projects(element) {
	  
    document.querySelector('#projects').innerHTML = `
	<div class="container">
		<div class="row">
			<div class="col s12">
				<div class="main__titulares">
					<h3 class="main__h3">PROYECTOS</h3>
					<p class="main__p">Algunos de mis proyectos</p>
					<div class="main__linea"></div>
				</div>
				<div id="proyectosCards" class="proyectos__cards">
					<template id="proyectos">
						<div class="proyectos__card">
							<div class="proyectos__img hide-on-med-and-down">
								<img
									src="{{banner}}"
									alt="{{name}}"
									class="proyectos__banner"
								/>
							</div>
							<div class="proyectos__detalles">
								<h4 class="proyectos__h4">
									{{name}}
								</h4>
								<p class="proyectos__p">
									{{description}}
								</p>
								<div id="proyectosIcons" class="proyectos__icons">
								{{technologies}}
								</div>
								<a href={{url}} class="proyectos__a">Ver más ></a>
							</div>
						</div>
					</template>
				</div>
				<div class="proyectos__info">
					<a class="proyectos__trabajos waves-effect waves-light btn modal-trigger" href="#modal1">VER MÁS TRABAJOS</a>
				</div>
				<!-- Modal Structure -->
				<div id="modal1" class="proyectos__modal modal">
  					<div class="modal-content">
    					<h4 class="modal__h4">MÁS PROYECTOS</h4>
    					<p class="modal__p">Puedes ver más proyectos en las siguientes plataformas:</p>
						<div class="modal__social">
							<img class="modal__icon" src="/icons/social/Github_modal.svg" srcset="/icons/social/Github_modal.webp" alt="Repositorios de desarrollo en GitHub">
							<img class="modal__icon" src="/icons/social/Behance_modal.svg" srcset="/icons/social/Behance_modal.webp" alt="Porfolio de proyectos en Behance">
						</div>
  					</div>
  					<div class="modal-footer modal__footer">
    				<a href="#!" class="modal__boton modal-close waves-effect btn-flat">Volver</a>
  					</div>
				</div>
			</div>
		</div>
	</div>
    `
	document.addEventListener('DOMContentLoaded', function() {
		var elems = document.querySelectorAll('.modal');
		var instances = M.Modal.init(elems, {
		  // specify options here
		});
	  });

    // Habilidades de proyectos

	const proyectosJSON = proyectos;
	console.log(proyectosJSON)
	  
	  const templateProjetcs = document.getElementById('proyectos');
	  const contenedorProyectos = document.querySelector('#proyectosCards');

	  proyectosJSON.forEach(proyectos => {
		const clon = templateProjetcs.content.cloneNode(true);
	  
		clon.querySelector('.proyectos__banner').src = proyectos.banner;
		clon.querySelector('.proyectos__banner').alt = proyectos.name;
		clon.querySelector('.proyectos__h4').textContent = proyectos.name;
		clon.querySelector('.proyectos__p').textContent = proyectos.description;
		clon.querySelector('.proyectos__a').href = proyectos.url;
		clon.querySelector('.proyectos__icons').innerHTML = proyectos.technologies;
		contenedorProyectos.appendChild(clon);
	  });

}
