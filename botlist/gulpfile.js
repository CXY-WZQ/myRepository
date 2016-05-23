var gulp=require('gulp');
var jade=require('gulp-jade');

gulp.task('haha',function(){
	 gulp.src('jade/index.jade')
	.pipe(jade())
	.pipe(gulp.dest('desk/html/'))
})