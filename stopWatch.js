//
// Sean Kim
//
// timer.start() to trigger

// This code will run as soon as the page loads
window.onload = function() {
};

var stopwatch = {
  clockRunning: false,
  time: 0,
  lap: 1,
  //  Variable that will hold our setInterval that runs the stopwatch
  intervalId: null,
  container: null,

  setContainer: function(jqueryNode){
    this.container = jqueryNode;
    this.container.find(".lap").on("click", this.recordLap.bind(this));
    this.container.find(".stop").on("click", this.stop.bind(this));
    this.container.find(".reset").on("click", this.reset.bind(this));
    this.container.find(".start").on("click", this.start.bind(this));
  },

  reset: function() {
    this.time = 0;
    this.lap = 1;
    // Change the "display" div to "00:00."
    this.container.find(".display").text("00:00");
    // Empty the "laps" div.
    this.container.find(".laps").text("");
  },
  start: function() {
    // console.log(this);
    // Use setInterval to start the count here and set the clock to running.
    if (!this.clockRunning) {
      this.intervalId = setInterval(this.count.bind(this), 1000);
      this.clockRunning = true;
    }
  },
  stop: function() {
    // Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(this.intervalId);
    this.clockRunning = false;
  },
  recordLap: function() {
    // Get the current time, pass that into the stopwatch.timeConverter function, and save the result in a variable.
    var converted = this.timeConverter(this.time);
    // Add the current lap and time to the "laps" div.
    this.container.find(".laps").append("<p>Lap " + this.lap + " : " + converted + "</p>");
    this.lap++;
  },
  count: function() {
    this.time++;
    // Get the current time, pass that into the stopwatch.timeConverter function, and save the result in a variable.
    var converted = this.timeConverter(this.time);
    // console.log(converted);
    // Use the variable we just created to show the converted time in the "display" div.
    this.container.find(".display").text(converted);
  },
  timeConverter: function(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) { seconds = "0" + seconds; }
    if (minutes === 0) {
      minutes = "00";
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }
};

//jquery full object DEEP copy
var stopwatch2 = $.extend(true, {}, stopwatch);

stopwatch.setContainer($('.stopwatch'));
stopwatch2.setContainer($('.stopwatch-2'));
