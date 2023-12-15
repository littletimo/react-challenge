import React from 'react';

const Ballot = ({
  category: { id, title, items, selectedItemId },
  onSelect,
}) => {
  return (
    <div className="ballot">
      <div className="category">
        <span>{title}</span>
      </div>
      <div className="cards">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className={`card ${item.id === selectedItemId ? 'selected' : ''}`}
            >
              <span>{item.title}</span>
              <img src={item.photoUrL} alt="card" className="card-image" />
              <button
                className="button"
                onClick={() => {
                  onSelect(id, item.id);
                }}
              >
                Select
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ballot;
