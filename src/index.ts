import retail from './libs/retail.js';
import { version } from '../package.json';

const UnicodeCtrlChars = [
	['\u202a', '\u202b'],
	['\u2066', '\u2067']
];

class Qtail {
	public static version = version.split('.').map(v => parseInt(v));
	private nick?: string;
	private tail?: string;
	private compatible: boolean;

	constructor(nick?: string, tail?: string, compatible?: boolean) {
		this.nick = nick;
		this.tail = tail;
		this.compatible = compatible || !0;
	}

	public update(nick: string, tail: string, compatible?: boolean): void {
		this.nick = nick;
		this.tail = tail;
		typeof compatible === 'boolean' && (this.compatible = compatible);
	}
	public upd = this.update;

	public generate(): string {
		if(!this.nick || !this.tail) throw new Error(':( prams cannot be empty.');
		const chart = this.compatible? UnicodeCtrlChars[1]: UnicodeCtrlChars[0];
		return `${this.nick}${chart[1]}${retail(this.tail)}${chart[0]}`;
	}
	public gen = this.generate;
}

export default Qtail;