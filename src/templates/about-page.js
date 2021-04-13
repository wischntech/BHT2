import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Timelinex from "../components/Timelinex";
import BlogRollJobs from "../components/BlogRollJobs";
import Fade from "react-reveal/Fade";

export const AboutPageTemplate = ({
	title,
	content,
	back,
	back2,
	contentComponent,
}) => {
	const PageContent = contentComponent || Content;

	return (
		<section>
			<div
				style={{
					backgroundImage: `url(${
						back.childImageSharp ? back.childImageSharp.fluid.src : back
					})`,
					backgroundPosition: `right bottom`,
					backgroundSize: "100%",
					backgroundRepeat: "no-repeat",
					position: "relative",
					zIndex: "4",
					padding: "5em 0 25%",
					// height: "30vh",
				}}
			>
				<div className='container' style={{ padding: "0 3%" }}>
					<Fade duration={1500}>
						<h2 className='title is-size-3 has-text-weight-bold is-bold-light'>
							{title}
						</h2>
						<PageContent className='content' content={content} />
					</Fade>
				</div>
			</div>

			<div
				style={{
					backgroundImage: `url(${
						back2.childImageSharp ? back2.childImageSharp.fluid.src : back2
					})`,
					backgroundPosition: `right top`,
					backgroundSize: "100%",
					backgroundPositionY: "-70px",
					backgroundRepeat: "no-repeat",
					position: "relative",
					backgroundColor: "black",
					borderBottom: "20px solid #C9D75A",
					padding: "20% 0",
				}}
			>
				<Timelinex />
			</div>
			<Fade bottom duration={1500}>
				<section className='section'>
					<div className='container' style={{ padding: "3% 0" }}>
						<h3 className='has-text-left has-text-weight-semibold is-size-3'>
							Interessiert mit uns zu arbeiten?
						</h3>
						<p style={{ paddingBottom: "10px" }}>
							In unserem Familienbetrieb sind wir immer auf der Suche nach
							Unterstützung. Wenn bei den aktuellen Stellenausschreibungen
							nichts dabei ist, freuen wir uns auch auf Initialbewerbungen!
						</p>
						<br />
						<BlogRollJobs />
						<div className='column is-12 has-text-centered'>
							<Link className='btn bl' to='/stellenausschreibungen'>
								Alle Stellenausschreibungen
							</Link>
						</div>
					</div>
				</section>
			</Fade>
		</section>
	);
};

AboutPageTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func,
	back: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	back2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const AboutPage = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<AboutPageTemplate
				contentComponent={HTMLContent}
				title={post.frontmatter.title}
				content={post.html}
				back={post.frontmatter.back}
				back2={post.frontmatter.back2}
			/>
		</Layout>
	);
};

AboutPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
};

export default AboutPage;

export const aboutPageQuery = graphql`
	query AboutPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
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
			}
		}
	}
`;
