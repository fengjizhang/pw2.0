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
                <IconContext.Provider value={{ color: "white", size: '30px', className: "icon1"}} >
                    <a target="_blank" href="https://www.linkedin.com/in/fengjizhang/" rel="noreferrer" ><AiFillLinkedin /></a>
                </IconContext.Provider>

                <IconContext.Provider value={{ color: "white", size: '30px', className: "icon1"}}>
                    <a href="tel:9172513612"><AiFillPhone /></a>
                </IconContext.Provider>

                <IconContext.Provider value={{ color: "white", size: '30px', className: "icon1"}}>
                    <a target="_blank" href="https://github.com/fengjizhang" rel="noreferrer" ><AiFillGithub /></a>
                </IconContext.Provider>

                <IconContext.Provider value={{ color: "white", size: '30px', className: "icon1"}}>
                    <a target="_blank" href="mailto:fengji.zhang0@gmail.com" rel="noreferrer" ><AiFillMail /></a>
                </IconContext.Provider>
            </span>
        </div>
    )
}

export default Landing;