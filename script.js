"use strict";

/* --------------------******************** accounts ********************-------------------- */
//movements factory
const movementsFactory = (quantity, users) => {
	const usersArr = users;

	/*-------------************ local util functions *************-------------*/
	//random Number generator
	const randomNumber = (min, max) =>
		Math.floor(Math.random() * (max - min + 1) + min);

	//date generator
	const dateGenerator = (dayNumber) => {
		const date = new Date();
		return new Date(
			date.setDate(date.getDate() - (quantity + 1 - dayNumber))
		).toISOString();
	};

	/*-------------************ movements *************-------------*/

	const movements = Array.from({ length: quantity }, (_, i) => ({
		id: i + 1,
		movement: randomNumber(-10000, 20000),
		user: users[randomNumber(0, users.length - 1)],
		date: dateGenerator(i + 1),
		isRequest: false,
	}));

	/*-------------************ debugging work *************-------------*/
	//used for debugging
	const debug = false;
	if (debug) {
		console.log(
			Array.from({ length: 100 }, randomNumber.bind(this, 0, users.length - 1))
		);
	}

	return movements;
};

//	/*------------- accounts -------------*/
const account1 = {
	username: "3saleya",
	pin: 1111,
	balance: {
		currentBalance: 3000,
		incoming: 10000,
		outcoming: 7000,
	}, // Dummy initial balance, will be recalculated
	movements: () => [...movementsFactory(8, users)],
	currency: "EUR",
	locale: "pt-PT",
};
const account2 = {
	username: "anosa",
	pin: 1111,
	balance: {
		currentBalance: 3000,
		incoming: 10000,
		outcoming: 7000,
	}, // Dummy initial balance, will be recalculated
	movements: () => [...movementsFactory(20, users)],
	currency: "USD",
	locale: "ar-EG",
};
const account3 = {
	username: "boddaaa",
	pin: 1111,
	balance: {
		currentBalance: 3000,
		incoming: 10000,
		outcoming: 7000,
	}, // Dummy initial balance, will be recalculated
	movements: () => [...movementsFactory(13, users)],
	currency: "USD",
	locale: "ar-EG",
};
const account4 = {
	username: "chroma",
	pin: 1111,
	balance: {
		currentBalance: 3000,
		incoming: 10000,
		outcoming: 7000,
	}, // Dummy initial balance, will be recalculated
	movements: () => [...movementsFactory(8, users)],
	currency: "AED",
	locale: "ar-AE",
};
const account5 = {
	username: "mark",
	pin: 1111,
	balance: {
		currentBalance: 3000,
		incoming: 10000,
		outcoming: 7000,
	}, // Dummy initial balance, will be recalculated
	movements: () => [...movementsFactory(20, users)],
	currency: "GBP",
	locale: "en-GB",
};
const account6 = {
	username: "maulana",
	pin: 1111,
	balance: {
		currentBalance: 3000,
		incoming: 10000,
		outcoming: 7000,
	}, // Dummy initial balance, will be recalculated
	movements: () => [...movementsFactory(80, users)],
	currency: "SAR",
	locale: "ar-SA",
};
const account7 = {
	username: "mohamed",
	pin: 1111,
	balance: {
		currentBalance: 3000,
		incoming: 10000,
		outcoming: 7000,
	}, // Dummy initial balance, will be recalculated
	movements: () => [...movementsFactory(13, users)],
	currency: "SAR",
	locale: "ar-SA",
};
const account8 = {
	username: "mostafa",
	pin: 1111,
	balance: {
		currentBalance: 3000,
		incoming: 10000,
		outcoming: 7000,
	}, // Dummy initial balance, will be recalculated
	movements: () => [...movementsFactory(9, users)],
	currency: "CNY",
	locale: "zh-CN",
};
const account9 = {
	username: "pride",
	pin: 1111,
	balance: {
		currentBalance: 3000,
		incoming: 10000,
		outcoming: 7000,
	}, // Dummy initial balance, will be recalculated
	movements: () => [...movementsFactory(22, users)],
	currency: "CAD",
	locale: "en-CA",
};
const account10 = {
	username: "sanad",
	pin: 1111,
	balance: {
		currentBalance: 3000,
		incoming: 10000,
		outcoming: 7000,
	}, // Dummy initial balance, will be recalculated
	movements: () => [...movementsFactory(30, users)],
	currency: "USD",
	locale: "en-US",
};
const account11 = {
	username: "shaf3ey",
	pin: 1111,
	balance: {
		currentBalance: 3000,
		incoming: 10000,
		outcoming: 7000,
	}, // Dummy initial balance, will be recalculated
	movements: () => [...movementsFactory(7, users)],
	currency: "ZAR",
	locale: "af-ZA",
};
const account12 = {
	username: "kareem",
	pin: 1111,
	balance: {
		currentBalance: 3000,
		incoming: 10000,
		outcoming: 7000,
	}, // Dummy initial balance, will be recalculated
	movements: () => [...movementsFactory(29, users)],
	currency: "USD",
	locale: "en-US",
};
const account13 = {
	username: "7mthola",
	pin: 1111,
	balance: {
		currentBalance: 3000,
		incoming: 10000,
		outcoming: 7000,
	}, // Dummy initial balance, will be recalculated
	movements: () => [...movementsFactory(16, users)],
	currency: "USD",
	locale: "en-US",
};
const account14 = {
	username: "asala7",
	pin: 1111,
	balance: {
		currentBalance: 3000,
		incoming: 10000,
		outcoming: 7000,
	}, // Dummy initial balance, will be recalculated
	movements: () => [...movementsFactory(17, users)],
	currency: "USD",
	locale: "en-US",
};
const account15 = {
	username: "beach",
	pin: 1111,
	balance: {
		currentBalance: 3000,
		incoming: 10000,
		outcoming: 7000,
	}, // Dummy initial balance, will be recalculated
	movements: () => [...movementsFactory(18, users)],
	currency: "EGP",
	locale: "ar-EG",
};
const account16 = {
	username: "fe2y",
	pin: 1111,
	balance: {
		currentBalance: 3000,
		incoming: 10000,
		outcoming: 7000,
	}, // Dummy initial balance, will be recalculated
	movements: () => [...movementsFactory(13, users)],
	currency: "USD",
	locale: "en-US",
};
const account17 = {
	username: "abooayman",
	pin: 1111,
	balance: {
		currentBalance: 3000,
		incoming: 10000,
		outcoming: 7000,
	}, // Dummy initial balance, will be recalculated
	movements: () => [...movementsFactory(20, users)],
	currency: "GBP",
	locale: "en-GB",
};
const account18 = {
	username: "rafik",
	pin: 1111,
	balance: {
		currentBalance: 3000,
		incoming: 10000,
		outcoming: 7000,
	}, // Dummy initial balance, will be recalculated
	movements: () => [...movementsFactory(15, users)],
	currency: "CAD",
	locale: "fr-CA",
};
const account19 = {
	username: "7oodaa",
	pin: 1111,
	balance: {
		currentBalance: 3000,
		incoming: 10000,
		outcoming: 7000,
	}, // Dummy initial balance, will be recalculated
	movements: () => [...movementsFactory(18, users)],
	currency: "JPY",
	locale: "ja-JP",
};
const account20 = {
	username: "7mooty",
	pin: 1111,
	balance: {
		currentBalance: 3000,
		incoming: 10000,
		outcoming: 7000,
	}, // Dummy initial balance, will be recalculated
	movements: () => [...movementsFactory(16, users)],
	currency: "INR",
	locale: "hi-IN",
};
const account21 = {
	username: "squirrel",
	pin: 1111,
	balance: {
		currentBalance: 3000,
		incoming: 10000,
		outcoming: 7000,
	}, // Dummy initial balance, will be recalculated
	movements: () => [...movementsFactory(10, users)],
	currency: "AED",
	locale: "ar-AE",
};
const account22 = {
	username: "aswany",
	pin: 1111,
	balance: {
		currentBalance: 3000,
		incoming: 10000,
		outcoming: 7000,
	}, // Dummy initial balance, will be recalculated
	movements: () => [...movementsFactory(12, users)],
	currency: "USD",
	locale: "en-US",
};
const account23 = {
	username: "saleh",
	pin: 1111,
	balance: {
		currentBalance: 3000,
		incoming: 10000,
		outcoming: 7000,
	}, // Dummy initial balance, will be recalculated
	movements: () => [...movementsFactory(5, users)],
	currency: "SAR",
	locale: "ar-SA",
};
const account24 = {
	username: "minerals",
	pin: 1111,
	balance: {
		currentBalance: 3000,
		incoming: 10000,
		outcoming: 7000,
	}, // Dummy initial balance, will be recalculated
	movements: () => [...movementsFactory(8, users)],
	currency: "AUD",
	locale: "en-AU",
};

