import React, { useState } from 'react'
import PropTypes  from 'prop-types';

export const AddCategory = ({ setCategories }) => {           //Por protypes se puede traer una función del formulario padre al hijo y se ejecuta el estadp

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSumbit = (e) => {                           //Se obtiene el enter de teclado
        e.preventDefault();                                 //Se elimina el refresh de la página
        if (inputValue.trim().length > 2) {                 //Se verifica que haya dos letras minimo para poder adicionarlo
            setCategories(cats => [inputValue,...cats]);   //Si exste mas de dos letras entonces se ejecuta el comnado de adicion
            setInputValue('');                               //Al enviar el dato se borra
        }
    }


    return (
        <form onSubmit={handleSumbit}>
            <input
                type='text'
                value={inputValue}                          //Se lee el valor de la barra por teclado
                onChange={handleInputChange}                //Se habilita el cambio de los datos en la barra
            />
        </form>
    )
}


AddCategory.propTypes = {
setCategories:PropTypes.func.isRequired
}