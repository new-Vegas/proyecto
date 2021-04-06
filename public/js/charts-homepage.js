const visits = JSON.parse(document.getElementById('visits').dataset.visits);
const paths = JSON.parse(document.getElementById('paths').dataset.paths);
const langs = JSON.parse(document.getElementById('langs').dataset.langs);

var ctx = document.getElementById(`visitsContainer`).getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: visits.map(v=>v.date),
        datasets: [{
            label: '# of Visits',
            data: visits.map(v=>v.total),
            backgroundColor: [
                '#4b81ef'
            ]
            // palette('tol-sq', visits.length).map(function(hex) {
            //     return '#' + hex;
            // })
        }]
    }
});


var ctx2 = document.getElementById(`pathsContainer`).getContext('2d');
new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: Object.keys(paths),
        datasets: [{
            label: "Path",
            data: Object.values(paths),
            backgroundColor: palette(Object.keys(paths).length > 12 ? 'sequential' : 'tol', Object.keys(paths).length).map(function(hex) {
                return '#' + hex;
            })
        }]
    }
});


var ctx3 = document.getElementById(`langsContainer`).getContext('2d');
new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: Object.keys(langs),
        datasets: [{
            label: "User's languages distribution",
            data: Object.values(langs),
            backgroundColor: [
                '#0CCE6B',
                '#EF2D56',
                '#ED7D3A',
                '#DCED31',
                '#363537',
            ]
        }]
    }
});