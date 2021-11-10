import React from 'react';
import Header from "./components/header/Header";
import {BrowserRouter} from "react-router-dom";
import Wrapper from "./components/wrapper/Wrapper";
import Theme from "./components/UI/theme/Theme";
import RoutesList from "./routes/RoutesList";

function App() {
  return (
    <Wrapper>
      <Theme>
        <BrowserRouter>
          <Header/>
          <RoutesList/>
        </BrowserRouter>
      </Theme>
    </Wrapper>
  );
}

export default App;
