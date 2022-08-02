import React from "react";
import useFetch from "../../../Hooks/useFetch";
import { Player } from "../../../interfaces/Player";

const url = process.env.REACT_APP_PLAYERS_STREAK_URL;

const StreakLeaderboard = () => {
	const [players] = useFetch<Player>(url);

	return (
		<div className="flex flex-col h-full w-full mx-5  mb-4 lg:mb-0 ">
			<div className="flex bg-dollarBill justify-center items-center rounded-t-2xl h-12 w-full font-bold text-snow text-3xl ">
				<p>Win/Loss Streak</p>
			</div>
			<div className="flex flex-col items-center w-full lg:pt-10  space-y-2  py-2 h-full bg-gray rounded-b-2xl ">
				{players &&
					players.slice(0, 5).map((player) => (
						
							<p  key={player.name + Math.random()} className={`${
								player.streak > 0
									? "text-dollarBill"
									: "text-red"
							} h-full text-xl font-bold`}  >
								{player.name + " - " + player.streak}
							</p>
					))}
				{!players && <p className="pb-20  ">Loading...</p>}
			</div>
		</div>
	);
};

export default StreakLeaderboard;
