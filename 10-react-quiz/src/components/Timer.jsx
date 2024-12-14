import { useEffect } from "react";

function Timer() {

    const d = new Date();
    console.log(d)

    useEffect(()=>{
        setTimeout(() => {
            
        }, 1000);
    },[])

  return (
    <div className="px-10 py-3 bg-gray-700 text-white font-medium rounded-full shadow-md hover:bg-gray-800 focus:outline-none">
      07:00
    </div>
  );
}

export default Timer;
