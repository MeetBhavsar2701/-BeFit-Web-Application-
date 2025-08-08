
        const navbarModal = document.getElementById('navbarModal');
        function toggleNavbar() {
          navbarModal.classList.toggle('hidden');
        } 

        const themeToggle = document.getElementById('theme-toggle');
        function toggleTheme() {
          const polygons = document.getElementsByTagName('polygon');
          const newTheme = themeToggle.checked ? 'light' : 'dark';
          
          if (newTheme === 'light') {
            document.body.classList.remove("bg-[#FAFAFA]");
            document.body.classList.add("bg-[#1E1E1E]");
            for (let i = 0; i < polygons.length; i++){
              polygons[i].setAttribute('stroke', '#ffffff');
            }
            document.body.classList.add("text-white")
            document.body.classList.remove("text-black")
          } else {
            document.body.classList.remove("bg-[#1E1E1E]");
            document.body.classList.add("bg-[#FAFAFA]");
            for (let i = 0; i < polygons.length; i++) {
              polygons[i].setAttribute('stroke', '#1E1E1E');
            }
            document.body.classList.add("text-black")
            document.body.classList.remove("text-white")
          }
          localStorage.setItem('theme-status', newTheme);
        }
        
        // On page load, check saved theme
        const savedTheme = localStorage.getItem('theme-status') || 'dark'; // Default to dark
        document.getElementById('theme-toggle').checked = savedTheme === 'light';
        toggleTheme();

        function toggleDropdown() {
          const dropdownMenu = document.getElementById("dropdownMenu");
          dropdownMenu.classList.toggle("hidden");
      }

        function openModal(type) {
          const modal = document.getElementById("modal");
          const modalTitle = document.getElementById("modalTitle");
          const loginForm = document.getElementById("loginForm");
          const signupForm = document.getElementById("signupForm");
          navbarModal.classList.remove('z-50')
          
          if (type === "login") {
              modalTitle.textContent = "Login";
              loginForm.classList.remove("hidden");
              signupForm.classList.add("hidden");
          } else if (type === "signup") {
              modalTitle.textContent = "Sign Up";
              signupForm.classList.remove("hidden");
              loginForm.classList.add("hidden");
          }
          modal.classList.remove("hidden");
      }
      
      function closeModal() {
          document.getElementById("modal").classList.add("hidden");
          navbarModal.classList.add('z-50')
      }

        // Get DOM elements
      const genderToggle = document.getElementById('gender-toggle-single');
      const genderLabel = document.getElementById('gender-label');
      const toggleMaleIcon = document.getElementById('toggle-icon-male');
      const toggleFemaleIcon = document.getElementById('toggle-icon-female');
      const circle = document.getElementById('circle');
      const MaleFront = document.getElementById('Male-Front');
      const MaleBack = document.getElementById('Male-Back');
      const FemaleFront = document.getElementById('Female-Front');
      const FemaleBack = document.getElementById('Female-Back');
      const toggleText = document.getElementById('toggle-text');

      // Function to switch to female view
      const switchToFemale = () => {
          toggleMaleIcon.classList.add('opacity-0');
          toggleMaleIcon.classList.remove('opacity-100');
          toggleFemaleIcon.classList.remove('hidden');
          toggleFemaleIcon.classList.add('opacity-100');
          circle.classList.replace('left-1', 'left-9');
          toggleText.textContent = 'Female';
          MaleFront.classList.add('hidden');
          FemaleFront.classList.remove('hidden');
          MaleBack.classList.add('hidden');
          FemaleBack.classList.remove('hidden');
          localStorage.setItem("selectedGender", "Female");
      };

      // Function to switch to male view
      const switchToMale = () => {
          toggleMaleIcon.classList.remove('opacity-0');
          toggleMaleIcon.classList.add('opacity-100');
          toggleFemaleIcon.classList.add('hidden');
          circle.classList.replace('left-9', 'left-1');
          toggleText.textContent = 'Male';
          MaleFront.classList.remove('hidden');
          FemaleFront.classList.add('hidden');
          MaleBack.classList.remove('hidden');
          FemaleBack.classList.add('hidden');
          localStorage.setItem("selectedGender", "Male");
      };

      // Gender toggle event listener
      if (genderToggle) { //   Check if element exists first
        genderToggle.addEventListener('change', () => {
            genderToggle.checked ? switchToFemale() : switchToMale();
        });
    } else {
        console.warn("  gender-toggle-single not found!");
    }

      // Function to update selected equipment
      function selectEquipment(equipment) {
          localStorage.setItem("selectedEquipment", equipment);
      }

      // Function to store muscle selection and navigate
      function muscleClicked(muscle) {
          localStorage.setItem("selectedMuscle", muscle);
          window.location.href = "Exercise.html";  // Navigate without parameters
      }

      let videos = {
        "Male": {
            "Chest_Dumbbells": "https://www.youtube.com/embed/yFdP4OjVPZ8?si=XW3XXhtMtoVc6atY",
            "Chest_Barbell": "https://www.youtube.com/embed/4Y2ZdHCOXok?si=7BUz_xQ9DTjYms65",
            "Chest_Machine": "https://www.youtube.com/embed/male_chest_machine",
            "Chest_Kettlebells": "https://www.youtube.com/embed/fUOEdGmgy98?si=zTxCaqXpD8F8w08s",
            "Chest_Featured": "https://www.youtube.com/embed/ZyjQar-XgBc?si=3s_oBzfCl4CKgvxo",
            "Chest_Bodyweight": "https://www.youtube.com/embed/n69-eVLtevc?si=iwJQzCvSw_MYw8dd",
            "Chest_Machine": "https://www.youtube.com/embed/tNConnHj4ug?si=Hzq4scSp-f3dMfq1",
            "Chest_Recovery": "https://www.youtube.com/embed/PUJpU6Ti5jU?si=Cei7N9-jkxDe2lP-",
            "Chest_Medicine_Ball": "alternative",

            "Biceps_Dumbbells": "https://www.youtube.com/embed/male_biceps_dumbbells",
            "Biceps_Barbell": "https://www.youtube.com/embed/male_biceps_barbell",
            "Biceps_Kettlebells": "alternative",
            "Biceps_Cardio": "https://www.youtube.com/embed/male_biceps_cardio",

            "Triceps_Dumbbells": "https://www.youtube.com/embed/male_triceps_dumbbells",
            "Triceps_Barbell": "https://www.youtube.com/embed/male_triceps_barbell",
            "Triceps_Kettlebells": "alternative",
            "Triceps_Machine": "https://www.youtube.com/embed/male_triceps_machine",

            "Shoulders_Dumbbells": "https://www.youtube.com/embed/male_shoulders_dumbbells",
            "Shoulders_Barbell": "https://www.youtube.com/embed/male_shoulders_barbell",
            "Shoulders_Kettlebells": "https://www.youtube.com/embed/male_shoulders_kettlebells",
            "Shoulders_Machine": "https://www.youtube.com/embed/male_shoulders_machine",

            "Forearm_Dumbbells": "https://www.youtube.com/embed/male_forearm_dumbbells",
            "Forearm_Kettlebells": "alternative",
            "Forearm_Bodyweight": "https://www.youtube.com/embed/male_forearm_bodyweight",

            "Abdomen_Bodyweight": "https://www.youtube.com/embed/male_abdomen_bodyweight",
            "Abdomen_Medicine_Ball": "https://www.youtube.com/embed/male_abdomen_medicineball",
            "Abdomen_Machine": "https://www.youtube.com/embed/male_abdomen_machine",
            "Abdomen_Cardio": "https://www.youtube.com/embed/male_abdomen_cardio",

            "Legs_Dumbbells": "https://www.youtube.com/embed/male_legs_dumbbells",
            "Legs_Barbell": "https://www.youtube.com/embed/male_legs_barbell",
            "Legs_Kettlebells": "https://www.youtube.com/embed/male_legs_kettlebells",
            "Legs_Machine": "https://www.youtube.com/embed/male_legs_machine",
            "Legs_Recovery": "https://www.youtube.com/embed/male_legs_recovery",

            "Back_Barbell": "https://www.youtube.com/embed/male_back_barbell",
            "Back_Machine": "https://www.youtube.com/embed/male_back_machine",

            "Glutes_Bodyweight": "https://www.youtube.com/embed/male_glutes_bodyweight",
            "Glutes_Dumbbells": "https://www.youtube.com/embed/male_glutes_dumbbells",
            "Glutes_Barbell": "https://www.youtube.com/embed/male_glutes_barbell"
        },
        "Female": {
            "Chest_Dumbbells": "https://www.youtube.com/embed/female_chest_dumbbells",
            "Chest_Barbell": "https://www.youtube.com/embed/female_chest_barbell",
            "Chest_Machine": "https://www.youtube.com/embed/female_chest_machine",
            "Chest_Medicine_Ball": "alternative", // No video, fallback message

            "Biceps_Dumbbells": "https://www.youtube.com/embed/female_biceps_dumbbells",
            "Biceps_Barbell": "https://www.youtube.com/embed/female_biceps_barbell",
            "Biceps_Cardio": "https://www.youtube.com/embed/female_biceps_cardio",

            "Triceps_Dumbbells": "https://www.youtube.com/embed/female_triceps_dumbbells",
            "Triceps_Barbell": "https://www.youtube.com/embed/female_triceps_barbell",
            "Triceps_Machine": "https://www.youtube.com/embed/female_triceps_machine",

            "Shoulders_Dumbbells": "https://www.youtube.com/embed/female_shoulders_dumbbells",
            "Shoulders_Barbell": "https://www.youtube.com/embed/female_shoulders_barbell",
            "Shoulders_Machine": "https://www.youtube.com/embed/female_shoulders_machine",

            "Forearm_Dumbbells": "https://www.youtube.com/embed/female_forearm_dumbbells",
            "Forearm_Bodyweight": "https://www.youtube.com/embed/female_forearm_bodyweight",

            "Abdomen_Bodyweight": "https://www.youtube.com/embed/female_abdomen_bodyweight",
            "Abdomen_Medicine_Ball": "https://www.youtube.com/embed/female_abdomen_medicineball",
            "Abdomen_Machine": "https://www.youtube.com/embed/female_abdomen_machine",
            "Abdomen_Cardio": "https://www.youtube.com/embed/female_abdomen_cardio",

            "Legs_Dumbbells": "https://www.youtube.com/embed/female_legs_dumbbells",
            "Legs_Barbell": "https://www.youtube.com/embed/female_legs_barbell",
            "Legs_Machine": "https://www.youtube.com/embed/female_legs_machine",
            "Legs_Recovery": "https://www.youtube.com/embed/female_legs_recovery",

            "Back_Barbell": "https://www.youtube.com/embed/female_back_barbell",
            "Back_Machine": "https://www.youtube.com/embed/female_back_machine",

            "Glutes_Bodyweight": "https://www.youtube.com/embed/female_glutes_bodyweight",
            "Glutes_Dumbbells": "https://www.youtube.com/embed/female_glutes_dumbbells",
            "Glutes_Barbell": "https://www.youtube.com/embed/female_glutes_barbell"
        }
    };

      // Function to load workout page content
      function loadWorkout() {
        let selectedMuscle = localStorage.getItem("selectedMuscle");
        let selectedEquipment = localStorage.getItem("selectedEquipment") || "Dumbbells"; // Default: Dumbbells
        let selectedGender = localStorage.getItem("selectedGender") || "Male"; // Default: Male
    
        if (!selectedMuscle) {
            console.warn("No muscle selected! Redirecting...");
            window.location.href = "BeFit2.0.html"; // Redirect if no muscle is selected
            return;
        }
    
        // Format the key to match stored video keys
        let videoKey = `${selectedMuscle.replace(/\s+/g, "_")}_${selectedEquipment.replace(/\s+/g, "_")}`;
        console.log(`Loading video for: ${videoKey}`);
        
        let videoUrl = videos[selectedGender][videoKey];
    
        if (videoUrl === "alternative" || !videoUrl) {
            console.warn(`No video found for ${videoKey}`);
            document.getElementById("videoFrame").style.display = "none";
            document.getElementById("title").innerText = `No workout available for ${selectedMuscle} with ${selectedEquipment}. Try another option!`;
        } else {
            document.getElementById("videoFrame").style.display = "block";
            document.getElementById("videoFrame").src = videoUrl;
        }
    }

      // Page load logic
      document.addEventListener("DOMContentLoaded", () => { 
        console.log("  DOM fully loaded!");
        
        if (window.location.pathname.includes("BeFit2.0.html")) {  // Check if it's the home page
          localStorage.setItem("selectedEquipment", "Featured");  
          localStorage.setItem("selectedMuscle", "Chest");        
          localStorage.setItem("selectedGender", "Male");         
      }
        const genderToggle = document.getElementById("gender-toggle-single");
    
        if (!genderToggle) {
            console.warn("  gender-toggle-single not found! Skipping gender setup.");
        } else {
            let savedGender = localStorage.getItem("selectedGender") || "Male";  
    
            if (savedGender === "Female") {
                genderToggle.checked = true;
                switchToFemale();
            } else {
                genderToggle.checked = false;
                switchToMale();
            }
        }
        
        const signupForm = document.querySelector("#signupForm form");
        const loginForm = document.querySelector("#loginForm form");
        // Validation regex patterns
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const mobilePattern = /^[6-9]\d{9}$/; // Validates 10-digit Indian phone numbers (starts with 6-9)
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // Min 6 chars, at least 1 letter & 1 number
        

        if (signupForm) {
            signupForm.addEventListener("submit", function (event) {
                event.preventDefault(); // Prevent default form submission

                // Get input values
                let fullName = document.getElementById("fullName").value.trim();
                let email = document.getElementById("email").value.trim();
                let mobile = document.getElementById("mobile").value.trim();
                let age = document.getElementById("age").value.trim();
                let password = document.getElementById("password").value.trim();
                let confirmPassword = document.getElementById("confirmPassword").value.trim();

                // Validation checks
                if (fullName.length < 3) {
                    alert("Full Name must be at least 3 characters long.");
                    return;
                }

                if (!emailPattern.test(email)) {
                    alert("Invalid email format.");
                    return;
                }

                if (!mobilePattern.test(mobile)) {
                    alert("Invalid mobile number. It must be 10 digits and start with 6-9.");
                    return;
                }

                if (age < 16 || age > 100) {
                    alert("Age must be between 16 and 100.");
                    return;
                }

                if (!passwordPattern.test(password)) {
                    alert("Password must be at least 6 characters long and contain at least one letter and one number.");
                    return;
                }

                if (password !== confirmPassword) {
                    alert("Passwords do not match.");
                    return;
                }

                // If all validations pass
                alert("Signup successful!");
                signupForm.submit(); // Submit form after validation
            });
        }

        if (loginForm) {
          loginForm.addEventListener("submit", function (event) {
              event.preventDefault(); // Prevent page reload
  
              let loginEmail = document.getElementById("loginEmail").value.trim();
              let loginPassword = document.getElementById("loginPassword").value.trim();
  
              if (!loginEmail || !loginPassword) {
                  alert("Please enter both email and password.");
                  return;
              }
              

            if (!emailPattern.test(loginEmail)) return alert("Invalid email format.");
            if (loginPassword.length < 6) return alert("Password must be at least 6 characters long.");

              alert("Login successful!"); // Replace with actual authentication logic
              loginForm.submit(); //  If all checks pass, submit form
          });
      }

        // Ensure loadWorkout() runs when on Exercise.html
        if (window.location.pathname.includes("Exercise.html")) {
            console.log(" Running loadWorkout()...");
            loadWorkout();
        }
    });

    window.addEventListener("pageshow", () => {
      const savedTheme = localStorage.getItem("theme") || "light";
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
      if (themeToggle) {
          themeToggle.checked = savedTheme === "dark";
      }
  });
  