const accounts = [
	account1,
	account2,
	account3,
	account4,
	account5,
	account6,
	account7,
	account8,
	account9,
	account10,
	account11,
	account12,
	account13,
	account14,
	account15,
	account16,
	account17,
	account18,
	account19,
	account20,
	account21,
	account22,
	account23,
	account24,
];
const users = accounts.map((acc) => acc.username);
accounts.forEach((account) => (account.movements = account.movements()));

//	/*------------- balance initializer (IIFE) -------------*/
((accounts) => {
	//fetching each account
	accounts.forEach((account) => {
		//fetching each movement from the current account
		account.balance = account.movements.reduce(
			(acc, movement) => {
				movement.movement > 0
					? (acc.incoming += movement.movement)
					: (acc.outcoming += movement.movement);
				return acc;
			},
			{ currentBalance: 0, incoming: 0, outcoming: 0 }
		);

		account.balance.currentBalance =
			account.balance.incoming + account.balance.outcoming;
	});
})(accounts);

console.log(accounts);

//	/*------------- building users (IIFE) -------------*/
const selectUser = document.querySelector(".actions__user");

((accounts) => {
	accounts.forEach((account) => {
		selectUser.insertAdjacentHTML(
			"beforeend",
			`<option value="${account.username}"> ${account.username} </option>`
		);
	});
})(accounts);

