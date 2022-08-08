import '../css files/landing.css';
import { IconContext } from "react-icons";
import { AiFillLinkedin, AiFillPhone, AiFillGithub, AiFillMail } from "react-icons/ai";


const Landing = (props) => {

    return (
        <div className="landingOne">
            <div className='nameBig'>
                    Fengji Zhang
                <br></br><span className='infoSmall'>Fullstack software engineer</span>
            </div>

            <span className='iconsGroup'>
                <IconContext.Provider value={{ color: "white", size: '30px', className: "icon1"}}>
                        <AiFillLinkedin />
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "white", size: '30px', className: "icon1"}}>
                        <AiFillPhone />
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "white", size: '30px', className: "icon1"}}>
                        <AiFillGithub />
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "white", size: '30px', className: "icon1"}}>
                        <AiFillMail />
                </IconContext.Provider>
            </span>
        </div>
    )
}

export default Landing;