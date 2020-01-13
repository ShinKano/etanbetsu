import React from 'react'
//
import Layout from '../components/Layout'
import GalleryOneTwo from '../elements/GalleryOneTwo'
//
import etanbetsu_header from '../img/etanbetsu_header.jpg'
import etanbetsu03 from '../img/etanbetsu03.jpg'
import etanbetsu04 from '../img/etanbetsu04.jpg'
import etanbetsu05 from '../img/etanbetsu05.jpg'


const Etanbetsu = () => (

    <Layout>
        <section className="section has-background-classic-blue">
            <div className="container">
            <div className="full-height align-items-center">
                    <h1 className="title color-white has-text-centered">
                        江丹別について
                    </h1>
                </div>
            </div>
        </section>

        <section>
            <figure className="image is-3by1" id="apas">
                <img src={etanbetsu_header} />
            </figure>
        </section>

        <section className="section">
            <div className="container">
                <h2 className="subtitle is-size-4 has-text-centered">
                    江丹別とは
                </h2>
                <hr />
                <p className="has-text-centered">
                    北海道にある、日本で一番寒い村のひとつ。
                </p>

                <div className="columns is-centered margin-top-2">
                    <div className="column is-8">
                        <p className="is-size-6 margin-bottom">
                            江丹別は、北海道・旭川市にあります。かつて「江丹別村」だったこの地域は、
                            1955年（昭和30年）に旭川市に編入され、現在は「江丹別町」となっています。
                            <br /><br />
                            北海道の中でも旭川市は非常に寒い地域として知られていますが、江丹別はさらに寒さが厳しいことで有名で、
                            シーズンになると、毎年テレビカメラがこの最低気温を取材にくるほどです。
                            <br /><br />
                            旭川市の中心部から車で20~30分ほど。人口の多い旭川では、人の生活による熱気がありますが、
                            江丹別にはそれがありません。冬場の気温はマイナス20度以下、日によってはマイナス30度を
                            下回ることさえあります。
                            <br /><br />
                            反対に、夏場は北海道にも関わらず35度を記録することも。夏暑く、冬寒い。
                            道内でも唯一の環境化にあるのは、江丹別の特殊な盆地型の地形が影響していると言われています。
                        </p>
                        <GalleryOneTwo
                            img1={etanbetsu03}
                            img2={etanbetsu04}
                            img3={etanbetsu05}
                        />
                    </div>
                </div>
                <div className="columns is-centered margin-top-2">
                    <div className="column is-8">
                        <p className="is-size-6 margin-bottom">
                            道内では「江丹別そば」が有名で、そばの名産地として知られています。
                            江丹別産のそばを使用する蕎麦屋さんが、実は北海道だけでなく全国にいらっしゃいます。
                            特殊な厳しい気候の中で力強く育つそばの実は、風味にとても優れているのです。
                            <br /><br />
                            また最近では、素材と製法にこだわった国産ブルーチーズ「江丹別の青いチーズ」が
                            JAL国際線ファーストクラスの機内食に採用されるなど、全国に知られるブランドとなっています。
                            <br /><br />
                            町のなかには、豊かな自然を利用した若者の郷やパークランド嵐山などのレクリエーション施設や体験施設等、
                            市民の交流や憩いの場も整備されています。
                            <br /><br />
                            しかしながら、街の人口はおよそ300人ほど。高齢者の割合も多く、
                            限界集落に近い割合となっている現状があります。
                        </p>
                    </div>
                </div>
            </div>
        </section>


    </Layout>
)

export default Etanbetsu