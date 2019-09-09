let sass=require("gulp-sass-china")

gulp.task("sass",()=>{
    gulp.src("../sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("../css/"))
})