/* --------------------******************** elements ********************-------------------- */
const valueMainBalance = document.querySelector(".actions__balance");
const valueBalance = document.querySelector(".balance__amount");
const valueIncoming = document.querySelector(".incoming__amount");
const valueOutcoming = document.querySelector(".outcoming__amount");

/* --------------------******************** utilities ********************-------------------- */
/* -------------------- format currency -------------------- */
const currencyFormatter = ({ account, value } = {}) => {
	const { locale, currency } = account;

	const currencyOptions = {
		style: "currency",
		currency: currency || "USD",
	};
	const formattedCurrencyLocale = Intl.NumberFormat(
		locale || "en-US",
		currencyOptions
	).format(value);

	return formattedCurrencyLocale;
};

/* -------------------- updating UI balance -------------------- */
const updateUIBalance = (account) => {
	if (!fetchedAccount) return console.error("please login");

	//balance values
	const { currentBalance, incoming, outcoming } = account.balance;

	const balances = [valueMainBalance, valueBalance];

	//updating Balance
	const updateBalanceElement = (element, value) => {
		element.textContent = currencyFormatter({ account, value });
	};

	balances.forEach((balance) => updateBalanceElement(balance, currentBalance));
	updateBalanceElement(valueIncoming, incoming);
	updateBalanceElement(valueOutcoming, outcoming);
};

/* -------------------- filtering movements -------------------- */
/** filtering movements
 *
 * @param {filterNumber} filterNumber values are 1,2,3,4
 * @returns array of sorted movements
 */
const filterMovements = (filterNumber) => {
	if (!fetchedAccount) return console.error("please login");

	const filterMethods = {
		1: () => fetchedAccount.movements,
		2: () =>
			fetchedAccount.movements
				.filter((movement) => !movement.isRequest)
				.sort((a, b) => a.movement - b.movement),
		3: () =>
			fetchedAccount.movements
				.filter((movement) => !movement.isRequest)
				.sort((a, b) => b.movement - a.movement),
		4: () =>
			fetchedAccount.movements
				.filter((movement) => movement.isRequest)
				.sort((a, b) => b.movement - a.movement),
	};
	const movements = filterMethods[filterNumber]
		? filterMethods[filterNumber]()
		: [];
	return movements;
};
/* --------------------******************** handeling login ********************-------------------- */
const welcomeMessage = document.querySelector(".welcome__message");
const welcomeMessageUser = document.querySelector(".welcome__message span");

const inputUsername = document.querySelector(".login__username");
const inputPin = document.querySelector(".login__pin");
const btnLogin = document.querySelector(".login__button");
let fetchedAccount;

btnLogin.addEventListener("click", (e) => {
	e.preventDefault();
	const usernameValue = inputUsername.value.toLowerCase().trim();
	const pinValue = +inputPin.value.trim();
	fetchedAccount = accounts.find(
		(account) => account.username === usernameValue && account.pin === pinValue
	);

	if (!fetchedAccount) return;

	//resetting filter
	updateMovementsIndicator(0);
	//reset message
	message();
	// Clear input fields on successful login
	inputUsername.value = "";
	inputPin.value = "";
	// showing content
	document.querySelector("main").classList.remove("is-hidden");
	// displaying movements
	updateMovements({ account: fetchedAccount });
	// welcome message
	welcomeMessage.innerHTML = "Welcome, ";
	welcomeMessage.insertAdjacentHTML(
		"beforeend",
		`<span>${fetchedAccount.username}!</span>` // Corrected closing tag
	);

	console.log(fetchedAccount);
	indicatorActionsNav.style.width = getComputedStyle(navItemActions).width;
});

