import '../HeaderHomePage/HeaderHomePage.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


function HeaderHomePage() {

    const photoUser = JSON.parse(sessionStorage.getItem('photoUser') || '{}');
    const emailUser = JSON.parse(sessionStorage.getItem('emailUser') || '{}');
    const uidUser = JSON.parse(sessionStorage.getItem('uidUser') || '{}');
    const displayName = JSON.parse(sessionStorage.getItem('displayName') || '{}');

    // photoUser.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    // let myVariable: string | undefined;
    // const value: string | null = ...;
    // myVariable = value || undefined;

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


        <div id="headerHomePagePrincipal">
            <div id='tableHeaderHomePage'>
                <a className='tableHCQP'>{displayName}</a>
                <img src={photoUser} id='photoUser'></img>
            </div>
           
            <div>
            <button onClick={openModal}>Open Modal</button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                     style={customStyles}
                    contentLabel="Example Modal"
                    id='teste'
                >
                    <h2 >Hello</h2>
                    <button onClick={closeModal}>close</button>
                    <div>I am a modal</div>
                    <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                    </form>
                </Modal>
            </div>
        </div>






    )
}

export default HeaderHomePage