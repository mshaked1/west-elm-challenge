import React from 'react';
import Description from '../Description/Description';
import './BodyContainer.css';

const BodyContainer = ({ updateQuantity, heroImage, quantity, breadCrumbs, imageMatches, expandables, handleExpandable, onAdd, showModal }) => (
  <div className="Body-container">
    <div id="breadcrumbs">
      { breadCrumbs.map((crumb, index) => (
        <div key={index} className="crumb">
          {crumb}
          {index === breadCrumbs.length - 1 && `, ${imageMatches[heroImage.index].color}`}
          &nbsp;&nbsp;
          {index < breadCrumbs.length - 1 && '>'}
          &nbsp;&nbsp;&nbsp;
        </div>
      ))}
    </div>
    <div id="item-container">
      <div id="hero-image-container">
        <img
          id="hero-image"
          src={imageMatches[heroImage.index].image}
          alt={`${imageMatches[heroImage.index].letter}`}
        />
      </div>
      <Description
        updateQuantity={updateQuantity}
        color={imageMatches[heroImage.index].color}
        quantity={quantity}
        expandables={expandables}
        handleExpandable={handleExpandable}
        onAdd={onAdd}
        showModal={showModal}
      />
    </div>
  </div>
)

export default BodyContainer;
