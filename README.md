# gulp-sourcemap


> **Warning**  
> 🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨   
> The gulp-sourcemap plugin can be removed.
> Gulp already has built-in support for source maps.
> https://gulpjs.com/docs/en/api/src/#sourcemaps

Source map support for `Gulp.js`.  
Write inline source maps.  
Inline source maps are embedded in the source file.  


## Usage

Example:

```js
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemap');
gulp.src('dist/JSLite.js')
    .pipe(sourcemap({
        outSourceMap:'JSLite.js.map',
        sourceRoot:"http://jslite.io",
        write:'./build/'
    }))
    .pipe(gulp.dest('./build/'));
```

## Options



`sourceRoot` root: the sourceRoot property (see the spec)  
`outSourceMap` The inSourceMap is only used if you also request outSourceMap (it makes no sense otherwise).
