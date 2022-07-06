import React from "react";
import WinsLeaderboard from "../../components/WinsLeaderboard";
import StreakLeaderboard from "../../components/StreakLeaderboard";
import PercentageLeaderboard from "../../components/PercentageLeaderboard";
import RecentMatchesLeaderboard from "../../components/RecentMatchesLeaderboard";

const Home = () => {
	return (
		<div className="pt-20 pb-5 md:px-5 sm:pr-9 ">
			
			<div className="flex sm:flex-col lg:flex-row justify-center h-full w-full py-5 pt-10 ">
				
				<WinsLeaderboard />
				<PercentageLeaderboard />
				<StreakLeaderboard />
				<RecentMatchesLeaderboard />
					
					
				
				
				
				
			</div>
		</div>
	);
};

export default Home;
