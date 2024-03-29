import React, { useEffect, useState } from 'react';
import Friday from './DaysWeek/Friday';
import Monday from './DaysWeek/Monday';
import Saturday from './DaysWeek/Saturday';
import Sunday from './DaysWeek/Sunday';
import Thursday from './DaysWeek/Thursday';
import Tuesday from './DaysWeek/Tuesday';
import Wednesday from './DaysWeek/Wednesday';
import '../BodyHomePage/BodyHomePage.css';
import { getDataFromFirestore, getDateUserFromFirestore } from '../../FirestoreApi/FirestoreApi';
import Diet from './DaysWeek/Diet';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { configApi } from '../../config/config';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const startNanoseconds: any[] = [];
export const startSeconds: any[] = [];
export const finalNanoseconds: any[] = [];
export const finalSeconds: any[] = [];

function BodyHomePage() {
  const [monday, setMonday] = useState([]);
  const [tuesday, setTuesday] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [thursday, setThursday] = useState([]);
  const [friday, setFriday] = useState([]);
  const [saturday, setSaturday] = useState([]);
  const [sunday, setSunday] = useState([]);
  const [diet, setDiet] = useState([]);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getAllDays();
        getDateUser();
      } else {
        window.location.href = "/login";
      }
    });

    return () => unsubscribe();
  }, []);

  const getAllDays = async () => {
    try {
      const response = await getDataFromFirestore();
      setMonday(response.monday);
      setTuesday(response.tuesday);
      setWednesday(response.wednesday);
      setThursday(response.thursday);
      setFriday(response.friday);
      setSaturday(response.saturday);
      setSunday(response.sunday);
      setDiet(response.diet);
      sessionStorage.setItem('isMensal', JSON.stringify(response.isMensal));
      sessionStorage.setItem('isTrimestral', JSON.stringify(response.isTrimestral));
      sessionStorage.setItem('isSemestral', JSON.stringify(response.isSemestral));
      startSeconds.push(response.startDate.seconds)
      startNanoseconds.push(response.startDate.nanoseconds)
      finalSeconds.push(response.finalDate.seconds)
      finalNanoseconds.push(response.finalDate.nanoseconds)

    } catch (error) {
      console.error(error);
    }
  };

  const getDateUser = async () => {
    try {
      const response = await getDateUserFromFirestore();
    
      sessionStorage.setItem('isMensal', JSON.stringify(response.isMensal));
      sessionStorage.setItem('isTrimestral', JSON.stringify(response.isTrimestral));
      sessionStorage.setItem('isSemestral', JSON.stringify(response.isSemestral));
      startSeconds.push(response.startDate.seconds)
      startNanoseconds.push(response.startDate.nanoseconds)
      finalSeconds.push(response.finalDate.seconds)
      finalNanoseconds.push(response.finalDate.nanoseconds)

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="principalBodyHomePage">
      <Monday propsMonday={monday} />
      <Tuesday propsTuesday={tuesday} />
      <Wednesday propsWednesday={wednesday} />
      <Thursday propsThursday={thursday} />
      <Friday propsFriday={friday} />
      <Saturday propsSaturday={saturday} />
      <Sunday propsSunday={sunday} />
      <Diet propsDiet={diet} />
    </div>
  );
}

export const BodyHomePageData = {

  BodyHomePage: BodyHomePage
};
export default BodyHomePage;
