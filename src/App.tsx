import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import { ProjectDOM } from "./database";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//First Units are HomePages of ProjectDOM
const RenderHomepages = ({ homepages }: any) => {
  console.log(homepages);

  return (
    <>
      {homepages.map((homepage: any, index: number) => {
        console.log(homepage);

        return (
          <div>
            {homepage.homepage.id}
            kk
          </div>
        );
      })}
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Navigation />
      <RenderHomepages homepages={ProjectDOM.mainEntry} />
    </div>
  );
}

export default App;
