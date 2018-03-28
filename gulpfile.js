/**
 * Created by Liyue on 2018/3/7.
 */

var init = require('./build/gulpfile.init.js');
var prod = require('./build/gulpfile.prod.js');
var dev = require('./build/gulpfile.dev.js');

init();
prod();
dev();