
import { toast as notify } from 'react-toastify';
import { getIn } from 'formik';
// import { FileUsage } from '../../ulitity/Enums.ts';


export const baseApiUrl = 'https://admin.api.toomans.com/api/v1';




export const GetHeaderJsonFullAccsee = () => {
  return {
    headers: {


      "content-type": "application/json"

    }
  }
};

export const GetHeader = () => {
  let token = localStorage.getItem('jwtoken');
  token = token != null ? JSON.parse(localStorage.getItem('jwtoken')) : "";

  return {
    headers: {
      Authorization: `Bearer  ${token}`
    }
  }
};

export const GetHeaderJson = () => {
  let token = localStorage.getItem('jwtoken');
  token = token != null ? JSON.parse(localStorage.getItem('jwtoken')) : "";

  return {
    headers: {

      Authorization: `Bearer  ${token}`,
      "content-type": "application/json"

    }
  }
};

export const GetHeaderJsonForFile = () => {
  let token = localStorage.getItem('jwtoken');
  token = token != null ? JSON.parse(localStorage.getItem('jwtoken')) : "";

  return {
    headers: {
      Authorization: `Bearer  ${token}`,
      "content-type": "multipart/form-data"
    }
  }
};
export const GetHeaderJsonApiKey = () => {
  let token = localStorage.getItem('jwtoken');
  token = token != null ? JSON.parse(localStorage.getItem('jwtoken')) : "";

  return {
    headers: {
      Authorization: `Bearer  ${token}`,
      "content-type": "application/json",
      "apikey": "dbbec8c61aa6376c0ea9a1bcb0292849"
    }
  }
};

export const Alert = (type, message) => {

  Toast(type, message);

}


export const Toast = (type, message) => {

  if (type === "error") {
    notify.error(message, {
      position: notify.POSITION.TOP_RIGHT,
      autoClose: 3000,
      theme: "colored",
      pauseOnHover: true,
      rtl: true
    });

  } else if (type === "success") {
    notify.success(message, {
      position: notify.POSITION.TOP_RIGHT,
      autoClose: 5000,
      theme: "colored",
      pauseOnHover: true,
      rtl: true
    });
  } else if (type === "warning") {
    notify.warn(message, {
      position: notify.POSITION.TOP_RIGHT,
      autoClose: 5000,
      theme: "colored",
      pauseOnHover: true,
      rtl: true
    });
  }
  else if (type === "info") {
    notify.info(message, {
      position: notify.POSITION.TOP_RIGHT,
      autoClose: 5000,
      theme: "colored",
      pauseOnHover: true,
      rtl: true
    });
  }
  else if (type === "default") {
    notify.loading(message, {
      position: notify.POSITION.BOTTOM_LEFT,
      autoClose: 5000,
      theme: "light",
      pauseOnHover: true,
      icon: false,
      closeButton: true
      //   closeOnClick:true
    });
  }
}




export const getErrorStyle = (errors, fieldName) => {
  if (getIn(errors, fieldName)) {
    return {
      border: '1px solid #ff4d4d'
    }

  }
}


export const toEnNumber = (number) => {
  if (number) {
    number = number
      .replace(/[۰]/g, '0')
      .replace(/[۱]/g, '1')
      .replace(/[۲]/g, '2')
      .replace(/[۳]/g, '3')
      .replace(/[۴]/g, '4')
      .replace(/[۵]/g, '5')
      .replace(/[۶]/g, '6')
      .replace(/[۷]/g, '7')
      .replace(/[۸]/g, '8')
      .replace(/[۹]/g, '9')
    console.log(number);
    return number;


  }
}