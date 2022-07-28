import React from "react";
import WinsLeaderboard from "../../components/Leaderboards/WinsLeaderboard";
import StreakLeaderboard from "../../components/Leaderboards/StreakLeaderboard";
import PercentageLeaderboard from "../../components/Leaderboards/PercentageLeaderboard";
import RecentMatchesLeaderboard from "../../components/Leaderboards/RecentMatchesLeaderboard";

const Home = () => {
	return (
		<div className="pt-20 pb-5 md:px-5 sm:pr-9 h-screen select-none">
			
			<div className="flex sm:flex-col lg:flex-row justify-center h-full w-full py-10 px-5 bg-jet rounded-2xl ">
				
				<WinsLeaderboard />
				<PercentageLeaderboard />
				<StreakLeaderboard />
				<RecentMatchesLeaderboard />
					
					
				
				
				
				
			</div>
		</div>
	);
};

export default Home;
