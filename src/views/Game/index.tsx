import React from "react";
import { Player } from "../../interfaces/Player";
import DropDownSelect from "../../components/DropdownSelect";

const Game = () => {
	const [player1, setPlayer1] = React.useState<string>("Pick Player 1");
	const [player2, setPlayer2] = React.useState<string>("Pick Player 2");

	const [team1, setTeam1] = React.useState<string>("Pick Team 1");
	const [team2, setTeam2] = React.useState<string>("Pick Team 2");

	const [players, setPlayers] = React.useState<Player[]>();
	const teams = [
		{ name: "Manchester United" },
		{ name: "Chelsea" },
		{ name: "Manchester City" },
		{ name: "Tottenham" },
		{ name: "Liverpool" },
	];

	React.useEffect(() => {
		(async () => {
			try {
				await fetch("https://localhost:7256/Players")
					.then((response) => response.json())
					.then((data) => setPlayers(data));
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);

	return (
		<div className="pt-20 pb-5 px-5  h-screen bg-dollarBill  ">
			<div className="flex flex-col  py-10 px-10 h-full w-full rounded-2xl bg-bone  ">
				<div className="flex flex-col items-center  py-10 px-10 h-full w-full rounded-2xl bg-snow rounded-l-2xl border-4 border-jet ">
					<div className="flex flex-row  h-1/6 w-full justify-evenly ">
						<div className="flex flex-row h-full w-full justify-evenly ">
							<DropDownSelect
								selectOption={player1}
								setSelectOption={setPlayer1}
								options={players}
							/>
							<DropDownSelect
								selectOption={team1}
								setSelectOption={setTeam1}
								options={teams}
							/>
						</div>
						<div className="flex flex-row h-full w-full justify-evenly ">
							<DropDownSelect
								selectOption={player2}
								setSelectOption={setPlayer2}
								options={players}
							/>

							<DropDownSelect
								selectOption={team2}
								setSelectOption={setTeam2}
								options={teams}
							/>
						</div>
					</div>
					<div className="flex flex-row h-full w-full items-center ">
						<div className="flex flex-col justify-evenly items-center h-5/6 w-1/2 bg-jet mx-5 rounded-2xl shadow-xl ">
							<div className="border-solid border-b-snow border-b-8 border-x-transparent border-x-8 border-t-0"></div>
							<div className="flex flex-row text-9xl text-snow">
								<p>0</p>
								<p>1</p>
							</div>
							<div className="border-solid border-t-snow border-t-8 border-x-transparent border-x-8 border-b-0"></div>
						</div>
						<div className="flex flex-col justify-evenly items-center h-5/6 w-1/2 bg-jet mx-5 rounded-2xl shadow-xl ">
							<div className="border-solid border-b-snow border-b-8 border-x-transparent border-x-8 border-t-0"></div>
							<div className="flex flex-row text-9xl text-snow">
								<p>0</p>
								<p>1</p>
							</div>
							<div className="border-solid border-t-snow border-t-8 border-x-transparent border-x-8 border-b-0"></div>
						</div>
					</div>
					<div className="h-1/6 w-1/2 bg-dollarBill rounded-2xl shadow-lg"></div>
				</div>
			</div>
		</div>
	);
};

export default Game;
