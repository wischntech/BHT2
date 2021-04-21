import React from "react";
import wave from "../img/icons/waveupred.svg";
import Layout from "../components/Layout";
import BlogRollJobs from "../components/BlogRollJobs";
import Fade from "react-reveal/Fade";

export default class StellenausschreibungPage extends React.Component {
	render() {
		return (
			<Layout>
				<section className='section'>
					<div
						className='container has-text-centered'
						style={{ padding: "2% 2% 4% 2%" }}
					>
						<Fade duration={1500}>
							<h2
								className='has-text-weight-bold is-size-1'
								style={{ paddingBottom: "1%" }}
							>
								Stellenausschreibungen
							</h2>
							<p>
								Um jederzeit auf die Wünsche und Aufträge unserer Kunden
								reagieren zu können, suchen wir stets nach Verstärkung für
								unseren Familienbetrieb. Neben der selbstverständlichen
								fachlichen Kompetenz legen wir großen Wert auf ein freundliches
								und höfliches Auftreten unseren Kunden gegenüber. Hier finden
								Sie unsere aktuellen Stellenangebote. Wenn Sie der Meinung sind,
								dass Sie unser Team auch in anderer Form als in den
								ausgeschriebenen Positionen verstärken können, sind wir
								neugierig auf Sie und freuen uns auf Ihre Bewerbungsunterlagen,
								die Sie auch gern hier online über das Kontaktformular an uns
								senden können.
							</p>
						</Fade>
					</div>
				</section>
				<div
					className=''
					style={{
						padding: "0% 0 20% 0",
						backgroundImage: `url(${wave})`,
						backgroundRepeat: "no-repeat",
						backgroundPosition: `bottom right`,
						backgroundSize: "100%",

						position: "relative",
					}}
				></div>
				<section
					className='section'
					style={{ backgroundColor: "#cd0000", marginTop: "-8%" }}
				>
					<div className='container'>
						<div className='content'>
							<Fade bottom duration={1500} delay={500}>
								<BlogRollJobs />
							</Fade>
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}
