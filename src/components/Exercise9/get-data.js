import { useEffect, useState } from "react";
import DataItem from "./data-item";

function GetData() {
    const [userDetails, setUserDetails] = useState([]);

    useEffect(function () {
        const URL = "https://random-data-api.com/api/users/random_user?size=10";

        fetch(URL)
            .then(response => response.json())
            .then(data => setUserDetails(data));
    }, [])


    return (
        <div>
            {userDetails.map(function (elem, index) {
                return <DataItem key={index} userDetails={elem}></DataItem>;
            })}
        </div>
    )
}

export default GetData;