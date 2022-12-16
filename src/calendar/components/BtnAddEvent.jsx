import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../hooks";

export const BtnAddEvent = () => {

    const { setActiveEvent } = useCalendarStore();
    const { openModal } = useUiStore();

    const handleNewEvent = () => {
        setActiveEvent({
            title: '', 
            description: '', 
            start: new Date(), 
            end: addHours(new Date(), 2), 
            user: {
                _id: '5678', 
                name: 'Usuario2'
            }
        });

        openModal();
    };

    return (
        <div className="d-grid my-4">
            <button 
                className="btn btn-dark" 
                onClick={handleNewEvent}
            >Crear nuevo evento</button>
        </div>
    );
};
