<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="manifest" href="/manifest.json">
    @vite(['resources/css/app.css', 'resources/js/app.tsx'])
    @inertiaHead
    <script src="/sw-register.js"></script>
    @routes
  </head>
  <body style="font-family: 'Inter', sans-serif;">
    @inertia
  </body>
</html>
