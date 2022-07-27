import React from "react";
import useFetch from "../../../Hooks/useFetch";
import { Player } from "../../../interfaces/Player";

const url = process.env.REACT_APP_PLAYERS_PERCENT_URL;

const PercentageLeaderboard = () => {
	
	
	const [players] = useFetch<Player>(url);
	
	return (
		<div className="flex flex-col h-full w-full mx-5 sm:mb-4 lg:mb-0  ">
			<div className="flex bg-red justify-center items-center  rounded-t-2xl h-12 w-full font-black text-snow font-mono text-4xl shadow-md">
				<p>Win Percentage</p>
			</div>
			<div className="flex flex-col bg-gray items-center h-full w-full pt-10 rounded-b-2xl  text-2xl">
				{players && players.slice(0,5).map((player) => (
					<p key={player.name + Math.random()} className="pb-20  ">{player.name + " - " + (((player.wins)/(player.loses + player.wins)) * 100).toPrecision(3) + "%"}</p>
				))}
				
			</div>
		</div>
	);
};
export default PercentageLeaderboard;
