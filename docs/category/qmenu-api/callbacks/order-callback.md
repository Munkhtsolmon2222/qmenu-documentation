---
title: Order State Callback
---

## POST `/callback-path/orders`

The OrderStateChangeCallback function is responsible for handling and processing the callback triggered when the state of an order changes. It receives the updated order information as a parameter and performs any necessary actions or updates based on the new state of the order. This function serves as a notification mechanism to respond to order state changes in real-time.

### Parameters

_No parameters_

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