<!-- < ?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: Content-Type");

include_once 'conexao.php';

$dados = json_decode(file_get_contents("php://input"), true);

if (!isset($dados["codigo"])) {
    echo json_encode(["erro" => true, "mensagem" => "Código não informado."]);
    exit;
}

try {
    $sql = "UPDATE alunos SET 
              nome = :nome,
              email = :email,
              telefone = :telefone,
              anoNascimento = :anoNascimento,
              senha = :senha
            WHERE codigo = :codigo";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ":nome" => $dados["nome"],
        ":email" => $dados["email"],
        ":telefone" => $dados["telefone"],
        ":anoNascimento" => $dados["anoNascimento"],
        ":senha" => $dados["senha"],
        ":codigo" => $dados["codigo"]
    ]);

    if ($stmt->rowCount() > 0) {
        echo json_encode(["erro" => false, "mensagem" => "Pessoa atualizada com sucesso."]);
    } else {
        echo json_encode(["erro" => true, "mensagem" => "Nenhuma alteração feita ou pessoa não encontrada."]);
    }
} catch (PDOException $e) {
    echo json_encode(["erro" => true, "mensagem" => "Erro ao atualizar: " . $e->getMessage()]);
} -->
