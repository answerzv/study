var gulp = require('gulp');

//引入sass插件
var scss=require('gulp-sass')

// 压缩图片插件
var imagemin = require('gulp-imagemin')



  gulp.task('default',function(){
    console.log('gulp启动成功')
  })


// 定义任务
  gulp.task('scsslattice',function(){
    return gulp.src('lattice/index.scss')
           .pipe(scss())
           .pipe(gulp.dest('lattice/css'))
  })

  gulp.task('scsshome',function(){
    return gulp.src('game/set_1/home/index.scss')
           .pipe(scss())
           .pipe(gulp.dest('game/style_css/home'))
  })

  gulp.task('scssset_game',function(){
    return gulp.src('game/set_1/set_game/index.scss')
           .pipe(scss())
           .pipe(gulp.dest('game/style_css/set_game'))
  })

  gulp.task('scssset_identity',function(){
    return gulp.src('game/set_2/set_identity/index.scss')
           .pipe(scss())
           .pipe(gulp.dest('game/style_css/set_identity'))
  })

  gulp.task('scssstart_diary',function(){
    return gulp.src('game/set_2/start_diary/index.scss')
           .pipe(scss())
           .pipe(gulp.dest('game/style_css/start_diary'))
  })

  gulp.task('scssstart_menu',function(){
    return gulp.src('game/set_3/start_menu/index.scss')
           .pipe(scss())
           .pipe(gulp.dest('game/style_css/start_menu'))
  })

// 压缩图片
gulp.task('imagemin',function(){
    return gulp.src('game/style_css/a-images/*.{png,jpg,gif,ico}')
           .pipe(imagemin())
           .pipe(gulp.dest('game/style_css/a-images'))
})

