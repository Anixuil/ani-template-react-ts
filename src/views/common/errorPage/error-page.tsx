/*
 * @Author: Anixuil
 * @Date: 2024-10-27 13:28:30
 * @LastEditors: Anixuil
 * @LastEditTime: 2024-10-27 14:58:22
 * @Description: 通用错误页面
 */
import { useRouteError } from "react-router-dom";
import "./error-page.scss";

interface ErrorInterface {
  statusText?: string,
  message?: string
}

export default function ErrorPage() {
  const error = useRouteError() as ErrorInterface;
  console.error(error.message);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
