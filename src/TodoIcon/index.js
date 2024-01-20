import './TodoIcon.css';
import { ReactComponent as CheckSVG} from './check.svg';
import { ReactComponent as DeleteSVG} from './delete.svg';

const iconTypes = {
  //Hacemos una arrow function para hacerle el fill a nuestro svg, el color viene
  //como prop del componente padre
  "check": (color) => <CheckSVG className="Icon-svg" fill={color} />,
  "delete": (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span 
      className={`Icon-container Icon-container-${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}

    </span>
  )
}

export { TodoIcon };