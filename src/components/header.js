
export function Header(element) {
	  
    document.querySelector('#header').innerHTML = `
<div class="container">
<div class="navbar-fixed">
<nav class="header__nav">
    <div class="nav-wrapper header__wrapper">
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><img src="/icons/menu_icon.svg" alt="Menú de secciones" /></a>
        <ul id="nav-mobile" class="menu left hide-on-med-and-down">
            <li class="menu__li"><a class="menu__a"  href="#habilidades">HABILIDADES</a></li>
            <li class="menu__li"><a class="menu__a"  href="#trabajos">PROYECTOS</a></li>
        </ul>
        <a href="/index.html" class="brand-logo center"
            ><img src="Ruben_Terre_Logo_blanco_131119.svg" alt="Logo oficial de Rubén Terré" /></a
        >
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li class="menu__li"><a  class="menu__a" href="#experiencia">EXPERIENCIA</a></li>
            <li class="menu__li"><a class="menu__a"  href="#formacion">FORMACIÓN</a></li>
        </ul>
    </div>
</nav>
</div>

    <ul class="sidenav" id="mobile-demo">
  <li>
    <div class="user-view">
    <a href="#user"><img src="Ruben_Terre_Logo_blanco_131119.svg"></a>
    </div>
  </li>
        <li class="sidenav__li"><a class="sidenav__a" href="#habilidades">HABILIDADES</a></li>
        <li class="sidenav__li"><a class="sidenav__a" href="#trabajos">PROYECTOS</a></li>
        <li class="sidenav__li"><a class="sidenav__a" href="#experiencia">EXPERIENCIA</a></li>
        <li class="sidenav__li"><a class="sidenav__a" href="#formacion">FORMACIÓN</a></li>
    </ul>

</div>`
}