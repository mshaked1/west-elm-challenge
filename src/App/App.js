import React, { Component } from 'react';
import './App.css';
import Modal from '../Modal/Modal';
import Navbar from '../Nav/Navbar/Navbar';
import BodyContainer from '../Body/BodyContainer/BodyContainer';
import Thumbnails from '../Thumbnails/Thumbnails'
import logo from '../assets/logo.png';
import smallA from '../assets/product-small-a.jpg';
import largeA from '../assets/product-large-a.jpg';
import smallB from '../assets/product-small-b.jpg';
import largeB from '../assets/product-large-b.jpg';
import smallC from '../assets/product-small-c.jpg';
import largeC from '../assets/product-large-c.jpg';
import smallD from '../assets/product-small-d.jpg';
import largeD from '../assets/product-large-d.jpg';

class App extends Component {
  constructor() {
    super();
    this.toggleModal = this.toggleModal.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.thumbnailClick = this.thumbnailClick.bind(this);
    this.handleExpandable = this.handleExpandable.bind(this);
    this.navItems = [
      'cookware',
      'cooks\' tools',
      'cutlery',
      'electrics',
      'bakeware',
      'food',
      'tabletop & bar',
      'homekeeping',
      'outdoor',
      'sale',
      'williams-sonoma home'
    ];
    this.breadCrumbs = [
      'Home',
      'Homekeeping',
      'Aprons',
      'Adult Aprons',
      'Williams-Sonoma Classic Apron'
    ];
    this.imageMatches = [
      {
        'letter': 'a',
        'color': 'French Blue',
        'image': largeA,
        'thumb': smallA
      },
      {
        'letter': 'b',
        'color': 'Striped Black',
        'image': largeB,
        'thumb': smallB
      },
      {
        'letter': 'c',
        'color': 'Striped Lime Green',
        'image': largeC,
        'thumb': smallC
      },
      {
        'letter': 'd',
        'color': 'Horizontal Striped Red',
        'image': largeD,
        'thumb': smallD
      }
    ]
    this.state = {
      heroImage: {
        url: 'a',
        index: 0
      },
      quantity: 0,
      expandables: [ true, false, false],
      showModal: false
    };
  }

  toggleModal = function() {
    let newState = {...this.state};
    if (this.state.showModal) {
      newState.quantity = 0;
    }
    newState.showModal = !newState.showModal;
    this.setState(newState);
  }

  updateQuantity = function(count) {
    if (count >= 0) {
      this.setState({quantity: count});
    }
  }

  thumbnailClick = function(letter, index) {
    let newState = {...this.state};
    newState.heroImage = {
      url: letter,
      index
    }
    this.setState(newState);
  }

  handleExpandable = function(id) {
    let newState = {...this.state};
    newState.expandables[id] = !newState.expandables[id];
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        {this.state.showModal &&
          <Modal
            quantity={this.state.quantity}
            showModal={this.state.showModal}
            onClose={this.toggleModal}
          />}
        <header className="App-header">
          <img src={logo} alt="Logo"/>
        </header>

        <div>
          <Navbar navItems={this.navItems} />
        </div>
        <div>
          <BodyContainer
            updateQuantity={this.updateQuantity}
            heroImage={this.state.heroImage}
            quantity={this.state.quantity}
            breadCrumbs={this.breadCrumbs}
            imageMatches={this.imageMatches}
            expandables={this.state.expandables}
            handleExpandable={this.handleExpandable}
            onAdd={this.toggleModal}
            showModal={this.state.showModal}
          />
        </div>
        <div>
          <Thumbnails
            selectedThumbnail={this.state.heroImage}
            images={this.imageMatches}
            thumbnailClick={this.thumbnailClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
