var users = [
    { email: "user@1.com",password: "password1" },
    { email: "user@2.com", password :"password2" },
    { email: "user@3.com", password: "password3" },
    { email: "fatma@1.com",password: "fatma123" },
    { email: "asmaa@1.com", password: "asmaa123" },
    { email: "malk@1.com", password: "malk1234" },
    { email: "shimaa@1.com", password: "shimaa12" },
    { email: "khadija@1.com", password: "khadija1" },
    { email: "merna@1.com",password: "merna123" },
    { email: "amira@1.com", password: "amira123" },
    { email: "maha@1.com", password: "maha1234" },
    { email: "heba@1.com", password: "heba1234" },
    { email: "ahmad@1.com",password: "ahmed123" },
    { email: "mohamed@1.com", password: "mohamed1" },
    { email: "mahmoud@1.com",password: "mohamed1" },
    { email: "mostafa@1.com", password: "mostafa1" },
    { email: "ali@1.com", password: "ali12345" }


];
var users=JSON.parse(localStorage.getItem('users'||[]));
document.getElementById('form').addEventListener('submit',(event)=>{
    event.preventDefault();
    const email=document.getElementById('email').value.trim();
    const password = document.getElementById('pass').value;
    if(!email|| !password){
        alert(" All fields Required !");
        return;
    }
    const user =users.find(u=>u.email===email&&u.password===password);
    if(user){
        alert("Log in successfully !");
        window.location.href="home.html";
    }else if(!user){
        return{success:false,message:"Wrong email or password !"};}
        return{
            success:true,
            message:" Log in successfully !",
            user:{
                id:user.id,
                email:user.email
            }
           
        };
});