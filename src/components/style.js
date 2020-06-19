import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
	root: {
		flexGrow: 1,
		width: '100%',
		flexDirection: 'column'
	},
	appBar: {
		backgroundColor: 'white',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 15
	},
	appBarButton: {
		color: '#212121',
		fontSize: 30
	},
	logo: {
		alignSelf: 'center'
	},
	media: {
		height: '100%',
		width: '100%',
		alignSelf: 'center'
	},
	hanzoName: {
		fontFamily: 'Big Noodle',
		fontStyle: 'italic',
		fontWeight: 400,
		letterSpacing: 0.5,
		color: 'white',
		fontSize: 50
	},
	contentContainer: {
		width: '90%'
	},
	changeContentBtn: {
		fontWeight: 700,
		fontFamily: 'FuturaNo2D,century gothic,arial,sans-serif',
		fontSize: 30
	},
	relatedMediaContainer: {
		marginTop: 20
	},
	relatedMediaText: {
		fontFamily: 'Big Noodle Too,impact,sans-serif',
		fontStyle: 'italic',
		fontWeight: 400,
		fontSize: '4rem',
		marginTop: 20,
		letterSpacing: 0.8,
		color: '#333'
	},
	relatedItemCover: {
		width: '80%',
		height: '50%',
		transition: 'transform .5s ease',
		overflow: 'hidden',
		'&:hover': {
			opacity: 0.8,
			transform: 'scale(1.2)',
			webkitTransform: 'scale(1.2)',
			cursor: 'pointer'
		}
	},
	relatedPlayContainer: {
		display: 'flex',
		flex: 1,
		justifyContent: 'center'
	},
	relatedPlayBtn: {
		backgroundColor: '#ff8900',
		width: 20,
		height: 20,
		position: 'relative',
		bottom: 0
	},
	relatedPlayIcon: {
		position: 'absolute',
		borderColor: 'transparent transparent transparent #f2f1ed',
		borderStyle: 'solid',
		borderWidth: '5px 0 5px 8.66px',
		top: '20%',
		left: '30%'
	},
	relatedItemText: {
		color: 'black',
		fontSize: 20,
		lineHeight: 5,
		fontFamily: 'Roboto,Helvetica Neue,Arial,sans-serif',
		fontWeight: 700
	},
	contactGameContainer: {
		backgroundImage: `url(${'https://static.playoverwatch.com/img/pages/buy/buy-bar-bg-3c956a1db2.jpg'})`
	},
	buyGameBtn: {
		marginTop: 30,
		backgroundColor: '#d95409',
		transition: 'transform .5s ease',
		padding: 10,
		width: 200,
		'&:hover': {
			backgroundColor: '#f06414',
			transform: 'scale(1.2)',
			webkitTransform: 'scale(1.2)'
		}
	},
	buyGameText: {
		color: 'white',
		fontSize: 'inherit',
		fontWeight: 700
	},
	divider: {
		borderBottom: '5px  hsla(0,0%,100%,.15)',
		width: '90%',
		overflow: 'visible',
		marginTop: 20,
		marginBottom: 20
	},
	stayConnectedText: {
		fontFamily: 'Big Noodle Too,impact,sans-serif',
		fontStyle: 'italic',
		color: '#f6f6f6',
		letterSpacing: '0.1rem',
		fontSize: '1.5rem'
	},
	aTags: {
		textDecoration: 'none'
	},
	socialBtn: {
		color: '#d1cdcd',
		fontSize: 40,
		marginRight: 10,
		marginLeft: 10,
		marginBottom: 20,
		'&:hover': {
			color: 'white'
		}
	},
	carouselContainer: {
		height: '100%',
		backgroundColor: 'rgba(19, 42, 77, 0.85)'
	},
	carouselImgae: {
		width: '100%',
		height: '95%'
	}
}))
