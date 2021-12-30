let map = new naver.maps.Map('map',);

function jeju(){
    var jeju = new naver.maps.LatLng(33.3590628, 126.534361);
    map.setCenter(jeju);
}

function seoul(){
    var seoul = new naver.maps.LatLng(37.5614483, 127.0114883);
    map.setCenter(seoul);
}

function normal(){
    map.setMapTypeId(naver.maps.MapTypeId.NORMAL);
}

function satellite(){
    map.setMapTypeId(naver.maps.MapTypeId.SATELLITE);
}
// 마커 찍기

function jejumarker(){
    var jeju = new naver.maps.LatLng(33.3590628, 126.534361);

    var contentString = [
        '<div class="iw_inner">',
        '   <h3>서울특별시청</h3>',
        '   <p>서울특별시 중구 태평로1가 31 | 서울특별시 중구 세종대로 110 서울특별시청<br>',
        '       02-120 | 공공,사회기관 > 특별,광역시청<br>',
        '       <a href="http://www.seoul.go.kr" target="_blank">www.seoul.go.kr/</a>',
        '   </p>',
        '</div>'
    ].join('');

    var marker = new naver.maps.Marker({
        map: map,
        position: jeju
    });

    var infowindow = new naver.maps.InfoWindow({
        content: contentString
    });

    naver.maps.Event.addListener(marker, "click", function (e) {
        if (infowindow.getMap()) {
            infowindow.close();
        } else {
            infowindow.open(map, marker);
        }
    });
}

map.setZoom(10);