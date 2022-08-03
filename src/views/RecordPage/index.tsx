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
		<div className="pt-20 pb-5 px-5 flex flex-row justify-center h-screen  bg-red select-none ">
			<div className="flex flex-col py-5 px-10 h-full w-full rounded-2xl space-y-2  bg-jet  ">
				{players && (
					<div className="flex fixed mt-0 items-center w-full rounded-lg">
						<DropDownSelect
							selectOption={selectedPlayer}
							setSelectOption={setSelectedPlayer}
							options={players}
						/>
					</div>
				)}
				<div className="flex flex-col h-full pt-12 space-y-2 w-full">
					<div className="flex flex-row  h-full w-full space-x-2  items-center">
						<RecordsWinRate selectedPlayer={selectedPlayer} />

						<RecordsGoalsAvg selectedPlayer={selectedPlayer} />
						<RecordsRecentMatches selectedPlayer={selectedPlayer} />
					</div>
					<div className="flex flex-row  h-full w-full space-x-2  items-center">
						<RecordsWinRateVS selectedPlayer={selectedPlayer} />

						<RecordsGoalsAvgVS selectedPlayer={selectedPlayer} />
						<RecordsStreak selectedPlayer={selectedPlayer} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecordPage;
