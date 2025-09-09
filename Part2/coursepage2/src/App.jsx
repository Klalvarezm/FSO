import ReactDOM from "react-dom/client"
import Course from "./components/Course"

const App = () => {

  console.log("Hola", Course.props)
  const course = {name:'Half Stack application development',
                  parts: [
                      {name:'Fundamentals of React',numExercises :10},
                      {name:'Using props to pass data',numExercises :7},
                      {name:'State of a component',numExercises :14}
                  ]
                 }

  return (
    <div>
      <Course course={course}/>
    </div>
  )
}

export default App