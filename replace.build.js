/**
 * This script allows the version number property to be updated. As part of the build process, just run
 * 
 * npm run updateBuild -- $(Build.BuildNumber)
 * 
 * Inspired by the following article.
 * 
 * https://stackoverflow.com/questions/41733660/how-to-insert-a-build-number-or-timestamp-at-build-time-in-angularcli
 */

var replace = require('replace-in-file');
var buildVersion = process.argv[2];
const options = {
    files: 'src/environments/environment.prod.ts',
    from: /{BUILD_VERSION}/g,
    to: buildVersion,
    allowEmptyPaths: false,
};

try {
    let changedFiles = replace.sync(options);
    console.log('Build version set: ' + buildVersion);
}
catch (error) {
    console.error('Error occurred:', error);
}