import React from "react";
import DropDownSelect from "../../components/DropdownSelect";
import RecordsWinRate from "../../components/RecordsWinRate";
import RecordsWinRateVS from "../../components/RecordsWinRateVS";
import RecordsGoalsAvg from "../../components/RecordsGoalsAvg";
import useFetch from "../../Hooks/useFetch";
import { Player } from "../../interfaces/Player";
import RecordsGoalsAvgVS from "../../components/RecordsGoalsAvgVS";
import RecordsRecentMatches from "../../components/RecordsRecentMatches";
import RecordsStreak from "../../components/RecordsStreak";
// const url = process.env.REACT_APP_PLAYERS_URL;
const url = "https://chififa.azurewebsites.net/Players"

const RecordPage = () => {
	const [players] = useFetch<Player>(url);
	const [selectedPlayer, setSelectedPlayer] =
		React.useState<string>("Select Player");

	return (
		<div className="pt-20 pb-5 px-5 h-full lg:h-screen  bg-red select-none ">
			<div className="flex flex-col py-5 px-10 h-full w-full rounded-2xl space-y-2 bg-jet  ">
				{players && (
					<div className="ml-1 lg:ml-0">
						<DropDownSelect
							selectOption={selectedPlayer}
							setSelectOption={setSelectedPlayer}
							options={players}
						/>
					</div>
				)}
				
				<div className="flex flex-col h-full  space-y-2 w-full items-center justify-center ">
					
					<div className="flex flex-col lg:flex-row h-full w-full space-x-2 space-y-2 justify-center items-center">
						<div className="w-full h-full ml-2 lg:ml-0">
						<RecordsWinRate selectedPlayer={selectedPlayer} />
						</div>
						<RecordsGoalsAvg selectedPlayer={selectedPlayer} />
						<RecordsRecentMatches selectedPlayer={selectedPlayer} />
					</div>
				
					<div className="flex flex-col lg:flex-row h-full w-full space-x-2 space-y-2 items-center ">
						<div className="w-full h-full ml-2 lg:ml-0">
						<RecordsWinRateVS selectedPlayer={selectedPlayer} />
						</div>
						<RecordsGoalsAvgVS selectedPlayer={selectedPlayer} />
						<RecordsStreak selectedPlayer={selectedPlayer} />
					</div>
				</div>
				
			</div>
		</div>
	);
};

export default RecordPage;
