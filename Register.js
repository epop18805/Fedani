function createAccount() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (!firstName || !lastName || !birthdate || !gender || !email || !password) {
        alert("Eroare: Toate câmpurile trebuie completate.");
      } else {
  
        alert("Eroare: Implementare nefinalizată");
      }

  }