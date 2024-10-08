import React from 'react';
import styles from './Input.module.css'; // Certifique-se de que o caminho está correto

const Input = ({ type, name, text, placeholder,handlerChangeBook }) => {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input type={type} id={name} placeholder={placeholder} 
            onChange={handlerChangeBook} />
        </div>
    );
};

export default Input;