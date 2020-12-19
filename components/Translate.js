const {Translate} = require('@google-cloud/translate').v2;
require('dotenv').config();
// import { CREDENTIALS } from 'react-native-dotenv';
console.log(process.env.API_KEY)
const envCredentials = JSON.parse(process.env.CREDENTIALS);


const translate = new Translate({
    credentials: envCredentials,
    projectId: envCredentials.project_id
});

const detectLanguage = async (text) => {

    try {
        let response = await translate.detect(text);
        return response[0].language;
    } catch (error) {
        console.log(`Error at detectLanguage --> ${error}`);
        return 0;
    }
}

detectLanguage('Oggi è lunedì')
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(error);
    });

// const translateText = async (text, targetLanguage) => {

//     try {
//         let [response] = await translate.translate(text, targetLanguage);
//         return response;
//     } catch (error) {
//         console.log(`Error at translateText --> ${error}`);
//         return 0;
//     }
// };

// translateText('Oggi è lunedì', 'en')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// const text = 'The text to translate, e.g. Hello, world!';
// const target = 'The target language, e.g. ru';
// async function translateText() {
//   // Translates the text into the target language. "text" can be a string for
//   // translating a single piece of text, or an array of strings for translating
//   // multiple texts.
//   let [translations] = await translate.translate(text, target);
//   translations = Array.isArray(translations) ? translations : [translations];
//   console.log('Translations:');
//   translations.forEach((translation, i) => {
//     console.log(`${text[i]} => (${target}) ${translation}`);
//   });
// }

// translateText();