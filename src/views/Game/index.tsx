import React from "react";
import { Player } from "../../interfaces/Player";
import DropDownSelect from "../../components/DropdownSelect";

const Game = () => {
	const [player1, setPlayer1] = React.useState<string>("Pick Player 1");
	const [player2, setPlayer2] = React.useState<string>("Pick Player 2");

	const [team1, setTeam1] = React.useState<string>("Pick Team 1");
	const [team2, setTeam2] = React.useState<string>("Pick Team 2");

	const [players, setPlayers] = React.useState<Player[]>();
	const teams = [{name: "Manchester United"}, {name: "Chelsea"}, {name: "Manchester City"}, {name: "Tottenham"}, {name: "Liverpool"}];

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
		<div className="pt-20 pb-5 px-5 flex flex-row justify-center  h-screen bg-dollarBill  ">
			<div className="flex  py-10 px-10 h-full w-full rounded-2xl bg-bone justify-center items-center ">
				<div className="flex flex-col  h-full w-1/2 py-10 pl-10 bg-snow rounded-l-2xl border-t-4 border-l-4 border-b-4 border-jet ">
					<div className="flex h-1/6 w-full justify-evenly ">
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
					<div className="flex flex-col place-items-end h-full w-full ">
						<div className="h-full w-full bg-jet my-10"></div>
						<div className="flex h-1/6 w-1/2 px-1/2 bg-dollarBill justify-end rounded-l-lg"> 
						Submit
						</div>
					</div>
				</div>
				<div className="flex flex-col h-full w-1/2 py-10 pr-10 bg-snow border-t-4 border-r-4 border-b-4 rounded-r-2xl border-jet ">
					<div className="flex h-1/6 w-full justify-evenly">
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
					<div className="flex flex-col h-full w-full ">
						<div className="flex flex-col h-full w-full space-y-8 rounded-2xl bg-jet text-snow  justify-center items-center my-10">
							<div className="border-solid border-b-snow border-b-8 border-x-transparent border-x-8 border-t-0"></div>
							<div className="flex flex-row text-9xl">
								<p>0</p>
								<p>1</p>
							</div>
							<div className="border-solid border-b-snow border-t-8 border-x-transparent border-x-8 border-b-0"></div>
						</div>
						<div className="h-1/6 w-1/2 px-1/2 bg-dollarBill justify-start rounded-r-lg">&nbsp; HI </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Game;
