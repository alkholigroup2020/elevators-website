export function conversionTracking(node: HTMLElement, options: { tag: string }) {
	function reportConversion() {
		gtag('event', 'conversion', {
			send_to: options.tag
		});
	}

	node.addEventListener('click', reportConversion);

	return {
		destroy() {
			node.removeEventListener('click', reportConversion);
		}
	};
}
