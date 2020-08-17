import React, { useState } from 'react';
import './styles.css';

import api from '../../services/api';

const Home = () => {

    const [imageFile, setImageFile] = useState(null);

    const selectFile = (e) => {
        console.log(e.target.files[0]);
        setImageFile(e.target.files);
    }

    async function submit (e) {
        e.preventDefault();
        console.log('entrei no submit');
        try {
            console.log('entrei no try');
            const response = await api.post('/', {file: imageFile});
            console.log('mandei');
        } catch (error){
            console.log(error);
            console.log('Erro ao submeter arquivo')
        }
        console.log('sai do submit');
    }

    async function carregarTodos() {
        console.log('iniciando carregar detectamento');

        // const response = await api.get('/').then(response => {
            
        //     const tarefa = response.data.map(tar => tar.tarefa);

        //     setTodos([...todos, tarefa]);

        //     console.log(tarefa)
        //     console.log(listaDeTarefas, 'lista de tarefas')

        // });

    }

    return (
        <section id="home">
            <div className="home-container">
                <header>
                    <h1>Image Classifier</h1>
                </header>

                <section id="body">
                    <input type="file" onChange={selectFile} name="Image" id="imageDrop"/>
                    <button type="submit" onClick={submit} >Detectar</button>
                </section>
                
            </div>
        </section>
    );
}

export default Home;