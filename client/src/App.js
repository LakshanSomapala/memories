// import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
// import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
// import { Button } from "@mui/material";

import memories from "./images/memories.png";
import Posts from "./components/posts/postsComponent";
import Form from "./components/form/formComponent";
// import useStyle from "./styles";
import "./styles.css";
import { useDispatch } from "react-redux";
import { getPosts } from "./action/postsAction";

const App = () => {
	// const classes = useStyle();
	const [currentId, setCurrentId] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [currentId, dispatch]);

	return (
		// <Container maxidth="lg">
		// 	<AppBar position="static" color="inherit">
		// 		<Typography className={classes.heading} variant="h2" align="center">
		// 			Memories
		// 		</Typography>
		// 		<img
		// 			className={classes.image}
		// 			src={memories}
		// 			alt="memories"
		// 			height="60"
		// 		></img>
		// 	</AppBar>
		// 	<Grow in>
		// 		<Container>
		// 			<Grid
		// 				container
		// 				justify="space-between"
		// 				alignItems="stretch"
		// 				spacing={3}
		// 			>
		// 				<Grid item xs={12} sm={7}>
		// 					<Posts />
		// 				</Grid>
		// 				<Grid item xs={12} sm={4}>
		// 					<Form />
		// 				</Grid>
		// 			</Grid>
		// 		</Container>
		// 	</Grow>
		// </Container>
		<>
			<div className="heading-container">
				<div className="heading">
					<span className="heading-text">Memories</span>
					<img className="heading-image" src={memories} alt="memories"></img>
				</div>
			</div>
			<div className="posts-body">
				{/* justify="space-between" alignItems="stretch" spacing={3} */}
				<div className="posts">
					<Posts setCurrentId={setCurrentId} />
				</div>
				<div className="form">
					<Form currentId={currentId} setCurrentId={setCurrentId} />
				</div>
			</div>
		</>
	);
};

export default App;

// Container className="heading-container">
// 			<AppBar className="appbar">
// 				<Typography className="heading" variant="h2">
// 					Memories
// 				</Typography>
// 				<img className="heading-image" src={memories} alt="memories"></img>
// 			</AppBar>
// 			<Grow in>
// 				<Container>
// 					<Grid
// 						container
// 						justify="space-between"
// 						alignItems="stretch"
// 						spacing={3}
// 					>
// 						<Grid item xs={12} sm={7}>
// 							<Posts />
// 						</Grid>
// 						<Grid item xs={12} sm={4}>
// 							<Form />
// 						</Grid>
// 					</Grid>
// 				</Container>
// 			</Grow>
// 		</Container>
