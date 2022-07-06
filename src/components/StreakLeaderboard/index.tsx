import React from "react";
import { Player } from "../../interfaces/Player";

const StreakLeaderboard = () => {
	const [players, setPlayers] = React.useState<Player[]>();

	const [showAll, setShowAll] = React.useState<boolean>(false);

	const handleExpand = () => {
		setShowAll(!showAll);
	}

	React.useEffect(() => {
		(async () => {
			try {
				await fetch("https://localhost:7256/Players/streak").then(response => response.json()).then((data)=>setPlayers(data))
			
			}
			 catch (err) {
			console.log(err);
			}
		})(); 
	}, [])
	return (
		<div className="flex flex-col h-full w-full mx-5  border-jet rounded-lg   shadow-lg sm:mb-4 lg:mb-0 ">
			<div className="flex bg-jet justify-center items-center border-b-2 rounded-md border-jet h-12 w-full font-black text-snow font-mono text-4xl shadow-md">
				<p>Win/Loss Streak</p>
			</div>
			<div className="flex flex-col items-center w-full pt-10  text-2xl">
				{players && players.slice(0,5).map((player) => (
					<div className={`${player.streak > 0 ? "text-dollarBill" : "text-red"}`}>
					<p className="pb-20  ">{player.name + " - " + player.streak}</p>
					</div>
				))}
				
			</div>
		</div>
	);
};

export default StreakLeaderboard;
