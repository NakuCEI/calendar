import { useEffect, useState } from 'react';
import { addHours, differenceInSeconds } from 'date-fns';
import Modal from 'react-modal';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
registerLocale('es', es);
import 'react-datepicker/dist/react-datepicker.css';
import { useCalendarStore, useUiStore } from '../hooks';
import './CalendarModal.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {

  //const [modalIsOpen, setIsOpen] = useState(true);
  const {isModalOpen, closeModal} = useUiStore();
  const [errors, setErrors] = useState([]);
  //const [startDate, setStartDate] = useState(new Date());

  const { activeEvent, startSavingEvent } = useCalendarStore();

  const [formValues, setFormValues] = useState({
    title: 'Título del evento', 
    description: 'Descripción del evento', 
    start: new Date(), 
    end: addHours(new Date(), 2)
  });

  useEffect(() => {
    if (activeEvent !== null) {
      setFormValues({ ...activeEvent });
    }
  }, [activeEvent]);
  

  /* const openModal = () => {
    setIsOpen(true);
  }; */

  /* const afterOpenModal = () => {
    console.log('afterOpenModal');
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }; */

  const handleCloseModal = () => {
    console.log('closeModal');
    closeModal();
  };

  const handleInputChange = ({target}) => {
    setFormValues({
      ...formValues, 
      [target.name]: target.value
    });
  };

  const handleDateChange = (date, field) => {
    setFormValues({
      ...formValues, 
      [field]: date
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setErrors([]);
    const difference = differenceInSeconds(formValues.end, formValues.start);
    if (isNaN(difference) || difference <= 0 || formValues.title.trim().length <= 0) {
      
      if (isNaN(difference) || difference <= 0) {
        setErrors((errors) => [...errors, 'La hora de finalización no puede ser menor que la hora de inicio.']);
      }
      if (formValues.title.trim().length <= 0) {
        setErrors((errors) => [...errors, 'Debes escribir el título.']);
      }

      return;
    }

    startSavingEvent(formValues);
    closeModal();
    
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        //onAfterOpen={afterOpenModal}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Example Modal" 
        className="modal border border-1 rounded-3" 
        overlayClassName="modal-fondo"   
      >
        <h2>Añadir evento</h2>
        <hr />
        <form onSubmit={handleSubmit} className="container" autoComplete="off">
          <div className="form-group mb-4">
            <label>Inicio</label>
            <DatePicker 
              locale="es" 
              selected={formValues.start} 
              className="form-control" 
              dateFormat={'Pp'} 
              showTimeSelect 
              timeCaption="Hora"
              onChange={(date) => handleDateChange(date, 'start')} 
            />
          </div>
          <div className="form-group mb-4">
            <label>Finalización</label>
            <DatePicker 
              minDate={formValues.start} 
              locale="es" 
              selected={formValues.end} 
              className="form-control" 
              dateFormat={'Pp'} 
              showTimeSelect 
              timeCaption="Hora"
              onChange={(date) => handleDateChange(date, 'end')} 
            />
          </div>
          <div className="form-group mb-4">
            <label>Título</label>
            <input  
              type="text" 
              id="title" 
              name="title" 
              placeholder="Título del evento" 
              className="form-control" 
              value={formValues.title} 
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-4">
            <label>Descripción</label>
            <textarea  
              rows="6" 
              id="description" 
              name="description" 
              placeholder="Descripción del evento" 
              className="form-control" 
              value={formValues.description} 
              onChange={handleInputChange}
            />
          </div>
          <div className="my-2">
            <ul>
              {
                errors.length > 0 ? 
                  (
                    errors.map(error => <li key={error}>{error}</li>)
                  )
                  : ('')
              }
            </ul>
          </div>
          <div className="d-flex justify-content-end mt-5">
            <button type="submit" className="btn btn-dark btn-sm px-2">Guardar</button>
          </div>
        </form>
      </Modal>
    </>
  )
};
