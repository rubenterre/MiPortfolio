import { experiencia } from '../json/experiencia.json';

export function Experiencias(element) {
    document.querySelector('#experiencia').innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col s12">
                <div class="main__titulares">
                    <h3 class="main__h3">EXPERIENCIA</h3>
                    <p class="main__p">Estos son algunas de mis experiencias profesionales</p>
                    <div class="main__linea"></div>
                </div>
                <div id="experienciaCards" class="experiencia__cards">
                    <template id="experiences">
                        <div class="experiencia__card">
                            <div class="experiencia__logo">
                                <img
                                    src="{{icon}}"
                                    alt="{{name}}"
                                    class="experiencia__icon"
                                />
                            </div>
                            <div class="experiencia__detalle">
                                <h3 class="experiencia__h3">
                                    {{name}}
                                </h3>
                                <p class="experiencia__profesion">
                                    {{profession}}
                                </p>
                                <p class="experiencia__fecha">
                                    {{date}}
                                </p>
                                <p class="experiencia__p">
                                    {{description}}
                                </p>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
    `;

    // Habilidades de experiencias
    const experienciaJSON = experiencia;
    console.log(experienciaJSON);
    
    const templateExperiencia = document.getElementById('experiences');
    const contenedorExperiencia = document.querySelector('#experienciaCards');
    
    experienciaJSON.forEach(experiencias => {
		
        const clon = templateExperiencia.content.cloneNode(true);
        
        clon.querySelector('.experiencia__icon').src = experiencias.icon;
        clon.querySelector('.experiencia__icon').alt = experiencias.name;
        clon.querySelector('.experiencia__h3').textContent = experiencias.name;
        clon.querySelector('.experiencia__profesion').textContent = experiencias.profession;
        clon.querySelector('.experiencia__fecha').textContent = experiencias.date;
        clon.querySelector('.experiencia__p').textContent = experiencias.description;

        contenedorExperiencia.appendChild(clon);
    });
}
