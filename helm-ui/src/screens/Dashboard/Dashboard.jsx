import React, { Component } from 'react';
import Galaxy from '../../components/Map/Galaxy'
import Button from '../../components/Commands/Button'
import Timer from '../../components/Stats/Timer'
import './Dashboard.css';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      trajectoriesHotspot: [],
      trajectoriesGraal: [],
      searchEngineAddressGraal: process.env.REACT_APP_API_URL_GRAAL,
      searchEngineAddressHotspot: process.env.REACT_APP_API_URL_C2,
      timeStartGraal: 0,
      timeStartHotspot: 0,
      timeFinishGraal: 0,
      timeFinishHotspot: 0,
      totalPlanetsGraal: 0,
      totalPlanetsHotspot: 0
    }
  }

  traverseUniverseHotspot() {
    this.setState({'timeStartHotspot': (new Date()).getTime()});
    fetch(this.state.searchEngineAddressHotspot)
      .then(promise => promise.json()).then(result => {
        this.state.trajectoriesHotspot.push({ 'starStart': 'star1', 'starEnd': 'star2' });
        this.setState({"trajectoriesHotspot": this.state.trajectoriesHotspot, 'timeFinishHotspot': (new Date()).getTime(), 'totalPlanetsHotspot': this.state.totalPlanetsHotspot + Number(result.habitablePlanets) });
        fetch(this.state.searchEngineAddressHotspot)
          .then(promise => promise.json()).then(result => {
            this.state.trajectoriesHotspot.push({ 'starStart': 'star2', 'starEnd': 'star3' });
            this.setState({"trajectoriesHotspot": this.state.trajectoriesHotspot, 'timeFinishHotspot': (new Date()).getTime(), 'totalPlanetsHotspot': this.state.totalPlanetsHotspot + Number(result.habitablePlanets) });
            fetch(this.state.searchEngineAddressHotspot)
              .then(promise => promise.json()).then(result => {
                this.state.trajectoriesHotspot.push({ 'starStart': 'star3', 'starEnd': 'star4' });
                this.setState({"trajectoriesHotspot": this.state.trajectoriesHotspot, 'timeFinishHotspot': (new Date()).getTime(), 'totalPlanetsHotspot': this.state.totalPlanetsHotspot + Number(result.habitablePlanets) });
                fetch(this.state.searchEngineAddressHotspot)
                  .then(promise => promise.json()).then(result => {
                    this.state.trajectoriesHotspot.push({ 'starStart': 'star4', 'starEnd': 'star5' });
                    this.setState({"trajectoriesHotspot": this.state.trajectoriesHotspot, 'timeFinishHotspot': (new Date()).getTime(), 'totalPlanetsHotspot': this.state.totalPlanetsHotspot + Number(result.habitablePlanets) });
                    fetch(this.state.searchEngineAddressHotspot)
                      .then(promise => promise.json()).then(result => {
                        this.state.trajectoriesHotspot.push({ 'starStart': 'star5', 'starEnd': 'star6' });
                        this.setState({"trajectoriesHotspot": this.state.trajectoriesHotspot, 'timeFinishHotspot': (new Date()).getTime(), 'totalPlanetsHotspot': this.state.totalPlanetsHotspot + Number(result.habitablePlanets) });
                        fetch(this.state.searchEngineAddressHotspot)
                          .then(promise => promise.json()).then(result => {
                            this.state.trajectoriesHotspot.push({ 'starStart': 'star6', 'starEnd': 'star7' });
                            this.setState({"trajectoriesHotspot": this.state.trajectoriesHotspot, 'timeFinishHotspot': (new Date()).getTime(), 'totalPlanetsHotspot': this.state.totalPlanetsHotspot + Number(result.habitablePlanets) });
                            fetch(this.state.searchEngineAddressHotspot)
                              .then(promise => promise.json()).then(result => {
                                this.state.trajectoriesHotspot.push({ 'starStart': 'star7', 'starEnd': 'star8' });
                                this.setState({"trajectoriesHotspot": this.state.trajectoriesHotspot, 'timeFinishHotspot': (new Date()).getTime(), 'totalPlanetsHotspot': this.state.totalPlanetsHotspot + Number(result.habitablePlanets) });
                                fetch(this.state.searchEngineAddressHotspot)
                                  .then(promise => promise.json()).then(result => {
                                    this.state.trajectoriesHotspot.push({ 'starStart': 'star8', 'starEnd': 'star9' });
                                    this.setState({"trajectoriesHotspot": this.state.trajectoriesHotspot, 'timeFinishHotspot': (new Date()).getTime(), 'totalPlanetsHotspot': this.state.totalPlanetsHotspot + Number(result.habitablePlanets) });
                                    fetch(this.state.searchEngineAddressHotspot)
                                      .then(promise => promise.json()).then(result => {
                                        this.state.trajectoriesHotspot.push({ 'starStart': 'star9', 'starEnd': 'star10' });
                                        this.setState({"trajectoriesHotspot": this.state.trajectoriesHotspot, 'timeFinishHotspot': (new Date()).getTime(), 'totalPlanetsHotspot': this.state.totalPlanetsHotspot + Number(result.habitablePlanets) });
                                        fetch(this.state.searchEngineAddressHotspot)
                                          .then(promise => promise.json()).then(result => {
                                            this.state.trajectoriesHotspot.push({ 'starStart': 'star10', 'starEnd': 'star11' });
                                            this.setState({"trajectoriesHotspot": this.state.trajectoriesHotspot, 'timeFinishHotspot': (new Date()).getTime(), 'totalPlanetsHotspot': this.state.totalPlanetsHotspot + Number(result.habitablePlanets) });
                                          });
                                      });
                                  });
                              });
                          });
                      });
                  });
              });
          });
      });
  }

  traverseUniverseGraal() {
    this.setState({'timeStartGraal': (new Date()).getTime()});
    fetch(this.state.searchEngineAddressGraal)
      .then(promise => promise.json()).then(result => {
        this.state.trajectoriesGraal.push({ 'starStart': 'star1', 'starEnd': 'star2' });
        this.setState({"trajectoriesGraal": this.state.trajectoriesGraal, 'timeFinishGraal': (new Date()).getTime(), 'totalPlanetsGraal': this.state.totalPlanetsGraal + Number(result.habitablePlanets) });
        fetch(this.state.searchEngineAddressGraal)
          .then(promise => promise.json()).then(result => {
            this.state.trajectoriesGraal.push({ 'starStart': 'star2', 'starEnd': 'star3' });
            this.setState({"trajectoriesGraal": this.state.trajectoriesGraal, 'timeFinishGraal': (new Date()).getTime(), 'totalPlanetsGraal': this.state.totalPlanetsGraal + Number(result.habitablePlanets) });
            fetch(this.state.searchEngineAddressGraal)
              .then(promise => promise.json()).then(result => {
                this.state.trajectoriesGraal.push({ 'starStart': 'star3', 'starEnd': 'star4' });
                this.setState({"trajectoriesGraal": this.state.trajectoriesGraal, 'timeFinishGraal': (new Date()).getTime(), 'totalPlanetsGraal': this.state.totalPlanetsGraal + Number(result.habitablePlanets) });
                fetch(this.state.searchEngineAddressGraal)
                  .then(promise => promise.json()).then(result => {
                    this.state.trajectoriesGraal.push({ 'starStart': 'star4', 'starEnd': 'star5' });
                    this.setState({"trajectoriesGraal": this.state.trajectoriesGraal, 'timeFinishGraal': (new Date()).getTime(), 'totalPlanetsGraal': this.state.totalPlanetsGraal + Number(result.habitablePlanets) });
                    fetch(this.state.searchEngineAddressGraal)
                      .then(promise => promise.json()).then(result => {
                        this.state.trajectoriesGraal.push({ 'starStart': 'star5', 'starEnd': 'star6' });
                        this.setState({"trajectoriesGraal": this.state.trajectoriesGraal, 'timeFinishGraal': (new Date()).getTime(), 'totalPlanetsGraal': this.state.totalPlanetsGraal + Number(result.habitablePlanets) });
                        fetch(this.state.searchEngineAddressGraal)
                          .then(promise => promise.json()).then(result => {
                            this.state.trajectoriesGraal.push({ 'starStart': 'star6', 'starEnd': 'star7' });
                            this.setState({"trajectoriesGraal": this.state.trajectoriesGraal, 'timeFinishGraal': (new Date()).getTime(), 'totalPlanetsGraal': this.state.totalPlanetsGraal + Number(result.habitablePlanets) });
                            fetch(this.state.searchEngineAddressGraal)
                              .then(promise => promise.json()).then(result => {
                                this.state.trajectoriesGraal.push({ 'starStart': 'star7', 'starEnd': 'star8' });
                                this.setState({"trajectoriesGraal": this.state.trajectoriesGraal, 'timeFinishGraal': (new Date()).getTime(), 'totalPlanetsGraal': this.state.totalPlanetsGraal + Number(result.habitablePlanets) });
                                fetch(this.state.searchEngineAddressGraal)
                                  .then(promise => promise.json()).then(result => {
                                    this.state.trajectoriesGraal.push({ 'starStart': 'star8', 'starEnd': 'star9' });
                                    this.setState({"trajectoriesGraal": this.state.trajectoriesGraal, 'timeFinishGraal': (new Date()).getTime(), 'totalPlanetsGraal': this.state.totalPlanetsGraal + Number(result.habitablePlanets) });
                                    fetch(this.state.searchEngineAddressGraal)
                                      .then(promise => promise.json()).then(result => {
                                        this.state.trajectoriesGraal.push({ 'starStart': 'star9', 'starEnd': 'star10' });
                                        this.setState({"trajectoriesGraal": this.state.trajectoriesGraal, 'timeFinishGraal': (new Date()).getTime(), 'totalPlanetsGraal': this.state.totalPlanetsGraal + Number(result.habitablePlanets) });
                                        fetch(this.state.searchEngineAddressGraal)
                                          .then(promise => promise.json()).then(result => {
                                            this.state.trajectoriesGraal.push({ 'starStart': 'star10', 'starEnd': 'star11' });
                                            this.setState({"trajectoriesGraal": this.state.trajectoriesGraal, 'timeFinishGraal': (new Date()).getTime(), 'totalPlanetsGraal': this.state.totalPlanetsGraal + Number(result.habitablePlanets) });
                                          });
                                      });
                                  });
                              });
                          });
                      });
                  });
              });
          });
      });
  }

  activateHotspotTraverse() {
    this.setState({trajectoriesHotspot: [], totalPlanetsHotspot: 0});
    this.traverseUniverseHotspot();
  }

  activateGraalTraverse() {
    this.setState({trajectoriesGraal: [], totalPlanetsGraal: 0});
    this.traverseUniverseGraal();
  }

  activateParallelTraverse() {
    this.setState({trajectoriesHotspot: [], trajectoriesGraal: [], totalPlanetsGraal: 0, totalPlanetsHotspot: 0});
    this.traverseUniverseHotspot();
    this.traverseUniverseGraal();
  }
  
  render() {
    return (
      <div className="dashboard">
        <div className="lcars-top">
          <div className="button-holder">
            <Button onClickHandler={this.activateHotspotTraverse.bind(this)} style="button-1" text="HELIDON HOTSPOT222"></Button>
            <Button onClickHandler={this.activateGraalTraverse.bind(this)} style="button-2" text="HELIDON GRAALVM"></Button>
            <Button onClickHandler={this.activateParallelTraverse.bind(this)} style="button-3" text="PARALLEL"></Button>
          </div>
          <div className="stats-holder">
            <Timer styleClass="graal" time={this.state.timeFinishGraal - this.state.timeStartGraal} total={this.state.totalPlanetsGraal}></Timer>
            <Timer styleClass="hotspot" time={this.state.timeFinishHotspot - this.state.timeStartHotspot} total={this.state.totalPlanetsHotspot}></Timer>
          </div>
          <div className="extender-x-1"></div>
          <div className="extender-x-2"></div>
        </div>
        <div className="lcars-down">
          <div className="extender-y"></div>
            <Galaxy trajectoriesHotspot={this.state.trajectoriesHotspot} trajectoriesGraal={this.state.trajectoriesGraal}></Galaxy>
        </div>
      </div>
    );
  }
}

export default Dashboard;
