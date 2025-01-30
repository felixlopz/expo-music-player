import { colors, fonSize } from '#/constants/tokens'
import { StyleSheet } from 'react-native'

export const defaultStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	text: {
		fontSize: fonSize.base,
		color: colors.text,
	},
})

export const utilsStyles = StyleSheet.create({})
