import React, {useState} from 'react';
import UserInput from  './components/UserInput/UserInput';
import './App.css';

function App() {
  const [isFormValid, setIsFormValid] = useState(true);

  const isUserInputValid = (isValid) => {
    if(!isValid) {
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true);
  }

  return (
    <div className={`${!isFormValid ? 'blackOverlay' : ''}`}>
      <section id='user-form'>
        <UserInput isUserInputValid={isUserInputValid} />
      </section>
      <section id='users'>

      </section>
    </div>
  );
}

export default App;
