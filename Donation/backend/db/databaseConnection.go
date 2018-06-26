package db

import (
  "database/sql"
  "fmt"
  _ "github.com/lib/pq"


)

const (
  host     = "204.48.28.197"
  port     = 5432
  user     = "deemaahmed"
  dbname   = "deemaahmed"
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

// The person Type (more like an object)


//First method:

func establishConnection(){
psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
    "dbname=%s sslmode=disable",
    host, port, user, dbname)


  db, err := sql.Open("postgres", psqlInfo)
  if err != nil {
    panic(err)
  }

  err = db.Ping()
  if err != nil {
    panic(err)
  }

  fmt.Println("Successfully connected!")

}

func GetDonors () []Donor {
  psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
    "dbname=%s sslmode=disable",
    host, port, user, dbname)


  db, err := sql.Open("postgres", psqlInfo)
  if err != nil {
    panic(err)
  }

  err = db.Ping()
  if err != nil {
    panic(err)
  }

  fmt.Println("Successfully connected!")

rows, err := db.Query("SELECT * FROM donor")

    donors := []Donor{}
    for rows.Next() {
        var p Donor
        if err := rows.Scan(&p.Name, &p.Email, &p.Phone,&p.Password,&p.City,&p.Bloodtype); err != nil {
          fmt.Println(err)
            return nil
        }
        
        donors = append(donors, p)
         fmt.Println(donors)
    }
     fmt.Println(donors)

    return donors
}

//////////////////////////

func GetHospitals()[]Hospital{
  psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
    "dbname=%s sslmode=disable",
    host, port, user, dbname)


  db, err := sql.Open("postgres", psqlInfo)
  if err != nil {
    panic(err)
  }

  err = db.Ping()
  if err != nil {
    panic(err)
  }

  fmt.Println("Successfully connected!")

rows, err := db.Query("SELECT * FROM hospital")

    hospitals := []Hospital{}
    
    for rows.Next() {
        var p Hospital
        if err := rows.Scan(&p.Name, &p.Email, &p.Phone,&p.Password,&p.City); err != nil {
          fmt.Println(err)
            return nil
        }
        
        hospitals = append(hospitals, p)
         fmt.Println(hospitals)
    }
     fmt.Println(hospitals)

    return hospitals


}

func GetAllRequests()[]Don_Request{
  psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
    "dbname=%s sslmode=disable",
    host, port, user, dbname)


  db, err := sql.Open("postgres", psqlInfo)
  if err != nil {
    panic(err)
  }

  err = db.Ping()
  if err != nil {
    panic(err)
  }

  fmt.Println("Successfully connected!")

  

rows, err := db.Query("SELECT * FROM Don_Request")

    reqs := []Don_Request{}
    

    for rows.Next() {
        var p Don_Request
        if err := rows.Scan(&p.Email, &p.Category, &p.Bloodtype,&p.Disease,&p.State,&p.Reqdate); err != nil {
          fmt.Println(err)
            return nil
        }
        reqs = append(reqs, p)
         fmt.Println(reqs)
    }
     fmt.Println(reqs)

    return reqs


}

func GetAllRequests2()[]Don_Request2{
  psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
    "dbname=%s sslmode=disable",
    host, port, user, dbname)


  db, err := sql.Open("postgres", psqlInfo)
  if err != nil {
    panic(err)
  }

  err = db.Ping()
  if err != nil {
    panic(err)
  }

  fmt.Println("Successfully connected!")

  

rows, err := db.Query("SELECT * FROM Don_Request2")

    reqs := []Don_Request2{}
    

    for rows.Next() {
        var p Don_Request2
        if err := rows.Scan(&p.ID,&p.Email, &p.Category, &p.Bloodtype,&p.Disease,&p.State,&p.Reqdate); err != nil {
          fmt.Println(err)
            return nil
        }
        reqs = append(reqs, p)
         fmt.Println(reqs)
    }
     fmt.Println(reqs)

    return reqs


}
func GetRequests (ema string) []Don_Request2  {
  psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
    "dbname=%s sslmode=disable",
    host, port, user, dbname)


  db, err := sql.Open("postgres", psqlInfo)
  if err != nil {
    panic(err)
  }

  err = db.Ping()
  if err != nil {
    panic(err)
  }

  fmt.Println("Successfully connected!")

rows, err := db.Query("SELECT * FROM Don_Request2 WHERE email=$1",ema)

    reqs := []Don_Request2{}


    for rows.Next() {
        var p Don_Request2
        if err := rows.Scan(&p.ID,&p.Email, &p.Category, &p.Bloodtype,&p.Disease,&p.State,&p.Reqdate); err != nil {
          fmt.Println(err)
            return nil
        }
        
        reqs = append(reqs, p)
         fmt.Println(reqs)
    }
     fmt.Println(reqs)

    return reqs
}


