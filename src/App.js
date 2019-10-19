/* 
 * Copyright (c) 2018 Bruce Schubert.
 * The MIT License
 * http://www.opensource.org/licenses/mit-license
 */
import React, { Component } from 'react'
import Globe from 'worldwind-react-globe'
import axios from 'axios'


import { 
  CardColumns, 
  Container } from 'reactstrap'
import { 
  LayersCard, 
  MarkersCard, 
  NavBar, 
  NavBarItem, 
  SearchBox, 
  SettingsCard, 
  Tools } from './test'

import './App.css'

class App extends Component {
    
  constructor(props) {
    super(props)
    this.state = {
      lat: 34.2,
      lon: -119.2,
      alt: 10e6,
      globe: null,
      api:[],
      api2:[],
      api3:[],
      api4:[],
      api5:[]
    }
    
    this.globeRef = React.createRef()
    this.layersRef = React.createRef()
    this.markersRef = React.createRef()
    this.settingsRef = React.createRef()
  }

  changeapi(data){
    this.setState({api: (data)})
    console.log(this.state.api)
  }
  changeapi2(data){
    this.setState({api2: (data)})
    console.log(this.state.api2)
  }
  changeapi3(data){
    this.setState({api3: (data)})
    console.log(this.state.api3)
  }
  
  changeapi4(data){
    this.setState({api4: (data)})
    console.log(this.state.api4)
  }
  changeapi5(data){
    this.setState({api5: (data)})
    console.log(this.state.api4)
  }
  fetchData(){
    axios.get('https://api.openaq.org/v1/measurements?country=US&parameter=pm25')
            .then(response => this.changeapi(response.data))
            .catch(err => console.log(err)
            )
            axios.get('https://api.openaq.org/v1/measurements?country=CN&parameter=pm25')
            .then(response => this.changeapi2(response.data))
            .catch(err => console.log(err)
            )    
            axios.get('https://api.openaq.org/v1/measurements?country=DE&parameter=pm25')
            .then(response => this.changeapi3(response.data))
            .catch(err => console.log(err)
            )      
            axios.get('https://api.openaq.org/v1/measurements?country=CA&parameter=pm25')
            .then(response => this.changeapi4(response.data))
            .catch(err => console.log(err)
            )
            axios.get('https://api.openaq.org/v1/measurements?parameter=pm25')
            .then(response => this.changeapi5(response.data))
            .catch(err => console.log(err)
            )      
  }

  componentDidMount() {
    // Get the component with the WorldWindow after mounting
    this.setState({globe: this.globeRef.current})
    this.fetchData()
  }
  
  


  render() {
    
    const globe = this.globeRef.current
    
    const layers = [
      {layer: 'blue-marble', options: {category: 'base', enabled: true}},
      {layer: 'blue-marble-landsat', options: {category: 'base', enabled: false}},
      {layer: 'bing-aerial', options: {category: 'base', enabled: false}},
      {layer: 'bing-aerial-labels', options: {category: 'base', enabled: false}},
      {layer: 'eox-sentinal2', options: {category: 'base', enabled: false}},
      {layer: 'eox-sentinal2-labels', options: {category: 'base', enabled: true}},
      {layer: 'eox-openstreetmap', options: {category: 'overlay', enabled: false, opacity: 0.8}},
      {layer: 'bing-roads', options: {category: 'overlay', enabled: false, opacity: 0.8}},
      {layer: 'renderables', options: {category: 'data', enabled: true, displayName: 'Markers'}},
      {layer: 'compass', options: {category: 'setting', enabled: false}},
      {layer: 'coordinates', options: {category: 'setting', enabled: true}},
      {layer: 'view-controls', options: {category: 'setting', enabled: true}},
      {layer: 'stars', options: {category: 'setting', enabled: false}},
      {layer: 'atmosphere-day-night', options: {category: 'setting', enabled: false}}
    ]
    
    const navbarItems = [
      <NavBarItem key='lyr' title='Layers' icon='list' collapse={this.layersRef.current}/>,
      // <NavBarItem key='mkr' title='Markers' icon='map-marker' collapse={this.markersRef.current}/>,
      <NavBarItem key='set' title='Settings' icon='cog' collapse={this.settingsRef.current}/>
    ]
   
    // const navbarSearch = <SearchBox globe={globe}/>
    
    return (
      <div>
        <NavBar 
            logo=''
            title='AQ Earth'
            href='https://github.com/emxsys/worldwind-react-app'
            items={navbarItems}
            // search={navbarSearch} 
            />
            {/* <Jiji/> */}
        <Container fluid className='p-0'>
          <div className='globe'>
              <Globe 
                ref={this.globeRef} 
                layers={layers}/>
          </div>
          <div className='overlayTools noninteractive'>
              <Tools 
                globe={globe} 
                markers={this.markersRef.current}
                markersLayerName='Markers' api={this.state.api.results} api2={this.state.api2.results} api3={this.state.api3.results} api4={this.state.api4.results} api5={this.state.api5.results}/>
                
                <div className="ha">
                  <img className="hi" src='https://i.imgur.com/zGLZKY8.png'></img>
                  <div className='xixi'>&emsp;0-15µg/m³</div>
                  <img className="hihi2" src='https://i.imgur.com/6nrew9K.png'></img>
                  <div className='xixi'> &emsp;15-30µg/m³</div>
                  <img className="hihi" src='https://i.imgur.com/gQETEbi.png'></img>
                  <div className='xixi'> &emsp; >30µg/m³</div>
                </div>
                
          </div>
          <div className='overlayCards noninteractive'>
            <CardColumns>
              <LayersCard
                ref={this.layersRef}
                categories={['overlay', 'base']} 
                globe={globe} />
              <MarkersCard
                ref={this.markersRef}
                globe={globe}
                markersLayerName='Markers' />
              <SettingsCard
                ref={this.settingsRef}
                categories={['setting']} 
                globe={globe} />
            </CardColumns>
          </div>
        </Container>
      </div>
    )
  }
}
export default App;