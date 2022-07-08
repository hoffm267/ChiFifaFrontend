import React from "react";
import useFetch from "../../../Hooks/useFetch";
import { Game } from "../../../interfaces/Game";

const RecentMatchesLeaderboard = () => {

	const [games] = useFetch<Game[]>("https://localhost:7256/Game");

	const [showAll, setShowAll] = React.useState<boolean>(false);

	const handleExpand = () => {
		setShowAll(!showAll);
	};

	


	return (
		<div className="flex flex-col h-full  w-full mx-5  border-jet rounded-lg   shadow-lg  sm:mb-4 lg:mb-0 ">
			<div className="flex bg-jet justify-center items-center border-b-2 rounded-md border-jet h-12 w-full font-black text-snow font-mono text-4xl shadow-md">
				<p>Recent Matches</p>
			</div>
			<div className="flex flex-col items-center w-full pt-10  text-2xl ">
				{games && 
					games 
						.slice()
						.reverse()
						.slice(0, 5)
						.map((game: Game) => (
							
							<p className="pb-20  ">
								{game.player1 +
									" (" +
									game.team1 +
									")" +
									" - " +
									game.player1Score +
									" vs " +
									game.player2 +
									" (" +
									game.team2 +
									")" +
									" - " +
									game.player2Score}
							</p>
						))}
			</div>
		</div>
	);
};

export default RecentMatchesLeaderboard;
