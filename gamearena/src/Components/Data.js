import React from 'react';
import image from './image.jpg';
const Data = ({data})=>
{ 
  
  


  
    
  return(
        
        <div className="container-fluid" >
       
       <div className="row" id="game-data">
       {data.map(record=>(
                <div className="col-sm-4" style={{backgroundColor:"#DAE0E2"}} >
                <div className="card card-body h-100" style={{width: "20rem" ,display:"inline-block" , margin:"auto "}}>
               <img className="card-img-top" src={image}/>
               <div className="card-body" id="card-body">
                <h5 className="card-title" id="title">Title : {record.title}+</h5>;
              <p className="card-text">URL : {record.title}</p>
              <p className="card-text">Platform : {record.title}</p>
              <p className="card-text">Score : {record.title}</p>
              <p className="card-text">Genre : {record.title}</p>
              <p className="card-text">Editiors Choice : {record.title}</p>
              <p className="card-text">Release Year :{record.title}</p>
              </div>
              </div>
              </div>
       )
       )
       }
       </div>
       </div> 
      
               // console.log(data[i]);
                
    );


}
export default Data