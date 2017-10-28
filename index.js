// setup

var express = require('express')
var stylus = require('stylus')
var nib = require('nib')

var app = express()

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html')

function compile(str, path) {
    return stylus(str)
        .set('filename', path)
        .use(nib())
}
app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: compile
}))
app.use(express.static(__dirname + '/public'))

app.get('/', function(req,res){
    res.render('index')
})
app.listen(3000, function(){
    console.log("Running on localhost:3000")
});
