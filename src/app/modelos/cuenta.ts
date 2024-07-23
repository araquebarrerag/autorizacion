export class Cuenta {
    constructor(
        public id: string,
        public tarjeta_activa: boolean,
        public limite_disponible: number
    ) { }
}