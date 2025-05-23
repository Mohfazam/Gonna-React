interface TimeProps {
    timing: string
}

export const Time = ({ timing }: TimeProps) => {
    return (
        <div>
            Good {timing.toLowerCase() === "morning" ? <p>Morning</p> :
                timing.toLowerCase() === "night" ? <p>Night</p> :
                    <p>Evening</p>
            }
        </div>
    )
}