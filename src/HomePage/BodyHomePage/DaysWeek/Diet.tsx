import React, { useState } from 'react';
import Modal from 'react-modal';
import '../DaysWeek/DaysWeek.css';
import iconeDieta from '../../../img/iconeDieta.png'


interface PropsDiet {
    propsDiet: Array<{

        Breakfast?: Array<string | number | boolean>;
        BreakLunch?: Array<string | number | boolean>;
        Lunch?: Array<string | number | boolean>;
        AfternoonSnack?: Array<string | number | boolean>;
        Dinner?: Array<string | number | boolean>;
        Supper?: Array<string | number | boolean>;


    }>;
}

const Diet: React.FC<PropsDiet> = ({ propsDiet }) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '10px',
        },
    };
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const breakfast: Array<string | number | boolean> = [];
    const breaklunch: Array<string | number | boolean> = [];
    const lunch: Array<string | number | boolean> = [];
    const afternoonSnack: Array<string | number | boolean> = [];
    const dinner: Array<string | number | boolean> = [];
    const supper: Array<string | number | boolean> = [];


    propsDiet.forEach((dieta) => {
        if (dieta.Breakfast) {
            breakfast.push(...dieta.Breakfast);
        } else if (dieta.Lunch) {
            lunch.push(...dieta.Lunch);
        } else if (dieta.BreakLunch) {
            breaklunch.push(...dieta.BreakLunch);
        } else if (dieta.AfternoonSnack) {
            afternoonSnack.push(...dieta.AfternoonSnack);
        } else if (dieta.Dinner) {
            dinner.push(...dieta.Dinner);
        } else if (dieta.Supper) {
            supper.push(...dieta.Supper);
        } else {
            console.log("Erro")
        }
    });

    return (
        <div className='divDays'>
            <button onClick={openModal} className='btnDays'>
                <img src={iconeDieta} style={{ width: '55%' }}></img>
                DIETA
            </button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
            >

                <div id='divTreinoBtn'>
                    <h2>Dieta:</h2>
                    <button onClick={closeModal} className='btn btn-secondary btn-sm'>X</button>
                </div>


                {breakfast.length > 0 && (
                    <ul>
                        Café da Manhã
                        <ul>
                            {breakfast.map((teste, key) => (
                                <li key={key}>{teste}</li>
                            ))}
                        </ul>
                    </ul>
                )}

                {breaklunch.length > 0 && (
                    <ul>
                        Lanche da Manhã
                        <ul>
                            {breaklunch.map((teste, key) => (
                                <li key={key}>{teste}</li>
                            ))}
                        </ul>
                    </ul>
                )}

                {lunch.length > 0 && (
                    <ul>
                        Almoço
                        <ul>
                            {lunch.map((teste, key) => (
                                <li key={key}>{teste}</li>
                            ))}
                        </ul>
                    </ul>
                )}

                {afternoonSnack.length > 0 && (
                    <ul>
                        Lanche da Tarde:
                        <ul>
                            {afternoonSnack.map((teste, key) => (
                                <li key={key}>{teste}</li>
                            ))}
                        </ul>
                    </ul>
                )}

                {dinner.length > 0 && (
                    <ul>
                        Janta
                        <ul>
                            {dinner.map((teste, key) => (
                                <li key={key}>{teste}</li>
                            ))}
                        </ul>
                    </ul>
                )}

                {supper.length > 0 && (
                    <ul>
                        Ceia
                        <ul>
                            {supper.map((teste, key) => (
                                <li key={key}>{teste}</li>
                            ))}
                        </ul>
                    </ul>
                )}


            </Modal>
        </div>

    )

}

export default Diet