/* --------------------******************** transactions sections ********************-------------------- */
/* -------------------- movements filter animation -------------------- */
const nav = document.querySelector(".movements__nav");
const movementItems = Array.from(document.querySelectorAll(".movements__item")); // Convert to array once
const movementsIndicator = document.querySelector(".movements__indicator");

/* -------------------- updating indicator for filter -------------------- */
// implementing movements filter
const updateMovementsIndicator = (index = 0) => {
	// Get the current item and its width
	const currentItem = movementItems[index];
	const currentElementWidth =
		parseFloat(getComputedStyle(currentItem).width) || 0;

	// Calculate the total width of previous elements
	const previousElementsWidth = movementItems
		.slice(0, index)
		.reduce(
			(acc, item) => acc + (parseFloat(getComputedStyle(item).width) || 0),
			0
		);
	// console.log(movementItems.slice(0, index));

	// Update CSS custom properties
	nav.style.setProperty("--index", index);
	nav.style.setProperty(
		"--elements-previous-width",
		`${previousElementsWidth}px`
	);
	nav.style.setProperty("--current-element-width", `${currentElementWidth}px`);

	// Toggle the active class
	movementItems.forEach((item) =>
		item.classList.remove("movements__item--active")
	);
	currentItem.classList.add("movements__item--active");

	console.log(previousElementsWidth, currentElementWidth); // Debugging info
};

// Initial call
updateMovementsIndicator();

//	/*------------- handeling click for filter -------------*/
// Event listener for clicks on navigation
nav.addEventListener("click", (e) => {
	e.preventDefault();
	const pressedItem = e.target.closest(".movements__item");
	if (!pressedItem) return; // Early return if no item found

	// Retrieve index from data attribute and update the indicator
	const index = parseInt(pressedItem.dataset.index, 10); // `-1` because of zero-based index
	console.log(index);

	updateMovementsIndicator(index - 1);

	updateMovements({
		account: fetchedAccount,
		customMovements: filterMovements(index),
		isFiltered: true,
	});

	console.log(filterMovements(index));
});

/*-------------************ displaying movements *************-------------*/

const movementsContainer = document.querySelector(".movements");

/**
 *
 * @param {account} account the account object
 * @param {customMovements} customMovements an array of movements
 * @param {isFiltered} account if true accepts customMovements as the movements
 * @returns fills the UI with the movements
 */
const updateMovements = ({
	account,
	customMovements = [],
	isFiltered = false,
} = {}) => {
	const movementsFragment = document.createDocumentFragment();
	const movements = isFiltered ? customMovements : account.movements;

	//	/*------------- updating UI balance -------------*/
	updateUIBalance(account);

	movements.forEach((movement) => {
		const type = movement.movement > 0 ? "deposit" : "withdrawal";
		const tempElementContainer = document.createElement("div");

		const request = movement.isRequest
			? `<div class="movement__request-buttons">
              <button class="btn btn--light movement__btn--deny">Deny</button>
              <button class="btn btn--light movement__btn--send">Send</button>
           </div>`
			: "";

		//	/*------------- formatting date  -------------*/
		const formattedDate = new Date(movement.date).toLocaleDateString("en-US");

		const dateOptions = {
			weekday: "short",
			year: "2-digit",
			month: "short",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit",
		};
		const formattedDateLocale = Intl.DateTimeFormat(
			account.locale,
			dateOptions
		).format(new Date(movement.date));

		const daysDifference = Math.floor(
			(new Date().getTime() - new Date(movement.date).getTime()) /
				(1000 * 60 * 60 * 24)
		);

		console.log(daysDifference);

		let date;
		switch (daysDifference) {
			case 0:
				date = `Today`;
				break;
			case 1:
				date = `Yesterday`;
				break;
			case 2:
				date = `${daysDifference} days ago`;
				break;
			case 3:
				date = `${daysDifference} day ago`;
				break;

			default:
				date = formattedDateLocale;
				break;
		}

		//	/*------------- formatting currency  -------------*/
		const formattedCurrency = currencyFormatter({
			account: account,
			value: movement.movement,
		});

		//	/*------------- building the fragment -------------*/
		const htmlString = `
        <div class="movement" data-id= ${movement.id}>
          <div class="movement__info">
            <div class="movement__user-photo">
              <img src="Assets/Users/webp/${
								movement.user
							}.webp" alt="Portrait of ${
			movement.user
		}" onerror= "this.onerror=null; this.src='Assets/Users/webp/default.webp'; this.alt='user ${
			movement.user
		}'" />
            </div>
            <p class="movement__user-name">${
							movement.user.charAt(0).toUpperCase() + movement.user.slice(1)
						}</p>
            <time class="movement__date" datetime="${formattedDate}">${date}</time>
          </div>
          ${request}
          <div class="movement__amount movement--${type}">${formattedCurrency}</div>
        </div>`;

		tempElementContainer.innerHTML = htmlString;
		movementsFragment.prepend(tempElementContainer.firstElementChild);
	});

	movementsContainer.innerHTML = "";
	movementsContainer.append(movementsFragment);
};

