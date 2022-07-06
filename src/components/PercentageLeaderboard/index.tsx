import React from "react";
import { Player } from "../../interfaces/Player";

const PercentageLeaderboard = () => {
	const [players, setPlayers] = React.useState<Player[]>();

	React.useEffect(() => {
		(async () => {
			try {
				await fetch("https://localhost:7256/Players/percent").then(response => response.json()).then((data)=>setPlayers(data))
			
			}
			 catch (err) {
			console.log(err);
			}
		})(); 
	}, [])
	
	return (
		<div className="flex flex-col h-full w-full mx-5  border-jet rounded-lg   shadow-lg sm:mb-4 lg:mb-0  ">
			<div className="flex bg-jet justify-center items-center border-b-2 rounded-md border-jet h-12 w-full font-black text-snow font-mono text-4xl shadow-md">
				<p>Win Percentage</p>
			</div>
			<div className="flex flex-col items-center w-full pt-10  text-2xl">
				{players && players.slice(0,5).map((player) => (
					<p className="pb-20  ">{player.name + " - " + (((player.wins)/(player.loses + player.wins)) * 100).toPrecision(3) + "%"}</p>
				))}
				
			</div>
		</div>
	);
};
export default PercentageLeaderboard;
