import { createPortal } from "react-dom"

export const Popup = ({ copied }: any) => {
    return createPortal(
        <section>
            {copied && (
                <div className="absolute bottom-12">
                    copied to clipboard
                </div>
            )}
        </section>,

        document.querySelector("#popup-content")!
    )
}