// updateMovements(account3);

/* --------------------******************** actions sections ********************-------------------- */
/* -------------------- hide balance -------------------- */
const hideBalance = (hide) => {
	if (hide === true) {
		valueMainBalance.textContent =
			valueBalance.textContent =
			valueIncoming.textContent =
			valueOutcoming.textContent =
				"****";
	}
	if (hide === false) {
		valueBalance.textContent = valueMainBalance.textContent = currencyFormatter(
			{
				account: fetchedAccount,
				value: fetchedAccount.balance.currentBalance,
			}
		);
		valueIncoming.textContent = currencyFormatter({
			account: fetchedAccount,
			value: fetchedAccount.balance.incoming,
		});
		valueOutcoming.textContent = currencyFormatter({
			account: fetchedAccount,
			value: fetchedAccount.balance.outcoming,
		});
	}
};

/* -------------------- rive -------------------- */
const canvas = document.getElementById("rive-canvas");
let isHidden = false; // Track visibility state
let isAnimating = false; // Track if animation is ongoing

// Set canvas resolution for clarity
canvas.width = 84;
canvas.height = 84;
canvas.style.width = "4.2rem";
canvas.style.height = "4.2rem";

const r = new rive.Rive({
	src: "Assets/riv/show_&_hide.riv",
	canvas: canvas,
	autoplay: false,
	stateMachines: "State Machine 1",
	fit: rive.Fit.cover,

	onLoad: () => {
		r.resizeDrawingSurfaceToCanvas();

		const inputs = r.stateMachineInputs("State Machine 1");
		const hoverInput = inputs.find((i) => i.name === "hover");
		const clickInput = inputs.find((i) => i.name === "click");

		// Confirm inputs are found
		console.log(inputs, hoverInput, clickInput);

		// Handle hover for desktop and touchstart for mobile
		const startHover = () => {
			if (hoverInput && !isAnimating) {
				hoverInput.value = true;
				r.play();
			}
		};

		const endHover = () => {
			if (hoverInput && !isAnimating) {
				hoverInput.value = false;
				r.play();
			}
		};

		canvas.addEventListener("mouseenter", startHover);
		canvas.addEventListener("mouseleave", endHover);
		canvas.addEventListener("touchstart", startHover);
		canvas.addEventListener("touchend", endHover);

		// Handle click events for both desktop and mobile with debounce
		const handleClick = () => {
			if (!isAnimating) {
				isAnimating = true; // Block further clicks during animation
				isHidden = !isHidden;
				hideBalance(isHidden); // Update balance visibility

				if (clickInput) clickInput.fire();
				r.play();

				// Reset animation state after 1s (animation duration)
				setTimeout(() => {
					isAnimating = false;
				}, 1000);
			}
		};

		canvas.addEventListener("click", handleClick);
		canvas.addEventListener("touchend", handleClick); // Trigger on touchend for mobile
	},
});

/* -------------------- action navingatoin side -------------------- */
const navActions = document.querySelector(".actions__actions");
const navItemActions = document.querySelector(".actions__actions > ul > li");
const navItemsActionsArr = Array.from(navActions.firstElementChild.children);
const indicatorActionsNav = document.querySelector(".actions__indicator");

//initializing the initial width for the navitem
indicatorActionsNav.style.width = getComputedStyle(navItemActions).width;

navActions.addEventListener("click", (e) => {
	const clicked = e.target.closest("li");

	if (!clicked) return;
	navItemsActionsArr.forEach((item) =>
		item.firstElementChild.setAttribute("aria-selected", false)
	);

	//setting the tranform value
	navActions.style.setProperty("--index", clicked.dataset.index);
	//setting the selected element
	clicked.firstElementChild.setAttribute("aria-selected", true);

	const navActionsSelected = {
		selectedIndex: +clicked.dataset.index,
	};

	navActionsSelected.selectedIndex === 0
		? ((btnActions.innerHTML = "Send"), btnActions.setAttribute("role", "send"))
		: ((btnActions.innerHTML = "Request"),
		  btnActions.setAttribute("role", "request"));

	console.log(navActionsSelected);
});

/* -------------------- handeling sending and requesting -------------------- */
const balanceCalculator = ({ account, isSender = true, amount }) => {
	const incoming = isSender
		? account.balance.incoming
		: account.balance.incoming + amount;

	const outcoming = isSender
		? account.balance.outcoming - amount
		: account.balance.outcoming;

	const currentBalance = incoming + outcoming;

	account.balance = { incoming, outcoming, currentBalance };
	console.log(account);
};

