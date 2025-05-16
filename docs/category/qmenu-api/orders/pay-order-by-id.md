---
title: Pay Order by ID
---

## POST `/v1/orders/{id}/pay`

Pay order.

### Parameters

| Name | In   | Type   | Required | Description   |
|------|------|--------|----------|---------------|
| id   | path | string | Yes      | Order ID      |
| body | body | object | Yes      | Body required in the request |

#### Example Request Body

```json
{
  "payment": "string",
  "amount": "string",
  "paymentType": "string",
  "method": "string",
  "code": "string"
}
```

### Responses

#### 200 - Successful response

```json
{
  "id": "string",
  "date": "string",
  "number": "string",
  "state": "string",
  "paymentState": "string",
  "address": "string",
  "floor": 0,
  "register": "string",
  "buyer": "string",
  "contact": "string",
  "comment": "string",
  "deliveryDate": "string",
  "totalAmount": 0,
  "discountAmount": 0,
  "taxAmount": 0,
  "cityTax": "string",
  "grandTotal": 0,
  "penaltyAmount": 0,
  "loyaltyAmount": 0,
  "loyaltyBalance": 0,
  "vatAmount": 0,
  "vatExcludeAmount": 0,
  "vatIncludeAmount": 0,
  "vatType": "string",
  "vatBillId": "string",
  "createdAt": "string",
  "updatedAt": "string",
  "orderedAt": "string",
  "acceptedAt": "string",
  "preparingAt": "string",
  "preparedAt": "string",
  "deliveringAt": "string",
  "deliveredAt": "string",
  "completedAt": "string",
  "reviewed": true,
  "items": [
    {
      "id": "string",
      "name": "string",
      "variantName": "string",
      "code": "string",
      "barCode": "string",
      "image": "string",
      "state": "string",
      "price": 0,
      "quantity": 0,
      "comment": "string",
      "options": [
        {
          "id": "string",
          "name": "string",
          "price": 0,
          "value": "string"
        }
      ]
    }
  ],
  "charges": [
    {
      "id": "string",
      "name": "string",
      "amount": 0
    }
  ],
  "discounts": [
    {
      "id": "string",
      "name": "string",
      "amount": 0
    }
  ],
  "transactions": [
    {
      "id": "string",
      "type": "string",
      "state": "string",
      "amount": 0,
      "currency": "string",
      "description": "string",
      "links": [
        {
          "name": "string",
          "description": "string",
          "logo": "string",
          "url": "string"
        }
      ],
      "createdAt": "string",
      "updatedAt": "string"
    }
  ]
}
```

#### 400 - Bad request

```json
{
  "code": "string",
  "message": "string"
}
```

#### 401 - Unauthorized

```json
{
  "code": "string",
  "message": "string"
}
```

#### 403 - Forbidden

```json
{
  "code": "string",
  "message": "string"
}
```

#### 500 - Internal server error

```json
{
  "code": "string",
  "message": "string"
}
``` 