<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">

    <link rel="shortcut icon" type="image/x-icon" href="/favicon.png">
    <link rel="apple-touch-icon" href="/favicon.png">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="https://petroplus.com.br/xmlrpc.php">

    <title inertia>Petroplus – Soluções para o mercado automotivo brasileiro</title>
    <meta name="robots" content="max-image-preview:large">
    <link rel="dns-prefetch" href="//maps.googleapis.com">
    <link rel="dns-prefetch" href="//cdn.jsdelivr.net">
    <link rel="dns-prefetch" href="//fonts.googleapis.com">

    <meta name="description"
        content="Com uma rede exclusiva de distribuidores, a Petroplus oferece muito mais do que uma linha completa de produtos automotivos. A história da empresa começou em 1994…">
    <meta property="og:title" content="Petroplus – Soluções para o mercado automotivo brasileiro">
    <meta property="og:description"
        content="Com uma rede exclusiva de distribuidores, a Petroplus oferece muito mais do que uma linha completa de produtos automotivos. A história da empresa começou em 1994…">
    <meta property="og:url" content="https://petroplus.com.br/">
    <meta property="og:site_name" content="Petroplus">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:description"
        content="Com uma rede exclusiva de distribuidores, a Petroplus oferece muito mais do que uma linha completa de produtos automotivos. A história da empresa começou em 1994…">
    <meta name="twitter:title" content="Petroplus – Soluções para o mercado automotivo brasileiro">
    <link rel="canonical" href="https://petroplus.com.br/">
    <link rel="shortlink" href="https://petroplus.com.br/">

    {{-- Inline script to detect system dark mode preference and apply it immediately --}}
    <script>
        (function () {
            const appearance = '{{ $appearance ?? "system" }}';

            if (appearance === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                if (prefersDark) {
                    document.documentElement.classList.add('dark');
                }
            }
        })();
    </script>

    {{-- Inline style to set the HTML background color based on our theme in app.css --}}
    <style>
        html {
            background-color: oklch(1 0 0);
        }

        html.dark {
            background-color: oklch(0.145 0 0);
        }
    </style>

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>