import React, { useEffect, useState } from 'react';
import { Stripe } from 'stripe';
import express from 'express';
import HeaderHomePage from '../HomePage/HeaderHomePage/HeaderHomePage';
import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getDataFromFirestore } from '../FirestoreApi/FirestoreApi';

function Thanks() {
  const photoUser = JSON.parse(sessionStorage.getItem('photoUser') || '{}');
  const emailUser = JSON.parse(sessionStorage.getItem('emailUser') || '{}');
  const uidUser = JSON.parse(sessionStorage.getItem('uidUser') || '{}');
  const displayName = JSON.parse(sessionStorage.getItem('displayName') || '{}');

  useEffect(() => {
    const getAllDays = async () => {
      try {
        const response = await getFirestore();
        const citiesRef = collection(response, "User");

        await setDoc(doc(citiesRef, uidUser), {
          diet: [{
            Breakfast: [],
            Lunch: [],
            AfternoonSnack: [],
            Dinner: [],
            Supper: []
          }],
          friday: [],
          monday: [],
          saturday: [],
          sunday: [],
          thursday: [],
          tuesday: [],
          wednesday: [],
          isPremium: true,
          
        });
      } catch (error) {
        console.error(error);
      }
    };

    getAllDays();
  }, []);




  return (
    <div>
      <h1>Agradecimento</h1>
      <p>Obrigado, {displayName}, pelo seu pagamento!</p>
      <p>Seu pedido será processado e enviado em breve.</p>
    </div>


  );
}

export default Thanks;
