import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
	root: {
		flexGrow: 1,
		width: '100%'
	},
	blueTextTitle: {
		color: '#00c3ff',
		fontFamily: 'FuturaNo2D,century gothic,arial,sans-serif',
		fontWeight: 700,
		fontSize: 25,
		marginTop: 10
	},
	damageBlock: {
		display: 'inline-block',
		verticalAlign: 'text-top',
		width: 24,
		height: 24,
		color: 'white',
		marginTop: 10,
		marginLeft: 20,
		fill: 'white'
	},
	damageText: {
		color: 'white',
		fontFamily: 'Big Noodle Too,impact,sans-serif',
		fontStyle: 'italic',
		fontWeight: 400,
		fontSize: 40,
		letterSpacing: 0.8
	},
	difficultyIcon: {
		fontSize: 40
	},
	introduction: {
		borderLeft: '6px solid #00c3ff',
		paddingLeft: 18,
		marginTop: 18,
		lineHeight: 1.6,
		fontWeight: 400,
		fontFamily: 'Arial,sans-serif',
		textAlign: 'left',
		fontSize: 'inherit'
	},
	divider: {
		borderBottom: '5px hsla(0,0%,100%,.15)',
		width: '100%',
		overflow: 'visible',
		marginTop: 40,
		marginBottom: 40
	},
	skillContainer: {
		backgroundColor: 'rgba(19,42,77,.2)',
		marginTop: 20,
		padding: 20
	},
	skillName: {
		textAlign: 'left',
		fontSize: 'inherit'
	},
	skillDetail: {
		textAlign: 'left',
		fontSize: 20
	},
	skillLogo: {},
	skillVideo: {
		marginTop: 20
	}
}))
