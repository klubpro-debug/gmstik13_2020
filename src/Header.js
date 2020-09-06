import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Globalstyle";
import { lightTheme, darkTheme } from "./Themes";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import InfoIcon from "@material-ui/icons/Info";
import { IconButton } from "@material-ui/core";
import "./Header.css";

function Header() {
	const [theme, setTheme] = useState("light");
	const themeToggler = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};
	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<>
				<GlobalStyles />
				<div className="header">
					<h2>SAKTI Jako</h2>
					<div className="header__group">
						<IconButton onClick={themeToggler}>
							{theme === "light" ? (
								<Brightness2Icon className="iconLight" />
							) : (
								<Brightness1Icon className="iconDark" />
							)}
						</IconButton>
						<IconButton>
							{theme === "light" ? (
								<InfoIcon className="iconLight" />
							) : (
								<InfoIcon className="iconDark" />
							)}
						</IconButton>
					</div>
				</div>
			</>
		</ThemeProvider>
	);
}

export default Header;
