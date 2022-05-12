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

//Inicio funcion Bubble segunda api acerca de las tasas y metodos de suicio por la población colombiana
function grafica_bubble(){
    let area = [];
    let genero = [];
    let edad = [];
    let metodo = [];

    let url = 'https://www.datos.gov.co/resource/gh4e-xuyg.json';
    fetch(url)
        .then(datos_obtenidos => datos_obtenidos.json())

        .then(function (datos_obtenidos){
            datos_obtenidos.forEach(function agregar(datos_obtenidos){
              if(datos_obtenidos.area_del_hecho != undefined && datos_obtenidos.genero != undefined 
                && datos_obtenidos.edad != undefined && datos_obtenidos.mecanismo_muerte != undefined){
                   
                    area.push(datos_obtenidos.area_del_hecho);
                    genero.push(datos_obtenidos.genero);
                    edad.push(datos_obtenidos.edad);
                    metodo.push(datos_obtenidos.mecanismo_muerte);
                }  
            });
            var traza1 = {
                x: edad,
                y: genero,
                text: ['</br>tamaño: 20','<br>tamaño: 40', '<br>tamaño: 60', '<br>tamaño: 80', '<br>tamaño: 100', '</br>tamaño: 120'],
                mode: 'markers',
                name: 'Genero',
                textposition: 'top center',
                textfont: {
                    family: 'Raleway, Times New Roman'
                },
                marker: {
                    size: [200,400, 600, 800, 1000, 1200, 1400],
                    sizeref: 0.3, //Tamaño del circulo
                    sizemode: 'area',
                    color: 'rgb(130,236,111)',
                }
            };
            var traza2 = {
                x: edad,
                y: metodo,
                text: ['</br>tamaño: 20','</br>tamaño: 40', '</br>tamaño: 60', '</br>tamaño: 80', '</br>tamaño: 100', '</br>tamaño: 120'],
                mode: 'markers',
                name: 'Método',
                textposition: 'bottom center',
                textfont: {
                    family: 'Raleway, Times New Roman'
                },
                marker: {
                    size: [200,400, 600, 800, 1000, 1200, 1400],
                    sizeref: 0.3,
                    sizemode: 'area',
                    color: 'rgb(217,96,70)',
                }
            };
            var traza3 = {
                x: edad,
                y: area,
                text: ['</br>tamaño: 20','</br>tamaño: 40', '</br>tamaño: 60', '</br>tamaño: 80', '</br>tamaño: 100', '</br>tamaño: 120'],
                mode: 'markers',
                name: 'Lugar del hecho',
                textposition: 'bottom center',
                textfont: {
                    family: 'Raleway, Times New Roman'
                },
                marker: {
                  size: [200,400, 600, 800, 1000, 1200, 1400],
                  sizeref: 0.3,
                  sizemode: 'area',
                  color: 'rgb(155,66,75)',
                }
            };
              
            var data = [traza1,traza2,traza3];
              
            var layout = {
                title: 'Casos de suicidio en el país',
                xaxis:
                {
                    title: "Edad"
                },
                showlegend: true,
                height: 600,
                width: 1200,
                legend: {
                    y: 0.6,
                    yref: 'paper',
                    font: {
                        family: 'Arial Narrow',
                        size: 16,
                        color: 'grey-dark', 
                    }
                }
            };
              
            Plotly.newPlot('Grafo2', data, layout);
        })
}


