package main

import (
    "github.com/gorilla/mux"
    "log"
    "net/http"
      "fmt"

    "./db"
    "encoding/json"
"github.com/gorilla/handlers"
"os"
"strconv"
    
)

type Donor struct {
    Name        string   `json:"name"`
    Email string   `json:"email"`
    Phone int `json:"phone"`
    Password  string   `json:"password"`
    City string `json:"city"`
    Bloodtype  string `json:"bloodtype"`

}


type Don_Request struct {
  Email string   `json:"email"`
  Category string `json:"category"` 
  Bloodtype  string `json:"bloodtype"`
  Disease string `json:"disease"`
  State string `json:"state"`
  Reqdate string `json:"reqdate"`
}

type Don_Request2 struct {
  ID  int64  `sql:"type:bigint PRIMARY KEY`
  Email string   `json:"email"`
  Category string `json:"category"` 
  Bloodtype  string `json:"bloodtype"`
  Disease string `json:"disease"`
  State string `json:"state"`
  Reqdate string `json:"reqdate"`
}

type Hospital struct{
    Name        string   `json:"name"`
    Email string   `json:"email"`
    Phone string `json:"phone"`
    Password  string   `json:"password"`
    City string `json:"city"`

}
var usersdata [] Donor
var requests [] Don_Request
var hosdata[] Hospital


// Display a single data
func GetDonors(w http.ResponseWriter, r *http.Request) {
    users := db.GetDonors()
     fmt.Println(users)
    json.NewEncoder(w).Encode(users)

}

func GetHospitals(w http.ResponseWriter, r *http.Request) {
    hosdata := db.GetHospitals()
     fmt.Println(hosdata)
    json.NewEncoder(w).Encode(hosdata)

}

func GetAllRequests(w http.ResponseWriter, r *http.Request) {
    hosdata := db.GetAllRequests()
     fmt.Println(hosdata)
    json.NewEncoder(w).Encode(hosdata)

}

func GetAllRequests2(w http.ResponseWriter, r *http.Request) {
    hosdata := db.GetAllRequests2()
     fmt.Println(hosdata)
    json.NewEncoder(w).Encode(hosdata)

}

func GetRequests(w http.ResponseWriter, r *http.Request) {

  params := mux.Vars(r)
    requests := db.GetRequests(params["email"])
     fmt.Println(requests)
    json.NewEncoder(w).Encode(requests)

}

///////////////////////////////////
func GetSpecDonor(w http.ResponseWriter, r *http.Request){

     params := mux.Vars(r)
     dons := db.GetSpecDonor(params["email"])
    json.NewEncoder(w).Encode(dons)

}


func GetSpecHospital(w http.ResponseWriter, r *http.Request){

     params := mux.Vars(r)
     hosp := db.GetSpecHospital(params["email"])
    json.NewEncoder(w).Encode(hosp)

}

func CreateDonor(w http.ResponseWriter, r *http.Request) {


  r.ParseForm()
  name := r.PostForm.Get("name")
  email :=r.PostForm.Get("email")
  phone:=r.PostForm.Get("phone")
  password :=r.PostForm.Get("password")
  city :=r.PostForm.Get("city")
  bloodtype:=r.PostForm.Get("bloodtype")

phone="03333432"
  i, _ := strconv.Atoi(phone)


  fmt.Println(name)
  fmt.Println(email)
  fmt.Println(i)
  fmt.Println(password)
  fmt.Println(city)
  fmt.Println(bloodtype)
  db.CreateDonor(name,email,i,password,city,bloodtype)


}
func CreateRequest(w http.ResponseWriter, r *http.Request) {


  r.ParseForm()
  cat := r.PostForm.Get("category")
  email :=r.PostForm.Get("email")
  disease:=r.PostForm.Get("disease")
  reqdate :=r.PostForm.Get("reqdate")
  state:=r.PostForm.Get("state")
  bloodtype:=r.PostForm.Get("bloodtype")


  
  db.CreateRequest(email,cat,bloodtype,disease,state,reqdate)


}

func CreateRequest2(w http.ResponseWriter, r *http.Request) {


  r.ParseForm()
  cat := r.PostForm.Get("category")
  email :=r.PostForm.Get("email")
  disease:=r.PostForm.Get("disease")
  reqdate :=r.PostForm.Get("reqdate")
  state:=r.PostForm.Get("state")
  bloodtype:=r.PostForm.Get("bloodtype")


  
  db.CreateRequest2(email,cat,bloodtype,disease,state,reqdate)


}

