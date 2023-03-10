import {createSlice} from '@reduxjs/toolkit';
import {channelInitialState} from '../initialState'

const initialState = channelInitialState;

const channelSlice = createSlice({
    name: 'channels',
    initialState,
})


export default channelSlice.reducer;