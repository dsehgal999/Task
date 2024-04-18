// import logo from './logo.svg';
// import './App.css';
import axios from "axios";
import {useEffect,useState} from "react"
import { Link, useNavigate } from "react-router-dom";

function App() {

  const [columns,setColumns] = useState([]);
  const [records,setRecords] = useState([])
  const navigate = useNavigate();

  useEffect( ()=> {
    axios.get('http://localhost:3030/users')
    .then(res => {
      setColumns(Object.keys(res.data[0]))
      setRecords(res.data)
    })
  }, [])
  return (
    <div className= "container mt-5">
      <div className="text-end"> <Link to="/create" className="btn btn-primary"> Add +</Link></div>
      <table className="table">
        <thead>
          <tr>
            {columns.map((c,i)=> {
              <th key={i}> {c} </th>
            })}

            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Action</th>

          </tr>
        </thead>

        <tbody>
          {
            records.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.department}</td>
                <td>
                  <Link to={`/update/${d.id}`} className="btn btn-sm btn-success">Update</Link>
                  <button onClick={e=> handleSubmit(d.id)} className="btn btn-sm ms-1 btn-danger">Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>

      </table> 
    </div>
  );
  function handleSubmit(id){
    const conf = window.confirm("Do you want to delete");
    if(conf){
      axios.delete('http://localhost:3030/users/'+id)
      .then(res=>{
        alert('record has deleted');
        navigate('/');
      }).catch(err => console.log(err))
    }
  }
}

export default App;

