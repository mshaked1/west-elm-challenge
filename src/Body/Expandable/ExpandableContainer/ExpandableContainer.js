import React from 'react';
import ExpandableItem from '../ExpandableItem/ExpandableItem';
import './ExpandableContainer.css';

const ExpandableContainer = ({ expandables, handleExpandable }) => (
  <div id="expandable-container">
    {expandables.map((item, index) => (
      <ExpandableItem
        key={index}
        id={index}
        isExpanded={expandables[index]}
        handleExpandable={handleExpandable}
      />))}
  </div>
)

export default ExpandableContainer;