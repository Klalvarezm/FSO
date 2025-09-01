const course = {name:'Half Stack application development',
                parts: [
                        {name:'Fundamentals of React',numExercises :10},
                        {name:'Using props to pass data',numExercises :7},
                        {name:'State of a component',numExercises :14}
                        ]
               }


console.log("Hola",course.parts[1].name)


const Header = () => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Part =({partNumber})=>{
 return(
  <div>
   <p>{course.parts[partNumber].name} : {course.parts[partNumber].numExercises} </p>
  </div>
  
 )
}


const Total = () => {
  return (
    <div>
      <p>Number of exercises : {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}




const App = () => {
 

  return (
    <div>
      <Header></Header>
      <Part partNumber={0}></Part>
      <Part partNumber={1}></Part>
      <Part partNumber={2}></Part>
      
    </div>
  )
}

export default App