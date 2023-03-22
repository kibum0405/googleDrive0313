
import './App.css';
import React from 'react';
import TopMenu from './components/TopMenu.js';
import { Grid, Card, CardActions, CardContent, Button, Stack, Typography } from '@mui/material';
import LeftMenu from './components/LeftMenu.js'
import AppsIcon from '@mui/icons-material/Apps';
import { Route, Routes, Link } from "react-router-dom";
import DriveCards from './components/listers/DriveCards'
import IndexCards from './components/listers/IndexCards'
import NotificationCards from './components/listers/NotificationCards'
import VideoCards from './components/listers/VideoCards'

class App extends React.Component {
    constructor(props) {
		console.log("App.js")
		super(props);
		this.state = {
			menuFlag: false,
			useComponent: "",
			drawer: true,
			components: [],
			sideBar: true,
        	urlPath: "null",
			isCheckUrl: true,
		}
	}
	componentDidMount () {
		let path = document.location.href.split("#/")
		this.setState({...this.state, urlPath:path[0]});
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick = () => {
		this.setState({
			menuFlag: !this.state.menuFlag,
		})
	}
	handleProps = (name, value) => {
		this.setState({ ...this.state,
			[name]: value,
		})
	}
	changeUrl = () => {
		let path = document.location.href.split("#/")
		this.setState({...this.state, urlPath:path[0]});
		this.setState({isCheckUrl : true})
	}
  render() {
    return (
      <>
        <TopMenu className="top-menu-home-icon"
			handleClick={this.handleClick}
			urlPath={this.state.urlPath}
			handleProps={this.handleProps}
		/>

        <Grid className="app-grid-main" container>
            <LeftMenu menuFlag={this.state.menuFlag} handleClick={this.handleClick}
							changeUrl={this.changeUrl}/>
            <Grid item lg={8}>
				{
                    this.state.urlPath && this.state.isCheckUrl === true ?
                    <Routes>
                        <Route path="/drives" element={<DriveCards />} />
                        <Route path="/indices" element={<IndexCards />} />
                        <Route path="/notifications" element={<NotificationCards />} />
                        <Route path="/videos" element={<VideoCards />} />
                    </Routes>
					:
				    (
					<Stack className="app-stack-style"
						justifyContent="center"
					>
						<Card className="app-card-style"
                            variant="outlined"
                        >
							<CardContent className="app-card-content-style">
								<ul className="app-ul-style">
									<Typography
										component="li"
										align="center"
									>
										<AppsIcon className="app-app-icon-style" />
									</Typography>
								</ul>
							</CardContent>
                            <CardActions>
                                <Button fullWidth={true} color="secondary" variant="outlined"
                                    onClick={this.changeUrl} component={Link} to={"/drives"}>
                                Drive
                                </Button>
                            </CardActions>
						</Card>
						<Card className="app-card-style"
                            variant="outlined"
                        >
							<CardContent className="app-card-content-style">
								<ul className="app-ul-style">
									<Typography
										component="li"
										align="center"
									>
										<AppsIcon className="app-app-icon-style" />
									</Typography>
								</ul>
							</CardContent>
                            <CardActions>
                                <Button fullWidth={true} color="secondary" variant="outlined"
                                    onClick={this.changeUrl} component={Link} to={"/indices"}>
                                Index
                                </Button>
                            </CardActions>
						</Card>
						<Card className="app-card-style"
                            variant="outlined"
                        >
							<CardContent className="app-card-content-style">
								<ul className="app-ul-style">
									<Typography
										component="li"
										align="center"
									>
										<AppsIcon className="app-app-icon-style" />
									</Typography>
								</ul>
							</CardContent>
                            <CardActions>
                                <Button fullWidth={true} color="secondary" variant="outlined"
                                    onClick={this.changeUrl} component={Link} to={"/notifications"}>
                                Notification
                                </Button>
                            </CardActions>
						</Card>
						<Card className="app-card-style"
                            variant="outlined"
                        >
							<CardContent className="app-card-content-style">
								<ul className="app-ul-style">
									<Typography
										component="li"
										align="center"
									>
										<AppsIcon className="app-app-icon-style" />
									</Typography>
								</ul>
							</CardContent>
                            <CardActions>
                                <Button fullWidth={true} color="secondary" variant="outlined"
                                    onClick={this.changeUrl} component={Link} to={"/videos"}>
                                Video
                                </Button>
                            </CardActions>
						</Card>
					</Stack>
				    )
				}
			</Grid>
        </Grid>
      </>
    );
  }
}

export default App;

