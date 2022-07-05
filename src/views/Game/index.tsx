import React from "react";
import { Player } from "../../interfaces/Player";
import DropDownSelect from "../../components/DropdownSelect";

const Game = () => {
	const [player1, setPlayer1] = React.useState<string>("Pick Player 1");
	const [player2, setPlayer2] = React.useState<string>("Pick Player 2");

	const [players, setPlayers] = React.useState<Player[]>();

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
			<div className="flex py-10 px-10 h-full w-full rounded-2xl bg-bone justify-center items-center">
				<div className="flex flex-col  h-full w-1/2 py-10 px-10 bg-snow rounded-l-2xl border-t-4 border-l-4 border-b-4 border-jet  ">
					<div className="flex h-1/6 w-full justify-evenly ">
						<DropDownSelect
							selectOption={player1}
							setSelectOption={setPlayer1}
							options={players}
						/>
						<DropDownSelect
							selectOption={player1}
							setSelectOption={setPlayer1}
							options={players}
						/>
					</div>
					<div className="flex flex-col justify-center items-center h-full w-full ">
						<div className="h-5/6 w-full bg-jet"></div><div className="h-1/6 w-full bg-dollarBill"></div>
					</div>
				</div>
				<div className="flex flex-col h-full w-1/2 py-10 px-10 bg-snow border-t-4 border-r-4 border-b-4 rounded-r-2xl   ">
					<div className="flex h-1/6 w-full justify-evenly">
						<DropDownSelect
							selectOption={player2}
							setSelectOption={setPlayer2}
							options={players}
						/>
						<DropDownSelect
							selectOption={player2}
							setSelectOption={setPlayer2}
							options={players}
						/>
					</div>
					<div className="flex flex-col h-full w-full justify-center items-center">
						<div className="flex flex-col h-1/2 w-full space-y-8 rounded-2xl bg-jet text-snow  justify-center items-center">
							<div className="border-solid border-b-snow border-b-8 border-x-transparent border-x-8 border-t-0"></div>
							<div className="flex flex-row text-9xl">
								<p>0</p>
								<p>1</p>
							</div>
							<div className="border-solid border-b-snow border-t-8 border-x-transparent border-x-8 border-b-0"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Game;
