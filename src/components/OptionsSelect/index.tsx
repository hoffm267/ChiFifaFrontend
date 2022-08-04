import React from "react";
import useFetch from "../../Hooks/useFetch";
import { Player } from "../../interfaces/Player";
import DropDownSelect from "../DropdownSelect";
// const url = process.env.REACT_APP_PLAYERS_URL;
const url = "https://chififa.azurewebsites.net/Players"
interface IProps {
	selectedPlayers: string[];
	setSelectedPlayers: React.Dispatch<React.SetStateAction<string>>[];
	selectedTeams: string[];
	setSelectedTeams: React.Dispatch<React.SetStateAction<string>>[];
}

const OptionsSelect = (props: IProps) => {
	const {
		selectedPlayers,
		setSelectedPlayers,
		selectedTeams,
		setSelectedTeams,
	} = props;

	const [players] = useFetch<Player>(url);
	const teams = [
		{ name: "Manchester United" },
		{ name: "Chelsea" },
		{ name: "Manchester City" },
		{ name: "Tottenham" },
		{ name: "Liverpool" },
	];

	return players ? (
		<div className="flex flex-col lg:flex-row  h-full lg:h-1/12 w-full justify-evenly mb-2 ">
			<div className="flex flex-row h-full w-full justify-evenly items-center">
				<DropDownSelect
					selectOption={selectedPlayers[0]}
					setSelectOption={setSelectedPlayers[0]}
					options={players}
				/>
				<DropDownSelect
					selectOption={selectedTeams[0]}
					setSelectOption={setSelectedTeams[0]}
					options={teams}
				/>
			</div>

			<div className="flex flex-row h-full w-full justify-evenly ">
				<DropDownSelect
					selectOption={selectedPlayers[1]}
					setSelectOption={setSelectedPlayers[1]}
					options={players}
				/>

				<DropDownSelect
					selectOption={selectedTeams[1]}
					setSelectOption={setSelectedTeams[1]}
					options={teams}
				/>
			</div>
		</div>
	) : null;
};

export default OptionsSelect;
