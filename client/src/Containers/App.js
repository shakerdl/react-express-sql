
import './App.css';
import  axios from 'axios';
import { useEffect ,useState} from 'react';

function App() {

  const [listOfPosts,setlistOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/Users/user/").then((response)=>{
      setlistOfPosts(response.data);
    })
  }, [])

  
  return (
    <div className="App">
      {listOfPosts.map((value,index)=>{

        return <div>{value.name}</div>
      })}
    </div>
  );
}

export default App;
