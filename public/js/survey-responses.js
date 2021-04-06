const data = JSON.parse(document.getElementById('data').dataset.responses).map(q => {
    return {
        ip: q.ip,
        created_at: q.created_at,
        responses: JSON.parse(q.data)
    }
}),
questionsConfig = JSON.parse(document.getElementById('data').dataset.questions);

let questions = [],
qContainer = document.getElementById('questions-container');


if (!data || !data.length) {
    qContainer.innerHTML = `
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 pb-5">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg px-4 py-4">
                <h1 class="font-semibold text-xl text-gray-800 leading-tight mb-3 mt-3 text-center">No Answers</h1>
            </div>
        </div>
    </div>`;
}

data.forEach(r => {
    const an_qs = r.responses.map(r => r.Titulo);

    for (const title of an_qs) {
        if (!questions.includes(title)) questions.push(title);
    }
});

questions.forEach((q, i) => {
    const e = document.createElement('div');
    e.classList.add('mt-4');

    e.innerHTML = `
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 pb-5">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg px-4 py-4">
                <h3 class="font-semibold text-l text-gray-800 leading-tight mb-3 mt-3 text-center">${q}</h3>
                <canvas id="chart-${i}" height="60" class="mb-3"></canvas>
                <div class="mb-3">
                    <button id="download-${i}" class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">Download Data</button>
                </div>
                <div id="question-${i}"></div>
            </div>
        </div>
    </div>
`;

    qContainer.appendChild(e);
});

questions.forEach((title, i) => {

    const q = questionsConfig.find(qc => qc.label === title);

    if (q) {
        if (q.options && q.options.length) q.type += '-multi';
        let responses = [], counts = (q.options || []).map(o=>0);

        data.forEach(r => {

            const current_rs = r.responses.find(rr => rr.Titulo === title);
            
            if (current_rs && current_rs.Respuesta) {
                r.created_at = new Date(r.created_at).toLocaleString();
                
                switch (q.type) {
                    case 'checkbox':
                        responses.push({
                            Date: r.created_at,
                            Yes: current_rs.Respuesta[0].opcion.toLowerCase() === 'yes' ? '&#10004;':'',//'&#x274C;',
                            No: current_rs.Respuesta[0].opcion.toLowerCase() === 'no' ? '&#10004;':'',//'&#x274C;',
                        });
                        break;
                    case 'radio-multi':
                    case 'checkbox-multi':
                        let current = {
                            Date: r.created_at,
                        };
                        let index = 0;
                        for (const opt of q.options) {
                            const ans = current_rs.Respuesta.find(rr => rr.opcion === opt);
                            current[opt] = ans ? ans.checked : false;
                            counts[index] += current[opt] ? 1 : 0;
                            current[opt] = current[opt] ? '&#10004;':'';
                            index += 1;
                        }
                        
                        responses.push(current);
                        break;
                    case 'text':
                    case 'number':
                            let currentT = {
                                Date: r.created_at,
                            };
                            currentT[title] = current_rs.Respuesta || '';
                            
                            responses.push(currentT);
                            break;
                    default:
                        console.log('Unknown type ' + q.type);
                        break;
                }
            }
        });

        if (responses.length) {

            const cTable = new Tabulator("#question-" + i, {
                data: responses,
                // autoColumns:true, //create columns from data field names
                layout: !q.options || (typeof(q.options) === 'object' && q.options.length <= 2) ? "fitColumns" : undefined,
                pagination:"local",
                paginationSize:6,
                columns: (responses.length ? Object.keys(responses[0]) : []).map(r => {
                    return {
                        title: r,
                        field: r,
                        formatter: 'html'
                    };
                }),
                // [
                //     {title:"Yes-", field:"Yes", formatter:"html"}
                // ]
            });
    
            document.getElementById(`download-${i}`).addEventListener('click', function () {
                cTable.download("csv", `${title}.csv`);
            });
    
            let yesCount = 0, falseCount = 0;
    
            responses.forEach(p => {
                if (p.Yes === '&#10004;') yesCount += 1;
                if (p.No === '&#10004;') falseCount += 1;
            });
    
            var ctx = document.getElementById(`chart-${i}`).getContext('2d');
            switch (q.type) {
                case 'checkbox':
                    new Chart(ctx, {
                        type: 'pie',
                        data: {
                            labels: ['Yes', 'No'],
                            datasets: [{
                                //label: '# of Votes',
                                data: [yesCount, falseCount],
                                backgroundColor: [
                                    'rgba(54, 162, 235, 0.8)',
                                    'rgba(255, 99, 132, 0.8)',
                                ],
                            }]
                        }
                    });
                    break;
                case 'radio-multi':
                case 'checkbox-multi':
                    new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: q.options,
                            datasets: [{
                                label: '# of Selections',
                                data: counts,
                                backgroundColor: palette('tol-sq', counts.length).map(function(hex) {
                                    return '#' + hex;
                                })
                            }]
                        }
                    });
                    break;
                default:
                    document.getElementById(`chart-${i}`).remove();
                    break;
            }
        }
    }
});

