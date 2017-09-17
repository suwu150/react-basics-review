/*
 * @file component List
 */

import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/index';

const propTypes = {
  items: PropTypes.array,
  onSelect: PropTypes.func,
};

function List({ items, onSelect }) {
  const itemsContent = items.map(
    item => (
      <ListItem
        item={item}
        key={item.id}
        onClick={() => onSelect(item.id)}
      />
    )
  );

  return (
    <div className="list-component">
      {itemsContent}
    </div>
  );
}

List.propTypes = propTypes;

export default List;
