export const getCurrentPosition = (onSuccess, onFailure) => {
  navigator.geolocation.getCurrentPosition(
    onSuccess,
    onFailure,
    { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
  )
}

export default getCurrentPosition
