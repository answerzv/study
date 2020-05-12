var gulp = require('gulp');

//引入sass插件
var scss=require('gulp-sass')

// 压缩图片插件
var imagemin = require('gulp-imagemin')



  gulp.task('default',function(){
    console.log('gulp启动成功')
  })


// 定义任务
  gulp.task('scss',function(){
    return gulp.src('lattice/index.scss')
           .pipe(scss())
           .pipe(gulp.dest('lattice/css'))
  })

  gulp.task('scss',function(){
    return gulp.src('game/set_1/home/index.scss')
           .pipe(scss())
           .pipe(gulp.dest('game/set_1/home/css'))
  })

  gulp.task('scss',function(){
    return gulp.src('game/set_1/set_game/index.scss')
           .pipe(scss())
           .pipe(gulp.dest('game/set_1/set_game/css'))
  })

  // 压缩图片
gulp.task('imagemin',function(){
    return gulp.src('game/set_1/set_game/images/*.{png,jpg,gif,ico}')
           .pipe(imagemin())
           .pipe(gulp.dest('game/set_1/set_game/css/imagemin'))
})

