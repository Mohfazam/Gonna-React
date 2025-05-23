interface weatherProps {
    temprature: number;
}

export const Weather = ({ temprature }: weatherProps) => {
    return (
        <div>
            {
                temprature > 25 ? <p>hot Outside</p> :
                temprature > 10 && temprature < 25? <p>Normla Outside</p> :
                <p>Cold Outside</p> 
            }
        </div>
    )
}