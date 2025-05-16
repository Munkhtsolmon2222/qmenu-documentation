---
title: Get Orders
---

## GET `/v1/orders`

Get orders by customer.

### Parameters

| Name   | In    | Type    | Required | Description                                                                 |
|--------|-------|---------|----------|-----------------------------------------------------------------------------|
| state  | query | string  | No       | Order state (NEW, ACCEPTED, PREPARING, PREPARED, DELIVERING, DELIVERED, COMPLETED, CANCELLED) |
| from   | query | string  | No       | From date. Default: current date. Format: YYYY-MM-DD                        |
| to     | query | string  | No       | To date. Default: current date. Format: YYYY-MM-DD                          |
| offset | query | integer | No       | Offset. Default: 0                                                          |
| limit  | query | integer | No       | Records limit. Default: 10                                                  |

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