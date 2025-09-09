//We must treat the exported / imported element as its own app
import "./styles.css";

const Course = ({course}) => {
    
    //let courseSize=Object.keys(course.parts).length

    const Header = () => {
        if (course.name === undefined){
            return (
                <div>
                <h1>Empty Course</h1>
                </div>
            )  
        }
        else {
            return (
                <div>
                <h1>{course.name}</h1>
                </div>
            )
        }
        
    }

    const Part =({partNumber})=>{

        if (partNumber === undefined){
            return(
                <tr>
                <td>No Parts Available</td>
              </tr>
            )
        }
        else {
            return(
                <tr>
                    <td>{course.parts[partNumber].name}</td>
                    <td>{course.parts[partNumber].numExercises}</td>
                </tr>
            )
        }
        
    }

    const Total = () => {
        
        const partExercisesTotal = course.parts.reduce(
            (accumulator, currentPart) => accumulator + currentPart.numExercises,0);
        return (
          <div>
            <p>Number of exercises : { partExercisesTotal}</p>
          </div>
        )
      }
/*<Part partNumber={0}></Part>
        <Part partNumber={1}></Part>
        <Part partNumber={2}></Part>*/
    return(
        <div>
        <Header/>
        <table>
            <thead>
            <tr>
                <th>Part Name</th>
                <th>Number of Exercises</th>
            </tr>
            </thead>
            <tbody>
                {course.parts.map((_, index) => (
                    <Part key={index} partNumber={index} />
                ))}
            </tbody>
        </table>
        <Total/>
        </div>
    )
}

export default Course

    
    


