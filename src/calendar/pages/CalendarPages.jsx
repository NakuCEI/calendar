import { useState } from "react";
import { Navbar, EventBox, CalendarModal, BtnAddEvent, BtnDeleteEvent } from "../components";

import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
//import format from 'date-fns/format';
//import parse from 'date-fns/parse';
//import startOfWeek from 'date-fns/startOfWeek';
//import getDay from 'date-fns/getDay';
import esEs from 'date-fns/locale/es';
import { format, parse, startOfWeek, getDay } from "date-fns";
import { translateMessages } from "../helpers/translateMessages";
import { useUiStore, useCalendarStore } from "../hooks";

const locales = {
    'es': esEs,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const localStorageLastViewKey = 'lastView';
const defaultLastView = 'week';

export const CalendarPages = () => {

    const [lastView, setLastView] = useState(localStorage.getItem(localStorageLastViewKey) || defaultLastView);
    const { events, setActiveEvent } = useCalendarStore();
    const {openModal} = useUiStore();
    
    const eventStyleGetter = (ev, start, end, isSelected) => {
        /* console.log('eventStyleGetter - ev: ', ev);
        console.log('eventStyleGetter - start: ', start);
        console.log('eventStyleGetter - end: ', end);
        console.log('eventStyleGetter - isSelected: ', isSelected); */

        const style = {
            backgroundColor: 'green'
        };

        return style;
    };
    
    const handleDoubleClick = (ev) => {
        console.log('handleDoubleClick - ev: ', ev);
        openModal();
    };

    const handleSelectEvent = (ev) => {
        console.log('handleSelectEvent - ev: ', ev);
        setActiveEvent(ev);
    };

    const onViewChange = (ev) => {
        console.log('onViewChange - ev: ', ev);
        localStorage.setItem(localStorageLastViewKey, ev);
    };

    return (
        <>
            <Navbar />
            <div className="container my-4">
                <BtnAddEvent />
                <Calendar 
                    culture="es"
                    localizer={localizer}
                    events={events} 
                    defaultView={lastView}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }} 
                    messages={translateMessages()} 
                    onDoubleClickEvent={handleDoubleClick} 
                    onSelectEvent={handleSelectEvent} 
                    onView={onViewChange} 
                    eventPropGetter={eventStyleGetter} 
                    components={
                        {
                            event: EventBox
                        }
                    }
                />
                <BtnDeleteEvent />
                <CalendarModal />
            </div>
        </>
    );
};
