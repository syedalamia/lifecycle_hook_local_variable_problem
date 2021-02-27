import React, {useState ,useEffect}  from 'react'

function Mycomp() {

    const [mydata, setData]= useState(0)

    useEffect(
        () => {
           console.log('did mount')
        }, [])


    useEffect(
            () => {
               console.log('did update')
            }, [mydata])

    var localVariable=3;


    console.log('value of state '+mydata);
   

    const updatingValue=()=>{
            
        localVariable=localVariable+1
            setData(localVariable);
       
    }

    return (
        <div>
            <button onClick={updatingValue}>Click Here</button>
        </div>
    )
}

export default Mycomp;
