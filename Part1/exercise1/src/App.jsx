const course = {name:'Half Stack application development',
                parts: [
                        {name:'Fundamentals of React',numExercises :10},
                        {name:'Using props to pass data',numExercises :7},
                        {name:'State of a component',numExercises :14}
                        ]
               }

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
      <p>Number of exercises : {course.parts[0].numExercises+course.parts[1].numExercises+course.parts[2].numExercises}</p>
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
      <Total/>
    </div>
  )
}

export default App