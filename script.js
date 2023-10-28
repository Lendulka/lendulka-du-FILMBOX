import { filmy } from "./filmy.js"


// HAMBURGER MENU

const openHideMenu = () => {
	let menuPolozky = document.querySelector("#menu-polozky")
	menuPolozky.classList.toggle("show")
	if (menuPolozky.classList.contains('show')) {
		menuTlacitko.innerHTML = `<i class="fas fa-xmark"></i>`
	} else {
		menuTlacitko.innerHTML = `<i class="fas fa-bars"></i>`
	}
}

let menuTlacitko = document.querySelector("#menu-tlacitko")
menuTlacitko.addEventListener("click", openHideMenu)


// SEZNAM FILMŮ

let seznam = document.querySelector("#seznam-filmu")

if (window.location.href.slice(window.location.href.length - 6, window.location.href.length) === "seznam") {

	seznam.innerHTML = ""

	filmy.forEach(film => {
		seznam.innerHTML += `
			<div class="col mh-100">
				<div class="card h-100">
					<img
						src="${film.plakat.url}"
						width="${film.plakat.sirka}"
						height="${film.plakat.vyska}"
						class="card-img-top"
						alt="plakát-${film.nazev}"
					/>
					<div class="card-body">
						<h5 class="card-title">${film.nazev}</h5>
						<p class="card-text">${film.ochutnavka}</p>
						<a href="film.html#${film.id}" class="btn btn-primary">Přehrát</a>
					</div>
				</div>
			</div>
		`
	})
}


// DETAIL FILMU

if (window.location.href.includes("film")) {

	let detail = document.querySelector("#detail-filmu")
	let idFilm = location.hash.substring(1)
	let film = ""

	filmy.forEach((porovnFilm) => {
		if (idFilm === porovnFilm.id) {
			film = porovnFilm      // toto je object

			let premieraDate = dayjs(film.premiera).format('D. M. YYYY')
			let premieraDateNoFormat = dayjs(film.premiera)
			let difference = premieraDateNoFormat.diff(dayjs(), "month")
			let message = ""

			if (difference === 0) {
				message = "což je tento měsíc"
			} else if (difference < 0) {
				if (difference === (-1)) {
					message = `což bylo před ${Math.abs(difference)} měsícem`
				} else if (difference <= (-2)) {
					message = `což bylo před ${Math.abs(difference)} měsíci`
				}
			} else if (difference > 0) {
				if (difference === 1) {
					message = `což bude za ${difference} měsíc`
				} else if (difference >= 2 && difference <= 4) {
					message = `což bude za ${difference} měsíce`
				} else if (difference >= 5) {
					message = `což bude za ${difference} měsíců`
				}
			}

			detail.innerHTML += `
				<div class="row g-0">
					<div class="col-md-5">
						<img src="${film.plakat.url}" alt="plakát-${film.nazev}" class="img-fluid rounded-start" width="663" height="909" />
					</div>
					<div class="col-md-7">
						<div class="card-body">
							<h5 class="card-title">${film.nazev}</h5>
							<p class="card-text">${film.popis}</p>
							<p class="card-text">
								<small class="text-muted" id="premiera">
									Premiéra 
									<strong>${premieraDate}</strong>, ${message}.
								</small>
							</p>
							<h6>Hodnocení</h6>
							<div class="stars">
								<button class="far fa-star button-star" data-mdb-toggle="tooltip" title="Nic moc">
									1
								</button>
								<button class="far fa-star button-star" data-mdb-toggle="tooltip" title="Ucházející">
									2
								</button>
								<button class="far fa-star button-star" data-mdb-toggle="tooltip" title="Dobrý">
									3
								</button>
								<button class="far fa-star button-star" data-mdb-toggle="tooltip" title="Skvělý">
									4
								</button>
								<button class="far fa-star button-star" data-mdb-toggle="tooltip" title="Úžasný">
									5
								</button>
							</div>

							<h6 class="mt-4">Poznámka</h6>
							<form id="note-form">
								<div class="row">
									<div class="col-md-6 col-lg-7 col-xl-8 mb-2">
										<div class="form-outline">
											<textarea class="form-control" id="message-input" rows="4"></textarea>
											<label class="form-label" for="message-input">Text poznámky</label>
										</div>
									</div>
									<div class="col-md-6 col-lg-5 col-xl-4">
										<div class="form-check d-flex justify-content-center mb-2">
											<input class="form-check-input me-2 mb-2" type="checkbox" value="" id="terms-checkbox" />
											<label class="form-check-label" for="terms-checkbox">
												Souhlasím se všeobecnými podmínky užívání.
											</label>
										</div>
										<button type="submit" class="btn btn-primary btn-block">
											Uložit
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>

			`
		}
	})
}


