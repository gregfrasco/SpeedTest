var ping = [];
var download = [];
var upload = [];
for(var test of tests) {
    ping.push({
        x: new Date(test.timestamp),
        y: test.ping
    });
    download.push({
        x: new Date(test.timestamp),
        y: test.download/1000000
    });
    upload.push({
        x: new Date(test.timestamp),
        y: test.upload/1000000
    });
}
var pingChart = document.getElementById("ping").getContext('2d');
var downloadChart = document.getElementById("download").getContext('2d');
var uploadChart = document.getElementById("upload").getContext('2d');
new Chart(pingChart, {
    type: 'line',
    data: {
        datasets: [{
            data: ping,
            backgroundColor: [
                'rgba(33, 150, 243, 0.2)'
            ],
            borderColor: [
                'rgba(33, 150, 243, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        fill: false,
        legend: {
            display: false
        },
        responsive: true,
        scales: {
            xAxes: [{
                type: "time",
                display: false,
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                },
                ticks: {
                    major: {
                        fontStyle: "bold",
                        fontColor: "#FF0000"
                    }
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'milliseconds'
                },
                ticks: {
                    beginAtZero:true
                }
            }]
        }

    }
});
new Chart(downloadChart, {
    type: 'line',
    data: {
        datasets: [{
            data: download,
            backgroundColor: [
                'rgba(33, 150, 243, 0.2)'
            ],
            borderColor: [
                'rgba(33, 150, 243, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        fill: false,
        legend: {
            display: false
        },
        responsive: true,
        scales: {
            xAxes: [{
                type: "time",
                display: false,
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                },
                ticks: {
                    major: {
                        fontStyle: "bold",
                        fontColor: "#FF0000"
                    }
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'milliseconds'
                },
                ticks: {
                    beginAtZero:true
                }
            }]
        }

    }
});
new Chart(uploadChart, {
    type: 'line',
    data: {
        datasets: [{
            data: upload,
            backgroundColor: [
                'rgba(33, 150, 243, 0.2)'
            ],
            borderColor: [
                'rgba(33, 150, 243, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        fill: false,
        legend: {
            display: false
        },
        responsive: true,
        scales: {
            xAxes: [{
                type: "time",
                display: false,
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                },
                ticks: {
                    major: {
                        fontStyle: "bold",
                        fontColor: "#FF0000"
                    }
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'milliseconds'
                },
                ticks: {
                    beginAtZero:true
                }
            }]
        }

    }
});