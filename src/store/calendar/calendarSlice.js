import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tmpEvents = [
    {
        _id: new Date().getTime(), 
        title: 'Título 1 desde tmpEvents', 
        start: new Date(), 
        end: addHours(new Date(), 2), 
        description: 'Descripción 1 desde tmpEvents', 
        user: {
            _id: '1234', 
            name: 'Usuario1'
        }
    }/* ,
    {
        _id: new Date().getTime(), 
        title: 'Título 2 desde tmpEvents', 
        start: new Date(), 
        end: addHours(new Date(), 3), 
        description: 'Descripción 2 desde tmpEvents', 
        user: {
            _id: '5678', 
            name: 'Usuario2'
        }
    } */
];

export const calendarSlice = createSlice({
    name: 'calendar', 
    initialState: {
        events: tmpEvents, 
        activeEvent: null
    },
    reducers: {
        onSetActiveEvent: (state, {payload}) => {
            state.activeEvent = payload;
        }, 
        onAddEvent: (state, {payload}) => {
            state.events.push(payload);
            state.activeEvent = null;
        }, 
        onEditEvent: (state, {payload}) => {
            state.events = state.events.map(item => {
                if (item._id === payload._id) {
                    return payload;
                }
                return item;
            });
            state.activeEvent = null;
        }, 
        onDeleteEvent: (state) => {
            if (state.activeEvent) {
                state.events = state.events.filter(item => item._id !== state.activeEvent._id);
                state.activeEvent = null;
            }
        }
    }
});

export const { onSetActiveEvent, onAddEvent, onEditEvent, onDeleteEvent } = calendarSlice.actions;
