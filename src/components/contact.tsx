import Image from "next/image";


export default function Contact() {
    return (
        <div className="flex w-full content-around items-center">
            <div className="flex w-full flex-col pl-5 gap-2 items-center md:items-start pt-4 md:pt-0">
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
            <div className="w-2/3 hidden md:block">
                <Image 
                src="/profile.png" 
                alt="profile_pic" 
                className="w-10/12 h-10/12 object-cover"
                width="1200"
                height="1200" 
                />  
            </div>
        </div>
    )
}