let produtos = [
  { nome: "Risoto de Costela com Agrião", valor: 45, valorFormatado: "R$ 45" },
  {
    nome: "Risoto de Mignon ao Vinho Tinto",
    valor: 48,
    valorFormatado: "R$ 48",
  },
  {
    nome: "Risoto de Mignon com Tomate Seco e Rúcula",
    valor: 48,
    valorFormatado: "R$ 48",
  },
  { nome: "Risoto de Camarão com Shitake", valor: 48, valorFormatado: "R$ 48" },
  { nome: "Risoto de Filé com Funghi", valor: 48, valorFormatado: "R$ 48" },

  {
    nome: "Almôndegas de Carne com Purê de Batata e Arroz de Brócolis com Arroz Branco",
    valor: 37,
    valorFormatado: "R$ 37",
  },
  {
    nome: "Almôndegas de Carne com Purê de Batata e Arroz de Brócolis com Arroz Integral",
    valor: 40,
    valorFormatado: "R$ 40",
  },

  {
    nome: "Isca de Alcatra na Cerveja Escura com Purê de Batata Doce e Arroz Colorido com Arroz Branco",
    valor: 38,
    valorFormatado: "R$ 38",
  },
  {
    nome: "Isca de Alcatra na Cerveja Escura com Purê de Batata Doce e Arroz Colorido com Arroz Integral",
    valor: 41,
    valorFormatado: "R$ 41",
  },

  {
    nome: "Rosbife de Mignon ao Molho de Gorgonzola com Aliglot e Arroz de Amêndoas com Arroz Branco",
    valor: 42,
    valorFormatado: "R$ 42",
  },
  {
    nome: "Rosbife de Mignon ao Molho de Gorgonzola com Aliglot e Arroz de Amêndoas com Arroz Integral",
    valor: 45,
    valorFormatado: "R$ 45",
  },

  {
    nome: "Carne Assada com Purê de Baroa e Arroz de Brócolis com Arroz Branco",
    valor: 38,
    valorFormatado: "R$ 38",
  },
  {
    nome: "Carne Assada com Purê de Baroa e Arroz de Brócolis com Arroz Integral",
    valor: 41,
    valorFormatado: "R$ 41",
  },

  {
    nome: "Filé Mignon Suíno com Mostarda e Mel + Salada de Feijão Fradinho + Arroz de Cenoura com Arroz Branco",
    valor: 38,
    valorFormatado: "R$ 38",
  },
  {
    nome: "Filé Mignon Suíno com Mostarda e Mel + Salada de Feijão Fradinho + Arroz de Cenoura com Arroz Integral",
    valor: 41,
    valorFormatado: "R$ 41",
  },

  {
    nome: "Lombinho Suíno de Panela com Batata Doce Assada e Arroz de Couve com Arroz Branco",
    valor: 38,
    valorFormatado: "R$ 38",
  },
  {
    nome: "Lombinho Suíno de Panela com Batata Doce Assada e Arroz de Couve com Arroz Integral",
    valor: 41,
    valorFormatado: "R$ 41",
  },

  {
    nome: "Frango Assado com Batata e Farofa + Arroz de Milho e Salsinha com Arroz Branco",
    valor: 36,
    valorFormatado: "R$ 36",
  },
  {
    nome: "Frango Assado com Batata e Farofa + Arroz de Milho e Salsinha com Arroz Integral",
    valor: 39,
    valorFormatado: "R$ 39",
  },

  {
    nome: "Isca de Frango Refogado com Cebola Roxa e Pimentões com Creme de Milho e Arroz de Brócolis com Arroz Branco",
    valor: 36,
    valorFormatado: "R$ 36",
  },
  {
    nome: "Isca de Frango Refogado com Cebola Roxa e Pimentões com Creme de Milho e Arroz de Brócolis com Arroz Integral",
    valor: 39,
    valorFormatado: "R$ 39",
  },

  {
    nome: "Frango Empanado com Legumes ao Shoyo + Arroz Colorido com Arroz Branco",
    valor: 36,
    valorFormatado: "R$ 36",
  },
  {
    nome: "Frango Empanado com Legumes ao Shoyo + Arroz Colorido com Arroz Integral",
    valor: 39,
    valorFormatado: "R$ 39",
  },

  {
    nome: "Fricassê de Frango com Batatas Rústicas e Arroz de Milho e Salsinha com Arroz Branco",
    valor: 36,
    valorFormatado: "R$ 36",
  },
  {
    nome: "Fricassê de Frango com Batatas Rústicas e Arroz de Milho e Salsinha com Arroz Integral",
    valor: 39,
    valorFormatado: "R$ 39",
  },

  {
    nome: "Caldeirada de Frutos do Mar com Pirão de Peixe e Arroz de Brócolis com Arroz Branco",
    valor: 45,
    valorFormatado: "R$ 45",
  },
  {
    nome: "Caldeirada de Frutos do Mar com Pirão de Peixe e Arroz de Brócolis com Arroz Integral",
    valor: 48,
    valorFormatado: "R$ 48",
  },

  { nome: "Arroz de Siri", valor: 45, valorFormatado: "R$ 45" },

  {
    nome: "Camarão ao Catupiry com Arroz de Amêndoas e Purê de Baroa com Arroz Branco",
    valor: 42,
    valorFormatado: "R$ 42",
  },
  {
    nome: "Camarão ao Catupiry com Arroz de Amêndoas e Purê de Baroa com Arroz Integral",
    valor: 45,
    valorFormatado: "R$ 45",
  },

  {
    nome: "Moqueca de Camarão com Farofa de Banana e Arroz de Coco com Arroz Branco",
    valor: 42,
    valorFormatado: "R$ 42",
  },
  {
    nome: "Moqueca de Camarão com Farofa de Banana e Arroz de Coco com Arroz Integral",
    valor: 45,
    valorFormatado: "R$ 45",
  },

  {
    nome: "Camarão Empanado no Coco com Arroz de Brócolis e Purê de Banana da Terra com Arroz Branco",
    valor: 42,
    valorFormatado: "R$ 42",
  },
  {
    nome: "Camarão Empanado no Coco com Arroz de Brócolis e Purê de Banana da Terra com Arroz Integral",
    valor: 45,
    valorFormatado: "R$ 45",
  },

  {
    nome: "Filé de Salmão com Crosta de Castanha de Caju + Purê de Baroa e Arroz de Brócolis com Arroz Branco",
    valor: 47,
    valorFormatado: "R$ 47",
  },
  {
    nome: "Filé de Salmão com Crosta de Castanha de Caju + Purê de Baroa e Arroz de Brócolis com Arroz Integral",
    valor: 50,
    valorFormatado: "R$ 50",
  },

  {
    nome: "Filé de Peixe com Castanha de Caju + Pirão de Peixe + Arroz de Brócolis com Arroz Branco",
    valor: 40,
    valorFormatado: "R$ 40",
  },
  {
    nome: "Filé de Peixe com Castanha de Caju + Pirão de Peixe + Arroz de Brócolis com Arroz Integral",
    valor: 43,
    valorFormatado: "R$ 43",
  },

  { nome: "Lasanha à Bolonhesa", valor: 38, valorFormatado: "R$ 38" },
  {
    nome: "Lasanha de Frango com Molho Branco",
    valor: 36,
    valorFormatado: "R$ 36",
  },
  { nome: "Lasanha de Camarão", valor: 45, valorFormatado: "R$ 45" },
  { nome: "Lasanha de Bacalhau", valor: 48, valorFormatado: "R$ 48" },

  {
    nome: "Penne ao Pesto de Rúcula com Frango e Tomate Cereja",
    valor: 38,
    valorFormatado: "R$ 38",
  },
  {
    nome: "Penne ao Pesto de Manjericão com Camarão e Tomate Cereja",
    valor: 45,
    valorFormatado: "R$ 45",
  },
  {
    nome: "Penne ao Molho Branco de Camarão",
    valor: 45,
    valorFormatado: "R$ 45",
  },
  { nome: "Penne ao Molho Branco de Filé", valor: 45, valorFormatado: "R$ 45" },
  { nome: "Penne de Filé com Funghi", valor: 45, valorFormatado: "R$ 45" },

  {
    nome: "Caldo de Camarão a base de leite de coco pequeno (500 ml)",
    valor: 38,
    valorFormatado: "R$ 38",
  },
  {
    nome: "Caldo de Camarão a base de leite de coco grande (1000 ml)",
    valor: 76,
    valorFormatado: "R$ 76",
  },

  {
    nome: "Caldo de Siri a base de leite de coco pequeno (500 ml)",
    valor: 38,
    valorFormatado: "R$ 38",
  },
  {
    nome: "Caldo de Siri a base de leite de coco grande (1000 ml)",
    valor: 76,
    valorFormatado: "R$ 76",
  },

  {
    nome: "Caldo de Frutos do Mar (Lula, Polvo, Mexilhão e Camarão) a base de leite de coco pequeno (500 ml)",
    valor: 38,
    valorFormatado: "R$ 38",
  },
  {
    nome: "Caldo de Frutos do Mar (Lula, Polvo, Mexilhão e Camarão) a base de leite de coco grande (1000 ml)",
    valor: 76,
    valorFormatado: "R$ 76",
  },

  {
    nome: "Caldo de Peixe a base de leite de coco pequeno (500 ml)",
    valor: 38,
    valorFormatado: "R$ 38",
  },
  {
    nome: "Caldo de Peixe a base de leite de coco grande (1000 ml)",
    valor: 76,
    valorFormatado: "R$ 76",
  },

  {
    nome: "Caldo Verde tradicional pequeno (500 ml)",
    valor: 30,
    valorFormatado: "R$ 30",
  },
  {
    nome: "Caldo Verde tradicional grande (1000 ml)",
    valor: 60,
    valorFormatado: "R$ 60",
  },

  {
    nome: "Caldo de Ervilha tradicional pequeno (500 ml)",
    valor: 30,
    valorFormatado: "R$ 30",
  },
  {
    nome: "Caldo de Ervilha tradicional grande (1000 ml)",
    valor: 60,
    valorFormatado: "R$ 60",
  },

  {
    nome: "Caldo de Feijão com Bacon tradicional pequeno (500 ml)",
    valor: 30,
    valorFormatado: "R$ 30",
  },
  {
    nome: "Caldo de Feijão com Bacon tradicional grande (1000 ml)",
    valor: 60,
    valorFormatado: "R$ 60",
  },

  {
    nome: "Caldo de Canja de Galinha tradicional pequeno (500 ml)",
    valor: 30,
    valorFormatado: "R$ 30",
  },
  {
    nome: "Caldo de Canja de Galinha tradicional grande (1000 ml)",
    valor: 60,
    valorFormatado: "R$ 60",
  },

  {
    nome: "Caldo de Feijão Vegano tradicional pequeno (500 ml)",
    valor: 30,
    valorFormatado: "R$ 30",
  },
  {
    nome: "Caldo de Feijão Vegano tradicional grande (1000 ml)",
    valor: 60,
    valorFormatado: "R$ 60",
  },

  {
    nome: "Sopa de Legumes com Carne e Lentilha pequeno (500 ml)",
    valor: 32,
    valorFormatado: "R$ 32",
  },
  {
    nome: "Sopa de Legumes com Carne e Lentilha grande (1000 ml)",
    valor: 64,
    valorFormatado: "R$ 64",
  },

  {
    nome: "Sopa de Legumes com Tofu e Lentilha Vegana pequeno (500 ml)",
    valor: 32,
    valorFormatado: "R$ 32",
  },
  {
    nome: "Sopa de Legumes com Tofu e Lentilha Vegana grande (1000 ml)",
    valor: 64,
    valorFormatado: "R$ 64",
  },

  {
    nome: "Sopa de Alho Poró com Cebola pequeno (500 ml)",
    valor: 35,
    valorFormatado: "R$ 35",
  },
  {
    nome: "Sopa de Alho Poró com Cebola grande (1000 ml)",
    valor: 70,
    valorFormatado: "R$ 70",
  },

  {
    nome: "Sopa de Baroa com Linguiça Defumada pequeno (500 ml)",
    valor: 35,
    valorFormatado: "R$ 35",
  },
  {
    nome: "Sopa de Baroa com Linguiça Defumada grande (1000 ml)",
    valor: 70,
    valorFormatado: "R$ 70",
  },

  {
    nome: "Sopa de Baroa com Camarão pequeno (500 ml)",
    valor: 35,
    valorFormatado: "R$ 35",
  },
  {
    nome: "Sopa de Baroa com Camarão grande (1000 ml)",
    valor: 70,
    valorFormatado: "R$ 70",
  },

  {
    nome: "Sopa de Baroa com Frango pequeno (500 ml)",
    valor: 35,
    valorFormatado: "R$ 35",
  },
  {
    nome: "Sopa de Baroa com Frango grande (1000 ml)",
    valor: 70,
    valorFormatado: "R$ 70",
  },

  {
    nome: "Sopa de Ervilha com Provolone pequeno (500 ml)",
    valor: 35,
    valorFormatado: "R$ 35",
  },
  {
    nome: "Sopa de Ervilha com Provolone grande (1000 ml)",
    valor: 70,
    valorFormatado: "R$ 70",
  },

  {
    nome: "Sopa de Aipim com Costela pequeno (500 ml)",
    valor: 35,
    valorFormatado: "R$ 35",
  },
  {
    nome: "Sopa de Aipim com Costela grande (1000 ml)",
    valor: 70,
    valorFormatado: "R$ 70",
  },

  {
    nome: "Sopa de Vaca Atolada pequeno (500 ml)",
    valor: 35,
    valorFormatado: "R$ 35",
  },
  {
    nome: "Sopa de Vaca Atolada grande (1000 ml)",
    valor: 70,
    valorFormatado: "R$ 70",
  },

  {
    nome: "Sopa de Cebola com 3 Queijos pequeno (500 ml)",
    valor: 35,
    valorFormatado: "R$ 35",
  },
  {
    nome: "Sopa de Cebola com 3 Queijos grande (1000 ml)",
    valor: 70,
    valorFormatado: "R$ 70",
  },

  {
    nome: "Sopa de Abóbora com Carne Seca pequeno (500 ml)",
    valor: 35,
    valorFormatado: "R$ 35",
  },
  {
    nome: "Sopa de Abóbora com Carne Seca grande (1000 ml)",
    valor: 70,
    valorFormatado: "R$ 70",
  },

  {
    nome: "Sopa de Abóbora com Gengibre pequeno (500 ml)",
    valor: 35,
    valorFormatado: "R$ 35",
  },
  {
    nome: "Sopa de Abóbora com Gengibre grande (1000 ml)",
    valor: 70,
    valorFormatado: "R$ 70",
  },

  {
    nome: "Sopa de Inhame com Agrião pequeno (500 ml)",
    valor: 35,
    valorFormatado: "R$ 35",
  },
  {
    nome: "Sopa de Inhame com Agrião grande (1000 ml)",
    valor: 70,
    valorFormatado: "R$ 70",
  },

  {
    nome: "Sopa de Baroa com Cogumelos pequeno (500 ml)",
    valor: 35,
    valorFormatado: "R$ 35",
  },
  {
    nome: "Sopa de Baroa com Cogumelos grande (1000 ml)",
    valor: 70,
    valorFormatado: "R$ 70",
  },
  {
    nome: "Pacote 10 Marmitas linha básica com arroz branco (300g)",
    valor: 285,
    valorFormatado: "R$ 285",
  },
  {
    nome: "Pacote 10 Marmitas linha básica com arroz integral (300g)",
    valor: 305,
    valorFormatado: "R$ 305",
  },
  {
    nome: "Pacote 10 Marmitas linha gourmet com arroz branco (300g)",
    valor: 350,
    valorFormatado: "R$ 350",
  },
  {
    nome: "Pacote 10 Marmitas linha gourmet com arroz integral (300g)",
    valor: 370,
    valorFormatado: "R$ 370",
  },
  {
    nome: "Pacote 10 Marmitas linha básica com arroz branco (450g)",
    valor: 340,
    valorFormatado: "R$ 340",
  },
  {
    nome: "Pacote 10 Marmitas linha básica com arroz integral (450g)",
    valor: 360,
    valorFormatado: "R$ 360",
  },
  {
    nome: "Pacote 10 Marmitas linha gourmet com arroz branco (450g)",
    valor: 400,
    valorFormatado: "R$ 400",
  },
  {
    nome: "Pacote 10 Marmitas linha gourmet com arroz integral (450g)",
    valor: 420,
    valorFormatado: "R$ 420",
  },
  {
    nome: "Strogonoff de Carne + Batatas Rústicas + Arroz",
    valor: "",
    valorFormatado: "",
  },
  {
    nome: "Costela Desfiada + Purê de Batata Doce + Arroz + Feijão",
    valor: "",
    valorFormatado: "",
  },
  {
    nome: "Frango Guisado com Batatas + Arroz + Feijão",
    valor: "",
    valorFormatado: "",
  },
  {
    nome: "Frango Assado ao Sugo + Legumes + Arroz + Feijão",
    valor: "",
    valorFormatado: "",
  },
  {
    nome: "Filé de Peixe Assado + Purê de Abóbora + Arroz",
    valor: "",
    valorFormatado: "",
  },
  {
    nome: "Rosbife de Mignon com Arroz à Piamontese e Batatas Assadas",
    valor: "",
    valorFormatado: "",
  },
  {
    nome: "Risoto de Costela com Agrião",
    valor: "",
    valorFormatado: "",
  },
  {
    nome: "Frango Assado com Creme de Cebola e Legumes + Arroz de Cenoura",
    valor: "",
    valorFormatado: "",
  },
  {
    nome: "Filé Mignon Suíno com Mostarda e Mel + Salada de Feijão Fradinho e Arroz de Brócolis",
    valor: "",
    valorFormatado: "",
  },
  {
    nome: "Lasanha de Bacalhau ao Molho Branco",
    valor: "",
    valorFormatado: "",
  },
  { nome: "Caponata de berinjela", valor: 140, valorFormatado: "R$ 140,00" },
  {
    nome: "Ceviche de banana da terra",
    valor: 150,
    valorFormatado: "R$ 150,00",
  },
  {
    nome: "Salpicão de frango defumado",
    valor: 155,
    valorFormatado: "R$ 155,00",
  },
  { nome: "Salpicão de bacalhau", valor: 175, valorFormatado: "R$ 175,00" },
  {
    nome: "Salada de grão de bico com bacalhau",
    valor: 180,
    valorFormatado: "R$ 180,00",
  },
  {
    nome: "Arroz de amêndoas com espumante",
    valor: 130,
    valorFormatado: "R$ 130,00",
  },
  {
    nome: "Arroz de lentilhas com macadâmia e cebola frita",
    valor: 130,
    valorFormatado: "R$ 130,00",
  },
  {
    nome: "Arroz Natalino (nozes, castanha de caju, passas e damasco)",
    valor: 130,
    valorFormatado: "R$ 130,00",
  },
  {
    nome: "Farofa de ovos com bacon",
    valor: 110,
    valorFormatado: "R$ 110,00",
  },
  {
    nome: "Farofa de banana com castanha de caju",
    valor: 110,
    valorFormatado: "R$ 110,00",
  },
  {
    nome: "Cous cous marroquino do chef (cebola roxa, pimentões coloridos, tomate cereja, salsinha, castanha de caju e damasco)",
    valor: 140,
    valorFormatado: "R$ 140,00",
  },
  {
    nome: "Cous cous marroquino com cogumelos",
    valor: 160,
    valorFormatado: "R$ 160,00",
  },
  {
    nome: "Cous cous marroquino com camarão",
    valor: 170,
    valorFormatado: "R$ 170,00",
  },
  {
    nome: "Rosbife de Mignon molhos: gorgonzola ou funghi ou mostarda e mel ou manteiga de ervas",
    valor: 260,
    valorFormatado: "R$ 260,00",
  },
  {
    nome: "Lombo suíno assado lentamente com laranja e mel",
    valor: 230,
    valorFormatado: "R$ 230,00",
  },
  {
    nome: "Lascas de pernil assado com abacaxi",
    valor: 210,
    valorFormatado: "R$ 210,00",
  },
  {
    nome: "Peru ou Chester assado, recheado com farofa de cenoura e passas (Ave com 4,5 a 5 kg)",
    valor: 340,
    valorFormatado: "R$ 340,00",
  },
  { nome: "Bacalhau Espiritual", valor: 250, valorFormatado: "R$ 250,00" },
  {
    nome: "Bacalhau do chef - lascas de bacalhau refogado com cebola roxa, alho e alho poró + azeitonas pretas, salsinha e gratinado com parmesão",
    valor: 280,
    valorFormatado: "R$ 280,00",
  },
  {
    nome: "Camarão ao Catupiry com damasco",
    valor: 240,
    valorFormatado: "R$ 240,00",
  },
  {
    nome: "Quiche de Espinafre com ricota - M",
    valor: 90,
    valorFormatado: "R$ 90,00",
  },
  {
    nome: "Quiche de Espinafre com ricota - G",
    valor: 100,
    valorFormatado: "R$ 100,00",
  },
  {
    nome: "Quiche de Espinafre com ricota - GG",
    valor: 110,
    valorFormatado: "R$ 110,00",
  },
  {
    nome: "Quiche de Calabresa com cebola - M",
    valor: 90,
    valorFormatado: "R$ 90,00",
  },
  {
    nome: "Quiche de Calabresa com cebola - G",
    valor: 100,
    valorFormatado: "R$ 100,00",
  },
  {
    nome: "Quiche de Calabresa com cebola - GG",
    valor: 110,
    valorFormatado: "R$ 110,00",
  },
  { nome: "Quiche de Marguerita - M", valor: 90, valorFormatado: "R$ 90,00" },
  {
    nome: "Quiche de Marguerita - G",
    valor: 100,
    valorFormatado: "R$ 100,00",
  },
  {
    nome: "Quiche de Marguerita - GG",
    valor: 110,
    valorFormatado: "R$ 110,00",
  },
  {
    nome: "Quiche de Cebola caramelizada - M",
    valor: 90,
    valorFormatado: "R$ 90,00",
  },
  {
    nome: "Quiche de Cebola caramelizada - G",
    valor: 100,
    valorFormatado: "R$ 100,00",
  },
  {
    nome: "Quiche de Cebola caramelizada - GG",
    valor: 110,
    valorFormatado: "R$ 110,00",
  },
  {
    nome: "Quiche de Alho poró - M",
    valor: 100,
    valorFormatado: "R$ 100,00",
  },
  {
    nome: "Quiche de Alho poró - G",
    valor: 110,
    valorFormatado: "R$ 110,00",
  },
  {
    nome: "Quiche de Alho poró - GG",
    valor: 120,
    valorFormatado: "R$ 120,00",
  },
  {
    nome: "Quiche de 3 queijos - M",
    valor: 100,
    valorFormatado: "R$ 100,00",
  },
  {
    nome: "Quiche de 3 queijos - G",
    valor: 110,
    valorFormatado: "R$ 110,00",
  },
  {
    nome: "Quiche de 3 queijos - GG",
    valor: 120,
    valorFormatado: "R$ 120,00",
  },
  {
    nome: "Quiche de Frango com requeijão - M",
    valor: 100,
    valorFormatado: "R$ 100,00",
  },
  {
    nome: "Quiche de Frango com requeijão - G",
    valor: 110,
    valorFormatado: "R$ 110,00",
  },
  {
    nome: "Quiche de Frango com requeijão - GG",
    valor: 120,
    valorFormatado: "R$ 120,00",
  },
  {
    nome: "Quiche de Palmito com alecrim - M",
    valor: 100,
    valorFormatado: "R$ 100,00",
  },
  {
    nome: "Quiche de Palmito com alecrim - G",
    valor: 110,
    valorFormatado: "R$ 110,00",
  },
  {
    nome: "Quiche de Palmito com alecrim - GG",
    valor: 120,
    valorFormatado: "R$ 120,00",
  },
  { nome: "Quiche de Camarão - M", valor: 110, valorFormatado: "R$ 110,00" },
  { nome: "Quiche de Camarão - G", valor: 120, valorFormatado: "R$ 120,00" },
  { nome: "Quiche de Camarão - GG", valor: 130, valorFormatado: "R$ 130,00" },
  { nome: "Quiche de Bacalhau - M", valor: 110, valorFormatado: "R$ 110,00" },
  { nome: "Quiche de Bacalhau - G", valor: 120, valorFormatado: "R$ 120,00" },
  {
    nome: "Quiche de Bacalhau - GG",
    valor: 130,
    valorFormatado: "R$ 130,00",
  },
  {
    nome: "Quiche de Cogumelos - M",
    valor: 110,
    valorFormatado: "R$ 110,00",
  },
  {
    nome: "Quiche de Cogumelos - G",
    valor: 120,
    valorFormatado: "R$ 120,00",
  },
  {
    nome: "Quiche de Cogumelos - GG",
    valor: 130,
    valorFormatado: "R$ 130,00",
  },
  {
    nome: "Quiche de Brie com damasco - M",
    valor: 110,
    valorFormatado: "R$ 110,00",
  },
  {
    nome: "Quiche de Brie com damasco - G",
    valor: 120,
    valorFormatado: "R$ 120,00",
  },
  {
    nome: "Quiche de Brie com damasco - GG",
    valor: 130,
    valorFormatado: "R$ 130,00",
  },
  {
    nome: "Escondidinho de Aipim com carne seca - M",
    valor: 180,
    valorFormatado: "R$ 180,00",
  },
  {
    nome: "Escondidinho de Aipim com carne seca - G",
    valor: 240,
    valorFormatado: "R$ 240,00",
  },
  {
    nome: "Escondidinho de Aipim com camarão - M",
    valor: 190,
    valorFormatado: "R$ 190,00",
  },
  {
    nome: "Escondidinho de Aipim com camarão - G",
    valor: 250,
    valorFormatado: "R$ 250,00",
  },
  {
    nome: "Escondidinho de Baroa com bacalhau - M",
    valor: 200,
    valorFormatado: "R$ 200,00",
  },
  {
    nome: "Escondidinho de Baroa com bacalhau - G",
    valor: 260,
    valorFormatado: "R$ 260,00",
  },
  {
    nome: "Escondidinho de Baroa com camarão - M",
    valor: 200,
    valorFormatado: "R$ 200,00",
  },
  {
    nome: "Escondidinho de Baroa com camarão - G",
    valor: 260,
    valorFormatado: "R$ 260,00",
  },
  {
    nome: "Escondidinho de Baroa com cogumelo - M",
    valor: 200,
    valorFormatado: "R$ 200,00",
  },
  {
    nome: "Escondidinho de Baroa com cogumelo - G",
    valor: 260,
    valorFormatado: "R$ 260,00",
  },
];

export default produtos;
