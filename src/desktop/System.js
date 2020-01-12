import React from "react";

import "./css/System.css";

class System extends React.Component {
    render() {
        return (
            <div className="system" id={this.props.active === "main" ? "" : "blur"}>
                <button className="center" id="sol" onClick={this.props.centerClick}></button>
                <div className={this.props.view === "side" ? "mercuryY" : "mercuryCenter"}>
                    <div className={this.props.view === "side" ? "mercuryX" : "mercury"}></div>
                </div>

                <div className={this.props.view === "side" ? "venusY" : "venusCenter"}>
                    <div className={this.props.view === "side" ? "venusX" : "venus"}></div>
                </div>

                <div className={this.props.view === "side" ? "earthY" : "earthCenter"}>
                    <div className={this.props.view === "side" ? "earthX" : "earth"}></div>
                </div>

                <div className={this.props.view === "side" ? "marsY" : "marsCenter"}>
                    <div className={this.props.view === "side" ? "marsX" : "mars"}></div>
                </div>



                <div className={this.props.view === "side" ? "beltOS" : "beltO"}></div>
                {this.props.view === "side" ? <div className="beltOSF"></div> : null}

                <div className={this.props.view === "side" ? "beltTS" : "beltT"}></div>
                {this.props.view === "side" ? <div className="beltTSF"></div> : null}

                <div className={this.props.view === "side" ? "beltTRS" : "beltTR"}></div>
                {this.props.view === "side" ? <div className="beltTRSF"></div> : null}

                <div className={this.props.view === "side" ? "beltFS" : "beltF"}></div>
                {this.props.view === "side" ? <div className="beltFSF"></div> : null}



                <div className={this.props.view === "side" ? "jupiterY" : "jupiterCenter"}>
                    <div className={this.props.view === "side" ? "jupiterX" : "jupiter"}>
                        {this.props.view === "side" ?
                            <div className="jupiterRing">

                            </div>
                            :
                            <div className="jupiterRings">
                                <div className="jOne"></div>
                                <div className="jTwo"></div>
                                <div className="jThree"></div>
                            </div>
                        }
                    </div>
                </div>

                <div className={this.props.view === "side" ? "saturnY" : "saturnCenter"}>
                    <div className={this.props.view === "side" ? "saturnX" : "saturn"}>
                        {this.props.view === "side" ?
                            <div className="saturnRing">

                            </div>
                            :
                            <div className="saturnRings">
                                <div className="sOne"></div>
                                <div className="sTwo"></div>
                                <div className="sThree"></div>
                                <div className="sFour"></div>
                                <div className="sFive"></div>
                                <div className="sSix"></div>
                            </div>
                        }
                    </div>
                </div>

                <div className={this.props.view === "side" ? "uranusY" : "uranusCenter"}>
                    <div className={this.props.view === "side" ? "uranusX" : "uranus"}>
                        {this.props.view === "side" ?
                            <div className="uranusRing">

                            </div>
                            :
                            <div className="uranusRings">
                                <div className="uOne"></div>
                                <div className="uTwo"></div>
                                <div className="uThree"></div>
                                <div className="uFour"></div>
                            </div>
                        }
                    </div>
                </div>

                <div className={this.props.view === "side" ? "neptuneY" : "neptuneCenter"}>
                    <div className={this.props.view === "side" ? "neptuneX" : "neptune"}>
                        {this.props.view === "side" ?
                            <div className="neptuneRing">

                            </div>
                            :
                            <div className="neptuneRings">
                                <div className="nOne"></div>
                                <div className="nTwo"></div>
                                <div className="nThree"></div>
                            </div>
                        }
                    </div>
                </div>

                {this.props.showPluto ? <div></div> : null}
            </div>
        );
    }
}

export default System;