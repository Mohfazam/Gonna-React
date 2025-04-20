export const Header = () => {
    return(
        <header>
            <div className="border-amber-500 border-4 p-4 m-4">
            <h1>We are inside the Header</h1>
            <nav>
                <ul className="list-disc p-2">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li><li>
                    <a href="#">Contact</a>
                </li>
                </ul>
            </nav>
        </div>
        </header>
    )
}