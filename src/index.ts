import retail from './libs/retail.js';

class qtail {
	public static version = [2, 0, 0];
	private nick: string;
	private tail: string;
	private compatible: boolean = false;
	private static UnicodeCtrlChars = [
		['\u202a', '\u202b'],
		['\u2066', '\u2067']
	];

	constructor(nick: string, tail: string, compatible?: boolean) {
		if(!nick || !tail) throw new Error(':( prams cannot be empty.');
		this.nick = nick;
		this.tail = tail;
		this.compatible = compatible || false;
	}

	public update(nick: string, tail: string, compatible?: boolean): void {
		if(!nick || !tail) throw new Error(':( prams cannot be empty.');
		this.nick = nick;
		this.tail = tail;
		this.compatible = compatible || false;
	}
	public upd = this.update;

	public generate(): string {
		const chart = this.compatible? qtail.UnicodeCtrlChars[1]: qtail.UnicodeCtrlChars[0];
		return `${this.nick}${chart[1]}${retail(this.tail)}${chart[0]}`;
	}
	public gen = this.generate;
}

export default qtail;