// Conteúdo institucional do Millian Hotel, extraído do levantamento de
// informações preenchido pelo cliente (Bruna, Sub Gerente) em 18/06/2026.

export const hotel = {
  nomeFantasia: "Millian Hotel",
  slogan: "O seu bem-estar é o nosso objetivo.",
  razaoSocial: "Maria Emilia Marcansola Zacarias EPP",
  cnpj: "09.174.451/0001-10",
  endereco: {
    linha: "Av. Nove de Julho, 2681, Anhangabaú",
    cidade: "Jundiaí - SP",
    cep: "13.208-056",
    completo: "Av. Nove de Julho, 2681, Anhangabaú, Jundiaí - SP, 13.208-056",
    mapsQuery: "Millian Hotel, Av. Nove de Julho, 2681, Anhangabaú, Jundiaí - SP, 13208-056",
  },
  geo: { latitude: -23.1985055, longitude: -46.8905613 },
  telefones: ["(11) 3395-4493", "(11) 98404-3609"],
  whatsapp: {
    numero: "5511984043609",
    display: "(11) 98404-3609",
    url: "https://wa.me/5511984043609",
  },
  horarioRecepcao: "Recepção 24 horas",
  emails: {
    recepcao: "millianhotel@millianhotel.com.br",
    nfe: "nfe@millianhotel.com.br",
  },
  bookingUrl: "https://www.booking.com/hotel/br/millian.html",
} as const;

export const diferenciais = [
  {
    titulo: "Tradição de família",
    descricao:
      "Com mais de 40 anos de tradição no ramo hoteleiro, a família deu vida ao Millian em 2008, a partir da reforma completa de um prédio na principal avenida de Jundiaí. O nome é uma homenagem à Fazenda Millian, no interior de São Paulo, terra natal do fundador.",
  },
  {
    titulo: "Localização privilegiada",
    descricao:
      "Na Av. Nove de Julho, a 400m do Jundiaí Shopping, perto de mercados, farmácias, bares e restaurantes — e a poucos minutos da rodoviária e dos principais parques da região.",
  },
  {
    titulo: "Café da manhã farto",
    descricao:
      "Estilo continental, self-service, com comida fresca preparada no próprio hotel: pães, frutas, frios, bolos, ovos, tortas e muito mais.",
  },
  {
    titulo: "Equipe atenciosa",
    descricao:
      "Recepção 24 horas e equipe de limpeza altamente qualificada, para receber com conforto tanto quem viaja a trabalho quanto quem viaja a lazer.",
  },
] as const;

export const faq = [
  {
    pergunta: "Como faço para reservar um quarto no Millian Hotel?",
    resposta:
      "O jeito mais rápido é pelo WhatsApp, (11) 98404-3609 — nossa recepção funciona 24 horas. Também é possível reservar pelo Booking.com.",
  },
  {
    pergunta: "Quais são os horários de check-in e check-out?",
    resposta: "Check-in a partir das 14h e check-out até as 12h.",
  },
  {
    pergunta: "O café da manhã está incluso na diária?",
    resposta:
      "Sim. Todos os hóspedes têm café da manhã incluso, servido todos os dias no salão do hotel.",
  },
  {
    pergunta: "O hotel aceita pets?",
    resposta:
      "Sim, o Millian é pet friendly — pode ser cobrada uma taxa adicional. Recomendamos avisar a recepção no momento da reserva.",
  },
  {
    pergunta: "O estacionamento é gratuito?",
    resposta: "Sim, o estacionamento é gratuito para os hóspedes.",
  },
  {
    pergunta: "Quais formas de pagamento são aceitas?",
    resposta: "Cartão de crédito, cartão de débito, Pix e dinheiro.",
  },
  {
    pergunta: "O Millian Hotel atende empresas e contas corporativas?",
    resposta:
      "Sim — hoje a maior parte das nossas reservas vem de contas corporativas. Fale com a nossa equipe comercial pela página de Empresas.",
  },
  {
    pergunta: "O hotel tem estrutura para eventos e reuniões?",
    resposta:
      "Sim: sala de reunião para até 10 pessoas e um salão que comporta até 60 pessoas, para confraternizações e pequenos eventos.",
  },
  {
    pergunta: "Qual é a política de cancelamento?",
    resposta:
      "As condições de cancelamento variam conforme a tarifa e o canal de reserva. Confirme os detalhes no momento da reserva, direto com a recepção ou pelo Booking.com.",
  },
  {
    pergunta: "Crianças podem se hospedar no hotel?",
    resposta:
      "Sim, crianças de qualquer idade são bem-vindas. A partir dos 4 anos, tarifa de adulto pode ser aplicada — consulte a recepção ao reservar.",
  },
] as const;

