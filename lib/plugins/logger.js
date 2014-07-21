'use strict';

module.exports = function (formatic) {

  formatic.form.wrap('compile', function (next, field) {
    console.log('before compile:');
    console.log(JSON.stringify(field));
    console.log('');
    var result = next();
    console.log('after compile:');
    console.log(JSON.stringify(result));
    console.log('');
    return result;
  });

  formatic.form.wrap('compileField', function (next, field) {
    console.log('before compileField:');
    console.log(JSON.stringify(field));
    console.log('');
    var result = next();
    console.log('after compileField:');
    console.log(JSON.stringify(result));
    console.log('');
    return result;
  });
};