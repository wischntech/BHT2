import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class BlogRollLueftung extends React.Component {
	render() {
		const { data } = this.props;
		const { edges: posts } = data.allMarkdownRemark;

		return (
			<div className='columns is-multiline' style={{ marginBottom: "1%" }}>
				{posts &&
					posts.map(({ node: post }) => (
						<div className='is-parent column is-6' key={post.id}>
							<article
								className={`blog-list-item tile is-child box  ${
									post.frontmatter.featuredpost ? "is-featured" : ""
								}`}
							>
								<header>
									{post.frontmatter.featuredimage ? (
										<div className='featured-thumbnail'>
											<PreviewCompatibleImage
												imageInfo={{
													image: post.frontmatter.featuredimage,
													alt: `featured image thumbnail for post ${post.frontmatter.title}`,
												}}
											/>
										</div>
									) : null}
									<p className='post-meta'>
										<Link
											className='title has-text-primary is-size-5'
											to={post.fields.slug}
										>
											{post.frontmatter.title}
										</Link>
										<span> &bull; </span>
										<span className='is-size-6 is-block'>
											{post.frontmatter.date}
										</span>
									</p>
								</header>
								<p className='' style={{ fontSize: "0.9rem" }}>
									{post.excerpt}
									<br />
									<br />
									<Link className='button' to={post.fields.slug}>
										Weiterlesen →
									</Link>
								</p>
							</article>
						</div>
					))}
			</div>
		);
	}
}

BlogRollLueftung.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array,
		}),
	}),
};

export default () => (
	<StaticQuery
		query={graphql`
			query BlogRollLueftungQuery {
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___date] }
					filter: {
						frontmatter: {
							templateKey: { eq: "blog-post" }
							tags: { eq: "lueftung" }
						}
					}
				) {
					edges {
						node {
							excerpt(pruneLength: 400)
							id
							fields {
								slug
							}
							frontmatter {
								title
								templateKey
								date(formatString: "DD.MM.YYYY")
								featuredpost
								featuredimage {
									childImageSharp {
										fluid(maxWidth: 120, quality: 100) {
											...GatsbyImageSharpFluid
										}
									}
								}
							}
						}
					}
				}
			}
		`}
		render={(data, count) => <BlogRollLueftung data={data} count={count} />}
	/>
);