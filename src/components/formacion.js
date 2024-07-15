import { formacion } from '../json/formacion.json';

export function formaciones(element) {
    document.querySelector('#formacion').innerHTML = `
    <div class="container">
		<div class="row">
			<div class="col s12">
				<div class="main__titulares">
					<h3 class="main__h3">FORMACIÓN</h3>
					<p class="main__p">Estos son mis estudios y otras formaciones complementarias</p>
					<div class="main__linea"></div>
				</div>
				<div id="formacionCards" class="formacion__cards">
					<template id="formation">
						<div class="formacion__card">
							<div class="formacion__logo">
								<img
									src="{{icon}}.svg"
									alt={{name}}
									class="formacion__icon"
								/>
							</div>
							<div class="formacion__detalle">
								<h3 class="formacion__h3">
									{{name}}
								</h3>
								<p class="formacion__profesion">
									{{institution}}
								</p>
								<p class="formacion__fecha">
									{{date}}
								</p>

							</div>
						</div>
					</template>
				</div>
			</div>
		</div>
	</div>
    `;

    // Formacion
    const formacionJSON = formacion;
    console.log(formacionJSON);
    
    const templateFormacion = document.getElementById('formation');
    const contenedorFormacion = document.querySelector('#formacionCards');
    
    formacionJSON.forEach(formacion => {
		
        const clon = templateFormacion.content.cloneNode(true);
        
        clon.querySelector('.formacion__icon').src = formacion.icon;
        clon.querySelector('.formacion__icon').alt = formacion.name;
        clon.querySelector('.formacion__h3').textContent = formacion.name;
        clon.querySelector('.formacion__profesion').textContent = formacion.institution;
        clon.querySelector('.formacion__fecha').textContent = formacion.date;
     

        contenedorFormacion.appendChild(clon);
    });
}
