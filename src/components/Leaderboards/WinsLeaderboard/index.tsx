import { HubConnection } from "@microsoft/signalr";
import React from "react";
import useFetch from "../../../Hooks/useFetch";
import { Player } from "../../../interfaces/Player";

const url = process.env.REACT_APP_PLAYERS_URL;

const WinsLeaderboard = () => {
	
	
	const [players] = useFetch<Player>(url);


	const [showAll, setShowAll] = React.useState<boolean>(false);

	

	const handleExpand = () => {
		setShowAll(!showAll);
	}

	
	return (
		<div className="flex flex-col h-full  w-full mx-5  border-jet rounded-lg  sm:mb-4 lg:mb-0  shadow-lg ">
			<div className="flex bg-jet justify-center items-center border-b-2 rounded-md border-jet h-12 w-full font-black text-snow font-mono text-4xl shadow-md">
				<p>Total Wins</p>
			</div>
			<div onClick={handleExpand} className="flex flex-col items-center w-full pt-10  text-2xl">
				{players && !showAll && players.slice(0,5).map((player) => (
					<p key={player.name + Math.random()} className="pb-20  ">{player.name + " - " + player.wins + " Wins"}</p>
				))}
				{players && showAll && players.slice(0,10).map((player) => (
					<p key={player.name + Math.random()} className="pb-20  ">{player.name + " - " + player.wins + " Wins"}</p>
				))}
				{!players && <p className="pb-20  ">Loading...</p>}
				
			</div>
		</div>
	);
};

export default WinsLeaderboard;
