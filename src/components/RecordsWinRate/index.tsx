import React from "react";
import useFetch from "../../Hooks/useFetch";
import { Player } from "../../interfaces/Player";


const url = process.env.REACT_APP_PLAYERS_PERCENT_URL;


interface IProps {
    selectedPlayer: string
}

const RecordsWinRate = (props: IProps) => {

    const {selectedPlayer} = props;
    
	const [players] = useFetch<Player>(url + "?name=" + selectedPlayer);

    let winRate = " ";

    if(players) {
        const player = players.find(player => player.name === selectedPlayer);
        if(player !== undefined) {
            winRate=(((player.wins)/(player.loses + player.wins)) * 100).toPrecision(3)
        }
    }
    

	return (
		<div className="h-full w-full  ">
			<div className="flex flex-col items-center justify-center h-full w-full   ">
				<div className="flex flex-col items-center justify-center h-1/6 w-full rounded-t-2xl bg-snow border-2 border-gray ">
					<p className="font-mono lg:text-6xl text-l text-jet">Win Rate</p>
                    
				</div>
				<div className="flex w-full h-full bg-blackCoral rounded-b-2xl border-b-4 border-r-4 border-l-4 border-gray justify-center items-center">
                    <p className="lg:text-8xl text-4xl">{`${winRate}%`}</p>
                </div>
			</div>
		</div>
	);
};

export default RecordsWinRate;
