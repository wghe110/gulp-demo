//------gulp server---------
var gulp        = require('gulp'),					//gulp
	browserSync = require('browser-sync'),			//实时刷新
	sass        = require('gulp-ruby-sass'),		//sass编译，注：需要安装ruby和sass
	autoprefix  = require('gulp-autoprefixer');		//浏览器前缀自动补齐

gulp.task('default', function(){
	//server
	browserSync({
		files: '**/*.+(css|js|html)',
		browser: 'google chrome',
		server: {
			baseDir: './'
		},
		startPath: 'index.html',
		open: 'external'
	});
	//watch sass
	gulp.watch('scss/**/*.scss', function(){
		sass('scss/*.scss')
		.on('error', sass.logError)
		.pipe(autoprefix())
		.pipe(gulp.dest('css/'));
	})
})