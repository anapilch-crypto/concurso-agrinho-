<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agrinho 2026 | Conectando o Campo e a Cidade</title>
    <style>
        /* Configurações Gerais */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        :root {
            --verde-escuro: #1b4d3e;
            --verde-claro: #4caf50;
            --laranja: #ff9800;
            --bege-claro: #f4f9f4;
            --branco: #ffffff;
            --texto: #333333;
        }

        body {
            background-color: var(--bege-claro);
            color: var(--texto);
            line-height: 1.6;
        }

        /* Cabeçalho */
        header {
            background-color: var(--verde-escuro);
            color: var(--branco);
            padding: 1rem 2rem;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
        }

        .logo h1 { font-size: 1.8rem; }
        .logo span { color: var(--laranja); }

        nav ul {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        nav a {
            color: var(--branco);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }

        nav a:hover { color: var(--laranja); }

        /* Banner Principal (Hero) */
        .hero {
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80') no-repeat center center/cover;
            height: 60vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: var(--branco);
            padding: 0 1rem;
        }

        .hero h2 { font-size: 3rem; margin-bottom: 1rem; }
        .hero p { font-size: 1.3rem; max-width: 600px; margin-bottom: 2rem; }

        .btn {
            background-color: var(--laranja);
            color: var(--branco);
            padding: 0.8rem 2rem;
            text-decoration: none;
            border-radius: 30px;
            font-weight: bold;
            transition: background 0.3s, transform 0.2s;
            border: none;
            cursor: pointer;
        }

        .btn:hover {
            background-color: #e68a00;
            transform: translateY(-2px);
        }

        /* Seções */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 4rem 2rem;
        }

        .section-title {
            text-align: center;
            font-size: 2.2rem;
            color: var(--verde-escuro);
            margin-bottom: 3rem;
        }

        .sobre-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2.5rem;
        }

        .card {
            background-color: var(--branco);
            padding: 2.5rem 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            text-align: center;
            border-top: 5px solid var(--verde-claro);
        }

        /* Estilos do FAQ (Novidade) */
        .faq-section {
            background-color: var(--branco);
            padding: 4rem 2rem;
        }

        .faq-container {
            max-width: 800px;
            margin: 0 auto;
        }

        .faq-item {
            margin-bottom: 1rem;
            border-bottom: 1px solid #ddd;
        }

        .faq-pergunta {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--verde-escuro);
            padding: 1rem 0;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
        }

        .faq-resposta {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out, padding 0.3s ease;
            color: #555;
        }

        .faq-resposta.ativa {
            max-height: 200px;
            padding-bottom: 1rem;
        }

        /* Chamada para Ação */
        .inscricoes {
            background-color: var(--verde-escuro);
            color: var(--branco);
            text-align: center;
        }

        footer {
            background-color: #111;
            color: #ccc;
            text-align: center;
            padding: 2rem;
        }

        @media (max-width: 768px) {
            .header-container { flex-direction: column; gap: 1rem; }
            .hero h2 { font-size: 2rem; }
        }
    </style>
    
    <script src="script.js" defer></script>
</head>
<body>

    <header>
        <div class="header-container">
            <div class="logo">
                <h1>Projeto <span>Agrinho 2026</span></h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#pilares">Pilares</a></li>
                    <li><a href="#faq">Dúvidas</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section class="hero" id="inicio">
        <h2>Do Campo à Cidade: Inovação e Sustentabilidade</h2>
        <p>Cultivando o conhecimento na escola para semear um futuro mais sustentável.</p>
        <a href="#sobre" class="btn">Saiba Mais</a>
    </section>

    <section class="container" id="sobre">
        <h2 class="section-title">O que é o Agrinho?</h2>
        <div style="max-width: 800px; margin: 0 auto; text-align: center;">
            <p>O Programa Agrinho é o maior programa de responsabilidade social do país, integrando a educação básica às realidades do campo. Em 2026, focamos em tecnologia e preservação ambiental.</p>
        </div>
    </section>

    <section id="pilares" style="background-color: #ebf5eb; padding: 4rem 0;">
        <div class="container">
            <h2 class="section-title">Pilares de 2026</h2>
            <div class="sobre-grid">
                <div class="card">
                    <h3>Tecnologia no Campo</h3>
                    <p>Uso de robótica e IA para otimizar plantios.</p>
                </div>
                <div class="card" style="border-top-color: var(--laranja);">
                    <h3>Sustentabilidade</h3>
                    <p>Preservação da água e do solo para o futuro.</p>
                </div>
                <div class="card">
                    <h3>Cidadania</h3>
                    <p>Conexão saudável entre produtores e a cidade.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="
