import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import '../DaysWeek/DaysWeek.css'




function Tuesday(props: { propsTuesday: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {





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

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
        console.log(props.propsTuesday)
    }

   

    function closeModal() {
        setIsOpen(false);
    }

    return (


        <div className='divDays'>
            <button onClick={openModal} className='btnDays'>Terça-Feira</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
            >
                <h2 >Biceps</h2>
                <button onClick={closeModal}>X</button>
                <a>Rosca</a>
                <a>Supino</a>
                <a>Isso ai</a>

            </Modal>
        </div>

    )
}

export default Tuesday