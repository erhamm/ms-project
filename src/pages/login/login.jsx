import React, { Component } from "react";
import { loginApi } from "../../api/login";

class Login extends Component {
  state = {
    loginInput: "",
    loginpassInput: "",
  };
  changeFun = (e) => {
    this.setState({
      loginInput: e.target.value,
    });
  };
  changepassFun = (e) => {
    this.setState({
      loginpassInput: e.target.value,
    });
  };
  //登录fun
  loginFun = (values) => {
    const { loginInput, loginpassInput } = this.state;
    console.log("用户名为:" + loginInput, "密码为:" + loginpassInput);
    loginApi(values).then((res) => {
      console.log(res);
      if (res.data === 0) {
      }
    });
  };

  render() {
    return (
      <div>
        <span>账号：</span>
        <form>
          <input
            type="text"
            placeholder="请输入账号"
            value={this.state.loginInput}
            onChange={this.changeFun}
            name="username"
          />
        </form>
        <br />
        <span>密码：</span>
        <form>
          <input
            type="password"
            placeholder="请输入密码"
            value={this.state.loginpassInput}
            onChange={this.changepassFun}
            name="password"
          />
        </form>
        <br />
        <button onClick={this.loginFun}>登录</button>
        <br />
        <button>找回密码</button>
        <button>注册</button>
      </div>
    );
  }
}

export default Login;
