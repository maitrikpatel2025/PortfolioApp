import React, { useState } from 'react';
import styled from 'styled-components';
import './MenuButton.css';
import SideNav from '../SideNav/SideNav';

const StyledBurger = styled.div`
	width: 2rem;
	height: 2rem;
	position: fixed;
	top: 20px;
	right: 20px;
	z-index: 20;
	display: none;
	@media (max-width: 700px) {
		display: flex;
		justify-content: space-around;
		flex-flow: column nowrap;
	}
	div {
		width: 2rem;
		height: 0.25rem;
		background-color: ${({ open }) => (open ? '#ccc' : '#ccc')};
		border-radius: 10px;
		transform-origin: 1px;
		transition: all 0.3s linear;
		&:nth-child(1) {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
		}
		&:nth-child(2) {
			width: 1.5rem;
			transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
			opacity: ${({ open }) => (open ? 0 : 1)};
		}
		&:nth-child(3) {
			width: 1rem;
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
			width: ${({ open }) => (open ? '2rem' : '1rem')};
		}
	}
`;

const MenuButton = () => {
	const [ open, setOpen ] = useState(false);

	return (
		<div className="MenuButton">
			<StyledBurger open={open} onClick={() => setOpen(!open)}>
				<div />
				<div />
				<div />
			</StyledBurger>
            <SideNav open={open}/>
		</div>
	);
};
export default MenuButton;
