import { SiJavascript, SiTypescript } from 'react-icons/si';
import { SiPython, SiMysql } from 'react-icons/si';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiReact, SiRedux, SiAwslambda} from 'react-icons/si';
import { FaHtml5, FaCss3, FaDocker } from 'react-icons/fa';

export default function Skills() {
    return (
        <div className="flex flex-col text-blue-500 gap-5 text-center">
            <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold pb-5">Habilidades</h1>
            </div>
            <div className='flex md:flex-row flex-col flex-wrap gap-3 justify-center'>
                <div className='flex flex-col gap-1 px-10 py-8 border-4 rounded-sm border-gray-600 align-middle items-center'>
                    <FaReact className='h-10 w-10'/>
                    <h3 className=''>React</h3>
                </div>
                <div className='flex flex-col gap-1 px-10 py-8 border-4 rounded-sm border-gray-600 align-middle items-center'>
                    <FaNodeJs className='h-10 w-10'/>
                    <h3>Node.js</h3>
                </div>
                <div className='flex flex-col gap-1 px-10 py-8 border-4 rounded-sm border-gray-600 align-middle items-center'>
                    <SiMysql className='h-10 w-10'/>
                    <h3>MySql</h3>
                </div>
                <div className='flex flex-col gap-1 px-10 py-8 border-4 rounded-sm border-gray-600 align-middle items-center'>
                    <FaHtml5 className='h-10 w-10'/>
                    <h3>HTML:5</h3>
                </div>
                <div className='flex flex-col gap-1 px-10 py-8 border-4 rounded-sm border-gray-600 align-middle items-center'>
                    <FaCss3 className='h-10 w-10'/>
                    <h3>CSS3</h3>
                </div>
                <div className='flex flex-col gap-1 px-10 py-8 border-4 rounded-sm border-gray-600 align-middle items-center'>
                    <FaDocker className='h-10 w-10'/>
                    <h3>Docker</h3>
                </div>
                <div className='flex flex-col gap-1 px-10 py-8 border-4 rounded-sm border-gray-600 align-middle items-center'>
                    <SiRedux className='h-10 w-10'/>
                    <h3>Redux</h3>
                </div>
                <div className='flex flex-col gap-1 px-10 py-8 border-4 rounded-sm border-gray-600 align-middle items-center'>
                    <SiAwslambda className='h-10 w-10'/>
                    <h3>AWS</h3>
                </div>
                <div className='flex flex-col gap-1 px-10 py-8 border-4 rounded-sm border-gray-600 align-middle items-center'>
                    <SiTypescript className='h-10 w-10'/>
                    <h3>TypeScrip</h3>
                </div>
                <div className='flex flex-col gap-1 px-10 py-8 border-4 rounded-sm border-gray-600 align-middle items-center'>
                    <SiJavascript className='h-10 w-10'/>
                    <h3>JavaScript</h3>
                </div>
                <div className='flex flex-col gap-1 px-10 py-8 border-4 rounded-sm border-gray-600 align-middle items-center'>
                    <SiPython className='h-10 w-10'/>
                    <h3>Python</h3>
                </div>
            </div>
        </div>
    )
}

