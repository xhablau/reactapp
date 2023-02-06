import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';



function Monday() {

    const photoUser = sessionStorage.getItem('photoUser');
    const emailUser = sessionStorage.getItem('emailUser');
    const uidUser = sessionStorage.getItem('uidUser');
    const displayName = sessionStorage.getItem('displayName');

    console.log("uidUser", uidUser)
    console.log("emailUser", emailUser)
    console.log("photoUser", photoUser)
    console.log("displayName", displayName)


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
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        //subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (


        <div>
            <div>
                <button onClick={openModal}>Segunda-Feira</button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                >
                    <h2 >Biceps</h2>
                    <button onClick={closeModal}>X</button>
                    <a>Rosca</a>
                    <a>Supino</a>
                    <a>Isso ai</a>
                    
                </Modal>
            </div>
        </div>

    )
}

export default Monday