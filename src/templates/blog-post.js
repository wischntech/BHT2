import React from "react";
import PropTypes from "prop-types";
// import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { AiOutlineContacts } from "react-icons/ai";
import { IconContext } from "react-icons";

export const BlogPostTemplate = ({
	content,
	contentComponent,
	description,
	tags,
	title,
	helmet,
}) => {
	const PostContent = contentComponent || Content;

	return (
		<div>
			<section className='section'>
				{helmet || ""}
				<div className='container content'>
					<div className='columns'>
						<div className='column is-10 is-offset-1'>
							<h1 className='title is-size-2 has-text-weight-bold is-bold-light'>
								{title}
							</h1>
							<p>{description}</p>
							<PostContent content={content} />
							{/* {tags && tags.length ? (
							<div style={{ marginTop: `4rem` }}>
								<h4>Tags</h4>
								<ul className='taglist'>
									{tags.map((tag) => (
										<li key={tag + `tag`}>
											<Link
												to={`/tags/${kebabCase(tag)}/`}
												style={{ color: "black" }}
											>
												{tag}
											</Link>
										</li>
									))}
								</ul>
							</div>
						) : null} */}
						</div>
					</div>
				</div>
			</section>

			<section style={{ padding: "3%", backgroundColor: "#f5f5f5" }}>
				<div className='container has-text-centered'>
					<div
						style={{
							padding: "0 5% 2% 5%",
							// display: "flex",
							// alignItems: "center",
							// justifyContent: "center",
							// margin: "auto",
						}}
					>
						<h1>Kontakt</h1>
						<p>
							Wenn Sie auf der Suche nach einem verlässlichem Partner in der
							Region sind und wir Ihr Interesse geweckt haben, freuen wir uns
							auf Ihre Kontaktanfrage. Bewerbungen bitte per Mail.
						</p>
					</div>

					<Link
						to='/kontakt'
						className='btn bl is-clickable'
						style={{ padding: "5px 30px" }}
					>
						{" "}
						<IconContext.Provider value={{ size: "1.5em", padding: "0 15px" }}>
							<div>
								<AiOutlineContacts />
							</div>
						</IconContext.Provider>
					</Link>
				</div>
			</section>
		</div>
	);
};

BlogPostTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	description: PropTypes.string,
	title: PropTypes.string,
	helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<BlogPostTemplate
				content={post.html}
				contentComponent={HTMLContent}
				description={post.frontmatter.description}
				helmet={
					<Helmet titleTemplate='%s | Blog'>
						<title>{`${post.frontmatter.title}`}</title>
						<meta
							name='description'
							content={`${post.frontmatter.description}`}
						/>
					</Helmet>
				}
				tags={post.frontmatter.tags}
				title={post.frontmatter.title}
			/>
		</Layout>
	);
};

BlogPost.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
};

export default BlogPost;

export const pageQuery = graphql`
	query BlogPostByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				title
				description
				tags
			}
		}
	}
`;
