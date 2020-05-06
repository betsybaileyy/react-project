import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './dogs.json'

function POPOSList() {

  const spaces = data.map(( { title, address, images, hours }, i ) => {
  
    return (
      <POPOSSpace
        id={i}
        key={title} 
        name={title}
        address={address}
        image={images[0]}
        hours = {hours}
      />
    )
  })

  return (
    <div className="POPOSList">
      { spaces }
    </div>
  )
}
// const titles = data.map((obj) => {
//   return <h1>{obj.title}</h1>
// })

// function POPOSList() {
//   return (
//     <div className="POPOSList">
//         { titles }
//       <POPOSSpace 
//               name="50 California Street"
//               address="50 California St."
//               image="blue.jpg"
//       />
//       <POPOSSpace 
//               name="50 California Street"
//               address="50 California St."
//               image="blue.jpg"
//       />
//             <POPOSSpace 
//         name="50 California Street"
//         address="50 California St."
//         image="blue.jpg"
//       />
//       <POPOSSpace 
//               name="50 California Street"
//               address="50 California St."
//               image="blue.jpg"
//       />
//       <POPOSSpace 
//               name="50 California Street"
//               address="50 California St."
//               image="blue.jpg"
//       />
//     </div>
//   )
// }
// const titles = data.map((obj) => {
//   return obj.title
// })

// console.log(titles)

export default POPOSList