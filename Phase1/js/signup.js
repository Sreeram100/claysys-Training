var citiesByState = { //list of cities
    "AN": ["Nicobar","North Middle Andaman","South Andaman"], 
    "AP": ["Anantapur","Chittoor","East Godavari","Guntur","Kadapa","Krishna","Kurnool","Prakasam","Nellore","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari"],
    "AR": ["Anjaw","Changlang","Dibang Valley","East Kameng","East Siang","Kra Daadi","Kurung Kumey","Lohit","Longding","Lower Dibang Valley","Lower Subansiri","Namsai","Papum Pare","Siang","Tawang","Tirap","Upper Siang","Upper Subansiri","West Kameng","West Siang","Itanagar"],
    "AS": ["Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup Metropolitan","Kamrup (Rural)","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Dima Hasao","Sivasagar","Sonitpur","South Salmara Mankachar","Tinsukia","Udalguri","West Karbi Anglong"],
    "BR": ["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"], // Replace with actual cities for Andhra Pradesh
    "CH": ["Chandigarh"],
    "CT": ["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Gariaband","Janjgir Champa","Jashpur","Kabirdham","Kanker","Kondagaon","Korba","Koriya","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur","Surguja"],
    "DN": ["Dadra Nagar Haveli"],
    "DD": ["Daman","Diu"],
    "DL": ["Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi","North West Delhi","Shahdara","South Delhi","South East Delhi","South West Delhi","West Delhi"],
    "GA": ["North Goa","South Goa"],
    "GJ": ["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Botad","Chhota Udaipur","Dahod","Dang","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kheda","Kutch","Mahisagar","Mehsana","Morbi","Narmada","Navsari","Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendranagar","Tapi","Vadodara","Valsad"],
    "HR": ["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"],
    "HP": ["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul Spiti","Mandi","Shimla","Sirmaur","Solan","Una"],
    "JK": ["Anantnag","Bandipora","Baramulla","Budgam","Doda","Ganderbal","Jammu","Kargil","Kathua","Kishtwar","Kulgam","Kupwara","Leh","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur"],
    "JH": ["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribagh","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahebganj","Seraikela Kharsawan","Simdega","West Singhbhum"],
    "KA": ["Bagalkot","Bangalore Rural","Bangalore Urban","Belgaum","Bellary","Bidar","Vijayapura","Chamarajanagar","Chikkaballapur","Chikkamagaluru","Chitradurga","Dakshina Kannada","Davanagere","Dharwad","Gadag","Gulbarga","Hassan","Haveri","Kodagu","Kolar","Koppal","Mandya","Mysore","Raichur","Ramanagara","Shimoga","Tumkur","Udupi","Uttara Kannada","Yadgir"],
    "KL": ["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"],
    "LA": ["City4", "City5", "City6"],
    "LD": ["Lakshadweep"],
    "MP": ["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna",
    "Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"],
    "MH": ["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"],
    "MN": ["Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam","Kakching","Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"],
    "ML": ["East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ri Bhoi","South Garo Hills","South West Garo Hills","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills"],
    "MZ": ["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip","Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"],
    "NL": ["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"],
    "OR": ["Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Debagarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghpur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Subarnapur","Sundergarh"],
    "PY": ["Karaikal","Mahe","Puducherry","Yanam"],
    "PB": ["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Firozpur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Mohali","Muktsar","Pathankot","Patiala","Rupnagar","Sangrur","Shaheed Bhagat Singh Nagar","Tarn Taran"],
    "RJ": ["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Ganganagar","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Tonk","Udaipur"],
    "SK": ["East Sikkim","North Sikkim","South Sikkim","West Sikkim"],
    "TN": ["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"],
    "TG": ["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar","Jogulamba","Kamareddy","Karimnagar","Khammam","Komaram Bheem","Mahabubabad","Mahbubnagar","Mancherial","Medak","Medchal","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Ranga Reddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal Rural","Warangal Urban","Yadadri Bhuvanagiri"],
    "TR": ["Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"],
    "UP": ["Agra","Aligarh","Allahabad","Ambedkar Nagar","Amethi","Amroha","Auraiya","Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kasganj","Kaushambi","Kheri","Kushinagar","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Raebareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar","Shahjahanpur","Shamli","Shravasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"],
    "UT": ["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri","Pithoragarh","Rudraprayag","Tehri","Udham Singh Nagar","Uttarkashi"],
    "WB": ["Alipurduar","Bankura","Birbhum","Cooch Behar","Dakshin Dinajpur","Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Bardhaman","Paschim Medinipur","Purba Bardhaman","Purba Medinipur","Purulia","South 24 Parganas","Uttar Dinajpur"],
    


}; 


