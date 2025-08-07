


interface ListType {
  product: string;
  price: number;
  quantity: number;
}

interface ProductsProps {
    list : ListType[];
}

export const Products = ({list} : ProductsProps) => {
    return(
        <div>
            <h3>Products</h3>
                    <div>
            <ul style={{
                listStyleType: 'disc', paddingLeft: '20px'
            }}>
                    {list.map((item, index) => (
                <li key={index}>

                            <p>Product: {item.product} | {" "}
                            Price: {item.price} | {" "}
                            Quantity: {item.quantity} | {" "}</p>        
                        
                </li>
                ))}
              
              </ul>
              </div>
        </div>
    )
}