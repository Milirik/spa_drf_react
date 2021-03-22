import React, {useEffect, useState} from 'react';
import axios from "axios";
import Button from "@material-ui/core/Button";


const App = () => {

    const [projects, setProjects] = useState()

    useEffect(() => {

    }, [])

    const getProjects = () => {
        async function fetchProducts() {
            const {data} = await axios.get('http://127.0.0.1:8000')
            setProjects(data)
            console.log(data)
        }

        fetchProducts()
    }

    return (
        <div className="App">
            <Button onClick={getProjects}>Here</Button>
            {
                projects ?
                    <div>
                        {projects.me}
                        {projects.y0u}
                    </div>
                    : <h2>Nothing</h2>
            }

        </div>
    );
}
export default App;

