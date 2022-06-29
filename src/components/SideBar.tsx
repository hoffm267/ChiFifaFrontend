import React from "react";

const SideBar = () => {
	return (
		<div>
			<div
				className="fixed top-0 left-0 h-16 w-screen
                    flex flex-row justify-center
                    bg-black text-white shadow-lg "
			>
				<div
					className="relative flex items-center justify-center 
                mx-auto shadow-lg
               transition-all duration-300 ease-linear
               cursor-pointer italic text-4xl font-bold  "
				>
				<span className="text-dollarBill">Chi</span><span className="text-snow">FI</span><span className="text-red">FA</span>
				</div>
			</div>
			
		</div>
	);
};

const SideBarIcon = () => (
	<div
		className="relative flex items-center justify-center 
               h-12 w-12 mt-2 mb-2 mx-auto shadow-lg
               bg-CGRed text-green-500
               hover:bg-green-600 hover:text-white
               rounded-3xl hover:rounded-xl
               transition-all duration-300 ease-linear
               cursor-pointer"
	></div>
);

const SideBarLogo = () => <div className="fixed "></div>;

export default SideBar;
