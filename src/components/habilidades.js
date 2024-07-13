import { desarrollo } from '../desarrollo.json';
import { design } from '../design.json';

export function habilidades(element) {
	  
document.querySelector('#habilidades').innerHTML = `
<div class="container">
		<div class="row">
			<div class="col s12">
				<div class="main__titulares">
					<h3 class="main__h3">HABILIDADES</h3>
					<p class="main__p">Algunas de mis habilidades más destacadas</p>
					<div class="main__linea"></div>
				</div>
				<div class="habilidades__sections">
					<h3 class="habilidades__h3">Desarrollo web</h3>
					<div id="habilidadesCards" class="habilidades__cards">
					<template id="desarrolloHabilidades">
				<div class="habilidades__card">
				<img
					class="habilidades__icon"
					src="{{ icon }}"
					alt="{{ name }}"
				/>
			    <h4 class="habilidades__h4">{{ name }}</h4>
		        </div>
				</template>
					</div>
					<h3 class="habilidades__h3">Diseño gráfico</h3>
					<div id="habilidadesCardsDesign" class="habilidades__cards">
					<template id="designHabilidades">
				<div class="habilidades__card">
				<img
					class="habilidades__icon"
					src="icons/skills/{{ icon }}.svg"
					alt="{{ name }}"
				/>
			    <h4 class="habilidades__h4">{{ name }}</h4>
		        </div>
				</template>
					</div>
				</div>
			</div>
		</div>
	</div>
    `
// Habilidades de desarrollo

	const desarrolloJSON = desarrollo;
	console.log(desarrolloJSON)
	  
	  const template = document.getElementById('desarrolloHabilidades');
	  const contenedorHabilidades = document.querySelector('#habilidadesCards');
	  
	  desarrolloJSON.forEach(desarrollo => {
		const clon = template.content.cloneNode(true);
	  
		clon.querySelector('.habilidades__icon').src = desarrollo.icon;
		clon.querySelector('.habilidades__icon').alt = desarrollo.name;
		clon.querySelector('.habilidades__h4').textContent = desarrollo.name;
	  
		contenedorHabilidades.appendChild(clon);
	  });

	  //Habilidades de diseño

	  const designJSON = design;
	  console.log(designJSON)
		
		const templateDesign = document.getElementById('designHabilidades');
		const contenedorDesign = document.querySelector('#habilidadesCardsDesign');
		
		designJSON.forEach(design => {
		  const clon = templateDesign.content.cloneNode(true);
		
	  
		  clon.querySelector('.habilidades__icon').src = design.icon;
		  clon.querySelector('.habilidades__icon').alt = design.name;
		  clon.querySelector('.habilidades__h4').textContent = design.name;
		
		  contenedorDesign.appendChild(clon);
		});
}

