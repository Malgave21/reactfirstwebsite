import React from 'react';
import web from '../src/images/home1.jpg'
import Card from './Card';
const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Our Services </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              
                < Card title="Web"/>
                < Card title="Mobile App"/>
                < Card title="Software"/>
                < Card title="Digital"/>
                < Card title="Graphic"/>
                < Card title="Marketing"/>
                < Card title="Android developer"/>
                < Card title="Hardware"/>
               < Card title="AWS Developer"/> 
              </div>
            </div>
          </div>
        </div> 

    </>
  );
}

export default Service;
