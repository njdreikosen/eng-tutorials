import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import StaticsOverview from './StaticsOverview'
import Force from './Force'
import Moment from './Moment'
import './App.css';
import './Hamburger.css'
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.scrollRef = React.createRef();
    this.state = {
      scroll: '0%',
      contentHeight: 0,
      isOpen: false,
      dropdown: null,
      pageContent: sessionStorage.getItem('pageContent')
    };
    if (!this.state.pageContent) {
      this.state = {
        scroll: 0,
        contentHeight: 0,
        isOpen: false,
        dropdown: null,
        pageContent: "Noah's Notebook"
      };
    }
    this.selectDropdown = this.selectDropdown.bind(this);
    this.setPageContent = this.setPageContent.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  handleScroll = (e) => {
    const scrollTop = this.scrollRef.current.scrollTop;
    let scrollProgress = (scrollTop / (this.state.contentHeight - window.innerHeight + 150)) * 100;
    this.setState({
      scroll: `${scrollProgress}%`
    });
  }

  handleSetHeight = (pageHeight) => {
    this.setState({
      contentHeight: pageHeight
    });
  }

  selectDropdown(dd, e) {
    if (this.state.dropdown === dd) {
      this.setState({
        dropdown: null
      });
    } else {
      this.setState({
        dropdown: dd
      });
    }
  }

  setPageContent(pc, e) {
    sessionStorage.setItem('pageContent', pc);
    this.setState({
      pageContent: pc
    });
  }

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let hamburgerClass = this.state.isOpen ? 'hamburger hamburger-slider is-active' : 'hamburger hamburger-slider';
    let navbarClass = this.state.isOpen ? 'navbar is-open' : 'navbar';
    return (
      <BrowserRouter basename={'/eng-tutorials'}>
        <button className={hamburgerClass} type='button' onClick={this.toggleNavbar}>
          <span className='hamburger-box'>
            <span className='hamburger-inner' />
          </span>
        </button>
        <div className={navbarClass}>
          <NavLink
              className='nav-link'
              onClick={(e) => this.setPageContent("Noah's Notebook", e)}
              to="/">
            Home
          </NavLink>
          <button className='nav-dropdown' onClick={(e) => this.selectDropdown('statics', e)}>Static Mechanics<div className='arrow' /></button>
          <NavLink
              className={this.state.dropdown==='statics' ? 'dropdown is-open' : 'dropdown'}
              onClick={(e) => this.setPageContent('Static Mechanics: Overview', e)}
              to="/statics-overview">
            Overview
          </NavLink>
          <NavLink
              className={this.state.dropdown==='statics' ? 'dropdown is-open' : 'dropdown'}
              onClick={(e) => this.setPageContent('Components of Force', e)}
              to="/comp-of-force">
            Components of Force
          </NavLink>
          <NavLink
              className={this.state.dropdown==='statics' ? 'dropdown is-open' : 'dropdown'}
              onClick={(e) => this.setPageContent('Moments', e)}
              to="/moments">
            Moments
          </NavLink>
        </div>
        <div className='display-panel'
          ref={this.scrollRef}
          onScroll={this.handleScroll}
        >
          <div className='header'>
            <h1>{this.state.pageContent}</h1>
            <a className='header-link' href="https://njdreikosen.github.io/">Back To<br/>njdreikosen.github.io</a>
          </div>
          <div className='scroll-progress-container'>
            <div className='scroll-progress' style={{ height: this.state.scroll }}/>
          </div>
          <Routes basename={'/eng-tutorials'}>
            <Route path="/" element={<Home />}/>
            <Route path='/statics-overview' element={<StaticsOverview setHeight={this.handleSetHeight}/>}/>
            <Route path="/comp-of-force" element={<Force setHeight={this.handleSetHeight}/>}/>
            <Route path="/moments" element={<Moment setHeight={this.handleSetHeight}/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}


export default App;
