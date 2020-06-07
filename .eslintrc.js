module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
	},
	extends: ['standard', 'airbnb-base', 'prettier'],
	rules: {
		'no-console': 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-tabs': 0,
		indent: ['error', 'tab', { 'SwitchCase': 1 }],
		'no-param-reassign': ['error', {
			props: true,
			ignorePropertyModificationsFor: ['state']
		}],
		yoda: [2, 'always'],
		'import/no-named-as-default': 0
	},
	parserOptions: {
		parser: 'babel-eslint',
  		sourceType: 'module',
		ecmaVersion: 2017,
  		allowImportExportEverywhere: true
	},
	settings: {
		'import/resolver': {
			'webpack': {
				'config': 'config/webpack.common.js'
			},
		}
	},
};
