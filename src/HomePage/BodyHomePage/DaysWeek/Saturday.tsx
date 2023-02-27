import React, { useState } from 'react';
import Modal from 'react-modal';
import '../DaysWeek/DaysWeek.css';
import iconeAcademia from '../../../img/iconeAcademia.png'

interface PropsSaturday {
    propsSaturday: Array<{
        Abdominal?: Array<string | number | boolean>;
        Peito?: Array<string | number | boolean>;
        Triceps?: Array<string | number | boolean>;
        Perna?: Array<string | number | boolean>;
        Biceps?: Array<string | number | boolean>
        Cardio?: Array<string | number | boolean>
        Descanso?: Array<string | number | boolean>
        Costas?: Array<string | number | boolean>
        Ombro?: Array<string | number | boolean>
    }>;
}

const Saturday: React.FC<PropsSaturday> = ({ propsSaturday }) => {
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

    const peito: Array<string | number | boolean> = [];
    const triceps: Array<string | number | boolean> = [];
    const perna: Array<string | number | boolean> = [];
    const biceps: Array<string | number | boolean> = [];
    const abdominal: Array<string | number | boolean> = [];
    const cardio: Array<string | number | boolean> = [];
    const descanso: Array<string | number | boolean> = [];
    const costas: Array<string | number | boolean> = [];
    const ombro: Array<string | number | boolean> = [];

    propsSaturday.forEach((treino) => {
        if (treino.Peito) {
            peito.push(...treino.Peito);
        } else if (treino.Triceps) {
            triceps.push(...treino.Triceps);
        } else if (treino.Perna) {
            perna.push(...treino.Perna);
        } else if (treino.Biceps) {
            biceps.push(...treino.Biceps);
        } else if (treino.Abdominal) {
            abdominal.push(...treino.Abdominal);
        } else if (treino.Cardio) {
            cardio.push(...treino.Cardio);
        } else if (treino.Descanso) {
            descanso.push(...treino.Descanso);
        } else if (treino.Costas) {
            costas.push(...treino.Costas);
        } else if (treino.Ombro) {
            ombro.push(...treino.Ombro);
        } else {
            console.log("Erro")
        }
    });

    return (
        <div className='divDays'>
            <button onClick={openModal} className='btnDays'>
                <img src={iconeAcademia} style={{ width: '55%' }}></img>
                SÁBADO
            </button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
            >
                 <div id='divTreinoBtn'>
                    <h2>Treino de Sabado:</h2>
                    <button onClick={closeModal} className='btn btn-secondary btn-sm'>X</button>
                </div>


                {peito.length > 0 && (
                    <ul>
                        Peito
                        <ul>
                            {peito.map((teste, key) => (
                                <li key={key}>{teste}</li>
                            ))}
                        </ul>
                    </ul>
                )}

                {triceps.length > 0 && (
                    <ul>
                        Triceps
                        <ul>
                            {triceps.map((teste, key) => (
                                <li key={key}>{teste}</li>
                            ))}
                        </ul>
                    </ul>
                )}

                {perna.length > 0 && (
                    <ul>
                        Perna
                        <ul>
                            {perna.map((teste, key) => (
                                <li key={key}>{teste}</li>
                            ))}
                        </ul>
                    </ul>
                )}

                {biceps.length > 0 && (
                    <ul>
                        Biceps
                        <ul>
                            {biceps.map((teste, key) => (
                                <li key={key}>{teste}</li>
                            ))}
                        </ul>
                    </ul>
                )}

                {abdominal.length > 0 && (
                    <ul>
                        Abdominal
                        <ul>
                            {abdominal.map((teste, key) => (
                                <li key={key}>{teste}</li>
                            ))}
                        </ul>
                    </ul>
                )}

                {cardio.length > 0 && (
                    <ul>
                        Cardio
                        <ul>
                            {cardio.map((teste, key) => (
                                <li key={key}>{teste}</li>
                            ))}
                        </ul>
                    </ul>
                )}

                {descanso.length > 0 && (
                    <ul>
                        Descanso

                    </ul>
                )}

                {costas.length > 0 && (
                    <ul>
                        Costas
                        <ul>
                            {costas.map((teste, key) => (
                                <li key={key}>{teste}</li>
                            ))}
                        </ul>
                    </ul>
                )}

                {ombro.length > 0 && (
                    <ul>
                        Ombro
                        <ul>
                            {ombro.map((teste, key) => (
                                <li key={key}>{teste}</li>
                            ))}
                        </ul>
                    </ul>
                )}
            </Modal>
        </div>

    )

}

export default Saturday