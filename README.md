# ToDO List

### Cerinte
- Afiseaza un ToDo list (poti folosi un REST API public disponibil aici: https://gorest.co.in/
Presupunem ca avem un user logat si vrem sa ii afisam toate elementele din lista de ToDo https://gorest.co.in/public/v2/users/2856/todos)
- Elementele sa poata fi adaugate printr-un input si un buton (POST https://gorest.co.in/public/v2/users/{user_id}/todos
poti folosi Authorization Bearer Token: 84cf866d766dbd622631acb6e32e0bfe6f823cd2a72b386b2d7b5ee4df26d0a7)
- Elementele sa poata fi marcate ca finalizate din lista curenta si mutate intr-o lista de elemente finalizate
- Sa existe posibilitatea de editare a unui element
- Sa poti debifa din lista de Completed, iar item-ul sa fie readus in lista curenta (pending)
- Sa afisezi lista de Completed sub cea de ToDos

### Puncte de interes
- Separare UI de business logic (layer de servicii)
- Caching (in memory/local storage)
- clean code si usor de testat

### Extra (optioonal)
- Cautare
- Paginare
- Sa poti sterge elemente din lista

