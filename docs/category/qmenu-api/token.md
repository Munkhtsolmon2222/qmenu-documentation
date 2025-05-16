---
title: Token API
sidebar_position: 2
---

## POST `/v1/token`

Get access token.

### Parameters

| Name          | In     | Type   | Required | Description                 |
|---------------|--------|--------|----------|-----------------------------|
| grant_type    | query  | string | Yes      | Default: client_credentials |
| client_id     | query  | string | Yes      | Client ID                   |
| client_secret | query  | string | Yes      | Client Secret               |
| code          | query  | string | No       | Authorization code          |

### Responses

#### 200 - Successful response

```json
{
  "token": "string"
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

#### 500 - Internal server error

```json
{
  "code": "string",
  "message": "string"
}
``` 