# Vue hello

Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

### Bonus

Aggiungere alla pagina un’immagine, presa anch’essa da un data.

## Svolgimento

#### HTML :

1. importo il link Vue
2. creo il div globale con id 'app'
3. nell' h1 vado a inserire la variabile _messaggio_ per stampare in pagina

#### js :

1. prendo il metodo `createApp` dall oggetto `Vue`
2. innesto Vue dentro `#app`
3. dentro il metodo `data` inserisco l'oggetto che contiene la variabile _messaggio_

## Svolgimento bonus

1. inserisco la proprietà `img` nel `data`, assegnandoli il persorso dell'immagine
2. con la direttiva **bind** all attributo `src` dell'immagine in html inserisco la variabile _img_
