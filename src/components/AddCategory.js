import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({ setCategories }) => {
    const defaultValue = "";
    const placeholder = "Ingresa una frase";
    const [value, setValue] = useState("")

    const handleChange = (e) => {        
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value.trim().length >2){
            setCategories(category=> [value,...category,]);
            setValue(defaultValue);
        }
        
    };
    return (
        <form onSubmit={handleSubmit}>
          <h2> Add Category </h2>  
          <input
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={ handleChange}
          ></input>
        </form>
    )
};

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
};

