class Queue {
	constructor() {
		this.storeData = [];
	}
	add(record) {
		this.storeData.unshift(record);
	}
	remove() {
		this.storeData.pop();
	}
	peek() {
		return this.storeData[this.storeData.length - 1];
	}
}