/* -------------------- handeling sending and requesting -------------------- */
const movementPusher = ({
	currentAccount,
	destinationAccount,
	amount,
	isRequest = false,
}) => {
	console.log(amount);

	destinationAccount.movements.push({
		id: destinationAccount.movements.length + 1,
		movement: amount,
		user: currentAccount.username,
		date: new Date().toISOString(),
		isRequest: isRequest,
	});
};
const actionExcuter = ({ username, amount, role, userDestination }) => {
	console.log(username, amount, role, userDestination);
	console.log(role);

	if (role === "send") {
		if (fetchedAccount.balance.currentBalance >= amount) {
			console.log(userDestination);

			//the balance should be deducted from this account
			balanceCalculator({
				account: fetchedAccount,
				isSender: true,
				amount: amount,
			});
			//the deducted balance should be added to this account
			balanceCalculator({
				account: userDestination,
				isSender: false,
				amount: amount,
			});

			//pushing movement in sender account
			movementPusher({
				currentAccount: fetchedAccount,
				destinationAccount: userDestination,
				amount: amount,
				isRequest: false,
			});

			//pushing movement in reciever account
			movementPusher({
				currentAccount: userDestination,
				destinationAccount: fetchedAccount,
				amount: -amount,
				isRequest: false,
			});
			//updating current movements
			updateMovements({ account: fetchedAccount });

			//displaying message
			message({
				message: "Sent Successfuly!",
				type: "success",
				animate: false,
			});

			//clearing input fields
			valueActionsAmount.value = valueActionsUser.value = "";
		} else {
			message({
				message: "Insufficient balance!!",
				type: "err",
				animate: true,
			});
			return;
		}
	} else if (role === "request") {
		console.log("requested");
		//pushing movement in destination account
		movementPusher({
			currentAccount: fetchedAccount,
			destinationAccount: userDestination,
			amount: amount,
			isRequest: true,
		});
		message({
			message: "Request successfully sent!",
			type: "success",
			animate: false,
		});
		valueActionsAmount.value = valueActionsUser.value = "";
	}
};

/* -------------------- handeling responding to requests -------------------- */
//handeling request responding
movementsContainer.addEventListener("click", (e) => {
	const clicked = e.target;

	if (!clicked.classList.contains("btn")) return;
	const role = clicked.textContent.toLowerCase();
	const currentRequest = clicked.closest(".movement");
	const movementIndex = +currentRequest.dataset.id - 1;
	const movement = fetchedAccount.movements[movementIndex];

	const destinationAccount = accounts.find(
		(account) => account.username === movement.user
	);
	if (role === "send") {
		const actionPackage = {
			userDestination: destinationAccount,
			username: fetchedAccount,
			amount: +movement.movement,
			role: role,
		};

		actionExcuter(actionPackage);
		if (movement.movement > fetchedAccount.balance.currentBalance) return;

		//resetting filter
		updateMovementsIndicator(0);
		fetchedAccount.movements.splice(movementIndex, 1);
		updateMovements({ account: fetchedAccount });
	} else if (role === "deny") {
		updateMovementsIndicator(0);
		fetchedAccount.movements.splice(movementIndex, 1);
		updateMovements({ account: fetchedAccount });
	}
});

/* -------------------- 		display message			 -------------------- */
const actionMessage = document.querySelector(".actions__message");

const message = ({ message = "", type = "", animate = true } = {}) => {
	actionMessage.innerHTML = message || "<br>";
	const color =
		type === "err"
			? "#9b2d2d"
			: type === "success"
			? "rgb(67 120 6)"
			: "#2b5869";

	actionMessage.style.color = color;

	if (!animate) return;

	actionMessage.classList.remove("wiggle");
	void actionMessage.offsetWidth;
	actionMessage.classList.add("wiggle");
};

/* -------------------- action side -------------------- */

const btnActions = document.querySelector(".action__btn");
const valueActionsAmount = document.querySelector(".actions__amount");
const valueActionsUser = document.querySelector(".actions__user");

