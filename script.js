/* drop Menu change*/

function updateDropdown2() {
    const dropdown1 = document.getElementById("dropdown1").value;
    const dropdown2 = document.getElementById("dropdown2");

    // Clear existing options in dropdown2
    dropdown2.innerHTML = "";

    // Define options based on dropdown1 selection
    const options = {
        dhakanorth: ["--Select Area--", "Agargaon", "Badda", "Bashundhara", "Gulshan", "Kazipara", "Khilkhet", "Mirpur", "Mohammadpur", "Shewrapara", "Tejgaon", "Tongi", "Uttara"],
        dhakasouth: ["--Select Area--", "Basabo", "Demra", "Dhanmondi", "Gendaria", "Hazaribagh", "Jatrabari", "Kamrangirchar", "Lalbagh", "Motijheel", "Mugda", "New Market", "Old Dhaka", "Shyampur", "Tikatuli", "Wari"],
        dhakaother: ["--Select Area--", "Faridpur", "Gazipur", "Gopalganj", "Jamalpur", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", "Mymensingh", "Narayanganj", "Narsingdi", "Netrakona", "Rajbari", "Shariatpur", "Sherpur", "Tangail"],
        barisal: ["--Select Area--", "Barguna", "Barisal", "Bhola", "Jhalokati", "Patuakhali", "Pirojpur"],
        chittagong: ["--Select Area--", "Bandarban", "Brahmanbaria", "Chandpur", "Chittagong", "Comilla", "Cox's Bazar", "Feni", "Khagrachhari", "Lakshmipur", "Noakhali", "Rangamati"],
        khulna: ["--Select Area--", "Bagerhat", "Chuadanga", "Jessore", "Jhenaidah", "Khulna", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira"],
        rajshahi: ["--Select Area--", "Bogra", "Joypurhat", "Naogaon", "Natore", "Nawabganj", "Pabna", "Rajshahi", "Sirajganj"],
        rangpur: ["--Select Area--", "Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Rangpur", "Thakurgaon"],
        sylhet: ["--Select Area--", "Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"]
    };

    // Populate dropdown2 with corresponding options
    if (options[dropdown1]) {
        options[dropdown1].forEach(location => {
            const option = document.createElement("option");
            option.value = location.toLowerCase();
            option.textContent = location;
            dropdown2.appendChild(option);
        });
    }
}
