import React from "react";
import { NavLink } from "react-router-dom";
import NavBarBall from "../NavBarIcons/NavBarBall";
import NavBarBook from "../NavBarIcons/NavBarBook";
import { NavBarSelect } from "../../interfaces/NavBarSelect";
import { useLocation } from "react-router-dom";
import NavBarLogo from "../NavBarIcons/NavBarLogo";

const NavBar = () => {
	const location = useLocation();

	const [selectedIcon, setSelectedIcon] = React.useState<NavBarSelect>({
		Ball: false,
		Logo: true,
		Book: false,
	});

	React.useEffect(() => {
		if (location.pathname === "/add") {
			setSelectedIcon({ ...selectedIcon, Ball: true, Logo: false });
		} else if (location.pathname === "/records") {
			setSelectedIcon({ ...selectedIcon, Book: true, Logo: false });
		}
	}, []);

	const handleSelected = (e: React.MouseEvent<HTMLElement>) => {
		const temp: NavBarSelect = { Ball: false, Logo: false, Book: false };
		setSelectedIcon({ ...temp, [e.currentTarget.id]: "true" });
	};

	return (
		<div className="fixed flex flex-row h-16 w-screen bg-gray shadow-xl ">
			<NavBarBall
				selected={selectedIcon.Ball}
				handleSelected={handleSelected}
			/>

            <NavBarLogo selected={selectedIcon.Logo} handleSelected={handleSelected} />

			<NavBarBook
				selected={selectedIcon.Book}
				handleSelected={handleSelected}
			/>
		</div>
	);
};

export default NavBar;
