var gulp = require("gulp");
var gutil = require("gulp-util");
var rimraf = require('gulp-rimraf');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");

// The development server (the recommended option for development)
gulp.task("default", ["webpack-dev-server"]);

// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
//               can serve an old app on refresh
gulp.task("build-dev", ["webpack:build-dev"], function() {
    gulp.watch(["src/**/*"], ["webpack:build-dev"]);
});

gulp.task('clean', function() {
    gulp.src("./dist/**/*").pipe(rimraf());
});

// Production build
gulp.task("build", ["clean", "webpack:build"]);

gulp.task("webpack:build", function(callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    myConfig.plugins = myConfig.plugins.concat(
        // new webpack.DefinePlugin({
        //     "process.env": {
        //         // This has effect on the react lib size
        //         "NODE_ENV": JSON.stringify("production")
        //     }
        // }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    );

    // run webpack
    webpack(myConfig, function(err, stats) {
        if (err)
            throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
        callback();
    });
});