export const styles = `
    .upload-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      text-align: center;
      margin-left: 25%;
      margin-top: -3.8rem;
    }
    
    .upload-button {
      background-color: grey;
      color: white;
      border: none;
      padding: 8px 16px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      cursor: pointer;
      border-radius: 0.5rem;
    }
    
    .upload-button:hover {
      background-color: #f85c70;
    }
    
    .upload-button:focus {
      outline: none;
    }
    
    .upload-input {
      display: none;
    }

    .remove-button {
      background-color: rgb(248, 92, 112);
      color: white;
      border: none;
      padding: 8px 16px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin-top: 16px;
      margin-right: 0.5rem;
      cursor: pointer;
      border-radius: 0.5rem;
    }
    
    .remove-button:hover {
      background-color: rgb(248, 92, 112);
    }
    
    .remove-button:focus {
      outline: none;
    }

    .photo-review {
      margin-top: 20%;
      margin-left: -50%;
      margin-bottom: 2rem;
      border-radius: 2rem;
    }
    
    .photo-text {
      color: grey;
      margin-left: 1rem;
    }

    @media (max-width: 767px) {
      .photo-review {
        margin-left: -40%;
      }
    }
  `;
