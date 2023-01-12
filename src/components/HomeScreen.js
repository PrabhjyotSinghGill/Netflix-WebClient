import React from "react";
import "../views/HomeScreen.css";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Row from "../components/Row.js";
import requests from "../Requests";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Navbar */}
      <NavBar></NavBar>
      {/* Banner*/}
      <Banner></Banner>
      {/* Rows */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default HomeScreen;
