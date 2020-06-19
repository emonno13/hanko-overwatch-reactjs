import React, { useState, useEffect } from 'react'

// Material UI
import {
	AppBar,
	Avatar,
	Typography,
	Grid,
	IconButton,
	Tooltip,
	Button
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import PersonIcon from '@material-ui/icons/Person'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'

// Libs
import ReactPlayer from 'react-player'
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel'

// Components
import Overview from './Overview'
import Story from './Story'

// Styles
import useStyles from './style'

// Datas
import data from './mockData'

const CharacterIntroduction = () => {
	const classes = useStyles()
	const [content, setContent] = useState(true)
	const [isOpen, setOpen] = useState(false)
	const [colorBtn1, setColorBtn1] = useState('#b4bac8')
	const [colorBtn2, setColorBtn2] = useState('#3e383a')
	const { relatedMedia } = data

	const changeContent = (x) => {
		setContent(x)
	}

	useEffect(() => {
		if (content) {
			setColorBtn1('#b4bac8')
			setColorBtn2('#3e383a')
		} else {
			setColorBtn1('#3e383a')
			setColorBtn2('#b4bac8')
		}
	}, [content])

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.appBar}>
				<Tooltip title="Menu" placement="left">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://playoverwatch.com/en-us/"
						className={classes.aTags}
					>
						<IconButton edge="start" aria-label="menu">
							<MenuIcon className={classes.appBarButton} />
						</IconButton>
					</a>
				</Tooltip>

				<Avatar
					alt="Hanzo"
					src="https://static.playoverwatch.com/img/logos/logo--overwatch-7d38f33606.svg"
					className={classes.logo}
				/>
				<Tooltip title="Profile" placement="right">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://kr.battle.net/login/en/?ref=https://kr.battle.net/oauth/authorize?response_type%3Dcode%26client_id%3D057adb2af62a4d59904f74754838c4c8%26scope%3Daccount.full%2520commerce.virtualcurrency.full%2520commerce.virtualcurrency.basic%26state%3DeyJzdGF0ZUVudHJvcHkiOiJ6VFBNeHFhbDMweEJPdUZBaE11ai1VQUdydVNsa0ZTaVFEQnZuVFNpSTBJPSIsInJlZmVycmVyIjoiL292ZXJ2aWV3In0%253D%26redirect_uri%3Dhttps://account.blizzard.com/login/oauth2/code/account-settings%26registration_id%3Daccount-settings&app=oauth"
						className={classes.aTags}
					>
						<IconButton
							edge="start"
							className={classes.menuButton}
							aria-label="profile"
						>
							<PersonIcon className={classes.appBarButton} />
						</IconButton>
					</a>
				</Tooltip>
			</AppBar>

			<Grid container direction="column" justify="center" alignItems="center">
				<Typography className={classes.hanzoName}>Hanzo</Typography>
				<ReactPlayer
					url={[
						'https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/intro-video.mp4',
						'https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/ability-lunge/video-ability.mp4',
						'https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/ability-storm-arrows/video-ability.mp4',
						'https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/ability-sonic-arrow/video-ability.mp4'
					]}
					muted={true}
					width="90%"
					height="100%"
					playing={true}
					loop={true}
				/>

				<Grid container direction="column" className={classes.contentContainer}>
					<Grid container>
						<Grid item xs={6} style={{ backgroundColor: !content && 'white' }}>
							<Button
								style={{
									width: '100%'
								}}
								onClick={() => changeContent(true)}
							>
								<Typography
									style={{ color: colorBtn1 }}
									className={classes.changeContentBtn}
								>
									OVERVIEW
								</Typography>
							</Button>
						</Grid>
						<Grid item xs={6} style={{ backgroundColor: content && 'white' }}>
							<Button
								style={{ width: '100%' }}
								onClick={() => changeContent(false)}
							>
								<Typography
									style={{ color: colorBtn2 }}
									className={classes.changeContentBtn}
								>
									STORY
								</Typography>
							</Button>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						{content ? <Overview /> : <Story />}
					</Grid>
				</Grid>
			</Grid>
			<Grid
				container
				direction="column"
				justify="center"
				alignItems="center"
				style={{ backgroundColor: 'white' }}
			>
				<Typography className={classes.relatedMediaText}>
					RELATED MEDIA
				</Typography>
				<Grid
					container
					direction="row"
					className={classes.relatedMediaContainer}
				>
					{relatedMedia.map((item) => (
						<Grid item xs={4}>
							<btn onClick={() => setOpen(true)}>
								<div className={classes.relatedPlayContainer}>
									<div className={classes.relatedPlayBtn}>
										<div className={classes.relatedPlayIcon} />
									</div>
									<img
										src={item.img}
										alt={item.tile}
										className={classes.relatedItemCover}
									/>
								</div>
							</btn>

							<Typography className={classes.relatedItemText}>
								{item.title}
							</Typography>
						</Grid>
					))}
				</Grid>
			</Grid>
			<Grid
				container
				direction="column"
				justify="center"
				alignItems="center"
				className={classes.contactGameContainer}
			>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://us.shop.battle.net/en-us/product/overwatch?blzcmp=ow_buy_footer"
					className={classes.aTags}
				>
					<Button className={classes.buyGameBtn}>
						<Typography className={classes.buyGameText}>
							BUY THIS GAME
						</Typography>
					</Button>
				</a>
				<hr className={classes.divider}></hr>
				<Typography className={classes.stayConnectedText}>
					STAY CONNECTED
				</Typography>
				<Grid container justify="center" alignItems="center">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.facebook.com/OverwatchSEA/?brand_redir=292929874198161"
						className={classes.aTags}
					>
						<IconButton edge="start" aria-label="facebook">
							<FacebookIcon className={classes.socialBtn} />
						</IconButton>
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://twitter.com/playoverwatch"
						className={classes.aTags}
					>
						<IconButton edge="start" aria-label="twitter">
							<TwitterIcon className={classes.socialBtn} />
						</IconButton>
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.instagram.com/playoverwatch/ "
						className={classes.aTags}
					>
						<IconButton edge="start" aria-label="instagram">
							<InstagramIcon className={classes.socialBtn} />
						</IconButton>
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.youtube.com/PlayOverwatch"
						className={classes.aTags}
					>
						<IconButton edge="start" aria-label="youtube">
							<YouTubeIcon className={classes.socialBtn} />
						</IconButton>
					</a>
				</Grid>
			</Grid>
			<AutoRotatingCarousel
				open={isOpen}
				autoplay={false}
				onClose={() => setOpen(false)}
				onStart={() => setOpen(false)}
			>
				{relatedMedia.map((item) => (
					<div className={classes.carouselContainer}>
						{item.isVideo ? (
							<ReactPlayer
								url={[item.media]}
								controls={true}
								width="100%"
								height="90%"
							/>
						) : (
							<img
								className={classes.carouselImgae}
								src={item.media}
								alt={item.title}
							/>
						)}
					</div>
				))}
			</AutoRotatingCarousel>
		</div>
	)
}

export default CharacterIntroduction
