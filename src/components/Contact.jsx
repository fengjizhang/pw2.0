import '../css files/contact.css';
import { AiFillMail, AiFillCompass,AiFillGithub,AiFillLinkedin } from "react-icons/ai";
import { IconContext } from "react-icons";

const Contact = (props) => {

    return (
        <div className="contact">
            <div className='contact1'>Contact</div>
            <div className='contact2'>Let me introduce myself</div>
            <div className='contact3'>So you can get to know me a bit more</div>

            <div className='infoContainer'>

                <div className='blockContainer'>
                    <IconContext.Provider value={{ color: "white", size: '50px', className: "contactIcons" }}>
                        <AiFillCompass />
                    </IconContext.Provider>
                    <div className='contact5'>Location:
                        <div className='contact6'>Columbus, OH</div>
                    </div>
                </div>
                
                <div className='blockContainer'>
                    <IconContext.Provider value={{ color: "white", size: '50px', className: "contactIcons" }}>
                        <AiFillMail />
                    </IconContext.Provider>
                    
                    <div className='contact5'>Email:
                        <div className='contact6'>fengji.zhang0@gmail.com</div>
                    </div>
                </div>
                
                <div className='blockContainer'>
                    <IconContext.Provider value={{ color: "white", size: '50px', className: "contactIcons" }}>
                        <AiFillLinkedin />
                    </IconContext.Provider>
                    
                    <div className='contact5'>Let's Connect!
                        <div className='contact6'><a className="linktext" href="https://www.linkedin.com/in/fengjizhang/">LinkedIn</a></div>
                    </div>
                </div>
                
                <div className='blockContainer'>
                    <IconContext.Provider value={{ color: "white", size: '50px', className: "contactIcons" }}>
                        <AiFillGithub />
                    </IconContext.Provider>
                    
                    <div className='contact5'>Portfolio link
                        <div className='contact6'><a className="linktext" href="https://github.com/fengjizhang">Github</a></div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact;