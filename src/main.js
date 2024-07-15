import './styles/custom_materialize.scss'
import './styles/style.scss'

import { header } from './components/header.js'
import { inicio } from './components/inicio.js'
import { habilidades } from './components/habilidades.js'
import { projects } from './components/projects.js'
import { experiencias } from './components/experiencia.js'
import { formaciones } from './components/formacion.js'
import { footer } from './components/footer.js'
import { noticias } from './components/noticias.js'
import { sidenav } from './components/sidenav.js'
import { uptotop } from './components/uptotop.js'

document.querySelector('#app').innerHTML = `
<header id="header" class="header">
</header>
<section id="inicio" class="inicio">
</section>
<section id="habilidades" class="habilidades">
</section>
<section id="projects" class="proyectos">
</section>
<section id="experiencia" class="experiencia">
</section>
<section id="formacion" class="formacion">
</section>
<section id="noticias" class="noticias">
</section>
<footer id="footer" class="footer">
</footer>
<div id="uptotop" class="uptotop"></div>
`
inicio(document.querySelector('#inicio'))
header(document.querySelector('#header'))
habilidades(document.querySelector('#habilidades'))
projects(document.querySelector('#projects'))
experiencias(document.querySelector('#experiencia'))
formaciones(document.querySelector('#formacion'))
noticias(document.querySelector('#noticias'))
footer(document.querySelector('#footer'))
uptotop(document.querySelector('#uptotop'))

sidenav()
