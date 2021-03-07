var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require("gulp-sass");
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
var runSequence = require('run-sequence');
const webpackConfig = require('./webpack.config');

var js_dest = "./js/";

// gulp webpack でビルド・パッケージングを実行
gulp.task('build', function () {
	return webpackStream(webpackConfig, webpack)
		.pipe(gulp.dest('./js'))
		.on('end', function () {
			// ビルド終了
			console.log("build js.");
			// .js のライブラリを結合（いまのところすべて.ts なので結合する .js は無し）
			gulp.src([
        './js/**/*.js',
        './js/webcad.js'
      ])
      .pipe(concat('app.js'))
				// .pipe(uglify()) // minify するときはコメント解除
				.pipe(gulp.dest('./js'));
			// 結合終了
			console.log("concat js.");
		});
});


// SASSのコンパイル
gulp.task("sass", function(){

	gulp.src(["./src/employee/**/*.scss"])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        // .pipe(csscomb())
        .pipe(sass())
        /*.pipe(minifyCss())*/
        .pipe(concat("employee.min.css"))
        .pipe(sourcemaps.write('./'))
		.pipe(gulp.dest("./css/"));
});



