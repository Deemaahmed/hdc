package main

import (
    "encoding/json"
    "github.com/gorilla/mux"
    "log"
    "net/http"
    
)



// The person Type (more like an object)

var usersdata []users



// Display all from the people var
func GetUsers(w http.ResponseWriter, r *http.Request) {
    json.NewEncoder(w).Encode(usersdata)
}

// Display a single data
func GetUser(w http.ResponseWriter, r *http.Request) {
    params := mux.Vars(r)
    for _, item := range usersdata {
        if item.ID == params["email"] {
            json.NewEncoder(w).Encode(item)
            return
        }
    }
    json.NewEncoder(w).Encode(&users{})
}

// create a new item
func CreateUser(w http.ResponseWriter, r *http.Request) {
    params := mux.Vars(r)
    var user users

    _ = json.NewDecoder(r.Body).Decode(&user)
    user.ID = params["email"]
    usersdata = append(usersdata, user)
    json.NewEncoder(w).Encode(usersdata)
}

// Delete an item
func DeleteUser(w http.ResponseWriter, r *http.Request) {
    params := mux.Vars(r)
    for index, item := range usersdata {
        if item.ID == params["email"] {
            usersdata = append(usersdata[:index], usersdata[index+1:]...)
            break
        }
        json.NewEncoder(w).Encode(usersdata)
    }
}

// main function to boot up everything
func main() {
    
    Connect();
    router := mux.NewRouter()  
    router.HandleFunc("/usersdata", GetUsers).Methods("GET")
    router.HandleFunc("/usersdata/{email}", GetUser).Methods("GET")
    router.HandleFunc("/usersdata", CreateUser).Methods("POST")
    router.HandleFunc("/usersdata/{email}", DeleteUser).Methods("DELETE")
    log.Fatal(http.ListenAndServe(":8000", router))
}
