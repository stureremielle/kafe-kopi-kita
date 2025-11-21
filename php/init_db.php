<?php
include 'config.php';

// SQL to create table
$sql = "CREATE TABLE IF NOT EXISTS reservations (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    reservation_date DATE NOT NULL,
    reservation_time TIME NOT NULL,
    num_guests INT(3) NOT NULL,
    special_requests TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Table reservations created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>