btnActions.addEventListener("click", (e) => {
	e.preventDefault();

	const user = valueActionsUser.value;
	const amount = +valueActionsAmount.value;
	const role = btnActions.getAttribute("role");

	if (!fetchedAccount) {
		message({ message: "Please login first", type: "err" });
		return console.log("Please login first");
	}

	if (!(user && amount)) {
		message({ message: "You must fill the fields", type: "err" });
		return console.log("you must fill the fields ");
	}

	if (amount > 999999) {
		message({
			message: `The maximum amount is ${(999999).toLocaleString(
				fetchedAccount.locale
			)}`,
			type: "err",
		});
		return console.log(
			`The maximum amount is ${(999999).toLocaleString(fetchedAccount.locale)}`
		);
	}

	if (amount < 10) {
		message({ message: "Minimum amount to send/request is 10", type: "err" });
		return console.log("Minimum amount to send/request is 10");
	}

	if (user === fetchedAccount.username) {
		message({ message: "You can't send/request to yourself", type: "err" });
		return console.log("You can't send/request to yourself");
	}

	const destinationAccount = accounts.find(
		(account) => account.username === user
	);

	if (!destinationAccount) {
		message({ message: "This user couldn't be found", type: "err" });
		return console.log("this user couldn't be found");
	}

	const actionPackage = {
		userDestination: destinationAccount,
		username: user,
		amount: amount,
		role: role,
	};

	actionExcuter(actionPackage);
});
/* --------------------******************** close section ********************-------------------- */
/*`
<div
					class="modal"
					role="dialog"
					aria-labelledby="modal-title"
					aria-describedby="modal-content"
				>
					<button
						class="modal__close"
						aria-label="Close modal"
					>
						x
					</button>
					<!-- Close button -->
					<h2
						class="modal__title"
						id="modal-title"
					>
						Close Account – Donation of Remaining Balance
					</h2>
					<div class="modal__content-wrapper">
						<p
							class="modal__content"
							id="modal-content"
						>
							You have a balance of <strong>$X.XX</strong> in your account. By
							closing your account, the remaining balance will be automatically
							donated to <strong>Charity</strong>. This action is permanent, and
							your account will be closed forever. Are you sure you want to
							proceed and donate the balance?
						</p>
						<div
							class="modal__checkbox"
						>
							<button
								class="modal__btn"
								aria-label="checkbox"
								aria-checked="false"
							></button>
							<p>*yes, I agree</p>
						</div>
					</div>
					<div class="modal__buttons">
						<!-- Your buttons go here -->
						<button
							role="cancel"
							class="btn btn--primary-light"
						>
							Cancel
						</button>
						<button
							role="leave"
							class="btn btn--primary-red"
						>
							Leave Sendy
						</button>
					</div>
				</div>
				<div class="modal__bg"></div>
`;*/

const accountCloseBtn = document.querySelector(".account__close-btn");
accountCloseBtn.addEventListener("click", () => {
	if (!fetchedAccount) return;

	const accountBalance = fetchedAccount.balance.currentBalance;

	modalTitle.innerHTML =
		accountBalance < 0
			? "Close Account – Negative Balance Alert"
			: "Close Account – Donation of Remaining Balance";

	modalContent.innerHTML =
		accountBalance < 0
			? 

		`
			Your account has a negative balance of <strong>${accountBalance.toLocaleString(
				fetchedAccount.locale,
				{ style: "currency", currency: fetchedAccount.currency }
			)}</strong> You must settle this balance before closing your account. Please add funds to bring your account to a zero or positive balance before proceeding.
`
			:
		`
			You have a balance of <strong>${accountBalance.toLocaleString(
				fetchedAccount.locale,
				{ style: "currency", currency: fetchedAccount.currency }
			)}</strong> in your account. By
			closing your account, the remaining balance will be automatically
			donated to <strong>Charity</strong>. This action is permanent, and
			your account will be closed forever. Are you sure you want to
			proceed and donate the balance?`;
	accountBalance < 0
		? modalCheckbox.classList.remove("is-hidden")
		: modalCheckbox.classList.add("is-hidden");

	modalButtonsWrapper.innerHTML =
		accountBalance < 0
			?
		`<button
							role="cancel"
							class="btn btn--primary"
						>
							Add funds
						</button>`
			: 
		 `<button
							role="cancel"
							class="btn btn--primary-light"
						>
							Cancel
						</button>
						<button
							role="leave"
							class="btn btn--primary-red"
						>
							Leave Sendy
						</button>`;

	modalAccountTrigger("show");
});
/* --------------------******************** modal sections ********************-------------------- */

/* -------------------- info modal filler -------------------- */
const modalAccountNumber = document.querySelector(".info__account-number");
const modalAccountName = document.querySelector(".info__account-name");
const modalAccountPin = document.querySelector(".info__account-pin");
const modalAccountLocale = document.querySelector(".info__account-locale");
const modalAccountCurrency = document.querySelector(".info__account-currency");
const modalAccountMovementsNumber = document.querySelector(
	".info__account-movements"
);
const modalAccountBalance = document.querySelector(".info__account-balance");

