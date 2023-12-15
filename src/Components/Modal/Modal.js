import React from 'react';

const Modal = ({ categories, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button
          className="modal-header button"
          onClick={() => {
            onClose();
          }}
        >
          X
        </button>
        <h2>Success!</h2>
        {categories &&
          categories.map((c) => {
            const selected = c.items.find((i) => i.id === c.selectedItemId);
            return (
              <div key={c.id}>
                {c.title} - {selected?.title}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Modal;
