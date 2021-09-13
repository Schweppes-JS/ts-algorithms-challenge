interface GoodsInterface {
	item: string;
	type: string;
	weight?: number;
	quantity?: number;
	pricePerKilo?: string;
	pricePerItem?: string;
}

const getCost = (goods: GoodsInterface[]): string => {
	const getPrice = (commodity: GoodsInterface): number => parseFloat(commodity.pricePerItem?.replace("$", "").replace(",", ".") || commodity.pricePerKilo?.replace("$", "").replace(",", "."));

	const getCheapest = (type: string): string => {
		let cheapestCommodity = null;
		let cheapestPrice = null;
		goods.forEach((commodity) => {
			if (commodity.item === type && (getPrice(commodity) < cheapestPrice || cheapestPrice === null)) {
					cheapestPrice = getPrice(commodity);
					cheapestCommodity = commodity.type;
			}
		});
		return cheapestCommodity;
	};

	const getTotalCost = (type: string): string => {
		let totalCost = 0;
		goods.forEach((commodity) => {
			if (commodity.item === type) {
				totalCost = totalCost + getPrice(commodity);
			} else if (type === "all") {
				totalCost = totalCost + getPrice(commodity);
			}
		});
		return `\$${totalCost.toFixed(2).toString().replace(".", ",")}`;
	};

	console.log(`Watermelons - ${goods.reduce((prev, current) => (current.item === "watermelon" ? prev + current.quantity : prev), 0)}`);
	console.log(`Apples - ${goods.reduce((prev, current) => (current.item === "apple" ? prev + current.weight : prev), 0)}`);
	console.log(goods.sort((current, next) => (current.item < next.item ? -1 : 1)));
	console.log(goods.sort((current, next) => getPrice(current) - getPrice(next)));
	console.log(`The cheapest orange type is: ${getCheapest("orange")}`);
	console.log(`Apples - ${getTotalCost("apple")}, Pineapples - ${getTotalCost("pineapple")}, Watermelons - ${getTotalCost("watermelon")}, Oranges - ${getTotalCost("orange")}`);
	return `${getTotalCost("all")}`;
};

const goods = [
	{ item: "apple", type: "Fuji", weight: 10, pricePerKilo: "$3" },
	{ item: "orange", type: "Clementine", weight: 6, pricePerKilo: "$7" },
	{ item: "watermelon", type: "Nova", quantity: 1, pricePerItem: "$5" },
	{ item: "orange", type: "Navel", weight: 6, pricePerKilo: "$7" },
	{ item: "pineapple", type: "Queen", quantity: 4, pricePerItem: "$15" },
	{ item: "pineapple", type: "Pernambuco", quantity: 3, pricePerItem: "$12" },
	{ item: "apple", type: "Cameo", weight: 6, pricePerKilo: "$7" },
	{ item: "watermelon", type: "Trio", quantity: 2, pricePerItem: "$9" },
	{ item: "pineapple", type: "Red Spanish", quantity: 3, pricePerItem: "$9,99" },
	{ item: "watermelon", type: "Millionaire", quantity: 2, pricePerItem: "$7" },
	{ item: "orange", type: "Tangerine", weight: 4, pricePerKilo: "$4,99" },
	{ item: "apple", type: "Jazz", weight: 4, pricePerKilo: "$5" },
];

console.log(getCost(goods));
