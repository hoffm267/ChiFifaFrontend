import React from "react";
import useFetch from "../../../Hooks/useFetch";
import { Player } from "../../../interfaces/Player";

//const url = process.env.REACT_APP_PLAYERS_PERCENT_URL;
const url = "https://chififa.azurewebsites.net/Players/percent"

const PercentageLeaderboard = () => {
	
	
	const [players] = useFetch<Player>(url);
	
	return (
		<div className="flex flex-col h-full w-full mx-5  mb-4 lg:mb-0  ">
			<div className="flex bg-red justify-center items-center  rounded-t-2xl h-12 w-full font-bold text-snow  text-3xl ">
				<p>Win Percentage</p>
			</div>
			<div className="flex flex-col bg-gray items-center h-full w-full lg:pt-10  space-y-2  py-2 rounded-b-xl  ">
				{players && players.slice(0,5).map((player) => (
					<p key={player.name + Math.random()} className=" h-full font-bold text-xl ">{player.name + " - " + (((player.wins)/(player.loses + player.wins)) * 100).toPrecision(3) + "%"}</p>
				))}
				
			</div>
		</div>
	);
};
export default PercentageLeaderboard;
