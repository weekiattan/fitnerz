import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Search from './Search';
import styles from './style.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clients: [],
      currentClient: null
    };
  }
  componentDidMount() {
    this.getClients();
    console.log('BANANANANANANANANANANANANANA');
  }
  getClients = () => {
    const url = '/clients.json';

    axios
      .get(url)
      .then(response => {
        const data = response.data;
        console.log(data);
        console.log('@@@@@@@@@@');

        this.setState({ clients: data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  getOneClient = id => {
    const url = `/clients/${id}.json`;

    axios
      .get(url)
      .then(response => {
        const data = response.data;
        console.log(data);

        this.setState({ currentClient: data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let currentClient = this.state.currentClient;
    let showClient = '';
    console.log('!!!!!!!!!!!!!!!!!!');

    if (currentClient !== null) {
      showClient = (
        <div className="showClient">
          <p>Name: {currentClient.name}</p>
          <p>Email: {currentClient.email}</p>
          <p>Contact: {currentClient.phone_number}</p>
          <p>Gender: {currentClient.sex}</p>
          <button className="btn btn-primary">
            <a
              href={`/clients/${currentClient.id}`}
              style={{
                textDecoration: 'none',
                color: 'black',
                fontSize: '20px'
              }}
            >
              Show Log
            </a>
          </button>
        </div>
      );
    }

    const clients = this.state.clients.map((client, index) => {
      return (
        <div key={index} style={{ textAlign: 'center' }}>
          <img
            className="profile"
            src="https://icon-library.net/images/avatar-icon-png/avatar-icon-png-8.jpg"
          ></img>

          <a
            style={{
              fontSize: '20px',
              paddingLeft: '15px',
              fontWeight: '10px'
            }}
            onClick={() => {
              this.getOneClient(client.id);
            }}
          >
            {client.name}
          </a>
        </div>
      );
    });

    return (
      <div className="row">
        <div className="col-4">{clients}</div>

        <div className="col-4" style={{ margin: '14rem', marginTop: '2rem' }}>
          {showClient}
        </div>
      </div>
    );
  }
}

export default App;
