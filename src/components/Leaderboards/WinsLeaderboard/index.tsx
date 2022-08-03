import React from "react";
import useFetch from "../../../Hooks/useFetch";
import { Player } from "../../../interfaces/Player";

// const url = process.env.REACT_APP_PLAYERS_URL;
const url = "https://chififa.azurewebsites.net/Players"

const WinsLeaderboard = () => {

	const [players] = useFetch<Player>(url);

	// const players = [{name: "test", wins: Math.random()},{name: "test", wins: Math.random()},{name: "test", wins: Math.random()},{name: "test", wins: Math.random()},{name: "test", wins: Math.random()},{name: "test", wins: Math.random()},{name: "test", wins: Math.random()},{name: "test", wins: Math.random()},{name: "test", wins: Math.random()},{name: "test", wins: Math.random()}]
	

	


	
	return (
		<div className="flex flex-col h-full  w-full mx-5  mb-4 lg:mb-0   ">
			<div className="flex bg-dollarBill justify-center items-center rounded-t-xl h-12 w-full font-bold text-snow text-3xl ">
				<p>Total Wins</p>
			</div>
			<div /*onClick={handleExpand} */ className="flex flex-col items-center bg-gray h-full w-full lg:pt-10  space-y-2  py-2 rounded-b-xl ">
				{players  && players.slice(0,5).map((player) => (
					<p key={player.name + Math.random()} className="h-full font-bold text-xl ">{player.name + " - " + player.wins + " Wins"}</p>
				))}
				
				{!players && <p className="pb-20  ">Loading...</p>}
				
			</div>
		</div>
	);
};

export default WinsLeaderboard;
