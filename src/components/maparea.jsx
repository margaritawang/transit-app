import React from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import Marker from './markers.jsx';

const apiKey = process.env.REACT_APP_MAP_API_KEY;
const translinkApiKey = process.env.REACT_APP_TRANSLINK_API_KEY;

class Maparea extends React.Component {
  static defaultProps = {
    center: { lat: 49.2827, lng: -123.1207 },
    zoom: 14
  };

  constructor(props) {
    super(props);
    this.state = {
      buses: []
    };
  }

  fetchBuses() {
    axios
      .get(
        `http://api.translink.ca/rttiapi/v1/buses?apikey=${translinkApiKey}`,
        { 'content-type': 'application/JSON' }
      )
      .then(res => {
        this.setState({
          buses: res.data
        });
      });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.fetchBuses(), 1000);
    this.fetchBuses();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { buses } = this.state;
    return (
      <div>
        <h1 className="mt-4 mb-4">Vancouver Bus Map</h1>
        <div className="container" style={{ height: '100vh', width: '90%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: apiKey }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}>
            {buses.map(bus => (
              <Marker
                key={bus.VehicleNo}
                id={bus.VehicleNo}
                text={bus.RouteNo}
                lat={bus.Latitude}
                lng={bus.Longitude}
                direction={bus.Direction}
                destination={bus.Destination}
              />
            ))}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default Maparea;
