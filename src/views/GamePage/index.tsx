import React from "react";
import Scoreboard from "../../components/Scoreboard";
import SubmitButton from "../../components/SubmitButton";
import OptionsSelect from "../../components/OptionsSelect";
import { Game } from "../../interfaces/Game";

const url = process.env.REACT_APP_GAME_URL;

const GamePage = () => {
	const [player1, setPlayer1] = React.useState<string>("Pick Player 1");
	const [player2, setPlayer2] = React.useState<string>("Pick Player 2");

	const [team1, setTeam1] = React.useState<string>("Pick Team 1");
	const [team2, setTeam2] = React.useState<string>("Pick Team 2");

	const [score1, setScore1] = React.useState<number>(0);
	const [score2, setScore2] = React.useState<number>(0);

	const sendGame = async () => {
		const Game: Game = {
			player1: player1,
			team1: team1,
			player1Score: score1,
			player2: player2,
			team2: team2,
			player2Score: score2,
		};
		

		try {
			await fetch(url, {
				method: "POST",
				headers: {
					 // this will allow all CORS requests
					"Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Request",
    				"Content-Type": "application/json" // this shows the expected content type
					
				},
				body: JSON.stringify(Game),
			})
			
		} catch (err) {
			console.log(err);
		}
	};

	const convertToJson = async (res: Response) => await res.json()
	

	return (
		<div className="pt-20 pb-5 px-5  h-screen bg-dollarBill  ">
			<div className="flex flex-col  py-10 px-10 h-full w-full rounded-2xl bg-bone  ">
				<div className="flex flex-col items-center py-10 px-10 h-full w-full rounded-2xl bg-snow rounded-l-2xl border-4 border-jet border-opacity-80 ">
					<OptionsSelect
						selectedPlayers={[player1, player2]}
						setSelectedPlayers={[setPlayer1, setPlayer2]}
						selectedTeams={[team1, team2]}
						setSelectedTeams={[setTeam1, setTeam2]}
					/>
					<div className="flex flex-row h-full w-full items-center ">
						<Scoreboard score={score1} setScore={setScore1} />
						<Scoreboard score={score2} setScore={setScore2} />
					</div>
					<SubmitButton sendGame={sendGame} />
				</div>
			</div>
		</div>
	);
};

export default GamePage;
