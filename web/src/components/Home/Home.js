import React, { useState } from 'react';
import './styles.css';

import api from '../../services/api';

import ImageUploader from "react-images-upload";

import FormData from 'form-data';

const Home = (props) => {

    const [pictures, setPictures] = useState([]);
      
    const onDrop = picture => {
      setPictures([...pictures, picture]);
    };

    const [imageFile, setImageFile] = useState(null);

    const selectFile = (e) => {
        console.log(e.target.files[0]);
        setImageFile(e.target.files);
    }

    async function submitFormData (e) {
        e.preventDefault();
        let data = new FormData();
        data.append('file', pictures[0][0], pictures[0][0].name);

        const response = await api.post('/', {filesUrl: 'imageUrl'});
    }

    async function submit (e) {
        e.preventDefault();
        console.log('entrei no submit');
        try {
            console.log('entrei no try');
            console.log(pictures[0][0]);
            const response = await api.post('/', {files: pictures[0][0]}, {
                headers: {
                  'Content-Type': pictures.type
                }
              });
            console.log(pictures[0][0].name);
            console.log('mandei');
        } catch (error){
            console.log(error);
            console.log('Erro ao submit arquivo')
        }
        console.log('sai do submit');
    }

    const [imageUrl, setImageUrl] = useState('');

    async function subemter (e) {
        e.preventDefault();
        console.log('entrei no submeter');
        try {
            console.log('entrei no try do submeter');
            const response = await api.post('/', {filesUrl: imageUrl});
            console.log('mandei o submeter');
        } catch (error){
            console.log(error);
            console.log('Erro ao submeter arquivo')
        }
        console.log('sai do submiter');
    }

    const updateUrl = e => {
        setImageUrl(e.target.value);
        console.log(e.target.value);
    }

    return (
        <section id="home">
            <div className="home-container">
                <header>
                    <h1>Image Classifier</h1>
                </header>

                <section id="body">
                    <form action="submeter" method="post">
                        <input type="text" name="texto" id="text" value={imageUrl} onChange={updateUrl} />
                        {/* <button type="submit" onClick={Urlmudar}>
                            Add
                        </button> */}
                        <button type="submit" onClick={subemter}>
                            Submeter
                        </button>
                    </form>

                    <form action="sub">
                        <input type="file" onChange={selectFile} name="Image" id="imageDrop"/>
                        <button type="submit" onClick={submitFormData} >Detectar</button>
                    </form>
                </section>

                <ImageUploader
                    {...props}
                    withIcon={true}
                    onChange={onDrop}
                    imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
                    maxFileSize={5242880}
                    withPreview={true}
                />
                
            </div>
        </section>
    );
}

export default Home;