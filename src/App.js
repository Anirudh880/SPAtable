import { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table';

function App() {
  const [table, settable] = useState();
  useEffect(() => {
    let arr = [];
    let temp = [];
    for (let j = 0; j < 7; j++) {
      temp.push("untitled");
    }
    for (let i = 0; i < 7; i++) {
      arr.push(temp);
    }
    settable(arr);
  }, [])


  const addrow = () => {
    let arr = [];
    let n = 0;
    table.map((row, id) => {
      n = row.length;
      arr.push(row);
    })
    let temp = [];
    for (let j = 0; j < n; j++) {
      temp.push("untitled");
    }
    arr.push(temp);
    settable(arr);
  }
  const addcolumn = () => {
    let arr = [];
    table.map((row, id) => {
      let temp = [];
      row.map((col, id) => {
        temp.push(col);
      })
      temp.push("untitled");
      arr.push(temp);
    })
    settable(arr);
  }

  const exportCSV = () => {
    let csv = [];
    let n = table.length;
    let m = table[0].length;
    for (let i = 0; i < n; i++) {
      let row = []
      for (let j = 0; j < m; j++) {
        let text = document.getElementById(`${i}${j}`).value;
        row.push(text);
      }
      csv.push(row.join(","));
    }
    let final = csv.join("\n");
    console.log(final);
    let blob = new Blob([final], { type: "text/csv" });
    window.location.href = URL.createObjectURL(blob);
  }

  return (
    <div className="App">
      <div className='navbar'>
        <button onClick={addcolumn}>Add New Column</button>
        <button onClick={addrow}>Add New Row</button>
        <button onClick={exportCSV}>Export CSV</button>
      </div>
      {table != undefined &&
        <Table table={table} settable={settable} />
      }
    </div>
  );
}

export default App;
