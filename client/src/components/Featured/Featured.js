import React from "react";
import xinh2 from '../../assets/images/xinh2.jpg';
import xinh3 from '../../assets/images/xinh3.jpg';
import xinh4 from '../../assets/images/xinh4.jpg';
import xinh5 from '../../assets/images/xinh5.jpg';
import styled from 'styled-components';

const Featured = () => {
  return <Wrapper className="mt-5">
    <Content className="mt-2">
        <div className="container parent">
            <div className="div1">
                <img src={xinh2} alt="" className="img-responsive img-resize" />
            </div>
            <div className="div2 mt-1">
                <img src={xinh3} alt="" className="img-responsive img-resize" />
            </div>
            <div className="div3">
                <img src={xinh5} alt="" className="img-responsive img-resize" />
            </div>
        </div>
        <div className="container below-wrapper mt-3">
            <div className="row">
                <div className="col-md-4">
                    <img src={xinh2} alt="" className="img-responsive img-resize" />
                </div>
                <div className="col-md-4">
                    <img src={xinh3} alt="" className="img-responsive img-resize" />
                </div>
                <div className="col-md-4">
                    <img src={xinh4} alt="" className="img-responsive img-resize" />
                </div>
            </div>
        </div>
    </Content>
    <Content>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-7" >
                    <img src={xinh2} alt="" className="img-responsive img-resize" />
                </div>
                <div className="col-md-5">
                    <img src={xinh4} alt="" className="img-responsive img-resize" />
                </div>
            </div>
        </div>
    </Content>
  </Wrapper>
};



const Wrapper = styled.div`
    width: 100%;
`

const Content = styled.div`
    width: 100%;
        .parent {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 15px;
        overflow: hidden;
            .div1 {
                grid-area: 1 / 1 / 2 / 2; 
                height: 400px;
                overflow: hidden;
                img {
                    width: 100%;
                    object-fit: cover;
                }
            }
            .div2 { 
                grid-area: 2 / 1 / 3 / 2;
                height: 400px;
                img {   
                    width: 100%;
                    object-fit: cover;
                }
            }
            .div3 { 
                grid-area: 1 / 2 / 3 / 3;
                height: 800px;
                img {
                    width: 100%;
                    object-fit: cover;
                }
            }
        }
        .below-wrapper {
            width: 100%;
            img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
        }
`
export default Featured;