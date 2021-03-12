import React, { useState, useEffect } from 'react';
import api from '../components/api';

function Body() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let mounted = true;
    api()
      .then(items => {
        if (mounted) {
          setBooks(items);
        }
      });
    return () => mounted = false;
  }, []);

  return (
    <div className="App">
      <p>Homepage</p>
      <p>{console.log(books)}</p>

    </div>
  );
}

export default Body;
