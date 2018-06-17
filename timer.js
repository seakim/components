//
// Sean Kim
//
// this component stops at time 0
// timer.start() to trigger

var timer = {
    clockRunning: false,
    intervalId: null,
    container: null,
    start: function () {
        if (!this.clockRunning) {
            this.time = 120;    //default time value
            this.intervalId = setInterval(this.count.bind(this), 1000);
            this.clockRunning = true;
        }
    },
    stop: function () {
        clearInterval(this.intervalId);
        this.clockRunning = false;
    },
    count: function () {
        this.time--;
        var converted = this.timeConverter(this.time);
        $("#timer").html(converted);
        console.log(this.time);
        if (this.time <= 0) {
            this.stop();
            // add event
        }
    },
    timeConverter: function (t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "00";
        } else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }
}