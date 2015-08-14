/**
 * Created by sherlock on 15/8/14.
 */


var koa = require('koa');
var app = koa();


app.use(function *(){
    this.body = 'Hello World';
});

app.listen(3000);