import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SiderBar from "./components/SiderBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider >
      <div className="appContainer">
        <SiderBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="contentContainer">
          <Header />
          <div className="postAppContainer">
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          </div>
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
