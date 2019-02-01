const office = require('../controllers/office');
const employee = require('../controllers/employee');

function routes(app) {

    // --- OFFICE ----
    app.post('/office', office.add);
    app.get('/offices', office.list);
    app.get('/office/:id', office.get);
    app.delete('/office/:id', office.remove);
    app.put('/office/:id', office.update);

    // --- EMPLOYEE ---
    app.post('/employee', employee.add);
    app.get('/employees', employee.list);
    app.get('/employee/:id', employee.get);
    app.delete('/employee/:id', employee.remove);
    app.put('/employee/:id', employee.update);
    app.get('/employees/:id', employee.employeesByOfficeId);

}

module.exports = routes;