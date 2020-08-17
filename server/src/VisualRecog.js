const express = require('express');
const app = express();

module.exports = {

    async detect() {
        var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
        var fs = require('fs');

        var visualRecognition = new VisualRecognitionV3({
            version: '2018-03-19',
            iam_apikey: 't6-_S5Y476xtbTwy7cCvMrQ4ekBhM4wM4KNR4xCMuqiV'
        });

        var images_file = await fs.createReadStream('./src/img/lagarta.jpg');
        var classifier_ids = ["default"];
        var threshold = 0.6;

        var params = {
            images_file: images_file,
            classifier_ids: classifier_ids,
            threshold: threshold
        };

        visualRecognition.classify(params, function(err, response) {
            if (err) { 
                console.log(err);
                app.get('/', (request, response) => {

                    return response.status(404).send({ msg: response});
                });
                return response.status(202).send(response);
            } else {
                console.log(JSON.stringify(response, null, 2));
                return response.status(404).send('nao rolou');
            }
        });
        
    }
}