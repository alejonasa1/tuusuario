async function submitForm() {
    const guideName = document.getElementById('guideName').value;
    const date = document.getElementById('date').value;
    const peopleCount = parseInt(document.getElementById('peopleCount').value, 10);

    try {
        // Realizar una llamada al backend para registrar los datos en la base de datos
        // Como estamos utilizando solo el lado del cliente, esta parte se omite.
        
        alert('Registro exitoso.');

        // Actualizar la cuenta total y los resultados por guía en la interfaz
        updateResults();
    } catch (error) {
        console.error('Error al registrar guianza:', error.message);
        alert('Error al registrar guianza. Por favor, inténtalo de nuevo.');
    }
}

function updateResults() {
    // Actualizar la cuenta total y los resultados por guía en la interfaz
    const totalCountElement = document.getElementById('count');
    totalCountElement.innerText = parseInt(totalCountElement.innerText, 10) + 1;

    const guideListElement = document.getElementById('guideList');
    const listItem = document.createElement('li');
    listItem.textContent = `${new Date().toLocaleDateString()}: ${guideName} - ${peopleCount} personas`;
    guideListElement.appendChild(listItem);
}

// No es necesario llamar a updateResults inicialmente, ya que esta aplicación de cliente no mantiene un estado persistente.
