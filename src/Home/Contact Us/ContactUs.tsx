
import FooterHome from '../Componentes Home/FooterHome/FooterHome'
import HeaderHome from '../Componentes Home/HeaderHome/HeaderHome'
import React, { useEffect, useState } from "react"
import '../Contact Us/ContactUs.css'
import { collection, doc, getFirestore, setDoc } from 'firebase/firestore';
import Modal from 'react-modal';

function ContactUs() {

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
    const emailInput = document.querySelector("#exampleInputEmail1") as HTMLInputElement;
    const emailTxt = document.querySelector("#emailInvalid") as HTMLInputElement;

    const phoneInput = document.querySelector("#exampleInputPhone1") as HTMLInputElement;
    const phoneTxt = document.querySelector("#phoneInvalid") as HTMLInputElement;

    const nameInput = document.querySelector("#exampleInputPassword1") as HTMLInputElement;
    const nameTxt = document.querySelector("#nameInvalid") as HTMLInputElement;

    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefoneRegex: RegExp = /^(\d{2})(\d{9})$/;
    const nomeRegex: RegExp = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [doubt, setDoubt] = useState('');





    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    }
    const handleDoubtChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDoubt(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const closeModal = () => {
        setModalIsOpen(false);
    };


    async function sendInfo() {
        if (!emailRegex.test(email) || email === '') {
            emailInput.style.border = "1px solid red";
            emailTxt.innerText = "E-mail inválido ou vazio";
            emailTxt.style.color = " red"
        } else if (!nomeRegex.test(name) || name === '') {
            nameInput.style.border = "1px solid red";
            nameTxt.innerText = "Nome inválido ou vazio";
            nameTxt.style.color = " red"
        } else if (!telefoneRegex.test(phone) || phone.length > 20) {
            phoneInput.style.border = "1px solid red";
            phoneTxt.innerText = "telefone inválido";
            phoneTxt.style.color = " red"
        } else {
            try {
                const response = await getFirestore();
                const doubtDoc = collection(response, "Doubt");
                await setDoc(doc(doubtDoc, email), {
                    name: name,
                    phone: phone,
                    email: email,
                    doubt: doubt,
                });

                setModalIsOpen(true)
            } catch (error) {
                console.error(error);
            }
        }


    };



    return (
        <div>
            <HeaderHome />

            <div id="PrincipalContactUs">

                <form>
                    <div className="form-group" >
                        <label >Endereço de email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Seu email"
                            autoComplete="on"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        
                        <small id="emailHelp" className="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
                        <div id='emailInvalid'></div>

                    </div>

                    <div className="form-group">
                        <label >Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Nome Completo"
                            // autoComplete="on"
                            value={name}
                            onChange={handleNameChange}
                        >
                        </input>
                        <div id='nameInvalid'></div>
                    </div>
                    <div className="form-group">
                        <label >Telefone</label>
                        <input
                            type="number"
                            className="form-control"
                            id="exampleInputPhone1"
                            placeholder="(99) 99999-9999"
                            maxLength={15}
                            autoComplete="on"
                            value={phone}
                            onChange={handlePhoneChange} ></input>
                        <div id='phoneInvalid'></div>
                    </div>
                    <div className="form-group">
                        <label >Dúvida</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Digite sua dúvida"
                            maxLength={250}
                            autoComplete="on"
                            value={doubt}
                            onChange={handleDoubtChange}
                        ></input>

                    </div>

                </form>
                <button className="btn btn-primary" onClick={sendInfo} >Enviar</button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
            >
                <h2>Mensagem Enviada com Sucesso!!!</h2>
            </Modal>
            <FooterHome />
        </div>


    )
}

export default ContactUs
function setIsOpen(arg0: boolean) {
    throw new Error('Function not implemented.');
}

