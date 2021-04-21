import React from "react";
import wave from "../img/icons/waveup.svg";

import Layout from "../components/Layout";
import BlogRollProjects from "../components/BlogRollProjects";

export default class ProjektePage extends React.Component {
	render() {
		return (
			<Layout>
				<section className='section'>
					<div
						className='container'
						style={{
							padding: "2% 4% 0 4%",
						}}
					>
						<div className='content'>
							<h2 className='title is-size-3 has-text-weight-bold is-bold-light'>
								Referenzen
							</h2>
							<h3 className=''>Projekte, auf die wir stolz sind.</h3>

							<p className=''>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
								Velit ea explicabo minima libero. Possimus maxime eligendi
								fugiat voluptatem ipsa, asperiores laudantium harum recusandae
								illo illum nobis velit nihil inventore tenetur vitae incidunt
								nam cupiditate. Rerum magnam, veniam consequuntur officia,
								voluptate reiciendis fuga ipsum voluptates harum odit aperiam
								nostrum, dolore ab? Eius repellendus fuga maiores, nostrum iusto
								incidunt sit qui eum ut distinctio eveniet consequuntur commodi
								id soluta earum, dignissimos vel maxime velit saepe hic
								architecto nisi vitae. Eos, est odio amet beatae at, iusto ex
								facere ut eligendi nostrum temporibus voluptates cumque
								voluptatibus? Atque, alias culpa molestiae ipsam possimus
								consectetur?
							</p>
						</div>
					</div>
				</section>
				<div
					className=''
					style={{
						padding: "0% 0 20% 0",
						backgroundImage: `url(${wave})`,
						backgroundRepeat: "no-repeat",
						backgroundPosition: `bottom right`,
						backgroundSize: "100%",

						position: "relative",
					}}
				></div>
				<section
					className='section'
					style={{ backgroundColor: "#c9d75a", marginTop: "-8%" }}
				>
					<div className='container'>
						<div className='content'>
							<BlogRollProjects />
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}
