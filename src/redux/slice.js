import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    "categories": [
        {
            "id": "cspm-executive-dashboard",
            "name": "CSPM Executive Dashboard",
            "widgets": [
                {
                    "id": "widget1",
                    "name": "Widget 1",
                    "text": "This is some random text for Widget 1."
                },

            ]
        },
        {
            "id": "category2",
            "name": "Category 2",
            "widgets": [
                {
                    "id": "widget3",
                    "name": "Widget 3",
                    "text": "This is some random text for Widget 3."
                },

            ]
        },
        {
            "id": "category3",
            "name": "Category 2",
            "widgets": [
                {
                    "id": "widget3",
                    "name": "Widget 3",
                    "text": "This is some random text for Widget 3."
                }
            ]
        },
        {
            "id": "category4",
            "name": "Category 2",
            "widgets": [
                {
                    "id": "widget3",
                    "name": "Widget 3",
                    "text": "This is some random text for Widget 3."
                }
            ]
        },
    ]
}

export const widgetSlice = createSlice({
    name: 'widgetmanager',
    initialState,
    reducers: {
        widgetManager: (state, action) => {
            state = action.payload
            // console.log(action.payload);
        }
    }
})

export const { widgetManager } = widgetSlice.actions

export default widgetSlice.reducer