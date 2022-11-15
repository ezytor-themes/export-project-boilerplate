module.exports = function (grunt) {
    grunt.initConfig({
        uncss: {
            dist: {
                files: {
                    'public/assets/css/app.css': ['public/index.html', 'public/about.html']
                }
            }
        },
        cssmin: {
            dist: {
                files: [
                    { src: 'public/assets/css/app.css', dest: 'public/assets/css/app.css' }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['uncss', /** 'cssmin' **/ ]);
};