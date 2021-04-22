import React from "react";
import Layout from "../components/Layout";

const ImpressumPage = () => (
	<Layout>
		<section className='section'>
			<div className='container'>
				<h1>Impressum</h1>

				<h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
				<p>
					Berger Haustechnik GmbH
					<br />
					Mutzschen
					<br />
					B&ouml;hlitzer Weg 02
					<br />
					04668 Grimma
				</p>

				<p>
					Handelsregister: HRB 999999
					<br />
					Registergericht: Amtsgericht Leipzig: HRB 1327
				</p>
				<br />

				<h2>Vertreten durch:</h2>
				<ul>
					<li>Thomas Berger</li>
					<li>Gerald Berger</li>
				</ul>
				<br />

				<h2>Kontakt</h2>
				<p>
					Telefon: 034385 / 51287
					<br />
					Telefax: 034385 / 51484
					<br />
					E-Mail:{" "}
					<a style={{ color: "#cd0000" }} href='mailto:bht@bergerht.de'>
						bht@bergerbht.de
					</a>
				</p>
				<br />

				<h2>Umsatzsteuer-ID</h2>
				<p>
					Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
					Umsatzsteuergesetz:
					<br />
					DE-141782870
				</p>
				<br />

				<h2>Redaktionell Verantwortlicher</h2>
				<p>
					Gerald Berger
					<br />
					B&ouml;hlitzer Weg 02
					<br />
					04668 Grimma
				</p>
				<br />

				<h2>EU-Streitschlichtung</h2>
				<p>
					Die Europ&auml;ische Kommission stellt eine Plattform zur
					Online-Streitbeilegung (OS) bereit:{" "}
					<a
						href='https://ec.europa.eu/consumers/odr'
						target='_blank'
						rel='noopener noreferrer'
						style={{ color: "#cd0000" }}
					>
						https://ec.europa.eu/consumers/odr
					</a>
					.<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
				</p>
				<br />

				<h2>
					Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
				</h2>
				<p>
					Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
					vor einer Verbraucherschlichtungsstelle teilzunehmen.
				</p>
			</div>
		</section>
	</Layout>
);

export default ImpressumPage;