//////////////////////////
//Second method:
/*
func GetUser (ema string) Users {
  psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
    "dbname=%s sslmode=disable",
    host, port, user, dbname)


  db, err := sql.Open("postgres", psqlInfo)
  if err != nil {  
    panic(err)
  }

  err = db.Ping()
  if err != nil {
    panic(err)
  }

  fmt.Println("Successfully connected!")





var user Users
// Replace 3 with an ID from your database or another random
// value to test the  no rows use case.
row := db.QueryRow("SELECT name,email,password,bloodtype,type FROM users WHERE email=$1", ema)
fmt.Println("row")
switch err := row.Scan(&user.Name,&user.Email,&user.Password,&user.Bloodtype,&user.Utype); err {
case sql.ErrNoRows:
  fmt.Println("No rows were returned!")
case nil:
  fmt.Println(user.Name,user.Email)
default:
  panic(err)
}
return  user
}


rows, err := db.Query("SELECT name, email, password FROM users WHERE email=$1;")

    users := []Users{}

    for rows.Next() {
        var p Users
        if err := rows.Scan(&p.Name, &p.Email, &p.Password); err != nil {
          fmt.Println(err)
            return nil
        }
        
        users = append(users, p)
         fmt.Println(users)
    }
     fmt.Println(users)

    return users
}
*/
//Third method:


func GetSpecDonor(ema string) []Donor{
    psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
    "dbname=%s sslmode=disable",
    host, port, user, dbname)


  db, err := sql.Open("postgres", psqlInfo)
  if err != nil {  
    panic(err)
  }

  err = db.Ping()
  if err != nil {
    panic(err)
  }

  fmt.Println("Successfully connected!")


  rows, err := db.Query("SELECT * FROM donor WHERE email = $1", ema)
  if err != nil {
    // handle this error better than this
    panic(err)
  }

   reqs := []Donor{}

    for rows.Next() {
        var p Donor
        if err := rows.Scan(&p.Name, &p.Email, &p.Phone,&p.Password,&p.City,&p.Bloodtype); err != nil {
          fmt.Println(err)
            return nil
        }
        
        reqs = append(reqs, p)
         fmt.Println(reqs)
    }
     fmt.Println(reqs)

    return reqs
}



func GetSpecHospital(ema string) []Hospital{
    psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
    "dbname=%s sslmode=disable",
    host, port, user, dbname)


  db, err := sql.Open("postgres", psqlInfo)
  if err != nil {  
    panic(err)
  }

  err = db.Ping()
  if err != nil {
    panic(err)
  }

  fmt.Println("Successfully connected!")


  rows, err := db.Query("SELECT * FROM hospital WHERE email = $1", ema)
  if err != nil {
    // handle this error better than this
    panic(err)
  }



   reqs := []Hospital{}

    for rows.Next() {
        var p Hospital
        if err := rows.Scan(&p.Name, &p.Email, &p.Phone,&p.Password,&p.City); err != nil {
          fmt.Println(err)
            return nil
        }
        
        reqs = append(reqs, p)
         fmt.Println(reqs)
    }
     fmt.Println(reqs)

    return reqs
}


func CreateDonor (name string,ema string,phon int,passwod string, cit string,bloodty string) {


//phon = parseInt(phon)
psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
    "dbname=%s sslmode=disable",
    host, port, user, dbname)


  db, err := sql.Open("postgres", psqlInfo)
  if err != nil {  
    panic(err)
  }

  err = db.Ping()
  if err != nil {
    panic(err)
  }

  fmt.Println("Successfully connected!") 
 // db.Query("insert into donor (name,email,phone,password,city,bloodtype) values($1, $2, $3, $4,$5,$6)",name,ema,phon,cit,bloodty);
  result, err := db.Exec("INSERT INTO donor (name,email,phone,password,city,bloodtype) VALUES ($1, $2, $3, $4,$5,$6)",name,ema,phon,passwod,cit,bloodty)
  fmt.Println(result)
  fmt.Println(err)
    }



func CreateRequest (ema string,cat string,blood string,dis string, state string,req string) {


//phon = parseInt(phon)
psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
    "dbname=%s sslmode=disable",
    host, port, user, dbname)


  db, err := sql.Open("postgres", psqlInfo)
  if err != nil {  
    panic(err)
  }

  err = db.Ping()
  if err != nil {
    panic(err)
  }

  fmt.Println("Successfully connected!") 
 // db.Query("insert into donor (name,email,phone,password,city,bloodtype) values($1, $2, $3, $4,$5,$6)",name,ema,phon,cit,bloodty);
  result, err := db.Exec("INSERT INTO Don_Request (email,category,bloodtype,disease,state,reqdate) VALUES ($1, $2, $3, $4,$5,$6)",ema,cat,blood,dis,state,req)
  fmt.Println(result)
  fmt.Println(err)
    }
