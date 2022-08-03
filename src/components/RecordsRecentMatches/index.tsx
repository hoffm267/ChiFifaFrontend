import React from "react";
import useFetch from "../../Hooks/useFetch";
import { Game } from "../../interfaces/Game";

// const url = process.env.REACT_APP_PLAYERS_HISTORY

const url = "https://chififa.azurewebsites.net/Players/goals"
interface IProps {
    selectedPlayer: string
}

const RecordsRecentMatches= (props: IProps) => {

    const {selectedPlayer} = props;
    
	const [players] = useFetch<Game>(url+ "?name=" + selectedPlayer);

    
    

	return (
		<div className="h-full w-full  ">
			<div className="flex flex-col items-center justify-center h-full w-full">
				<div className="flex flex-col items-center justify-center h-1/6 w-full rounded-t-2xl bg-snow border-2 border-gray ">
					<p className="font-mono lg:text-6xl text-l text-jet">Recent Matches</p>
                    
				</div>
				
					<div className="flex w-full h-full bg-blackCoral rounded-b-2xl border-b-4 border-r-4 border-l-4 border-gray justify-center items-center">
                    <p className="lg:space-y-2">{players && players.length!== 0 && players.slice()
						
						.slice(0, 5)
						.map((game: Game) => (
							
							<p key={game.player1 + Math.random()} className="lg:px-10 px-2 h-full lg:font-bold lg:text-xl text-xs">
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
						))
                        
                    }</p>
				</div>
			</div>
		</div>
	);
};

export default RecordsRecentMatches;
