---
title: Payments API
sidebar_position: 4
---

## GET `/v1/payments`

Get payments.

### Parameters

_No parameters_

### Responses

#### 200 - Successful response

```json
{
  "id": "string",
  "name": "string",
  "type": "string"
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