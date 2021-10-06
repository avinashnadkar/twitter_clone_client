import { useState , useContext } from "react";
import style from "./SignupForm.module.css";
import twitterLogo from "../../Images/twitter-logo.png";
import CloseIcon from '@mui/icons-material/Close';
import { AuthContext } from "../../Context/AuthContextProvider";
import { Redirect } from "react-router-dom";
import axios from "axios";

const SignupForm = ({cancelForm}) => {

    //////////////////////////////////Context states and function//////////////////////////////////////
    const {setIsAuth} = useContext(AuthContext);

    /////////////////////////// Setting states and initial data for components ////////////////////////////

    //User information (object)
    let initData = {name:"",phone:"", email:"", password:"", birthDay : "", birthMonth:"", birthYear:""};
    const [userData,setUserData] = useState(initData);

    //Phone or email toggle (bool)
    const [phoneOrEmail, setPhoneOrEmail] = useState(true);

    //Set days according to months and leap year; (Arr)
    let odd_days = [];
    let even_days = [];
    let feb_days = [];
    let leap_year_feb_days = [];
    let years = [];
    let months = ["January","February","March","April","May","June" ,"July", "Augest","September", "October", "November", "December"];
    let currentYear = new Date().getFullYear();
    let d = 1; //for days
    for(let i=currentYear;i>=1901;i--){
        if(d<=31) even_days.push(d);
        if(d<31) odd_days.push(d);
        if(d<29) feb_days.push(d);
        if(d<=29) leap_year_feb_days.push(d);
        years.push(i);
        if(d<=31) d++;
    }
    const [days,setDays] = useState(even_days);

    //Validation chack state for empty fields (bool)
    const [isValid,setIsValid] = useState(false);
        
    //Invalid phone check
    const [validPhone, setValidPhone] = useState(true)

    /////////////////////////////////////// Functions ////////////////////////////////////////

    //Leap year or not;
    const leapYear = (y) =>{
       if(Number(y) % 400 === 0) return true;
       if(Number(y) % 100 === 0) return false;
       return Number(y) % 4 === 0;
    }

    //Change states and manage form validation
    const handleChange = (e) => {

        let [name,value] = [e.target.name,e.target.value];

        //Change days according to months and leap year
        if(name=="birthMonth" ){
            if(value=="February") {
                setDays(leapYear(userData.birthYear) ? leap_year_feb_days : feb_days);
            }else if(value == "January"|| value =="March" ||value == "May" || value =="July" || value =="Augest"|| value =="October" || value =="December"){
                setDays(even_days)
            }else if(value == "April"||value == "June" || value =="September" || value == "November"){
                setDays(odd_days)
            }
        }else if(name == "birthYear"){
            if(userData.birthMonth == "February"){
                setDays(leapYear(value) ? leap_year_feb_days : feb_days);
            }
        }

        //Check phone field containes only numbers
        let numHashTable = {'0':0,'1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9}
        if(name =="phone"){
            setValidPhone(true)
            for(let i=0;i<value.length;i++){
                if(value[i] != numHashTable[value[i]]) setValidPhone(false)
            }
        }

        //change user data
        setUserData({
            ...userData,
            [name] : value
        })

        //console.log(userData)
    }

    //Submit form on server to register user account
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:2345/users/signup",{  
            "name" : userData.name,
            "password" : userData.password,
            "email" : userData.email,
            "phone" : userData.phone,
            "birthDate" : `${userData.birthDay} ${userData.birthMonth} ${userData.birthYear}`
        }).then(res=>{
            if(res.data.token != null){
                //Store jwt token in local storage 
                localStorage.setItem("token", res.data.token);
                //Make auth state true
                setIsAuth(true)
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    //Toggle between phone input field and Email field
    const togglePhoneOrEmail = () => {
        setValidPhone(true)
        setPhoneOrEmail(!phoneOrEmail)
        setUserData(phoneOrEmail ? {...userData, phone: ""} : {...userData, email: ""})
    }
    
    return(
        <div className={style.signupForm}>
           <div className={style.formContainer}>
               <form onSubmit={handleSubmit}>
                    <div className={style.cancelBtn} onClick={cancelForm}><CloseIcon/></div>
                    <div className={style.logo}><img src={twitterLogo}/></div>
                    <div> <h2>Create your account</h2></div>
                    <div className={style.inputBoxContainer}>
                      <input type="text" name="name" value={userData.name} onChange={handleChange} placeholder="Name"/>
                    </div>

                    <div className={style.inputBoxContainer}>
                        <input type="email" name="email" value={userData.email}  onChange={handleChange} style={{display : phoneOrEmail ?"block" : "none"}} placeholder="Email"/>
                        <input type="text" name="phone" value={userData.phone}  onChange={handleChange} style={{display : phoneOrEmail ?"none" : "block"}} placeholder="Phone"/>
                        <p className={style.alertMSG} style={{display:validPhone ? "none":"block"}}>Please enter a valid {phoneOrEmail ? "email" : "phone"}  number.</p>
                        <p onClick={togglePhoneOrEmail} className={style.phoneEmailToggle}>Use {phoneOrEmail ?  "phone":"email" } instead</p>
                    </div>

                    <div className={style.calendar}>
                        <p>Date of birth</p>
                        <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                        
                        <div className={style.datePicker}>
                            <select  name="birthMonth" onChange={handleChange} className={style.selectMonth}>
                                <option style={{display:"none"}}>Month</option>
                                    {
                                        months.map(month=>{
                                        return <option value={month}>{month}</option>
                                        })
                                    }                       
                            </select>
                            <select  name="birthDay" onChange={handleChange} className={style.selectDay}>
                                <option style={{display:"none"}}>Day</option>
                                    {
                                        days.map(day=>{
                                        return <option value={day}>{day}</option>
                                        })
                                    }                       
                            </select>
                            <select  name="birthYear" onChange={handleChange} className={style.selectYear}>
                                <option style={{display:"none"}}>Year</option>
                                    {
                                        years.map(year=>{
                                        return <option value={year}>{year}</option>
                                        })
                                    }                       
                            </select>
                        </div>
                    </div>

                    <div>
                        <button className={style.nextBtn}>Next</button>
                    </div>

               </form>
           </div>
        </div>
    )
}

export default SignupForm;