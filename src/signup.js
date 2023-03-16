import zips from "./zipcode"
export default function(){
    let zipCodeVerify = zips();

    let signUpPage = document.createElement('div');


    let rightSide = document.createElement('div');
    rightSide.classList.add('right-side');


    let leftSide = document.createElement('div');
    leftSide.classList.add('left-side');


    signUpPage.appendChild(rightSide);
    signUpPage.appendChild(leftSide);


    let signUpText = document.createElement('p');
    signUpText.classList.add('sign-up-text');
    signUpText.innerHTML = "Capture Your Thoughts, Find Your Voice";


    leftSide.appendChild(signUpText);


    let form = document.createElement('form');


    form.attribute = 'novalidate';
    form.innerHTML = `
    <label for="email">Email:</label>
    <input type="email" name="email" id="email" required>
    <p class="email-err err"></p>
    <label for="password">Password:</label>
    <input type="password" name="password" id="password" required minlength="8">
    <p class="password-err err"></p>
    <label for="passwordConf" >Confirm password:</label>
    <input type="password" name="passwordConf" id="passwordConf">
    <p class="password-conf-err err"></p>
    <label for="country">Country</label><span style="color: red !important; display: inline; float: none;">*</span>


    <select id="country" name="country" class="form-control">
       <option value="" disabled selected hidden>Select your country</option>
       <option value="DZ">Algeria</option>
       <option value="AD">Andorra</option>
       <option value="AR">Argentina</option>
       <option value="AM">Armenia</option>
       <option value="AU">Australia</option>
       <option value="AT">Austria</option>
       <option value="AZ">Azerbaijan</option>
       <option value="BD">Bangladesh</option>
       <option value="BE">Belgium</option>
       <option value="BM">Bermuda</option>
       <option value="BR">Brazil</option>
       <option value="BG">Bulgaria</option>
       <option value="CA">Canada</option>
       <option value="CV">Cape Verde</option>
       <option value="CL">Chile</option>
       <option value="CN">China</option>
       <option value="CO">Colombia</option>
       <option value="CK">Cook Islands</option>
       <option value="CR">Costa Rica</option>
       <option value="CZ">Czech Republic</option>
       <option value="DK">Denmark</option>
       <option value="EC">Ecuador</option>
       <option value="EG">Egypt</option>
       <option value="FI">Finland</option>
       <option value="FR">France</option>
       <option value="DE">Germany</option>
       <option value="GB">Guernsey</option>
       <option value="HN">Honduras</option>
       <option value="IM">Isle of Man</option>
       <option value="IT">Italy</option>
       <option value="JP">Japan</option>
       <option value="JE">Jersey</option>
       <option value="JO">Jordan</option>
       <option value="KR">South Korea</option>
       <option value="LU">Luxembourg</option>
       <option value="MX">Mexico</option>
       <option value="ME">Montenegro</option>
       <option value="MA">Morocco</option>
       <option value="NL">Netherlands</option>
       <option value="NO">Norway/option>
       <option value="PT">Portugal</option>
       <option value="PR">Puerto Rico</option>
       <option value="RS">Serbia</option>
       <option value="SG">Singapore</option>
       <option value="ES">Spain</option>
       <option value="SE">Sweden</option>
       <option value="CH">Switzerland</option>
       <option value="TW">Taiwan</option>
       <option value="UA">Ukraine</option>
       <option value="GB">United Kingdom</option>
       <option value="US">United States</option>
    </select>
    <label for="zip">Zip code:</label>
    <input name="zip" id="zip" type="text" disabled>
    <button>Sign Up</button>
    `


    leftSide.appendChild(form);

    let button = leftSide.querySelector('button');


    // EMAIL VALIDATION FUNCTION
    let email = leftSide.querySelector('#email');
    let emailError = leftSide.querySelector('.email-err')


    email.addEventListener('blur', () => {
       if(!email.checkValidity()){
           emailError.textContent = "Email is not valid"
       }
       else{
           emailError.textContent = "";
       }
    });


    // PASSWORD VALIDATION FUNCTIONS
    let userNewpassword = '';
    let password = leftSide.querySelector("#password");
    let passwordError = leftSide.querySelector('.password-err');

    password.addEventListener('blur', (e) => {
        console.log(e.target.value)
       if(!password.checkValidity()){
         passwordError.textContent = "Must be at least 8 characters long";
       }else{
        passwordError.textContent = "";
        userNewpassword = e.target.value;
       }

       console.log(userNewpassword);
    });

    // CONFIRM PASSWORD VALIDATION FUNCTION
    let confirmPassword = leftSide.querySelector('#passwordConf');
    let confirmPasswordError = leftSide.querySelector('.password-conf-err');

    confirmPassword.addEventListener('blur', (e) => {
        if(e.target.value !== userNewpassword){
            confirmPasswordError.textContent = "Passwords do not match";
        }
        else{
            confirmPasswordError.textContent = "";
        }
    });

    //COUNTRY AND ZIPCODE VALIDATION FUNCTION
    let country = leftSide.querySelector('#country');
    let zipCode = leftSide.querySelector('#zip');

    // leftSide.addEventListener('click', (e) => {
    //     console.log(e.target.value)
    // })
    // country.addEventListener('onChange', (e) => {
    //     console.log(e.target.value);
    // })


    country.addEventListener('blur', (e) => {
        if(e.target.value != ''){
        zipCode.disabled = false;
        }else{
            console.log(e.target.value);
        }
    });

    zipCode.addEventListener('blur', () => {
        console.log(country.value);
        let countryAb = country.value
        console.log(zipCodeVerify[countryAb])
        let rule = new RegExp(zipCodeVerify[countryAb]);
        console.log(rule);
        console.log(zipCode.value)
        console.log(typeof zipCode.value)
        console.log(parseInt(zipCode.value))
        let zipNun = parseInt(zipCode.value);
        console.log(zipNun)
        if(rule.test(zipCode.value)){
            console.log('true');
        }else{
            console.log("Not a valid zipcode")
        }
    });




    form.addEventListener('submit', (e) => {
       e.preventDefault();
    });


    button.addEventListener('click', ()=> {

       console.log('click');
    });

    return signUpPage;
    }
