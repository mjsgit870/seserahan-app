<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="manifest" href="/manifest.json">
    @vite(['resources/css/app.css', 'resources/js/app.tsx'])
    @inertiaHead
    {{-- Service Worker --}}
    <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
              console.log('Service Worker registered successfully:', registration.scope);
            })
            .catch((error) => {
              console.log('Service Worker registration failed:', error);
            });
        });
      }

    </script>
  </head>
  <body style="font-family: 'Inter', sans-serif;">
    @inertia
  </body>
</html>
