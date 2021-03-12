import React, { useState, useEffect } from 'react';
import api from '../components/api';

function Body() {
  const [books, setBooks] = useState({ });

  useEffect(() => {
    let mounted = true;
    api()
      .then(items => {
        if (mounted) {
          setBooks(items);
        }
      });

    return () => { mounted = false; };
  }, []);

  return (
    <div className="App">
      <p>Homepage</p>
      <div className="wrapper d-flex flex-row">
        <h1>My Grocery List</h1>

        <ul>
          {books.categories && books.categories.map(item => (
            <li key={item.Categories}>
              {' '}
              {item.strCategory}
              <img src={item.strCategoryThumb} alt="" />
              {item.strCategoryDescription}
              {' '}
            </li>

          ))}

        </ul>
      </div>
    </div>
  );
}

export default Body;
