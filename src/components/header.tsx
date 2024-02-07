import ToggleBtn from "./togglebtn";

export default function Header() {
    return (
        <div className="w-full text-center border-b-2 border-blue-500 md:p-5 p-2 md:flex-row flex justify-around">
            <div className="flex justify-center text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-blue-500">Portifolio</h1>
            </div>
            <ToggleBtn/>
        </div>
    )
}