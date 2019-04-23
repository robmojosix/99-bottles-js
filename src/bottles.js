const capitalise = string => string.charAt(0).toUpperCase() + string.slice(1);

class Bottle {
	constructor(number) {
		this.number = number;
	}

	container() {
		return this.number === 1 ? "bottle" : "bottles";
	}

	quantity() {
		return this.number === 0 ? "no more" : this.number.toString();
	}

	pronoun() {
		return this.number === 1 ? "it" : "one";
	}

	action() {
		return this.number === 0
			? "Go to the store and buy some more"
			: `Take ${this.pronoun(this.number)} down and pass it around`;
	}

	successor() {
		return this.number === 0 ? 99 : this.number - 1;
	}
}

export const verse = number => {
	const bottle = new Bottle(number);
	const nextBottle = new Bottle(bottle.successor());

	return (
		`${capitalise(bottle.quantity())} ${bottle.container()} of beer on the wall, ` +
		`${bottle.quantity()} ${bottle.container()} of beer.\n` +
		`${bottle.action()}, ` +
		`${nextBottle.quantity()} ${nextBottle.container()} of beer on the wall.\n`
	);
};

export const verses = (start = 99, end = 0) => {
	return Array.from(Array(start + 1).keys())
		.slice(end)
		.reverse()
		.map(verse)
		.join("\n");
};

export const song = () => verses();
