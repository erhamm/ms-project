//类式组件：
// import React, { Component } from "react";

// class RefDemo extends Component {
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
//   myRef = React.createRef();
//   show = () => {
//     console.log(this.myRef.current.value);
//   };
//   render() {
//     return (
//       <div>
//         <span>{this.state.count}</span>
//         <button>+1</button>
//         <input type="text" ref={this.myRef} />
//         <button onClick={this.show}>提示输入语句</button>
//       </div>
//     );
//   }
// }

// export default RefDemo;

//函数式组件：
import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect, useRef } from "react";
const RefDemo = () => {
  const [count, setCount] = useState(0);
  const myRef = useRef();
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
  function show() {
    console.log(myRef.current.value);
  }

  return (
    <div>
      <span>{count}</span>
      <button onClick={add}>+1</button>
      <button onClick={remove}>销毁组件</button>
      <input type="text" ref={myRef} />
      <button onClick={show}>提示输入数据</button>
    </div>
  );
};

export default RefDemo;
