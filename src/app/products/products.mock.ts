export const productsList: Product[]=[
    {id:1, name:'Lavandina', price: 5, description: 'diluir el contenido 1/10'},
    {id:2, name:'Detergente', price: 3, description: 'Rinde mas de 50 lavados'},
    {id:3, name:'Lustra muebles', price: 6, description: 'Deja tus muebles como nuevos'},
    {id:4, name:'Quita manchas', price: 7, description: 'quita hasta las manchas mas dificiles'},
    {id:5, name:'Jabon liquido', price: 9, description: 'Tu ropa con la sensacion de frescura y suavidad'},
]
export interface Product{
    id:number | string;
    name:string;
    price:number;
    description:string
}