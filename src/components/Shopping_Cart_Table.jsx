// import React from 'react';

// function ShoppingCartTable({ cartItems, removeFromCart, addToCart }) {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Product</th>
//           <th>Price</th>
//           <th>Quantity</th>
//           <th>Total</th>
//         </tr>
//       </thead>
//       <tbody>
//         {cartItems.map((item, index) => (
//           <tr key={index}>
//             <td>{item.name}</td>
//             <td>${item.price.toFixed(2)}</td>
//             <td>
//               <input
//                 type="number"
//                 min="1"
//                 value={item.quantity}
//                 onChange={(e) => addToCart(index, parseInt(e.target.value))}
//               />
//             </td>
//             <td>${(item.price * item.quantity).toFixed(2)}</td>
//             <td>
//               <button onClick={() => removeFromCart(index)}>Remove</button>
             
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default ShoppingCartTable;
