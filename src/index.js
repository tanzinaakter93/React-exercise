import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {people} from './people';



function Birthday(){
    const [count,setCount]= useState(5);
    const [person,setPeople]= React.useState(people);
    const getCount=()=>{
    setCount(0);
    setPeople([]);
}
    return(
    <section className="birthday">
        <h1> {count} Birthdays Today</h1>
         {person.map((iterate)=>{
        const {id, img,Name, Age}= iterate;
        return (
            <div key={id} className="people">
                <img src={img} alt=""/>
                <h2>{Name}</h2>
                <h1>{Age}</h1>
            </div>
        );
    })}
    <button type="button" className="btn" onClick={getCount}> Clear All</button>
    </section>)
}

ReactDom.render(<Birthday/>, document.getElementById('root'));