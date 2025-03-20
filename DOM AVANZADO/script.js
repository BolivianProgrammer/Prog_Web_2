import Form from './Componentes/formulario.js';
import Table from './Componentes/tabla.js';
import Cards from './Componentes/cards.js';

(() => {
    Form.setDatos((task) => {
        Table.addTask(task);
        Cards.updateAllCards();
    });
})();