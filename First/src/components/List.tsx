export const List = () => {

    const numbers = [1,2,3,4,5];
    const fruits = ["apple", "banana", "cherry", "mango"];
    const users = [
        { name: "Alice", age: 20 },
        { name: "Bob", age: 25 },
        { name: "Charlie", age: 30 }
      ]
      

    return (
        <div className="border-red-700 border-4 m-4 p-4">
            <ul>
            {numbers.map((number) => (
                    <li>
                        Number: {number}
                    </li>
            ))}
            </ul>
            <ul>
                {fruits.map((fruit) => (
                    <li>
                        Fruit Name: {fruit}
                    </li>
                ))}
            </ul>
            <br />
            <p className="border-b-4">Users:</p>
            <br />
            <ul>
                {users.map((user) => (
                    <li key={Math.random()}>
                        {user.name} is {user.age} old
                    </li>
                ))}
            </ul>
        </div>
    )
}