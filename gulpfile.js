var gulp = require('gulp');

//引入sass插件
var scss=require('gulp-sass')



  gulp.task('default',function(){
    console.log('gulp启动成功')
  })


// 定义任务
  gulp.task('scss',function(){
    return gulp.src('lattice/index.scss')
           .pipe(scss())
           .pipe(gulp.dest('lattice/css'))
  })