import React, { useEffect, useState } from 'react';
import { Stripe } from 'stripe';
import express from 'express';
import HeaderHomePage from '../HomePage/HeaderHomePage/HeaderHomePage';

function Planos() {
  const photoUser = JSON.parse(sessionStorage.getItem('photoUser') || '{}');
  const emailUser = JSON.parse(sessionStorage.getItem('emailUser') || '{}');
  const uidUser = JSON.parse(sessionStorage.getItem('uidUser') || '{}');
  const displayName = JSON.parse(sessionStorage.getItem('displayName') || '{}');

  async function mensal() {
    const stripe = new Stripe('sk_test_51MbS1hGQkyUss98h7e3Ga3NhuhcSpp2t4XdSYOL9w3EeViI1bxO0ukS5Pfuc7JR6xmLX6Ut6tYChHTeB9Asuw49c00GJ6vQ4E7', {
      apiVersion: '2022-11-15',
    });

    const YOUR_DOMAIN = 'http://localhost:5173';
    try {
      const session = await stripe.checkout.sessions.create({
        billing_address_collection: 'auto',
        line_items: [
          {
            price: "price_1Mc6V0GQkyUss98h26MeKxfP",
            // For metered billing, do not pass quantity
            quantity: 1,
          },
        ],
        mode: 'subscription',
        success_url: `${YOUR_DOMAIN}/welcomeMesal`,
        cancel_url: `${YOUR_DOMAIN}?canceled=true`,
      });
      window.location.assign(session?.url || '');
    } catch (error) {
      console.error(error);
    }

  }

  async function trimestral() {
    const stripe = new Stripe('sk_test_51MbS1hGQkyUss98h7e3Ga3NhuhcSpp2t4XdSYOL9w3EeViI1bxO0ukS5Pfuc7JR6xmLX6Ut6tYChHTeB9Asuw49c00GJ6vQ4E7', {
      apiVersion: '2022-11-15',
    });

    const YOUR_DOMAIN = 'http://localhost:5173';


    try {
      const session = await stripe.checkout.sessions.create({

        billing_address_collection: 'auto',
        line_items: [
          {
            price: "price_1Mc6ViGQkyUss98h5YFLu57d",
            // For metered billing, do not pass quantity
            quantity: 1,

          },
        ],
        mode: 'subscription',
        success_url: `${YOUR_DOMAIN}/welcomeTrimestral`,
        cancel_url: `${YOUR_DOMAIN}?canceled=true`,
      });
      window.location.assign(session?.url || '');
    } catch (error) {
      console.error(error);
    }
  }

  async function semestral() {
    const stripe = new Stripe('sk_test_51MbS1hGQkyUss98h7e3Ga3NhuhcSpp2t4XdSYOL9w3EeViI1bxO0ukS5Pfuc7JR6xmLX6Ut6tYChHTeB9Asuw49c00GJ6vQ4E7', {
      apiVersion: '2022-11-15',
    });

    const YOUR_DOMAIN = 'http://localhost:5173';


    try {
      const session = await stripe.checkout.sessions.create({

        billing_address_collection: 'auto',
        line_items: [
          {
            price: "price_1Mc6WPGQkyUss98hL7bWGbV2",
            // For metered billing, do not pass quantity
            quantity: 1,

          },
        ],
        mode: 'subscription',
        success_url: `${YOUR_DOMAIN}/welcomeSemestral`,
        cancel_url: `${YOUR_DOMAIN}?canceled=true`,
      });
      window.location.assign(session?.url || '');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <HeaderHomePage
        photoUser={photoUser}
        emailUser={emailUser}
        uidUser={uidUser}
        displayName={displayName} />
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Mensal</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">R$21,90 <small className="text-muted">/ mês</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Treino exclusivo</li>
              <li>Dieta exclusivo</li>
              <li>Suporte por Whatsapp</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-outline-primary" onClick={mensal}>Contratar</button>
          </div>
        </div>
        <div className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Trimestral</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">R$55,90 <small className="text-muted">/ mês</small> </h1>
            <div><h4>15% </h4> <h6> de desconto </h6> </div>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Treino exclusivo</li>
              <li>Dieta exclusivo</li>
              <li>Suporte por Whatsapp</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-primary" onClick={trimestral}>Contratar</button>
          </div>
        </div>
        <div className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Semestral</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">R$104,90 <small className="text-muted">/ mês</small></h1>
            <div><h4>20% </h4> <h6> de desconto </h6> </div>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Treino exclusivo</li>
              <li>Dieta exclusivo</li>
              <li>Suporte por Whatsapp</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-primary" onClick={semestral}>Contratar</button>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Planos;
