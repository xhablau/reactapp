import React, { useEffect, useState } from 'react';
import Friday from './DaysWeek/Friday';
import Monday from './DaysWeek/Monday';
import Saturday from './DaysWeek/Saturday';
import Sunday from './DaysWeek/Sunday';
import Thurday from './DaysWeek/Thursday';
import Tuesday from './DaysWeek/Tuesday';
import Wednesday from './DaysWeek/Wednesday';
import '../BodyHomePage/BodyHomePage.css'
import { getDataFromFirestore } from '../../FirestoreApi/FirestoreApi';




function BodyHomePage() {

    // const photoUser = sessionStorage.getItem('photoUser');
    // const emailUser = sessionStorage.getItem('emailUser');
    // const uidUser = sessionStorage.getItem('uidUser');
    // const displayName = sessionStorage.getItem('displayName');

    // console.log("uidUser", uidUser)
    // console.log("emailUser", emailUser)
    // console.log("photoUser", photoUser)
    // console.log("displayName", displayName)

    async function main() {
        const data = await getDataFromFirestore();
        return data
    }
    
 
    const [monday, setMonday] = useState([]);
    const [tuesday, setTuesday] = useState([]);
    const [wednesday, setWednesday] = useState([]);
    const [thurday, setThurday] = useState([]);
    const [friday, setFriday] = useState([]);
    const [saturday, setSaturday] = useState([]);
    const [sunday, setSunday] = useState([]);
    const [diet, setDiet] = useState([]);
 
 
    
    useEffect(() => {
        const getAllDays = async () => {
          try {
            let response = await main();            
            setMonday(response.monday);
            setTuesday(response.tuesday);
            setWednesday(response.wednesday);
            setThurday(response.thurday);
            setFriday(response.friday);
            setSaturday(response.saturday);
            setSunday(response.sunday);
            setDiet(response.diet);
      
          } catch (error) {
            console.log(error);
          }
        };
      
        // call your async function
        getAllDays();
      }, []);
      

    return (
        <div id='principalBodyHomePage'>
            <Monday propsMonday = {monday}/>
            <Tuesday propsTuesday = {tuesday}/>
            <Wednesday propsWednesday = {wednesday}/>
            <Thurday propsThurday = {thurday}/>
            <Friday propsFriday = {friday}/>
            <Saturday propsSaturday = {saturday}/>
            <Sunday propsSunday = {sunday}/>
        </div>


    )
}

export default BodyHomePage