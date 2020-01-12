import React from 'react'
//
import about from '../img/bg-1.jpg'


const About = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        {/* blank space here */}
                    </div>
                    <div className="column">
                        <h2 className="title has-text-centered">
                            <span className="inline-block">日本一寒い村の</span>
                            <span className="inline-block">自然が作る天然氷。</span>
                        </h2>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-6">
                        <img className="border-radius" src={about} alt="about" />
                    </div>
                    <div className="column max-width-1">
                        <p>
                            江丹別村は、北海道 旭川市にある小さな村です。北海道の内陸にあるこの集落は、
                            冬には全国で一番の寒さを記録するほど、気温の低い地域です。
                            <br /><br />
                            マイナス30度近い極寒。この厳しすぎるほどの自然が、美しい天然氷を生み出します。
                            <br /><br />
                            ピンと張り詰めるような澄み渡った水と空気だからこそ実現できる。
                            北海道で唯一の天然氷がここにあります。
                        </p>
                       
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About