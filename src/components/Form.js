import React from "react";
import { Input, Forms, Button } from "../styles";

function Form({ handleChange, handleSubmit, checkCep, fields }) {
    return (
        <>
            <Forms onSubmit={handleSubmit}>
                <Input type="text" name="cep" placeholder='cep' value={fields.cep} onChange={handleChange} onBlur={checkCep} />
                <Input type="text" name="rua" placeholder='rua' value={fields.rua} onChange={handleChange} />
                <Input type="text" name="numero" placeholder='numero' value={fields.numero} onChange={handleChange} />
                <Input type="text" name="bairro" placeholder='bairro' value={fields.bairro} onChange={handleChange} />
                <Input type="text" name="cidade" placeholder='cidade' value={fields.cidade} onChange={handleChange} />
                <Input type="text" name="estado" placeholder='estado' value={fields.estado} onChange={handleChange} />
                <Button type="submit">Enviar</Button>
            </Forms>
        </>
    );
}

export default Form;