//HODNOCENÍ

const starArray = document.querySelectorAll(".fa-star")

let target = 0

const checkTarget = (event) => {
	console.log(event)
	target = Number(event.target.innerText)
	markStars(target)
}

const markStars = (target) => {
	for (let index = 0; index < starArray.length; index++) {
		if (index < target) {
			starArray[index].classList.remove("far")
			starArray[index].classList.add("fas")
		}
		else {
			starArray[index].classList.remove("fas")
			starArray[index].classList.add("far")
		}
	}
}

const mouseEnter = (event) => {
	target = Number(event.target.innerText)
	markStars(target)
}

const mouseLeave = (event) => {
	target = Number(event.target.innerText)
	markStars(target)
}

starArray.forEach((oneStar) => {
	oneStar.addEventListener("click", checkTarget)
	oneStar.addEventListener("mouseenter", mouseEnter)
	oneStar.addEventListener("mouseleave", mouseLeave)
})


// POZNÁMKA

const formElm = document.querySelector("#note-form")
const messageElm = document.querySelector("#message-input")
const checkBoxElm = document.querySelector("#terms-checkbox")
const cardTextElm = document.querySelector(".card-text")

if (window.location.href.includes("film") && (formElm)) {

	const sendNote = (event) => {
		event.preventDefault()
		if (messageElm.value === "") {
			messageElm.classList.add("is-invalid")
			messageElm.focus()
		} else {
			if (checkBoxElm.checked === false) {
				messageElm.classList.remove("is-invalid")
				checkBoxElm.classList.add("is-invalid")
				checkBoxElm.focus()
			} else {
				checkBoxElm.classList.remove("is-invalid")
				cardTextElm.innerHTML += `<p class="card-text">Můj text: ${messageElm.value}</p>`
				messageElm.value = ""
			}
		}
	}

	formElm.addEventListener("submit", sendNote)
}


// PŘEHRÁVAČ

if (window.location.href.includes("film")) {

	const prehravacElm = document.querySelector("#prehravac")
	let idFilm = location.hash.substring(1)
	let film = ""

	filmy.forEach((porovnFilm) => {
		if (idFilm === porovnFilm.id) {
			film = porovnFilm

			prehravacElm.innerHTML = `
				<video 
					preload="auto" 
					poster="${film.poster}" 
					width="320" 
					height="180">
					<source src="${film.video}" 
					type="video/mp4" />
				</video>
		
				<div class="player-controls">
					<button type="button" class="play fas fa-play">Přehrát</button>
					<button type="button" class="pause fas fa-pause">Pozastavit</button>
					<time class="current-time">00:00</time>
				</div>
			`

			const playElm = document.querySelector(".play")
			const videoElm = document.querySelector("video")
			const pauseElm = document.querySelector(".pause")
			const currentTimeElm = document.querySelector(".current-time")

			playElm.addEventListener("click", () => {
				videoElm.play()
			})

			videoElm.addEventListener("playing", () => {
				prehravacElm.classList.add("playing")
			})

			pauseElm.addEventListener("click", () => {
				videoElm.pause()
			})

			videoElm.addEventListener("pause", () => {
				prehravacElm.classList.remove("playing")
			})

			videoElm.addEventListener("ended", () => {
				videoElm.src = `${film.poster}`
			})

			videoElm.addEventListener("timeupdate", () => {
				let totalTime = Math.round(videoElm.currentTime)
				let minutes = Math.floor(totalTime / 60).toString().padStart(2, "0")
				let seconds = (totalTime % 60).toString().padStart(2, "0")
				currentTimeElm.innerHTML = `${minutes}:${seconds}`
			})

			const setPlayPause = (event) => {
				if (
					event.code === "Space" &&
					event.target.tagName !== "TEXTAREA" &&
					event.target.tagName !== "INPUT" &&
					event.target.tagName !== "BUTTON"
				) {
					if (prehravacElm.classList.contains("playing")) {
						prehravacElm.classList.remove("playing")
						videoElm.pause()
					} else {
						prehravacElm.classList.add("playing")
						videoElm.play()
					}
				}
			}

			document.addEventListener("keydown", setPlayPause)
		}
	})
}


// ČASOVAČ

const playerElm = document.querySelector(".player-controls")

if (window.location.href.includes("film") && (playerElm)) {

	const visible = () => {
		clearTimeout(setTimeout(hidden, 3000))
		playerElm.classList.remove("hidden")
		setTimeout(hidden, 3000)
	}

	const hidden = () => {
		playerElm.classList.add("hidden")
	}

	document.addEventListener("keydown", visible)
	document.addEventListener("mousemove", visible)

}






