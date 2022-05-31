import React from "react";
import { Input, Forms, Button } from "../styles";

function Form({ handleChange, handleSubmit, checkCep, fields }) {
    return (
        <>
            <Forms onSubmit={handleSubmit}>
                <Input type="text" name="cep" placeholder='CEP' maxLength={9} value={fields.cep} onChange={handleChange} onBlur={checkCep}  />
                <Input type="text" name="rua" placeholder='Rua' value={fields.rua} onChange={handleChange} disabled/>
                <Input type="text" name="bairro" placeholder='Bairro' value={fields.bairro} onChange={handleChange} disabled/>
                <Input type="text" name="numero" placeholder='Número' value={fields.numero} onChange={handleChange}/>
                <Input type="text" name="cidade" placeholder='Cidade' value={fields.cidade} onChange={handleChange} disabled/>
                <Input type="text" name="estado" placeholder='Estado' value={fields.estado} onChange={handleChange} disabled/>
                <Button type="submit">Enviar</Button>
            </Forms>
        </>
    );
}

export default Form;