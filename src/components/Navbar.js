import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			navBarActiveClass: "",
		};
	}

	toggleHamburger = () => {
		// toggle the active boolean in the state
		this.setState(
			{
				active: !this.state.active,
			},
			// after state has been updated,
			() => {
				// set the class in state for the navbar accordingly
				this.state.active
					? this.setState({
							navBarActiveClass: "is-active",
					  })
					: this.setState({
							navBarActiveClass: "",
					  });
			}
		);
	};

	render() {
		return (
			<nav
				className='navbar is-transparent'
				role='navigation'
				aria-label='main-navigation'
			>
				<div className='container' style={{ padding: "0.5em 0" }}>
					<div className='navbar-brand'>
						<Link to='/' className='navbar-item' title='Logo'>
							<img
								src={logo}
								alt='Berger Haustechnik Logo'
								style={{
									width: "auto",
									height: "200px",
									padding: "0.5em 0  !important",
								}}
							/>
						</Link>
						{/* Hamburger menu */}
						<div
							className={`navbar-burger burger ${this.state.navBarActiveClass}`}
							data-target='navMenu'
							onClick={() => this.toggleHamburger()}
						>
							<span aria-hidden='true' />
							<span aria-hidden='true' />
							<span aria-hidden='true' />
						</div>
					</div>
					<div
						id='navMenu'
						className={`navbar-menu ${this.state.navBarActiveClass}`}
					>
						<div className='navbar-end ' aria-label='main navigation' id='navi'>
							<div className='navbar-item has-dropdown is-hoverable'>
								<Link className='navbar-link' to='/leistungen'>
									Zusammenarbeit
								</Link>
								<div className='navbar-dropdown is-boxed'>
									<Link className='navbar-item' to='/kontakt'>
										Sie brauchen uns - Kontaktmöglichkeiten
									</Link>
									<Link className='navbar-item' to='/stellenausschreibungen'>
										Wir brauchen Sie - Stellenausschreibungen
									</Link>
								</div>
							</div>

							<div className='navbar-item has-dropdown is-hoverable'>
								<Link className='navbar-link' to='/leistungen'>
									Leistungen
								</Link>
								<div className='navbar-dropdown is-boxed'>
									<Link className='navbar-item' to='/leistungen/heizung'>
										Heizung
									</Link>
									<Link className='navbar-item' to='/leistungen/sanitaer'>
										Sanitär
									</Link>
									<Link className='navbar-item' to='/leistungen/lueftung'>
										Lüftung
									</Link>
									<Link className='navbar-item' to='/leistungen/kaelte'>
										Kälte
									</Link>
									<Link className='navbar-item' to='/leistungen/klima'>
										Klima
									</Link>
									<Link className='navbar-item' to='/leistungen/sonstige'>
										Sonstige Installationen
									</Link>

									<hr className='navbar-divider' />
									<Link className='navbar-item' to='/leistungen'>
										Übersicht
									</Link>
								</div>
							</div>

							<div className='navbar-item has-dropdown is-hoverable'>
								<Link className='navbar-link' to=''>
									Informationen
								</Link>
								<div className='navbar-dropdown is-boxed'>
									<Link className='navbar-item' to='/ueberuns'>
										Wir über uns
									</Link>
									<Link className='navbar-item' to='/projekte'>
										Worauf wir stolz sind - Referenzen.
									</Link>
									<Link className='navbar-item' to='/impressum'>
										Impressum
									</Link>
									<Link className='navbar-item' to='/datenschutz'>
										Datenschutz
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
};

export default Navbar;
