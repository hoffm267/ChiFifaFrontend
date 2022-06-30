import React from "react";
import { GiSoccerBall, GiBlackBook } from "react-icons/gi";
import { NavLink } from "react-router-dom";

interface IProps {
    icon: React.ReactElement<any, any>;
    handleSelected: () => void;
    selected: boolean;
}

const NavBar = () => {
    const [selectedBall, setSelectedBall] = React.useState<boolean>(false);

    const [selectedLogo, setSelectedLogo] = React.useState<boolean>(false);

    const [selectedTable, setSelectedTable] = React.useState<boolean>(false);
    const handleBall = () => {
        setSelectedBall(true);
        setSelectedLogo(false);
        setSelectedTable(false);
    };
    const handleLogo = () => {
        console.log("HERE");
        console.log(selectedBall + " " + selectedLogo);
        setSelectedBall(false);
        setSelectedLogo(true);
        setSelectedTable(false);
    };
    const handleTable = () => {
        setSelectedBall(false);
        setSelectedLogo(false);
        setSelectedTable(true);
    };
    return (
        <div className="fixed flex flex-row h-16 w-screen bg-gray shadow-xl ">
            <SideBarBall
                selected={selectedBall}
                handleSelected={handleBall}
                icon={<GiSoccerBall size="40" />}
            />
            <NavLink to="/">
                <div
                    onClick={handleLogo}
                    className={`select-none italic ${
                        selectedLogo ? "text-6xl" : "text-5xl"
                    } font-bold hover:text-6xl transition-all duration-700 cursor-pointer`}
                >
                    <span className="text-dollarBill">Chi</span>
                    <span className="text-snow">FI</span>
                    <span className="text-red">FA</span>
                </div>
            </NavLink>
            <SideBarTable
                selected={selectedTable}
                handleSelected={handleTable}
                icon={<GiBlackBook size="38" />}
            />
        </div>
    );
};

const SideBarBall = (props: IProps) => {
    const { icon, handleSelected, selected } = props;

    return (
        <div
            onClick={handleSelected}
            className={`h-10 w-10  mx-auto my-auto bg-dollarBill flex justify-center items-center text-snow rounded-3xl ${
                selected ? "animate-spin" : null
            } hover:animate-spin transition-all duration-300 ease-linear cursor-pointer`}
        >
            <NavLink to="/add">{icon}</NavLink>
        </div>
    );
};
const SideBarTable = (props: IProps) => {
    const { icon, selected, handleSelected } = props;
    return (
        <div
            onClick={handleSelected}
            className={`h-10 w-10  mx-auto my-auto bg-red flex items-center text-snow ${
                selected ? "animate-bounce" : null
            } rounded-lg  hover:animate-bounce transition-all duration-300 ease-linear cursor-pointer`}
        >
            <NavLink to="records">{icon}</NavLink>
        </div>
    );
};

export default NavBar;
