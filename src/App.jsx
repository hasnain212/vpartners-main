import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './myComponents/appBar/Navbar';
import Home from './myComponents/appBar/Home';
import IndoorProducts from './myComponents/appBar/IndoorProducts';
import MarbleSheet from './myComponents/appBar/MarbleSheet';
import SPCFlooring from './myComponents/appBar/SPCFlooring';
import WPCWallPanel from './myComponents/appBar/WPCWallPanel';
import WPCFlatPanel from './myComponents/appBar/WPCFlatPanel';
import WPCTimberTube from './myComponents/appBar/WPCTimberTube';
import WPCCeiling from './myComponents/appBar/WPCCeiling';
import ThermalTransferPrinting from './myComponents/appBar/ThermalTransferPrinting';
import Embossed from './myComponents/appBar/Embossed';
import PVCFilm from './myComponents/appBar/PVCFilm';
import Print3D from './myComponents/appBar/Print3D';
import AboutUs from './myComponents/appBar/AboutUs';
import Print3DOpenBook from './myComponents/appBar/Print3DOpenBook';
import SPCParameter from './myComponents/appBar/SPCParameter';
import LVTFlooring from './myComponents/appBar/LVTFlooring';
import PopularColorStyles from './myComponents/appBar/PopularColorStyles';
import InstallationCase from './myComponents/appBar/InstallationCase';
import InstallationGuide from './myComponents/appBar/InstallationGuide';
import Products from './myComponents/appBar/Products';
import ContactUs from './myComponents/appBar/ContactUs';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/indoor-products" element={<IndoorProducts />}>
            <Route path="wpc-wall-panel" element={<WPCWallPanel />} />
            <Route path="wpc-flat-panel" element={<WPCFlatPanel />} />
            <Route path="wpctimber-tube" element={<WPCTimberTube />} />
            <Route path="wpc-ceiling" element={<WPCCeiling />} />
          </Route>
          <Route path="/marble-sheet" element={<MarbleSheet />}>
            <Route path="thermal-transfer-printing" element={<ThermalTransferPrinting />} />
            <Route path="embossed" element={<Embossed />} />
            <Route path="pvc-film" element={<PVCFilm />} />
            <Route path="3d-print" element={<Print3D />} />
            <Route path="3d-print-open-book" element={<Print3DOpenBook />} />
          </Route>
          <Route path="/spc-flooring" element={<SPCFlooring />}>
            <Route path="spc-parameter" element={<SPCParameter />} />
            <Route path="lvt-flooring" element={<LVTFlooring />} />
            <Route path="popular-color-styles" element={<PopularColorStyles />} />
            <Route path="installation-case" element={<InstallationCase />} />
            <Route path="installation-guide" element={<InstallationGuide />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
