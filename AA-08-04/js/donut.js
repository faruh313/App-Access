$(function(){

    //get the doughnut chart canvas
    var ctx1 = $("#doughnut-chartcanvas-1");
    //  var ctx2 = $("#doughnut-chartcanvas-2");
	// var ctx3 = $("#doughnut-chartcanvas-3");



    //doughnut chart data
    var data1 = {
        labels: ["Learning - In Progress", "Learning - Not Started", "Learning - Completed", "Absent", "Certified", "Not Certified"],
        datasets: [
            {
                label: "TeamA Score",
                data: [60, 50, 25],
                backgroundColor: [
                    "#cf1b84",
                    "#147dac",
                    "#34bbbb"
                ],
                borderColor: [
                    "#ffffff",
                    "#ffffff",
                    "#ffffff"
                ],
                borderWidth: [3, 3, 3]
            }
        ]
    };

    //doughnut chart data
    // var data2 = {
    //     labels: ["Learning - In Progress", "Learning - Not Started", "Learning - Completed", "Absent", "Certified", "Not Certified"],
    //     datasets: [
    //         {
    //             label: "TeamA Score",
    //             data: [80, 50, 25, 20, 40, 5],
    //             backgroundColor: [
    //                 "#ff9a5f",
    //                 "#ff5b59",
    //                 "#a2cc4d",
    //                 "#b56d2e",
    //                 "#49ce5a",
    //                 "#848b95"
    //             ],
    //             borderColor: [
    //                 "#ff9a5f",
    //                 "#ff5b59",
    //                 "#a2cc4d",
    //                 "#b56d2e",
    //                 "#49ce5a",
    //                 "#848b95"
    //             ],
    //             borderWidth: [1, 1, 1, 1, 1]
    //         }
    //     ]
    // };
    // var data3 = {
    //     labels: ["Learning - In Progress", "Learning - Not Started", "Learning - Completed", "Absent", "Certified", "Not Certified"],
    //     datasets: [
    //         {
    //             label: "TeamA Score",
    //             data: [70, 50, 25, 20, 40, 10],
    //             backgroundColor: [
    //                 "#ff9a5f",
    //                 "#ff5b59",
    //                 "#a2cc4d",
    //                 "#b56d2e",
    //                 "#49ce5a",
    //                 "#848b95"
    //             ],
    //             borderColor: [
    //                 "#ff9a5f",
    //                 "#ff5b59",
    //                 "#a2cc4d",
    //                 "#b56d2e",
    //                 "#49ce5a",
    //                 "#848b95"
    //             ],
    //             borderWidth: [1, 1, 1, 1, 1]
    //         }
    //     ]
    // };

    //options
    var options = {
        responsive: true,
        title: {
            display: false,
            position: "top",
            text: "Doughnut Chart",
            fontSize: 18,
            fontColor: "#111"
        },
        legend: {
            display: false,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        }
    };

    //create Chart class object
    var chart1 = new Chart(ctx1, {
        type: "doughnut",
        data: data1,
        options: options
    });

    // var chart2 = new Chart(ctx2, {
    //     type: "doughnut",
    //     data: data2,
    //     options: options
    // });
    // var chart3 = new Chart(ctx3, {
    //     type: "doughnut",
    //     data: data3,
    //     options: options
    // });
	
	
});