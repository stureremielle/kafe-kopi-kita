-- SQL Database Setup for Kafe Kopi Kita Website
-- This file contains the SQL commands to create the necessary tables

-- Create reservations table
CREATE TABLE IF NOT EXISTS reservations (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    reservation_date DATE NOT NULL,
    reservation_time TIME NOT NULL,
    num_guests INT(3) NOT NULL,
    special_requests TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample reservation data (optional)
INSERT INTO reservations (name, email, phone, reservation_date, reservation_time, num_guests, special_requests) VALUES
('John Doe', 'john@example.com', '1234567890', '2024-01-15', '18:00:00', 2, 'Window seat preferred'),
('Jane Smith', 'jane@example.com', '0987654321', '2024-01-16', '19:30:00', 4, 'Birthday celebration');

-- Insert sample contact data (optional)
INSERT INTO contacts (name, email, message) VALUES
('John Doe', 'john@example.com', 'I would like to know more about your coffee selection.'),
('Jane Smith', 'jane@example.com', 'Can you provide catering services for our office meeting?');