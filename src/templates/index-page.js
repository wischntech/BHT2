import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import back1 from "../img/icons/wave1.svg";
import wave2 from "../img/icons/wavered.svg";
import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRollProjects from "../components/BlogRollProjects";
import BlogRollJobs from "../components/BlogRollJobs";
import Fade from "react-reveal/Fade";

export const IndexPageTemplate = ({
	image,
	title,
	mainpitch,
	description,
	blurbs,
}) => (
	<div>
		<div
			style={{
				backgroundImage: `url(${back1})`,
				backgroundPosition: `bottom right`,
				backgroundSize: "100%",
				backgroundRepeat: "no-repeat",
				marginBottom: "-15%",
				paddingBottom: "5%",
				zIndex: "5",
				position: "relative",
			}}
		>
			<section className=''>
				<div
					className='container'
					style={{
						lineHeight: "1",
						justifyContent: "space-around",
						alignItems: "left",
						flexDirection: "column",
					}}
				>
					<Fade top duration={1500}>
						<h1
							className='has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen'
							style={{
								color: "black",

								padding: "4% 0 10px 0",
							}}
						>
							{title}
						</h1>

						<h3 className='subtitle'>{mainpitch.description}</h3>
					</Fade>
					<Fade right delay={500} duration={1500}>
						<div
							className='column is-12 has-text-centered'
							style={{ margin: "0% 0 0 0" }}
						>
							<Link className='btn bl is-clickable' to='/leistungen'>
								Erfahren Sie mehr.
							</Link>
						</div>
					</Fade>
				</div>
			</section>
			<div
				title=' Zwei Strichmännchen. Eins ist ein sich fragender Kunde, der Hilfe benötigt. Auf der anderen Seite ein Jonglierender Berger, 
			der mit allen Leistungen in Form von Bällen jongliert.'
				style={{
					backgroundImage: `url(${
						image.childImageSharp ? image.childImageSharp.fluid.src : image
					})`,
					backgroundPosition: `bottom right`,
					backgroundPositionX: "75%",
					backgroundPositionY: "0%",
					height: "600px",
					backgroundRepeat: "no-repeat",
					position: "relative",
					zIndex: "5",
				}}
			></div>
		</div>
		<section
			className='section'
			style={{
				backgroundColor: "black",
				position: "relative",
				zIndex: "4",

				paddingBottom: "20%",
			}}
		>
			<div className='container '>
				<div className='section'>
					<div className='columns'>
						<div
							className='column is-10 is-offset-1'
							style={{ color: "white" }}
						>
							<div className='content'>
								<div className='content'>
									<div className='tile margin-4'>
										<Fade top duration={1500}>
											<h2
												className='has-text-weight-semibold is-size-2'
												style={{
													paddingTop: "15%",
													color: "white",
													//	marginTop: "-35%",
												}}
												id='leistun'
											>
												{mainpitch.title}
											</h2>
										</Fade>
									</div>
								</div>

								<Features gridItems={blurbs} />

								<div className='columns'>
									<div className='column is-12 has-text-centered'>
										<p>{description}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>{" "}
			<Fade delay={1000} duration={1500}>
				<div className='has-text-centered'>
					<Link className='btn wh' to='/kontakt'>
						Kontaktieren Sie uns.
					</Link>
				</div>
			</Fade>
		</section>
		<div
			style={{
				position: "relative",

				backgroundImage: `url(${wave2})`,
				backgroundPosition: `top right`,
				backgroundSize: "100%",
				height: "500px",
				backgroundRepeat: "no-repeat",
				margin: "-9% 0 0 0",
				zIndex: "15",
			}}
		></div>
		<section className='section'>
			<div className='container' style={{}}>
				<Fade top duration={1500}>
					<h2
						className='has-text-centered has-text-weight-semibold is-size-2'
						style={{
							padding: "20px 0 50px 0",
							marginTop: "-5%",
							// zIndex: "15",
						}}
					>
						Neuigkeiten
					</h2>
				</Fade>
				<Fade duration={1500}>
					<h3 className='has-text-left has-text-weight-semibold is-size-3'>
						PROJEKTE
					</h3>{" "}
					<br />
					<BlogRollProjects />
					<div className='column is-12 has-text-centered'>
						<Link className='btn bl' to='/projekte'>
							Alle Projekte
						</Link>{" "}
					</div>
				</Fade>
				<br /> <br />
				<hr style={{ color: "#cccccc !important" }} />
				<br /> <br />
				<Fade duration={1500}>
					<h3 className='has-text-left has-text-weight-semibold is-size-3'>
						STELLENAUSSCHREIBUNGEN
					</h3>
					<br />
					<BlogRollJobs />
					<div className='column is-12 has-text-centered'>
						<Link className='btn bl' to='/stellenausschreibungen'>
							Alle Stellenausschreibungen
						</Link>
					</div>
				</Fade>
			</div>
		</section>
	</div>
);

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	back: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	back2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	heading: PropTypes.string,
	subheading: PropTypes.string,
	mainpitch: PropTypes.object,
	description: PropTypes.string,
	blurbs: PropTypes.shape({
		text: PropTypes.string,
		img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	}),
};

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.image}
				back={frontmatter.back}
				back2={frontmatter.back2}
				title={frontmatter.title}
				heading={frontmatter.heading}
				mainpitch={frontmatter.mainpitch}
				description={frontmatter.description}
				blurbs={frontmatter.blurbs}
			/>
		</Layout>
	);
};

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				title
				image {
					childImageSharp {
						fluid(maxWidth: 400, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				heading
				back {
					childImageSharp {
						fluid(maxWidth: 3000, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				back2 {
					childImageSharp {
						fluid(maxWidth: 3000, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				mainpitch {
					title
					description
				}
				description
				blurbs {
					img {
						alt
						image {
							childImageSharp {
								fluid(maxWidth: 100, quality: 64) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
					text
					url
				}
			}
		}
	}
`;
