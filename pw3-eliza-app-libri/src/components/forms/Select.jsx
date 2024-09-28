import styles from './Select.module.css'
function Select({text,name}){
    return(
        <div className={styles.form_control}>
             <label htmlFor={name}>{text}</label>
             <select name ={name} id={name}>
                <option>Selecione uma categoria</option>
                <option>Ficção Cientifica</option>
                <option>Fantasia Heroica</option>
                <option>Suspense</option>
                <option>Terror</option>
                {
                    options.map((option)=> {
                // console.log(options.nome_categoria)
                return<option>{option.nome_categoria}</option>
            })
        }
             </select>
            
        </div>
       

    )
}
export default Select