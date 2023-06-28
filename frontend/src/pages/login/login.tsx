import { SyntheticEvent, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, Navigate } from 'react-router-dom';

const Login = (props: { setEmail: (email: string) => void }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleTogglePassword = () => {
        setPasswordVisible(!passwordVisible);
    };

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        const content = await response.json();

        props.setEmail(content.email);
        setRedirect(true);
    };

    if (redirect) {
        return <Navigate to="/home" />;
    }

    return (
        <div className='max-w-[1785px] h-[927px] lg:h-[1117px] mx-auto relative flex flex-col'>
            <div className='w-[2100px] h-full bg-[#010d1f] absolute top-0 -z-20'></div>
            <img src='http://localhost:3000/images/Frame32.png' className='h-full absolute top-0 -z-10' alt="" />
            <div className="flex w-[150px] lg:w-[200px] h-[80px] my-10 ml-5 lg:ml-20">
                <a href="/home" className="flex w-[150px] lg:w-[200px] h-[80px]">
                    <img src='http://localhost:3000/images/image-109.webp' alt="logo" className="w-[60px] h-[50px] lg:w-[70px] lg:h-[69px] my-auto mr-3" />
                    <h1 className="text-white text-base lg:text-xl my-auto font-semibold leading-[20px]">Konsultan Satir Indonesia</h1>
                </a>
            </div>

            {/* form */}
            <div className='rounded-md bg-white shadow-2xl h-[600px] w-[90%] md:w-[70%] lg:w-[40%] lg:h-[500px] mx-auto flex flex-col items-center justify-center gap-10 text-[#5A5A5D] lg:mt-20'>
                <h2 className='text-3xl font-medium text-black'>Login to your account</h2>
                <form className="flex flex-col gap-10 lg:w-[70%]" onSubmit={submit}>
                    {/* email */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className='font-medium'>Email</label>
                        <div className='border-2 p-3 rounded-md hover:border-sky-400/[.5] focus:border-sky-400/[.5]'>
                            <input type="email" placeholder='Email Address' className='w-full' required
                                onChange={e => setEmail(e.target.value)}
                                style={{ outline: '0px' }} />
                        </div>
                    </div>

                    {/* password */}
                    <div className='flex flex-col gap-2'>
                        <div className="flex justify-between">
                            <label htmlFor="password" className='font-medium'>Password</label>
                            <Link to="#" className="text-[#007DFA] hover:underline underline-offset-1">Forget Password ?</Link>
                        </div>
                        <div className="flex items-center lg:justify-between border-2 p-3 rounded-md hover:border-sky-400/[.5] focus:border-sky-400/[.5]">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Password"
                                className="w-full"
                                style={{ outline: '0px' }}
                                required
                            />
                            <div onClick={handleTogglePassword} className="w-[15px]">
                                {passwordVisible ? (
                                    <AiOutlineEyeInvisible size={20} />
                                ) : (
                                    <AiOutlineEye size={20} />
                                )}
                            </div>
                        </div>
                    </div>
                    {/* end password */}
                    <button type="submit" className='bg-[#007DFA] lg:w-[100%] text-white w-[270px] 
                text-center font-medium p-3 rounded-md hover:bg-[#3390ed]'>
                        Login
                    </button>
                </form>
                <div className="flex gap-2">
                    <p className="">Don't Have An Account ?</p>
                    <Link to="/signup" className='text-[#007DFA] hover:underline underline-offset-1'>
                        Sign Up
                    </Link>
                </div>
            </div>
            {/* end form */}

            <div className="text-white text-4xl w-[300px] my-20 ml-5 lg:text-5xl lg:w-[400px] italic font-thin">
                <h1>
                    Welcome to. Konseling Satir Indonesia
                </h1>
            </div>
        </div>
    );
};

export default Login;
