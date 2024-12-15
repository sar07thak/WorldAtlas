import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'
import "./error.css"


export const ErrorPAge = () => {
    const error = useRouteError();
    console.log(error);

    const navigate = useNavigate() ;
    const handlecloseBtn = () =>{
    navigate(-1);
    }

  return(
    <>
    <div class="wrapper">
    {/* <!-- MAIN --> */}
    <div class="container" data-text="404">
        <div class="title glitch" data-text="404">
            404
        </div>
        <div class="description glitch" data-text="PAGE NOT FOUND">
            PAGE NOT FOUND 
        </div>
        <button onClick={handlecloseBtn}>Back to Previous Page</button>
    </div>
    {/* <!-- END MAIN --> */}
    </div>
    </>
  );
}
