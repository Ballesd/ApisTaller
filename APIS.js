// función primera api - gráfico scatter
function grafica_scatter() {
    let fecha = [];
    let indice_infancia = [];
    let indice_juventud = [];
    let indice_vejez = [];

    let url = "https://www.datos.gov.co/resource/6zwu-iumj.json";
    fetch(url)
        .then(data_obtanined => data_obtanined.json())

        .then(function (data_obtanined) {
            data_obtanined.forEach(function agregar(data_obtanined) {

                if (data_obtanined.a_o != undefined && data_obtanined.ndice_deinfancia != undefined &&
                    data_obtanined.ndice_dejuventud != undefined && data_obtanined.ndice_de_vejez != undefined) {

                    fecha.push(data_obtanined.a_o);
                    indice_infancia.push(data_obtanined.ndice_deinfancia);
                    indice_juventud.push(data_obtanined.ndice_dejuventud);
                    indice_vejez.push(data_obtanined.ndice_de_vejez);

                }

            });

            let trace1 = {
                x: fecha,
                y: indice_juventud,
                mode: 'markers+text',
                type: 'scatter',
                name: 'Indice de juventud',
                textposition: 'top center',
                textfont: {
                    family: 'Raleway, sans-serif'
                },
                marker: { size: 12 }
            };

            let trace2 = {
                x: fecha,
                y: indice_vejez,
                mode: 'markers+text ',
                type: 'scatter',
                name: 'Indice de vejez',
                textfont: {
                    family: 'Times New Roman'
                },
                textposition: 'bottom center',
                marker: { size: 12 }
            };

            let trace3 = {
                x: fecha,
                y: indice_infancia,
                mode: 'markers+text',
                type: 'scatter',
                name: 'Indice de infancia',
                textfont: {
                    family: 'Times New Roman'
                },
                textposition: 'bottom center',
                marker: { size: 12 }
            };

            let data = [trace1, trace2, trace3];

            let layout = {
                title: "Indicadores demográficos Manizales 1985-2035",

                xaxis:
                {
                    title: "Año"
                },
                yaxis:
                {
                    title: "Indice (%)"
                },
                legend: {
                    y: 0.5,
                    yref: 'paper',
                    font: {
                        family: 'Arial, sans-serif',
                        size: 20,
                        color: 'grey',
                    }
                }
            };

            Plotly.newPlot('Grafo1', data, layout);
        });
}
//fin función primer api