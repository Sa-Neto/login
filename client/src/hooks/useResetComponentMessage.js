import { resetMessage } from '../slice/authSlice';

export const useResetMessage = (dispatch) => {
    return () => {
        setTimeout(() => {
            dispatch(() => {
                dispatch(resetMessage())
            },2000)
        })
    }
}