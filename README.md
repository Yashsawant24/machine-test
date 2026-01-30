# Machine Test Application

This project is a machine test implementation using **Node.js**, **Angular**, and **MySQL (RDBMS)**.

It includes Category and Product management with a proper relational design and server-side pagination.

---

## Tech Stack

- Frontend: Angular
- Backend: Node.js + Express
- Database: MySQL
- ORM: Sequelize
- Tools: VS Code, GitHub

---

##  Features

### 1. Category Master
- Add Category
- View Category List
- Delete Category

### 2. Product Master
- Add Product
- View Product List
- Product belongs to a Category
- Displays:
  - ProductId
  - ProductName
  - CategoryId
  - CategoryName

### 3. Server-Side Pagination
- Pagination implemented at backend level
- Records are fetched from database using `LIMIT` and `OFFSET`
- Example:
  - Page size = 10
  - Page = 9
  - Records fetched = 81–90

---

## 🗂 Project Structure

