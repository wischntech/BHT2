import React from "react";
import Layout from "../../components/Layout";
import { Link } from "gatsby";
import BlogRoll from "../../components/BlogRollSanitaer";
import strich from "../../img/strich/sanitaer.svg";
import back from "../../img/icons/wave1.svg";
import back1 from "../../img/back/bathroom.jpg";
import Fade from "react-reveal/Fade";
import thumbs from "../../img/back/thumbs.jpg";

export default () => (
	<Layout>
		<div
			className=''
			style={{
				backgroundColor: "#0000ff",
				backgroundImage: `url(${back1})`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: `center right`,
				backgroundSize: "100%",
				height: "300px",
				boxShadow: "inset 0px 0px 25px 3px black",
				position: "relative",
			}}
		></div>

		<section
			className='section'
			style={{
				padding: "5% 2% 13% 2%",
				backgroundImage: `url(${back})`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: `bottom right`,
				backgroundSize: "100%",
				marginBottom: "-10%",
				position: "relative",
			}}
		>
			<div className='container'>
				<div className='content' style={{ textAlign: "left" }}>
					<Fade bottom duration={1500}>
						<h2>Sanitäranlagen </h2>
						<p style={{ paddingBottom: "3%" }}>
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
					</Fade>
					<Fade bottom duration={1500} delay={500}>
						<Link
							className='btn bl is-clickable '
							to='/kontakt/'
							style={{ marginLeft: "20%" }}
						>
							Kontaktieren Sie uns.
						</Link>
					</Fade>
				</div>
				<div
					style={{ paddingBottom: "20%", zIndex: "100", position: "relative" }}
				>
					<img
						src={strich}
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

		<div
			style={{
				padding: "5% 0 5%",
				zIndex: "5",
				position: "relative",
				backgroundColor: "#c9d75a",
			}}
		>
			<section>
				<div className='container' style={{ padding: "0 2%" }}>
					<Fade duration={1500}>
						<h2>Leistungsarten</h2>
					</Fade>
					<Fade left cascade duration={1500}>
						<div className='columns is-4'>
							<div
								className='column beweg'
								style={{
									padding: "2%",
									margin: "2%",

									borderRadius: "5px",
								}}
							>
								<h4 className='has-text-weight-semibold'>Leistung 1</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Pariatur impedit assumenda recusandae? Obcaecati dolorum unde
									ab sit maiores nemo nobis quidem. Maiores ab voluptate
									doloribus delectus. Sequi omnis cum est.
								</p>
							</div>
							<div
								className='column beweg '
								style={{
									padding: "2%",
									margin: "2%",

									borderRadius: "5px",
								}}
							>
								<h4 className='has-text-weight-bold' style={{}}>
									Leistung 2
								</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Pariatur impedit assumenda recusandae? Obcaecati dolorum unde
									ab sit maiores nemo nobis quidem. Maiores ab voluptate
									doloribus delectus. Sequi omnis cum est.
								</p>
							</div>
							<div
								className='column beweg'
								style={{
									padding: "2%",
									margin: "2%",

									borderRadius: "5px",
								}}
							>
								<h4 className='has-text-weight-bold' style={{}}>
									Leistung 3
								</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Pariatur impedit assumenda recusandae? Obcaecati dolorum unde
									ab sit maiores nemo nobis quidem. Maiores ab voluptate
									doloribus delectus. Sequi omnis cum est.
								</p>
							</div>
						</div>
						<div className='columns is-4'>
							<div
								className='column beweg'
								style={{
									padding: "2%",
									margin: "2%",
								}}
							>
								<h4 className='has-text-weight-bold' style={{}}>
									Leistung 4
								</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Pariatur impedit assumenda recusandae? Obcaecati dolorum unde
									ab sit maiores nemo nobis quidem. Maiores ab voluptate
									doloribus delectus. Sequi omnis cum est.
								</p>
							</div>
							<div
								className='column beweg '
								style={{
									padding: "2%",
									margin: "2%",
								}}
							>
								<h4 className='has-text-weight-bold' style={{}}>
									Leistung 5
								</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Pariatur impedit assumenda recusandae? Obcaecati dolorum unde
									ab sit maiores nemo nobis quidem. Maiores ab voluptate
									doloribus delectus. Sequi omnis cum est.
								</p>
							</div>
							<div
								className='column beweg'
								style={{
									padding: "2%",
									margin: "2%",
								}}
							>
								<h4 className='has-text-weight-bold' style={{}}>
									Leistung 6
								</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Pariatur impedit assumenda recusandae? Obcaecati dolorum unde
									ab sit maiores nemo nobis quidem. Maiores ab voluptate
									doloribus delectus. Sequi omnis cum est.
								</p>
							</div>
						</div>
					</Fade>
				</div>
			</section>
		</div>
		<section
			style={{
				backgroundColor: "black",
				marginTop: "-15%",
				padding: "15% 0",
				zIndex: "2",
				position: "relative",
			}}
		>
			<div
				className='container'
				style={{
					padding: "5% 2%",
					color: "#fff",
				}}
			>
				<h3 className='has-bold-text'>Referenzprojekte</h3>
				<p style={{ paddingBottom: "2%" }}>
					Haben wir Ihr Interesse geweckt? Dann schauen Sie gerne in unseren
					Referenzprojekten vorbei.
				</p>

				<br />
				<BlogRoll />
			</div>
		</section>
		<Fade bottom duration={1500} delay={500}>
			<section className='section' style={{ padding: "5%" }}>
				<div
					className='columns'
					style={{
						margin: "auto",
						boxShadow: " 0 0 4px 2px #f2f2f2",
						webkitBoxShadow: "0 0 4px 2px #f2f2f2 !important",
						padding: "3%",
						textAlign: "left",
						backgroundColor: "",
					}}
				>
					<div className='column'>
						<img
							src={thumbs}
							style={{
								zIndex: "9 !important",
							}}
							alt='Strichmännchen mit Kältesymbol'
						/>
					</div>
					<div className='column is-8' style={{}}>
						<h3
							className='has-text-weight-bold'
							style={{ paddingBottom: "1%" }}
						>
							Alle Leistungen
						</h3>
						<p style={{ paddingBottom: "3%" }}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
							facere, distinctio culpa temporibus, dolorum perferendis modi
							numquam praesentium atque libero, minus repellat in similique
							provident ullam quos hic labore deserunt nobis maxime veritatis!
							Dicta modi aspernatur inventore perferendis itaque incidunt sit,
							blanditiis impedit, totam fugit corrupti molestias, beatae harum
							recusandae.
						</p>

						<Link className='btn bl is-clickable' to='/leistungen/'>
							Übersicht
						</Link>
					</div>
				</div>
			</section>
		</Fade>
	</Layout>
);
