import React from 'react'
import styled from 'styled-components'
//
import bgImage from '../img/bg-1.jpg'
import Button from '../elements/Button'


const BackgroundImage = styled.section`
    background-image: url(${bgImage});
    background-position: center;
    background-size: cover;
    height: 90vh;
    display: flex;
    align-items: center;
`

const Hero = () => {
    return (
        <BackgroundImage className="section">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="hero-text column">
                        <h1 className="title color-white is-size-2">
                            <span className="inline-block">江丹別の</span>
                            <span className="inline-block">&nbsp;天然氷</span>
                        </h1>
                        <h2 className="subtitle is-6 color-white has-text-weight-bold">
                            <span className="inline-block">&nbsp;Pure Natural Ice</span>
                            <span className="inline-block">&nbsp;from Etanbetsu</span>
                        </h2>
                        <h2 className="subtitle color-white">
                            日本一寒い村
                            <span className="inline-block">が作り出す</span>
                            <span className="inline-block">たったひとつの天然氷</span>
                        </h2>
                        <Button 
                            outline={true}
                            to="/contact"
                            text="お問い合わせ"
                        />
                    </div>
                </div>
            </div>
        </BackgroundImage>
    )
}

export default Hero