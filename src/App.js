import React from 'react';
import Form from './components/Form';
import { getCep } from './services/api';
import {Container} from './styles';

function App() {

  const [fields, setFields] = React.useState({ // Objeto que armazena os valores dos campos do formulário
    rua: '',
    numero: '',
    cep: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  // Função que verifica se o cep é válido
  const checkCep = (event) => {
    const cep = event.target.value.replace(/\D/g, ''); // Remove tudo que não for número
    if (cep.length === 8) { // Se o cep tem 8 dígitos, então é válido
      getCep(cep) // Busca o cep na API do ViaCEP
        .then(({ data }) => {  // Recebe o retorno da API
          setFields({ // Atualiza os campos do formulário com os dados da API
            ...fields,
            rua: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf,
          });
        });
    }
  }

  // Função que atualiza os campos do formulário
  const handleChange = (event) => {
    setFields({
      ...fields, // Mantém os campos antigos
      [event.target.name]: event.target.value // Atualiza o campo com o valor do evento
    });
  }

  // Função que executa quando o formulário é submetido
  const handleSubmit = (event) => { 
    console.log(fields); // Imprime os campos do formulário
  }

  return (
    <Container>
      <h1>Consulta CEP</h1>
      <Form 
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
        checkCep={checkCep}
        fields={fields}
      />
     </Container>
  );
}

export default App;
