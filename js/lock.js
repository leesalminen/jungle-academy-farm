try {
	var passwordEntered = localStorage.getItem('passwordEntered')

	if(!passwordEntered || passwordEntered !== 'yes') {
		document.querySelector('body').style.display = 'none'

		var password = prompt("Enter the password to view the site")

		if(password !== 'jungleacademy2022') {
			setTimeout(() => {
				document.write('Incorrect Password!')
			}, 500)
		} else {
			document.querySelector('body').style.display = 'initial'
			localStorage.setItem('passwordEntered', 'yes')
		}
	} else {
		document.querySelector('body').style.display = 'initial'
	}
} catch (e) {
	console.warn(e)
}