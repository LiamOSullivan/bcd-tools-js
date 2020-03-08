
d3.csv('../data/COVID-19-geographic-disbtribution-worldwide-2020-03-08.csv')
  .then(function (data) {
    console.log(`data has ${data.length} rows`)

    let euData = data.filter((v) => {
      // return v.EU === 'EEA' || v.EU === 'EU'
      return v.CountryExp === 'Italy'
    })

    console.log(`filtered data has ${euData.length} rows`)
    //

    let euTrace = {
      x: euData.map((d) => {
        console.log(moment(d.DateRep, 'DD/MM/YYYY').format())
        return new Date(d.DateRep)
      }),
      y: euData.map((d) => {
        return +d.NewDeaths
      }),
      mode: 'lines+markers',
      name: 'EuData'
    }
    //
    // let popProjectionData = [popProjROI, popProjNI, popProjDon, euTrace]
    // let popProjectionLayout = Object.assign({}, multilineChartLayout)
    // popProjectionLayout.title = 'Population Projections'
    // popProjectionLayout.legend = {
    //   x: 1,
    //   y: 0.5
    // }
    //
    const MULTILINE_CHART_LAYOUT = {
      responsive: true,
      height: 500,
      margin: {
        l: 0,
        r: 0, // change in chart based on annotations
        b: 40,
        t: 100
      },
      title: {
        text: '',
        // font: CHART_TITLE_FONT,
        visible: false,
        xref: 'container',
        x: 0.001,
        xanchor: 'left',
        yref: 'container',
        y: 0.975,
        yanchor: 'top'
      },
      xaxis: {
        title: '',
        // titlefont: CHART_FONT,
        visible: true,
        type: null,
        range: null,
        fixedrange: true,
        showticklabels: true,
        tickmode: 'auto', // 'array',
        nticks: 7,
        tickvals: null,
        ticks: '', // inside/ outside
        automargin: true,
        tickfont: {
          family: 'PT Sans',
          size: 12,
          color: '#313131'
        }
      },
      yaxis: {
        title: {
          text: '',
          standoff: 20
        },
        // titlefont: CHART_FONT,
        visible: true,
        type: null,
        range: null,
        fixedrange: true,
        showticklabels: true,
        tickmode: 'auto', // 'array',
        nticks: 5,
        tickvals: null,
        ticks: '', // inside/ outside
        automargin: true,
        tickfont: {
          family: 'PT Sans',
          size: 12,
          color: '#313131'
        }
      },
      // paper_bgcolor: CHART_COLOR, //'#E0E0E0',
      // plot_bgcolor: CHART_COLOR,
      // colorway: CHART_COLORWAY,
      // font: CHART_FONT,
      showlegend: false,
      legend: {
        x: null,
        y: null
        // 'orientation': 'v'
      },
      annotations: [],
      hovermode: 'x'
    }

    Plotly.newPlot('eu-chart', euTrace, MULTILINE_CHART_LAYOUT, {
      // modeBarButtons: multilineModeBarButtonsInclude,
      displayModeBar: true,
      displaylogo: false,
      showSendToCloud: false,
      responsive: true
    })
  })
  .catch(function (err) {
    console.log('Error loading file:\n ' + err)
  })
