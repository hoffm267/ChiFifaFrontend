import React from "react";
import { Player } from "../../interfaces/Player";

interface IProps {
	selectOption: string;
	setSelectOption: React.Dispatch<React.SetStateAction<string>>;
	options: Player[] | any[] | undefined;
}

const DropDownSelect = (props: IProps) => {
	const { selectOption, setSelectOption, options } = props;
	const [showOptions, setShowOptions] = React.useState<boolean>(false);

	return (
		<div className="relative ">
			<button
				onClick={() => setShowOptions(!showOptions)}
				className="inline-flex peer bg-snow items-center justify-center lg:w-48  h-18 lg:h-12 rounded-md border-2 border-jet border-opacity-80 shadow-sm px-4 py-2 text-sm font-mono font-bold text-jet     "
				id="menu-button"
			>
				{selectOption}
				<svg
					className="-mr-1 ml-2 h-5 w-5"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fillRule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clipRule="evenodd"
					/>
				</svg>
			</button>

			<div
				className={`${
					showOptions ? "visible" : "invisible"
				}  divide-jet  shadow-lg  ring-1 ring-black ring-opacity-5 rounded-md focus:outline-none overflow-clip `}
			>
				<div className="divide-y divide-gray bg-snow  ">
					{options &&
						options.map((o) => (
							<a
								onClick={() => {
									setSelectOption(o.name);
									setShowOptions(false);
								}}
								className="text-gray-700 border-solid block px-4 py-2 text-sm cursor-pointer "
							>
								{o.name}
							</a>
						))}
				</div>
			</div>
		</div>
	);
};

export default DropDownSelect;
