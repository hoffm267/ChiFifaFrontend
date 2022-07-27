import React from "react";
import DropDownSelect from "../../components/DropdownSelect";
import { Player } from "../../interfaces/Player";

const RecordPage = () => {
	const [players, setPlayers] = React.useState<Player[]>();

	const [showAll, setShowAll] = React.useState<boolean>(false);

	const [selectedPlayer, setSelectedPlayer] =
		React.useState<string>("Select Player");

	const handleExpand = () => {
		setShowAll(!showAll);
	};

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
		<div className="pt-20 pb-5 px-5 flex flex-row justify-center  h-screen bg-red select-none ">
			<div className="flex flex-col py-5 px-10 h-full w-full rounded-2xl space-y-2  bg-jet  ">
				<div className="flex fixed mt-0 items-center w-full rounded-lg">
					<DropDownSelect
						selectOption={selectedPlayer}
						setSelectOption={setSelectedPlayer}
						options={players}
					/>
				</div>
				<div className="flex flex-col h-full pt-12 space-y-2 w-full">
					<div className="flex flex-row  h-full w-full space-x-2  items-center">

						<div className="h-full w-full  ">
							<div className="flex flex-col items-center justify-center h-full w-full   ">
								<div className="flex flex-col items-center justify-center h-1/6 w-full rounded-t-2xl bg-snow border-4 border-gray ">
									<p className="font-mono text-6xl text-jet">
										Last Five Games
									</p>
								</div>
								<div className="flex w-full h-full bg-blackCoral rounded-b-2xl border-b-4 border-r-4 border-l-4 border-gray "></div>
							</div>
						</div>
						<div className="h-full w-full rounded-2xl bg-blackCoral">
							<div className="flex flex-col items-center justify-center h-full w-full   ">
								<div className="flex flex-col items-center justify-center h-1/6 w-full rounded-t-2xl bg-snow">
									<p className="font-mono text-6xl text-jet">
										Last Five Games
									</p>
								</div>
								<div className="flex w-full h-full"></div>
							</div>
						</div>
						<div className="h-full w-full rounded-2xl bg-blackCoral">
							<div className="flex flex-col items-center justify-center h-full w-full   ">
								<div className="flex flex-col items-center justify-center h-1/6 w-full rounded-t-2xl bg-snow">
									<p className="font-mono text-6xl text-jet">
										Last Five Games
									</p>
								</div>
								<div className="flex w-full h-full"></div>
							</div>
						</div>
					</div>
					<div className="flex flex-row  h-full w-full space-x-2 items-center">
						<div className="h-full w-1/3 rounded-2xl bg-blackCoral"></div>
						<div className="h-full w-1/3 rounded-2xl bg-blackCoral"></div>
						<div className="h-full w-1/3 rounded-2xl bg-blackCoral"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecordPage;
