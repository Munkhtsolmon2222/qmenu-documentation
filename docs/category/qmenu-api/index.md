---
sidebar_position: 1
---

# QMenu API Documentation

Welcome to the QMenu API documentation. This section provides detailed information about the QMenu API endpoints, authentication, and usage examples.

## Getting Started

To get started with the QMenu API, you'll need:

1. A QMenu account
2. API credentials (API key and secret)
3. Basic understanding of REST APIs

## API Overview

The QMenu API provides endpoints for:

- Menu Management
- Order Processing
- Table Management
- User Management
- Reports and Analytics

## Authentication

All API requests require authentication using your API credentials. Include your API key in the request headers:

```bash
Authorization: Bearer YOUR_API_KEY
```

## Base URL

All API endpoints are relative to the base URL:

```
https://api.qmenu.mn/v1
```

## Rate Limiting

The API implements rate limiting to ensure fair usage. The current limits are:

- 100 requests per minute per API key
- 1000 requests per hour per API key

## Error Handling

The API uses standard HTTP status codes to indicate the success or failure of requests. Error responses include a JSON object with details about the error.

## Support

If you need help with the API, please contact our support team at support@qmenu.mn. 