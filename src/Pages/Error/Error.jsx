import error_img from '../../assets/error404/error.svg'

const Error = () => {
    return (
        <div className="h-screen">
            <img className='h-[100vh] mx-auto'
            src={error_img} alt="" />
            
        </div>
    );
};

export default Error;