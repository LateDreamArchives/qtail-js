export default (tail: string): string =>
  tail.replace(/(.*?)([!-~]+)$/, "$2$1");
