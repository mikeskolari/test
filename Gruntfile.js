module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
cordovacli: {
    options: {
        path: 'myHybridAppFolder',
        cli: 'cordova'
    },
    cordova: {
        options: {
            command: ['create','platform','plugin','build'],
            platforms: ['android'],
            plugins: ['device','dialogs'],
            path: 'myHybridAppFolder',
            id: 'io.cordova.hellocordova',
            name: 'HelloCordova'
        }
    },
    create: {
        options: {
            command: 'create',
            id: 'com.myHybridApp',
            name: 'myHybridApp'
        }
    },
    add_platforms: {
        options: {
            command: 'platform',
            action: 'add',
            platforms: ['android']
        }
    },
    add_plugins: {
        options: {
            command: 'plugin',
            action: 'add',
            plugins: [
                'battery-status',
                'camera',
                'console',
                'contacts',
                'device',
                'device-motion',
                'device-orientation',
                'dialogs',
                'file',
                'geolocation',
                'globalization',
                'inappbrowser',
                'media',
                'media-capture',
                'network-information',
                'splashscreen',
                'vibration'
            ]
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
    },
    emulate_android: {
        options: {
            command: 'emulate',
            platforms: ['android'],
            args: ['--target','Nexus5']
        }
    }
}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-cordovacli');
};
