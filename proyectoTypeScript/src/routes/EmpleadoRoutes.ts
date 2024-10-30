import { Router } from 'express';
import { getEmpleados, createEmpleado, updateEmpleado, deleteEmpleado } from '../controllers/EmpleadoController';

const router = Router();

router.get('/empleados', getEmpleados);
router.post('/empleados', createEmpleado);
router.put('/empleados/:legajo', updateEmpleado);
router.delete('/empleados/:legajo', deleteEmpleado);

export default router;