import React from 'react'
//
import Button from '../elements/Button'
import Gallery_1_2 from '../elements/Gallery_1_2'
//
import apas_out from '../img/apas_out.jpg'
import apas_single001 from '../img/apas_single001.jpg'
import apas_kitchen from '../img/apas_kitchen.jpg'
import guadalupe_out from '../img/guadalupe_out.jpg'
import guadalupe_single002 from '../img/guadalupe_single002.jpg'
import guadalupe_living001 from '../img/guadalupe_living001.jpg'




const Locations = () => {
    return(
        <section className="section has-background-lightblue">
            <div className="container">
                <h2 className="title has-text-centered has-text-white is-spaced">
                    <span className="inline-block">天然氷と</span>
                    <span className="inline-block">江丹別</span>
                </h2>
                <div className="columns margin-top-2">
                    <div className="column max-width-1">
                        <h3 className="title is-4 has-text-centered has-text-white">天然氷について</h3>
                        <p>
                            天然氷とは、自然の寒さで凍った氷のことです。かつて冷凍技術が存在しない頃は、
                            各地に氷室があり、池や湖で氷は採取されていましたが、
                            現代では氷を池や湖から採取することはほとんどなくなりました。
                            <br /><br />
                            自然の寒さが作り出す氷は、冷凍庫と違いゆっくり時間をかけて氷になるその過程において、
                            水中の不純物が押し出され、曇りのない透き通った美しい氷になります。
                            <br /><br />
                            また、美しい氷は味にも雑味がなく、ウイスキーやカクテルなどお酒にも最適。
                            純度が高いため溶けにくく、かき氷にすればさらに絶品です。
                        </p>
                        <div className="has-text-centered margin-top-2">
                            <Button
                                outline={true}
                                to="/rooms#apas"
                                text="さらに詳しく"
                            />
                        </div>
                    </div>
                    <div className="column is-6">
                        <Gallery_1_2
                            img1={apas_out}
                            img2={apas_single001}
                            img3={apas_kitchen}
                        />
                    </div>
                </div>

                <div className="margin-top-2" />

                <div className="columns reverse margin-top-2">
                    <div className="column is-6">
                        <Gallery_1_2
                            img1={guadalupe_living001}
                            img2={guadalupe_single002}
                            img3={guadalupe_out}
                        />
                    </div>
                    <div className="column max-width-1">
                        <h3 className="title is-4 has-text-centered has-text-white">江丹別について</h3>
                        <p>
                            江丹別は北海道 旭川市にある小さな村です。現在は過疎により限界集落となっています。
                            旭川と江丹別は、日本全国的にみても最も寒い地域の一つで、真冬はマイナス30度以下を
                            記録することもあるほどです。
                            <br /><br />
                            特殊な盆地型の地形が特徴で、このために冬場も風が少なく、空気がピンと張り詰めたよう
                            になります。空気中の塵が風で舞わないため、不純物が氷中に侵入しにくい気候です。
                            <br /><br />
                            蔵と氷室があるのはボンベツ川の流域です。これは石狩川にも合流する綺麗な水です。
                        </p>
                        <div className="has-text-centered margin-top-2">
                            <Button
                                outline={true}
                                to="/rooms#guadalupe"
                                text="さらに詳しく"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Locations