console.log('script loaded')

d3.xml('/images/zone_map_resting.svg')
  // d3.xml('/images/svg-map.svg')
  .then(xml => {
    console.log('got svg')
    // "xml" is the XML DOM tree
    let htmlSVG = document.getElementById('map') // the svg-element in our HTML file
    // append the "maproot" group to the svg-element in our HTML file
    htmlSVG.appendChild(xml.documentElement.getElementById('Dublin-ZoneMap'))

    // d3 objects for later use
    let dublinSvg = d3.select(htmlSVG)
    let dccRoot = dublinSvg.select('#Dublin_City')
    let dlrRoot = dublinSvg.select('#Dun_Laoghaire_Rathdown')
    let sdRoot = dublinSvg.select('#South_Dublin')
    let fRoot = dublinSvg.select('#Fingal')

    // get the svg-element from the original SVG file
    const xmlSVG = d3.select(xml.getElementsByTagName('svg')[0])
    // copy its "viewBox" attribute to the svg element in our HTML file
    dublinSvg.attr('viewBox', xmlSVG.attr('viewBox'))

    let dccPath = dccRoot.select('path')
    let dlrPath = dlrRoot.select('path')
    let sdPath = sdRoot.select('path')
    let fPath = fRoot.select('path')

    let paths = [dccPath, dlrPath, sdPath, fPath]
    paths.forEach(p => {
      p.on('mouseover', function () {
        d3.select(this).style('fill', 'red')
        // this.parentNode.style('fill', 'red')
      })
      p.on('mouseout', function () {
        d3.select(this).style('fill', d3.select(this).style('fillDefault'))
        // this.parentNode.style('fill', 'red')
      })
      p.on('click', function () {
        d3.select(this).style('fill', 'green')
        // this.parentNode.style('fill', 'red')
      })
    })

    // // set the callback
    // dccPath.on('mouseover', function () {
    //   console.log('dcc')
    //   this.style('fill', 'red')
    // })
    //
    // dccPath.on('mouseout', () => {
    //   console.log('dcc')
    //   dccPath.style('fill', 'blue')
    // })
    //
    // dlrPath.on('mouseover', () => {
    //   console.log('dlr')
    //   dlrPath.style('fill', 'red')
    // })
    //
    // dlrPath.on('mouseout', () => {
    //   console.log('dcc')
    //   dlrPath.style('fill', 'blue')
    // })
    //
    // sdPath.on('mouseover', () => {
    //   console.log('sd')
    //   dlrPath.style('fill', 'red')
    // })
    //
    // sdPath.on('mouseout', () => {
    //   console.log('dcc')
    //   sdPath.style('fill', 'blue')
    // })
    //
    // fPath.on('mouseover', () => {
    //   console.log('f')
    //   .style('fill', 'red')
    // })
    //
    // fPath.on('mouseout', () => {
    //   console.log('dcc')
    //   fPath.style('fill', 'blue')
    // })
    //
    // dccPath.on('click', () => {
    //   console.log('dcc')
    // })
    // dlrPath.on('click', () => {
    //   console.log('dlr')
    // })
    // sdPath.on('click', () => {
    //   console.log('sd')
    // })
    // fPath.on('click', () => {
    //   console.log('f')
    // })
  })
  .catch(e => {
    console.log('error' + e)
  })

/* #4c95bd dlr fill */
