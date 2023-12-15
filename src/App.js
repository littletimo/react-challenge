import './App.css';
import Ballot from './Components/Ballot/Ballot';
import Modal from './Components/Modal/Modal';
import Api from './Api/Api';
import { useEffect, useState } from 'react';

function App() {
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    Api.getBallotData().then((data) => {
      setCategories(data.items);
      // setCategories(data.items.slice(0, 1));
    });
  }, []);

  const onSelect = (categoryId, itemId) => {
    const newCategories = categories.slice();
    const newCategory = newCategories.find((c) => c.id === categoryId);
    newCategory.selectedItemId = itemId;
    setCategories(newCategories);
  };

  const count = categories.reduce((acc, cat) => {
    return acc + (cat.selectedItemId ? 1 : 0);
  }, 0);

  return (
    <div className="App">
      <header className="App-header">Playboy Awards 2021</header>
      {categories.map((c) => (
        <Ballot key={c.id} category={c} onSelect={onSelect} />
      ))}
      {
        <button
          className="button submit"
          disabled={count !== categories.length}
          onClick={() => setShowModal(true)}
        >
          Submit
        </button>
      }
      {showModal && (
        <Modal categories={categories} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default App;
