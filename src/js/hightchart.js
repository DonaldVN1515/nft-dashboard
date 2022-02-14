document.addEventListener("DOMContentLoaded", () => {
	Highcharts.chart("content__distribution", {
		chart: {
			type: "line",
		},
		title: {
			text: "Total Distributions",
		},
		color: ["#8655FB", "#8655FB"],
		xAxis: {
			categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		},
		series: [
			{
				name: "DonaldVN",
				data: [300, 350, 250, 200, 300, 190, 150],
			},
		],
	});
});
