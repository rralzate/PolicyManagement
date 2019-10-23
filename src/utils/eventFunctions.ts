

export const BLOCK_SCREEN_EVENT: Event = new Event('block-screen');
export const UNBLOCK_SCREEN_EVENT: Event = new Event('unblock-screen');

export function blockScreen() {
	document.dispatchEvent(BLOCK_SCREEN_EVENT);
}

export function unblockScreen() {
	document.dispatchEvent(UNBLOCK_SCREEN_EVENT);
}
