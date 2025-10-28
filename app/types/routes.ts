export type SubRoute = {
  name: string;
  path: string;
};

export type Route = {
  name: string;
  path?: string;       // opcional porque en "Services" no hay path
  sublink?: SubRoute[]; // opcional y es un array de objetos
};
