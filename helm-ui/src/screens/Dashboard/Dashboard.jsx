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
      trajectoriesNative: [],
      searchEngineAddressGraal: process.env.REACT_APP_API_URL_GRAAL,
      searchEngineAddressHotspot: process.env.REACT_APP_API_URL_C2,
      searchEngineAddressNative: process.env.REACT_APP_API_URL_NATIVE,
      timeStartGraal: 0,
      timeStartHotspot: 0,
      timeStartNative: 0,
      timeFinishGraal: 0,
      timeFinishHotspot: 0,
      timeFinishNative: 0,
      totalPlanetsGraal: 0,
      totalPlanetsHotspot: 0,
      totalPlanetsNative: 0
    }
  }

  traverseUniverse(searchEngineAddress, trajectories, totalPlanets, timeStartKey, timeFinishKey, trajectoriesKey, totalPlanetsKey) {
    this.setState({[timeStartKey]: (new Date()).getTime()});
    fetch(searchEngineAddress)
      .then(promise => promise.json()).then(result => {
        trajectories.push({ 'starStart': 'star1', 'starEnd': 'star2' });
        this.setState({[trajectoriesKey]: trajectories, [timeFinishKey]: (new Date()).getTime(), [totalPlanetsKey]: totalPlanets + Number(result.habitablePlanets) });
        fetch(searchEngineAddress)
          .then(promise => promise.json()).then(result => {
            trajectories.push({ 'starStart': 'star2', 'starEnd': 'star3' });
            this.setState({[trajectoriesKey]: trajectories, [timeFinishKey]: (new Date()).getTime(), [totalPlanetsKey]: totalPlanets + Number(result.habitablePlanets) });
            fetch(searchEngineAddress)
              .then(promise => promise.json()).then(result => {
                trajectories.push({ 'starStart': 'star3', 'starEnd': 'star4' });
                this.setState({[trajectoriesKey]: trajectories, [timeFinishKey]: (new Date()).getTime(), [totalPlanetsKey]: totalPlanets + Number(result.habitablePlanets) });
                fetch(searchEngineAddress)
                  .then(promise => promise.json()).then(result => {
                    trajectories.push({ 'starStart': 'star4', 'starEnd': 'star5' });
                    this.setState({[trajectoriesKey]: trajectories, [timeFinishKey]: (new Date()).getTime(), [totalPlanetsKey]: totalPlanets + Number(result.habitablePlanets) });
                    fetch(searchEngineAddress)
                      .then(promise => promise.json()).then(result => {
                        trajectories.push({ 'starStart': 'star5', 'starEnd': 'star6' });
                        this.setState({[trajectoriesKey]: trajectories, [timeFinishKey]: (new Date()).getTime(), [totalPlanetsKey]: totalPlanets + Number(result.habitablePlanets) });
                        fetch(searchEngineAddress)
                          .then(promise => promise.json()).then(result => {
                            trajectories.push({ 'starStart': 'star6', 'starEnd': 'star7' });
                            this.setState({[trajectoriesKey]: trajectories, [timeFinishKey]: (new Date()).getTime(), [totalPlanetsKey]: totalPlanets + Number(result.habitablePlanets) });
                            fetch(searchEngineAddress)
                              .then(promise => promise.json()).then(result => {
                                trajectories.push({ 'starStart': 'star7', 'starEnd': 'star8' });
                                this.setState({[trajectoriesKey]: trajectories, [timeFinishKey]: (new Date()).getTime(), [totalPlanetsKey]: totalPlanets + Number(result.habitablePlanets) });
                                fetch(searchEngineAddress)
                                  .then(promise => promise.json()).then(result => {
                                    trajectories.push({ 'starStart': 'star8', 'starEnd': 'star9' });
                                    this.setState({[trajectoriesKey]: trajectories, [timeFinishKey]: (new Date()).getTime(), [totalPlanetsKey]: totalPlanets + Number(result.habitablePlanets) });
                                    fetch(searchEngineAddress)
                                      .then(promise => promise.json()).then(result => {
                                        trajectories.push({ 'starStart': 'star9', 'starEnd': 'star10' });
                                        this.setState({[trajectoriesKey]: trajectories, [timeFinishKey]: (new Date()).getTime(), [totalPlanetsKey]: totalPlanets + Number(result.habitablePlanets) });
                                        fetch(searchEngineAddress)
                                          .then(promise => promise.json()).then(result => {
                                            trajectories.push({ 'starStart': 'star10', 'starEnd': 'star11' });
                                            this.setState({[trajectoriesKey]: trajectories, [timeFinishKey]: (new Date()).getTime(), [totalPlanetsKey]: totalPlanets + Number(result.habitablePlanets) });
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
    this.traverseUniverse(this.state.searchEngineAddressHotspot, this.state.trajectoriesHotspot, this.state.totalPlanetsHotspot, "timeStartHotspot", "timeFinishHotspot", "trajectoriesHotspot", "totalPlanetsHotspot");
  }

  activateGraalTraverse() {
    this.setState({trajectoriesGraal: [], totalPlanetsGraal: 0});
    this.traverseUniverse(this.state.searchEngineAddressGraal, this.state.trajectoriesGraal, this.state.totalPlanetsGraal, "timeStartGraal", "timeFinishGraal", "trajectoriesGraal", "totalPlanetsGraal");
  }

  activateNativeTraverse() {
    this.setState({trajectoriesNative: [], totalPlanetsNative: 0});
    this.traverseUniverse(this.state.searchEngineAddressNative, this.state.trajectoriesNative, this.state.totalPlanetsNative, "timeStartNative", "timeFinishNative", "trajectoriesNative", "totalPlanetsNative");
  }

  activateParallelTraverse() {
    this.setState({trajectoriesHotspot: [], trajectoriesGraal: [], totalPlanetsGraal: 0, totalPlanetsHotspot: 0, trajectoriesNative: [], totalPlanetsNative: 0});
    this.traverseUniverse(this.state.searchEngineAddressHotspot, this.state.trajectoriesHotspot, this.state.totalPlanetsHotspot, "timeStartHotspot", "timeFinishHotspot", "trajectoriesHotspot", "totalPlanetsHotspot");
    this.traverseUniverse(this.state.searchEngineAddressGraal, this.state.trajectoriesGraal, this.state.totalPlanetsGraal, "timeStartGraal", "timeFinishGraal", "trajectoriesGraal", "totalPlanetsGraal");
    this.traverseUniverse(this.state.searchEngineAddressNative, this.state.trajectoriesNative, this.state.totalPlanetsNative, "timeStartNative", "timeFinishNative", "trajectoriesNative", "totalPlanetsNative");
  }
  
  render() {
    return (
      <div className="dashboard">
        <div className="lcars-top">
          <div className="button-holder">
            <Button onClickHandler={this.activateHotspotTraverse.bind(this)} style="button-1" text="HELIDON HOTSPOT"></Button>
            <Button onClickHandler={this.activateGraalTraverse.bind(this)} style="button-2" text="HELIDON GRAALVM"></Button>
            <Button onClickHandler={this.activateNativeTraverse.bind(this)} style="button-4" text="MICRONAUT NATIVE"></Button>
            <Button onClickHandler={this.activateParallelTraverse.bind(this)} style="button-3" text="PARALLEL"></Button>
          </div>
          <div className="stats-holder">
            <Timer styleClass="graal" time={this.state.timeFinishGraal - this.state.timeStartGraal} total={this.state.totalPlanetsGraal}></Timer>
            <Timer styleClass="hotspot" time={this.state.timeFinishHotspot - this.state.timeStartHotspot} total={this.state.totalPlanetsHotspot}></Timer>
            <Timer styleClass="native" time={this.state.timeFinishNative - this.state.timeStartNative} total={this.state.totalPlanetsNative}></Timer>
          </div>
          <div className="extender-x-1"></div>
          <div className="extender-x-2"></div>
        </div>
        <div className="lcars-down">
          <div className="extender-y"></div>
            <Galaxy trajectoriesHotspot={this.state.trajectoriesHotspot} trajectoriesGraal={this.state.trajectoriesGraal} trajectoriesNative={this.state.trajectoriesNative}></Galaxy>
        </div>
      </div>
    );
  }
}

export default Dashboard;
