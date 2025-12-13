export interface TypeTimMap {
  id: number;
  foto1: string;
  foto2: string;
  nama: string;
}
export interface TypeTim {
  data: TypeTimMap[];
}
export interface TypeGalerisMap {
  id: number;
  url: string;
  title: string;
}
export interface TypeGaleris {
  data: TypeGalerisMap[];
}
