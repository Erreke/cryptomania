import axios from 'axios'

export function saveUserCurrentStep(apiServerUrl, currentLevel, step) {
  return axios({
    method: 'post',
    url: apiServerUrl + '/user/save/',
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: {
      currentLevel,
      step
    }
  })
}

export function saveUserProfile(apiServerUrl, profile) {
  return axios({
    method: 'post',
    url: apiServerUrl + '/user/save/profile/',
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: {
      firstName: profile.firstName,
      secondName: profile.secondName,
      phone: profile.phone,
      email: profile.email,
      odnoklassniki: profile.odnoklassniki,
      instagram: profile.instagram,
      facebook: profile.facebook,
      vk: profile.vk,
      google: profile.google,
      twitter: profile.twitter,
      wallet: profile.wallet,
    }
  })
}

export function saveUserPassword(apiServerUrl, password) {
  return axios({
    method: 'post',
    url: apiServerUrl + '/user/save/profile/password/',
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: {
      password
    }
  })
}

export function saveUserAvatar(apiServerUrl, avatar) {
  return axios({
    method: 'post',
    url: apiServerUrl + '/user/save/profile/avatar/',
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: {
      avatar
    }
  })
}

export function sendRemittanceConfirmation(apiServerUrl, userId) {
  return axios({
    method: 'post',
    url: apiServerUrl + '/user/send/remittance/confirmation/',
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: {
      userId
    }
  })
}

export function checkAllConfirmations(apiServerUrl) {
  return axios({
    method: 'post',
    url: apiServerUrl + '/user/send/remittance/confirmation/',
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
}
