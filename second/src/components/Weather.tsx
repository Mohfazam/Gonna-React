interface weatherProps {
    temprature: number;
}

export const Weather  = ({temprature}:weatherProps) => {
return (
    <div>
        {temprature > 25? <p>hot Outside</p> :  <p>cold</p>}
    </div>
)
}