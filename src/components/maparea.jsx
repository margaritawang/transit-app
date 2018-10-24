import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Dashboard extends React.Component {
  static defaultProps = {
    center: {lat: 49.2827, lng: -123.1207},
    zoom: 14
  };
  
  render() {
		return (
			<div>
        <h1>Vancouver Bus Map</h1>
        <div style={{ height: '100vh', width: '90%' }}>  
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyB5BYeOrfQmpgjzGD0A-2zIlA3EMEx4JZk' }}
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