# Feliz Aniversario — Página de entrega

Página sencilla que muestra un mensaje romántico de aniversario y lo narra usando la Web Speech API.

Cómo usar:

1. Abrir un servidor local en la carpeta del proyecto (necesario para algunas voces y políticas de navegador).

   - Con Python 3:

     ```powershell
     python -m http.server 8000
     ```

   - Luego abrir `http://localhost:8000` en el navegador.

2. Si la narración no se reproduce automáticamente, presiona el botón "Reproducir mensaje".

Notas:

- La reproducción automática de audio en navegadores modernos puede requerir interacción del usuario.
- Las voces disponibles dependen del sistema operativo y el navegador. Chrome/Edge normalmente tienen más voces instaladas.