export const historia = {
  fundacao:
    "O Millian Hotel tem hoje 18 anos. Nasceu em 2008, a partir da compra do local e da reforma completa do prédio.",
  origem:
    "Um hotel familiar que leva o nome da fazenda em que o fundador nasceu — a Fazenda Millian, localizada no interior do estado de São Paulo.",
  tradicao:
    "A família está no ramo hoteleiro há mais de 40 anos, e essa experiência se reflete na estrutura, no atendimento e no cuidado com cada hóspede.",
  frase: "Quando vier a Jundiaí, a passeio ou a trabalho, sinta-se em casa.",
} as const;

export const localizacao = {
  intro:
    "O Millian Hotel está localizado na principal avenida da cidade, a Nove de Julho — em frente a tudo o que Jundiaí tem de melhor.",
  pontos: [
    { label: "Jundiaí Shopping", distancia: "400 m" },
    { label: "Shopping Paineiras e Maxi Shopping", distancia: "na região" },
    { label: "Centro de Jundiaí", distancia: "nas proximidades" },
    { label: "Mercados (Pão de Açúcar e Don Olivio)", distancia: "nas proximidades" },
    { label: "Farmácias, bares e restaurantes", distancia: "nas proximidades" },
    { label: "Rodoviária de Jundiaí", distancia: "5 min de carro (1,7 km)" },
    { label: "Wet'n Wild e Hopi Hari", distancia: "principais parques da região" },
    { label: "Serra do Japi", distancia: "reserva natural da região" },
    { label: "Circuito das Frutas", distancia: "vinícolas e pomares da região" },
  ],
} as const;

export type QuartoImagem = { src: string; alt: string };

export type Quarto = {
  slug: string;
  nome: string;
  capacidade: string;
  camas: string;
  diferencial: string;
  imagemHome: QuartoImagem;
  imagens: QuartoImagem[];
};

export const quartos: Quarto[] = [
  {
    slug: "standard",
    nome: "Standard",
    capacidade: "Até 4 pessoas",
    camas: "Camas de casal padrão ou solteiro",
    diferencial: "A opção mais versátil do hotel, ideal para família ou grupos.",
    imagemHome: { src: "/images/quartos/standard-home.jpg", alt: "Quarto Standard com cama de casal, escrivaninha e banheiro ao fundo" },
    imagens: [
      { src: "/images/quartos/standard-01.jpg", alt: "Quarto Standard com cama de casal e cama de solteiro ao fundo" },
      { src: "/images/quartos/standard-02.jpg", alt: "Cama de solteiro do quarto Standard, com ar-condicionado e criado-mudo" },
      { src: "/images/quartos/standard-03.jpg", alt: "Escrivaninha do quarto Standard, com notebook e bloco de anotações" },
      { src: "/images/quartos/standard-04.jpg", alt: "Duas camas de solteiro lado a lado no quarto Standard" },
      { src: "/images/quartos/standard-05.jpg", alt: "Banheiro do quarto Standard, com toalhas e amenities" },
      { src: "/images/quartos/standard-06.jpg", alt: "Guarda-roupa do quarto Standard, com TV, cofre e cabideiro" },
    ],
  },
  {
    slug: "suite",
    nome: "Suíte",
    capacidade: "Até 2 pessoas",
    camas: "Cama de casal queen",
    diferencial: "Quarto maior, com cama queen — mais espaço e conforto a dois.",
    imagemHome: { src: "/images/quartos/suite-home.jpg", alt: "Suíte com cama de casal, closet e cama de solteiro ao fundo" },
    imagens: [
      { src: "/images/quartos/suite-01.jpg", alt: "Cama de casal queen da Suíte, com toalhas decorativas" },
      { src: "/images/quartos/suite-02.jpg", alt: "Poltrona, TV e closet da Suíte" },
      { src: "/images/quartos/suite-03.jpg", alt: "Banheiro da Suíte, com toalhas e secador de cabelo" },
      { src: "/images/quartos/suite-04.jpg", alt: "Bandeja de café da manhã servida na cama da Suíte" },
      { src: "/images/quartos/suite-05.jpg", alt: "Vista geral da Suíte, com cama de casal queen e frigobar" },
      { src: "/images/quartos/suite-06.jpg", alt: "Detalhe do banheiro da Suíte, com amenities Millian" },
      { src: "/images/quartos/suite-07.jpg", alt: "Suíte com cama de casal queen, escrivaninha e janela" },
    ],
  },
];

