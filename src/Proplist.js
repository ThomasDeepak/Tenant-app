const  Proplist = ({ prop, title, handleDelete}) => {
        return ( 
        <div className="prop-list">
            <h2> { title } </h2>
            {prop.map((prp) =>(
                <div className="prop-preview" key={prp.id}> 
                    <h2>{ prp.title } </h2>
                    <p> Property belongs to {prp.Owner} & Resident :  {prp.Resident}</p>
                    <button onClick={() => handleDelete(prp.id)}>Delete Property</button>
                    <button>Edit Property</button>
                </div>
        ))}
        </div> 
     );
    
}
 
export default  Proplist;