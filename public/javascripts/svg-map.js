let svg = null
let maproot = null
console.log('script loaded')

d3.xml('/images/svg-map.svg')
  .then(xml => {
    console.log('got svg')
    // "xml" is the XML DOM tree
    const htmlSVG = document.getElementById('map')  // the svg-element in our HTML file
    // append the "maproot" group to the svg-element in our HTML file
    htmlSVG.appendChild(xml.documentElement.getElementById('maproot'))

    // d3 objects for later use
    svg = d3.select(htmlSVG)
    maproot = svg.select('#maproot')

    // get the svg-element from the original SVG file
    const xmlSVG = d3.select(xml.getElementsByTagName('svg')[0])
    // copy its "viewBox" attribute to the svg element in our HTML file
    svg.attr('viewBox', xmlSVG.attr('viewBox'))
  })
  .catch(e => {
    console.log('error' + e)
  })

