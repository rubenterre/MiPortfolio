
export function Footer(element) {
	  
document.querySelector('#footer').innerHTML = `
        <div class="container">
          <div class="row contacto__detalles">
            <img
              class="contacto__logo"
              src="Ruben_Terre_Logo_blanco_131119.svg"
              alt="Logo de Rubén Terré: Deseño gráfico e web"
            />
           
            <p class="contacto__autor">Rubén Arturo Terré Lameiro</p>
            <a class="contacto__autor" href="https://www.rubenterre.com"
              ><strong>www.rubenterre.com</strong></a
            >
            <div class="contacto__social">
              <a
                class="contacto__a"
                href="https://www.linkedin.com/in/rubenterrelameiro"
                ><img
                  src="icons/social/linkedin-in.svg"
                  srcset="icons/social/linkedin-in.webp"
                  alt="Logo da rede social Linkedin"
              /></a>
              <a class="contacto__a" href="https://www.behance.net/rubenterre"
                ><img
                  src="icons/social/behance.svg"
                  srcset="icons/social/behance.webp"
                  alt="Logo da rede social Behance"
              /></a>
              <a
                class="contacto__a"
                href="https://www.instagram.com/rubenterre.studiodesign/"
                ><img
                  src="icons/social/instagram.svg"
                  srcset="icons/social/instagram.webp"
                  alt="Logo da rede social Instagram"
              /></a>
              <a class="contacto__a" href="https://github.com/rubenterre"
                ><img
                  src="icons/social/github.svg"
                  srcset="icons/social/github.webp"
                  alt="Logo da rede social GitHub"
              /></a>
            </div>
            <a class="contacto__correo" href="mailto:info@rubenterre.com"
              >info[arroba]rubenterre.com</a
            >
          </div>
          
        </div>
      </section>

      <div class="footer__repositorio">
      <p class="footer__p">Hecho con <a class="footer__a" href="https://vitejs.dev/" target="_blank">Vite JS  <svg viewBox="0 0 256 257" width="25" height="25" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><defs><linearGradient x1="-.828%" y1="7.652%" x2="57.636%" y2="78.411%" id="a"><stop stop-color="#41D1FF" offset="0%"/><stop stop-color="#BD34FE" offset="100%"/></linearGradient><linearGradient x1="43.376%" y1="2.242%" x2="50.316%" y2="89.03%" id="b"><stop stop-color="#FFEA83" offset="0%"/><stop stop-color="#FFDD35" offset="8.333%"/><stop stop-color="#FFA800" offset="100%"/></linearGradient></defs><path d="M255.153 37.938 134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z" fill="url(#a)"/><path d="M185.432.063 96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z" fill="url(#b)"/></svg></a></p>
      <p class="footer__p"><img src="https://img.shields.io/badge/ViteJS-%2300C9A7.svg?style=for-the-badge&logo=vite&logoColor=white
" alt="ViteJS">
<img src="https://img.shields.io/badge/SASS-%23CC6699.svg?style=for-the-badge&logo=sass&logoColor=white
" alt="SASS">
<img src="https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black
" alt="JavaScript">
</p>
      <p class="footer__p"><a class="footer__a" target="_blank" href="https://github.com/rubenterre/MiPortfolio">Ver repositorio</a></p>
  </div>    
  <div class="footer__creditos">
      <p class="footer__p">
              Feito con moito <span class="footer__span">agarimo</span> en Santiago de
        Compostela // Rubén Terré // 2017-2024. 
      </p>
    </div>
    `

}

