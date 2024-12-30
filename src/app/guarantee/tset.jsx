'use client';
import { useState } from 'react';
import Modal from '../../../components/Modal';

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Open Modal
      </button>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        animationClass={isOpen ? 'open' : 'closed'}
      >
        <div className="bg-white p-6 rounded">
          <h2 className="text-xl font-bold mb-4">Modal Content</h2>
          <p>This is the content of the modal.</p>
          <button
            onClick={closeModal}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Close Modal
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default MyComponent;