func CreateHospital(w http.ResponseWriter, r *http.Request) {


  r.ParseForm()
  name := r.PostForm.Get("name")
  email :=r.PostForm.Get("email")
  phone:=r.PostForm.Get("phone")
  password :=r.PostForm.Get("password")
  city :=r.PostForm.Get("city")


i, _ := strconv.Atoi(phone)


  fmt.Println(name)
  fmt.Println(email)
  fmt.Println(i)
  fmt.Println(password)
  fmt.Println(city)
  db.CreateHospital(name,email,i,password,city)


}

func UpdateDonor(w http.ResponseWriter, r *http.Request) {

  r.ParseForm()
  name := r.PostForm.Get("name")
  email :=r.PostForm.Get("email")
  phone:=r.PostForm.Get("phone")
  password :=r.PostForm.Get("password")
  city :=r.PostForm.Get("city")
  bloodtype:=r.PostForm.Get("bloodtype")

phone="03333432"
  i, _ := strconv.Atoi(phone)


  fmt.Println(name)
  fmt.Println(email)
  fmt.Println(i)
  fmt.Println(password)
  fmt.Println(city)
  fmt.Println(bloodtype)
  db.UpdateDonor(name,email,i,password,city,bloodtype)

}
func DeleteDonor(w http.ResponseWriter, r *http.Request) {
    params := mux.Vars(r)
     db.DeleteDonor(params["email"])
}

func DeleteRequest(w http.ResponseWriter, r *http.Request) {
    params := mux.Vars(r)
    var s string = params["ID"]
i, err := strconv.ParseInt(s, 10, 64)
fmt.Println(err)
     db.DeleteRequest(i)
}

func UpdateHospital(w http.ResponseWriter, r *http.Request) {

  r.ParseForm()
  name := r.PostForm.Get("name")
  email :=r.PostForm.Get("email")
  phone:=r.PostForm.Get("phone")
  password :=r.PostForm.Get("password")
  city :=r.PostForm.Get("city")

phone="03333432"
  i, _ := strconv.Atoi(phone)


  fmt.Println(name)
  fmt.Println(email)
  fmt.Println(i)
  fmt.Println(password)
  fmt.Println(city)

  db.UpdateHospital(name,email,i,password,city)

}

// main function to boot up everything
func main() {

headersOk := handlers.AllowedHeaders([]string{"X-Requested-With"})
originsOk := handlers.AllowedOrigins([]string{os.Getenv("ORIGIN_ALLOWED")})
methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"})
    

    fmt.Println("Here")
    //db.Connect();
    router := mux.NewRouter()  

    router.HandleFunc("/donor", GetDonors).Methods("GET")
    router.HandleFunc("/hospital", GetHospitals).Methods("GET")
    router.HandleFunc("/don_request", GetAllRequests).Methods("GET")
    router.HandleFunc("/don_request2", GetAllRequests2).Methods("GET")
    

    router.HandleFunc("/donor/{email}", GetSpecDonor).Methods("GET")
    router.HandleFunc("/hospital/{email}", GetSpecHospital).Methods("GET")

    router.HandleFunc("/donor/{email}", UpdateDonor).Methods("PUT")
    router.HandleFunc("/hospital/{email}", UpdateHospital).Methods("PUT")

    router.HandleFunc("/donor/{email}", DeleteDonor).Methods("DELETE")
    router.HandleFunc("/don_request2/{ID}", DeleteRequest).Methods("DELETE")

    router.HandleFunc("/hospital/{email}", GetSpecHospital).Methods("GET")
    router.HandleFunc("/donor", CreateDonor).Methods("POST") //post
    router.HandleFunc("/don_request", CreateRequest).Methods("POST") //post
    router.HandleFunc("/don_request2", CreateRequest2).Methods("POST") //post
    router.HandleFunc("/hospital", CreateHospital).Methods("POST") //post

   // router.HandleFunc("/don_request", DeleteRequest).Methods("DELETE")
   // router.HandleFunc("/users/{email}", DeleteUser).Methods("DELETE")

     router.HandleFunc("/don_request2/{email}", GetRequests).Methods("GET")

    // router.HandleFunc("/don_request/{email}", GetSpecUsers).Methods("GET")
   log.Fatal(http.ListenAndServe(":3000" + os.Getenv("PORT"), handlers.CORS(originsOk, headersOk, methodsOk)(router)))
// start server listen
// with error handling

   // log.Fatal(http.ListenAndServe(":3000", router))

}
