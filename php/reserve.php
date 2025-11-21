<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $date = $_POST['date'] ?? '';
    $time = $_POST['time'] ?? '';
    $guests = $_POST['guests'] ?? 1;
    $requests = $_POST['requests'] ?? '';

    // Validate required fields
    if (empty($name) || empty($email) || empty($phone) || empty($date) || empty($time)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'All required fields must be filled']);
        exit;
    }

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO reservations (name, email, phone, reservation_date, reservation_time, num_guests, special_requests) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssis", $name, $email, $phone, $date, $time, $guests, $requests);

    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'message' => 'Reservation created successfully']);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Error: ' . $stmt->error]);
    }

    $stmt->close();
} elseif ($_SERVER['REQUEST_METHOD'] == 'GET') {
    // Fetch reservations
    $result = $conn->query("SELECT * FROM reservations ORDER BY created_at DESC LIMIT 10");
    $reservations = array();
    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $reservations[] = $row;
        }
    }
    
    echo json_encode(['success' => true, 'reservations' => $reservations]);
}

$conn->close();
?>