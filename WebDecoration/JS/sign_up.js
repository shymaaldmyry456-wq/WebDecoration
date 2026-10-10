 let users = JSON.parse(localStorage.getItem('users')) || [];

    function saveUsers() {
      localStorage.setItem('users', JSON.stringify(users));
    }

    function register(email,username,  password) {
      const existingUser = users.find(user => user.password===password || user.email === email);
      if (existingUser) {
        if (existingUser.email=== email) {
          return { success: false, message: "⚠️ Wrong email !" };
        } else {
          return { success: false, message: "⚠️Wrong password !" };
        }
      }

      const newUser = {
        id: users.length + 1,
        email,
        password,
        createdAt: new Date()
      };
      users.push(newUser);
      saveUsers();
      return { success: true, message: "✅ Successfully regisreration ! ", userId: newUser.id };
    }

    function showMessage(id, message, isSuccess) {
      const el = document.getElementById(id);
      el.textContent = message;
      el.className = isSuccess ? '✅ message success' : '⚠️ message error';
      el.style.display = 'block';
      setTimeout(() => {
        el.style.display = 'none';
      }, 5000);
    }

    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('form').addEventListener('submit', event => {
        event.preventDefault();
        const username = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('pass').value.trim();

        if (!username || !email || !password) {
          alert( "⚠️ All fields required !");
          return;
        }

        const result = register(email, username, password);
        showMessage('registerMessage', result.message, result.success);

        if (result.success) {
          document.getElementById('name').value = '';
          document.getElementById('email').value = '';
          document.getElementById('pass').value = '';
        }
      });
    });
