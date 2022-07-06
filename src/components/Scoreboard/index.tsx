import React from "react"
import { Player } from "../../interfaces/Player";
import DropDownSelect from "../DropdownSelect"

interface IProps {
	selectOption: string;
	setSelectOption: React.Dispatch<React.SetStateAction<string>>;
    options: Player[] | Object[] | undefined;
}
/*
const Scoreboard = (props: IProps) => {
    const {player, setPlayer}
    return (
        <div className="flex flex-col h-full w-1/2 py-10 px-10 bg-snow border-t-4 border-r-4 border-b-4 rounded-r-2xl border-jet ">
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
    )
}
*/