func CreateRequest2 (ema string,cat string,blood string,dis string, state string,req string) {


//phon = parseInt(phon)
psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
    "dbname=%s sslmode=disable",
    host, port, user, dbname)


  db, err := sql.Open("postgres", psqlInfo)
  if err != nil {  
    panic(err)
  }

  err = db.Ping()
  if err != nil {
    panic(err)
  }

  fmt.Println("Successfully connected!") 
 // db.Query("insert into donor (name,email,phone,password,city,bloodtype) values($1, $2, $3, $4,$5,$6)",name,ema,phon,cit,bloodty);
  result, err := db.Exec("INSERT INTO Don_Request2 (email,category,bloodtype,disease,state,reqdate) VALUES ($1, $2, $3, $4,$5,$6)",ema,cat,blood,dis,state,req)
  fmt.Println(result)
  fmt.Println(err)
    }
func CreateHospital (name string,ema string,phon int,passwod string, cit string) {


//phon = parseInt(phon)
psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
    "dbname=%s sslmode=disable",
    host, port, user, dbname)


  db, err := sql.Open("postgres", psqlInfo)
  if err != nil {  
    panic(err)
  }

  err = db.Ping()
  if err != nil {
    panic(err)
  }

  fmt.Println("Successfully connected!") 
 // db.Query("insert into donor (name,email,phone,password,city,bloodtype) values($1, $2, $3, $4,$5,$6)",name,ema,phon,cit,bloodty);
  result, err := db.Exec("INSERT INTO hospital (name,email,phone,password,city) VALUES ($1, $2, $3, $4,$5)",name,ema,phon,passwod,cit)
  fmt.Println(result)
  fmt.Println(err)
    }
  //db, err := sql.Open("postgres", psqlInfo)
  //if err != nil {
  //  panic(err)
 // }
//
 // err = db.Ping()
  //if err != nil {
    //panic(err)
  //}

  /*fmt.Println("Successfully connected!")


 sqlStatement := `
INSERT INTO users (name, email, password, bloodtype,type)
VALUES ($1, $2, $3, $4,$5)`
_, err = db.Exec(sqlStatement, name,ema,passw,bloodty,bloodty,typ)
if err != nil {
  panic(err)
}}*/

func UpdateDonor(name string,ema string,phon int,passwod string, cit string,bloodty string){
psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
    "dbname=%s sslmode=disable",
    host, port, user, dbname)


  db, err := sql.Open("postgres", psqlInfo)
  if err != nil {  
    panic(err)
  }

  err = db.Ping()
  if err != nil {
    panic(err)
  }

  fmt.Println("Successfully connected!") 
 // db.Query("insert into donor (name,email,phone,password,city,bloodtype) values($1, $2, $3, $4,$5,$6)",name,ema,phon,cit,bloodty);

  result, err := db.Exec("UPDATE donor SET name=$2,phone=$3,password=$4,city=$5,bloodtype=$6 WHERE email = $1",ema,name,phon,passwod,cit,bloodty)
  fmt.Println(result)
  fmt.Println(err)
    



}

func UpdateHospital(name string,ema string,phon int,passwod string, cit string){
psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
    "dbname=%s sslmode=disable",
    host, port, user, dbname)


  db, err := sql.Open("postgres", psqlInfo)
  if err != nil {  
    panic(err)
  }

  err = db.Ping()
  if err != nil {
    panic(err)
  }

  fmt.Println("Successfully connected!") 
 // db.Query("insert into donor (name,email,phone,password,city,bloodtype) values($1, $2, $3, $4,$5,$6)",name,ema,phon,cit,bloodty);

  result, err := db.Exec("UPDATE hospital SET name=$2,phone=$3,password=$4,city=$5 WHERE email = $1",ema,name,phon,passwod,cit)
  fmt.Println(result)
  fmt.Println(err)
    



}

func DeleteDonor(ema string){

  psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
    "dbname=%s sslmode=disable",
    host, port, user, dbname)


  db, err := sql.Open("postgres", psqlInfo)
  if err != nil {
    panic(err)
  }

  err = db.Ping()
  if err != nil {
    panic(err)
  }

  fmt.Println("Successfully connected!")

sqlStatement := `
DELETE FROM donor
WHERE email = $1;`
_, err = db.Exec(sqlStatement, ema)
if err != nil {
  panic(err)
}


}


func DeleteRequest(ema int64){

  psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
    "dbname=%s sslmode=disable",
    host, port, user, dbname)


  db, err := sql.Open("postgres", psqlInfo)
  if err != nil {
    panic(err)
  }

  err = db.Ping()
  if err != nil {
    panic(err)
  }

  fmt.Println("Successfully connected!")

sqlStatement := `
DELETE FROM Don_Request2
WHERE ID = $1;`
_, err = db.Exec(sqlStatement, ema)
if err != nil {
  panic(err)
}


}

