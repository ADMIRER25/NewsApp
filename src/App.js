// import React, { Component } from "react";
import React from "react";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  // static propTypes = {
  //   prop: PropTypes
  // }

  // name = "Subha"; //name is a object of App class and App class is extending the Component class

  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API;
  // let pageSize = 10;
  // state = {
  //   progress: 0,
  // };
  // const setProgress = (progress) => {
  //   console.log(progress);
  //   this.setState({ progress: progress });
  // };

  // this will refer to the object active at the point of time
  // let {progress} = this.state;
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <LoadingBar
            color="#f11946"
            progress={this.state.progress} 
            onLoaderFinished={() => this.setState({ progress: 0 })} //this progress is of this.state.progress
          /> */}
        <LoadingBar
          color="#f11946"
          height={3}
          progress={progress} //taking 100%width
          onLoaderFinished={() => setProgress(progress)} //this progress is of this.state.progress
        />
        <Routes>
          <Route
            exact
            path="/NewsApp"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="general"
                pageSize={10}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="business"
                pageSize={10}
                country="in"
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                pageSize={10}
                key="entertainment"
                country="in"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="health"
                pageSize={10}
                country="in"
                category="health"
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="science"
                pageSize={10}
                country="in"
                category="science"
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                pageSize={10}
                key="technology"
                country="in"
                category="technology"
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="sports"
                pageSize={10}
                country="in"
                category="sports"
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>

      {/* <Navbar/> */}
      {/* <News apiKey={apiKey} setProgress={setProgress} pageSize={10} country="in" category="general" /> */}
    </>
  );
};
export default App;
