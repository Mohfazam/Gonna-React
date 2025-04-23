import { useEffect, useState } from "react";

export const DateAndTime = () => {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
setCurrentDate(new Date);
        }, 1000)
    }, [])
    return(
        <div>
            {currentDate.toString()}
        </div>
    )
}