// const Button = (props) =>{
//     console.log(props);
//     return (
//         <button style={{color : props.color}}>
//             {props.text} - {props.color}
//         </button>
//         )
// };

// 객체구조분해할당
const Button = ({text, color, children}) =>{
    return (
        <button style={{color : color}}>
            {text} - {color}
            {children}
        </button>
        )
};

Button.defaultProps = {
    color : "black",
}

export default Button; //export 내보내다  