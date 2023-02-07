import React from 'react';
import Friday from './DaysWeek/Friday';
import Monday from './DaysWeek/Monday';
import Saturday from './DaysWeek/Saturday';
import Sunday from './DaysWeek/Sunday';
import Thurday from './DaysWeek/Thursday';
import Tuesday from './DaysWeek/Tuesday';
import Wednesday from './DaysWeek/Wednesday';
import '../BodyHomePage/BodyHomePage.css'




function BodyHomePage() {

    // const photoUser = sessionStorage.getItem('photoUser');
    // const emailUser = sessionStorage.getItem('emailUser');
    // const uidUser = sessionStorage.getItem('uidUser');
    // const displayName = sessionStorage.getItem('displayName');

    // console.log("uidUser", uidUser)
    // console.log("emailUser", emailUser)
    // console.log("photoUser", photoUser)
    // console.log("displayName", displayName)

    return (
        <div id='principalBodyHomePage'>
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