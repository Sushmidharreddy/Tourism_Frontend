import axios from "axios";

// const Base_URI="http://localhost:9898/toursandtravels/api/v1";
const Base_URI="https://tourismbackend-production.up.railway.app/toursandtravels/api/v1"
// http://localhost:9898/toursandtravels/api/v1/state/Karnataka
const base_URI2="https://tourismbackend-production.up.railway.app";

class ToursandTravelsServices
{

    creatUser(formData)
    {
        return axios.post(Base_URI+"/register", formData);
    }

    loginuser(formData)
    {
        return axios.post(Base_URI+"/login",formData)
    }

    sendOtptoEmail(toEmail)
    {
        return axios.post(base_URI2+"/sendEmailOtp/"+toEmail)
    }

    verifyingEmailotp(otp)
    {
        return axios.get(base_URI2+"/verifyEmailotp/"+otp)
    }

    getDataByState(stateName)
    {
        return axios.get(Base_URI+"/state/"+stateName)
    }

    getHotelDataByStateName(stateName)
    {
        return axios.get(Base_URI+"/getHotels/"+stateName)
    }

    saveContactUsData(formData)
    {
        return axios.post(Base_URI+"/saveContactUsData",formData)
    }

}
export default new ToursandTravelsServices();