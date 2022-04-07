const gulp = require("gulp");
const path = require("path");
const dest = "../mogo-prj/dist";

gulp.task("css", () =>
  gulp
    .src("./src/styles/index.css")
    .pipe(
      require("gulp-postcss")([
        require("postcss-import")(),
        require("postcss-nested")(),
        require("postcss-inline-svg")(),
        require("postcss-svgo")(),
        require("postcss-preset-env")(),
        require("cssnano")(),
      ])
    )

    .pipe(require("gulp-concat")("style.css"))

    .pipe(gulp.dest(path.join(dest, "css")))
);

gulp.task("images", () =>
  gulp.src("./src/images/**/*").pipe(gulp.dest(path.join(dest, "images")))
);

gulp.task("default", gulp.parallel(["css", "images"]));

gulp.task(
  "watch",
  gulp.series([
    "default",
    () => {
      gulp.watch("./src/styles", gulp.series("css"));
      gulp.watch("./src/images", gulp.series("images"));
    },
  ])
);
