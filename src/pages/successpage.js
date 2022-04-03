import {CheckCircle} from "@material-ui/icons";
import '../css/successpage.modules.css'
import { useNavigate } from "react-router-dom";


const Successpage = () => {

    const history = useNavigate()
    return (
        <>
        <div class='success' 
        style={{backgroundImage: 'url(/cinema2.jpeg)'}}
        >
            <div className="success-container">
                <CheckCircle
                 className="success-image"
                 style={{
                    fontSize: '150px', 
                    color: 'white',
                    margin: '100px auto 0 auto'
                }}
                />
                <span className="congratulations">
                    Awesome
                </span>
                <span className="caption">
                👋 Welcome to TalentCroft 
                </span>

            </div>
            
        </div>
        <div className="white">
                    <span className='span'>You have successfully Registered!</span>
                    <button className="success-button" onClick={()=>history('/signin')}>Login here</button>
            </div>
        </>
    )
}

export default Successpage
