import React from "react";

const WinsLeaderboard = () => {
    const test = ["1. Name - 8 Wins", "2. name - 7 Wins", "3. nAme - 4 Wins", "4. naMe - 3 Wins", "5. NAME - 2 Wins"];
	return (
		<div className="flex w-full   ">
			<div className="h-full w-full mx-5  border-jet rounded-lg   shadow-lg ">
				<div className="flex bg-jet justify-center items-center border-b-2 rounded-md border-jet h-12 w-full font-black text-snow font-mono text-4xl shadow-md">
					<p>Total Wins</p>
				</div>
                <div className="flex flex-col items-center w-full pt-10  text-2xl">
                {test.map(name => (
                    <p className="pb-20  " >{name}</p>
                ))}
                </div>
                
			</div>
		</div>
	);
};

export default WinsLeaderboard;
