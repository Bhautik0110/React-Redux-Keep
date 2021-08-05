import React, { useState } from 'react';
import Header from './Header';
import Modal from './Modal';
import Keeps from './Keeps';
import { keep } from '../selector';
import { useSelector } from 'react-redux';

export function Home() {
  const [headerTitle] = useState('Keep.');
  const data = useSelector(keep);

  return (
    <div className="container mx-auto p-3">
      {data.hasOpenModal && <Modal />}
      <Header title={headerTitle} />
      <Keeps />
    </div>
  );
}
export default Home;
