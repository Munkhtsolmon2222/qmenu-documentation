---
title: API Models
sidebar_position: 9
---

# API Models

This section describes the data models (schemas) used in the QMenu API. Click on a model name below to view its details.

## Error

Represents an error response from the API.

| Field   | Type   | Description                                   | Example         |
|---------|--------|-----------------------------------------------|-----------------|
| code    | string | Error code (see below for possible values)    | `C0002`         |
| message | string | Human-readable error message                  | `Invalid token` |

**Possible Error Codes:**
- `C0000` - Success
- `C0001` - Bad request
- `C0002` - Invalid credentials
- ...

**Example:**
```json
{
  "code": "C0002",
  "message": "Invalid token"
}
```

## Token

Represents an authorization token.

| Field | Type   | Description           | Example         |
|-------|--------|-----------------------|-----------------|
| token | string | Authorization token   | `eyJhbGciOi...` |

**Example:**
```json
{
  "token": "eyJhbGciOi..."
}
```

## Menu

Represents a menu, which contains a list of categories.

| Field      | Type     | Description                |
|------------|----------|----------------------------|
| name       | string   | Menu name                  |
| categories | array    | List of categories in menu |

## Category

Represents a category within a menu, which can contain subcategories and products.

| Field     | Type     | Description                        |
|-----------|----------|------------------------------------|
| id        | string   | Category ID                        |
| icon      | string   | Category icon                      |
| name      | string   | Category name                      |
| photo     | string   | Category photo URL                 |
| children  | array    | List of subcategories (Category)    |
| products  | array    | List of products in this category   |

## Product

Represents a product (menu item).

| Field         | Type     | Description                                 |
|---------------|----------|---------------------------------------------|
| name          | string   | Product name                                |
| description   | string   | Product description                         |
| specification | string   | Product specification                       |
| image         | string   | Product image URL                           |
| category      | string   | Category ID                                 |
| bonus         | string   | Bonus name                                  |
| state         | string   | Product state                               |
| withNote      | boolean  | True if product can have a note             |
| variants      | array    | List of variants for this product           |

## Variant

Represents a product variant (e.g., size, flavor).

| Field    | Type     | Description                |
|----------|----------|----------------------------|
| id       | string   | Variant ID                 |
| name     | string   | Variant name               |
| price    | number   | Variant price              |
| salePrice| number   | Variant sale price         |
| state    | string   | Variant state              |
| code     | string   | Variant code               |
| barCode  | string   | Variant barcode            |
| options  | array    | List of options for variant|

## Option

Represents an option for a variant (e.g., add-ons, choices).

| Field   | Type     | Description                |
|---------|----------|----------------------------|
| id      | string   | Option ID                  |
| name    | string   | Option name                |
| type    | string   | Option type                |
| price   | number   | Option price               |
| state   | string   | Option state               |
| values  | array    | List of possible values    |

## Order

Represents an order placed by a customer.

| Field           | Type     | Description                                   |
|-----------------|----------|-----------------------------------------------|
| id              | string   | Order ID                                      |
| date            | string   | Order date                                    |
| number          | string   | Order number                                  |
| state           | string   | Order status (NEW, ACCEPTED, etc.)            |
| paymentState    | string   | Payment state (UNPAID, PAID, PARTIAL)         |
| address         | string   | Delivery address                              |
| floor           | number   | Floor number                                  |
| register        | string   | Register ID                                   |
| buyer           | string   | Buyer name                                    |
| contact         | string   | Contact info                                  |
| comment         | string   | Order comment                                 |
| deliveryDate    | string   | Delivery date                                 |
| totalAmount     | number   | Total amount                                  |
| discountAmount  | number   | Discount amount                               |
| taxAmount       | number   | Tax amount                                    |
| cityTax         | string   | City tax                                      |
| grandTotal      | number   | Grand total                                   |
| penaltyAmount   | number   | Penalty amount                                |
| loyaltyAmount   | number   | Loyalty amount                                |
| loyaltyBalance  | number   | Loyalty balance                               |
| vatAmount       | number   | VAT amount                                    |
| vatExcludeAmount| number   | VAT excluded amount                           |
| vatIncludeAmount| number   | VAT included amount                           |
| vatType         | string   | VAT type (0: No VAT, 1: Citizen, 3: Org)      |
| vatBillId       | string   | VAT bill ID                                   |
| createdAt       | string   | Created at                                    |
| updatedAt       | string   | Updated at                                    |
| orderedAt       | string   | Ordered at                                    |
| acceptedAt      | string   | Accepted at                                   |
| preparingAt     | string   | Preparing at                                  |
| preparedAt      | string   | Prepared at                                   |
| deliveringAt    | string   | Delivering at                                 |
| deliveredAt     | string   | Delivered at                                  |
| completedAt     | string   | Completed at                                  |
| reviewed        | boolean  | Whether the order is reviewed                 |
| items           | array    | List of order items                           |
| charges         | array    | List of order charges                         |
| discounts       | array    | List of order discounts                       |
| transactions    | array    | List of order transactions                    |

## OrderItem

Represents an item in an order.

