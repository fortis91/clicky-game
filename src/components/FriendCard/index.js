import React from "react";
import "./style.css";

// function FriendCard(props) {
//   return (
//     <span onClick={() => props.shuffleFriends(props.id)} className="remove">

//       <div className="card">
//         <div className="img-container">
//           <img alt={props.name} src={props.image} />
//         </div>
//         <div className="content">

//           <ul>
//             <li>
//               <strong>Name:</strong> {props.name}
//             </li>
//             <li>
//               <strong>Occupation:</strong> {props.occupation}
//             </li>
//             <li>
//               <strong>Location:</strong> {props.location}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </span>
//   );
// }
function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={""} src={props.image} onClick={() => { props.shuffleFriends(props.id) }} />
      </div>
    </div>
  );
}
export default FriendCard;
