import style from './Button.module.css'
import {Link} from 'react-router-dom'
const Button = ({label, router})=> {
    return(
        <div className ={style.buttoncontainer}>
            <Link to={`${router}${cod_livro}`}>
                <button>{label}</button>
            </Link>
            
        </div>

    )
}
export default Button;