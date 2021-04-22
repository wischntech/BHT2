import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Features from "../components/Features";

import logo from "../img/logo.svg";
import zitat from "../img/zitat.svg";
import back from "../img/icons/wave1.svg";
import Fade from "react-reveal/Fade";
import back1 from "../img/back/anlage.png";

export const ProductPageTemplate = ({
	title,
	heading,
	description,
	intro,
	slogan,
}) => (
	<div className='content'>
		<div
			className='full-width-image-container margin-top-0'
			style={{
				backgroundColor: "#c9d75a",
				// padding: "15%  0",
				backgroundImage: `url(${back1})`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: `center right`,
				backgroundSize: "100%",
				boxShadow: "inset 0px 0px 25px 3px black",
				position: "relative",
			}}
		>
			<img
				src={logo}
				alt='Berger Haustechnik Logo'
				style={{
					width: "50vw",
					height: "auto",
					padding: "3% ",

					margin: "8%",
				}}
			/>
		</div>
		<section
			className='section section--gradient'
			style={{
				padding: "5% 2% 25% 2%",
				backgroundImage: `url(${back})`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: `bottom right`,
				backgroundSize: "100%",
				marginBottom: "-10%",
				position: "relative",
			}}
		>
			<Fade duration={1500}>
				<div className='container' style={{ padding: "2% 0" }}>
					<h2 className='title is-size-3 has-text-weight-bold is-bold-light'>
						{title}
					</h2>
					<h3 className=''>{heading}</h3>
					<p>{description}</p>
				</div>
			</Fade>
		</section>
		<section className='section' style={{ backgroundColor: "#c9d75a" }}>
			<div
				className='container'
				style={{
					backgroundImage: `url(${zitat})`,
					backgroundPosition: "right top",
					backgroundRepeat: "no-repeat",
					padding: "2%",
				}}
			>
				<h3 className='title is-size-3 has-text-weight-bold is-bold-light'>
					{slogan}
				</h3>
			</div>
		</section>
		<div style={{ backgroundColor: "black" }}>
			<div className='container' style={{ padding: "7%", textAlign: "center" }}>
				<h3
					className='has-text-weight-semibold is-size-3'
					style={{ color: "white" }}
				>
					Leistungangebot
				</h3>
				<p style={{ color: "#f2f2f2", paddingBottom: "5%" }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem illum
					libero veritatis tempora! Voluptates consectetur voluptatum at
					repellat explicabo veniam exercitationem dignissimos laudantium
					quisquam? Nam, ullam maiores voluptate, laboriosam saepe tempora,
					incidunt explicabo libero consequuntur dicta iure ex voluptas sit
					culpa nostrum! Ipsa eaque, perferendis id maiores architecto
					voluptates. Tempora?
				</p>
				<div className='columns'>
					<div className='column is-10 is-offset-1'>
						<Features gridItems={intro.blurbs} />
					</div>
				</div>
			</div>
		</div>
	</div>
);

ProductPageTemplate.propTypes = {
	title: PropTypes.string,
	heading: PropTypes.string,
	slogan: PropTypes.string,
	description: PropTypes.string,
	intro: PropTypes.shape({
		blurbs: PropTypes.array,
	}),
};

const ProductPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<ProductPageTemplate
				title={frontmatter.title}
				heading={frontmatter.heading}
				slogan={frontmatter.slogan}
				description={frontmatter.description}
				intro={frontmatter.intro}
			/>
		</Layout>
	);
};

ProductPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
};

export default ProductPage;

export const productPageQuery = graphql`
	query ProductPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				heading
				description
				slogan
				intro {
					blurbs {
						image {
							childImageSharp {
								fluid(maxWidth: 240, quality: 64) {
									...GatsbyImageSharpFluid
								}
							}
						}
						text
						url
					}
				}
			}
		}
	}
`;
