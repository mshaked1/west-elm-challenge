import React from 'react';
import collapsedArrow from '../../../assets/arrow-collapsed.png';
import expandedArrow from '../../../assets/arrow-expanded.png';
import './ExpandableItem.css';

const ExpandableItem = ({ id, isExpanded, handleExpandable }) => (
  <div id="expandable-item">
    {isExpanded && (
      <div>
        <img className="arrow" src={expandedArrow} alt='expanded-arrow' />
        <span>
          <button onClick={() => handleExpandable(id)}>
            EXPANDED
          </button>
        </span>
        <p className="expanded">
          This section is expanded. This section can be collapsed by clicking on the 'EXPANDED'
          text. This section is expanded. This section can be collapsed by clicking on the 'EXPANDED'
          text.
        </p>
      </div>
    )}
    {!isExpanded && (
      <div>
        <img className="arrow" src={collapsedArrow} alt='collapsed-arrow' />
        <span>
          <button onClick={() => handleExpandable(id)}>
            COLLAPSED
          </button>
        </span>
      </div>
    )}
  </div>
)

export default ExpandableItem;