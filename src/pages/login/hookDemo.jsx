// import React, { Component } from "react";

// class Hookdemo extends Component {
//   state = {
//     count: 0,
//   };
//   add = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <span>{this.state.count}</span>
//         <button onClick={this.add}>+1</button>
//       </div>
//     );
//   }
// }

// export default Hookdemo;
// import React from "react";
// import { useState } from "react";

// const Hookdemo = () => {
//   const [count, setCount] = useState(0);
//   function add() {
//     // setCount((count) => count + 1);
//     setCount(count + 1);
//   }
//   return (
//     <div>
//       <span>{count}</span>
//       <button onClick={add}>+1</button>
//     </div>
//   );
// };

// export default Hookdemo;

import React from "react";
import { useState } from "react";

const Hookdemo = () => {
  const [count, setCount] = useState(0);
  function add() {
    // setCount(count + 1);
    setCount((count) => count + 1);
  }
  return (
    <div>
      <span>{count}</span>
      <br />
      <button onClick={add}>+1</button>
    </div>
  );
};

export default Hookdemo;
