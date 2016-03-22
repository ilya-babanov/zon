// LICENSE_CODE ZON
'use strict'; /*jslint:browser*/

var E = exports;

function log(args){ window.console.log.apply(console, args); }

function bigger_log(a, b){
    log([1, 2, 3, a, b]);
}

function long_arguments(aaaaaaa, bbbbbbbb,
    ccccccccc)
{
    bigger_log(aaaaaaa, bbbbbbbb, ccccccccc);
    if (aaaaaaa !== undefined)
        log([1, 3, 3]);
    else if (bbbbbbbb === undefined)
    {
        // XXX ilia: handle multpile arguments in long_arguments
        log();
        bigger_log();
    }
    else
        log(9);

    aaaaaaa.forEach(a=>log());
    bbbbbbbb.map(c=>{
        log();
        long_arguments();
    });
}

function foo(data){
    var bar = Object.create(data);
    bar.t = 4+5;
    if (bar.t<10)
        bar.t += 11;
    // boolean
    bar.t = !!bar.t;
    // signed 32 bit integer
    bar.t = bar.t|0;
    // unsigned 32 bit integer
    bar.t = bar.t>>>0;
    log(+bar.t); // number
    if (bar.t && bar.t>321)
        bar.t = 123;
    else if (bar&&bar.t)
        bar.r = 'ugly';
    return bar;
}

var test = {
    a: '123',
    b: 321,
};
var baz = {a: 123, b: 456};
var t = function(){};

if (test.b>333 || test.c<14)
{
    log('test'+' b '+ ' is bigger');
    long_arguments();
    foo();
}

var a = 'aaa'
+ 'aaa';

E.foo = foo;
