
export const EventBox = ({event}) => {

    //console.log('event: ', event);

    return (
        <>
            <p>{event.title}</p>
            <small>{event.user.name}</small>
        </>
    );
};
