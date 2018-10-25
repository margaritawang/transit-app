import React from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

const apikey = process.env.REACT_APP_MAP_API_KEY;


class Dashboard extends React.Component {
  static defaultProps = {
    center: {lat: 49.2827, lng: -123.1207},
    zoom: 14
  };

  constructor(props) {
    super(props);
    this.state = {
      markers: []
    }
  }

  componentDidMount() {
    console.log('mounted');
    axios.get('http://api.translink.ca/rttiapi/v1/buses?apikey=r8a5I8kS1TG0uA1NLVrf', {'content-type': 'application/JSON'}).then(json => {
      this.setState({
        markers: json.data
      })
    });
  }
  
  render() {
		return (
			<div>
        <h1>Vancouver Bus Map</h1>
        <div className="container" style={{ height: '100vh', width: '90%' }}>  
          <GoogleMapReact
            bootstrapURLKeys={{ key: apikey }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
          </GoogleMapReact>
        </div>
			</div>
		);
	}
}

export default Dashboard;