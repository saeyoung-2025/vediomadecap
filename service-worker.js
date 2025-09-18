// 서비스 워커 설치
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('travel-video-maker-v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/style.css', // CSS 파일이 있다면 추가
                '/script.js', // JS 파일이 있다면 추가
                '/favicon.png', // 아이콘 파일 추가
                // 필요한 다른 파일들을 여기에 추가
            ]);
        })
    );
});

// 캐시된 자원 가져오기
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});