const head=document.querySelector('.app-header');
const main=document.querySelector('.app-main');
const footer=document.querySelector('.app-footer');

//header content
const logo=document.createElement('img');
logo.className='logo';
logo.src='fff.png';

const appName=document.createElement('h1');
appName.textContent='Orion';
appName.className='name';

const menu = document.createElement('span');
menu.className = 'material-icons';
menu.innerText = 'menu';
menu.id='menu';

menu.addEventListener('click', () => {
	const overlay = document.createElement('div');
	overlay.style.position = 'fixed';
	overlay.style.top = '0';
	overlay.style.left = '0';
	overlay.style.width = '100vw';
	overlay.style.height = '100vh';
	overlay.className='overlay';
	overlay.style.zIndex = '999';
	overlay.id = 'menu-overlay';

	const sideMenu = document.createElement('div');
	sideMenu.style.position = 'fixed';
    sideMenu.className='side-menu';
	sideMenu.style.top = '0';
	sideMenu.style.right = '0';
	sideMenu.style.boxShadow = '-2px 0 8px rgba(0,0,0,0.2)';
	sideMenu.style.display = 'flex';
	sideMenu.style.flexDirection = 'column';
	sideMenu.style.transition = 'transform 0.3s ease';
	sideMenu.style.transform = 'translateX(0)';
	sideMenu.id = 'side-menu';

	const menuHeader = document.createElement('h2');
	menuHeader.innerText = 'citystore';
	menuHeader.style.fontSize = '1.5rem';
    menuHeader.className='pop-headings';

    const closeure=document.createElement('span');
    closeure.className='material-icons';
    closeure.innerText='close';
    closeure.style.cursor='pointer';
    closeure.id='closure';

    const headers=document.createElement('p');
    headers.className='side-header';

    headers.appendChild(menuHeader)
    headers.appendChild(closeure)
	sideMenu.appendChild(headers);

	const menuList = [
        'about',
		'services',
		'my profile',
		'sell with us',
		'legit sellers',
		'settings',
		'privacy policy',
		'terms and conditions',
		'need help'
    ];
    menuList.forEach(list => {
        const menuItem=document.createElement('li');
        menuItem.className='lists';
        menuItem.innerText=list; 
     sideMenu.appendChild(menuItem);
	 menuItem.addEventListener('click', () => {
		const newItemsModal = document.querySelector('.default-display');
		if (newItemsModal) {
			newItemsModal.innerHTML = ''; 
			mainTitle.innerText = ``;
			if(list === 'about'){
				overlay.remove()
				mainTitle.innerHTML=`${list}`;
				const aboutContent = document.createElement('div');
				aboutContent.className = 'about-content';

				const aboutText = document.createElement('main');
				aboutText.innerHTML = `
				<marquee behavior='alternate'>Welcome to the CityStore !</marquee>
				 <h3>
				 We offer a wide range of products to cater to your 
				 urban lifestyle
				 </h3>
				 <strong><h3 class='pop-headings'>Background;</h3></strong>
				 With a humble and weak background that was set by 
				 a number of individuals in the august of 2022,as citystore we have managed idealise,innovate and extend our goods and services to our 
				 beloved and esteemed clients in all their regions.
				 <h3 class='pop-headings'>what we do;</h3>
				 As citystore,we offer variety of products such as;<br>
				 <li>
				 <div class='accordion'>
				 <input type='radio' name='accordion' id='accordion1'/>
				 <label for='accordion1'>Accessories</label>
				 <div class='accordion-content'>Citystore offers you variety of modern,pocket and user friendly
				 accessories wherever you are.From different manufacturing companies as required by the client.<br><br>
				 <strong>NOTE:</strong>You are requsted to read carfully the details of a given 
				 item before placing an order</div>
				 </div>
				 </li>
				 <li>
				 <div class='accordion'>
				 <input type='radio' name='accordion' id='accordion2'/>
				 <label for='accordion1'>Gadgets</label>
				 <div class='accordion-content'>Gadgets</div>
				 </div>
				 </li>
				 <li>
				 <div class='accordion'>
				 <input type='radio' name='accordion' id='accordion2'/>
				 <label for='accordion1'>Entertainment</label>
				 <div class='accordion-content'>Gadgets</div>
				 </div>
				 </li>
				 <li>
				 <div class='accordion'>
				 <input type='radio' name='accordion' id='accordion2'/>
				 <label for='accordion1'>Electrical installation</label>
				 <div class='accordion-content'>Gadgets</div>
				 </div>
				 </li>
				 <li>
				 <div class='accordion'>
				 <input type='radio' name='accordion' id='accordion2'/>
				 <label for='accordion1'>Transportation</label>
				 <div class='accordion-content'>Gadgets</div>
				 </div>
				 </li>


				 `;
				aboutContent.appendChild(aboutText);

				newItemsModal.appendChild(aboutContent);
			} else if(list === 'services'){
				overlay.remove()
				mainTitle.innerHTML=`${list}`;
				const servicesContent = document.createElement('div');
				servicesContent.className = 'services-content';

				const servicesText = document.createElement('p');
				servicesText.innerText = 'Our services include product customization, fast shipping, and 24/7 customer support.';
				servicesContent.appendChild(servicesText);
				newItemsModal.appendChild(servicesContent);
			} else if(list === 'my profile'){
				overlay.remove()
				mainTitle.innerHTML=`${list}`;
				const profileContent = document.createElement('div');
				profileContent.className = 'profile-content';

				const profileText = document.createElement('p');
				profileText.innerText = 'Manage your profile settings and preferences.';
				profileContent.appendChild(profileText);

				newItemsModal.appendChild(profileContent);
			} else if(list === 'sell with us'){
				overlay.remove()
				mainTitle.innerHTML=`${list}`;
				const sellContent = document.createElement('div');
				sellContent.className = 'sell-content';

				const sellText = document.createElement('p');
				sellText.innerText = 'Join us as a seller and showcase your products to a wider audience.';
				sellContent.appendChild(sellText);

				newItemsModal.appendChild(sellContent);

			} else if(list === 'settings'){
				overlay.remove()
				mainTitle.innerHTML=`${list}`;
				const settingsContent = document.createElement('div');
				settingsContent.className = 'settings-content';

				const settingsText = document.createElement('p');
				settingsText.innerText = 'Adjust your application settings and preferences.';
				settingsContent.appendChild(settingsText);
				//settings list
				const settingsList=document.createElement('div');
				settingsList.className='settings-list';

				const theme=document.createElement('li');
				theme.className='lines';
				theme.innerText='app theme';
				//theme function
				theme.addEventListener('click',()=>{
					const themes=document.createElement('div');
					themes.className='themes';
					//themes in themes()
					const themeIcons=[
						'light mode',
						'dark mode',
					];
					themeIcons.forEach(themeIcon=>{
						const themeShell=document.createElement('button');
						themeShell.className='theme-shell';
						themeShell.innerText=themeIcon;
						themes.appendChild(themeShell)
						if(themeIcon==='light mode'){
							themeShell.addEventListener('click',()=>{
								document.body.style.backgroundColor='white';
								main.style.color='black';
							});
						}if(themeIcon==='dark mode'){
							themeShell.addEventListener('click',()=>{
								document.body.style.backgroundColor='rgb(12,3,36)';
								main.style.color='white';
							});
						}
					});
					newItemsModal.appendChild(themes)
					try {
					theme.remove()	
					} catch (error) {
					}
				});
				settingsList.appendChild(theme);

				const language=document.createElement('li');
				language.className='lines';
				language.innerText='change language';
				//language function
				language.addEventListener('click',()=>{
					const languages=document.createElement('div');
					languages.className='languages';

					
					newItemsModal.appendChild(languages);
					
				});
				settingsList.appendChild(language);

				const text=document.createElement('li');
				text.className='lines';
				text.innerText='change font size';
				settingsList.appendChild(text);
				
				settingsContent.appendChild(settingsList)
				newItemsModal.appendChild(settingsContent)
				newItemsModal.appendChild(theme)
			}else if(list=== 'legit sellers'){
				overlay.remove()
				mainTitle.innerHTML=`${list}`;
				const legitSellers=document.createElement('div');
				legitSellers.className='legit-sellers';

				const legitSellersText=document.createElement('p');
				legitSellersText.className='legit-sellers-text'
			}else if(list === 'privacy policy'){
				overlay.remove()
				mainTitle.innerHTML=`${list}`;
				const privacyContent = document.createElement('div');
				privacyContent.className = 'privacy-content';

				const privacyText = document.createElement('p');
				privacyText.innerText = 'Your privacy is important to us. Read our privacy policy to learn more.';
				privacyContent.appendChild(privacyText);

				newItemsModal.appendChild(privacyContent);
			} else if(list === 'terms and conditions'){
				overlay.remove()
				mainTitle.innerHTML=`${list}`;
				const termsContent = document.createElement('div');
				termsContent.className = 'terms-content';

				const termsText = document.createElement('p');
				termsText.innerText = 'Please read our terms and conditions before using our services.';
				termsContent.appendChild(termsText);

				newItemsModal.appendChild(termsContent);
			} else if(list === 'need help'){
				overlay.remove()
				mainTitle.innerHTML=`${list}`;
				const helpContent = document.createElement('div');
				helpContent.className = 'help-content';

				const helpText = document.createElement('p');
				helpText.innerText = 'If you need assistance, please contact our support team.';
				helpContent.appendChild(helpText);

				newItemsModal.appendChild(helpContent);
			}
		}
	});
	});
	closeure.addEventListener('click', () => {
	document.body.removeChild(overlay);
		
	});

	document.body.appendChild(overlay);
	overlay.appendChild(sideMenu);
});

