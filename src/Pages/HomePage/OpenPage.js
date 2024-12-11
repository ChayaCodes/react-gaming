import arrowDown from '../../assets/fonts/arrow-down-solid.svg';
import './OpenPage.css';
    
const OpenPage = () => {
    return <div className="imageOpen">
    <div className="jump">
      <p>למעבר לדף המשחקים</p>
      <p>
        <img src={arrowDown} alt="Arrow Down" height="1em" />
      </p>
    </div>
    </div>
}

export default OpenPage;