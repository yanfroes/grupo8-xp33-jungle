// alumnis é a variavel global que vai guardar os registros de cada aluno
/*hacker/hipster/hustler/hyper -> alfabética*/
let ALUMNIS = []

// para cada novo aluno dê um ALUMNIS.push com um objeto
// com name, image, description, uf, dream, learn, teach, oneyear, linkedin
//HACKERS
ALUMNIS.push({
    id: 1,
    image: 'Kelly Sandim.jpeg',
    name: "Kelly Sandim Iwauchi",
    stack: "Hacker",
    city: "Campo Grande",
    uf: "MS",
    dream: "Meu sonho mesmo é ser uma desenhista de renome, mas daqui a um ano, só sair da empresa onde eu estou já basta.",
    learn: "Programação Front-end e principalmente, design. Eu gosto de  ver e fazer coisas bonitas.",
    teach: "Acho que posso ensinar a galera a fazer desenhos utilizando certas técnicas básicas.",
    oneyear: "Em uma empresa onde o chefe (ou a chefa) me valoriza pelo que eu faço, se Deus quiser. E que seja organizada.",
    linkedin: "https://www.linkedin.com/in/kellysandim"
})

ALUMNIS.push({
    id: 2,
    image: 'Renan Andreolle.jpg',
    name: "Renan Andreolle Bezerra da Silva",
    stack: "Hacker",
    city: "Jaboatão dos Guararapes",
    uf: "PE",
    dream: "Estar codando algo útil.",
    learn: "Aprender a aprender rápido.",
    teach: "Sou muito bom em corrigir erros dos outros, então sou bom em ensinar a solidificar qualquer coisa relacionada à lógica.",
    oneyear: "Em casa, mas trabalhando numa grande empresa.",
    linkedin: "https://www.linkedin.com/in/renan-andreolle-210235aa/"
})

ALUMNIS.push({
    id: 3,
    image: 'Walter Melo.jpg',
    name: "Walter Ferreira Melo",
    stack: "Hacker",
    city: "Diadema",
    uf: "SP",
    dream: "Eu quero morar sozinho, mais próximo da capital se possível. ser independente e ajudar a minha família.",
    learn: "Para mim o que sabemos é um meio para algo e não o fim. então. eu estou disposto a aprender qualquer coisa para atingir um objetivo X.",
    teach: "Sou uma pessoa versátil mas dentro da programação eu conheço bem uns truques de javascript, eu sei um pouco de muitas coisas. a nível de iniciante.",
    oneyear: "No meu espacinho sagrado e em paz, trabalhando com algo que eu amo e com um mindset de fazer as coisas acontecerem.",
    linkedin: "www.linkedin.com/in/walter-melo-0b91b4151/"
})

ALUMNIS.push({
    id: 4,
    image: 'yan-froes.jpeg',
    name: "Yan Fróes da Cruz Costa",
    stack: "Hacker",
    city: "Manhuaçu",
    uf: "MG",
    dream: "Trabalhar remotamente em uma empresa bacana, meu side-project ter uma linha de crescimento exponencial e estar completamente funcional/automatizado/escalável, criar uma oficina DIY (hobby), estar feliz.",
    learn: "Quero aprender React, Vendas e mais sobre JavaScript.",
    teach: "HTML, CSS, Git, Photoshop, Lightroom, Illustrator, Premiere, After Effects, Linux, Fotografia 360.",
    oneyear: "Empregado remotamente em uma empresa disruptiva, noivo, meu side-project atingindo algumas centenas de clientes, oficina DIY pronta. Fazendo alguns trabalhos de fotografia 360/VR para complementar a renda.",
    linkedin: "https://www.linkedin.com/in/yanfroes/"
})

//HIPSTER
ALUMNIS.push({
    id: 5,
    image: 'Daniel Ferrero.jpg',
    name: "Daniel Domingos",
    stack: "Hipster",
    city: "São Paulo",
    uf: "SP",
    dream: "Em uma empresa topzera QUE ME PAGUE UM SALÁRIO (snif).",
    learn: "Git, Trello, e programação em geral.",
    teach: "Ensino inglês e italiano, ensino técnicas avançadas de redação, e como conquistar o coração da morena.",
    oneyear: "Viajar o mundo (novamente).",
    linkedin: "https://www.linkedin.com/in/daniel-domingos-10003311/"
})

ALUMNIS.push({
    id: 6,
    image: 'Georgia Neponucena.jpg',
    name: "Georgia Neponucena",
    stack: "Hipster",
    city: "Taboão da Serra",
    uf: "SP",
    dream: "Bom daqui a há 10 anos quero e preciso estar com a minha vida financeira estabilizada, com e se no caminho eu conseguir tocar projetos paralelos vai ser ótimo.",
    learn: "Eu adoraria aprender sobre culturas diferentes penso que isso trás respostas mais atrativas pro mundo.",
    teach: "Posso da dicas de fotografia, inglês trocar experiências culturais.",
    oneyear: "Eu adoraria trabalhar com filantropia.",
    linkedin: "https://www.linkedin.com/in/georgia-neponucena/"
})

//HUSTLER
ALUMNIS.push({
    id: 7,
    image: 'Isaque Cruz.jpg',
    name: "Isaque Cruz Rodrigues de Moura",
    stack: "Hustler",
    city: "Barueri",
    uf: "SP",
    dream: "Criar projeto social no oriente médio.",
    learn: "Quero aprender programação de aplicativos e softwares.",
    teach: "Violão.",
    oneyear: "Estarei trabalhando numa empresa maravilhosa cercado de pessoas incríveis, e serei uma pessoa mais humana, que se doa mais ao outro.",
    linkedin: "https://www.linkedin.com/in/isaquemoura/"
})

