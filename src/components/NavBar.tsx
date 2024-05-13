export function NavBar() {
    return (
        <>
            <nav className="h-24 flex justify-center items-center">
                <ul className="flex w-full gap-20 justify-center items-center text-[#2B1105] text-xl">
                    <li className="py-2 px-10">Home</li>
                    <li>Nossa Historia</li>
                    <li>Local</li>
                    <div>
                        <p>Logo</p>
                    </div>
                    <li>Presentes</li>
                    <li>Confirmação</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </>
    )
}