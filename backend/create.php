<!-- < ?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

include_once 'conexao.php';

$dados = json_decode(file_get_contents("php://input"), true);

if (!isset($dados["nome"]) || !isset($dados["email"])) {
    echo json_encode(["erro" => true, "mensagem" => "Dados incompletos."]);
    exit;
}

try {
    $sql = "INSERT INTO pessoas (nome, email, telefone, anoNascimento, senha) VALUES (:nome, :email, :telefone, :anoNascimento, :senha)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ":nome" => $dados["nome"],
        ":email" => $dados["email"],
        ":telefone" => $dados["telefone"],
        ":anoNascimento" => $dados["anoNascimento"],
        ":senha" => $dados["senha"]
    ]);

    echo json_encode(["erro" => false, "mensagem" => "Pessoa cadastrada com sucesso."]);
} catch (PDOException $e) {
    echo json_encode(["erro" => true, "mensagem" => "Erro ao cadastrar: " . $e->getMessage()]);
} -->
