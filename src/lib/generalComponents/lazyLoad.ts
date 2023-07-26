// Define the options for the Intersection Observer
// root: null - observes intersections with the top-level document's viewport
// rootMargin: '0px' - no margins are added to the root's bounding box
// threshold: 0 - callback will be invoked when the target's visibility passes the 0% visibility mark
// Define the options for the Intersection Observer

const options: IntersectionObserverInit = {
	root: null,
	rootMargin: '0px',
	threshold: 0
};

// Define the type for the source of an image
type SrcType = string;

// Define the type for an image element
type ImageElementType = HTMLImageElement;

// Define the lazyLoad function
export const lazyLoad = (image: ImageElementType, src: SrcType) => {
	// Function to handle the image loading
	const loaded = () => {
		image.style.opacity = '1'; // set the opacity to 1 to make the image visible
	};

	// Create an Intersection Observer
	const observer = new IntersectionObserver((entries) => {
		// On intersection
		if (entries[0].isIntersecting) {
			image.src = src; // replace the placeholder src with the actual image src
			// If the image is already loaded
			if (image.complete) {
				loaded(); // call the loaded function to make the image visible
			} else {
				image.addEventListener('load', loaded); // if not, add a load event listener to call loaded once the image is fully loaded
			}
		}
	}, options);

	observer.observe(image); // start observing the image

	return {
		// Cleanup function
		destroy() {
			image.removeEventListener('load', loaded); // remove the load event listener
		}
	};
};