var stateSelect = document.getElementById("state");
var citySelect = document.getElementById("city");


function populateCities() { // linking cities with states
    var selectedState = stateSelect.value;
    var cities = citiesByState[selectedState] || [];

  
    citySelect.innerHTML = "";

    
    var defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.text = "Select City";
    citySelect.appendChild(defaultOption);

    
    for (var i = 0; i < cities.length; i++) {
        var cityOption = document.createElement("option");
        cityOption.value = cities[i];
        cityOption.text = cities[i];
        citySelect.appendChild(cityOption);
    }
}


stateSelect.addEventListener("change", populateCities);


populateCities();



function myValidationfname() { //signup form firstname onfocusout validation 
    let x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
    var letters = /^[A-Za-z]+$/
    var firname = document.getElementById("fname");
    var fname = document.getElementById("fname").value;
    var fnameMsg = document.querySelector(".validatefname");

    if (fname === ""){
        fnameMsg.innerHTML = "First Name Cannot be empty";
        fnameMsg.style.color = "red";
        firname.style.borderColor = "red";
        return false;
    }

    else if (fname.match(letters) == null){
        fnameMsg.innerHTML = "Must not cannot numbers";
        fnameMsg.style.color = "red";
        return false;
    }

    else {
        fnameMsg.innerHTML = "";
        firname.style.borderColor = "grey";    
        return true;
    }


}



function myValidationlname() { //signup form lastname onfocusout validation 
    let x = document.getElementById("lname");
    x.value = x.value.toUpperCase();
    var letters = /^[A-Za-z]+$/;
    var lasname = document.getElementById("lname");
    var lname = document.getElementById("lname").value;
    var lnameMsg = document.querySelector(".validatelname");

    if (lname === ""){
        lnameMsg.innerHTML = "Last Name Cannot be empty";
        lnameMsg.style.color = "red";
        lasname.style.borderColor = "red";
        return false;
    }

    else if (lname.match(letters) == null){
        lnameMsg.innerHTML = "Must not cannot numbers";
        lnameMsg.style.color = "red";

        return false;
    }

    else {
        lnameMsg.innerHTML = "";
        lasname.style.borderColor = "grey";    
        return true;
    }
}

function myValidationPhone() { //signup form phonenumber onfocusout validation 
    phonenum = document.getElementById("phone").value;
    phoneMsg = document.querySelector(".validatephno");
    patternphonenumber = /^[0-9]+$/;
    phonenumberborder = document.getElementById("phone");

    if (phonenum === "") {
        phoneMsg.innerHTML = "Enter phone number";
        phoneMsg.style.color = "red";
        phonenumberborder.style.borderColor = "red";
        return false;
    } 
    else if(/\D/.test(phonenum)){
        phoneMsg.innerHTML = "Enter valid Phone number";
        phoneMsg.style.color = "red";
        phonenumberborder.style.borderColor = "red";
        return false;
    }

    else {
        phoneMsg.innerHTML = "";
        phonenumberborder.style.borderColor = "grey";
        return true;
    }
}


function myValidationPassword() { //signup form password onfocusout validation 
    var passwordborder = document.getElementById("pass");
    var password = document.getElementById("pass").value;
    var passwordMsg = document.querySelector(".password-validation-msg");

    
    var uppercase = /[A-Z]/;
    var lowercase = /[a-z]/;
    var numbe = /[0-9]/;

    if (password === "") {
        passwordMsg.innerHTML = "Password cannot be empty";
        passwordMsg.style.color = "red";
        passwordborder.style.borderColor = "red";
        return false;
    } else if (password.length < 8) {
        passwordMsg.innerHTML = "Password must be at least 8 characters long";
        passwordMsg.style.color = "red";
        passwordborder.style.borderColor = "red";
        return false;
    } else if (!uppercase.test(password)) {
        passwordMsg.innerHTML = "Password must contain at least one uppercase letter";
        passwordMsg.style.color = "red";
        passwordborder.style.borderColor = "red";
        return false;
    } else if (!lowercase.test(password)) {
        passwordMsg.innerHTML = "Password must contain at least one lowercase letter";
        passwordMsg.style.color = "red";
        passwordborder.style.borderColor = "red";
        return false;
    } else if (!numbe.test(password)) {
        passwordMsg.innerHTML = "Password must contain at least one numeric digit";
        passwordMsg.style.color = "red";
        passwordborder.style.borderColor = "red";
        return false;
    } else {
        passwordMsg.innerHTML = ""; 
        passwordborder.style.borderColor = "green";
        return true;
    }
}


