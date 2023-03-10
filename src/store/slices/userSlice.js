import {createSlice} from '@reduxjs/toolkit';
import {userInitialState} from '../initialState'

const initialState = userInitialState;

const channelSlice = createSlice({
    name: 'users',
    initialState,
})


export default channelSlice.reducer;