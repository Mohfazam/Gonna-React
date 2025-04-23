import { useEffect, useState } from "react";

export const DateAndTime = () => {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
setCurrentDate(new Date);
        }, 1000)
    }, [])
    return(
        <div className="border-fuchsia-700 border-4 m-4">
            {currentDate.toString()}
        </div>
    )
}