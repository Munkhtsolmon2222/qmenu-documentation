---
title: Menu
sidebar_position: 5
---

## GET `/v1/menu`

Get menu.

### Parameters

_No parameters_

### Responses

#### 200 - Successful response 
Example Value:

```json
{
  "name": "string",
  "categories": [
    {
      "id": "string",
      "icon": "string",
      "name": "string",
      "photo": "string",
      "children": [
        "string"
      ],
      "products": [
        {
          "name": "string",
          "description": "string",
          "specification": "string",
          "image": "string",
          "category": "string",
          "bonus": "string",
          "state": "string",
          "withNote": true,
          "variants": [
            {
              "id": "string",
              "name": "string",
              "price": 0,
              "salePrice": 0,
              "state": "string",
              "code": "string",
              "barCode": "string",
              "options": [
                {
                  "id": "string",
                  "name": "string",
                  "type": "string",
                  "price": 0,
                  "state": "string",
                  "values": [
                    "string"
                  ]
                }
              ]
            }
          ]
        }
      ]
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