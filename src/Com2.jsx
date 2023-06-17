import React, { useState } from 'react';

const YourComponent = () => {
    const[inputValue,setInputValue] = useState('');
  const [capitalizedString, setCapitalizedString] = useState('');
//   const[Clear,setClear]=useState('');

  // Rest of your component code

  const capitalizeFirstLetterOfWords = (inputString) => {
    const words = inputString.split(' ');
  
    const capitalizedWords = words.map((word) => {
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1);
      return firstLetter + restOfWord;
      
    });
  
    return capitalizedWords.join(' ');
    
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    
  };

  const handlecapitalization = () =>{
    const capitalized = capitalizeFirstLetterOfWords(inputValue);
    setCapitalizedString(capitalized);
  }
  const handleClear=()=>{
    setInputValue('');
    setCapitalizedString('');
  }
  
 
  
    return (
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button className="btn2" onClick={handlecapitalization}>Capital first word</button>
        <button className="btnClear" onClick={handleClear}>Clear</button>
        <p>{capitalizedString}</p>
      </div>
    );
 //   };
}
export default YourComponent;
