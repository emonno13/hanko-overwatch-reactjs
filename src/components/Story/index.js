import React from 'react'
import { Box, Typography, Grid } from '@material-ui/core'

// Styles
import useStyles from './style'

// Datas
import data from '../mockData'

const Story = () => {
	const classes = useStyles()
	const { story } = data

	return (
		<div className={classes.root}>
			<Grid container direction="column">
				<Grid container direction="column" alignItems="flex-start">
					<Typography className={classes.blueTextTitle}>BIOGRAPHY</Typography>
					{story.info.map((item) => (
						<Typography className={classes.infoContent}>
							{item.infoContent}
						</Typography>
					))}
					<Typography className={classes.sloganText}>{story.slogan}</Typography>
					<Box component="div" className={classes.storyContentContainer}>
						{story.storyContent.map((item) => (
							<Typography className={classes.storyText}>
								{item.paragraph}
							</Typography>
						))}
					</Box>
				</Grid>
			</Grid>
		</div>
	)
}

export default Story
