const auth_secret = 'mySecret';
const site_maintenance_flag = false;
const web_server_port = process.env.PORT || 3000;
const avatar = {
    res_header : 'image/png',
    width : 250,
    height: 250
}

module.exports = {
    auth_secret,
    site_maintenance_flag,
    web_server_port,
    avatar
}