export const comodidadesQuarto = [
  "Ar-condicionado",
  "TV",
  "Frigobar",
  "Wi-Fi",
  "Cofre",
  "Telefone",
  "Secador de cabelo",
] as const;

export const servicosHotel = [
  "Café da manhã incluso",
  "Estacionamento",
  "Pet friendly",
  "Wi-Fi gratuito",
  "Recepção 24 horas",
  "Lavanderia",
] as const;

export const cafeDaManha = {
  intro:
    "Café da manhã estilo continental, self-service, com comidas frescas preparadas no próprio hotel.",
  itens: [
    "Mesa farta, repleta de opções de pães",
    "Frutas frescas",
    "Frios",
    "Bolos e tortas",
    "Ovos, salsicha e calabresa",
    "Bebidas diversas e sucos",
    "Sucrilhos, gelatina e coalhada",
    "Achocolatados",
  ],
} as const;

export const eventos = {
  intro:
    "O Millian atende tanto o público corporativo quanto confraternizações e pequenas reuniões — com estrutura sob medida para cada ocasião.",
  tipos: ["Reuniões corporativas", "Pequenas reuniões (sala de informática)"],
  espacos: [
    { nome: "Sala de café da manhã", capacidade: "até 60 pessoas" },
    { nome: "Sala de reunião", capacidade: "até 10 pessoas" },
  ],
} as const;

export const pacotesLazer = {
  intro:
    "Temos pacotes especiais para Noite de Núpcias e datas especiais, montados de acordo com a necessidade do cliente.",
} as const;

export const empresas = {
  intro:
    "Hoje a maior parte das reservas do Millian vem de contas corporativas. Nossa página B2B serve tanto para captar novos contratos quanto como vitrine de credibilidade para os parceiros que já trabalham com a gente.",
  canais: [
    { label: "E-mail", valor: hotel.emails.recepcao },
    { label: "Telefone", valor: hotel.telefones[0] },
    { label: "Venda balcão", valor: "atendimento presencial na recepção" },
  ],
  tarifario:
    "Condições e tarifas corporativas variam de acordo com o parceiro — fale com a nossa equipe para uma proposta sob medida.",
} as const;

export const otas = ["Booking.com"] as const;

// Avaliações públicas (Google), coletadas para dar prova social real no site.
export const avaliacoes = {
  notaGeral: 4.5,
  fonte: "Google",
  totalAvaliacoes: 750,
} as const;

export const depoimentos = [
  {
    autor: "Mirian Oliveira",
    texto:
      "As recepcionistas são bem simpáticas, atendimento 10. Quartos simples, porém limpinho. Café da manhã muito bom. Eu voltaria com certeza.",
    fonte: "Google",
  },
  {
    autor: "Andréia Rodrigues",
    texto:
      "Tudo em ordem, lugar familiar, boa recepção, alimentos do café fresquinhos.",
    fonte: "Google",
  },
  {
    autor: "Fernando Raul Persuhn",
    texto: "Bom serviço, ótimos atendentes, bom quarto e um bom café da manhã.",
    fonte: "Google",
  },
] as const;

// Fotos usadas tanto na galeria de /cafe-da-manha quanto no carrossel de destaque da home.
const cafeBuffetPaes = { src: "/images/cafe/cafe-13.jpg", alt: "Buffet do café da manhã com pães, bolos e sanduíches naturais" };
const cafeEstacaoQuente = { src: "/images/cafe/cafe-14.jpg", alt: "Estação quente do café da manhã, com salsicha, molho e ovos" };
const cafePratoFrutas = { src: "/images/cafe/cafe-15.jpg", alt: "Prato de frutas e pão de queijo servidos à mesa do café da manhã" };

export const cafeDestaque = [cafeBuffetPaes, cafeEstacaoQuente, cafePratoFrutas] as const;

