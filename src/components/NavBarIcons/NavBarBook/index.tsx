import { GiBlackBook } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { NavBarIconProps } from "../../../interfaces/NavBarIcons";

const NavBarBook = (props: NavBarIconProps) => {
    const { selected, handleSelected } = props;
    return (
        <div id="Book"
            onClick={handleSelected}
            className={` h-12 anim w-12  mx-auto my-auto bg-red flex items-center text-snow ${
                selected ? "animate-wiggle" : null
            } rounded-lg hover:animate-wiggle  transition-all duration-300 ease-linear cursor-pointer`}
        >
            <NavLink to="records">{<GiBlackBook size="48" />}</NavLink>
        </div>
    );
};

export default NavBarBook;