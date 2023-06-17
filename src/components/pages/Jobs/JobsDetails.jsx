import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const JobsDetails = () => {
    const [jobs, setJobs] = useState([]);
    const routeId = useParams();
    console.log(routeId);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])


   
    return (
        <div>
            
        </div>
    );
};

export default JobsDetails;