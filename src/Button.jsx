import { incrementCount, decrementCount, resetCount, setText } from "./redux/slice";
import { useDispatch } from "react-redux";

const Button = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => {
                dispatch(incrementCount());
            }}>+1</button>
            <button onClick={() => {
                dispatch(decrementCount());
            }}>-1</button>
            <button onClick={() => {
                dispatch(resetCount());
            }}>reset</button>
            <button onClick={() => {
                dispatch(setText('Hello Geeks!'));
            }}>change</button>
        </div>
    );
}

export default Button;
