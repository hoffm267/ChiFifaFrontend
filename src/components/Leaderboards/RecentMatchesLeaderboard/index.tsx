import React from "react";
import useFetch from "../../../Hooks/useFetch";
import { Game } from "../../../interfaces/Game";

const url = process.env.REACT_APP_GAME_URL;

const RecentMatchesLeaderboard = () => {

	const [games] = useFetch<Game>(url);
	

	const [showAll, setShowAll] = React.useState<boolean>(false);


	

	const handleExpand = () => {
		setShowAll(!showAll);
	};

	


	return (
		<div className="flex flex-col h-full  w-full mx-5  border-jet sm:mb-4 lg:mb-0 ">
			<div className="flex bg-red justify-center items-center rounded-t-2xl h-12 w-full font-bold text-snow text-3xl ">
				<p>Recent Matches</p>
			</div>
			<div className="flex flex-col items-center h-full w-full pt-10 bg-gray rounded-b-2xl">
				{games && 
					games 
						.slice()
						.reverse()
						.slice(0, 5)
						.map((game: Game) => (
							
							<p key={game.player1 + Math.random()} className="px-10 h-full font-bold text-xl">
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
