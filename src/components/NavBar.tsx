import React from "react";

const NavBar = () => {
	return (
		<div className="fixed flex flex-row h-16 w-screen bg-gray shadow-xl ">

			<SideBarIcon />
			<div
				className="    	
                 italic text-6xl font-bold "
			>
				<span className="text-dollarBill">Chi</span>
				<span className="text-snow">FI</span>
				<span className="text-red">FA</span>
			</div>
			<SideBarIcon1 />

		</div>
	);
};

const SideBarIcon = () => (
	<div
		className="  
               h-10 w-10  mx-auto my-auto
               bg-dollarBill text-snow
               
               rounded-3xl hover:rounded-xl
               transition-all duration-300 ease-linear
               cursor-pointer"
	></div>
);
const SideBarIcon1 = () => (
	<div
		className="   
               h-10 w-10  mx-auto my-auto
               bg-red text-snow
               rounded-3xl hover:rounded-xl
               transition-all duration-300 ease-linear
               cursor-pointer"
	></div>
);
const SideBarLogo = () => <div className="fixed "></div>;

export default NavBar;
