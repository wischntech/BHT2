import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Fade from "react-reveal/Fade";

const FeatureGrid = ({ gridItems }) => (
	<div className='columns is-multiline'>
		{gridItems.map((item) => (
			<div key={item.text} className='column is-one-fifth' style={{}}>
				<Link
					to={item.url}
					style={{ width: "auto", height: "100%", display: "block" }}
				>
					<Fade left delay={500} duration={1500}>
						<section className='section divleistungen'>
							<PreviewCompatibleImage
								imageInfo={item.img}
								style={{
									width: "80px",
									height: "auto",
									display: "inline-block",
								}}
							/>
							<h3
								className='has-text-centered'
								style={{ color: "white", textTransform: "uppercase" }}
							>
								{item.text}
							</h3>
						</section>
					</Fade>
				</Link>
			</div>
		))}
	</div>
);

FeatureGrid.propTypes = {
	gridItems: PropTypes.arrayOf(
		PropTypes.shape({
			img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
			text: PropTypes.string,
		})
	),
};

export default FeatureGrid;
