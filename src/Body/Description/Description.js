import React from 'react';
import ExpandableContainer from '../Expandable/ExpandableContainer/ExpandableContainer';
import AddToCartButton from '../../assets/button-add-to-cart.png';
import './Description.css';

const Description = ({ updateQuantity, color, quantity, expandables, handleExpandable, onAdd, showModal }) => (
  <div id="description-component">
    <div className="large">Williams-Sonoma Clasic Apron, {color}</div>
    <div>
      A generously sized apron is a necessity in any kitchen
      and ours will brigthen yours with lively color. Sewn of thick cotton,
      it ca be personalized or monogrammed with up to nine characters,
      all the same height, embroidered in your choice of color.
      An apron of this quality makes a welcome gift for any cook.
    </div>
    <ul>
      <li>Durable 100% cotton construction.</li>
      <li>Adjustable neckband ensures a good fit.</li>
      <li>Roomy frot pockets hold small tools.</li>
      <li>Machie-wash.</li>
    </ul>
    <div className="large">$19.95</div>
    <input
      id="quantity"
      value={quantity}
      onChange={(event) => updateQuantity(event.target.value)}
      type="number"
    />
    <div className="add-button" disabled={showModal} onClick={onAdd}>
      <img src={AddToCartButton} alt="Add to cart" />
    </div>
    <div>
      <ExpandableContainer
        expandables={expandables}
        handleExpandable={handleExpandable}
      />
    </div>
  </div>
)

export default Description;