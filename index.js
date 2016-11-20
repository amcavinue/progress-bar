var events = require('events');
var progressBar = new events.EventEmitter();

progressBar.on('start', function() {
    console.log('Starting');
});

progressBar.on('progress', function(x) {
    console.log('Checkpoint at ' + x + '%');
});

progressBar.on('end', function() {
    console.log('Finished');
});

progressBar.emit('start');

for (var i = 1; i <= 100; i++) {
    console.log(i + '% done');
    if (i % 10 === 0) {
        progressBar.emit('progress', i);
    }
}

progressBar.emit('end');
