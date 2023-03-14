import React, { useEffect, useState } from 'react';
import { Stripe } from 'stripe';
import express from 'express';
import HeaderHomePage from '../HomePage/HeaderHomePage/HeaderHomePage';
import { getFirestore, Timestamp } from "firebase/firestore";
import { collection, doc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getDataFromFirestore } from '../FirestoreApi/FirestoreApi';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function ThanksSemestral() {
    const uidUser = JSON.parse(sessionStorage.getItem('uidUser') || '{}');
    const displayName = JSON.parse(sessionStorage.getItem('displayName') || '{}');

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                getAllDays();
               
            } else {
                window.location.href = "/login";
            }
        });

        return () => unsubscribe();
    }, []);

    const getAllDays = async () => {
        try {
            const response = await getFirestore();
            const citiesRef = collection(response, "DateUser");
            const date = new Date();
            date.setMonth(date.getMonth() + 6);
            const finalDate = Timestamp.fromDate(date);

            await setDoc(doc(citiesRef, uidUser), {
              
                isTrimestral: false,
                isMensal: false,
                isSemestral: true,
                startDate: Timestamp.fromDate(new Date()),
                finalDate: finalDate

            });
        } catch (error) {
            console.error(error);
        }
    };

  




    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h1>Agradecimento</h1>
            <p>Obrigado, {displayName}, pelo seu pagamento semestral! </p>
            <p>Pedimos que peencha esse esse formulario, para nós te conhecermos melhor e entregar um treino com dieta mais especifico ao seu dia a dia  </p>
            <p>Seu treino e dieta estará disponivel em até 3 dias uteis</p>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScUFkCD8-wbScZL8-OXhL9XCIXz8gKYZjuiIp9d8daM-vemdA/viewform?embedded=true" width="500" height="2401"   >Carregando…</iframe>
            <p>ou pelo link</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScUFkCD8-wbScZL8-OXhL9XCIXz8gKYZjuiIp9d8daM-vemdA/viewform?usp=sf_link" target="_blank">https://docs.google.com/forms/d/e/1FAIpQLScUFkCD8-wbScZL8-OXhL9XCIXz8gKYZjuiIp9d8daM-vemdA/viewform?usp=sf_link</a>
            <a href='/HomePage' style={{ paddingTop: '10%', paddingBottom: '2%' }}>Clique aqui para volta a tela inicial</a>
        </div>


    );
}

export default ThanksSemestral;
