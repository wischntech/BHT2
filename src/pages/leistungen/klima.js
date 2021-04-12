import React from "react";
import Layout from "../../components/Layout";
// import Timelinex from "../../components/Timelinex";

export default () => (
	<Layout>
		<section className='section'>
			<div className='container'>
				<div className='content' style={{ height: "60vh" }}>
					<h1>Vielen Dank für Ihre Nachricht!</h1>
					<p>Wir werden uns sobald wie möglich bei Ihnen melden.</p>
					{/* <Timelinex /> */}
				</div>
			</div>
		</section>
	</Layout>
);