| Field       | Type     | Description                |
|-------------|----------|----------------------------|
| id          | string   | Order item ID              |
| name        | string   | Item name                  |
| variantName | string   | Variant name               |
| code        | string   | Item code                  |
| barCode     | string   | Item barcode               |
| image       | string   | Item image                 |
| state       | string   | Item state                 |
| price       | number   | Item price                 |
| quantity    | number   | Quantity                   |
| comment     | string   | Comment                    |
| options     | array    | List of item options       |

## OrderItemOption

Represents an option for an order item.

| Field   | Type     | Description                |
|---------|----------|----------------------------|
| id      | string   | Option ID                  |
| name    | string   | Option name                |
| price   | number   | Option price               |
| value   | string   | Option value               |

## OrderDiscount

Represents a discount applied to an order.

| Field   | Type     | Description                |
|---------|----------|----------------------------|
| id      | string   | Discount ID                |
| name    | string   | Discount name              |
| amount  | number   | Discount amount            |

## OrderCharge

Represents a charge applied to an order.

| Field   | Type     | Description                |
|---------|----------|----------------------------|
| id      | string   | Charge ID                  |
| name    | string   | Charge name                |
| amount  | number   | Charge amount              |

## OrderReview

Represents a review for an order.

| Field      | Type     | Description                |
|------------|----------|----------------------------|
| id         | string   | Review ID                  |
| type       | string   | Review type (S: Service, D: Delivery) |
| liked      | number   | Liked rating               |
| comment    | string   | Review comment             |
| additional | string   | Additional comments        |
| pictures   | array    | List of review pictures    |
| uploads    | array    | List of review uploads     |
| createdAt  | string   | Created at                 |
| updatedAt  | string   | Updated at                 |

## OrderInput

Represents the input for creating an order.

| Field        | Type     | Description                |
|--------------|----------|----------------------------|
| type         | string   | Order type (Dining, Delivery, etc.) |
| items        | array    | List of order items        |
| address      | string   | Address                    |
| contact      | string   | Contact                    |
| comment      | string   | Comment                    |
| deliveryDate | string   | Delivery date              |

## OrderItemInput

Represents the input for an order item.

| Field    | Type     | Description                |
|----------|----------|----------------------------|
| id       | string   | Variant ID                 |
| quantity | number   | Quantity                   |
| comment  | string   | Comment                    |
| options  | array    | List of item options       |

## OrderItemOptionInput

Represents the input for an order item option.

| Field | Type   | Description                |
|-------|--------|----------------------------|
| id    | string | Option ID                  |
| value | string | Option value               |

## Payment

Represents a payment method.

| Field | Type   | Description                |
|-------|--------|----------------------------|
| id    | string | Payment ID                 |
| name  | string | Payment name               |
| type  | string | Payment type               |

## PaymentInput

Represents the input for a payment.

| Field   | Type     | Description                |
|---------|----------|----------------------------|
| payment | string   | Payment ID                 |
| amount  | number   | Payment amount             |
| vatType | string   | VAT type                   |
| register| string   | Organization registration number |
| buyer   | string   | Organization name          |
| code    | string   | Payment code               |

## Transaction

Represents a transaction.

| Field      | Type     | Description                |
|------------|----------|----------------------------|
| id         | string   | Transaction ID             |
| type       | string   | Payment type               |
| state      | string   | Transaction state          |
| amount     | number   | Transaction amount         |
| currency   | string   | Transaction currency       |
| description| string   | Transaction description    |
| links      | array    | List of transaction links  |
| createdAt  | string   | Created at                 |
| updatedAt  | string   | Updated at                 |

## TransactionLink

Represents a link related to a transaction.

| Field       | Type   | Description                |
|-------------|--------|----------------------------|
| name        | string | Link name                  |
| description | string | Link description           |
| logo        | string | Link logo URL              |
| url         | string | Link URL                   |

## Kitchen

Represents a kitchen.

| Field | Type   | Description                |
|-------|--------|----------------------------|
| id    | string | Kitchen ID                 |
| name  | string | Kitchen name               |

## Task

Represents a task in the system.

| Field      | Type     | Description                |
|------------|----------|----------------------------|
| id         | string   | Task ID                    |
| date       | string   | Task date                  |
| state      | string   | Task state (PENDING, ONGOING, READY, COMPLETED, CANCELLED) |
| kitchenId  | string   | Kitchen ID                 |
| orderNo    | string   | Order number               |
| orderType  | string   | Order type                 |
| table      | string   | Table ID                   |
| items      | array    | List of task items         |
| createdAt  | string   | Created at                 |
| updatedAt  | string   | Updated at                 |
| startedAt  | string   | Started at                 |
| endedAt    | string   | Ended at                   |

## TaskItem

Represents an item in a task.

| Field    | Type     | Description                |
|----------|----------|----------------------------|
| id       | string   | Task item ID               |
| name     | string   | Task item name             |
| quantity | number   | Quantity                   |
| state    | string   | Task item state            |
| comment  | string   | Comment                    |
| startedAt| string   | Started at                 |
| endedAt  | string   | Ended at                   |
| options  | array    | List of task item options  |

## TaskItemOption

Represents an option for a task item.

| Field | Type   | Description                |
|-------|--------|----------------------------|
| id    | string | Option ID                  |
| name  | string | Option name                |
| value | string | Option value               |

## Table

Represents a table in the restaurant.

| Field | Type   | Description                |
|-------|--------|----------------------------|
| id    | string | Table ID                   |
| name  | string | Table name                 |

