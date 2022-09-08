import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    objectId: 0,
    apiData: `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`

}



export const dataSlice = createSlice({
    name: '',
    initialState,
    reducers: {

        //set API data to state
        setAPIData(state, objectId) {
            state.apiData = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`
        },
        //increment id by one
        increment(state) {
            state.objectId++
        },
        //decrement id by one
        decrement(state) {
            state.objectId--
        },
        //enter custom id
        customId(state) {
            state.objectId = ''
        },
        //reset state back to initi values
        resetting(state) {
            return state
        }
    }
})