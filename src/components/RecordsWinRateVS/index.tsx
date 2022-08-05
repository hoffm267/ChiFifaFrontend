import useFetch from "../../Hooks/useFetch";
import { WinRates } from "../../interfaces/WinRates";

// const url = process.env.REACT_APP_PLAYERS_WIN_RATE_URL;
const url = "https://chififa.azurewebsites.net/players/winrate"

// const url = process.env.REACT_APP_PLAYERS_PERCENT_URL;

interface IProps {
	selectedPlayer: string;
}

const RecordsWinRateVS = (props: IProps) => {
	const { selectedPlayer } = props;

	const [winRates] = useFetch<WinRates>(url + "?name=" + selectedPlayer);

	return (
		<div className="h-full w-full  ">
			<div className="flex flex-col items-center justify-center h-full w-full   ">
				<div className="flex flex-col items-center justify-center h-1/6 w-full rounded-t-2xl bg-snow border-2 border-gray ">
					<p className="font-mono lg:text-6xl text-l text-jet">Win Rate</p>
				</div>
				<div className="flex flex-col w-full h-full justify-center items-center space-y-2 p-5 bg-blackCoral rounded-b-2xl border-b-4 border-r-4 border-l-4 border-gray">
					<div className="flex flex-col text-xs h-full w-full justify-center items-center">
						<p className="lg:text-6xl text-xl font-bold">HIGHEST</p>
						<p className="lg:text-2xl text-md">
							{winRates && winRates.length!== 0 && `${winRates[0].playerName} - ${(
									(winRates[0].gamesWon /
										(winRates[0]
											.gamesPlayed 
									)) * 100 
							).toPrecision(3)} %`}
						</p>
					</div>
					<div className="flex flex-col text-xs h-full w-full justify-center items-center ">
						<p className="lg:text-6xl text-xl font-bold">LOWEST</p>
						<p className="lg:text-2xl text-md">
							{winRates && winRates.length !== 0 &&
								`${winRates[winRates.length - 1].playerName} - ${(
									(winRates[winRates.length - 1].gamesWon /
										(
									winRates[winRates.length - 1].gamesPlayed) * 100)
							).toPrecision(3)} %`}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecordsWinRateVS;
