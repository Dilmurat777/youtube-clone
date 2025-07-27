export const API_KEY = 'AIzaSyBOFwCu3E6SU2ZEzmZ0bLrNqfZ_Gu7i3Fg'


export const valueConverter = (value) => {
	if (value > 1000000) {
		return (value / 1000000).toFixed(1) + 'M';
	} else if (value > 1000) {
		return (value / 1000).toFixed(1) + 'K';
	} else {
		return value
	}
}
