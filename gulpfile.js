var gulp=require('gulp');
var bs=require('browser-sync').create();

gulp.task('bs-proxy',function(){
	bs.init({
		proxy:"http://www.baidu.com",
		serveStatic:['./build','./src']
	});
	gulp.watch(['./src/*']).on('change',bs.reload);
});


gulp.task('build',function(){
	gulp.src('src/*.html')
	.pipe(gulp.dest('build'));
});
