import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import adresse from "../../img/startseite/adresse.svg";
import fax from "../../img/startseite/fax.svg";
import handy from "../../img/startseite/handy.svg";
import mail from "../../img/startseite/mail.svg";
import post from "../../img/startseite/post.svg";
import strich from "../../img/startseite/strich_kontakt.svg";
import telefon from "../../img/startseite/telefon.svg";

function encode(data) {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
}

export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isValidated: false };
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({
				"form-name": form.getAttribute("name"),
				...this.state,
			}),
		})
			.then(() => navigate(form.getAttribute("action")))
			.catch((error) => alert(error));
	};

	render() {
		return (
			<Layout>
				<section className='section'>
					<div className='container'>
						<h1 className='has-text-centered' style={{ paddingBottom: "2em" }}>
							Kontakt
						</h1>
						<p style={{ paddingBottom: "4em" }}>
							Wenn Sie im Raum Sachsen auf der Suche nach kompetenter
							Unterstützung im Bereich der Haustechnik sind, bei denen keine
							sofortige Hilfe durch einen Notdienst von Nöten ist, empfehlen wir
							Ihnen die Nutzung unseres Kontaktformulars. Hier können Sie uns
							auf unkomplizierte Art und Weise Ihre Kontaktdaten und weitere
							Informationen zu Ihrer Anfrage mitteilen. Insbesondere wenn es
							sich um einen Terminwunsch für Arbeiten, ein Beratungsgespräch zu
							Planungen und Wünschen im Sanitär-, Heizung-, Kältetechnik- &amp;
							Lüftungsbereich im Raum Leipzig oder einfach nur eine Frage
							handelt: Wir werden Ihre Anfrage schnellstmöglich bearbeiten und
							uns dann umgehend bei Ihnen melden. Selbstverständlich werden all
							Ihre Daten vertraulich behandelt.
						</p>
						<hr
							style={{
								border: "#cd0000 solid 1px",
								width: "70%",
								margin: "auto",
							}}
						/>
						<hr
							style={{
								border: "#c9d75a solid 0.5px",
								width: "70%",
								margin: "auto",
								marginTop: "2px",
							}}
						/>
						<div className='columns' style={{ paddingTop: "4em" }}>
							<div className='column'>
								<div className='columns is-mobile' style={{ padding: "4em" }}>
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
															width='80%'
															height='80%'
														/>
													</a>
												</button>
											</div>
											<div
												class='dropdown-menu'
												id='dropdown-menu4'
												role='menu'
											>
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
														<img
															src={handy}
															alt='Handynummer'
															width='80%'
															height='80%'
														/>
													</a>
												</button>
											</div>
											<div
												class='dropdown-menu'
												id='dropdown-menu4'
												role='menu'
											>
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
													<img
														src={post}
														alt='Postadresse'
														width='80%'
														height='80%'
													/>
													{/* </a> */}
												</button>
											</div>
											<div
												class='dropdown-menu'
												id='dropdown-menu4'
												role='menu'
											>
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
										<img
											src={strich}
											alt='Strichmännchen'
											width='300px'
											height='400px'
										/>
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
														<img
															src={mail}
															alt='Mailadresse'
															width='80%'
															height='80%'
														/>
													</a>
												</button>
											</div>
											<div
												class='dropdown-menu'
												id='dropdown-menu4'
												role='menu'
											>
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
														<img
															src={fax}
															alt='Faxadresse'
															width='80%'
															height='80%'
														/>
													</a>
												</button>
											</div>
											<div
												class='dropdown-menu'
												id='dropdown-menu4'
												role='menu'
											>
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
													<img
														src={adresse}
														alt='Adresse'
														width='80%'
														height='80%'
													/>
													{/* </a> */}
												</button>
											</div>
											<div
												class='dropdown-menu'
												id='dropdown-menu4'
												role='menu'
											>
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
							</div>

							<div className='column'>
								<div className='content' style={{ padding: "2em 4em" }}>
									<form
										name='contact'
										method='post'
										action='/kontakt/thanks/'
										data-netlify='true'
										data-netlify-honeypot='bot-field'
										onSubmit={this.handleSubmit}
									>
										{/* The `form-name` hidden field is required to support form submissions without JavaScript */}
										<input type='hidden' name='form-name' value='contact' />
										<div hidden>
											<label>
												Don’t fill this out:{" "}
												<input name='bot-field' onChange={this.handleChange} />
											</label>
										</div>
										<div className='field'>
											<label className='label' htmlFor={"name"}>
												Ihr Name
											</label>
											<div className='control'>
												<input
													className='input'
													type={"text"}
													name={"name"}
													onChange={this.handleChange}
													id={"name"}
													required={true}
												/>
											</div>
										</div>
										<div className='field'>
											<label className='label' htmlFor={"email"}>
												Email
											</label>
											<div className='control'>
												<input
													className='input'
													type={"email"}
													name={"email"}
													onChange={this.handleChange}
													id={"email"}
													required={true}
												/>
											</div>
										</div>
										<div className='field'>
											<label className='label' htmlFor={"message"}>
												Wie können wir helfen?
											</label>
											<div className='control'>
												<textarea
													className='textarea'
													name={"message"}
													onChange={this.handleChange}
													id={"message"}
													required={true}
												/>
											</div>
										</div>
										<div className='field'>
											<button className='button is-link rd' type='submit'>
												Senden
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}
