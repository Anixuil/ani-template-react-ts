/*
 * @Author: Anixuil
 * @Date: 2024-10-27 13:47:01
 * @LastEditors: Anixuil
 * @LastEditTime: 2024-11-03 17:47:25
 * @Description: 入口页面
 */
import useRouterHooks from "@/hooks/routerHooks";
import "./index.scss";
import { Button, notification } from "antd";
import { Outlet } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, push, del } from "@/store/modules/counter";
import { test } from "@/api/modules/test";
import { AxiosResponse } from "axios";
export default function IndexPage() {
  const { goto } = useRouterHooks();
  const nodeRef = React.useRef(null);

  const [data, setData] = useState({
    active: location.pathname,
  });
  const handleClick = (path: string) => {
    setData({
      active: path,
    });
    goto(path);
  };

  const dispatch = useDispatch();
  const { count, list } = useSelector((state: { counter: { count: number; list: [] } }) => state.counter);

  const [api, contextHolder] = notification.useNotification();

  const handleClickTestRequest = async () => {
    try {
      const res: void | AxiosResponse = await test();
      api.success({
        message: "测试请求成功",
        description: `${res}`,
      });
    } catch (err) {
      api.error({
        message: "测试请求失败",
        description: `${err}`,
      });
    }
  };
  return (
    <div id="ani-root">
      {contextHolder}
      <div className="button-box">
        <Button
          className={["btn-item", data.active === "/welcome" ? "active" : ""].join(" ")}
          onClick={() => handleClick("/welcome")}
        >
          首页
        </Button>
        <Button
          className={["btn-item", data.active === "/about" ? "active" : ""].join(" ")}
          onClick={() => handleClick("/about")}
        >
          关于
        </Button>
        <Button type="primary" onClick={() => handleClickTestRequest()}>
          请求测试
        </Button>
      </div>
      <SwitchTransition mode="out-in">
        <CSSTransition classNames="router-transition" timeout={300} key={location.pathname} nodeRef={nodeRef}>
          <div ref={nodeRef}>
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
      <p>counter: {count}</p>
      <p>list: {list.join(",")}</p>
      <div className="btn-box">
        <Button onClick={() => dispatch(increment(1))}>+</Button>
        <Button onClick={() => dispatch(decrement(1))}>-</Button>
        <Button onClick={() => dispatch(push(Math.floor(Math.random() * 100)))}>push</Button>
        <Button onClick={() => dispatch(del(list.length - 1))}>del</Button>
      </div>
    </div>
  );
}
