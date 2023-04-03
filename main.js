// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const screen2text = document.querySelector(".screen2 p")
const cookieClick = document.querySelector("#cookie")
const btnReset = document.querySelector("#btnReset")
let luckyNumber = Math.round(Math.random() * 100)

// Lista de sortes
const luck = [
  "O sucesso não é sorte, é trabalho duro e perseverança.",
  "Seja a mudança que deseja ver no mundo.",
  "Acredite em si mesmo e nos seus sonhos.",
  "O sucesso é uma jornada, não um destino.",
  "A vida é uma aventura, aproveite-a.",
  "Faça o que ama e o sucesso virá.",
  "Nunca desista, mesmo quando as coisas ficarem difíceis.",
  "A felicidade é uma escolha, escolha ser feliz.",
  "Aprenda com seus erros e siga em frente.",
  "A vida é curta, faça cada momento contar.",
  "Você é mais forte do que pensa.",
  "Acredite no impossível e faça acontecer.",
  "Tudo é possível se você acreditar.",
  "A persistência é a chave para o sucesso.",
  "Não deixe que o medo o impeça de perseguir seus sonhos.",
  "A vida é um presente, aproveite-a ao máximo.",
  "O sucesso não vem facilmente, é preciso trabalho duro e dedicação.",
  "A vida é cheia de altos e baixos, aprenda a equilibrá-los.",
  "Você é o único responsável pelo seu próprio sucesso.",
  "Seja a mudança que deseja ver no mundo.",
  "Nunca é tarde demais para perseguir seus sonhos.",
  "O fracasso é apenas uma oportunidade para começar de novo com mais sabedoria.",
  "Aprenda com seus erros e cresça com eles.",
  "A vida é uma jornada, aproveite cada momento.",
  "Você tem o poder de criar a vida que deseja.",
  "Acredite em si mesmo e nos seus sonhos.",
  "O sucesso é um processo, não um resultado.",
  "O que você planta, é o que colhe.",
  "Você é capaz de coisas incríveis se acreditar em si mesmo.",
  "Seja grato pelo que tem, mas nunca desista de seus sonhos.",
  "O sucesso é a soma de pequenos esforços repetidos diariamente.",
  "A vida é um desafio, mas é isso que a torna emocionante.",
  "O sucesso é um hábito, não uma habilidade.",
  "A vida é cheia de surpresas, abrace-as.",
  "A felicidade é encontrada dentro de si mesmo.",
  "Não permita que o fracasso o defina, use-o como motivação.",
  "Nunca pare de crescer e aprender.",
  "A vida é o que você faz dela, faça-a incrível.",
  "Se você quer algo, vá e faça acontecer.",
  "O sucesso é a jornada, não o destino.",
  "Acredite em si mesmo e vá em frente.",
  "Seja a mudança que deseja ver no mundo.",
  "A vida é curta, viva ao máximo.",
  "Aprenda com o passado, viva no presente e sonhe com o futuro.",
  "Nunca deixe que o medo o impeça de seguir seus sonhos.",
  "A vida é uma aventura, abrace-a.",
  "O sucesso é uma mentalidade, não uma medida.",
  "Acredite no seu potencial e faça acontecer.",
  "A vida é cheia de possibil",
  "A felicidade não é algo que você encontra, é algo que você cria.",
  "Não importa quantas vezes você caia, levante-se e continue.",
  "Seja gentil, sempre.",
  "Acredite em si mesmo e nos seus sonhos, mas lembre-se de que o trabalho duro é necessário.",
  "O sucesso é a jornada, não o destino.",
  "A vida é como uma montanha-russa, cheia de altos e baixos.",
  "O fracasso não é o fim, é apenas o começo de uma nova oportunidade.",
  "A vida é cheia de possibilidades, vá atrás delas.",
  "Não tenha medo de seguir seu coração, mesmo que seja difícil.",
  "Seja grato pelo que tem e lute pelo que deseja.",
  "A felicidade não é uma meta, é um estado de espírito.",
  "Nunca é tarde demais para começar algo novo.",
  "A vida é um presente, aproveite cada momento.",
  "Você é o único responsável pela sua felicidade.",
  "Acredite em si mesmo, pois ninguém mais o fará.",
  "O sucesso é a soma de pequenas coisas feitas com grande amor.",
  "A vida é uma jornada, não um destino.",
  "Não deixe que os obstáculos o impeçam de alcançar seus objetivos.",
  "Seja corajoso e tome medidas ousadas em direção aos seus sonhos.",
  "A felicidade está em fazer o que você ama.",
  "A vida é uma aventura, divirta-se!",
  "Acredite em si mesmo e em suas habilidades.",
  "Nunca desista, mesmo quando as coisas parecem impossíveis.",
  "O sucesso não é medido pelo que você tem, mas pelo que você faz com o que tem.",
  "A vida é curta, não a desperdice com coisas que não importam.",
  "Não se preocupe com o que os outros pensam, faça o que é certo para você.",
  "A felicidade é encontrada nas coisas mais simples da vida.",
  "O sucesso é a combinação de talento e trabalho duro.",
  "A vida é uma jornada única, faça valer a pena.",
  "Não importa o quão difícil seja, nunca desista.",
  "Acredite em si mesmo, pois você tem o poder de mudar o mundo.",
  "O sucesso é a conquista dos seus próprios objetivos, não dos objetivos dos outros.",
  "A vida é uma aventura emocionante, aproveite cada momento.",
  "Não espere pela oportunidade, crie-a.",
  "Seja grato pelas pequenas coisas e elas se tornarão grandes.",
  "A felicidade é um estado de espírito, encontre a sua.",
  "O sucesso é a soma de pequenas coisas feitas com grande amor.",
  "A vida é uma maravilha, desfrute-a!",
  "Acredite em si mesmo e você pode fazer qualquer coisa que desejar.",
  "Não deixe que os erros do passado o impeçam de seguir em frente.",
  "O sucesso é uma jornada, não uma chegada.",
  "A vida é uma aventura, aproveite cada momento.",
  "Seja o autor da sua própria história.",
  "A felicidade não é um destino, é uma jornada.",
  "O sucesso é a combinação de talento e esforço.",
  "A vida é cheia de altos e baixos, mas é como você lida com eles que define quem você é.",
  "Não tenha medo de falhar, é assim que se aprende.",
  "Acredite em si mesmo, você é mais forte do que pensa.",
  "A vida é uma oportunidade, agarre-a com as duas mãos.",
  "O sucesso é a capacidade de superar os obstáculos e continuar seguindo em frente.",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
]

//Event Listener
cookieClick.addEventListener("click", handleCookieClick)
btnReset.addEventListener("click", handleButtonClick)
document.addEventListener("keypress", handleEnterPress)

//Funções

//Clicar no biscoito fechado
function handleCookieClick() {
  toggleScreens()
  generateCookie(luckyNumber)
}

//clicar no botão com o biscoito aberto
function handleButtonClick() {
  toggleScreens()
  luckyNumber = Math.round(Math.random() * 100)
}

//Apertar Enter
function handleEnterPress(event) {
  if (event.key === "Enter" && screen2.classList.contains("hidden")) {
    handleCookieClick()
  } else if (event.key === "Enter" && screen1.classList.contains("hidden")) {
    handleButtonClick()
  }
}

//Trocar de telas
function toggleScreens() {
  screen1.classList.toggle("hidden")
  screen2.classList.toggle("hidden")
}

function generateCookie(lucky) {
  screen2text.innerText = luck[lucky]
}