function myValidationconfirmPassword() { //signup form confirmpassword onfocusout validation 
    var password = document.getElementById("pass").value;
    var confirmPassword = document.getElementById("cpass").value;
    var confirmPasswordborder = document.getElementById("cpass");
    var cpasswordMsg = document.querySelector(".cpassword-validation-msg");

    if (password != confirmPassword){
        cpasswordMsg.innerHTML = "Password doesnot match";
        cpasswordMsg.style.color = "red";
        confirmPasswordborder.style.borderColor = "red";
        return false;
        
    }

    else {
        cpasswordMsg.innerHTML ="Password Matching";
        cpasswordMsg.style.color = "green";
        confirmPasswordborder.style.borderColor = "green";
        return true;
    }
}

function myValidationEmail() { //signup form email onfocusout validation 
    var emailborder = document.getElementById("email");
    var email = document.getElementById("email").value;
    var validmail = /^[A-Za-z0-9._+\-\']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/;
    var mailMsg = document.querySelector(".email-validation-msg");

    if (email.match(validmail)){
        mailMsg.innerHTML = "";
        emailborder.style.borderColor = "grey";
        return true;
    }

    else {
        mailMsg.innerHTML = "Inavalid Email Format";
        mailMsg.style.color = "red";
        emailborder.style.borderColor = "red";
        return false;
    }
}

function myValidationDob() { //removing future dates
    var currentdate = new Date();

    var yyyy = currentdate.getFullYear();
    var mm = String(currentdate.getMonth() + 1).padStart(2,'0');
    var dd = String(currentdate.getDate()).padStart(2,'0');
    var today = yyyy + '-' + mm + '-' + dd;

    document.getElementById('dob').setAttribute('max', today);
}

myValidationDob();

function calculateAge() { //calculating age from dob
    var dobinput = document.getElementById("dob");
    var dobvalue = dobinput.value;

    var today = new Date();
    var dob = new Date(dobvalue);
    var age = today.getFullYear() - dob.getFullYear();

    var ageInput = document.getElementById("age");
    ageInput.value = age;

}

function myValidationAge() { //signup form Age onfocusout validation above 18 
    
    var ageborder = document.getElementById("age");
    var age = document.getElementById("age").value;
    var ageMsg = document.querySelector(".valid-age-msg");
    if (age<18){    
        
        ageMsg.innerHTML = "Need to be above 18years";
        ageMsg.style.color = "red";
        ageborder.style.borderColor = "red";
        
        return false;
    }

    else if (age === ""){
        ageMsg.innerHTML = "Please enter a valid age";
        ageMsg.style.color = "red";
        ageborder.style.borderColor = "red";
        return false;
    }

    else{
        ageMsg.innerHTML = "";
        ageborder.style.borderColor = "grey";
        return true;
    }


}

function myValidationUsername(){ //signup form username onfocusout validation 
    var usernameborder = document.getElementById("user");
    var usernam = document.getElementById("user").value;
    var userMsg = document.querySelector(".username-validation-msg");

    if (usernam === ""){
        usernameborder.style.borderColor = "red";
        userMsg.innerHTML = "Enter Username";
        userMsg.style.color = "red";
        return false;
    }

    else{
        usernameborder.style.borderColor = "grey";
        userMsg.innerHTML = "";
        return true;
    }
}

function validatAndSubmit() { //validating signup button
    var isfnamevalid = myValidationfname();
    var islnamevalid = myValidationlname();
    var isagevalid = myValidationAge();
    var isphonenum = myValidationPhone();
    var isemail = myValidationEmail();
    var ispassword = myValidationPassword();
    var iscpassword = myValidationconfirmPassword();
    var isusername = myValidationUsername()

    
    if (isfnamevalid && islnamevalid && isagevalid && isphonenum && isemail && isusername && ispassword && iscpassword) {
        alert("Form is valid. Submitting...");
       
    } else {
        alert("Form is invalid. Please check the fields.");
        
    }
}


