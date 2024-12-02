<?php
// save_data.php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $age = htmlspecialchars($_POST['age']);

    // File path
    $filePath = 'submissions.csv';

    // Data to save
    $data = [$name, $email, $age];
    $line = implode(',', $data) . PHP_EOL;

    // Append data to the file
    if (file_put_contents($filePath, $line, FILE_APPEND)) {
        echo "Data saved successfully! <a href='index.html'>Go back</a>";
    } else {
        echo "Failed to save data. Please try again.";
    }
}
?>
