import { useState } from 'react';
import '../App.css';

import Sidebar from './Sidebar';
import Header from './Header';
import Form from './Form';
import Info from './Info';
import Footer from './Footer';

export default function App() {
  const [sum, setSum] = useState(0);
  const [items, setItems] = useState([]);

  function handleChangeSum(data) {
    setSum((sum) => {
      let addSum = sum;
      return (addSum += Number(data));
    });
  }

  function handleAddItems(item) {
    setItems((items) => [item, ...items]);
  }

  function handleDeleteItem(id) {
    setItems((item) => items.filter((item) => item.id !== id));
  }

  function handleClearList() {
    setItems([]);
  }

  return (
    <>
      <Header />
      <div className="page-wrap">
        <div className="container page-wrap-container">
          <Sidebar />
          <main className="main">
            <Form onAddSum={handleChangeSum} onAddItems={handleAddItems} />
            <Info
              sum={sum}
              items={items}
              onDeleteItem={handleDeleteItem}
              onClearList={handleClearList}
            />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
