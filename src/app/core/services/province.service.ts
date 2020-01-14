import { Injectable } from '@angular/core';
import { Province } from '../models/province.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  constructor() { }

  getProvinces(): Province[] {
    return PROVINCES;
  }

  getProvince(province: number | Province): Province {
    const id = typeof province === 'number' ? province : province.id;
    return PROVINCES.find((p: Province) => id === p.id);
  }
}

const PROVINCES: Province[] = [
  {
    fullName: 'Provincia de Misiones',
    isoId: 'AR-N',
    name: 'Misiones',
    id: 54,
    isoName: 'Misiones'
  },
  {
    fullName: 'Provincia de San Luis',
    isoId: 'AR-D',
    name: 'San Luis',
    id: 74,
    isoName: 'San Luis'
  },
  {
    fullName: 'Provincia de San Juan',
    isoId: 'AR-J',
    name: 'San Juan',
    id: 70,
    isoName: 'San Juan'
  },
  {
    fullName: 'Provincia de Entre Ríos',
    isoId: 'AR-E',
    name: 'Entre Ríos',
    id: 30,
    isoName: 'Entre Ríos'
  },
  {
    fullName: 'Provincia de Santa Cruz',
    isoId: 'AR-Z',
    name: 'Santa Cruz',
    id: 78,
    isoName: 'Santa Cruz'
  },
  {
    fullName: 'Provincia de Río Negro',
    isoId: 'AR-R',
    name: 'Río Negro',
    id: 62,
    isoName: 'Río Negro'
  },
  {
    fullName: 'Provincia del Chubut',
    isoId: 'AR-U',
    name: 'Chubut',
    id: 26,
    isoName: 'Chubut'
  },
  {
    fullName: 'Provincia de Córdoba',
    isoId: 'AR-X',
    name: 'Córdoba',
    id: 14,
    isoName: 'Córdoba'
  },
  {
    fullName: 'Provincia de Mendoza',
    isoId: 'AR-M',
    name: 'Mendoza',
    id: 50,
    isoName: 'Mendoza'
  },
  {
    fullName: 'Provincia de La Rioja',
    isoId: 'AR-F',
    name: 'La Rioja',
    id: 46,
    isoName: 'La Rioja'
  },
  {
    fullName: 'Provincia de Catamarca',
    isoId: 'AR-K',
    name: 'Catamarca',
    id: 10,
    isoName: 'Catamarca'
  },
  {
    fullName: 'Provincia de La Pampa',
    isoId: 'AR-L',
    name: 'La Pampa',
    id: 42,
    isoName: 'La Pampa'
  },
  {
    fullName: 'Provincia de Santiago del Estero',
    isoId: 'AR-G',
    name: 'Santiago del Estero',
    id: 86,
    isoName: 'Santiago del Estero'
  },
  {
    fullName: 'Provincia de Corrientes',
    isoId: 'AR-W',
    name: 'Corrientes',
    id: 18,
    isoName: 'Corrientes'
  },
  {
    fullName: 'Provincia de Santa Fe',
    isoId: 'AR-S',
    name: 'Santa Fe',
    id: 82,
    isoName: 'Santa Fe'
  },
  {
    fullName: 'Provincia de Tucumán',
    isoId: 'AR-T',
    name: 'Tucumán',
    id: 90,
    isoName: 'Tucumán'
  },
  {
    fullName: 'Provincia del Neuquén',
    isoId: 'AR-Q',
    name: 'Neuquén',
    id: 58,
    isoName: 'Neuquén'
  },
  {
    fullName: 'Provincia de Salta',
    isoId: 'AR-A',
    name: 'Salta',
    id: 66,
    isoName: 'Salta'
  },
  {
    fullName: 'Provincia del Chaco',
    isoId: 'AR-H',
    name: 'Chaco',
    id: 22,
    isoName: 'Chaco'
  },
  {
    fullName: 'Provincia de Formosa',
    isoId: 'AR-P',
    name: 'Formosa',
    id: 34,
    isoName: 'Formosa'
  },
  {
    fullName: 'Provincia de Jujuy',
    isoId: 'AR-Y',
    name: 'Jujuy',
    id: 38,
    isoName: 'Jujuy'
  },
  {
    fullName: 'Ciudad Autónoma de Buenos Aires',
    isoId: 'AR-C',
    name: 'Ciudad Autónoma de Buenos Aires',
    id: 2,
    isoName: 'Ciudad Autónoma de Buenos Aires'
  },
  {
    fullName: 'Provincia de Buenos Aires',
    isoId: 'AR-B',
    name: 'Buenos Aires',
    id: 6,
    isoName: 'Buenos Aires'
  },
  {
    fullName: 'Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur',
    isoId: 'AR-V',
    name: 'Tierra del Fuego, Antártida e Islas del Atlántico Sur',
    id: 94,
    isoName: 'Tierra del Fuego'
  }
];

