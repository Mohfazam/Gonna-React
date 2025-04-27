const ValidPassword = () => {
    return (
        <div>
            <h1>Valid Password hai bhai</h1>
        </div>
    )
}

const InValidPassword = () => {
    return (
        <div>
            <h1>InValid Password hai bhai</h1>
        </div>
    )
}



export const Password = ({flag}:{flag: boolean}) => {
   
        return flag ? <ValidPassword /> : <InValidPassword />
    
}