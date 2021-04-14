import React from "react";
import Layout from "../../components/Layout";
import { StaticQuery, graphql, Link, withPrefix } from "gatsby";
import BlogRollKaelte from "../../components/BlogRollKaelte";
import kaeltestrich from "../../img/strich/kaeltekli.svg";
import kaelteicon from "../../img/icons/kaelte.svg";
import Img from "gatsby-image";

const KaeltePage = ({}) => {
	const kaelte = withPrefix("../../img/anlage.png");
	return (
		<Layout>
			<div
				className='full-width-image-container margin-top-0'
				style={{
					backgroundImage: `url(${kaelte})`,
					backgroundPosition: `top right`,
					padding: "10% 0",
				}}
			>
				<div
					style={{
						backgroundColor: "white",
						color: "black",
						padding: "1.5%",
						textAlign: "center",

						borderRadius: "5px",
					}}
				>
					<img
						src={kaelteicon}
						style={{
							width: "50px",
							height: "auto",
							margin: "auto",
						}}
						alt='Strichmännchen mit Kältesymbol'
					/>

					<h1 className='' style={{}}>
						Kältetechnik
					</h1>
				</div>
			</div>
			<section className='section'>
				<div className='container'>
					<div className='content'>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
							unde eius labore veritatis sapiente dicta eos doloremque, sequi
							eaque, molestiae iusto? Enim a officiis atque cupiditate sequi
							suscipit autem doloremque modi aperiam recusandae nobis animi
							facilis veniam tempora unde quasi quas aliquam, eligendi
							necessitatibus quod magni, assumenda cum iusto. Deserunt itaque
							molestiae maxime nihil corporis inventore quisquam voluptate
							dignissimos perspiciatis eius non ea consequuntur, possimus
							laudantium. Atque ut maxime eos culpa a deleniti sed ullam cum
							cupiditate, corporis est doloremque! Molestias repellat doloribus
							corporis aut adipisci est labore quidem? Dolore ad ipsam aut ipsum
							est dolores aliquid harum deserunt eos.
						</p>
					</div>
					<div style={{ paddingBottom: "8%" }}>
						<img
							src={kaeltestrich}
							style={{
								width: "200px",
								height: "auto",
								margin: "15px",

								float: "right",
							}}
							alt='Strichmännchen mit Kältesymbol'
						/>
					</div>
				</div>
			</section>

			<section style={{ backgroundColor: "#c9d75a", padding: "4% 2%" }}>
				<div style={{ height: "100%", width: "auto" }}></div>
				<div className='container'>
					<h2 style={{ padding: "2%" }}>Leistungsarten</h2>
					<div className='columns is-4'>
						<div
							className='column'
							style={{
								padding: "2%",
								margin: "2%",
								boxShadow: "0 0 4px 2px #bbcd32",
								WebkitBoxShadow: "0 0 6px 4px #bbcd32",
								backgroundColor: "#fff",
								borderRadius: "5px",
							}}
						>
							<h3>Leistung 1</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Pariatur impedit assumenda recusandae? Obcaecati dolorum unde ab
								sit maiores nemo nobis quidem. Maiores ab voluptate doloribus
								delectus. Sequi omnis cum est.
							</p>
						</div>
						<div
							className='column '
							style={{
								padding: "2%",
								margin: "2%",
								boxShadow: "0 0 4px 2px #bbcd32",
								WebkitBoxShadow: "0 0 4px 2px #bbcd32",
								backgroundColor: "#fff",
								borderRadius: "5px",
							}}
						>
							<h3>Leistung 2</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Pariatur impedit assumenda recusandae? Obcaecati dolorum unde ab
								sit maiores nemo nobis quidem. Maiores ab voluptate doloribus
								delectus. Sequi omnis cum est.
							</p>
						</div>
						<div
							className='column'
							style={{
								padding: "2%",
								margin: "2%",
								boxShadow: "0 0 4px 2px #bbcd32",
								WebkitBoxShadow: "0 0 4px 2px #bbcd32",
								backgroundColor: "#fff",
								borderRadius: "5px",
							}}
						>
							<h3>Leistung 3</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Pariatur impedit assumenda recusandae? Obcaecati dolorum unde ab
								sit maiores nemo nobis quidem. Maiores ab voluptate doloribus
								delectus. Sequi omnis cum est.
							</p>
						</div>
					</div>
					<div className='columns is-4'>
						<div
							className='column'
							style={{
								padding: "2%",
								margin: "2%",
								boxShadow: "0 0 4px 2px #bbcd32",
								WebkitBoxShadow: "0 0 4px 2px #bbcd32",
								backgroundColor: "#fff",
								borderRadius: "5px",
							}}
						>
							<h3>Leistung 4</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Pariatur impedit assumenda recusandae? Obcaecati dolorum unde ab
								sit maiores nemo nobis quidem. Maiores ab voluptate doloribus
								delectus. Sequi omnis cum est.
							</p>
						</div>
						<div
							className='column '
							style={{
								padding: "2%",
								margin: "2%",
								boxShadow: "0 0 4px 2px #bbcd32",
								WebkitBoxShadow: "0 0 4px 2px #bbcd32",
								backgroundColor: "#fff",
								borderRadius: "5px",
							}}
						>
							<h3>Leistung 5</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Pariatur impedit assumenda recusandae? Obcaecati dolorum unde ab
								sit maiores nemo nobis quidem. Maiores ab voluptate doloribus
								delectus. Sequi omnis cum est.
							</p>
						</div>
						<div
							className='column'
							style={{
								padding: "2%",
								margin: "2%",
								boxShadow: "0 0 4px 2px #bbcd32",
								WebkitBoxShadow: "0 0 4px 2px #bbcd32",
								backgroundColor: "#fff",
								borderRadius: "5px",
							}}
						>
							<h3>Leistung 6</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Pariatur impedit assumenda recusandae? Obcaecati dolorum unde ab
								sit maiores nemo nobis quidem. Maiores ab voluptate doloribus
								delectus. Sequi omnis cum est.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className='container' style={{ padding: "3% 0" }}>
					<h3 className='has-text-left has-text-weight-semibold is-size-3'>
						Referenzprojekte
					</h3>
					<p>
						Haben wir Ihr Interesse geweckt? Dann schauen Sie gerne in unseren
						Referenzprojekten vorbei.
					</p>

					<br />
					<BlogRollKaelte />
				</div>
			</section>
		</Layout>
	);
};

const kaelteQuery = graphql`
	query {
		anlage: file(relativePath: { eq: "anlage.png" }) {
			childImageSharp {
				fluid(maxWidth: 2048) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

export default () => (
	<StaticQuery
		query={kaelteQuery}
		render={(data) => <KaeltePage data={data} />}
	/>
);
