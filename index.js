function progressBar (onStart, onProgress, onEnd) {
    onStart();
    
    for (var i = 1; i <= 100; i++) {
        console.log(i + '% done');
        if (i % 10 === 0) {
            onProgress(i);
        }
    }
    
    onEnd();
}

function start() {
    console.log('Starting');
}

function progress(x) {
    console.log('Checkpoint at ' + x + '%');
}

function end() {
    console.log('Finished');
}

progressBar(start, progress, end);
