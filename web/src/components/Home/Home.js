import React from 'react';
import './styles.css';

import api from '../../services/api';

const Home = () => {

    async function submit (e) {
        e.preventDefault();
        try {
            // const response = await api.post('/imagem', {tarefa});
            // setTarefa('');
            console.log('trying');

        } catch (error){
            console.log(error);
            console.log('erro no submit')
        }
    }

    return (
        <section id="home">
            <div className="home-container">
                <header>
                    <h1>Image Classifier</h1>
                </header>

                <section id="body">
                    <input type="file" name="Image" id="imageDrop"/>
                    <button type="submit" onClick={submit} >Detectar</button>
                </section>
                
            </div>
        </section>
    );
}

export default Home;