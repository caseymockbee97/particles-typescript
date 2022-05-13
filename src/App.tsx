import React from "react";
import Particles from "react-tsparticles";

import "./App.css";
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import PostsPage from "./Pages/PostPage/PostsPage";

function App() {
  return (
    <div className="App">
      <Particles options={particlesOptions as ISourceOptions} />
      <MainLayout>
        {/* Main Routing Goes Here */}
        <PostsPage />
      </MainLayout>
    </div>
  );
}

export default App;
