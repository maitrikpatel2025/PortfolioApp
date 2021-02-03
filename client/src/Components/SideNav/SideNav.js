import React from 'react';
import styled from 'styled-components';



import { NavLink } from 'react-router-dom';

const Ul = styled.ul`
	list-style: none;
	padding-right: 100px;
	display: flex;
	cursor: pointer;
	z-index: 1;
    flex-flow: row nowrap;
	text-transform: uppercase;
	li {
		padding: 18px 10px;
		display: inline-block;
		color:white;
		padding: 20px;
		font-weight: 600;
		font-size: 15px;
		opacity:1;
		
	}
	li:hover {
		opacity: 0.5;
		cursor: pointer;
	}
	@media (max-width: 700px) {
		flex-flow: column nowrap;
		background-color: black;
		opacity: 0.9;
		position: fixed;
		transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
		top: 0;
		right: 0;
		width: 100%;
		padding-left: 80px;
		padding-top: 80px;
		transition: transform 0.3s ease-in-out;
		li {
			color:white;
			font-weight: 600;
			font-size: 15px;
			opacity:1;
		}
		li:hover {
			opacity: 0.5;
			cursor: pointer;
			
		}
	}
`;

const SideNav = ({ open }) => {
	return (
		<div className="SideNav">
			<Ul open={open}>
				<NavLink
					exact
					to="/"
					activeClassName="active"
					activeStyle={{
						borderBottom: '2px solid white'
					}}
				>
					<li>Home</li>
				</NavLink>
				<NavLink
					exact
					to="/about"
					activeClassName="active"
					activeStyle={{
						borderBottom: '2px solid white'
					}}
				>
					<li>About</li>
				</NavLink>
				<NavLink
					exact
					to="/projects"
					activeClassName="active"
					activeStyle={{
						borderBottom: '2px solid white'
					}}
				>
					<li>Projects</li>
				</NavLink>
				
				<NavLink
					exact
					to="/contact"
					activeClassName="active"
					activeStyle={{
						borderBottom: '2px solid white'
					}}
				>
					<li>Contact</li>
				</NavLink>
			</Ul>
		</div>
	);
};

export default SideNav;
