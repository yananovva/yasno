import {useActions} from "@/hooks/useActions";
import {useTypedSelector} from "@/hooks/useTypedSelector";

export default function User() {
    const {isLoading, error, user} = useTypedSelector(state =>
        state.user);

    const {getUserById} = useActions();

    return (
        <div>
            <button onClick={() => getUserById(1)}>
                Получить пользователя
            </button>
            {isLoading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : user?.name ? (
                <h2>Пользователь: {user.name}</h2>
            ) : (
                <h1>Пользователь не найден</h1>
            )}
        </div>
    );
}