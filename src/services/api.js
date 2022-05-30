import axios from 'axios';

export async function getCep(cep){
    return await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .catch(error => {
        console.log(error);
    });
}