import { Link } from 'react-router-dom';
import error_img from '../../assets/error404/error.svg'

const Error = () => {
    return (
        <div className="h-screen">
            <img className='h-[80vh] mx-auto'
            src={error_img} alt="" />
           <div className='flex justify-center'>
           <Link to='/'><button className='btn btn-primary rounded mx-auto'>Back to home</button></Link>
           </div>
            
        </div>
    );
};

export default Error;