# stopwatchJS
This project is a stopwatch in HTML with javascript

A `stopWatch` is created in `./scripts/stopwatch.js` and tracks the time with a `callback()` function.
The `callback()` function updates the time using a `timeFunction` and recursively calls itself using Promises.
The functionality of the stopwatch is determined by the start, stop and reset buttons, which call the `startTime()`, `stopTime()` and `resetTime()` functions.
These functions determine the behaviour of the stopwatch by substituting the `timeFunction` which is continuously called in `callback()`.
