import React from 'react';
import DogSpace from './DogSpace';
import './DogList.css';
import data from './dogs.json'

function DogList() {

  const spaces = data.map(( { title, breed, images, desc }, i ) => {
  
    return (
      <DogSpace
        id={i}
        key={title} 
        name={title}
        breed={breed}
        image={images[0]}
        desc={desc}
      />
    )
  })

  return (
    <div className="DogList">
      { spaces }
    </div>
  )
}
// const titles = data.map((obj) => {
//   return <h1>{obj.title}</h1>
// })

// function DogList() {
//   return (
//     <div className="DogList">
//         { titles }
//       <DogSpace 
//               name="50 California Street"
//               address="50 California St."
//               image="blue.jpg"
//       />
//       <DogSpace 
//               name="50 California Street"
//               address="50 California St."
//               image="blue.jpg"
//       />
//             <DogSpace 
//         name="50 California Street"
//         address="50 California St."
//         image="blue.jpg"
//       />
//       <DogSpace 
//               name="50 California Street"
//               address="50 California St."
//               image="blue.jpg"
//       />
//       <DogSpace 
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

export default DogList