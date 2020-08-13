# Overview 
This is my repository which offers the backend system of my expense manager.

# API Endpoints

## Transaction List
/transactions

### GET
Get a list of transactions.

#### Response
```json
{
    "transactions": [
      ...same as transaction detail
    ]
}
```

### POST
Add new transaction
#### Request
```json

```
#### Response

## Transaction Detail
/transactions/:transaction_id

### GET
Get single transaction

### PUT
Update single transaction

## Account List 
/accounts

### GET

## Acount Detail
### GET
Get a list of accounts

## Error Response 
```json
{
  "status": 400,
  "message": "Bad Request",
  "errors": [
    "Account Id cannot be empty",
  ],
}
```
# Database

![alt text](./er-diagram.jpg "ER Diagram")