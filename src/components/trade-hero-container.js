import * as React from "react";
import styled from "styled-components";

const ItsTimeTo = styled.p`
  margin: 0;
`;
const The = styled.span``;
const Future = styled.span`
  background: linear-gradient(96.58deg, #78e65d, #d5fa39);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const ItsTimeToContainer = styled.b`
  position: absolute;
  top: 0%;
  left: 0%;
  letter-spacing: -4.19px;
  line-height: 100px;
`;
const Future1 = styled.b`
  position: absolute;
  top: 50.5%;
  left: 41.41%;
  letter-spacing: -4.19px;
  line-height: 100px;
  background: linear-gradient(
    96.58deg,
    rgba(212, 249, 56, 0.7),
    rgba(213, 250, 57, 0.7)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: blur(33.52px);
`;
const ItsTimeToTradeTheFutureParent = styled.div`
  position: relative;
  width: 693px;
  height: 202px;
  font-size: var(--font-size-77xl);
`;
const DerivatesMadeSimple = styled.div`
  position: relative;
  line-height: 36px;
  color: var(--color-gray-100);
  display: none;
`;
const TradeBtcEth = styled.div`
  position: relative;
  text-transform: capitalize;
  color: var(--neutrals-grey-4);
`;
const GroupParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-21xl);
`;
const ShadowIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 261.34px;
  height: 529.67px;
  object-fit: cover;
  opacity: 0.7;
`;
const MainIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 261.34px;
  height: 529.67px;
  object-fit: cover;
`;
const Iphone14ProSpaceBlackMock1 = styled.img`
  position: absolute;
  top: 10.1px;
  left: 12.43px;
  width: 235.44px;
  height: 508.04px;
  object-fit: cover;
  mix-blend-mode: normal;
`;
const Iphone14ProSpaceBlackMock = styled.div`
  position: absolute;
  top: 73.57px;
  left: 0px;
  width: 261.34px;
  height: 529.67px;
`;
const ShadowIcon1 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 260.41px;
  height: 527.79px;
  object-fit: cover;
  opacity: 0.7;
`;
const MainIcon1 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 260.41px;
  height: 527.79px;
  object-fit: cover;
`;
const Iphone14ProSpaceBlackMock3 = styled.img`
  position: absolute;
  top: 10.07px;
  left: 12.39px;
  width: 234.6px;
  height: 506.24px;
  object-fit: cover;
  mix-blend-mode: normal;
`;
const Iphone14ProSpaceBlackMock2 = styled.div`
  position: absolute;
  top: 75px;
  left: 519.18px;
  width: 260.41px;
  height: 527.79px;
`;
const ShadowIcon2 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 329.93px;
  height: 668.7px;
  object-fit: cover;
  opacity: 0.7;
`;
const MainIcon2 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 329.93px;
  height: 668.7px;
  object-fit: cover;
`;
const Iphone14ProSpaceBlackMock5 = styled.img`
  position: absolute;
  top: 12.75px;
  left: 15.7px;
  width: 297.24px;
  height: 641.39px;
  object-fit: cover;
  mix-blend-mode: normal;
`;
const Iphone14ProSpaceBlackMock4 = styled.div`
  position: absolute;
  top: 0px;
  left: 225.78px;
  width: 329.93px;
  height: 668.7px;
`;
const Iphone14ProSpaceBlackMockParent = styled.div`
  position: relative;
  width: 779.59px;
  height: 668.7px;
`;
const HeroRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-61xl) 0px var(--padding-101xl);
  gap: var(--gap-57xl);
  text-align: center;
  font-size: var(--font-size-5xl);
  color: var(--white);
  font-family: var(--mobile-caption-1-medium);
`;

const TradeHeroContainer = () => {
  return (
    <HeroRoot>
      <GroupParent>
        <ItsTimeToTradeTheFutureParent>
          <ItsTimeToContainer>
            <ItsTimeTo>It’s time to trade,</ItsTimeTo>
            <ItsTimeTo>
              <The>{`the `}</The>
              <Future>future.</Future>
            </ItsTimeTo>
          </ItsTimeToContainer>
          <Future1>future.</Future1>
        </ItsTimeToTradeTheFutureParent>
        <DerivatesMadeSimple>Derivates made simple!</DerivatesMadeSimple>
        <TradeBtcEth>
          Trade BTC, ETH Futures with 125x leverage and earn rewards.
        </TradeBtcEth>
      </GroupParent>
      <Iphone14ProSpaceBlackMockParent>
        <Iphone14ProSpaceBlackMock>
          <ShadowIcon alt="" src="/shadow@2x.png" />
          <MainIcon alt="" src="/main@2x.png" />
          <Iphone14ProSpaceBlackMock1
            alt=""
            src="/iphone-14-pro-space-black-mockup-label@2x.png"
          />
        </Iphone14ProSpaceBlackMock>
        <Iphone14ProSpaceBlackMock2>
          <ShadowIcon1 alt="" src="/shadow1@2x.png" />
          <MainIcon1 alt="" src="/main1@2x.png" />
          <Iphone14ProSpaceBlackMock3
            alt=""
            src="/iphone-14-pro-space-black-mockup-label1@2x.png"
          />
        </Iphone14ProSpaceBlackMock2>
        <Iphone14ProSpaceBlackMock4>
          <ShadowIcon2 alt="" src="/shadow2@2x.png" />
          <MainIcon2 alt="" src="/main2@2x.png" />
          <Iphone14ProSpaceBlackMock5
            alt=""
            src="/iphone-14-pro-space-black-mockup-label2@2x.png"
          />
        </Iphone14ProSpaceBlackMock4>
      </Iphone14ProSpaceBlackMockParent>
    </HeroRoot>
  );
};

export default TradeHeroContainer;
