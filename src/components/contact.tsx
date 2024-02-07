import { FaLinkedin, FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa';

export default function Contact() {

    const handleClick = (link: string) => {
        window.open(link, '_blank');
      };

    return (
        <footer className='flex flex-col justify-center gap-5'>
            <div className='flex flex-row md:gap-3 justify-center'>
                <h1 className='text-4xl md:text-6xl text-gray-600 hidden md:block'>Entre em</h1>
                <span className='text-4xl md:text-6xl font-extrabold text-blue-500'>Contato!</span>
            </div>
            <div className="flex md:flex-row flex-col text-blue-500 md:gap-8 justify-center">
                <div className='flex flex-col gap-1 items-center'>
                    <FaLinkedin className='h-10 w-10 hover:h-12' 
                    onClick={() => handleClick('https://www.linkedin.com/in/eduardosimoes97/')}/>
                    <span className='text-gray-600 font-bold'>Linkedin</span>
                    <span className='font-extrabold'>/eduardosimoes97</span>
                </div>
                <div className='flex flex-col gap-1 items-center'>
                    <FaEnvelope className='h-10 w-10 hover:h-12'
                    onClick={() => handleClick('mailto:eduardorsimoes97@gmail.com')}/>
                    <span className='text-gray-600 font-bold'>E-mail</span>
                    <span className='font-extrabold'>eduardorsimoes97@gmail.com</span>
                </div>
                <div className='flex flex-col gap-1 items-center'>
                    <FaPhone className='h-10 w-10 hover:h-12'
                    onClick={() => handleClick('https://api.whatsapp.com/send?phone=5514991206419')}/>
                    <span className='text-gray-600 font-bold'>Telefone</span>
                    <span className='font-extrabold'>(14)99120-6419</span>
                </div>
                <div className='flex flex-col gap-1 items-center'>
                    <FaGithub className='h-10 w-10 hover:h-12' 
                    onClick={() => handleClick('https://github.com/EduardoSimoess')}/>
                    <span className='text-gray-600 font-bold'>Github</span>
                    <span className='font-extrabold'>/EduardoSimoess</span>
                </div>
            </div>
        </footer>
    )
}