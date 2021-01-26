function fetchdata() {
	fetch('demo.json')
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			const html = data.data.map((user) => {
				return `
      <div class='user'>
      <h3>Name: ${user.businessName}</h3>
      <h4>Business Start Date: ${user.businessStartDate}</h4>
      <p>Status: ${user.status}</p>
      <h4>Price Plan: ${user.pricePlan}</h4>
      <h4>Phone No: ${user.blingPhoneNumber}</h4>
      <p>Manager Name: ${user.managerName}</p>
      <h4>Business Id: ${user.businessId}</h4>
      </div>
      `;
			});

			document.querySelector('#app').insertAdjacentHTML('afterbegin', html);
		})
		.catch((error) => {
			console.log(error);
		});
}
fetchdata();
