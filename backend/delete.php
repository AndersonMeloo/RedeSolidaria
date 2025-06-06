<!-- < ?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Allow-Headers: Content-Type");

include_once 'conexao.php';

$dados = json_decode(file_get_contents("php://input"), true);

if (!isset($dados["codigo"])) {
    echo json_encode(["erro" => true, "mensagem" => "Código não informado."]);
    exit;
}

try {
    $sql = "DELETE FROM pessoas WHERE codigo = :codigo";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([":codigo" => $dados["codigo"]]);

    if ($stmt->rowCount() > 0) {
        echo json_encode(["erro" => false, "mensagem" => "Pessoa excluída com sucesso."]);
    } else {
        echo json_encode(["erro" => true, "mensagem" => "Pessoa não encontrada."]);
    }
} catch (PDOException $e) {
    echo json_encode(["erro" => true, "mensagem" => "Erro ao excluir: " . $e->getMessage()]);
} -->
