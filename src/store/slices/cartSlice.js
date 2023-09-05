import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
    },

    reducers: {
        // add product function 
        addCart: (state, action) => {
            const found = state.data.find(i => i.id === action.payload.id)
            if (found) {
                toast.warning('This product is already available !', {
                    position: "bottom-right",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                state.data.push(action.payload)
                toast.success('Succsefully added!', {
                    position: "bottom-right",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        },

        // delete product function 
        deleteCart: (state, action) => {
            state.data = state.data.filter(i => action.payload.id !== i.id)
            toast.success('Succsefully deleted!', {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        },
    },
})

export const { addCart, deleteCart } = cartSlice.actions

export default cartSlice.reducer