((accounts) => {
	accounts.forEach((account, i) => {
		modalAccountNumber.insertAdjacentHTML("beforeend", `<span>${i + 1}</span>`);
		modalAccountName.insertAdjacentHTML(
			"beforeend",
			`<span>${account.username}</span>`
		);
		modalAccountPin.insertAdjacentHTML(
			"beforeend",
			`<span>${account.pin}</span>`
		);
		modalAccountLocale.insertAdjacentHTML(
			"beforeend",
			`<span>${account.locale}</span>`
		);
		modalAccountCurrency.insertAdjacentHTML(
			"beforeend",
			`<span>${account.currency}</span>`
		);
		modalAccountMovementsNumber.insertAdjacentHTML(
			"beforeend",
			`<span>${account.movements.length}</span>`
		);
		modalAccountBalance.insertAdjacentHTML(
			"beforeend",
			`<span>${account.balance.currentBalance.toLocaleString()}</span>`
		);
		console.log(account);
	});
})(accounts);

/* -------------------- modals -------------------- */

const modalWindow = document.querySelector(".modal__window");

const modalInfo = document.querySelector(".modal__info-wrapper");
const modalAccount = document.querySelector(".modal");

const modalBG = document.querySelector(".modal__bg");

const modalTitle = document.querySelector(".modal__title");
const modalContent = document.querySelector(".modal__content");
const modalBalanceText = modalWindow.querySelector("strong");
const modalCheckbox = document.querySelector(".modal__checkbox");

const modalButtonsWrapper = document.querySelector(".modal__buttons");

const btnModalClose = document.querySelector(".modal__close");
const btnCheckBox = modalCheckbox.querySelector("button");

const btnInfo = document.querySelector(".header__info-button");

btnInfo.addEventListener("click", () => {
	console.log("btn clicked");

	modalinfoTrigger("show");
});

const modalinfoTrigger = (state) => {
	if (state === "remove") {
		modalWindow.classList.add("is-hidden");
		modalInfo.classList.add("is-hidden");
	} else if (state === "show") {
		modalWindow.classList.remove("is-hidden");
		modalInfo.classList.remove("is-hidden");
	} else {
		console.log("something wrong happened");
	}
};
const modalAccountTrigger = (state) => {
	if (state === "remove") {
		modalWindow.classList.add("is-hidden");
		modalAccount.classList.add("is-hidden");
	} else if (state === "show") {
		modalWindow.classList.remove("is-hidden");
		modalAccount.classList.remove("is-hidden");
	} else {
		console.log("something wrong happened");
	}
};

let isAgreed = false;

const toggleCheckbox = () => {
	isAgreed = !isAgreed;
	btnCheckBox.setAttribute("aria-checked", isAgreed);
};

modalWindow.addEventListener("click", (e) => {
	const clicked = e.target;

	//modal close button
	if (clicked === btnModalClose) {
		console.log("closed");
		modalAccountTrigger("remove");
		modalCheckbox.classList.remove("focus");
	}

	//modal checkbox
	if (clicked.closest(".modal__checkbox")) {
		console.log("checkbox checked");

		toggleCheckbox();
		modalCheckbox.classList.remove("focus");
	}

	//modal buttons
	if (clicked.classList.contains("btn")) {
		console.log(`btn: ${clicked.role} Clicked`);
		const role = clicked.role;

		if (role === "leave") {
			if (btnCheckBox.getAttribute("aria-checked") === "false") {
				console.log("please check the checkbox");
				modalCheckbox.classList.add("focus");
				btnCheckBox.focus();
			} else {
				console.log("account closed");
				const currentAccountIndex = accounts.findIndex(
					(account) => account.username === fetchedAccount.username
				);

				accounts.splice(currentAccountIndex, 1);
				resetUI();
				document.querySelector("main").classList.add("is-hidden");
				modalAccountTrigger("remove");
				modalinfoTrigger("remove");

				toggleCheckbox();
			}
		}
		if (role === "cancel") {
			modalAccountTrigger("remove");
			modalinfoTrigger("remove");
			modalCheckbox.classList.remove("focus");
		}
	}

	//modal background
	if (clicked === modalBG) {
		console.log("modal background");
		modalAccountTrigger("remove");
		modalinfoTrigger("remove");
		modalCheckbox.classList.remove("focus");
	}
});

/* --------------------******************** reset UI ********************-------------------- */
const resetUI = () => {
	valueBalance.textContent =
		valueIncoming.textContent =
		valueOutcoming.textContent =
		valueMainBalance.textContent =
			0;

	movementsContainer.innerHTML = "";

	welcomeMessage.textContent = "Please login!";

	message("");
};
