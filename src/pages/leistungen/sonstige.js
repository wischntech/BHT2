import React from "react";
import Layout from "../../components/Layout";
import adresse from "../../img/startseite/adresse.svg";
import fax from "../../img/startseite/fax.svg";
import handy from "../../img/startseite/handy.svg";
import mail from "../../img/startseite/mail.svg";
import post from "../../img/startseite/post.svg";
import strich from "../../img/startseite/strich_kontakt.svg";
import telefon from "../../img/startseite/telefon.svg";

export default () => (
	<Layout>
		<section className='section'>
			<div className='container'>
				<div className='content' style={{ height: "60vh" }}>
					<h1>Vielen Dank für Ihre Nachricht!</h1>
					<p>Wir werden uns sobald wie möglich bei Ihnen melden.</p>
				</div>
			</div>
		</section>

		<div className='columns' style={{ height: "80vh", width: "auto" }}>
			<div className='column has-text-centered'>
				<div class='dropdown is-hoverable'>
					<div class='dropdown-trigger'>
						<button
							class='button'
							aria-haspopup='true'
							aria-controls='dropdown-menu4'
							style={{
								border: "none",
								height: "30%",
								width: "auto",
								paddingBottom: "1em",
							}}
						>
							<a href='tel:+493438551287'>
								<img
									src={telefon}
									alt='Telefonnummer'
									width='90%'
									height='90%'
								/>
							</a>
						</button>
					</div>
					<div class='dropdown-menu' id='dropdown-menu4' role='menu'>
						<div class='dropdown-content'>
							<div class='dropdown-item'>
								<p>
									<strong>Telefon:</strong> 034385-51287
								</p>
							</div>
						</div>
					</div>
				</div>
				<br />

				<div class='dropdown is-hoverable'>
					<div class='dropdown-trigger'>
						<button
							class='button'
							aria-haspopup='true'
							aria-controls='dropdown-menu4'
							style={{
								border: "none",
								height: "30%",
								width: "auto",
								paddingBottom: "1em",
							}}
						>
							<a href='tel:+493438551504'>
								<img src={handy} alt='Handynummer' width='90%' height='90%' />
							</a>
						</button>
					</div>
					<div class='dropdown-menu' id='dropdown-menu4' role='menu'>
						<div class='dropdown-content'>
							<div class='dropdown-item'>
								<p>
									<strong>Handynummer:</strong> <br /> 0343-8551504
								</p>
							</div>
						</div>
					</div>
				</div>
				<br />

				<div class='dropdown is-hoverable'>
					<div class='dropdown-trigger'>
						<button
							class='button'
							aria-haspopup='true'
							aria-controls='dropdown-menu4'
							style={{
								border: "none",
								height: "30%",
								width: "auto",
								paddingBottom: "1em",
							}}
						>
							{/* <a href='tel:+493438551287'> */}
							<img src={post} alt='Postadresse' width='90%' height='90%' />
							{/* </a> */}
						</button>
					</div>
					<div class='dropdown-menu' id='dropdown-menu4' role='menu'>
						<div class='dropdown-content'>
							<div class='dropdown-item'>
								<p>
									<strong>Postadresse:</strong> <br />
									Berger Haustechnik GmbH
									<br />
									Böhlitzer Weg 2
									<br /> 04668 Grimma
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* 2. Spalte  */}
			<div className='column has-text-centered is-narrow-mobile'>
				<img src={strich} alt='Strichmännchen' width='300px' height='400px' />
			</div>

			{/* 3. Spalte */}
			<div className='column has-text-centered'>
				<div class='dropdown is-hoverable'>
					<div class='dropdown-trigger'>
						<button
							class='button'
							aria-haspopup='true'
							aria-controls='dropdown-menu4'
							style={{
								border: "none",
								height: "30%",
								width: "auto",
								paddingBottom: "1em",
							}}
						>
							<a href='mailto:bht@bergerht.de'>
								<img src={mail} alt='Mailadresse' width='90%' height='90%' />
							</a>
						</button>
					</div>
					<div class='dropdown-menu' id='dropdown-menu4' role='menu'>
						<div class='dropdown-content'>
							<div class='dropdown-item'>
								<p>
									<strong>Mailadresse:</strong> <br />
									bht@bergerht.de
								</p>
							</div>
						</div>
					</div>
				</div>
				<br />

				<div class='dropdown is-hoverable'>
					<div class='dropdown-trigger'>
						<button
							class='button'
							aria-haspopup='true'
							aria-controls='dropdown-menu4'
							style={{
								border: "none",
								height: "30%",
								width: "auto",
								paddingBottom: "1em",
							}}
						>
							<a href='fax:+493438551484'>
								<img src={fax} alt='Faxadresse' width='90%' height='90%' />
							</a>
						</button>
					</div>
					<div class='dropdown-menu' id='dropdown-menu4' role='menu'>
						<div class='dropdown-content'>
							<div class='dropdown-item'>
								<p>
									<strong>Fax:</strong> <br /> 034385-51484
								</p>
							</div>
						</div>
					</div>
				</div>
				<br />

				<div class='dropdown is-hoverable'>
					<div class='dropdown-trigger'>
						<button
							class='button'
							aria-haspopup='true'
							aria-controls='dropdown-menu4'
							style={{
								border: "none",
								height: "30%",
								width: "auto",
								paddingBottom: "1em",
							}}
						>
							{/* <a href=''> */}
							<img src={adresse} alt='Adresse' width='90%' height='90%' />
							{/* </a> */}
						</button>
					</div>
					<div class='dropdown-menu' id='dropdown-menu4' role='menu'>
						<div class='dropdown-content'>
							<div class='dropdown-item'>
								<p>
									<strong>Adresse:</strong> <br />
									Berger Haustechnik GmbH
									<br />
									Böhlitzer Weg 2
									<br /> 04668 Grimma
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
);
