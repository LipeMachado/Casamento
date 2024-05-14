
const navbarFirstList = [
    {
        menu : "Página Inicial",
        link : "/"
    },
    {
        menu : "Nossa História",
        link : "/"
    },
    {
        menu : "Local",
        link : "/"
    },
]

const navbarSecondList = [
    {
        menu : "Presentes",
        link : "/"
    },
    {
        menu : "Confirmação",
        link : "/"
    },
    {
        menu : "Contato",
        link : "/"
    },
]

export function NavBar() {
    return (
        <>
            <nav className="h-24 flex justify-center items-center">
                <ul className="flex w-full gap-20 justify-center items-center text-[#2B1105] text-xl">
                    {navbarFirstList.map((item) => (
                        <a
                            key={item.menu}
                            className="text-[#2B1105] hover:text-[#2B1105]/70 transition-colors"
                            href={item.link}                            
                        >
                            {item.menu}
                        </a>
                    ))}
                    <div className="px-10">
                        <p>F&K</p>
                    </div>
                    {navbarSecondList.map((item) => (
                        <a 
                            key={item.menu}
                            className="text-[#2B1105] hover:text-[#2B1105]/70 transition-colors"
                            href={item.link}
                        >
                            {item.menu}
                        </a>
                    ))}
                </ul>
            </nav>
        </>
    )
}