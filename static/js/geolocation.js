var mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 15
};

var map = new naver.maps.Map('map', mapOptions);

var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.3595704, 127.105399),
    map: map
});