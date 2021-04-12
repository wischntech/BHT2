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
						<div
							className='navbar-end has-text-centered '
							aria-label='main navigation'
							id='navi'
						>
							<Link className='navbar-item' to='/leistungen'>
								Leistungen
							</Link>
							<Link className='navbar-item' to='/ueberuns'>
								Über Uns
							</Link>
							<Link className='navbar-item' to='/kontakt'>
								Kontakt
							</Link>
						</div>
					</div>
				</div>
			</nav>
		);
	}
};

export default Navbar;
