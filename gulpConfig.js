module.exports = function() {

    var distDirectory = './dist/';
    var srcDirectory = './src/';
    var bowerDirectory = srcDirectory + 'bower_components/';

    var config = {
        // create configuration

        paths: {
            distDirectory: distDirectory,
            srcDirectory: srcDirectory,
            html: srcDirectory + '/**/*.html',
            images: './src/images/**/*',
            js: [
                bowerDirectory + 'angular/angular.min.js',
                bowerDirectory + 'angular-route/angular-route.min.js',
                srcDirectory + 'scripts/chemistryApp.js',
                srcDirectory + 'scripts/chemistryController.js',
                srcDirectory + 'scripts/chemistryDirective.js',
                srcDirectory + 'scripts/chemistryService.js',
            ],
            css: [
                bowerDirectory + 'bootstrap/dist/css/bootstrap.min.css',
                srcDirectory + 'css/chemistry.css'
            ],
            jsValidate: [
                srcDirectory + 'scripts/**/*.js'
            ],
            sass: srcDirectory + 'sass/*.scss',
            json: srcDirectory +'scripts/*.json'
        },
                    port: 3000,
            devBaseUrl: 'http://localhost'


    };

    return config;
};