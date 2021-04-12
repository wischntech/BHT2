import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Timelinex from "../components/Timelinex";

export const AboutPageTemplate = ({
	title,
	content,
	back,
	contentComponent,
}) => {
	const PageContent = contentComponent || Content;

	return (
		<section>
			<div className='container' style={{ padding: "4em 0" }}>
				<h2 className='title is-size-3 has-text-weight-bold is-bold-light'>
					{title}
				</h2>
				<PageContent className='content' content={content} />
			</div>
			<div style={{ paddingTop: "5em", height: "10vh" }}></div>
			<div
				style={{
					// backgroundImage: `url(${
					// 	back.childImageSharp ? back.childImageSharp.fluid.src : back
					// })`,
					backgroundPosition: `right bottom`,
					backgroundSize: "100%",
					backgroundRepeat: "no-repeat",
					position: "relative",
					backgroundColor: "black",
					borderTop: "20px solid #C9D75A",
					padding: "5em 0",
				}}
			>
				<Timelinex />
			</div>
		</section>
	);
};

AboutPageTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func,
	back: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const AboutPage = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<AboutPageTemplate
				contentComponent={HTMLContent}
				title={post.frontmatter.title}
				content={post.html}
			/>
		</Layout>
	);
};

// AboutPage.propTypes = {
// 	data: PropTypes.object.isRequired,
// };

AboutPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
};

export default AboutPage;

export const aboutPageQuery = graphql`
	query AboutPage {
		markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
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
			}
		}
	}
`;