head.appendChild(logo)
head.appendChild(appName)
head.appendChild(menu)



//main content
const mainTitle=document.createElement('h2');
mainTitle.className='main-title';
mainTitle.innerText='welcome to orion';
main.appendChild(mainTitle);

const homeBtn=document.createElement('span');
homeBtn.className='material-icons';
homeBtn.innerText='home';
homeBtn.id='homeBtn';

const hotDealsBtn=document.createElement('span');
hotDealsBtn.className='material-icons';
hotDealsBtn.innerText='local_offer';
hotDealsBtn.id='hotDealsBtn';

const cartBtn=document.createElement('span');
cartBtn.className='material-icons';
cartBtn.innerText='shopping_cart';
cartBtn.id='cartBtn';

const profileBtn=document.createElement('span');
profileBtn.className='material-icons';
profileBtn.innerText='person';
profileBtn.id='profileBtn';


footer.appendChild(homeBtn);
footer.appendChild(hotDealsBtn);
footer.appendChild(cartBtn);
footer.appendChild(profileBtn);


profileBtn.addEventListener('click', () => {
	const profileModal = document.createElement('div');
	profileModal.className = 'profile-modal';

	const profileTitle = document.createElement('h2');
	profileTitle.className = 'pop-headings';
	profileTitle.innerText='my profile';

	const profilePicture=document.createElement('input');
	profilePicture.type='image';
	profilePicture.accept='image/*';
	profilePicture.alt='photo'
	profilePicture.className='profile-picture';


	const name = document.createElement('input');
	name.className = 'inputs';
	name.placeholder='full names';
	name.contentEditable=false;
	name.id='UserName';

	const email = document.createElement('input');
	email.className = 'inputs';
	email.placeholder = 'email';
	email.contentEditable = false;
	email.id = 'UserEmail';
	
	const UserPhone=document.createElement('p');
	UserPhone.className='inputs';
	UserPhone.id='UserPhone';
	UserPhone.style.textAlign='left';
	UserPhone.innerText='add phone number';
	UserPhone.contentEditable=true;

	const UserBio=document.createElement('p');
	UserBio.className='inputs';
	UserBio.style.textAlign='left';
	UserBio.contentEditable=true;
	UserBio.innerText='Atukwasa Umar (dev-plaxa technologies) and umar-technologies \n\nhttps://umar-techs.com';
	UserBio.id='UserBio';

	const saveChanges=document.createElement('button');
	saveChanges.className='save-changes';
	saveChanges.innerText='save changes';
	//append profile elements to the profile modal
	profileModal.appendChild(profileTitle)
	profileModal.appendChild(profilePicture)
	profileModal.appendChild(name)
	profileModal.appendChild(email)
	profileModal.appendChild(UserPhone)
	profileModal.appendChild(UserBio)
	profileModal.appendChild(saveChanges)

	const overlay=document.createElement('div');
	overlay.className='overlay';
	//append profile page to the usser interface
	document.body.appendChild(overlay)
	document.body.appendChild(profileModal)
	overlay.addEventListener('click',()=>{
		overlay.remove()
		profileModal.remove()
	});
});
