interface noticia {
  Nome: string;
  Dono: string;
  Slug?: string;
  Tags: string[];
  ImagemLink?: String;
  Descricao: String;
  href?: string;
  DataCriada: Date;
}

const NoticiasData: noticia[] = [
  {
    Nome: "MarioMari",
    Dono: "Google",
    Slug: "teste-noticia-mari-mario",
    Tags: ["teste", "teste1"],
    Descricao: `Imagine uam descrição de uma noticia bem aqui aosdufhpaisbdfpiqerifbiausdviba`,
    ImagemLink: "/FCNews.svg",
    href: "https://www.google.com",
    DataCriada: new Date(),
  },
  {
    Nome: "MariMario",
    Dono: "FutureTech",
    Tags: ["teste2", "teste4"],
    Descricao: `Imagine uam descrição de uma noticia bem aqui`,
    ImagemLink: "/FCNews.svg",
    href: "#",
    DataCriada: new Date(),
  },
  {
    Nome: "MariMario3",
    Dono: "FutureTech",
    Tags: ["teste5", "teste1"],
    Descricao: `Imagine uam descrição de uma noticia bem aqui`,
    ImagemLink: "/FCNews.svg",
    href: "#",
    DataCriada: new Date(),
  },
  {
    Nome: "MariMario4",
    Dono: "FutureTech",
    Tags: ["teste", "teste1"],
    Descricao: `Imagine uam descrição de uma noticia bem aqui`,
    ImagemLink: "/FCNews.svg",
    href: "#",
    DataCriada: new Date(),
  },
];

export default NoticiasData;
