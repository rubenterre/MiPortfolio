import './styles/custom_materialize.scss'
import './styles/style.scss'

import { Header } from './components/Header.js'
import { Inicio } from './components/Inicio.js'
import { Habilidades } from './components/Habilidades.js'
import { Projects } from './components/Projects.js'
import { Experiencias } from './components/Experiencia.js'
import { Formaciones } from './components/Formacion.js'
import { Footer } from './components/Footer.js'
import { Noticias } from './components/Noticias.js'
import { sidenav } from './components/sidenav.js'
import { Uptotop } from './components/Uptotop.js'

M.AutoInit();

document.querySelector('#app').innerHTML = `
<header id="header" class="header">
</header>
<section id="inicio" class="inicio">
</section>
<section id="habilidades" class="habilidades">
</section>
<section id="trabajos" class="proyectos">
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
Inicio(document.querySelector('#inicio'))
Header(document.querySelector('#header'))
Habilidades(document.querySelector('#habilidades'))
Projects(document.querySelector('#trabajos'))
Experiencias(document.querySelector('#experiencia'))
Formaciones(document.querySelector('#formacion'))
Noticias(document.querySelector('#noticias'))
Footer(document.querySelector('#footer'))
Uptotop(document.querySelector('#uptotop'))

sidenav()