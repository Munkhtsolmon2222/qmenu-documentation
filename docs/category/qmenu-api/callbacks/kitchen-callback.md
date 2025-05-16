---
title: Kitchen State Callback
---

## POST `/callback-path/kitchens`

The KitchenStateChangeCallback function is responsible for handling and processing the callback triggered when the state of a kitchen task changes. It receives the updated kitchen information as a parameter and performs any necessary actions or updates based on the new state of the kitchen. This function serves as a notification mechanism to respond to kitchen state changes in real-time.

### Parameters

_No parameters_

### Responses

#### 200 - Successful response

```json
{
  "id": "string",
  "date": "string",
  "state": "string",
  "kitchenId": "string",
  "orderNo": "string",
  "orderType": "string",
  "table": {
    "id": "string",
    "name": "string"
  },
  "items": [
    {
      "id": "string",
      "name": "string",
      "quantity": 0,
      "state": "string",
      "comment": "string",
      "startedAt": "string",
      "endedAt": "string",
      "options": [
        {
          "id": "string",
          "name": "string",
          "value": "string"
        }
      ]
    }
  ],
  "createdAt": "string",
  "updatedAt": "string",
  "startedAt": "string",
  "endedAt": "string"
}
``` 