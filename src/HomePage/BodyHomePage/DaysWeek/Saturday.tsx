import React, { useState } from 'react';
import Modal from 'react-modal';
import '../DaysWeek/DaysWeek.css';

interface PropsSaturday {
    propsSaturday: Array<{
        Peito?: Array<string | number | boolean>;
        Triceps?: Array<string | number | boolean>;
        Perna?: Array<string | number | boolean>;
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

    propsSaturday.forEach((treino) => {
        if (treino.Peito) {
            peito.push(...treino.Peito);
        } else if (treino.Triceps) {
            triceps.push(...treino.Triceps);
        } else if (treino.Perna) {
            perna.push(...treino.Perna);
        }
    });

    return (
        <div className='divDays'>
            <button onClick={openModal} className='btnDays'>
                Quarta-Feira
            </button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
            >
                <h2>Treino de Quarta:</h2>
                <button onClick={closeModal}>X</button>

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

            </Modal>
        </div>

    )

}

export default Saturday