
//utility types

type Product ={
   id:number;
   name:string;
   price:string;
   stock:number;
   color?:string;
};

type ProductSummary= Pick<Product,'id'|'name'|'price'>//jegula lagbe
type ProductWithoutStock = Omit<Product,"stock"|"color">; // jegula lagbe na
type ProductWithColor = Required<Product>//sob gula

const product : ProductWithColor = {
   id:22,
   name:"mouse",
   price:"20",
   stock:100,
   color:"red"
}

type OptionalProduct = Partial<Product>;
type OptionalReadOnly = Readonly<Product>;

//const emptyObj : object ={}
const emptyObj : Record<string, unknown> ={}

const product1 = {
   id:22,
   name:"mouse",
   price:"20",
}


