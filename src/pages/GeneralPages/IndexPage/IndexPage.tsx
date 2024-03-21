import React from 'react'
import {BaseLayout} from 'shared/ui'
import {ImageList} from 'widgets/image'
import {SearchField} from 'shared/ui'
import VideoList from "../../../widgets/video/VideoList/VideoList";

const IndexPage = () => {

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

    return (
        <BaseLayout>
            <div className='w-full flex flex-col space-y-6'>
                <div className='p-4 w-full flex flex-col justify-center items-center space-y-2'>
                    <h1 className='font-bold text-4xl bg-gradient-to-r from-dark-violet to-violet text-transparent bg-clip-text'>Добро пожаловать в KoMedia!</h1>
                    <h2 className='text-xl font-semibold text-gray-700'>Найдётся всё, что вам угодно!</h2>
                    <SearchField/>
                </div>
                <ImageList elements={elements}/>
                <VideoList elements={elements}/>
            </div>
        </BaseLayout>
    )
}

export default IndexPage