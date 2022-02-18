import styled from 'styled-components';

export const StyledCarouselContainer = styled.div`
  .slick-list,
  .slick-slider,
  .slick-track {
    position: relative;
    display: block;
  }
  .slick-loading .slick-slide,
  .slick-loading .slick-track {
    visibility: hidden;
  }
  .slick-slider {
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
    margin-left: 50px;
    margin-right: 50px;
  }
  .slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: 0;
  }
  .slick-list.dragging {
    cursor: hand;
  }
  .slick-slider .slick-list,
  .slick-slider .slick-track {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  .slick-track {
    top: 0;
    left: 0;
  }
  .slick-track:after,
  .slick-track:before {
    display: table;
    content: '';
  }
  .slick-track:after {
    clear: both;
  }
  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
  }
  [dir='rtl'] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  } /*# sourceMappingURL=slick.min.css.map */

  .slick-dots,
  .slick-next,
  .slick-prev {
    position: absolute;
    display: block;
    padding: 0;
  }
  .slick-dots li button:before,
  .slick-next:before,
  .slick-prev:before {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-loading .slick-list {
    //background: url(ajax-loader.gif) center center no-repeat #fff;
  }

  .slick-next,
  .slick-prev {
    font-size: 0;
    line-height: 0;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    outline: 0;
    background: 0 0;
    border-radius: 50%;
    border: solid 2px ${(props) => props.theme.colors.grey};
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .slick-next:hover,
  .slick-prev:hover {
    color: transparent;
    outline: 0;
    background: 0 0;
    border: solid 2px ${(props) => props.theme.colors.primary};
  }
  .slick-next:hover:before,
  .slick-prev:hover:before {
    border-left: solid 2px ${(props) => props.theme.colors.primary};
    border-bottom: solid 2px ${(props) => props.theme.colors.primary};
  }
  .slick-next.slick-disabled:before,
  .slick-prev.slick-disabled:before {
    opacity: 0.25;
  }
  .slick-next:before,
  .slick-prev:before {
    font-size: 20px;
    line-height: 1;
    border-left: solid 2px ${(props) => props.theme.colors.grey};
    border-bottom: solid 2px ${(props) => props.theme.colors.grey};
    transition: 0.3s;
  }

  .slick-prev {
    left: -50px;
    padding-left: 5px;
  }
  [dir='rtl'] .slick-prev {
    right: -50px;
    left: auto;
    padding-right: 5px;
  }
  .slick-prev:before {
    content: ' ';
    display: inline-block;
    height: 15px;
    width: 15px;
    transform: rotate(45deg);
  }

  .slick-next:before,
  [dir='rtl'] .slick-prev:before {
    content: ' ';
    display: inline-block;
    height: 15px;
    width: 15px;
    transform: rotate(-135deg);
  }
  .slick-next {
    right: -50px;
    padding-right: 5px;
  }
  [dir='rtl'] .slick-next {
    right: auto;
    left: -50px;
    padding-left: 5px;
  }
  [dir='rtl'] .slick-next:before {
    content: '←';
  }
  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }
  .slick-dots {
    top: 100%;
    width: 100%;
    margin: 0;
    list-style: none;
    text-align: center;
  }
  .slick-dots li {
    position: relative;
    display: inline-block;
    //width: 20px;
    //height: 20px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
  }
  .slick-dots li button {
    display: block;
    width: 20px;
    height: 45px;
    cursor: pointer;
    color: transparent;
    border: 0;
    outline: 0;
    background: 0 0;
  }
  .slick-dots li button:focus,
  .slick-dots li button:hover {
    outline: 0;
  }
  .slick-dots li button:focus:before,
  .slick-dots li button:hover:before {
    opacity: 1;
    color: ${(props) => props.theme.colors.primary};
  }
  .slick-dots li button:before {
    font-size: 45px;
    line-height: 45px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    content: '•';
    text-align: center;
    color: ${(props) => props.theme.colors.grey};
    transition: 0.3s;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.8;
    color: ${(props) => props.theme.colors.primary};
  } /*# sourceMappingURL=slick-theme.min.css.map */
`;

export const SlideContainer = styled.div<{ itemsMargin: string }>`
  padding: ${(props) => props.itemsMargin};
`;
