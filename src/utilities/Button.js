import styles from './Button.module.css'

export const Button = (props) => {
    return(
        <button>{props.children}</button>
    )
}