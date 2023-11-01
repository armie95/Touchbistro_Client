import axios from 'axios';
import React, { useState, useEffect } from 'react';


function GetMedian() {
  
  const [n, setN] = useState('');
  const [medians, setMedians] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!error) {
      setMedians([]); 
    }
  }, [error]);

  const handleFindMedians = () => {
    if (!n) {
      setError('Please enter a valid number (n)');
      return;
    }

    axios
      .get(`http://localhost:8080/findmedians?n=${n}`)
      .then((response) => {
        setMedians(response.data.medians);
        setError('');
      })
      .catch((error) => {
        setError(`Error: ${error.message}`);
      });
  }

 
  return (
    <div data-testid="getmedian-1">
      <form className="upload-form">
        <h1 className="upload-form__title">Find Median Prime Numbers</h1>

        <input
          type="number"
          placeholder="Enter a number (n)"
          value={n}
          onChange={(e) => setN(e.target.value)}
          className="upload-form__input"
        />

        <button type="button" onClick={handleFindMedians} className="upload-form__button">
          Find Medians
        </button>

        {medians.length > 0 && (
          <div>
            <p>Median Prime Numbers: {medians.join(', ')}</p>
          </div>
        )}

        {error && <p className="upload-form__error">{error}</p>}

      
      </form>
    </div>
  );
}

export default  GetMedian;
