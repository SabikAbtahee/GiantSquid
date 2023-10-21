export const toggleFullScreen = (): void => {
	const doc = window.document;
	const docEl = doc.documentElement;

	const requestFullScreen = docEl.requestFullscreen;
	const cancelFullScreen = doc.exitFullscreen;

	if (!doc.fullscreenElement) {
		requestFullScreen.call(docEl);
	} else {
		cancelFullScreen.call(doc);
	}
};
