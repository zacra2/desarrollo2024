import { Request, Response } from 'express';
import Empleado, { IEmpleado } from '../models/Empleado';

export const getEmpleados = async (req: Request, res: Response) => {
  try {
    const empleados = await Empleado.find();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener empleados' });
  }
};

export const createEmpleado = async (req: Request, res: Response) => {
  try {
    const empleado: IEmpleado = new Empleado(req.body);
    await empleado.save();
    res.status(201).json(empleado);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear empleado' });
  }
};

export const updateEmpleado = async (req: Request, res: Response) => {
  try {
    const { legajo } = req.params;
    const empleado = await Empleado.findOneAndUpdate({ legajo }, req.body, { new: true });
    res.json(empleado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar empleado' });
  }
};

export const deleteEmpleado = async (req: Request, res: Response) => {
  try {
    const { legajo } = req.params;
    await Empleado.findOneAndDelete({ legajo });
    res.json({ message: 'Empleado eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar empleado' });
  }
};