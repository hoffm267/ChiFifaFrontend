import React from "react";
import useFetch from "../../Hooks/useFetch";
import { AvgGoals } from "../../interfaces/AvgGoals";
import { Player } from "../../interfaces/Player";

const url = process.env.REACT_APP_PLAYERS_GOALS_VS_URL

interface IProps {
    selectedPlayer: string
}

const RecordsGoalsAvgVS= (props: IProps) => {

    const {selectedPlayer} = props;
    
	const [avgGoals] = useFetch<AvgGoals>(url+ "?name=" + selectedPlayer);

    
    

	return (
		<div className="h-full w-full  ">
			<div className="flex flex-col items-center justify-center h-full w-full   ">
				<div className="flex flex-col items-center justify-center h-1/6 w-full rounded-t-2xl bg-snow border-2 border-gray ">
					<p className="font-mono text-6xl text-jet">Goals Per Game</p>
                    
				</div>
				
<div className="flex flex-col w-full h-full justify-center items-center p-5 bg-blackCoral rounded-b-2xl border-b-4 border-r-4 border-l-4 border-gray">
					<div className="flex flex-col text-xs h-full w-full justify-center items-center space-y-2">
						<p className="text-6xl font-bold">HIGHEST</p>
						<p className="text-2xl">
							{avgGoals && avgGoals.length!== 0 && `${avgGoals[0].playerName} - ${avgGoals[0].goalsPer}
									`}
						</p>
					</div>
					<div className="flex flex-col text-xs h-full w-full justify-center items-center space-y-2">
						<p className="text-6xl font-bold">LOWEST</p>
						<p className="text-2xl">
							{avgGoals && avgGoals.length!== 0 && `${avgGoals[avgGoals.length-1].playerName} - ${avgGoals[avgGoals.length-1].goalsPer}
									`}
	
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecordsGoalsAvgVS;
