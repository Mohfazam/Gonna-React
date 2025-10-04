import { Name } from "../App"


export const ComponentC = () => {
  return (
    <div>
      <Name.Consumer>
        {(name => {
          return <span>{name}</span>
        })}
      </Name.Consumer>
    </div>
  )
}

