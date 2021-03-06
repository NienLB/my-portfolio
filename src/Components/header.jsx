/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
export default class Header extends Component {
  render() {

    let resumeData = this.props.resumeData;

    return (
      <React.Fragment>
        {/*generated code*/}
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#experience">Experience</a></li>
              <li><a className="smoothscroll" href="#projects">Projects</a></li>
              <li><a className="smoothscroll" href="#education">Education</a></li>
              <li><a className="smoothscroll" href="#activities">Activities</a></li>

            </ul> {/* end #nav */}
          </nav> {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm {resumeData.name}</h1>
              <h3> I try to be a hardworking and ambitious individual with a great passion for the bussines analyst.  I am finding a full-time position in the industry in which I can put into practice my knowledge and experience, ultimately benefiting the operations of the organisation that I work for. So it's <a className="smoothscroll" href="#about">about me</a>.</h3>
              <hr />
              <ul className="social">
                <li><a href={resumeData.social.facebook}><i className="fa fa-facebook" /></a></li>
                <li><a href={resumeData.social.twitter}><i className="fa fa-twitter" /></a></li>
                {/* <li><a href="#"><i className="fa fa-google-plus" /></a></li> */}
                <li><a href={resumeData.social.li}><i className="fa fa-linkedin" /></a></li>
                <li><a href="#"><i className="fa fa-instagram" /></a></li>
                {/* <li><a href="#"><i className="fa fa-dribbble" /></a></li> */}
                <li><a href="#"><i className="fa fa-skype" /></a></li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}