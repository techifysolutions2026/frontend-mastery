# Create the folder structure
# Force ensures it won't error if they already exist
New-Item -ItemType Directory -Force -Path resources, docs, src/css, src/js

# Create the starter files
New-Item -ItemType File -Force -Path src/css/styles.css, src/js/script.js, docs/README.md

# Create index.html if it doesn't exist
if (-not (Test-Path "index.html")) {
    $htmlContent = @"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validator</title>
    <link rel="stylesheet" href="src/css/styles.css">
</head>
<body>
    <h1>Project Initialized</h1>
    <script src="src/js/script.js"></script>
</body>
</html>
"@
    $htmlContent | Out-File -FilePath index.html -Encoding utf8
}

Write-Host "Success! Your project structure is ready." -ForegroundColor Green