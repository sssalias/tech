import React from 'react';
import {ImageList} from "widgets/image";


const elements = [
    'https://avatars.mds.yandex.net/i?id=d02a82b49cf749fab4ca591605a9a193922bb839-10727636-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=36b8564507c4ef2bd469b28ef1153bd273669bc3-10702829-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=d5f4110bc265aa35a82099c7e3b0038d449cf88c-9221923-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=0c0155a343361ba15cfc1626e47fc4ce4d7a94df-12144750-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=514199dddc51bd974b8a5c38a831469c5b49811a-11623870-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=d02a82b49cf749fab4ca591605a9a193922bb839-10727636-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=36b8564507c4ef2bd469b28ef1153bd273669bc3-10702829-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=d5f4110bc265aa35a82099c7e3b0038d449cf88c-9221923-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=0c0155a343361ba15cfc1626e47fc4ce4d7a94df-12144750-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=514199dddc51bd974b8a5c38a831469c5b49811a-11623870-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=d02a82b49cf749fab4ca591605a9a193922bb839-10727636-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=36b8564507c4ef2bd469b28ef1153bd273669bc3-10702829-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=d5f4110bc265aa35a82099c7e3b0038d449cf88c-9221923-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=0c0155a343361ba15cfc1626e47fc4ce4d7a94df-12144750-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=514199dddc51bd974b8a5c38a831469c5b49811a-11623870-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=d02a82b49cf749fab4ca591605a9a193922bb839-10727636-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=36b8564507c4ef2bd469b28ef1153bd273669bc3-10702829-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=d5f4110bc265aa35a82099c7e3b0038d449cf88c-9221923-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=0c0155a343361ba15cfc1626e47fc4ce4d7a94df-12144750-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=514199dddc51bd974b8a5c38a831469c5b49811a-11623870-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=d02a82b49cf749fab4ca591605a9a193922bb839-10727636-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=36b8564507c4ef2bd469b28ef1153bd273669bc3-10702829-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=d5f4110bc265aa35a82099c7e3b0038d449cf88c-9221923-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=0c0155a343361ba15cfc1626e47fc4ce4d7a94df-12144750-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=514199dddc51bd974b8a5c38a831469c5b49811a-11623870-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=d02a82b49cf749fab4ca591605a9a193922bb839-10727636-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=36b8564507c4ef2bd469b28ef1153bd273669bc3-10702829-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=d5f4110bc265aa35a82099c7e3b0038d449cf88c-9221923-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=0c0155a343361ba15cfc1626e47fc4ce4d7a94df-12144750-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=514199dddc51bd974b8a5c38a831469c5b49811a-11623870-images-thumbs&n=13',
]

const Photos = () => {
    return (
        <div>
            <ImageList elements={elements}/>
        </div>
    );
};

export default Photos;