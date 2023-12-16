import React, { useState, useCallback } from 'react';

export function ListComponent() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const handleDelete = useCallback(itemToDelete => {
    setItems(prevItems => prevItems.filter(item => item !== itemToDelete));
  }, []);

  return (
    <div>
      {items.map(item => (
        <ListItemComponent key={item} item={item} onDelete={handleDelete} />
      ))}
    </div>
  );
}

function ListItemComponent({ item, onDelete }) {
  return (
    <div>
      <span>{item}</span>
      <button onClick={() => onDelete(item)}>Delete</button>
    </div>
  );
}
