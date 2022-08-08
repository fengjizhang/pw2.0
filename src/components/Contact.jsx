import '../css files/contact.css';
import { AiFillMail, AiFillCompass } from "react-icons/ai";
const Contact = (props) => {

    return (
        <div className="contact">
            <div className='contact1'>Contact</div>
            <div className='contact2'>Let me introduce myself</div>
            <div className='contact3'>So you can get to know me a bit more</div>

            <div className='infoContainer'>
                
                <div className='contact5'>Location
                    <div className='contact6'>Columbus, OH</div>
                </div>

                <div className='contact5'>Email
                    <div className='contact6'>fengji.zhang0@gmail.com</div>
                </div>

                <div className='contact5'>Let's Connect
                    <div className='contact6'>link</div>
                </div>

                <div className='contact5'>Github
                    <div className='contact6'>link</div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact;