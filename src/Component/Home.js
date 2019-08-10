import React from "react";

import logo from "../images/logo.png";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

// Style
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	logo: {
		width: "40px"
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	},
	card: {
		maxWidth: 500,
		margin: "40px auto"
	},
	signupBtn: {
		whiteSpace: "nowrap"
	}
}));

// Methods for Login & Signup Tabs in Navbar
function TabPanel(props) {
	const {children, value, index, ...other} = props;

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			<Box p={3}>{children}</Box>
		</Typography>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

//for accessibility
function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`
	};
}

/**
 * Homepage Component
 */
export default function Home() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const theme = useTheme();

	function handleChange(event, newValue) {
		setValue(newValue);
	}

	return (
		<div className={classes.root}>
			{/* 
        > Navbar Start
      */}

			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<img src={logo} alt="Split It App" className={classes.logo} />
					</IconButton>

					<Typography variant="h6" className={classes.title}>
						Split It App
					</Typography>

					<Tabs
						value={value}
						onChange={handleChange}
						indicatorColor="primary"
						textColor="inherit"
						variant="fullWidth"
						aria-label="full width tabs example"
					>
						<Tab label="Login" {...a11yProps(0)} />
						<Tab label="Sign Up" {...a11yProps(1)} className={classes.signupBtn} />
					</Tabs>
				</Toolbar>
			</AppBar>
			{/* 
        > Navbar End
      */}

			{/* 
        > HomePage Info Start 
      */}

			<Card className={classes.card} width="75%">
				<CardContent>
					<Typography className={classes.title} color="textSecondary" gutterBottom>
						What is Split-it-App?
					</Typography>
					<Typography component="p">
						The Split-It-App would help users organize the expenses incurred in a group tour. With the help of this app,
						you would know who paid for a particular expense, for who and finally who owes whom.
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" color="secondary">
						Sign up now
					</Button>
				</CardActions>
			</Card>

			{/* 
        > HomePage Info End 
      */}

			{/* 
        > Form Modal Start 
      */}

			<div>
				<TabPanel value={value} index={0} dir={theme.direction}>
					Login Form
				</TabPanel>
				<TabPanel value={value} index={1} dir={theme.direction}>
					Signup Form
				</TabPanel>
			</div>

			{/* 
        > Form Modal End 
      */}
		</div>
	);
}
