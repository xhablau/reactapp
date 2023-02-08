import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import '../DaysWeek/DaysWeek.css'



function Monday(props: { propsMonday: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {


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
        console.log(props.propsMonday)
        setIsOpen(true);
    }

   

    function closeModal() {
        setIsOpen(false);
        console.log(props.propsMonday)
    }
    
    return (


        <div className='divDays'>
            <button onClick={openModal} className='btnDays'>Segunda-Feira</button>
            <Modal
                isOpen={modalIsOpen}                
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
            >
                <h2 >Biceps</h2>
                <button onClick={closeModal} >X</button>
                <a>Rosca {props.propsMonday}</a>
                <a>Supino</a>
                <a>Isso ai</a>

            </Modal>
        </div>

    )
}

export default Monday