<!-- < ?php
header('Content-Type: application/json');

$host = 'localhost';
$db = 'alunos';
$user = 'root';
$pass = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
} catch (PDOException $e) {
    echo json_encode(["erro" => true, "mensagem" => "Erro ao conectar ao banco de dados."]);
    exit;
} -->
