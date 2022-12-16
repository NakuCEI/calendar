import { useDispatch, useSelector } from "react-redux";
import { onSetActiveEvent, onAddEvent, onEditEvent, onDeleteEvent } from '../../store/calendar/calendarSlice';

export const useCalendarStore = () => {

    const { events, activeEvent } = useSelector((state) => state.calendar);
    const dispatch = useDispatch();

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    };

    const startSavingEvent = async (calendarEvent) => {
        // TODO - Solicitud a la API
        if (calendarEvent._id) {
            // actualizar
            dispatch(onEditEvent(calendarEvent));
        } else {
            // crear
            dispatch(onAddEvent({
                ...calendarEvent, 
                _id: new Date().getTime()
            }));
        };
    };

    const startDeleteEvent = async () => {
        dispatch(onDeleteEvent());
    };

    return {
        events, 
        activeEvent, 
        setActiveEvent, 
        startSavingEvent, 
        startDeleteEvent, 
        hasActiveEvent: !!activeEvent 
    };
};
