import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import ReactPlayer from 'react-player'

// Styles
import useStyles from './style'

// Datas
import data from '../mockData'

const Story = () => {
	const classes = useStyles()
	const { overView } = data

	return (
		<div className={classes.root}>
			<Grid container direction="column">
				<Grid container direction="column" alignItems="flex-start">
					<Typography className={classes.blueTextTitle}>ROLE</Typography>
					<Grid container>
						<Typography className={classes.damageText}>DAMAGE</Typography>
						<svg
							class={classes.damageBlock}
							style={{ color: 'white' }}
							viewBox="0 0 32 32"
							role="presentation"
						>
							<title>Damage</title>
							<g>
								<rect x="2.1" y="28.1" width="7.1" height="3.9"></rect>
								<path d="M9.1,7c0,0,0-0.5,0-0.7C8.6,1.5,5.6,0,5.6,0s-3,1.5-3.5,6.3c0,0.2,0,0.7,0,0.7v18.4h3.5h3.5V7z"></path>
							</g>
							<g>
								<rect x="12.5" y="28.1" width="7.1" height="3.9"></rect>
								<path d="M19.5,7c0,0,0-0.5,0-0.7C19,1.5,16,0,16,0s-3,1.5-3.5,6.3c0,0.2,0,0.7,0,0.7v18.4H16h3.5V7z"></path>
							</g>
							<g>
								<rect x="22.9" y="28.1" width="7.1" height="3.9"></rect>
								<path d="M29.9,7c0,0,0-0.5,0-0.7C29.4,1.5,26.4,0,26.4,0s-3,1.5-3.5,6.3c0,0.2,0,0.7,0,0.7v18.4h3.5h3.5V7z"></path>
							</g>
						</svg>
					</Grid>

					<Typography className={classes.blueTextTitle}>DIFFICULTY</Typography>
					<Rating
						name="difficulty"
						value={3}
						className={classes.difficultyIcon}
						readOnly
					/>
					<Typography className={classes.introduction}>
						{overView.introduction}
					</Typography>
					<hr className={classes.divider}></hr>
					<Typography className={classes.blueTextTitle}>ABILITIES</Typography>
					{overView.skills.map((item) => (
						<Grid
							container
							direction="column"
							className={classes.skillContainer}
						>
							<Grid container direction="row" justify="flex-start">
								<Grid
									item
									xs={0.5}
									style={{
										display: 'inline-block',
										width: 60,
										height: 60
									}}
								>
									<div style={{ position: 'relative' }}>
										<svg
											style={{
												position: 'absolute',
												top: -10,
												right: 0,
												left: -10,
												fill: 'transparent',
												overflow: 'visible',
												stroke: 'hsla(0,0%,96.5%,.4)',
												strokeWidth: 2,
												width: 80
											}}
											//data-js="button-bg-svg"
											viewBox="0 0 100 100"
											preserveAspectRatio="xMidYMid meet"
										>
											<circle cx="50" cy="50" r="50"></circle>
										</svg>
										<img
											src={item.logo}
											alt={item.name}
											style={{
												width: '100%',
												height: '100%'
											}}
										/>
									</div>
								</Grid>

								<Grid
									item
									xs={11}
									direction="column"
									style={{ marginLeft: 20 }}
								>
									<Typography className={classes.skillName}>
										{item.name}
									</Typography>
									<Typography className={classes.skillDetail}>
										{item.detail}
									</Typography>
								</Grid>
							</Grid>
							<Grid item xs={12}>
								<ReactPlayer
									url={[item.video]}
									className={classes.skillVideo}
									controls={true}
									width="100%"
									height="100%"
								/>
							</Grid>
						</Grid>
					))}
				</Grid>
			</Grid>
		</div>
	)
}

export default Story
