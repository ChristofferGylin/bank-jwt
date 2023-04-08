const getCookie = (cookieName) => {

    const cookies = document.cookie.split(' ');
    const cookie = cookies.find(cookie => cookie.includes(cookieName)).split('=')[1];

    return cookie;

}

export default getCookie;