export const imagens = {
  recepcao: [
    { src: "/images/recepcao/recepcao-hotel.jpg", alt: "Recepção do Millian Hotel, com o logo iluminado na parede" },
    { src: "/images/recepcao/recepcao-fachada.jpg", alt: "Fachada do Millian Hotel na Av. Nove de Julho" },
    { src: "/images/recepcao/recepcao-amenities.jpg", alt: "Amenities Millian sobre a toalha, na cama" },
  ],
  cafe: [
    { src: "/images/cafe/cafe-01.jpg", alt: "Mesa farta de café da manhã com pães, frutas e bolos" },
    { src: "/images/cafe/cafe-16.jpg", alt: "Hóspede servindo frutas frescas no buffet do café da manhã" },
    { src: "/images/cafe/cafe-18.jpg", alt: "Sanduíches naturais fatiados, com presunto, queijo e tomate" },
    { src: "/images/cafe/cafe-19.jpg", alt: "Coxinhas, kibes e bolo servidos no buffet do café da manhã" },
    cafeBuffetPaes,
    cafeEstacaoQuente,
    { src: "/images/cafe/cafe-20.jpg", alt: "Fatia de bolo de chocolate sendo servida no café da manhã" },
    cafePratoFrutas,
    { src: "/images/cafe/cafe-21.jpg", alt: "Café coado na hora, na máquina de café do salão" },
    { src: "/images/cafe/cafe-09.jpg", alt: "Buffet do café da manhã com pães, bolos e salgados" },
    { src: "/images/cafe/cafe-22.jpg", alt: "Bandeja de café da manhã com pães, frutas e bolo, servida no quarto" },
    { src: "/images/cafe/cafe-23.jpg", alt: "Quarto com cama de casal e ambiente aconchegante" },
    { src: "/images/cafe/cafe-24.jpg", alt: "Bandeja de café da manhã com suco, pão e frutas, servida no quarto" },
  ],
  areasComuns: [
    { src: "/images/areas-comuns/areas-comuns-01.jpg", alt: "Sala de convivência com poltronas e TV" },
    { src: "/images/areas-comuns/areas-comuns-02.jpg", alt: "Poltronas estofadas da sala de convivência" },
    { src: "/images/areas-comuns/areas-comuns-03.jpg", alt: "Mesas da sala de convivência, ao lado do café da manhã" },
  ],
  eventos: [
    { src: "/images/eventos/eventos-01.jpg", alt: "Sala de informática com notebook, para uso dos hóspedes" },
    { src: "/images/eventos/eventos-02.jpg", alt: "Sala de reunião com mesa redonda e cadeiras" },
    { src: "/images/eventos/eventos-03.jpg", alt: "Espaço de convivência com poltronas, ideal para pequenos encontros" },
    { src: "/images/eventos/eventos-04.jpg", alt: "Salão envidraçado com vista para a cidade, para eventos e confraternizações" },
  ],
  detalhes: [
    { src: "/images/detalhes/detalhe-01.jpg", alt: "Detalhe de conforto no quarto, com revista e óculos sobre a cama" },
    { src: "/images/detalhes/detalhe-02.jpg", alt: "Logotipo do Millian Hotel na parede da recepção" },
    { src: "/images/detalhes/detalhe-03.jpg", alt: "Secador de cabelo disponível no quarto" },
    { src: "/images/detalhes/detalhe-04.jpg", alt: "Travesseiros macios sobre a cama" },
    { src: "/images/detalhes/detalhe-05.jpg", alt: "Guarda-roupa do quarto, com toalhas e cabides" },
    { src: "/images/detalhes/detalhe-06.jpg", alt: "Café servido com carinho pela equipe do Millian" },
  ],
  sobre: [
    { src: "/images/detalhes/detalhe-02.jpg", alt: "Logotipo do Millian Hotel na parede da recepção" },
    { src: "/images/sobre/sobre-01.jpg", alt: "Entrada do Millian Hotel, com tapete de boas-vindas e recepção ao fundo" },
    { src: "/images/recepcao/recepcao-fachada.jpg", alt: "Fachada do Millian Hotel" },
    { src: "/images/sobre/sobre-02.jpg", alt: "Detalhe de planta decorativa na entrada do hotel" },
    { src: "/images/recepcao/recepcao-amenities.jpg", alt: "Amenities disponíveis na recepção do hotel" },
    { src: "/images/sobre/sobre-03.jpg", alt: "Corredor de quartos do hotel" },
    { src: "/images/sobre/sobre-04.jpg", alt: "Corredor com elevador e portas de quartos" },
    { src: "/images/sobre/sobre-05.jpg", alt: "Quarto com cama de casal arrumada" },
    { src: "/images/eventos/eventos-03.jpg", alt: "Espaço de convivência com poltronas, ideal para pequenos encontros" },
    { src: "/images/sobre/sobre-06.jpg", alt: "Sala de estar com poltronas e arranjo de flores" },
    { src: "/images/sobre/sobre-07.jpg", alt: "Cantinho de trabalho com notebook, para uso dos hóspedes" },
    { src: "/images/sobre/sobre-08.jpg", alt: "Outro cantinho de trabalho com notebook e bloco de anotações" },
    { src: "/images/sobre/sobre-09.jpg", alt: "Salão do café da manhã com mesas e cadeiras" },
  ],
} as const;
