import {useState} from 'react';
import Proplist from './Proplist';
const Home = () => {
    const [prop,setProp] = useState ([
        { title: 'Property-1', body: 'lorem ipsum...', Owner: 'Deepak',  Resident: 'Manoj', id: 1 },
        { title: 'Property-2', body: 'lorem ipsum...', Owner: 'Deepak', Resident: 'Ramesh', id: 2 },
        { title: 'Property-3', body: 'lorem ipsum...', Owner: 'Deepak',Resident: 'Rajesh', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newProp = prop.filter(prop => prop.id !== id)
        setProp(newProp);
    }
    
    return ( 
        <div className="home">
            <Proplist prop={prop} title="All Property..." />
              
        </div>
 
     );
    
}
 
export default Home;