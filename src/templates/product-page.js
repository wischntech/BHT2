import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import logo from "../img/logo.svg";
import zitat from "../img/zitat.svg";

export const ProductPageTemplate = ({
	image,
	title,
	heading,
	description,
	blurbs,
	main,
	testimonials,
	heat,
	anlage,
	slogan,
	// fullImage,
	pricing,
}) => (
	<div className='content'>
		<div
			className='full-width-image-container margin-top-0'
			style={{
				backgroundImage: `url(${
					!!anlage.image.childImageSharp
						? anlage.image.childImageSharp.fluid.src
						: anlage.image
				})`,
				backgroundPosition: `top right`,
				padding: "15% 0",
			}}
		>
			<img
				src={logo}
				alt='Berger Haustechnik Logo'
				style={{
					width: "50vw",
					height: "auto",
					padding: "3%",
					backgroundColor: "rgba(0,0,0,0.8)",
					margin: "8%",
					boxShadow: "0 0 4px 2px #f2f2f2 !important",
				}}
			/>
			{/* <h1
				className=''
				style={{
					backgroundColor: "#c9d75a",
					color: "black",
					padding: "1rem",
				}}
			>
				{title}
			</h1> */}
		</div>
		<section className='section section--gradient'>
			<div className='container' style={{ padding: "2% 0" }}>
				<h2 className='title is-size-3 has-text-weight-bold is-bold-light'>
					{title}
				</h2>
				<h3 className=''>{heading}</h3>
				<p>{description}</p>
			</div>
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
		<div className='columns' style={{ backgroundColor: "black" }}>
			<div className='column is-10 is-offset-1'>
				<Features gridItems={blurbs} />
			</div>
		</div>
		<div className='tile is-ancestor'>
			<div className='tile is-vertical'>
				<div className='tile'>
					<div className='tile is-parent is-vertical'>
						<article className='tile is-child'>
							<PreviewCompatibleImage imageInfo={main.image1} />
						</article>
					</div>
					<div className='tile is-parent'>
						<article className='tile is-child'>
							<PreviewCompatibleImage imageInfo={main.image2} />
						</article>
					</div>
					<div className='tile is-parent'>
						<article className='tile is-child'>
							<PreviewCompatibleImage imageInfo={anlage} />
						</article>
					</div>
				</div>
				<div className='tile is-parent'>
					<article className='tile is-child'>
						<PreviewCompatibleImage imageInfo={main.image3} />
					</article>
				</div>
			</div>
		</div>
		<div className='columns'>
			<div className='column is-7'>
				<h3 className=''>{main.heading}</h3>
				<p>{main.description}</p>
			</div>
		</div>
		<Testimonials testimonials={testimonials} />
		<div
			className=''
			style={
				{
					// backgroundImage: `url(${
					// 	fullImage.childImageSharp
					// 		? fullImage.childImageSharp.fluid.src
					// 		: fullImage
					// })`,
				}
			}
		/>
		{/* <h2 className='has-text-weight-semibold is-size-2'>{pricing.heading}</h2>
		<p className='is-size-5'>{pricing.description}</p>
		<Pricing data={pricing.plans} /> */}

		<div className='columns is-gapless'>
			<div className='column '>
				<div className='container' style={{ padding: "5% 3%" }}>
					<h3>Heizung</h3>
					<p>Info zur Leistung </p>
				</div>
			</div>
			<div className='column' style={{ padding: "0 !important" }}>
				<PreviewCompatibleImage imageInfo={main.image1} />
			</div>
		</div>
		<div className='columns is-gapless'>
			<div
				className='column'
				style={{ padding: "0 0 0 0 !important", paddingTop: "0!important" }}
			>
				<PreviewCompatibleImage imageInfo={main.image2} />
			</div>
			<div className='column container' style={{ padding: "5% 3%" }}>
				<h3>Heizung</h3>
				<p>Info zur Leistung </p>
			</div>
		</div>
	</div>
);

ProductPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	heading: PropTypes.string,
	slogan: PropTypes.string,
	description: PropTypes.string,
	blurbs: PropTypes.shape({
		text: PropTypes.string,
		img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	}),
	main: PropTypes.shape({
		heading: PropTypes.string,
		description: PropTypes.string,
		image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
		image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
		image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	}),
	testimonials: PropTypes.array,
	// fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	pricing: PropTypes.shape({
		heading: PropTypes.string,
		description: PropTypes.string,
		plans: PropTypes.array,
	}),
	heat: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	anlage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const ProductPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<ProductPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				heading={frontmatter.heading}
				slogan={frontmatter.slogan}
				description={frontmatter.description}
				blurbs={frontmatter.blurbs}
				main={frontmatter.main}
				testimonials={frontmatter.testimonials}
				// fullImage={frontmatter.fullimage}
				pricing={frontmatter.pricing}
				heat={frontmatter.heat}
				anlage={frontmatter.anlage}
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
				image {
					childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				heading
				slogan
				description
				blurbs {
					img {
						alt
						image {
							childImageSharp {
								fluid(maxWidth: 240, quality: 64) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
					text
					url
				}
				main {
					heading
					description
					image1 {
						alt
						image {
							childImageSharp {
								fluid(maxWidth: 526, quality: 92) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
					image2 {
						alt
						image {
							childImageSharp {
								fluid(maxWidth: 526, quality: 92) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
					image3 {
						alt
						image {
							childImageSharp {
								fluid(maxWidth: 1075, quality: 72) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
				testimonials {
					author
					quote
				}
				heat {
					alt
					image {
						childImageSharp {
							fluid(maxWidth: 2048, quality: 92) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
				anlage {
					alt
					image {
						childImageSharp {
							fluid(maxWidth: 2500, quality: 100) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
				pricing {
					heading
					description
					plans {
						description
						items
						plan
						price
					}
				}
			}
		}
	}
`;
