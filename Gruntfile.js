module.exports = function(grunt) {

	// Load package.json data
	var pkg = require('./package.json');
	
	grunt.initConfig({
		
		exec: {
			create: {
				cmd: function() {
					grunt.file.mkdir(pkg.path);
					grunt.file.mkdir(pkg.path+"/.cordova");						 
					grunt.file.write(pkg.path+"/.cordova/config.json", JSON.stringify(configjson, null, 2));
					return 'cordova create '+pkg.path+' '+pkg.id+' '+pkg.name;
				}
		  	}
		},
		
		cordovacli: {
			options: {
				path: pkg.path,
				cli: 'cordova'
			},			
			create: {
				options: {
				    command: 'create',
				    id: pkg.id,
				    name: pkg.name,
					path: pkg.path
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
			build_android: {
				options: {
				    command: 'build',
				    platforms: ['android']
				}
			}    
		}

	});
	
	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-cordovacli');

	grunt.task.registerTask('init',['cordovacli:create','cordovacli:add_platforms','cordovacli:add_plugins']);
	grunt.task.registerTask('platforms',['cordovacli:add_platforms']);	
	grunt.task.registerTask('plugins',['cordovacli:add_plugins']);
};
