import React from "react";
import { FaVolleyballBall, FaChrome } from 'react-icons/fa';

interface IProps {
	color: string;
	icon:  React.ReactElement<any, any>;
}

const NavBar = () => {
	return (
		<div className="fixed flex flex-row h-16 w-screen bg-gray shadow-xl ">
			<SideBarIcon color="dollarBill" icon={<FaVolleyballBall />} />
			<div
				className="    	
                 italic text-6xl font-bold "
			>
				<span className="text-dollarBill">Chi</span>
				<span className="text-snow">FI</span>
				<span className="text-red">FA</span>
			</div>
			<SideBarIcon color="red" icon={<FaChrome />} />
		</div>
	);
};

const SideBarIcon = (props: IProps) => {
	const { color, icon } = props;
	return (
		<div
			className={`h-10 w-10  mx-auto my-auto bg-${color} flex items-center text-snow rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer`}
		>{icon}</div>
	);
};
const SideBarLogo = () => <div className="fixed "></div>;

export default NavBar;
