
import opa from '../../assets/opa.png'
import './style.css'



function SectionOne() {
    return (
        <div className='ota' >
            <div className="div_left">
                <h4>YUQORI DARAJALI PROFESSIONAL TOZALASH</h4>
                <h1><span>OSON TOZALANADIGAN</span> <br /> UY VA OFIS</h1>
                <p>Amet minim mollit non deserunt ullamco  sit aliqua dolor <br /> do amet sint. Velit officia enim velit mollit. Exercitation <br /> veniam consequat sunt nostrud amet.</p>
                <button>Narx  oling</button>
            </div>
            <div className="div_right">
                <img src={opa} alt="" />
            </div>
        </div>
    );
}

export default SectionOne;