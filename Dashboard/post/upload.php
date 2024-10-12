<?php
        if (isset($_FILES['file'])) {
            $targetDir = '../filmes/';
            $targetFile = $targetDir . basename($_FILES['file']['name']);
        
            if (move_uploaded_file($_FILES['file']['tmp_name'], $targetFile)) {
                http_response_code(200);
                echo 'Arquivo movido com sucesso para ' . $targetFile;
            } else {
                http_response_code(500);
                echo 'Erro ao mover o arquivo';
            }
        } else {
            http_response_code(400);
            echo 'Nenhum arquivo recebido';
        }