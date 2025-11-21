# XAMPP Setup Guide for Cafe Website

This guide explains how to set up the MySQL database using XAMPP for the cafe reservation system.

## Prerequisites

- XAMPP installed on your system (https://www.apachefriends.org/)

## Setup Steps

### 1. Start XAMPP Services
1. Open XAMPP Control Panel
2. Start Apache and MySQL services

### 2. Create the Database
1. Open your browser and go to `http://localhost/phpmyadmin`
2. Click on "Database" tab
3. Enter database name as `cafe_db` and click "Create"

### 3. Alternative: Run Initialization Script
1. Place all website files in `xampp/htdocs/` folder
2. Access the initialization script via browser: `http://localhost/your-folder-name/php/init_db.php`
3. This will create the `cafe_db` database and `reservations` table automatically

### 4. Database Configuration
The configuration is already set in `/php/config.php`:
```php
$servername = "localhost";
$username = "root";  // Default XAMPP username
$password = "";      // Default XAMPP password is empty
$dbname = "cafe_db";
```

## Database Schema

The system creates a `reservations` table with the following structure:

- `id` - INT(6), UNSIGNED, AUTO_INCREMENT, PRIMARY KEY
- `name` - VARCHAR(100), NOT NULL
- `email` - VARCHAR(100), NOT NULL
- `phone` - VARCHAR(20), NOT NULL
- `reservation_date` - DATE, NOT NULL
- `reservation_time` - TIME, NOT NULL
- `num_guests` - INT(3), NOT NULL
- `special_requests` - TEXT
- `created_at` - TIMESTAMP, DEFAULT CURRENT_TIMESTAMP

## Usage

Once the database is set up:
1. The reservation form will store data in the MySQL database
2. Retrieved reservations will be displayed on the reservation page
3. All data persists between sessions in the database

## Troubleshooting

If you encounter connection issues:
1. Verify MySQL service is running in XAMPP
2. Check that the database `cafe_db` exists
3. Verify the credentials in `config.php` match your XAMPP setup
4. If using a password for MySQL, update the `$password` variable in `config.php`