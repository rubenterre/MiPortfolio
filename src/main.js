import './styles/custom_materialize.scss'
import './styles/style.scss'

import { sidenav } from './components/sidenav.js'
import { inicio } from './components/inicio.js'
import { habilidades } from './components/habilidades.js'
import { projects } from './components/projects.js'
import { experiencias } from './components/experiencia.js'
import { formaciones } from './components/formacion.js'
import { footer } from './components/footer.js'
import { noticias } from './components/noticias.js'

sidenav()

document.querySelector('#app').innerHTML = `
  <div class="container">
	<nav>
		<div class="nav-wrapper">
    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><img src="/icons/menu_icon.svg" alt="Menú de secciones" /></a>
			<ul id="nav-mobile" class="menu left hide-on-med-and-down">
				<li class="menu__li"><a class="menu__a"  href="#habilidades">HABILIDADES</a></li>
				<li class="menu__li"><a class="menu__a"  href="#proyectos">PROYECTOS</a></li>
			</ul>
			<a href="https://rubenterre.com" class="brand-logo center"
				><img src="Ruben_Terre_Logo_blanco_131119.svg" alt="Logo oficial de Rubén Terré" /></a
			>
			<ul id="nav-mobile" class="right hide-on-med-and-down">
				<li class="menu__li"><a  class="menu__a" href="#experiencia">EXPERIENCIA</a></li>
				<li class="menu__li"><a class="menu__a"  href="#formacion">FORMACIÓN</a></li>
			</ul>
		</div>
	</nav>

		<ul class="sidenav" id="mobile-demo">
      <li>
        <div class="user-view">
        <a href="#user"><img src="Ruben_Terre_Logo_blanco_131119.svg"></a>
        </div>
      </li>
			<li class="sidenav__li"><a class="sidenav__a" href="#habilidades">HABILIDADES</a></li>
			<li class="sidenav__li"><a class="sidenav__a" href="#proyectos">PROYECTOS</a></li>
			<li class="sidenav__li"><a class="sidenav__a" href="#experiencia">EXPERIENCIA</a></li>
			<li class="sidenav__li"><a class="sidenav__a" href="#formacion">FORMACIÓN</a></li>
		</ul>
	
</div>
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
`
inicio(document.querySelector('#inicio'))
habilidades(document.querySelector('#habilidades'))
projects(document.querySelector('#projects'))
experiencias(document.querySelector('#experiencia'))
formaciones(document.querySelector('#formacion'))
noticias(document.querySelector('#noticias'))
footer(document.querySelector('#footer'))