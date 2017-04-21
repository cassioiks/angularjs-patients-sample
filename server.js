var browserSync = require('browser-sync');
var serve = browserSync({
    server: {
        baseDir: './app'
    }
});