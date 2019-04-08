// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Connect", "Pending", "Rejected"],
    datasets: [{
      label: "Revenue",
      backgroundColor: [
        "#34bbbb",
        "#147dac",
        "#cf1b84"
    ],
      borderColor: "rgba(2,117,216,1)",
      data: [5, 10, 15],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        labels: {         
              fontColor: 'red'         
      },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 4
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15,
          maxTicksLimit: 5
        },
        labels: {         
          fontColor: 'red'         
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
