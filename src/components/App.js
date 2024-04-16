import { useState, useEffect } from 'react';
import '../App.css';

import Sidebar from './Sidebar';
import Header from './Header';
import Form from './Form';
import Info from './Info';
import InfoList from './InfoList';
import Footer from './Footer';
import TopicList from './TopicList';
import DeleteModal from './DeleteModal';
import ClearModal from './ClearModal';
import UpdateModal from './UpdateModal';

export default function App() {
  const [sum, setSum] = useState(function () {
    const storeSum = localStorage.getItem('sum');
    return JSON.parse(storeSum);
  });

  const [items, setItems] = useState(function () {
    const storeItems = localStorage.getItem('items');
    return JSON.parse(storeItems);
  });

  const [isModalClose, setisModalClose] = useState(true);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);
  const [itemIdToUpdate, setitemIdToUpdate] = useState(null);
  const [itemToUpdate, setitemToUpdate] = useState({});

  function handleModalCloseClick() {
    if (items.length === 0) {
      return;
    }
    setisModalClose(!isModalClose);
  }

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
    setItemIdToDelete(id);
    setisModalClose(false);
  }

  function handleClearModal() {
    setisModalClose(false);
  }

  function handleUpdateItem(id, income, topic, date) {
    setitemIdToUpdate(id);
    console.log(itemIdToUpdate);
    setitemToUpdate(items.find((item) => item.id === itemIdToUpdate));
    setisModalClose(false);
  }

  function handleConfirmUpdate() {
    console.log(123);
  }

  function handleConfirmDelete() {
    setItems(items.filter((item) => item.id !== itemIdToDelete));
    setSum(
      items
        .filter((item) => item.id !== itemIdToDelete)
        .reduce((total, amount) => {
          return total + Number(amount.income);
        }, 0)
    );
    setisModalClose(true);
  }

  function handleClearList() {
    setItems([]);
    setSum(0);
    setisModalClose(true);
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
                onDeleteItem={handleConfirmDelete}
                onDeleteModalOpen={handleModalCloseClick}
                isModalClose={isModalClose}
                onDeleteItemId={handleDeleteItem}
                onUpdateItemData={handleUpdateItem}
                onClearModal={handleClearModal}
              />
            </Info>
          </main>
        </div>
      </div>
      <Footer />
      <DeleteModal
        onModalClose={handleModalCloseClick}
        isModalClose={isModalClose}
        onItemDelete={handleConfirmDelete}
      />

      {/* <UpdateModal
        onModalClose={handleModalCloseClick}
        isModalClose={isModalClose}
        onUpdateList={handleConfirmUpdate}
        itemToUpdate={itemToUpdate}
      /> */}
      {/* <ClearModal
        onModalClose={handleModalCloseClick}
        isModalClose={isModalClose}
        onClearList={handleClearList}
      /> */}
    </>
  );
}
