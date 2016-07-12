var gulp = require('gulp'),
    less = require('gulp-less'),
    LessAutoprefix = require('less-plugin-autoprefix'),
    LessPluginCleanCSS = require('less-plugin-clean-css'),
    path = require('path'),
    concat = require('gulp-concat');

function CompileLessTask() {
    var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
    var cleanCSS = new LessPluginCleanCSS({advanced: true});

    return gulp.src('less/style.less')
        .pipe(less({
            plugins: [autoprefix, cleanCSS],
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist/css'));
}
gulp.task('less', CompileLessTask);

gulp.task('default', ['less']);