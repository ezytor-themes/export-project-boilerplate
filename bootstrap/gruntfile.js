module.exports = function (grunt) {
    grunt.initConfig({
        uncss: {
            dist: {
                files: [
                    { src: 'public/index.html', dest: 'public/assets/css/app.css' }
                ]
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

    // Load the plugins
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default tasks
    grunt.registerTask('default', ['uncss', 'cssmin']);
};