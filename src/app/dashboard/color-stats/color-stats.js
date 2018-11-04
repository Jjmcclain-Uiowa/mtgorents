$(function() {

    var $dashboardSalesBreakdownChart = $('#color-stats-chart');

    if (!$dashboardSalesBreakdownChart.length) {
        return false;
    } 

    function drawSalesChart(){

    $dashboardSalesBreakdownChart.empty();

        Morris.Donut({
            element: 'color-stats-chart',
            data: [{ label: "Blue", value: 10 },
                { label: "Green", value: 10 },
                { label: "Black", value: 15 },
                { label: "White", value: 5 },
                { label: "Red", value: 50 },
                { label: "Colorless", value: 10 }
             ],
            resize: true,
            colors: [
                'blue',
                'green',
                'black',
                'yellow',
                'red',
                'gray'
            ],
        });

        var $sameheightContainer = $dashboardSalesBreakdownChart.closest(".sameheight-container");

        setSameHeights($sameheightContainer);
    }

    drawSalesChart();

    $(document).on("themechange", function(){
       drawSalesChart();
    });
    
})