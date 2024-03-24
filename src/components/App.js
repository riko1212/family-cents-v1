import { useState, useEffect } from 'react';
import '../App.css';

import Sidebar from './Sidebar';
import Header from './Header';
import Form from './Form';
import Info from './Info';
import InfoList from './InfoList';
import Footer from './Footer';
import TopicList from './TopicList';

export default function App() {
  // const [sum, setSum] = useState(0);
  const [sum, setSum] = useState(function () {
    const storeSum = localStorage.getItem('sum');
    return JSON.parse(storeSum);
  });
  // con st [items, setItems] = useState([]);
  const [items, setItems] = useState(function () {
    const storeItems = localStorage.getItem('items');
    return JSON.parse(storeItems);
  });

  function handleChangeSum(data) {
    setSum((sum) => {
      let addSum = sum;
      return (addSum += Number(data));
    });
  }

  function handleAddItems(item) {
    setItems((items) => [item, ...items]);
    console.log(items);
  }

  function handleDeleteItem(id) {
    setItems(() => items.filter((item) => item.id !== id));
    setSum(() =>
      items
        .filter((item) => item.id !== id)
        .reduce((total, amount) => {
          return total + Number(amount.income);
        }, 0)
    );
  }

  function handleClearList() {
    setItems([]);
    setSum(0);
  }

  useEffect(
    function () {
      localStorage.setItem('items', JSON.stringify(items));
    },
    [items]
  );

  useEffect(
    function () {
      localStorage.setItem('sum', JSON.stringify(sum));
    },
    [sum]
  );

  return (
    <>
      <Header />
      <div className="page-wrap">
        <div className="container page-wrap-container">
          <Sidebar>
            <TopicList />
          </Sidebar>
          <main className="main">
            <Form onAddSum={handleChangeSum} onAddItems={handleAddItems} />
            <Info sum={sum}>
              <InfoList
                items={items}
                onDeleteItem={handleDeleteItem}
                onClearList={handleClearList}
              />
            </Info>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
