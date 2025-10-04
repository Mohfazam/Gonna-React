import { useState } from "react"

export const CopyInput = () => {

    const [input, setInput] = useState("");
    const [copied, setCopied] = useState(false);

    return(
        <div>Copy Input</div>
    )
}