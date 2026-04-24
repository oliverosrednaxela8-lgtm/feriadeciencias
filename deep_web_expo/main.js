document.addEventListener('DOMContentLoaded', () => {
    const baitScreen = document.getElementById('bait-screen');
    const hackedScreen = document.getElementById('hacked-screen');

    // Cambiar de pantalla después de que la barra de carga "termine" (3.5 segundos)
    setTimeout(() => {
        // Ocultar pantalla de carga
        baitScreen.classList.add('hidden');
        
        // Mostrar pantalla hackeada
        hackedScreen.classList.remove('hidden');

        // Optional: Si quisieras añadir un efecto de sonido, podrías hacerlo aquí, 
        // pero los navegadores bloquean el sonido automático sin interacción previa, 
        // por lo que el efecto visual impactante es mucho más seguro y efectivo.
    }, 3600);
});
