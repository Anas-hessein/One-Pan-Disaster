let ranrec = document.getElementById("ranrec").addEventListener("click" , randomChous ) 
let raal = document.getElementById("raal").addEventListener("click", real)
let recipe = document.getElementById("recipe")
let body = document.getElementById("body")

let realRecipes = [
  " Mix cucumber, tomato, and olive oil for a 2 minute salad.",
  " Mash a banana and peanut butter this is instant breakfast.",
  " Boil pasta , butter ,and cheese this is lazy mac.",
  " Scramble eggs and add bread. Boom, meal.",
  " Toast bread and cheese slice this is 1 minute grilled cheese.",
  " Peanut butter and banana slice this is sandwich.",
  " Rice , soy sauce , fried egg: finished in 6 minutes.",
  " Oatmeal , honey ,and any fruit you find this is instant breakfast.",
  " Chopped cucumber , yogurt ,and salt this is fast salad.",
  " Spaghetti , olive oil ,and garlic powder. Done.",
  " Tortilla and cheese this is 30 second microwave quesadilla.",
  " Shred leftover chicken and mayo this is lazy chicken salad.",
  " Fried egg on toast this is universal lifesaver.",
  " Wrap tortilla , fries ,and ketchup this is emergency burrito.",
  " Toast , tomato sauce ,and cheese this is poor man's pizza.",
  " Banana and milk this is 10 second smoothie.",
  " Microwave potato 6 min then add butter this is miracle.",
  " Cucumber , salt ,and lemon this is basic snack.",
  " Boiled eggs and salt this is protein with zero work.",
  " Toast , hummus ,and paprika this is quick lazy meal.",
  " Cheese and beans in tortilla put it in microwave this is instant taco."
]

let chaosIng = [  "cereal","ketchup","leftover fries","chocolate syrup","instant noodles","pickle juice","cold pizza","spoon of regret","cold spaghetti from yesterday","chocolate milk powder","stale bread corners",
  "leftover chicken nugget","mystery sauce packet from a drawer","bruised banana","sad lettuce leaf","half-eaten cookie","uncooked rice","expired yogurt",
  "soda that lost its fizz in 2019","instant coffee crystals","frozen peas straight from the bag","microwave popcorn crumbs","cheese slice stuck to the wrapper",
  "spoonful of peanut butter","single olive nobody likes","that one carrot at the bottom of the fridge","jelly that refuses to jiggle","melted ice cream",
  "the last fry in the delivery bag","a tortilla you found under your textbook","ketchup packet from McDonald's","ramen seasoning packet", "chef’s tears","invisible spice","bread heel no one eats","leftover cereal dust","mayo blob of destiny"
];

let chaosAct = [  "microwave for 4 seconds","serve with disappointment","stir using a pen","scream at it gently","microwave until confused","stir aggressively with zero purpose",
  "whisper encouragement to it","slap it lightly for flavor","drop it on the floor for texture","let it marinate in existential dread","shake it like it owes you money",
  "boil until fear sets in","freeze for emotional support","gently yell at it from across the kitchen","serve it with dramatic music","pretend you're on a cooking show and fail",
  "mix everything with a single chopstick","season with your disappointment","overcook it for comedic effect","fold it like laundry","garnish with regret","serve to a friend and apologize immediately",
  "scream 'BON APPETIT' and hope for the best","stir clockwise to summon chaos","drop it into a bowl and call it avant-garde"
];


function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomChous(){
    chaosRecipe = `
    Surprise!<br>
    <br>
    Step 1: Take ${random(chaosIng)} and ${random(chaosIng)}. <br>
    Step 2: ${random(chaosAct)}. <br>
    Step 3: Serve to someone you do not like.<br>
    <br>
    <em>chef approved by AnasKiiled</em>
    `
    recipe.innerHTML = chaosRecipe
}

function real() {
    recipe.textContent = random(realRecipes)
}
