// console.log(`==> Running on the sever side only @home page`);

import { CMS_URL } from '$env/static/private';

const cms = async () => {
	const res = await fetch(`${CMS_URL}/api/hero-section?populate=*`);
	const returnedData = await res.json();

	const bgImage = returnedData.data.attributes.BackgroundImage.data.attributes.url;
	// console.log('🚀 returnedData:', returnedData.data.attributes.localizations.data);

	return bgImage;
};

export function load() {
	const url = cms();

	return { url };
}
