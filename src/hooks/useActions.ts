import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "redux";
import {actions} from "@/lib/favorites/favorites.slice";


const rootActions = {
    ...actions,
}
export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() =>
        bindActionCreators(rootActions, dispatch), [dispatch])
}