import {useState, useEffect} from 'react'
import axios from 'axios';
export const useFetch = ( url ) => {

    const [state, setState] = useState({data: null, loading: false, error: null});

    useEffect( () => {
        setState({data: null, loading: true, error: null });
        axios.get(url).then( (response) => {
            console.log(response)
        })
        .catch( (error) => {
            setState({data: null, loading: false, error});
        } );
    });
    

    
   
}
