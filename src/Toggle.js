import React from "react";
import { func, string } from "prop-types";
import MoonIcon from "@material-ui/icons/Brightness2";
import SunIcon from "@material-ui/icons/WbSunny";
import { IconButton } from "@material-ui/core";

const Toggle = ({ theme, toggleTheme }) => {
	const isLight = theme === "light";
	return (
		<IconButton onClick={toggleTheme}>
			{theme === "light" ? (
				<SunIcon/>
			) : (
				<MoonIcon/>
			)}
		</IconButton>
	);
};

Toggle.propTypes = {
	theme: string.isRequired,
	toggleTheme: func.isRequired,
};

export default Toggle;
