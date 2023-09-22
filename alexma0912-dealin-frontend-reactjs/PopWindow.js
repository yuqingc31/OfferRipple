import React, { useState } from 'react';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>登录</button>

      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={handleCloseModal}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
              minWidth: '300px',
            }}
            //onClick={(e) => e.stopPropagation()}
          >
            <h2>Login</h2>
            {/* 这里放登录表单 */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
