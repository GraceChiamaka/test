import React from 'react';

import { Tabs, Tab } from 'react-bootstrap';

import Aux from './hoc/hoc';
import MoreDetails from './Components/AddItem/MoreDetails';
import Barcode from './Components/AddItem/Barcode';
import Details from './Components/AddItem/details';
import Header from './Components/Header/Header';
import './App.css';

function App() {
  return (
    <Aux>
        <Header />
        <main>
          <div className="container-fluid">
            <Tabs defaultActiveKey="moreDetails" fill variant="tabs" transition={false} id="noanim-tab-example">
                <Tab eventKey="details" title="Details*">
                <div className="row pt-3 justify-content-center">
                    <Details />
                </div>
                    
                </Tab>
                <Tab eventKey="moreDetails" title="More Details">
                    <div className="row mt-5 justify-content-center">
                        <MoreDetails />
                    </div>
                </Tab>
                <Tab eventKey="barcode" title="Barcode">
                    <div className="row mt-3 justify-content-center">
                        <Barcode />
                    </div>
                </Tab>
            </Tabs>
          </div>
        </main>
    </Aux>
  );
}

export default App;
