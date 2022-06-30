import { NavLink } from "react-router-dom";
import { NavBarIconProps } from "../../../interfaces/NavBarIcons";

const NavBarLogo = (props: NavBarIconProps) => {
	const { handleSelected, selected } = props;
	return (
		<NavLink to="/">
			<div
				id="Logo"
				onClick={handleSelected}
				className={`select-none italic ${
					selected ? "text-6xl" : "text-5xl"
				} font-bold hover:text-6xl transition-all duration-700 cursor-pointer`}
			>
				<span className="text-dollarBill">Chi</span>
				<span className="text-snow">FI</span>
				<span className="text-red">FA</span>
			</div>
		</NavLink>
	);
};

export default NavBarLogo;
