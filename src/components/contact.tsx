import Image from "next/image";


export default function Contact() {
    return (
        <div>
            <div className="flex flex-col pl-5 gap-2 items-center md:items-start pt-4 md:pt-0">
                <div className="flex flex-col">
                    <h1 className="text-4xl md:text-6xl text-gray-600">Olá,</h1>
                    <span className="text-4xl md:text-6xl font-extrabold text-blue-500">Posso ajudar?</span>
                    <span className="text-1xl md:text-2xl">Eduardo Simões - Dev full stack</span>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:w-full w-3/5 mt-2 md:mt-0">
                    <button className="bg-gradient-to-b from-blue-300 to-blue-600 hover:text-gray-600 rounded inline-block text-white font-bold py-2 px-4">
                        <a href="mailto:eduardorsimoes97@gmail.com">Enviar E-mail</a>
                    </button> 
                    <button className="bg-gradient-to-b from-blue-300 to-blue-600 hover:text-gray-600 rounded inline-block text-white font-bold py-2 px-4">
                        <a href="/resume.pdf" download>Baixar CV</a>
                    </button>
                </div>
            </div>
{/*             <div className="relative w-64 h-64 overflow-hidden rounded-full">
                <Image 
                src="/profile.jpeg" 
                alt="profile_pic" 
                className="absolute inset-0 w-full h-full object-cover rounded-full" 
                layout="fill"
                style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} 
                />  
            </div> */}
        </div>
    )
}