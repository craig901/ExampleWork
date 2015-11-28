module.exports = function(grunt) {

	'use strict';

	// Force use of Unix newlines
	grunt.util.linefeed = '\n';

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Project configuration
	grunt.initConfig({
		concat: {
			target1: {
				src: [
					'assets/js/src/modernizr.js',
					'assets/js/src/plugins/prism.js',
					'assets/js/src/plugins/isOnScreen.js',
					'assets/js/src/classes/Success.js',
					'assets/js/src/classes/Fail.js',
					'assets/js/src/classes/Article.js',
					'assets/js/src/classes/Enquiry.js',
					'assets/js/src/classes/Comment.js',
					'assets/js/src/classes/Reply.js',
					'assets/js/src/classes/Error.js',
					'assets/js/src/public/nav.js',
					'assets/js/src/public/home.js',
					'assets/js/src/jAlert.js',					
					'assets/js/src/public/contact.js',
					'assets/js/src/public/comments.js',
					'assets/js/src/public/login.js',
					'assets/js/src/admin/articles.js',
					'assets/js/src/admin/enquiries.js',
					'assets/js/src/admin/comments.js',
					'assets/js/src/admin/replies.js'
				],
				dest: 'assets/js/init.js'
			}
		},
		uglify: {
			target1: {
				src: '<%= concat.target1.dest %>',
				dest: 'assets/js/init.min.js'
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'assets/js/src/jAlert.js',
				'assets/js/src/admin/*.js',
				'assets/js/src/classes/*.js',
				'assets/js/src/public/*.js'
			]
		},
		less: {
			development: {
				options: {
					compress: true,
					optimization: 2,
					paths: ['assets/less']
				},
				files: {
					'assets/css/style.css': 'assets/less/style.less'
				}
			},
		},
		watch: {
			scripts: {
				files: [
					'assets/js/*.js',
					'assets/js/src/*.js',
					'assets/js/src/classes/*.js',
					'assets/js/src/public/*.js',
					'assets/js/src/admin/*.js'
				],
				tasks: ['concat', 'uglify']
			},
			css: {
				files: [
					'assets/less/*.less',
					'assets/less/pages/*.less',
					'assets/less/modules/*.less',
					'assets/less/plugins/*.less'
				],
				tasks: ['less']
			}
		}
	});

	// Custom Tasks
	grunt.registerTask('foo', function() {
		grunt.log.writeln('foo is running...');
	});

	// Define the default task
	grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'less', 'watch']);

};