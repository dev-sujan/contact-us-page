
import style from './Button.module.css'

// eslint-disable-next-line react/prop-types
const Button = ({text, icon, isOutlined, ...rest}) => {
  return (
    <button {...rest} className={`${style.btn} ${isOutlined ? style.outlined_btn : style.primary_btn} `}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
