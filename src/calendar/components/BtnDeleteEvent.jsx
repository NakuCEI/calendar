import { useCalendarStore, useUiStore } from "../hooks";

export const BtnDeleteEvent = () => {

    const { startDeleteEvent, hasActiveEvent } = useCalendarStore();
    const {isModalOpen} = useUiStore();
    console.log('isModalOpen: ', isModalOpen);

    const handleDeleteEvent = () => {
        startDeleteEvent();
    };

    return (
        <div className="d-flex justify-content-end align-items-center my-4">
            <button 
                disabled={!hasActiveEvent || isModalOpen}
                className="btn btn-danger" 
                onClick={handleDeleteEvent}
            >Eliminar evento</button>
        </div>
    );
};
