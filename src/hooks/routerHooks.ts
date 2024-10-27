/*
 * @Author: Anixuil
 * @Date: 2024-10-27 15:13:24
 * @LastEditors: Anixuil
 * @LastEditTime: 2024-10-27 15:14:03
 * @Description: 路由hooks
 */
import { useNavigate, useSearchParams, useParams } from "react-router-dom";

export default function useRouterHooks() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const params = useParams();

    /**
     * @description: jump to the specified page
     * @param {*} path string
     * @param {*} replace default false | whether to replace the current page
     * @return {*}
     */
    function goto(path: string, replace = false) {
        navigate(path, { replace });
    }

    function getSearchParams() {
        return { searchParams, setSearchParams };
    }

    function getParams() {
        return params;
    }
    return {
        goto,
        getSearchParams,
        getParams,
    };
}
