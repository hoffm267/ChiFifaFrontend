import React from "react";
import { GiSoccerBall } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { NavBarIconProps } from "../../../interfaces/NavBarIcons";

const NavBarBall = (props: NavBarIconProps) => {
	const { handleSelected, selected } = props;
	
	return (
		<div id="Ball"
			onClick={handleSelected}
			className={`h-12 w-12 mx-auto my-auto bg-dollarBill flex justify-center items-center text-snow rounded-3xl ${
				selected ? "animate-spin" : null
			} hover:animate-spin transition-all duration-300 ease-linear cursor-pointer`}
		>
			<NavLink to="/add">{<GiSoccerBall size="50" />}</NavLink>
		</div>
	);
};

export default NavBarBall;