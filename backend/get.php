<!-- < ?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");

include_once 'conexao.php';

try {
    $sql = "SELECT * FROM alunos";
    $stmt = $pdo->query($sql);
    $pessoas = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode(["erro" => false, "dados" => $pessoas]);
} catch (PDOException $e) {
    echo json_encode(["erro" => true, "mensagem" => "Erro ao buscar dados: " . $e->getMessage()]);
} -->
