/** @type {import('tailwindcss').Config} */

const { colors } = require('tailwindcss/colors');

//#E33E33 other red
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			black: "#000805",
			red: "#F05D5E",
			dollarBill: "#97B85D",
			oliveDrab: "#668925",
			jet: "#353131",
			purple: "#776871",
			snow: "#fffafa",
			isabelline: "#F5F1ED",
			bone: "#DAD2BC",
			grullo: "#A99870",
			blackCoral: "#59656F",
			gray: "#D3D3D3",
			transparent: 'transparent',
			
		},
		extend: {
			keyframes: {
				wiggle: {
					"0%, 100%": {
						transform: "rotate(-3deg)",
					},
					"50%": {
						transform: "rotate(3deg)",
					},
				},
			},
			animation: {
				wiggle: "wiggle 1s ease-in-out infinite",
			},
			spacing: {
				
					'1/12': "8.333%",
				
			}
		},
	},
	plugins: [],
};
