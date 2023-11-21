/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	content: [],
	darkMode: ['class', '[data-mode="dark"]'],
	theme: {
		screens: {
			...defaultTheme.screens
		},
		colors: {
			'primary': 'rgb(18, 123, 202)',
			'secondary': 'rgb(226 232 240',
			'success': 'rgb(5 150 105)',
			'info': 'rgb(6 182 212)',
			'warning': 'rgb(250 204 21)',
			'pending': 'rgb(245 158 11)',
			'danger': 'rgb(225 29 72)',
			'light': 'rgb(241 245 249)',
			'dark': 'rgb(30 41 59)',
			transparent: colors.transparent,
			slate: colors.slate,
			white: colors.white,
			black: colors.black,
			orange: colors.orange,
			grey: colors.grey
		},
		extend: {
			spacing: {
				// 15: "3.75rem",
			},
			colors: {
				'black': colors.black,
				'green': colors.green,

				'dark-grey': {
					700: 'rgb(72 85 133)',
					900: 'rgb(27 37 89 )'
				}
			},
			translate: {
				0: 'translate(0)'
			},
			fontFamily: {
				'sans': ['Roboto', 'sans'],
			},
			borderOpacity: {
				'10': '0.1',
				'20': '0.2',
				'95': '0.95',
			},
			maxWidth: {
				'auto': 'auto',
			},
		},
		container: {
			center: true,
		},
	},
	plugins: [
		function ({ addComponents }) {
			addComponents({
				'.image-fit > img': {
					// Hier kannst du das gewünschte Styling für .image-fit > img definieren
					position: 'absolute',
					'-o-object-fit': 'cover',
					'object-fit': 'cover',
					top: '0',
					width: '100%',
					height: '100%',
				},
			})
		},
	],
}

