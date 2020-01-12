import React from 'react'
//
import kakigori01 from '../img/kakigori01.jpg'
import coffee from '../img/coffee.jpg'
import wiskey from '../img/wiskey.jpg'


const Features = () => {

    const features = [
        {title: 'かき氷', 
         desc : 'ふわふわなかき氷は天然氷で。日本伝統の製法で作る本物をお楽しみください。',
         image: kakigori01},

         {title: 'ウイスキー', 
          desc : 'オン・ザ・ロックスは溶けにくい氷を使うのがポイント。美味しいお酒は氷も美味しく。',
          image: wiskey},
        
        {title: 'アイスコーヒー', 
         desc : '純度の高い天然氷は溶けにくいので、コーヒーが薄まりにくく味がよくなります。',
         image: coffee},
    ];

    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h2 className="title has-text-centered">
                            <span className="inline-block">天然氷の</span>
                            <span className="inline-block">使い方</span>
                        </h2>
                    </div>
                </div>

                <div className="columns is-multiline">

                    {features.map(feature => (
                        <div className="column is-one-third" key={feature.title}>
                            <div className="card border-radius">
                                <div className="card-image">
                                    <figure className="image is-2by1">
                                        <img className="border-radius" src={feature.image} alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="margin-bottom">
                                        <p className="title is-4 has-text-centered">{feature.title}</p>
                                    </div>
                                    <div className="content">
                                        {feature.desc}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    

                </div>
            </div>
        </section>
    )
}

export default Features