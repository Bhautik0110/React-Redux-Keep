import React, { useState, Suspense } from 'react';
import Header from './Header';
import Modal from './Modal';
import { keep } from '../selector';
import { useSelector } from 'react-redux';

export function Home() {
  const Keeps = React.lazy(() => import('./Keeps'));
  const [headerTitle] = useState('Keep.');
  const data = useSelector(keep);

  return (
    <div className="container mx-auto p-3">
      {data.hasOpenModal && <Modal />}
      <Header title={headerTitle} />
      <Suspense fallback={<div>Loading...</div>}>
        <Keeps />
      </Suspense>
    </div>
  );
}
export default Home;
