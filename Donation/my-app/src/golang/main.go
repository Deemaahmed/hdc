package main

import (
    "encoding/json"
    "log"
    "net/http"
    "github.com/gorilla/mux"
)

// our main function
func main() {
    router := mux.NewRouter()
    user = append(people, Person{ID: "1", Firstname: "John", Lastname: "Doe", Address: &Address{City: "City X", State: "State X"}})
    user = append(people, Person{ID: "2", Firstname: "Koko", Lastname: "Doe", Address: &Address{City: "City Z", State: "State Y"}})   
    router.HandleFunc("/userdata", GetUsers).Methods("GET")
    router.HandleFunc("/userdata/{email}", GetUser).Methods("GET")
    router.HandleFunc("/userdata/{email}", CreateUser).Methods("POST")
    router.HandleFunc("/userdata/{email}", DeleteUser).Methods("DELETE")
    log.Fatal(http.ListenAndServe(":8000", router))
}


func GetUsers(w http.ResponseWriter, r *http.Request) {}
func GetUser(w http.ResponseWriter, r *http.Request) {}
func CreateUser(w http.ResponseWriter, r *http.Request) {}
func DeleteUser(w http.ResponseWriter, r *http.Request) {}