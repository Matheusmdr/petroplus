<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nova Mensagem de Contato</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .header {
            background-color: #1a1a2e;
            color: #ffffff;
            padding: 24px 32px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 22px;
            font-weight: 600;
        }
        .header p {
            margin: 8px 0 0;
            font-size: 14px;
            opacity: 0.8;
        }
        .content {
            padding: 32px;
        }
        .field {
            margin-bottom: 20px;
            border-bottom: 1px solid #eee;
            padding-bottom: 16px;
        }
        .field:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }
        .label {
            display: block;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: #888;
            margin-bottom: 6px;
        }
        .value {
            font-size: 16px;
            color: #222;
        }
        .value a {
            color: #2563eb;
            text-decoration: none;
        }
        .message-box {
            background-color: #f8f9fa;
            border-left: 4px solid #1a1a2e;
            padding: 16px;
            border-radius: 0 4px 4px 0;
            white-space: pre-wrap;
            font-size: 15px;
        }
        .footer {
            background-color: #f8f9fa;
            padding: 16px 32px;
            text-align: center;
            font-size: 12px;
            color: #999;
            border-top: 1px solid #eee;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📩 Nova Mensagem de Contato</h1>
            <p>Recebida pelo formulário do site Petroplus</p>
        </div>

        <div class="content">
            <div class="field">
                <span class="label">Nome</span>
                <span class="value">{{ $nome }}</span>
            </div>

            <div class="field">
                <span class="label">E-mail</span>
                <span class="value"><a href="mailto:{{ $email }}">{{ $email }}</a></span>
            </div>

            <div class="field">
                <span class="label">Telefone</span>
                <span class="value"><a href="tel:{{ $telefone }}">{{ $telefone }}</a></span>
            </div>

            <div class="field">
                <span class="label">Mensagem</span>
                <div class="message-box">{{ $mensagem }}</div>
            </div>
        </div>

        <div class="footer">
            Este e-mail foi gerado automaticamente pelo formulário de contato do site Petroplus.
        </div>
    </div>
</body>
</html>
