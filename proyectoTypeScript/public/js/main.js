document.addEventListener('DOMContentLoaded', () => {
    const altaForm = document.getElementById('alta-empleado-form');
    const modificarForm = document.getElementById('modificar-empleado-form');
    const eliminarForm = document.getElementById('eliminar-empleado-form');
    const empleadosTable = document.getElementById('empleados-table');
  
    // Cargar empleados al cargar la página
    fetch('/empleados')
      .then(response => response.json())
      .then(empleados => {
        empleados.forEach(empleado => {
          addEmpleadoToTable(empleado);
        });
      });
  
    // Manejar el envío del formulario de alta
    if (altaForm) {
      altaForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(altaForm);
        const empleado = Object.fromEntries(formData.entries());
        empleado.activo = formData.get('activo') === 'on';
  
        fetch('/empleados', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(empleado)
        })
        .then(response => response.json())
        .then(newEmpleado => {
          addEmpleadoToTable(newEmpleado);
          altaForm.reset();
        });
      });
    }
  
    // Manejar el envío del formulario de modificación
    if (modificarForm) {
      modificarForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(modificarForm);
        const empleado = Object.fromEntries(formData.entries());
        empleado.activo = formData.get('activo') === 'on';
  
        fetch(`/empleados/${empleado.legajo}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(empleado)
        })
        .then(response => response.json())
        .then(updatedEmpleado => {
          updateEmpleadoInTable(updatedEmpleado);
          modificarForm.reset();
        });
      });
    }
  
    // Manejar el envío del formulario de eliminación
    if (eliminarForm) {
      eliminarForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(eliminarForm);
        const legajo = formData.get('legajo');
  
        fetch(`/empleados/${legajo}`, {
          method: 'DELETE'
        })
        .then(response => response.json())
        .then(() => {
          removeEmpleadoFromTable(legajo);
          eliminarForm.reset();
        });
      });
    }
  
    // Función para agregar un empleado a la tabla
    function addEmpleadoToTable(empleado) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${empleado.legajo}</td>
        <td>${empleado.apellido}</td>
        <td>${empleado.nombre}</td>
        <td>${empleado.dni}</td>
        <td>${empleado.sector}</td>
        <td>${new Date(empleado.fechaIngreso).toLocaleDateString()}</td>
        <td>${empleado.activo ? 'Sí' : 'No'}</td>
        <td>
          <button class="btn btn-warning btn-sm">Modificar</button>
          <button class="btn btn-danger btn-sm">Eliminar</button>
        </td>
      `;
      empleadosTable.appendChild(row);
    }
  
    // Función para actualizar un empleado en la tabla
    function updateEmpleadoInTable(empleado) {
      const rows = empleadosTable.getElementsByTagName('tr');
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const legajoCell = row.getElementsByTagName('td')[0];
        if (legajoCell && legajoCell.textContent === empleado.legajo.toString()) {
          row.innerHTML = `
            <td>${empleado.legajo}</td>
            <td>${empleado.apellido}</td>
            <td>${empleado.nombre}</td>
            <td>${empleado.dni}</td>
            <td>${empleado.sector}</td>
            <td>${new Date(empleado.fechaIngreso).toLocaleDateString()}</td>
            <td>${empleado.activo ? 'Sí' : 'No'}</td>
            <td>
              <button class="btn btn-warning btn-sm">Modificar</button>
              <button class="btn btn-danger btn-sm">Eliminar</button>
            </td>
          `;
          break;
        }
      }
    }
  
    // Función para eliminar un empleado de la tabla
    function removeEmpleadoFromTable(legajo) {
      const rows = empleadosTable.getElementsByTagName('tr');
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const legajoCell = row.getElementsByTagName('td')[0];
        if (legajoCell && legajoCell.textContent === legajo.toString()) {
          empleadosTable.removeChild(row);
          break;
        }
      }
    }
  });