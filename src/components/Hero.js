import React from 'react'
import styled from 'styled-components'
//
import bgImage from '../img/bg-1.jpg'


const BackgroundImage = styled.section`
    background-image: url(${bgImage});
    background-position: center;
    background-attachment: fixed;
    height: 90vh;
    display: flex;
    align-items: center;
`

const Hero = () => {
    return (
        <BackgroundImage className="section">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="hero-text column is-6 is-5-fullhd is-offset-1-fullhd">
                    <div className="section-header">
                            <h1 className="title color-white">
                                <span className="inline-block">GuestHouse</span>
                                <span className="inline-block">&nbsp;Storyshare</span>
                            </h1>
                            <h2 className="subtitle is-6 color-white">
                                <span className="inline-block">&nbsp;ゲストハウス</span>
                                <span className="inline-block">&nbsp;ストーリーシェア</span>
                            </h2>
                            <h2 className="subtitle color-white">
                                旅人が集まる
                                <span className="inline-block">フィリピン・セブ島の</span>
                                <span className="inline-block">日本人経営ホステル</span>
                            </h2>
                            <div className="field">
                                <a className="button is-primary" href="https://www.storyshare.jp/estimation_inquiry/">予約はコチラ！</a>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </BackgroundImage>
    )
}

export default Hero