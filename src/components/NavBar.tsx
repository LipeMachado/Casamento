
const navbarFirstList = [
    {
        menu: "Página Inicial",
        link: "/"
    },
    {
        menu: "Nossa História",
        link: "/"
    },
    {
        menu: "Local",
        link: "/"
    },
]

const navbarSecondList = [
    {
        menu: "Presentes",
        link: "/"
    },
    {
        menu: "Confirmação",
        link: "/confirmacao"
    },
    {
        menu: "Contato",
        link: "/contato"
    },
]

export function NavBar() {
    return (
        <>
            <nav className="h-36 mb-16 flex justify-center items-center">
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
                    <div className="w-24 h-24 flex justify-center items-center border-[1px] border-black rounded-full select-none">
                        <p className="font-light text-4xl">F&K</p>
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