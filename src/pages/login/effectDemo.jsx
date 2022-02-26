// import React, { Component } from "react";

// export default class effectDemo extends Component {
//   state = {
//     count: 0,
//   };
//   componentDidMount() {
//     setInterval(() => {
//       this.setState((state) => ({
//         count: state.count + 1,
//       }));
//     }, 500);
//   }
//   render() {
//     return (
//       <div>
//         <span>当前求和：{this.state.count}</span>
//         <button>+1</button>
//       </div>
//     );
//   }
// }

// import React, { Component } from "react";

// class Effectdemo extends Component {
//   state = {
//     count: 0,
//   };
//   componentDidMount() {
//     setInterval(() => {
//       this.setState((state) => ({
//         count: state.count + 1,
//       }));
//     }, 1000);
//   }
//   render() {
//     return (
//       <div>
//         <span>{this.state.count}</span>
//         <button>+1</button>
//       </div>
//     );
//   }
// }

// export default Effectdemo;

// import React from "react";
// import { useState, useEffect } from "react";

// const Effectdemo = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     // setCount((count) => ({
//     //   count: count + 1,
//     // }));
//     console.log(1);
//   },[]);
//   function add() {
//     setCount((count) => count + 1);
//   }
//   return (
//     <div>
//       <span>{count}</span>
//       <button onClick={add}>+1</button>
//     </div>
//   );
// };

// export default Effectdemo;

import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
const Effectdemo = () => {
  const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     console.log(1);
  //   }, []);//[]模拟componentDidMount
  useEffect(() => {
    //此函数返回的模拟willunmount
    let timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 500);
    return () => {
      clearInterval(timer); //模拟willunmount
    };
  });
  function add() {
    setCount((count) => count + 1);
  }
  function remove() {
    ReactDOM.unmountComponentAtNode(document.querySelector("#root"));
  }
  return (
    <div>
      <span>{count}</span>
      <button onClick={add}>+1</button>
      <button onClick={remove}>销毁组件</button>
    </div>
  );
};

export default Effectdemo;
