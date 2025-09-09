import { useState } from 'react'
import { useEffect } from 'react'

const RandomAnecdote =(props) =>{
  return (
    <div>
    <h2>Anecdote of the day</h2>
    {props.anecdotes[props.selected]}
    <h4>Number of Votes: {props.anecVotes[props.selected]}</h4>
    </div>
  )
}

const MostVotedAnecdote =(props)=>{
  return(
    <div>
    <h2>Most Voted Anecdote</h2>
     {props.anecdotes[props.mostVotedIndex]}
    </div>
  )
}

const Button = (props) =>{
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  let initialAnecVotes=[0,0,0,0,0,0,0,0]
  const [anecVotes, setAnecVotes] = useState(initialAnecVotes)
  const [mostVotedIndex,setMostVotedIndex]=useState(0)

  //This one runs every time a change happens on the votes Array
  useEffect(() => {
    checkMostVotedAnect();
  }, [anecVotes]); 

  //Runs only once on page load, making sure a random anecdote is chosen.
  useEffect(() => {
    const index=parseInt(Math.floor(Math.random() * anecdotes.length))
  }, []);

  const selectRandomAnecdote = () =>{
    const index=parseInt(Math.floor(Math.random() * anecdotes.length))
    setSelected(index)
  }

  const incrementVoteValue =(index)=>{
    //iterator.map(function(currentValue, index, arr), thisValue)
    //1. take old array anecVotes, and put it into map
    //2.currVote would be the vote at an specific index
    //3.indexIterator would be like an i inside a for
    //4. it goes to an arrow funcion to change values
    //5. change values according to index and conditions
    //6. after the map, update the array with new array.

    const newAnectVotes=anecVotes.map((currVote,indexIterator)=>{
        if(indexIterator===index){
          return currVote+1
        }
        else {
          return currVote
        }
        });
      setAnecVotes(newAnectVotes)
    }

    const checkMostVotedAnect = () =>{
      let mostOnIndex=0
      let bigVal=0
      for (let i=0 ; i<anecVotes.length;i++){
        if (anecVotes[i]>bigVal){
            bigVal=anecVotes[i]
            mostOnIndex=i
        }
      }
      setMostVotedIndex(mostOnIndex)
    }



  return (
    <div>
      <RandomAnecdote anecdotes={anecdotes}
                      anecVotes={anecVotes} 
                      selected={selected}/>
      
      <p>
         <Button onClick={selectRandomAnecdote} text='Random Anecdote'/>
         <Button onClick={() =>incrementVoteValue(selected)} text='Add Vote!'/>
      </p>
      
      <MostVotedAnecdote anecdotes={anecdotes}
                         mostVotedIndex={mostVotedIndex}/>
    </div>
  )
}



export default App