ALUMNIS.push({
    id: 8,
    image: 'Jonatan Gomes.jpg',
    name: "Jonatan Correa Gomes",
    stack: "Hustler",
    city: "São Paulo",
    uf: "SP",
    dream: "Trazer minha mãe para morar em SP (comigo), viajar mais (conhecer a Europa), continuar focado nos meus estudos (faculdade) e voltar para a academia (cuidar mais de mim).",
    learn: "Quero aperfeiçoar minha comunicação com pessoas diferentes, perder um pouco da timidez e aperfeiçoar meus afazeres para melhor gestão do meu tempo e produtividade.",
    teach: "Posso ensinar a fazer um churrasco muito bom, Strogonoff, doces também, cozinhar de modo geral. Sou um excelente ouvinte também...",
    oneyear: "Vou estar morando em São Paulo, casado (talvez), com meu apartamento próprio, trabalhando na Uliving, estudando e dando meu melhor, todos os dias!!",
    linkedin: "www.linkedin.com/in/jonatan-correa-gomes-ab74ba140/"
})

ALUMNIS.push({
    id: 9,
    image: 'Tiago Machado.jpeg',
    name: "Tiago Souza Machado",
    stack: "Hustler",
    city: "São Bernado",
    uf: "SP",
    dream: "Viajar para Manchu Pichu. Correr a são Silvestre. Jantar no Terraço italia no aniversario de namoro.",
    learn: "Cozinhar comida Vegetariana. Atingir estado de samadhi. Falar Esperanto. Aprender alquimia.",
    teach: "Aplicar golpe de Ap tchagui. A meditar. A fazer fogueira. Cultivo e produção de banana. Fazer uma barraca com recurso da Natureza. Dar o nó de marinheiro. Jogar Catan. Ensinar PNL.",
    oneyear: "Trabalhando na Gama E trabalhando em um futuro negocio proprio.",
    linkedin: "https://www.linkedin.com/in/machadotiagosouza/"
})

//HYPER
ALUMNIS.push({
    id: 10,
    image: 'Ana Luiza Carvalho.png',
    name: "Ana Luiza Carvalho",
    stack: "Hyper",
    city: "Guarulhos",
    uf: "SP",
    dream: "Meu sonho é ter minha própria casa, me sustentando totalmente, estudando sempre, me cuidando e trabalhando. Também gostaria de adotar uma gata.",
    learn: "Resolver desafios do cotidiano de uma empresa ou startup.",
    teach: "A entender interesses e gostos de pessoas diferentes.",
    oneyear: "Trabalhando na Simpla, se a deusa permitir!",
    linkedin: "https://www.linkedin.com/in/analuizacarvalho/"
})

ALUMNIS.push({
    id: 11,
    image: 'Guilherme Almeida da Silva.jpeg',
    name: "Guilherme Almeida da Silva",
    stack: "Hyper",
    city: "Paulinía",
    uf: "SP",
    dream: "Quero estar morando em São Paulo, empregado.",
    learn: "Como trabalhar melhor em equipe.",
    teach: "Como fazer quiché.",
    oneyear: "Eu quero estar trampando na nubank.",
    linkedin: "https://www.linkedin.com/in/guilherme-almeida-/"
})

ALUMNIS.push({
    id: 12,
    image: 'Laissa Nayla.png',
    name: "Laíssa Nayla Pereira Costa da Silva",
    stack: "Hyper",
    city: "Rio de Janeiro",
    uf: "RJ",
    dream: "Meu sonho é me especializar na minha área e com isso abrir minha empresa e viver dela.",
    learn: "Quero aprender a trabalhar em grupo com pessoas de áreas diferentes da minha.",
    teach: "Eu posso ensinar as pessoas a lidar com a pressão, além de ser ótima com computadores!",
    oneyear: "Estarei trabalhando em uma grande startup ou constuindo a minha startup 😊✌🏾",
    linkedin: "https://www.linkedin.com/in/laíssa-nayla-04260916a"
})

ALUMNIS.push({
    id: 13,
    image: 'Rafael Bezerra Campos.jpg',
    name: "Rafael Bezerra Campos",
    stack: "Hyper",
    city: "São Luís",
    uf: "MA",
    dream: "Meu sonho até o final do ano é me mudar pra SP ou BH, trabalhando em startups grandes e principalmente na área de growth. Obs: tendo um bom salário também.",
    learn: "Eu quero aprender a experiência de atuar dentro de uma startup, fazendo conexões entre o teórico e prático.",
    teach: "Eu posso ensinar sobre produto digital, trabalho remoto e business.",
    oneyear: "Daqui a um ano vou tá vivendo novas experiências e trabalhando em um lugar onde seja inclusive e diverso. Ah, também é legal falar que meu time vai ser bem grande e vou ter muitas experiências legais.",
    linkedin: "www.linkedIn.com/in/rafaelhundrao/"
})

ALUMNIS.push({
    id: 14,
    image: 'Pamella Souza.jpeg',
    name: "Pâmella de Oliveira Souza",
    stack: "Hyper",
    city: "Santos",
    uf: "SP",
    dream: "Morar sozinha",
    learn: "Aprender a não ser tão teimosa.",
    teach: "Como viajar sozinho rs",
    oneyear: "Plataforma de Stream ",
    linkedin: "www.linkedin.com/in/pâmella-souza94/"
})
