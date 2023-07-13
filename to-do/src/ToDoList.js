import React, { useState } from "react";

export const ToDoList = () => {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  function addActivity() {
    // setlistData([...listData, activity]);
    // console.log(listData);
    // below is console output for above code

    //you can see that when you click first time it will give empty array and when you click 2nd time then it will give React and when you add JavaScript by cliking the add button at first it give ['Reacr','React'] and when you again click add button then it gives  ['React', 'React', 'JavaScript'] . This happens because our state in react is asynchronus that means our data will definetly going to add in our list but it takes some time and then its visible to you which also means that its not working syncronesly.

    //     []length: 0[[Prototype]]: Array(0)
    // ToDoList.js:8 ['React']0: "React"length: 1[[Prototype]]: Array(0)
    // ToDoList.js:8 (2) ['React', 'React']
    // ToDoList.js:8 (3) ['React', 'React', 'JavaScript']

    //This is ok but it will not look good

    setlistData((listData) => {
      const updatedList = [...listData, activity];
      // console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  }

  function removeActivity(i) {
    const updatedListData = listData.filter((elements, id) => {
      return i != id;
    });
    setlistData(updatedListData);
  }

  function removeAll() {
    setlistData([]);
  }
  return (
    <>
      <div className="container">
        <div className="header">TODO List</div>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        ></input>
        <button onClick={addActivity}>Add</button>
        <p className="List-heading">Here is your List:{")"}</p>
        {listData != [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="listData">{data}</div>
                  <div className="btn-position">
                    <button onClick={() => removeActivity(i)}>Remove</button>
                  </div>
                </p>
              </>
            );
          })}
        {listData.length >= 1 && (
          <button onClick={removeAll}>Remove All</button>
        )}
      </div>
    </>
  );
};
