import React from "react";
import { useState } from 'react'; 


function LogInR(){

    const styles = {

        containerA:{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10, 
            width: "100%",
            height: "100%",

        },

        containerB:{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 100,
            backgroundImage: `url("https://sites.breakingmedia.com/uploads/sites/3/2022/02/ukraine_war_4-scaled.jpg")`,
            width: "100%",
            height: "100%",
            backgroundSize: "50%",
            backgroundColor: "green",
            borderRadius: "50%"

        },

        title: {
            backgroundColor: "#EDC339",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 60,
            marginTop: "5%",
            marginBottom: 45,
            width: 800,
            borderRadius: 10


        },
        formA: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50
        },

        formA2: {
            marginTop: 10,
            padding: 7
        }
        
    }

    const [orgName, setOrgName] = useState("");

    return(
        <div style={styles.containerA}>
        <div style={styles.containerB}>
        <div style={styles.title}>
            
            <h1 className="textStyle">
                Welcome dear Recruiter!
            </h1>
            <p className="textStyle">
                We missed you!
            </p>
        </div>

        
        </div>

<div style={styles.title}>


<form className="textStyle">
<label style = {styles.formA} >Organization:
<input
style = {styles.formA2}
type="text" 
alue={orgName}
onChange={(e) => setOrgName(e.target.value)}
/>
</label>
<p><i>Please tell us the organization you represent</i></p>
</form>


</div>
</div>

    )
}

export default LogInR;