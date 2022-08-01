import React from "react";
import WinsLeaderboard from "../../components/Leaderboards/WinsLeaderboard";
import StreakLeaderboard from "../../components/Leaderboards/StreakLeaderboard";
import PercentageLeaderboard from "../../components/Leaderboards/PercentageLeaderboard";
import RecentMatchesLeaderboard from "../../components/Leaderboards/RecentMatchesLeaderboard";

const Home = () => {
	return (
		<div className="pt-20 pb-5 px-5 lg:h-screen h-full select-none">
			
			<div className="flex flex-col lg:flex-row justify-center items-center h-full w-full lg:py-10 py-5 px-5 bg-jet rounded-2xl ">
				
				<WinsLeaderboard />
				<PercentageLeaderboard />
				<StreakLeaderboard />
				<RecentMatchesLeaderboard />
					
					
				
				
				
				
			</div>
		</div>
	);
};

export default Home;
