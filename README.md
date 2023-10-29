# FilmBox

Fiktivní webový projekt semestrálního kurzu [JavaScript 1 JARO 2023](https://www.czechitas.cz/kurzy/javascript-1), na kterém si procvičíme, co jsme se dosud v JavaScriptu naučili.


## 1. Založení projektu
Nejprve pro naši aplikaci založte projekt z předpřipraveného základu.
- Stáhněte si kód z adresy [github.com/Czechitas-podklady-WEB/projekt-FilmBox](github.com/Czechitas-podklady-WEB/projekt-FilmBox).
- Stažený soubor v *ZIPu* rozbalte do složky, ve které běžně skladujete své projekty.
- V rozbalené složce, kde je mimo jiné `index.html`, spusťte z příkazové řádky lokální webový server přes `npx serve`.
- Složku otevřete ve VS Code.


## 2. Seznámení s projektem
Seznamte se s kódem, který je pro vás v projektu připraven. Postupujte dle následujících kroků.
- V prohlížeči si prohlédněte jednotlivé stránky. Jsou celkem čtyři. Úvodní naleznete typicky na adrese [http://localhost:3000], podle toho, kde se vám spustil `npx serve`.
  - [Úvodní stránka](http://localhost:3000/)
  - [Seznam filmů](http://localhost:3000/seznam.html)
  - [Detail filmu](http://localhost:3000/film.html)
  - [O webu](http://localhost:3000/o-webu.html)
- Koukněte ve VS Code do souboru `script.js`. Všimněte si `console.log` na prvním řádku. Ověřte, že se vám text propisuje do vývojářských nástrojů v prohlížeči.
- Všimněte si také, že v souboru máte již předchystané pole objektů s filmy.


## 3. Hamburger menu
Na všech stránkách webu je horní navigace se třemi odkazy. Pro úsporu místa na malých zařízeních se mění na tlačítko s ikonkou hamburgeru. Zařiďte, aby klikání na tlačítko rozbalovalo a opět skrývalo položky menu.
- Na posledním řádku souboru `script.js` najděte pomocí `document.querySelector` prvek s id `menu-tlacitko`.
- Přidejte mu posluchač události kliknutí.
- Přidejte prvku s id `menu-polozky` třídu `show` ve chvíli, kdy událost nastane.
- Rozšiřte kód tak, aby se třída `show` naopak odebrala, pokud ji prvek již měl.

Bonus
Změňte ikonku tlačítka na křížek, pokud je menu rozbalené a na hamburger, pokud je sbalené.
- HTML ikonky křížku: `<i class="fas fa-xmark"></i>`
- HTML ikonky hamburgeru: `<i class="fas fa-bars"></i>`

![ukázka výsledku](https://kodim.cz/cms/assets/kurzy/javascript-vyuka/js-1/filmbox/projekt/cvlekce%3Ehamburger-menu/reseni.gif)


## 4. Seznam filmů
Na stránce se seznamem filmů vypište karty se všemi filmy z pole `filmy`.
- Přejděte v prohlížeči na stránku se seznamem.
- Ve `script.js` pomocí `document.querySelector` vyhledejte prvek s id `seznam-filmu`.
- Vymažte tomuto prvku jeho vnitřní HTML, aby byl prázdný.
- Pomocí cyklu projděte všechny filmy z předpřipraveného pole a pro každý přidejte do prvku `#seznam-filmu` následující HTML doplněné o patřičné informace (název, ochutnávku, plakát).

```html
<div class="col">
	<div class="card">
		<img
			src="https://via.placeholder.com/780x520?text=Plak%C3%A1t"
			width="780"
			height="520"
			class="card-img-top"
			alt="plakát"
		/>
		<div class="card-body">
			<h5 class="card-title">Název filmu</h5>
				<p class="card-text">Krátký popisek filmu.</p>
				<a href="film.html" class="btn btn-primary">Přehrát</a>
		</div>
	</div>
</div>
```

- Vzhledem k tomu, že `script.js` se používá i na podstránkách bez seznamu filmů, bez prvku `#seznam-filmu`, může se stát, že váš kód bude zobrazovat chybu ve vývojářských nástrojích například na detailu `film.html`. Obalte váš kód tedy podmínkou, ať se pouští pouze v případě, že se v HTML aktuální stránky `#seznam-filmu` nachází. 

![ukázka výsledku](/ukazky/reseni-seznam-filmu.jpg)

# Bonus
Přidejte do pole s filmy nějaký další dle vlastního výběru.


## 5. Bonus: Detail filmu
Zobrazte příslušné informace o filmu na stránce s detailem.
- Protože stránka `film.html` obsluhuje detail všech filmů, budete si muset přes adresu předat informací, který konkrétní film si uživatel právě prohlíží. V HTML z předchozího úkolu přidejte do odkazu `href` za znak mřížky (`#`) ještě unikátní identifikátor (`id`), který má každý film vlastní. HTML by pak mělo vypadat zhruba takto:
```html
`<a href="film.html#${id}" class="btn btn-primary">Přehrát</a>`
```
- Najděte prvek s id `detail-filmu` a zařiďte, aby se následující kód vykonal, pouze pokud je prvek přítomen.
- Zjistěte, na film s jakým `id` se uživatel chce dívat kódem `location.hash`. Všimněte si, že hodnota vlastnosti `hash` začíná znakem mřížky (`#`). Id v poli `filmy` mřížkou nezačínají. Mřížku vhodnou metodou na řetězcích odřízněte. Není potřeba. Je spíš na škodu.
- Cyklem prohledejte pole `filmy` a film se stejným id si poznamenejte do proměnné.
- Vepište informace (název, popis, plakát) o nalezeném filmu do stránky. Upravte textový obsah a atributy příslušných potomků prvku `#detail-filmu`. Do `.card-text` vepište dlouhý popis filmu. 

![ukázka výsledku](/ukazky/reseni-bonus-detail-filmu.jpg)


## 6. Bonus: Premiéra
Zobrazte datum premiéry filmu.
- Zapojte do stránky `film.html` knihovnu dayjs přidáním HTML do hlavičky.
```html
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
```
- Do prvku s id `premiera` vepište HTML `Premiéra <strong>29. 11. 2022</strong>`, kde datum nahraďte datumem premiéry filmu naformátovaným pomocí `dayjs` a metody `.format()`.
  - Datum v dayjs vytvoříte například voláním `dayjs('2022-12-24')`. Vánoce nahraďte datumem premiéry filmu.
  - Hezké datum z dayjs vytvoříte voláním `dayjs('2022-12-24').format('D. M. YYYY')`.

# Bonus
Spočítejte kolik dní uběhlo od premiéry nebo za kolik dní premiéra bude. Pomůže vám metoda `.diff()`.
- Dnešní datum pro další výpočty v dayjs vytvoříte voláním `dayjs()`.
- Datum premiéry pak voláním `dayjs('2022-12-24')`.
- Pro vzdálenost mezi datumy pužijte metodu `.diff()` například takto: `dayjs("2022-12-24").diff(dayjs(), 'days')`.
- Do elementu s id `premiera` připište, před kolika dny nebo za kolik dní bude nebo jestli je dnes.

# Extra bonus
Zařiďte, aby tvar slova den byl ve správném tvaru, aby se třeba nestalo „což bylo před 1 dní“.


## 7. Hodnocení
Zařiďte, aby klikání na hvězdičky v hodnocení filmu zvýraznilo všechny hvězdičky až po kliknutou.
- Přichystejte si pomocnou funkci pro zvýraznění určitého počtu hvězdiček.
  - Ve funkci počítejte s jedním vstupním parametrem, číslem od jedné do pěti.
  - Ve funkci projděte cyklem všechny prvky se třídou `fa-star`.
  - Zvýrazněným hvězdičkám odeberte třídu `far` a přidejte `fas`. Ostatním obráceně. Zvýrazněné nechť jsou ty, které jsou v pořadí menší nebo rovny číslu ze vstupu funkce. Pokud tedy funkci zavoláte například s číslem tři, první tři hvězdičky budou mít třídu `fas` a zbylé dvě budou mít `far`.
  - Funkci vyzkoušejte zavolat s různými hodnotami. Zkušební volání ale v kódu nenechávejte.
- Smyčkou přidejte všem hvězdičkám, prvkům se třídou `fa-star` posluchač události na kliknutí.
- Po kliknutí zjistěte, na kterou hvězdičku uživatel kliknul. Každá hvězdička má ve svém textovém obsahu číslo pořadí.
- Číslo využijte jako parametr funkce předchystané podle instrukcí výše.

# Bonus
Při přejíždění myší přes hvězdičky zvýrazněte všechny až po tu, na které je uživatel myší.
- Kromě posluchače události na kliknutí přidejte i posluchač na `mouseenter` a opět podle textového obsahu hvězdičky zavolejte vaši funkci s příslušným parametrem.
- Pokud uživatel s myší odjede pryč, zvýrazněte hvězdičky zpět tak, jak byly po posledním kliknutí.
  - Kdykoliv uživatel na nějakou hvězdičku klikne, poznamenejte si bokem, kolikátá to byla.
  - S událostí `mouseleave` zavolejte vaši funkci s poznamenanou hodnotou. 

![ukázka výsledku](https://kodim.cz/cms/assets/kurzy/javascript-vyuka/js-1/filmbox/projekt/cvlekce%3Ehodnoceni/reseni.gif)


## 8. Poznámka
Umožněte uživateli vyplněním formuláře přidat k filmu vlastní poznámku.
- Pokud je na stránce formulář, prvek s id `note-form`, přidejte mu posluchač události odeslání.
- Při pokusu o odeslání zamezte výchozí chování prohlížeče.
- Ověřte, že uživatel do textového pole, prvku s id `message-input` něco napsal. Pokud ne, přidejte prvku třídu `is-invalid`, která ho zvýrazní červeně a nic dalšího v posluchači nedělejte.
- Pokud uživatel něco napsal, ověřte, že souhlasil s podmínkami, že zaškrtl políčko s id `terms-checkbox`. Pokud nezaškrtl, přidejte políčku třídu `is-invalid`.
- Pokud uživatel splnil obě podmínky z kroků výše, nahraďte HTML obsah formuláře za odstavec `<p class="card-text">…</p>` s textem z textového pole.

# Bonus
Pokud uživatel něco ve formuláři vynechal, pomozte mu zaměřením příslušného formulářového prvku.
- V místech, kde přidáváte třídu `is-invalid`, volejte také na formulářovém prvku metodu `.focus()`. Ta například u textového pole přenese kurzor pro psaní rovnou na správné místo, aby uživatel mohl začít psát z klávesnice. 

![ukázka výsledku](https://kodim.cz/cms/assets/kurzy/javascript-vyuka/js-1/filmbox/projekt/cvlekce%3Epoznamka/reseni.gif)


## 9. Bonus: Vlastní ovládání přehrávače
Obohaťte video přehrávač vlastními ovládacími prvky.
- V souboru `film.html` u prvku `<video>` umažte ručně atribut `controls`. Skryjí se tím ovládací prvky předchystané přímo prohlížečem. V CSS je pak už hotový kód, který automaticky zobrazí `<div class="player-controls">` s vlastním vizuálem. Vy v CSS nemusíte nic měnit. Jen si všimněte, že se na stránce objevily jiné ovládací prvky, které ale nereagují na klikání.
- Oživte tlačítko pro přehrávání a pozastavení.
  - Ve `script.js`, pokud je na stránce prvek s id `prehravac`, přidejte posluchač události kliknutí na prvek se třídou `play`.
  - Na kliknutí zavolejte na prvku `<video>` metodu `.play()`. Pokud uživatel klikne, video by se mělo začít přehrávat.
  - Přidejte na `<video>` posluchač události `playing`. Ta nastává v okamžiku, kdy se video začíná přehrávat.
  - Při události na prvku s id `prehravac` přidejte třídu `playing`. Předchystané CSS v takovém případě zařídí, že se přehrávací tlačítko skryje a místo něho se objeví tlačítko pro pozastavení.
  - Tlačítku `.pause` přidejte posluchač, který po kliknutí zavolá na videu metodu `.pause()`, což pozastaví přehrávání.
  - Poslouchejte na událost s názvem `pause`. Pokud nastane, odeberte z přehrávače třídu `playing`.
- V prvku se třídou `current-time` zobrazujte aktuální čas přehrávaného videa.
  - Poslouchejte na prvku videa událost `timeupdate`. Pokud nastane, vyčtěte z videa přes vlastnost `.currentTime` počet přehraných sekund.
  - Aktuální čas zaokrouhlete a převeďte zvlášť na minuty a sekundy.
  - Obě hodnoty oddělené dvojtečkou vypište do prvku .current-time.

# Bonus
- Spusťte/pozastavte přehrávání, pokud uživatel na stránce zmáčkne klávesu mezerník.
- všimněte si, že video se pozastavuje a přehrává, když uživatel píše do formuláře pro poznámku text a dělá u toho mezery. Spusťte/pozastavte přehrávání pouze v případě, že uživatel nebyl ve formuláři, když mačkal mezerník.
```javascript
if (
	event.code === 'Space' &&
	event.target.tagName !== 'TEXTAREA' &&
	event.target.tagName !== 'INPUT' &&
	event.target.tagName !== 'BUTTON'
) {
	// …
}
```

# Extra bonus
Skryjte ovládací panel, pokud uživatel po dobu **tří sekund** nepohnul myší ani nestiskl žádnou klávesu. **Využijte časovač**. S každým pohnutím nebo stiskem ho zrušte a nastavte znovu na tři sekundy. Po uplynutí přidejte prvku `.player-controls` třídu `hidden`. Pro opětovné zobrazení (s každým pohybem, stiskem) třídu `hidden` zase odeberte, aby se ovládání zpět objevilo. 

![ukázka výsledku](https://kodim.cz/cms/assets/kurzy/javascript-vyuka/js-1/filmbox/projekt/cvlekce%3Eprehravac/reseni.gif)
