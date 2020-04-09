import React, { createContext, useState, useEffect } from "react";
const DataContext = createContext()
export const DataProvider = (props) => {
    let [isLoggedIn, setIsLoggedIn] = useState(false)
    let [profiles, setProfiles] = useState([
        { userId: 1, email: "mor.solomonov@gmail.com", name: "Mor", birthday: "1984-01-01", location: "Berlin", district: "T-hof" },
        { userId: 2, email: "nic@gmail.com", name: "Nic", birthday: "1986-01-01", location: "Berlin", district: "F-Hain" },
        { userId: 3, name: "Rob", email: "rob@gmail.com", birthday: "1983-01-01", location: "Berlin", district: "Wedding" }
    ])

    const Login = (email, password) => {
        let userFound = profiles.find(profile => profile.email == email)
        console.log(userFound);
        if (userFound) {
            setIsLoggedIn(true)
        }
    };

    return (<DataContext.Provider value={{ isLoggedIn, setIsLoggedIn, profiles, setProfiles, Login }}>
        {props.children}
    </DataContext.Provider>);
}
// export const DataConsumer = DataContext.Consumer

export default DataContext;