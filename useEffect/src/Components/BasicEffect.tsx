import { useEffect } from "react"

export const BasicEffect = () => {
    useEffect(() => {
        console.log("First render so first component mount");
    });

    return(
        <div>
            Hello from the Basic Effect Component
        </div>
    )
}