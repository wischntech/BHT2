import React from "react";

import Layout from "../components/Layout";
import BlogRollProjects from "../components/BlogRollProjects";

export default class ProjektePage extends React.Component {
	render() {
		return (
			<Layout>
				<section className='section'>
					<div className='container' style={{}}>
						<div className='content'>
							<h1
								className='has-text-centered'
								style={{
									padding: "1rem",
								}}
							>
								Referenzen
							</h1>
							<p className='has-text-centered'>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
								ea explicabo minima libero. Possimus maxime eligendi fugiat
								voluptatem ipsa, asperiores laudantium harum recusandae illo
								illum nobis velit nihil inventore tenetur vitae incidunt nam
								cupiditate. Rerum magnam, veniam consequuntur officia, voluptate
								reiciendis fuga ipsum voluptates harum odit aperiam nostrum,
								dolore ab? Eius repellendus fuga maiores, nostrum iusto incidunt
								sit qui eum ut distinctio eveniet consequuntur commodi id soluta
								earum, dignissimos vel maxime velit saepe hic architecto nisi
								vitae. Eos, est odio amet beatae at, iusto ex facere ut eligendi
								nostrum temporibus voluptates cumque voluptatibus? Atque, alias
								culpa molestiae ipsam possimus consectetur?
							</p>
						</div>
					</div>
				</section>
				<section className='section'>
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
