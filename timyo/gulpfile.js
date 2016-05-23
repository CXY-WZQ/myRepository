var gulp=require('gulp');
var jade=require('gulp-jade');

gulp.task('hehe',function(){
	gulp.src('jade/index.jade')
	.pipe(jade())
	.pipe(gulp.dest('desk/html/'))
})