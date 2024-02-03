import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputVal, setInputVal] = useState("");

  // ! duz deyil
  // function fetchData() {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  // }

  // fetchData();

  useEffect(function () {
    async function fetchData() {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      console.log(data);
      setArr(data);

      setLoading(false);
    }

    fetchData();
  }, []);

  useEffect(
    function () {
      document.head.children[5].innerHTML = inputVal;
    },
    [inputVal]
  );

  // ! [] -> dependency array
  // * bos olduqda mount halinda isleyir
  // * hech yazilmayibsa re-render olunduqca isleyir
  // * daxilinde verilen deyisene goreyeniden isleyir

  return (
    <>
      {/* <h1>React useEffect hook</h1>
      <p>lesson 5</p>

      <button onClick={() => setCount((c) => c + 1)}>add</button>
      <p>Count: {count}</p>
      <p>{arr.length}</p> */}

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="cards__container">
          {arr.map((card) => (
            <div key={card.id} className="card">
              <p>{card.title}</p>
              <p>{card.price}</p>
            </div>
          ))}
        </div>
      )}

      <input type="text" onChange={(e) => setInputVal(e.target.value)} />
      {/* <button onClick={() => fetchData()}>fetch</button> */}
    </>
  );
}

export default App;
