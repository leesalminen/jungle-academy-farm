try {
	var passwordEntered = localStorage.getItem('passwordEntered')

	if(!passwordEntered || passwordEntered !== 'yes') {
		document.querySelector('body').style.display = 'none'

		setTimeout(() => {
			var password = prompt("Enter the password to view the site")

			if(password !== 'jungleacademy2022') {
				setTimeout(() => {
					document.write('Incorrect Password!')
				}, 300)
			} else {
				document.querySelector('body').style.display = 'initial'
				localStorage.setItem('passwordEntered', 'yes')
			}
		}, 250)
	} else {
		document.querySelector('body').style.display = 'initial'
	}
} catch (e) {
	console.warn(e)
}