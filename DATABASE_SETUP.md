# Database Setup for Kafe Kopi Kita Website

## Overview
This website now includes database functionality for:
- Reservation system (existing)
- Contact form submissions (new feature)

## Database Tables

### 1. Reservations Table
- Stores reservation details from the reservation page
- Fields: id, name, email, phone, reservation_date, reservation_time, num_guests, special_requests, created_at

### 2. Contacts Table (NEW)
- Stores contact form submissions from the contact page
- Fields: id, name, email, message, created_at

## Setup Options

### Option 1: Using SQL File (Recommended)
1. Import the `setup_database.sql` file into your MySQL database
2. Update your `php/config.php` file with correct database credentials

### Option 2: Using PHP Script
1. Ensure your `php/config.php` file has correct database credentials
2. Run `php/php/init_db.php` to create both tables

## Database Configuration
Make sure your `php/config.php` file contains the correct database connection details:

```php
<?php
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
```

## Features Added

### 1. Contact Form Database Integration
- Contact form submissions are now stored in the database
- Implemented with proper validation and security measures
- Handles POST requests from the contact page

### 2. Overscroll Bounce Animation
- Added touch-based overscroll bounce effect for mobile users
- Provides visual feedback when scrolling beyond page boundaries
- Works on both top and bottom of the page

### 3. Updated JavaScript
- Contact form handling on contact.html page
- Overscroll bounce effect with CSS transitions
- Maintains all existing functionality

## Files Modified/Added
- `php/init_db.php` - Updated to include contacts table
- `php/contact.php` - New file to handle contact form submissions
- `js/script.js` - Added contact form handling and overscroll bounce
- `css/style.css` - Added overscroll bounce CSS class
- `setup_database.sql` - SQL file for database setup
- `DATABASE_SETUP.md` - This documentation