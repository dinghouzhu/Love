import React from "react"
import { Carousel, WingBlank } from 'antd-mobile';
import { bannerDiscover } from "../../api/discover"
import discoverCss from "../../assets/css/discover.module.css"
class Banner extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            imgHeight: 176,
        }
    }
    componentDidMount() {
        // 获取轮播图
        bannerDiscover()
            .then(res => {
                this.setState({
                    data: res.banners
                })
            })
    }
    render() {
        return (
            <WingBlank>
                <Carousel
                    autoplay={true}
                    infinite
                    className={discoverCss.Carousel}
                >
                    {this.state.data.map((item, index) => (
                        <a
                            key={index}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`${item.pic}`}
                                key={index}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top', borderRadius: '5px', overflow: "hidden" }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank >
        );
    }
}

export default Banner