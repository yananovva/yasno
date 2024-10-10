import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "redux";
import {actions} from "@/lib/favorites/favorites.slice";
import * as userActions from '@/lib/user/user.actions';


const rootActions = {
    ...actions,
    ...userActions,
}
export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() =>
        bindActionCreators(rootActions, dispatch), [dispatch]);

}
