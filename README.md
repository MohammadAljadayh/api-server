# basic-api-server

## LAB -03

### Deployment Test

- [ci/cd GitHub Actions]().
- [herokuapp Link Main ]().
- [pull request]().
- [Main Repo link]().

## Setup 

`.env` **requirements**

- `PORT` - 3000

- `POSTGRES_URI` = Postgres DB

**Running the app**

- `npm start` , `nodemon` 

- Endpoint: `/food/1`

  - Returns Object

        {
        "foodName": "mansaf",
        "country" : "jordan" 
        }

- Endpoint: `/clothes/1`

  - Returns Object

        {
  clothesName: "addidas",
    color: "red",
  };
        }


**Tests**

- Unit Tests: `npm run test`

---------------------------------------------------------
UML : 

![UML](uml.PNG)

