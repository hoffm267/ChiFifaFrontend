import React from "react";
import { Player } from "../../interfaces/Player";
import DropDownSelect from "../DropdownSelect";

interface IProps {
    selectedPlayers: string[];
    setSelectedPlayers: React.Dispatch<React.SetStateAction<string>>[];
    selectedTeams: string[];
    setSelectedTeams: React.Dispatch<React.SetStateAction<string>>[];

}

const OptionsSelect = (props: IProps) => {
    const {selectedPlayers, setSelectedPlayers, selectedTeams, setSelectedTeams} = props;

    const [players, setPlayers] = React.useState<Player[]>();
	const teams = [
		{ name: "Manchester United" },
		{ name: "Chelsea" },
		{ name: "Manchester City" },
		{ name: "Tottenham" },
		{ name: "Liverpool" },
	];

    React.useEffect(() => {
		(async () => {
			try {
				await fetch("https://localhost:7256/Players")
					.then((response) => response.json())
					.then((data) => setPlayers(data));
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);

	return (
		<div className="flex flex-row  h-1/12 w-full justify-evenly ">
			<div className="flex flex-row h-full w-full justify-evenly ">
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
	);
};

export default OptionsSelect;
