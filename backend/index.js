const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 2001;
app.use(cors()); 
// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'hunza123',
  database: 'userMessages',
});

// Create a promise pool from the connection pool
const promisePool = pool.promise();

// Middleware to parse JSON
app.use(express.json());

// Endpoint to handle message storage
app.post('/message', async (req, res) => {
  try {
    const { messageOne, messageTwo } = req.body;

    // Use the promise pool to execute SQL queries
    const [result] = await promisePool.query(
      'INSERT INTO messages (message_one, message_two) VALUES (?, ?)',
      [messageOne, messageTwo]
    );

    console.log('Message stored successfully:', result);

    res.json({ status: 'Message received successfully', messageOne, messageTwo });
  } catch (error) {
    console.error('Error storing message:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
