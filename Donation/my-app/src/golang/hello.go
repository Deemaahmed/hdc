package main

import (
  "database/sql"
  "fmt"

  _ "github.com/lib/pq"
)

const (
  host     = "localhost"
  port     = 5432
  user     = "deemaahmed"
  password = "123"
  dbname   = "userinfo"
)


func main() {
  psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
    "password=%s dbname=%s sslmode=disable",
    host, port, user, password, dbname)
  db, err := sql.Open("postgres", psqlInfo)
  if err != nil {
    panic(err)
  }
  defer db.Close()

  err = db.Ping()
  if err != nil {
    panic(err)
  }

  fmt.Println("Successfully connected!")




sqlStatement := `
DELETE FROM users
WHERE email = $1;`
_, err = db.Exec(sqlStatement, "Deema.a3a@gmail.com")
if err != nil {
  panic(err)
}

}