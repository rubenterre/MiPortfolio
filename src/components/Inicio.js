export function Inicio(element) {
document.querySelector('#inicio').innerHTML = `
	<div class="container">
		<div class="row">
			<div class="col s12 inicio__detalle">
				<img
					class="inicio__img"
					src="images/Ruben_Terre_img.webp"
					width="84px"
					alt="Retrato de Rubén Terré"
				/>
				<h1 class="inicio__h1">Hola, soy Rubén Terré 👋</h1>
				<h1 class="inicio__h1 inicio__h1--subtitulo">Diseño gráfico & web</h1>
				<div class="social">
					<a class="social__a" target="_blank" href="https://github.com/rubenterre"
						><div class="social__card">
							<img
								class="social__icon"
								src="icons/social/github_violeta.svg"
								alt="Github de Rubén Terré"
							/>
							<p class="social__p">Github</p>
						</div></a
					>
					<a class="social__a" target="_blank" href="https://www.linkedin.com/in/rubenterrelameiro/"
						><div class="social__card">
							<img
								class="social__icon"
								src="icons/social/linkedin_violeta.svg"
								alt="Github de Rubén Terré"
							/>
							<p class="social__p">Linkedin</p>
						</div></a
					>
					<a class="social__a" target="_blank" href="mailto:info@rubenterre.com"
						><div class="social__card">
							<img
								class="social__icon"
								src="icons/social/mail_violeta.svg"
								alt="Github de Rubén Terré"
							/>
							<p class="social__p">Email</p>
						</div></a
					>
				</div>

				<div class="perfil">
					<h2 class="perfil__h2">
						Soy Rubén Terré, desarrollador web, diseñador gráfico y docente.
					</h2>
					<p class="perfil__p">
						Como desarrollador web me dedico a ofrecer soluciones digitales a medida. Como diseñador
						gráfico puedo crear experiencias visuales personalizadas. Como docente, comparto mi
						pasión y conocimiento para formar a futuros profesionales. Explora mis proyectos y
						descubre cómo puedo ayudarte a llevar tus ideas al siguiente nivel. ¡Construyamos
						juntos!
					</p>
					<a
						href="Ruben_Arturo_Terre_Lameiro_CV2024.pdf"
						download="Descargar CV de Rubén Terré"
						class="perfil__a"
						><img src="./icons/descargar_icon.svg" alt="Botón de descarga de currículum" />DESCARGAR
						CV</a
					>
				</div>
			</div>
		</div>
	</div>`
}