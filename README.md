# 📝 BUILDING A REST API 📝 

🔺 I use:

- Framework: [Hapi](https://hapijs.com/) | For to create a server
- Library: [Mongoose](http://mongoosejs.com/) | For to work with MongoDB

🔺 About server:

- Host: localhost
- Port: 8000

🔺 U should:

- Clone this repo: `git clone https://github.com/teffcode/WebDevTest_RestAPI_ISF.git`
- Install dependencies: `npm i`
- Server run: `npm run start`

# 🤔 AND THE ENDPOINTS ? 🤔

Well, check how you can use:

## 👤 **PROVIDERS:** Create

| CREATE        | This service allow us to create a provider into the database | 
| :------------- |:-------------| 
| HTTP Method   | POST | 
| Endpoint      | /provider    |   
| Body          | ⬇️ |

```
{
	"firstName": "Estefany",
	"lastName": "Aguilar",
	"middleName": "A",
	"email": "estefanyaguilar.r@gmail.com",
	"specialtyId": "59b84f14cab3a5b9d262979d",
	"specialtyName": "Developer",
	"specialtyCreatedBy": 78609,
	"projectedStartDate": 1505618753000,
	"employerId": 666,
	"providerType": "DO",
	"staffStatus": "ACTIVE",
	"assignedTo": 8071,
	"status": "APPROVED",
	"createdBy": 21560
}
```

## 👤 **PROVIDERS:** Read

| READ        | This service allow us to read a provider based on diferents types of criteria. You can search a provider based on your firstName, email, assignedTo or status | 
| :------------- |:-------------| 
| HTTP Method   | GET | 
| Endpoint      | /provider |   
| Query          | `http://localhost:8000/providers?email=test@test.com&&limit=1` is an example |

## 👤 **PROVIDERS:** Update

| UPDATE        | This service allow us to update a provider into the database | 
| :------------- |:-------------| 
| HTTP Method   | PUT | 
| Endpoint      | /provider/{providerId} |   
| Body          | ⬇️ |

```
{
	"status": "DENIED"
}
```

## 👤 **PROVIDERS:** Delete

| DELETE        | This service allow us to delete a provider based on provider Id | 
| :------------- |:-------------| 
| HTTP Method   | DELETE | 
| Endpoint      | /provider/{providerId} |   
| Param          | `http://localhost:8000/providers/59b84f14cab3a5b9d262979d` is an example |

## 🏅 **SPECIALTIES:** Create

| CREATE        | This service allow us to create specialties into the database | 
| :------------- |:-------------| 
| HTTP Method   | POST | 
| Endpoint      | /specialties |   
| Body          | ⬇️ |

```
{
	"name": "Estefany",
	"createdBy": 21560
}
```

## 🏅 **SPECIALTIES:** Read

| READ        | This service allow us to read specialties based on diferents types of criteria. You can search a specialties based on your name or createdBy | 
| :------------- |:-------------| 
| HTTP Method   | GET | 
| Endpoint      | /specialties |   
| Query          | `http://localhost:8000/specialties?name=Estefany&&limit=1` is an example |

## 🏅 **SPECIALTIES:** Update

| UPDATE        | This service allow us to update specialties into the database | 
| :------------- |:-------------| 
| HTTP Method   | PUT | 
| Endpoint      | /specialties/{specialtiesId} |   
| Body          | ⬇️ |

```
{
	"status": "DENIED"
}
```

## 🏅 **SPECIALTIES:** Delete

| DELETE        | This service allow us to delete specialties based on specialty id| 
| :------------- |:-------------| 
| HTTP Method   | DELETE | 
| Endpoint      | /specialties/{specialtiesId} |   
| Param          | `http://localhost:8000/specialties/59b84f14cab3a5b9d262979d` is an example |
