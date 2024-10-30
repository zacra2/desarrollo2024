import mongoose, { Schema, Document } from 'mongoose';

export interface IEmpleado extends Document {
  legajo: number;
  apellido: string;
  nombre: string;
  dni: number;
  sector: string;
  fechaIngreso: Date;
  activo: boolean;
}

const EmpleadoSchema: Schema = new Schema({
  legajo: { type: Number, required: true, unique: true },
  apellido: { type: String, required: true },
  nombre: { type: String, required: true },
  dni: { type: Number, required: true },
  sector: { type: String, required: true },
  fechaIngreso: { type: Date, required: true },
  activo: { type: Boolean, required: true }
});

export default mongoose.model<IEmpleado>('Empleado', EmpleadoSchema);