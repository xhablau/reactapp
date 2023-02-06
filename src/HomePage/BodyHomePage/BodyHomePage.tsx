import React from 'react';
import Friday from './DaysWeek/Friday';
import Monday from './DaysWeek/Monday';
import Saturday from './DaysWeek/Saturday';
import Sunday from './DaysWeek/Sunday';
import Thurday from './DaysWeek/Thursday';
import Tuesday from './DaysWeek/Tuesday';
import Wednesday from './DaysWeek/Wednesday';



function BodyHomePage() {

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
            <Monday/>
            <Tuesday/>
            <Wednesday/>
            <Thurday/>
            <Friday/>
            <Saturday/>
            <Sunday/>
        </div>


    )
}

export default BodyHomePage