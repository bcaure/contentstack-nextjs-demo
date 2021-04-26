import React from 'react';

export const ListItem = ({ item }) => (
  <div key={item.title} className="portBx clearfix">
    <div className="image imageCover" style={{ backgroundImage: `url(${item.href})` }} />
    <div className="pxDesc">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  </div>
);
