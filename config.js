// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Megan',
	imageBackground: true,
	openInNewTab: false,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '3908b5f75576fe849c9c568702f9b781', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'F', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '34.163340',
	defaultLongitude: '-117.899900',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'YouTube',
			icon: 'youtube',
			link: 'www.youtube.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'mail.google.com/mail/u/0/',
		},
		{
			id: '3',
			name: 'Calendar',
			icon: 'calendar',
			link: 'calendar.google.com/calendar/r',
		},
		{
			id: '4',
			name: 'Google Drive',
			icon: 'chrome',
			link: 'drive.google.com/drive/my-drive',
		},
		{
			id: '5',
			name: 'Github',
			icon: 'github',
			link: 'github.com/',
		},
		{
			id: '6',
			name: 'Desmos',
			icon: 'square-radical',
			link: 'www.desmos.com/scientific',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'sprout',
			id: '1',
			links: [
				{
					name: 'Reddit',
					link: 'www.reddit.com/',
				},
				{
					name: 'Twitch',
					link: 'www.twitch.tv/',
				},
				{
					name: 'Amazon',
					link: 'www.amazon.com/',
				},
				{
					name: 'Yelp',
					link: 'www.yelp.com/',
				},
			],
		},
		{
			icon: 'flower',
			id: '2',
			links: [
				{
					name: 'fflogs',
					link: 'www.fflogs.com/',
				},
				{
					name: 'libgen',
					link: 'libgen.re/',
				},
				{
					name: 'Canvas',
					link: 'canvas.cpp.edu/',
				},
				{
					name: 'Bato',
					link: 'mto.to/v3x',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'github.com/migueravila',
				},
			],
		},
	],
};
