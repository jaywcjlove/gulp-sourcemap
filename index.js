var through = require('through2');
// var applySourceMap = require('vinyl-sourcemaps-apply');
var path = require('path')
var fs = require('fs')
var UglifyJS = require("uglify-js")

var PLUGIN_NAME = 'gulp-sourcemap'

module.exports = function(options) {

    function minify(file, encoding, callback) {
        if(!options) options = {};
        if(!options.outSourceMap) options.outSourceMap = file.relative;
        if(!options.write)options.write = file.base;

        var result = UglifyJS.minify([file.path],options);

        write(options.write + options.outSourceMap, result.map)
        
        this.push(file);
        callback(null,file);
    }

    return through.obj(minify);
};

//写文件
function write(filepath, content) {
    mkdirsSync(path.dirname(filepath));
    return fs.writeFileSync(filepath, content);
};

// 同步循环创建所有目录 resolvePath
function mkdirsSync(dirpath, mode) {
    if(fs.existsSync(dirpath)){
        return true;
    }else{
        if(mkdirsSync(path.dirname(dirpath), mode)){
            fs.mkdirSync(dirpath, mode);
            return true;
        }
    }
};