# Expense Management API

This is a simple Expense Management API built with Express.js. It allows users to add, retrieve, and analyze expenses, as well as manage a list of names and religions.

## Features

1. **Add Expense**: Allows users to add new expenses.
2. **Get Expenses**: Retrieve all expenses, with optional filtering by category and date range.
3. **Analyze Spending**: Analyze expenses to find the highest spending category or monthly totals.
4. **Add Names**: Allows users to add names along with their religion.
5. **View Names**: Retrieve the list of added names and their religions.

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```bash
    cd <project-directory>
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```
2. The server will run on `http://localhost:3000`.

## API Endpoints

### Expenses Endpoints

- **POST `/expenses`**
  - Add a new expense.
  - Request Body:
    ```json
    {
      "category": "string",
      "amount": "number",
      "date": "string (YYYY-MM-DD)"
    }
    ```

- **GET `/expenses`**
  - Retrieve all expenses with optional filtering by category and date range.
  - Query Parameters:
    - `category`: Filter by category.
    - `start`: Start date for filtering.
    - `end`: End date for filtering.

- **GET `/expenses/analysis`**
  - Analyze expenses.
  - Query Parameters:
    - `type`: `highest-category` or `monthly-total`.

### Names Endpoints

- **POST `/addnames`**
  - Add a new name with religion.
  - Request Body:
    ```json
    {
      "name": "string",
      "religion": "string"
    }
    ```

- **GET `/viewnames`**
  - Retrieve all added names and religions.

### Root Endpoint

- **GET `/`**
  - Greets the user with a customizable message based on the query parameter `name`.
  - Query Parameters:
    - `name`: Custom name to personalize the greeting.

## Example Requests

1. **Add Expense**:
    ```bash
    curl -X POST http://localhost:3000/expenses -H "Content-Type: application/json" -d '{"category": "Food", "amount": 50, "date": "2025-01-01"}'
    ```

2. **Get Expenses**:
    ```bash
    curl -X GET http://localhost:3000/expenses
    ```

3. **Analyze Spending**:
    ```bash
    curl -X GET "http://localhost:3000/expenses/analysis?type=highest-category"
    ```

4. **Add Name**:
    ```bash
    curl -X POST http://localhost:3000/addnames -H "Content-Type: application/json" -d '{"name": "John Doe", "religion": "Christianity"}'
    ```

5. **View Names**:
    ```bash
    curl -X GET http://localhost:3000/viewnames
    ```

## License

This project is licensed under the MIT License.
