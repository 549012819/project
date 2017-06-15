var gulp = require('gulp');

var sass = require('gulp-sass');

gulp.task('compile',function(){

	gulp.src('./src/sass/*.scss')

	.pipe(sass())

	.pipe(gulp.dest('./src/css'))
})

gulp.task('jtSass',function(){
	gulp.watch('./src/sass/*.scss',['compile'])
})