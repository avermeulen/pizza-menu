import React from "react"
import Services from "../Service"

let Order = (props) => {
    let menu =  Services()
    let order = menu.customerOrder();
    var id = 1
    return (<table>
        <thead>
            <tr>
                <th>Pizza</th> <th>QTY</th><th>Price</th>
            </tr>
        </thead>
        <tbody>
            {order.map((el) => (<tr key={id++}>
                <td>{el.nameAndSize()}</td>
                <td>{el.QTY}</td>
                <td>{el.price}</td>
            </tr>
                ))}
        </tbody>
        <tfoot>
            <tr>
                <td>Total Grand</td><td colSpan={2}>{props.total}</td>
            </tr>
        </tfoot>
    </table>)


}

export default Order;