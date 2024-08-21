import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        "id": "category1",
        "name": "Category 1",
        "widgets": [
            // {
            //     "id": "widget3",
            //     "name": "Widget 2",
            //     "flag": true,
            //     "text": "This is some random text for Widget 3."
            // },

        ]
    },
    {
        "id": "category2",
        "name": "Category 2",
        "widgets": [
            // {
            //     "id": "widget3",
            //     "name": "Widget 2",
            //     "flag": true,
            //     "text": "This is some random text for Widget 3."
            // },

        ]
    },
    {
        "id": "category3",
        "name": "Category 3",
        "widgets": [
            // {
            //     "id": "widget3",
            //     "name": "Widget 2",
            //     "flag": true,
            //     "text": "This is some random text for Widget 3."
            // },

        ]
    },
    {
        "id": "category4",
        "name": "Category 4",
        "widgets": [
            // {
            //     "id": "widget3",
            //     "name": "Widget 2",
            //     "flag": true,
            //     "text": "This is some random text for Widget 3."
            // },

        ]
    },
    

]

export const widgetSlice = createSlice({
    name: 'widgetmanager',
    initialState,
    reducers: {
        widgetManager: (state, action) => action.payload
    }
})

export const { widgetManager } = widgetSlice.actions

export default widgetSlice.reducer