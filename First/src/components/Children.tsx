 //@ts-ignore
export const Card = ({children}) => {
    return (
        //@ts-ignore
        <CardDate >
            {children}
        </ CardDate>
    );
}

const CardDate = () => {
    return (
        <div>
            <h2>Card 1</h2>
            <p>Card Data in Paragraph</p>
        </div>
    )
}