import React, { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const [item, setItem] = useState(null);  // Ініціалізуємо як null, а не як масив

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/1")
      .then((response) => {
        setItem(response.data);  // response.data буде об'єкт, а не масив
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/1")
  //     .then((res) => {
  //       if (!res.ok) {
  //         // Якщо відповідь не вдала, викидаємо помилку
  //         throw new Error("Network response was not ok");
  //       }
  //       return res.json();  // Повертаємо розпарсений JSON
  //     })
  //     .then((data) => {
  //       setItem(data);  // Встановлюємо отримані дані в state
  //     })
  //     .catch((error) => {
  //       console.error("There was an error fetching the data!", error);
  //     });
  // }, []);

  return (
    <div className="App">
      <h1>List Users</h1>
      {/* Перевіряємо, чи є дані, і виводимо одиничний елемент */}
      {item ? (
        <div>
          <h3>{item.name}</h3>
          <p>{item.title}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
