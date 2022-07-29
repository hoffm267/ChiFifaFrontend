import React from "react";
import useFetch from "../../Hooks/useFetch";
import { Player } from "../../interfaces/Player";
import { WinRates } from "../../interfaces/WinRates";


const url = process.env.REACT_APP_PLAYERS_WIN_RATE_URL;

// const url = process.env.REACT_APP_PLAYERS_PERCENT_URL;

interface IProps {
    selectedPlayer: string
}

const RecordsWinRateVS = (props: IProps) => {

    const {selectedPlayer} = props;
    
	const [players] = useFetch<WinRates>(url + "?name=xander");
    

   

    
    

	return (
		<div className="h-full w-full  ">
			<div className="flex flex-col items-center justify-center h-full w-full   ">
				<div className="flex flex-col items-center justify-center h-1/6 w-full rounded-t-2xl bg-snow border-2 border-gray ">
					<p className="font-mono text-6xl text-jet">Win Rate</p>
                    
				</div>
				<div className="flex w-full h-full bg-blackCoral rounded-b-2xl border-b-4 border-r-4 border-l-4 border-gray justify-center items-center">
                    <p className="text-8xl">{/*put players thing here */}</p>
                </div>
			</div>
		</div>
	);
};

export default RecordsWinRateVS;
