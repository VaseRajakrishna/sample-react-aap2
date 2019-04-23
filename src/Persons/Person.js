import React from "react";

import './Person.css';

const persons=(student)=>{
    return(
        <div className="Person">
        <p>My Name is {student.name} and My age is {student.age}</p>
        
        </div>
    )
}

export default persons;