import React from 'react'
//
import Layout from '../components/Layout'
import GalleryOneTwo from '../elements/GalleryOneTwo'
//
import ice_header from '../img/ice_header.jpg'
import ice01 from '../img/ice01.jpg'
import ice02 from '../img/ice02.jpg'
import ice03 from '../img/ice03.jpg'
import ice04 from '../img/ice04.jpg'
import ice05 from '../img/ice05.jpg'
import ice06 from '../img/ice06.jpg'
import ice07 from '../img/ice07.jpg'
import kakigori01 from '../img/kakigori01.jpg'


const Kori = () => (

    <Layout>
        <section className="section has-background-classic-blue">
            <div className="container">
            <div className="full-height align-items-center">
                    <h1 className="title color-white has-text-centered">
                        江丹別の天然氷
                    </h1>
                </div>
            </div>
        </section>

        <section>
            <figure className="image is-3by1" id="apas">
                <img src={ice_header} />
            </figure>
        </section>

        <section className="section">
            <div className="container">
                <h2 className="subtitle is-size-4 has-text-centered">
                    天然氷とは
                </h2>
                <hr />
                <p className="has-text-centered">
                    自然の寒さだけでゆっくり時間をかけて凍らせ、池や湖から採取します。
                </p>

                <div className="columns is-centered margin-top-2">
                    <div className="column is-8">
                        <p className="is-size-6 margin-bottom">
                            自然の寒さを利用して、ゆっくりと時間をかけて凍らせた氷を「天然氷」といいます。
                            その昔、電気冷凍庫が無かった時代には、氷といえば池や湖の氷を収穫するこの天然氷が
                            一般的でした。
                            <br /><br />
                            そのため、天然氷は寒い地域でしか作ることができません。
                            日中の気温が低く保たれていなければ、池の氷が厚く成長しないからです。
                            天然氷は成長するまでに１〜２週間はかかります。十分な厚みがでるまで、根気よく育てる必要があります。
                            <br /><br />
                            現在日本で天然氷が作られているのは、八ヶ岳、山中湖、日光、軽井沢などの限られた地域で、たったの７軒のみ。
                            冬の気温が十分冷え込み、なおかつ雪が少ない山中に天然氷の蔵元が分布しています。
                            
                        </p>
                        <GalleryOneTwo
                            img1={ice01}
                            img2={ice04}
                            img3={ice05}
                        />
                    </div>
                </div>
                <div className="columns is-centered margin-top-2">
                    <div className="column is-8">
                        <p className="is-size-6 margin-bottom">
                            北海道にはこれまで天然氷の蔵元がありませんでした。実は、雪の多い地域は天然氷に向いていないのです。
                            雪は空気中の微小な塵を巻き込んで大きくなります。これが天然氷にとっては不純物となってしまいます。
                            また、雪は氷に比べて温度が高いので雪がつもると氷に混ざってしまうのです。
                            <br /><br />
                            もちろん北海道以外の天然氷の蔵元でも雪が降ります。そのため天然氷を作る人たちは冬場休まず
                            池の掃除をして、氷に雪が入らないようにします。夜間に雪が振ったら徹夜の作業をすることも。
                            休むことなく氷の上を掃き掃除し、不純物を含まない綺麗な氷を目指します。
                            <br /><br />
                            もし、雨が振ったらどうなるでしょうか？氷に雨が振っては台無しになってしまいますので、
                            池の氷を全部割り、水を貼るところからやり直しです。天然氷は成長するまでに１〜２週間はかかりますから、
                            とても悲しい作業になります。これも自然の厳しさです。
                        </p>
                    </div>
                </div>
            </div>
        </section>



        <section>
            <figure className="image is-3by1" id="guadalupe">
                <img src={ice07} />
            </figure>
        </section>

        <section className="section">
            <div className="container">
                <h2 className="subtitle is-size-4 has-text-centered">
                    天然氷と普通の氷の違い
                </h2>
                <hr />
                <p className="has-text-centered">
                    純度の差が味・食感・体験の差に。
                </p>

                <div className="columns is-centered margin-top-2">
                    <div className="column is-8">
                        <p className="is-size-6 margin-bottom">
                            自然の寒さで凍らせる天然氷は、ゆっくりと時間をかけて固まることによって
                            まるで水中の不純物を押しだしながら固まります。一体なにが起こっているのかというと...
                            <br /><br />
                            実は不純物を含む水は、純粋な水に比べて凍るスピードが遅くなるのです。
                            したがって、池の中では純粋な水ほど先に氷になります。
                            <br /><br />
                            基本的に不純物は水よりも比重が重いので、池の底に向かって沈みます。
                            さらに水温よりも外気温が低いことも合まって、池の表面から下に向かって氷が
                            成長していくことになります。
                            <br /><br />
                            これによって、まるで水中の不純物を押しだしながら氷が成長し、純度の高い綺麗で透き通った
                            氷が出来上がるのです。
                            <br /><br />
                            これとは反対に、通常の氷は冷凍庫の低い温度で急激に冷えて固まります。
                            水の純度も関係ないほどに凍るスピードが早すぎて、かつ上下左右均一に冷えて固まっていくため、
                            不純物をそのまま含んだ氷が出来上がります。
                            <br /><br />
                            氷が白くなっていたり、気泡を含むのはこのためです。全てが一気に凍りついたことがわかります。
                        </p>
                        <GalleryOneTwo
                            img1={ice06}
                            img2={ice02}
                            img3={kakigori01}
                        />
                    </div>
                </div>
                <div className="columns is-centered margin-top-2">
                    <div className="column is-8">
                        <p className="is-size-6 margin-bottom">
                            かき氷にすると、その差がはっきりとわかるでしょう。
                            天然氷のかき氷は「頭がキーンとしない」という話をきいたことがある方も
                            いらっしゃるかもしれません。
                            <br /><br />
                            不純物を含む氷は、氷になるスピードが遅いといいました。
                            言い換えるなら「溶けやすい」ということです。
                            <br /><br />
                            通常、冷凍庫の設定温度はマイナス18度ほどが一般的です。
                            普通の氷でかき氷を作る場合は、冷凍庫から出した氷をすぐに削り始めますので、
                            氷の温度が低く、食べた人の身体が急激に冷やされることで不快感の原因になってしまいます。
                            <br /><br />
                            一方で、天然氷は溶けにくいため「氷をあたためてから」かき氷にすることが可能です。
                            0度付近の氷をかき氷にしてもすぐに溶けることがないので、溶ける寸前の温度でもかき氷として形を
                            保つことができます。
                            <br /><br />
                            温度が高いので、口に入れた瞬間に融解します。これがフワフワの口どけの正体です。
                            加えて、身体を冷やしすぎないので「頭がキーンとしない」というわけです。
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </Layout>
)

export default Kori