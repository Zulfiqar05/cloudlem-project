-- Create a new database
CREATE DATABASE userMessages;

-- Connect to the new database
USE your_database_name;

-- Create a table to store messages
CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    message_one VARCHAR(255),
    message_two VARCHAR(255)
);
