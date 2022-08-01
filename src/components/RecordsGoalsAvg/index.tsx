import React from "react";
import useFetch from "../../Hooks/useFetch";
import { AvgGoals } from "../../interfaces/AvgGoals";
import { Player } from "../../interfaces/Player";

const url = process.env.REACT_APP_PLAYERS_GOALS_URL

interface IProps {
    selectedPlayer: string
}

const RecordsGoalsAvg= (props: IProps) => {

    const {selectedPlayer} = props;
    
	const [avgGoals] = useFetch<AvgGoals>(url+ "?name=" + selectedPlayer);

    
    

	return (
		<div className="h-full w-full  ">
			<div className="flex flex-col items-center justify-center h-full w-full   ">
				<div className="flex flex-col items-center justify-center h-1/6 w-full rounded-t-2xl bg-snow border-2 border-gray ">
				<p className="font-mono lg:text-6xl text-l text-jet">Goals Per Game</p>
                    
				</div>
				<div className="flex w-full h-full bg-blackCoral rounded-b-2xl border-b-4 border-r-4 border-l-4 border-gray justify-center items-center">
                    <p className="lg:text-8xl text-6xl">{avgGoals && avgGoals.length!== 0 && `${avgGoals[0].goalsPer} `}</p>
                </div>
			</div>
		</div>
	);
};

export default RecordsGoalsAvg;
