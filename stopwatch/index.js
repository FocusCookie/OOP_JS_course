function Stopwatch() {
  let startTime = 0;
  let duration = 0;

  this.start = function() {
    if (startTime !== 0) throw new Error("Stopwatch has already started.");

    startTime = Date.now();
  };

  this.stop = function() {
    if (startTime === 0) throw new Error("Stopwatch is not started.");

    duration += (Date.now() - startTime) / 1000;
    startTime = 0;
  };

  this.reset = function() {
    startTime = 0;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function() {
      if (startTime !== 0) throw new Error("Stopwatch is still running.");

      return duration;
    }
  });
}

const sw = new Stopwatch();
