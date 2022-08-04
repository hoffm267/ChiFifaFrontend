import React from "react";


interface IProps {
	score: number;
	setScore: React.Dispatch<React.SetStateAction<number>>;
}

const Scoreboard = (props: IProps) => {
	const {score, setScore} = props;

	const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.currentTarget.id === "upDiv" || e.currentTarget.id === "upButton"
			? setScore(score + 1)
			: score > 0
			? setScore(score - 1)
			: setScore(0);
	};

	return (
		<div className="flex flex-col justify-evenly items-center h-full w-full mb-2 bg-jet mx-5 rounded-2xl  ">
			<div
				id="upDiv"
				onClick={handleClick}
				className="flex justify-center items-center h-full w-full cursor-pointer"
			>
				<div
					id="upButton"
					className="border-solid border-b-snow border-b-[24px] lg:border-b-[32px] border-x-transparent border-x-[24px] lg:border-x-[32px] border-t-0 "
				></div>
			</div>
			<div className="flex justify-center items-center h-full w-full">
				<div className="flex flex-row text-6xl lg:text-9xl text-snow font-mono select-none">
					<p>
						{score < 10 ? 0 : null}
						{score}
					</p>
				</div>
			</div>
			<div
				id="downDiv"
				onClick={handleClick}
				className="flex justify-center items-center h-full w-full cursor-pointer "
			>
				<div
					id="downButton"
					className="border-solid border-t-snow border-t-[24px] lg:border-t-[32px] border-x-transparent border-x-[24px] lg:border-x-[32px] border-b-0"
				></div>{" "}
			</div>
		</div>
	);
};

export default Scoreboard;

