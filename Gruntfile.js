module.exports = function(grunt) {

	var pkg = require('./package.json');

	grunt.initConfig({

//		pkg: grunt.file.readJSON('package.json'),

		cordovacli: {
			options: {
				path : pkg.path,
				cli: 'cordova'
			},
			init: {
				options: {
					command: ['create','platform','plugin'],
					id: pkg.id,
					name: pkg.name,
		          		platforms: pkg.platforms,
					plugins: pkg.plugins
				}
			},
			create: {
			    	options: {
				    command: 'create',
				    id: pkg.id
			    	}
			},
			add_platforms: {
				options: {
				    command: 'platform',
				    action: 'add',
				    platforms: pkg.platforms
				}
			},
			add_plugins: {
				options: {
				    command: 'plugin',
				    action: 'add',
                                    plugins: pkg.plugins
				}
			},
			remove_plugin: {
				options: {
				    command: 'plugin',
				    action: 'rm',
				    plugins: [
				        'battery-status'
				    ]
				}
			},
			build_android: {
				options: {
				    command: 'build',
				    platforms: ['android']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-cordovacli');

	grunt.registerTask('init', ['cordovacli:init']);

};
