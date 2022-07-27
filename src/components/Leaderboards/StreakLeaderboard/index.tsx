import React from "react";
import useFetch from "../../../Hooks/useFetch";
import { Player } from "../../../interfaces/Player";

const url = process.env.REACT_APP_PLAYERS_STREAK_URL;

const StreakLeaderboard = () => {
	const [players] = useFetch<Player>(url);

	const [showAll, setShowAll] = React.useState<boolean>(false);

	const handleExpand = () => {
		setShowAll(!showAll);
	};

	return (
		<div className="flex flex-col h-full w-full mx-5 sm:mb-4 lg:mb-0 ">
			<div className="flex bg-dollarBill justify-center items-center rounded-t-2xl h-12 w-full font-black text-snow font-mono text-4xl ">
				<p>Win/Loss Streak</p>
			</div>
			<div className="flex flex-col items-center w-full pt-10 h-full bg-gray rounded-b-2xl text-2xl">
				{players &&
					players.slice(0, 5).map((player) => (
						<div
							key={player.name + Math.random()}
							className={`${
								player.streak > 0
									? "text-dollarBill"
									: "text-red"
							}`}
						>
							<p className="pb-20  ">
								{player.name + " - " + player.streak}
							</p>
						</div>
					))}
				{!players && <p className="pb-20  ">Loading...</p>}
			</div>
		</div>
	);
};

export default StreakLeaderboard;
