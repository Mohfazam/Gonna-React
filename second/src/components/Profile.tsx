interface profileProps{
    LoggedIn: boolean;
    isAdmin: boolean
}

export const Profile = ({LoggedIn, isAdmin}: profileProps) => {
    return(
        <div>
            LoggedIn: {LoggedIn ? <span>True</span> : <span>False</span>}
            <br />
            Status: {isAdmin ? <span>Admin</span> : <span>User</span>}
        </div>
    )
}