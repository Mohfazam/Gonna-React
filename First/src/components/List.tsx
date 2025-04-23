export const List = () => {

    const numbers = [1,2,3,4,5];

    return (
        <div className="border-red-700 border-4 m-4 p-4">
            <ul>
            {numbers.map((number) => (
                    <li>
                        Number: {number}
                    </li>
            ))}
            </ul>
        </div>
    )
}