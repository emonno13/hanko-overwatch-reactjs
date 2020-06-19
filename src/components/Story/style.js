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
	infoContent: {
		fontFamily: 'Arial,sans-serif',
		fontWeight: 400,
		lineHeight: 1.4,
		fontSize: 'inherit',
		marginTop: 10,
		marginBottom: 10
	},
	sloganText: {
		color: '#00c3ff',
		fontFamily: 'Big Noodle Too,impact,sans-serif',
		fontWeight: 400,
		fontSize: '1.6rem',
		marginTop: 10,
		letterSpacing: 0.5,
		fontStyle: 'italic'
	},
	storyContentContainer: {
		backgroundColor: 'rgba(19,42,77,.2)',
		marginTop: 20,
		padding: 20,
		marginBottom: 20
	},
	storyText: {
		fontSize: 'inherit',
		whiteSpace: 'normal',
		lineHeight: 1.6,
		textAlign: 'left',
		marginTop: 20
	}
}))
