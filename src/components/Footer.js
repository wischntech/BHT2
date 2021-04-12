import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";

const Footer = class extends React.Component {
	render() {
		return (
			<footer className='footer has-background-black has-text-white-ter'>
				<div className='content has-text-centered'>
					<img
						src={logo}
						alt='Kaldi'
						style={{ width: "14em", height: "10em" }}
					/>
				</div>
				<div className='content has-text-centered has-text-white-ter'>
					<div className='container has-text-white-ter'>
						<div style={{ maxWidth: "100vw" }} className='columns'>
							<div className='column is-4'>
								<section className=''>
									<ul className='menu-list'>
										<h4 className='' style={{ padding: "0 0.75em" }}>
											Leistungen
										</h4>
										<li>
											<Link className='navbar-item' to='/leistungen/heizung'>
												Heizung
											</Link>
										</li>
										<li>
											<Link className='navbar-item' to='/leistungen/sanitaer'>
												Sanitär
											</Link>
										</li>
										<li>
											<Link className='navbar-item' to='/leistungen/lueftung'>
												Lüftung
											</Link>
										</li>
										<li>
											<Link className='navbar-item' to='/leistungen/kaelte'>
												Kälte
											</Link>
										</li>
										<li>
											<Link className='navbar-item' to='/leistungen/klima'>
												Klima
											</Link>
										</li>
									</ul>
								</section>
							</div>
							<div className='column is-4'>
								<section className='menu'>
									<ul className='menu-list'>
										<h4 className='' style={{ padding: "0 0.75em" }}>
											Informationen
										</h4>
										<li>
											<Link
												className='navbar-item'
												to='/stellenausschreibungen'
											>
												Stellenausschreibungen
											</Link>
										</li>
										<li>
											<Link to='leistungen' className='navbar-item'>
												Leistungsübersicht
											</Link>
										</li>
										<li>
											<Link className='navbar-item' to='/projekte'>
												Referenzprojekte
											</Link>
										</li>
										<li>
											<Link className='navbar-item' to='/ueberuns'>
												Über uns
											</Link>
										</li>
									</ul>
								</section>
							</div>
							<div className='column is-4'>
								<section>
									<ul className='menu-list'>
										<h4 className='' style={{ padding: "0 0.75em" }}>
											Kontakt
										</h4>
										<li>
											<a href='tel:+493438551287' className='navbar-item'>
												Kundendienstnummer:
												<span style={{ color: "#cd0000" }}> 034385-51287 </span>
											</a>
										</li>

										<li>
											<a href='mailto:bht@bergerht.de' className='navbar-item'>
												E-Mail:
												<span style={{ color: "#cd0000" }}>
													{" "}
													bht@bergerht.de
												</span>
											</a>
										</li>
										<li>
											<Link className='navbar-item' to='/kontakt'>
												Kontaktformular
											</Link>
										</li>
									</ul>
								</section>
							</div>
						</div>
					</div>
				</div>
				<div className='navbar-menu has-text-white-ter'>
					<div
						className='navbar-end has-text-centered'
						style={{
							padding: "1em 0 1em 0",
							margin: "auto",
						}}
					>
						<Link className='navbar-item' to='/impressum'>
							Impressum
						</Link>

						<Link className='navbar-item' to='/datenschutz'>
							Datenschutz
						</Link>
					</div>
				</div>
			</footer>
		);
	}
};

export default Footer;
