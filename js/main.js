function createGroups() {
    // Get the names from the textarea and split by newline
    let names = document.getElementById("names").value.split("\n").filter(name => name.trim() !== "");
    
    // Get the number of groups from the input
    let groupCount = parseInt(document.getElementById("groupCount").value);
  
    if (groupCount > 0 && names.length > 0) {
      // Shuffle the names array randomly
      names = names.sort(() => Math.random() - 0.5);
  
      // Create the groups
      let groups = [];
      for (let i = 0; i < groupCount; i++) {
        groups[i] = [];
      }
  
      // Distribute the names into groups
      names.forEach((name, index) => {
        groups[index % groupCount].push(name.trim());
      });
  
      // Display the groups
      let output = document.getElementById("output");
      output.innerHTML = "";
      groups.forEach((group, index) => {
        output.innerHTML += `<div class="group"><h3>${index + 1}</h3><p>${group.join("<br>")}</p></div>`;
      });
    } else {
      alert("Please enter valid names and group count.");
    }
  }
  
  function resetForm() {
    // Clear the textarea and the output div
    document.getElementById("names").value = "";
    document.getElementById("output").innerHTML = "";
    
    // Reset the group count to its default value (1)
    document.getElementById("groupCount").value = 1;
  }
  
  function hideShowNames() {
    const box = document.getElementById("box");
    const header = document.getElementById("header");
    const full = document.getElementById("full");
  
    if (box.classList.contains('hide')) {
      box.classList.remove('hide');
      header.classList.remove('hide');
      full.textContent = "Fullscreen";
    } else {
    box.classList.add('hide');
    header.classList.add('hide');
    full.textContent = "Escape";  
    }
  }


// Function to increase font size
let fontSize = 16; // in pixels

function increaseNameFont() {
    fontSize += 2; // Increase font size by 2px
    document.getElementById("output").style.fontSize = fontSize + "px";
  }
  
  // Function to decrease font size
  function decreaseNameFont() {
    if (fontSize > 10) { // Prevent font size from going too small
      fontSize -= 2; // Decrease font size by 2px
      document.getElementById("output").style.fontSize = fontSize + "px";
    }
  }