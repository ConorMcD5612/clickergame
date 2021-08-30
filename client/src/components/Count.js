import React from 'react'


export const Count = ({count, setCount, cps}) => {

    

    return (
        <div>
            {count}
            <button onClick={()=> setCount(count => count+1)}></button>
            {cps}
        </div>
    )
}
