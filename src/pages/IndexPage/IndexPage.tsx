import React from 'react';
import {BaseLayout} from "shared/app/ui";
import {ImageCard} from "widgets/image/index";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


const IndexPage = () => {

    const elements = [
        'https://avatars.mds.yandex.net/i?id=d02a82b49cf749fab4ca591605a9a193922bb839-10727636-images-thumbs&n=13',
        'https://avatars.mds.yandex.net/i?id=36b8564507c4ef2bd469b28ef1153bd273669bc3-10702829-images-thumbs&n=13',
        'https://avatars.mds.yandex.net/i?id=d5f4110bc265aa35a82099c7e3b0038d449cf88c-9221923-images-thumbs&n=13',
        'https://avatars.mds.yandex.net/i?id=0c0155a343361ba15cfc1626e47fc4ce4d7a94df-12144750-images-thumbs&n=13',
        'https://avatars.mds.yandex.net/i?id=514199dddc51bd974b8a5c38a831469c5b49811a-11623870-images-thumbs&n=13'
    ]
    const children = elements.map(el => <ImageCard el={el}/>)

    return (
        <BaseLayout>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                <Masonry gutter='20px'>
                    {children}
                </Masonry>
            </ResponsiveMasonry>
        </BaseLayout>
    );
};

export default IndexPage;