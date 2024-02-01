<template>
  <div class="content">
    <MainHeader ref="refLogo" />
    <div
      v-scroll-down
      ref="refChart"
      class="chat"
      :style="{ height: chatSize }">
      <div v-for="msg of messages" :key="msg.value">
        <div v-if="msg.name === 'server'" class="message-server">
          <p class="message-server-text">{{ msg.value }}</p>
          <div class="message-server-bg"></div>
          <div class="message-server-segment">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.7 44.094">
              <path
                d="M76.115,134.854v44.094s6.393-16.506,34.7-16.506"
                transform="translate(-76.115 -134.854)"
                fill="#e37c8c" />
            </svg>
          </div>
        </div>
        <div v-else class="message-server client">
          <p class="message-server-text">{{ msg.value }}</p>
          <div class="message-server-bg"></div>
          <div class="message-server-segment">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.7 44.094">
              <path
                d="M481.661,360.982v44.094s-6.393-16.506-34.7-16.506"
                transform="translate(-446.961 -360.982)"
                fill="#8898df" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="man">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 126.62 208.93">
        <defs>
          <linearGradient
            id="c"
            data-name="Безымянный градиент 14"
            x1="63.42"
            y1="108.92"
            x2="62.99"
            y2="97.32"
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#f4d8bd" />
            <stop offset=".23" stop-color="#f3d4b4" />
            <stop offset=".59" stop-color="#f1cc9c" />
            <stop offset="1" stop-color="#eec17b" />
          </linearGradient>
          <radialGradient
            id="d"
            data-name="Безымянный градиент 12"
            cx="97.69"
            cy="3749.79"
            fx="97.69"
            fy="3749.79"
            r="5.67"
            gradientTransform="translate(-33.65 -1365.17) rotate(-1.41) scale(.62 .39)"
            gradientUnits="userSpaceOnUse">
            <stop offset=".25" stop-color="#b27523" />
            <stop offset=".34" stop-color="#b88136" />
            <stop offset=".53" stop-color="#caa169" />
            <stop offset=".79" stop-color="#e7d4ba" />
            <stop offset="1" stop-color="#fff" />
          </radialGradient>
          <radialGradient
            id="e"
            data-name="Безымянный градиент 575"
            cx="-687.86"
            cy="116.7"
            fx="-687.86"
            fy="116.7"
            r="13.81"
            gradientTransform="translate(-611.99 10.03) rotate(179.03) scale(1 -1)"
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#1c2912" />
            <stop offset=".16" stop-color="#485240" />
            <stop offset=".46" stop-color="#959b91" />
            <stop offset=".7" stop-color="#ced1cc" />
            <stop offset=".88" stop-color="#f1f2f1" />
            <stop offset=".98" stop-color="#fff" />
          </radialGradient>
          <radialGradient
            id="f"
            data-name="Безымянный градиент 18"
            cx="-110.6"
            cy="38.45"
            fx="-110.6"
            fy="38.45"
            r="14.91"
            gradientTransform="translate(206.3 88.4) rotate(24.66)"
            gradientUnits="userSpaceOnUse">
            <stop offset=".54" stop-color="#f3f9ff" />
            <stop offset=".67" stop-color="#eef5fb" />
            <stop offset=".81" stop-color="#e2eaf0" />
            <stop offset=".96" stop-color="#cdd8dd" />
            <stop offset="1" stop-color="#c6d2d7" />
          </radialGradient>
          <radialGradient
            id="g"
            data-name="Безымянный градиент 18"
            cx="-398.58"
            cy="182.66"
            fx="-398.58"
            fy="182.66"
            r="16.72"
            gradientTransform="translate(-394 88.4) rotate(155.34) scale(1 -1)"
            xlink:href="#f" />
          <radialGradient
            id="h"
            data-name="Безымянный градиент 18"
            cx="98.56"
            cy="83.28"
            fx="98.56"
            fy="83.28"
            r="15.85"
            gradientTransform="matrix(1,0,0,1,0,0)"
            xlink:href="#f" />
          <radialGradient
            id="i"
            data-name="Безымянный градиент 18"
            cx="35.79"
            cy="79.34"
            fx="35.79"
            fy="79.34"
            r="17.24"
            gradientTransform="matrix(1,0,0,1,0,0)"
            xlink:href="#f" />
          <radialGradient
            id="j"
            data-name="Безымянный градиент 18"
            cx="35.61"
            cy="74.31"
            fx="35.61"
            fy="74.31"
            r="25.76"
            gradientTransform="matrix(1,0,0,1,0,0)"
            xlink:href="#f" />
          <radialGradient
            id="k"
            data-name="Безымянный градиент 18"
            cx="99.1"
            cy="72.24"
            fx="99.1"
            fy="72.24"
            r="28.32"
            gradientTransform="matrix(1,0,0,1,0,0)"
            xlink:href="#f" />
          <linearGradient
            id="l"
            data-name="Безымянный градиент 14"
            x1="-316.78"
            y1="64.56"
            x2="-306.02"
            y2="54.38"
            gradientTransform="translate(-288.36 14.45) rotate(178.59) scale(1 -1)"
            xlink:href="#c" />
          <linearGradient
            id="m"
            data-name="Безымянный градиент 14"
            x1="-309.72"
            y1="63.86"
            x2="-315.77"
            y2="62.13"
            gradientTransform="translate(-288.36 14.45) rotate(178.59) scale(1 -1)"
            xlink:href="#c" />
          <radialGradient
            id="n"
            data-name="Безымянный градиент 13"
            cx="3880.75"
            cy="-6904.5"
            fx="3880.75"
            fy="-6904.5"
            r="4.58"
            gradientTransform="translate(214.79 6032) rotate(-140.98) scale(1.05 -.65) skewX(1.4)"
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#aa5313" />
            <stop offset=".09" stop-color="#b05f20" />
            <stop offset=".26" stop-color="#c18244" />
            <stop offset=".49" stop-color="#dcb97f" />
            <stop offset=".75" stop-color="#ffffc9" />
          </radialGradient>
          <linearGradient
            id="o"
            data-name="Безымянный градиент 14"
            x1="84.96"
            y1="64.92"
            x2="95.72"
            y2="54.74"
            gradientTransform="translate(10.75 7.6) rotate(-1.41)"
            xlink:href="#c" />
          <linearGradient
            id="p"
            data-name="Безымянный градиент 14"
            x1="92.03"
            y1="64.21"
            x2="85.98"
            y2="62.48"
            gradientTransform="translate(10.75 7.6) rotate(-1.41)"
            xlink:href="#c" />
          <radialGradient
            id="q"
            data-name="Безымянный градиент 13"
            cx="4161.44"
            cy="-6505.52"
            fx="4161.44"
            fy="-6505.52"
            r="4.58"
            gradientTransform="translate(-195.26 6042.62) rotate(-41.84) scale(1.05 .65) skewX(1.4)"
            xlink:href="#n" />
          <radialGradient
            id="r"
            data-name="Безымянный градиент 16"
            cx="51.56"
            cy="64.99"
            fx="51.56"
            fy="64.99"
            r="48.83"
            gradientTransform="translate(10.69 -15.74) rotate(-1.41) scale(1 1.04)"
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#f4d8bd" />
            <stop offset=".23" stop-color="#f3d4b4" />
            <stop offset=".59" stop-color="#f1cc9c" />
            <stop offset="1" stop-color="#eec17b" />
          </radialGradient>
          <radialGradient
            id="s"
            data-name="Безымянный градиент 3"
            cx="42.63"
            cy="6.03"
            fx="42.63"
            fy="6.03"
            r="7.22"
            gradientTransform="translate(-3.39 74.66) rotate(-1.41) scale(1.57 .8)"
            gradientUnits="userSpaceOnUse">
            <stop offset=".25" stop-color="#714121" />
            <stop offset=".34" stop-color="#7d5134" />
            <stop offset=".53" stop-color="#9e7d67" />
            <stop offset=".79" stop-color="#d2c2b8" />
            <stop offset="1" stop-color="#fff" />
          </radialGradient>
          <radialGradient
            id="t"
            data-name="Безымянный градиент 3"
            cx="44.97"
            cy="-155.33"
            fx="44.97"
            fy="-155.33"
            r="7.22"
            gradientTransform="translate(-7.96 173.3) rotate(-1.41) scale(1.63 .59)"
            xlink:href="#s" />
          <radialGradient
            id="u"
            data-name="Безымянный градиент 15"
            cx="34.05"
            cy="1067.07"
            fx="34.05"
            fy="1067.07"
            r="5.1"
            gradientTransform="translate(31.76 1118.96) rotate(-.08) scale(.97 -.97)"
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#f6df51" />
            <stop offset=".44" stop-color="#eebd39" />
            <stop offset=".85" stop-color="#e8a326" />
          </radialGradient>
          <linearGradient
            id="v"
            data-name="Безымянный градиент 11"
            x1="-367.62"
            y1="-222.32"
            x2="-372.14"
            y2="-230.49"
            gradientTransform="translate(335.22 424.05) rotate(19.79)"
            gradientUnits="userSpaceOnUse">
            <stop offset=".07" stop-color="#80683e" />
            <stop offset=".28" stop-color="#6d502c" />
            <stop offset=".65" stop-color="#502d11" />
            <stop offset=".85" stop-color="#462007" />
          </linearGradient>
          <radialGradient
            id="w"
            data-name="Безымянный градиент 5"
            cx="-16.44"
            cy="-197.99"
            fx="-16.44"
            fy="-197.99"
            r="5.85"
            gradientTransform="translate(81.32 280.9) rotate(-.37)"
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#e58f6e" />
            <stop offset=".42" stop-color="#e48d6c" />
            <stop offset=".58" stop-color="#e38666" />
            <stop offset=".69" stop-color="#e07a5c" />
            <stop offset=".78" stop-color="#dd694e" />
            <stop offset=".86" stop-color="#d8533b" />
            <stop offset=".92" stop-color="#d23824" />
            <stop offset=".98" stop-color="#cb1809" />
            <stop offset="1" stop-color="#ca1002" />
          </radialGradient>
          <radialGradient
            id="x"
            data-name="Безымянный градиент 71"
            cx="-17.52"
            cy="8239.99"
            fx="-17.52"
            fy="8239.99"
            r="8.93"
            gradientTransform="translate(55.56 -3760.5) rotate(-.37) scale(1 .47)"
            gradientUnits="userSpaceOnUse">
            <stop offset=".15" stop-color="#fff" />
            <stop offset=".37" stop-color="#fcfbfb" />
            <stop offset=".53" stop-color="#f4f2f2" />
            <stop offset=".68" stop-color="#e6e1e1" />
            <stop offset=".82" stop-color="#d3cbcb" />
            <stop offset=".93" stop-color="#bfb2b2" />
          </radialGradient>
          <radialGradient
            id="y"
            data-name="Безымянный градиент 3"
            cx="44.86"
            cy="-56"
            fx="44.86"
            fy="-56"
            r="6.56"
            gradientTransform="translate(-9.5 119.72) rotate(-1.41) scale(1.63 .71)"
            xlink:href="#s" />
          <radialGradient
            id="z"
            cx="5184.49"
            cy="-8091.28"
            fx="5184.49"
            fy="-8091.28"
            r="35"
            gradientTransform="translate(-1645.22 1303.07) rotate(-.5) scale(.34 .15) skewX(1.08)"
            gradientUnits="userSpaceOnUse">
            <stop offset=".25" stop-color="#ffffc9" />
            <stop offset=".41" stop-color="#bcbc94" />
            <stop offset=".63" stop-color="#6c6c55" />
            <stop offset=".8" stop-color="#323227" />
            <stop offset=".93" stop-color="#0d0d0a" />
            <stop offset="1" stop-color="#000" />
          </radialGradient>
          <radialGradient
            id="aa"
            data-name="Безымянный градиент 30"
            cx="632.81"
            cy="1914.93"
            fx="632.81"
            fy="1914.93"
            r="10.79"
            gradientTransform="translate(-268.38 -830.04) rotate(-1.41) scale(.47)"
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#c98949" />
            <stop offset=".15" stop-color="#d29c67" />
            <stop offset=".56" stop-color="#ead1b8" />
            <stop offset=".86" stop-color="#f9f2eb" />
            <stop offset="1" stop-color="#fff" />
          </radialGradient>
          <radialGradient
            id="ab"
            data-name="Безымянный градиент 30"
            cx="681.45"
            cy="1914.58"
            fx="681.45"
            fy="1914.58"
            r="10.79"
            xlink:href="#aa" />
          <radialGradient
            id="ac"
            data-name="Безымянный градиент 22"
            cx="39.4"
            cy="58.36"
            fx="39.4"
            fy="58.36"
            r="7.44"
            gradientTransform="translate(10.75 7.6) rotate(-1.41)"
            gradientUnits="userSpaceOnUse">
            <stop offset=".25" stop-color="#582c2f" />
            <stop offset=".35" stop-color="#673f42" />
            <stop offset=".54" stop-color="#8f7274" />
            <stop offset=".81" stop-color="#d0c3c4" />
            <stop offset="1" stop-color="#fff" />
          </radialGradient>
          <radialGradient
            id="ad"
            data-name="Безымянный градиент 2"
            cx="39.3"
            cy="56"
            fx="39.3"
            fy="56"
            r="7.12"
            gradientTransform="translate(10.75 7.6) rotate(-1.41)"
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#9e9a9a" />
            <stop offset=".12" stop-color="#74706c" />
            <stop offset=".27" stop-color="#474139" />
            <stop offset=".34" stop-color="#363026" />
            <stop offset=".6" stop-color="#322c22" />
            <stop offset=".84" stop-color="#282118" />
            <stop offset="1" stop-color="#1d150d" />
          </radialGradient>
          <radialGradient
            id="ae"
            data-name="Безымянный градиент 20"
            cx="12138.04"
            cy="-10566.28"
            fx="12138.04"
            fy="-10566.28"
            r="13.85"
            gradientTransform="translate(-639.19 1034.02) rotate(.76) scale(.06 .09) skewX(4.86)"
            gradientUnits="userSpaceOnUse">
            <stop offset=".25" stop-color="#d7ffff" />
            <stop offset=".41" stop-color="#9fbcbc" />
            <stop offset=".63" stop-color="#5b6c6c" />
            <stop offset=".8" stop-color="#2a3232" />
            <stop offset=".93" stop-color="#0b0d0d" />
            <stop offset="1" stop-color="#000" />
          </radialGradient>
          <radialGradient
            id="af"
            data-name="Безымянный градиент 20"
            cx="12137.28"
            cy="-10568.91"
            fx="12137.28"
            fy="-10568.91"
            r="7.57"
            xlink:href="#ae" />
          <radialGradient
            id="ag"
            data-name="Безымянный градиент 22"
            cx="62.29"
            cy="58.19"
            fx="62.29"
            fy="58.19"
            r="7.44"
            xlink:href="#ac" />
          <radialGradient
            id="ah"
            data-name="Безымянный градиент 2"
            cx="62.19"
            cy="55.83"
            fx="62.19"
            fy="55.83"
            r="7.12"
            xlink:href="#ad" />
          <radialGradient
            id="ai"
            data-name="Безымянный градиент 20"
            cx="12518.22"
            cy="-10577.44"
            fx="12518.22"
            fy="-10577.44"
            r="13.85"
            xlink:href="#ae" />
          <radialGradient
            id="aj"
            data-name="Безымянный градиент 20"
            cx="12517.44"
            cy="-10580.08"
            fx="12517.44"
            fy="-10580.08"
            r="7.55"
            xlink:href="#ae" />
          <radialGradient
            id="ak"
            data-name="Безымянный градиент 19"
            cx="69"
            cy="73.22"
            fx="69"
            fy="73.22"
            r="11.82"
            gradientTransform="translate(10.75 7.6) rotate(-1.41)"
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#e79b92" />
            <stop offset=".53" stop-color="#f4d1cd" />
            <stop offset="1" stop-color="#fff" />
          </radialGradient>
          <radialGradient
            id="al"
            data-name="Безымянный градиент 19"
            cx="32.53"
            cy="74.5"
            fx="32.53"
            fy="74.5"
            r="11.82"
            xlink:href="#ak" />
          <radialGradient
            id="am"
            data-name="Безымянный градиент 39"
            cx="62.8"
            cy="68.03"
            fx="62.8"
            fy="68.03"
            r="19.16"
            gradientUnits="userSpaceOnUse">
            <stop offset=".48" stop-color="#dfe5f5" />
            <stop offset=".57" stop-color="#dae0f0" />
            <stop offset=".66" stop-color="#ced4e5" />
            <stop offset=".76" stop-color="#b9c0d1" />
            <stop offset=".85" stop-color="#9ca4b5" />
            <stop offset=".95" stop-color="#768091" />
            <stop offset="1" stop-color="#5f6a7b" />
          </radialGradient>
          <radialGradient
            id="an"
            data-name="Безымянный градиент 29"
            cx="14.31"
            cy="4445.14"
            fx="14.31"
            fy="4445.14"
            r="3.89"
            gradientTransform="translate(-40.72 -3500.89) rotate(-1.41) scale(1.1 .8)"
            gradientUnits="userSpaceOnUse">
            <stop offset=".31" stop-color="#a3acc1" />
            <stop offset=".47" stop-color="#a6afc3" />
            <stop offset=".61" stop-color="#b1b8ca" />
            <stop offset=".74" stop-color="#c2c8d6" />
            <stop offset=".87" stop-color="#dbdfe7" />
            <stop offset=".99" stop-color="#fbfcfc" />
            <stop offset="1" stop-color="#fff" />
          </radialGradient>
          <radialGradient
            id="ao"
            data-name="Безымянный градиент 18"
            cx="45.14"
            cy="60.85"
            fx="45.14"
            fy="60.85"
            r="22.83"
            gradientTransform="matrix(1,0,0,1,0,0)"
            xlink:href="#f" />
          <radialGradient
            id="ap"
            data-name="Безымянный градиент 18"
            cx="38.72"
            cy="62.24"
            fx="38.72"
            fy="62.24"
            r="37.02"
            gradientTransform="matrix(1,0,0,1,0,0)"
            xlink:href="#f" />
          <radialGradient
            id="aq"
            data-name="Безымянный градиент 18"
            cx="80.76"
            cy="60.83"
            fx="80.76"
            fy="60.83"
            r="25.43"
            gradientTransform="matrix(1,0,0,1,0,0)"
            xlink:href="#f" />
          <radialGradient
            id="ar"
            data-name="Безымянный градиент 18"
            cx="92.55"
            cy="59.63"
            fx="92.55"
            fy="59.63"
            r="42.38"
            gradientTransform="matrix(1,0,0,1,0,0)"
            xlink:href="#f" />
          <radialGradient
            id="as"
            data-name="Безымянный градиент 18"
            cx="41.26"
            cy="49.1"
            fx="41.26"
            fy="49.1"
            r="40.67"
            gradientTransform="matrix(1,0,0,1,0,0)"
            xlink:href="#f" />
          <radialGradient
            id="at"
            data-name="Безымянный градиент 18"
            cx="90.22"
            cy="37.21"
            fx="90.22"
            fy="37.21"
            r="37.25"
            gradientTransform="matrix(1,0,0,1,0,0)"
            xlink:href="#f" />
          <radialGradient
            id="au"
            data-name="Безымянный градиент 168"
            cx="29382.59"
            cy="-85059.22"
            fx="29382.59"
            fy="-85059.22"
            r="181.29"
            gradientTransform="translate(-612.43 1685.79) rotate(.25) scale(.02) skewX(.2)"
            gradientUnits="userSpaceOnUse">
            <stop offset=".07" stop-color="#5a8aa0" />
            <stop offset=".19" stop-color="#759daf" />
            <stop offset=".47" stop-color="#afc6d1" />
            <stop offset=".71" stop-color="#dae5ea" />
            <stop offset=".89" stop-color="#f5f8f9" />
            <stop offset="1" stop-color="#fff" />
          </radialGradient>
          <radialGradient
            id="av"
            data-name="Безымянный градиент 168"
            cx="28895.95"
            cy="-77965.24"
            fx="28895.95"
            fy="-77965.24"
            r="181.56"
            gradientTransform="translate(-613.46 1825.9) rotate(.25) scale(.02)"
            xlink:href="#au" />
          <radialGradient
            id="aw"
            data-name="Безымянный градиент 168"
            cx="28895.95"
            cy="-77965.24"
            fx="28895.95"
            fy="-77965.24"
            r="181.56"
            gradientTransform="translate(-613.46 1825.9) rotate(.25) scale(.02)"
            xlink:href="#au" />
          <radialGradient
            id="ax"
            data-name="Безымянный градиент 168"
            cx="29270.34"
            cy="-77982.73"
            fx="29270.34"
            fy="-77982.73"
            r="181.56"
            gradientTransform="translate(-613.46 1825.9) rotate(.25) scale(.02)"
            xlink:href="#au" />
          <radialGradient
            id="ay"
            data-name="Безымянный градиент 168"
            cx="29270.34"
            cy="-77982.73"
            fx="29270.34"
            fy="-77982.73"
            r="181.56"
            gradientTransform="translate(-613.46 1825.9) rotate(.25) scale(.02)"
            xlink:href="#au" />
          <linearGradient
            id="az"
            data-name="Безымянный градиент 7"
            x1="63.33"
            y1="101.74"
            x2="63.46"
            y2="109.34"
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#494a6b" />
            <stop offset=".06" stop-color="#40415e" />
            <stop offset=".24" stop-color="#29293c" />
            <stop offset=".42" stop-color="#171721" />
            <stop offset=".6" stop-color="#0a0a0f" />
            <stop offset=".8" stop-color="#020203" />
            <stop offset="1" stop-color="#000" />
          </linearGradient>
          <linearGradient
            id="ba"
            data-name="Безымянный градиент 4"
            x1="51.14"
            y1="103.75"
            x2="63.07"
            y2="103.75"
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#a48044" />
            <stop offset=".09" stop-color="#b08949" />
            <stop offset=".3" stop-color="#cb9e55" />
            <stop offset=".53" stop-color="#ddad5d" />
            <stop offset=".76" stop-color="#e9b662" />
            <stop offset="1" stop-color="#edb964" />
          </linearGradient>
          <linearGradient
            id="bb"
            data-name="Безымянный градиент 4"
            x1="-645.33"
            y1="103.81"
            x2="-633.6"
            y2="103.81"
            gradientTransform="translate(-570.54) rotate(-180) scale(1 -1)"
            xlink:href="#ba" />
          <radialGradient
            id="bc"
            data-name="Безымянный градиент 17"
            cx="50.2"
            cy="-150.1"
            fx="50.2"
            fy="-150.1"
            r="9.99"
            gradientTransform="translate(14.83 156.82) rotate(-1.41) scale(1 .57)"
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#f4d8bd" />
            <stop offset=".15" stop-color="#f2d0b4" />
            <stop offset=".39" stop-color="#edba9c" />
            <stop offset=".58" stop-color="#e9a585" />
            <stop offset=".71" stop-color="#e9a989" />
            <stop offset=".85" stop-color="#ecb695" />
            <stop offset=".99" stop-color="#f0ccaa" />
            <stop offset="1" stop-color="#f1ceac" />
          </radialGradient>
          <radialGradient
            id="bd"
            data-name="Безымянный градиент 29"
            cx="14.15"
            cy="4447.64"
            fx="14.15"
            fy="4447.64"
            r="4.98"
            xlink:href="#an" />
          <radialGradient
            id="be"
            data-name="Безымянный градиент 17"
            cx="50.2"
            cy="-150.89"
            fx="50.2"
            fy="-150.89"
            r="9.99"
            xlink:href="#bc" />
          <radialGradient
            id="bf"
            cx="5184.55"
            cy="-8353.09"
            fx="5184.55"
            fy="-8353.09"
            r="10.44"
            gradientTransform="translate(-1649.08 1123.42) rotate(-.69) scale(.34 .12) skewX(.94)"
            xlink:href="#z" />
          <radialGradient
            id="bg"
            cx="5185.64"
            cy="-8353.13"
            fx="5185.64"
            fy="-8353.13"
            r="4.69"
            gradientTransform="translate(-1649.08 1123.42) rotate(-.69) scale(.34 .12) skewX(.94)"
            xlink:href="#z" />
          <radialGradient
            id="bh"
            data-name="Безымянный градиент 18"
            cx="-1115.67"
            cy="30.14"
            fx="-1115.67"
            fy="30.14"
            r="24.72"
            gradientTransform="translate(-1074.52) rotate(-180) scale(1 -1)"
            xlink:href="#f" />
          <linearGradient
            id="bi"
            data-name="Безымянный градиент 33"
            x1="62.98"
            y1="98.84"
            x2="63.7"
            y2="143.73"
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#494a6b" />
            <stop offset=".04" stop-color="#3d3e5a" />
            <stop offset=".12" stop-color="#2a2b3e" />
            <stop offset=".21" stop-color="#1a1b27" />
            <stop offset=".31" stop-color="#0e0f15" />
            <stop offset=".44" stop-color="#060609" />
            <stop offset=".61" stop-color="#010102" />
            <stop offset="1" stop-color="#000" />
          </linearGradient>
          <radialGradient
            id="bj"
            data-name="Безымянный градиент 16"
            cx="-16.09"
            cy="131.52"
            fx="-16.09"
            fy="131.52"
            r="13.69"
            gradientTransform="translate(72.28) rotate(-180) scale(1 -1)"
            xlink:href="#r" />
          <radialGradient
            id="bk"
            data-name="Безымянный градиент 16"
            cx="58.93"
            cy="100.91"
            fx="58.93"
            fy="100.91"
            r="8.86"
            gradientTransform="matrix(1,0,0,1,0,0)"
            xlink:href="#r" />
          <radialGradient
            id="bl"
            data-name="Безымянный градиент 16"
            cx="64.83"
            cy="104.99"
            fx="64.83"
            fy="104.99"
            r="1.41"
            gradientTransform="matrix(1,0,0,1,0,0)"
            xlink:href="#r" />
          <radialGradient
            id="bm"
            data-name="Безымянный градиент 16"
            cx="52.9"
            cy="99.88"
            fx="52.9"
            fy="99.88"
            r="4.74"
            gradientTransform="matrix(1,0,0,1,0,0)"
            xlink:href="#r" />
          <radialGradient
            id="bn"
            data-name="Безымянный градиент 16"
            cx="61.86"
            cy="94.83"
            fx="61.86"
            fy="94.83"
            r="5.31"
            gradientTransform="matrix(1,0,0,1,0,0)"
            xlink:href="#r" />
        </defs>
        <g style="isolation: isolate">
          <g id="a" data-name="OBJECTS">
            <g>
              <g>
                <g>
                  <path
                    d="m46.5,196.38s-.18-4.97,1.52-5.54c1.69-.57,10.38-.68,12.8,1.02,2,1.4-.68,6.15-.68,6.15l-13.64-1.63Z"
                    style="fill: #c9cbcb; stroke-width: 0px" />
                  <path
                    d="m46.82,192.86l5.01,2.08,9.22,1.81,1.28,7.68-33.61,4.09-.07-3.48c.72-.68,1.14-2.06,3.66-3.32,1.59-.8,4.11-1.39,5.95-2.24,6.14-2.84,8.55-6.63,8.55-6.63Z"
                    style="fill: #4a3628; stroke-width: 0px" />
                  <polygon
                    points="61.43 199.03 49.27 205.78 62.3 205.93 61.43 199.03"
                    style="fill: #3c2a1f; stroke-width: 0px" />
                  <rect
                    x="28.27"
                    y="204.95"
                    width="34.73"
                    height="4.21"
                    style="fill: #b6a087; stroke-width: 0px" />
                </g>
                <path
                  d="m90.96,185.02h0l-4.39-16.49-4.59-31.39-39.51.62,1.27,31.81-.07,22.59,19.33,4.92c5.94-2.44-1.45-10.99-1.45-10.99l-2.07-17.98-.07-15.53h4.46l4.29,16.56,3.59,16.94s-1.42,9.28,2.22,9.7h17.75s3.34-3.83-.75-10.77Z"
                  style="fill: #74584f; stroke-width: 0px" />
                <g>
                  <path
                    d="m61.56,186.09l-2.07-17.98v-.78l-.07-14.75h-5.18l2.59,2.17.07,13.8c-6.15,2.69-10.36,2.86-13.14,2.21l-.07,21.38s3.44,1.7,8.97,2.94c5.53,1.24,10.36,1.99,10.36,1.99,5.94-2.44-1.45-10.99-1.45-10.99Z"
                    style="fill: #6e534a; stroke-width: 0px" />
                  <path
                    d="m86.57,168.53l-.13-1.69c-9.44,7.41-15.27,5.14-18.22,2.57l3.53,16.68s-1.42,9.28,2.22,9.7h17.75s4.35-3.11-.75-10.77l-4.39-16.49Z"
                    style="fill: #6e534a; stroke-width: 0px" />
                </g>
                <g>
                  <path
                    d="m94.42,204.19s-.44-2.01-1.34-5.12c-.9-3.11-6.55-6.66-10.82-6.67-3.45,0-8.67,3.49-8.67,3.49,0,0-.33,2.38-1.34,4.69-2.86,3.08-2.37,5.46-2.49,7.34l25.26-.37c.03-1.43-.6-3.36-.6-3.36Z"
                    style="fill: #4a3628; stroke-width: 0px" />
                  <rect
                    x="69.42"
                    y="204.88"
                    width="25.76"
                    height="4.35"
                    style="fill: #b6a087; stroke-width: 0px" />
                </g>
              </g>
              <g id="b" data-name="man">
                <g>
                  <g>
                    <path
                      d="m82.21,137.18c-.59-4.89,5.3-28.56,4.77-33.9-.36-3.68-9.18-4.92-9.18-4.92,0,0-7.3,1.64-16.55,1.64s-12.44-2.05-12.44-2.05c-10.43,2.67-8.21,3.68-8.18,12.18.22,3.47,3.12,16.11,4.74,27.05h36.84Z"
                      style="fill: #e7bd7a; stroke-width: 0px" />
                    <path
                      d="m82.2,138.28c.05-4.97,2.63-19.2,3.5-24.05-1.88.78-4.07.41-4.61,2.4-1.35,4.98-.07,10.79-1.98,11.84-2.03,1.11-29.34,1.9-31.41.6-1.16-.73-2.27-16.51-2.66-17.52-.4-1.01-.17-1.78-4.42-2.81,0,.44.02.91.02,1.39.23,3.59,3.23,16.98,4.9,28.15h36.67Z"
                      style="fill: #ab875c; stroke-width: 0px" />
                  </g>
                  <path
                    d="m40.01,120.61c.62,2.98.56,17.72.41,28.89h46.51c-.43-10.72-.79-24.77.05-28.92,1.51-7.51.8-14.6.53-17.36-.39-3.92-8.89-5.28-9.84-5.55l-.82.14-.27.14c-.27.96-8.12,22.07-13.71,22.07s-13.73-21.87-13.77-21.93h-.14l-.82-.14c-4.91,1.25-5.86,1.47-6.99,2.85-1.23,1.49-1.17,3.35-1.08,6.43.03.86-1.07,8.52-.05,13.39Z"
                    style="fill: #6d8695; stroke-width: 0px" />
                  <g>
                    <path
                      d="m87.91,111.37c-3.4,10.43-2.55,22.39-2.55,33.77,0,1.64-.68,3.12-1.73,4.35h3.31c-.43-10.72-.79-24.77.05-28.92.66-3.25.89-6.43.93-9.21Z"
                      style="fill: #536671; stroke-width: 0px" />
                    <path
                      d="m74.8,98.77s3.26-1.65,3.69-.68-2.32,17.17-2.32,17.17l-3.05-1.88v3.2s-7.66,3.45-10.02,3.45c0,0,4.86-4.43,7.31-8.92,2.45-4.49,4.4-12.33,4.4-12.33Z"
                      style="fill: #889eaa; stroke-width: 0px" />
                    <path
                      d="m52.1,98.9s-4.35-1.78-4.79-.82,2.79,17.17,2.79,17.17l3.05-1.88v3.2s7.34,3.45,9.71,3.45c0,0-4.54-4.43-6.99-8.92-2.45-4.49-3.77-12.19-3.77-12.19Z"
                      style="fill: #889eaa; stroke-width: 0px" />
                  </g>
                </g>
              </g>
              <g>
                <rect
                  x="56.47"
                  y="95.4"
                  width="13.27"
                  height="9.97"
                  style="fill: url(#c); stroke-width: 0px" />
                <path
                  d="m66.98,97.76c.03,1.14-1.71,2.1-3.88,2.15-2.17.05-3.95-.82-3.98-1.96-.03-1.14,1.71-2.1,3.88-2.15,2.17-.05,3.95.82,3.98,1.96Z"
                  style="
                    fill: url(#d);
                    mix-blend-mode: multiply;
                    opacity: 0.15;
                    stroke-width: 0px;
                  " />
                <path
                  d="m72.62,110.48c.05.16.1.31.15.47.02-.4.04-.81.06-1.21-.07.25-.14.49-.21.74Z"
                  style="
                    fill: url(#e);
                    mix-blend-mode: multiply;
                    opacity: 0.8;
                    stroke-width: 0px;
                  " />
                <path
                  d="m86.25,77.93s-.65,5.1,2.75,8.35c3.4,3.25,10.18,6.87,10.18,6.87,0,0,4.06-5.9,3.72-13.99-.34-8.09-10.38-14.89-10.38-14.89l-6.27,13.66Z"
                  style="fill: url(#f); stroke-width: 0px" />
                <path
                  d="m43.96,80.23s.65,5.1-2.75,8.35c-3.4,3.25-10.18,6.87-10.18,6.87,0,0-4.06-5.9-3.72-13.99.34-8.09,10.38-14.89,10.38-14.89l6.27,13.66Z"
                  style="fill: url(#g); stroke-width: 0px" />
                <path
                  d="m95.38,75.76s1.53,4.91,5.98,6.44c4.45,1.53,12.12,1.99,12.12,1.99,0,0,1.23-7.06-2.45-14.27-3.68-7.21-15.65-9.2-15.65-9.2v15.03Z"
                  style="fill: url(#h); stroke-width: 0px" />
                <path
                  d="m24.51,90.03s-.46-8.13,4.14-9.36c4.6-1.23,2.15-16.87,2.15-16.87,0,0-10.12,2.45-12.73,10.43-2.61,7.98,6.44,15.8,6.44,15.8Z"
                  style="fill: url(#i); stroke-width: 0px" />
                <path
                  d="m7.48,69.62s7.52,5.37,14.57,2.76c7.06-2.61,10.89-10.43,10.89-10.43l4.3-25.31s-19.88,10.91-21.17,19.17c-1.47,9.42-2.91,13.04-8.59,13.81Z"
                  style="fill: url(#j); stroke-width: 0px" />
                <path
                  d="m88.32,33.57s15.95,1.53,22.7,11.04c6.75,9.51,6.9,13.19,10.74,16.72,3.84,3.53,4.3,3.68,4.3,3.68,0,0-4.38,7.21-13.93,7.44-9.54.23-16.75-7.02-16.75-7.02l-9.97-22.05,2.91-9.82Z"
                  style="fill: url(#k); stroke-width: 0px" />
                <g>
                  <path
                    d="m29.75,66.2s-2.91-6.85-6.71-3.44c-5.9,5.28,4.39,12.1,4.39,12.1l2.32-8.66Z"
                    style="fill: url(#l); stroke-width: 0px" />
                  <path
                    d="m29.33,67.76l-1.9,7.1s-2.83-1.88-4.67-4.42c-1.32-2.45-.68-5.02,1.48-5.83,2.23-.84,4.41,1.93,5.1,3.16Z"
                    style="
                      fill: url(#m);
                      mix-blend-mode: multiply;
                      opacity: 0.5;
                      stroke-width: 0px;
                    " />
                  <path
                    d="m22.71,64.06c-1.09,1.24-.3,3.61,1.76,5.29,2.07,1.67,4.63,2.02,5.72.78,1.09-1.24.3-3.61-1.77-5.28-2.07-1.68-4.63-2.03-5.72-.78Z"
                    style="
                      fill: url(#n);
                      mix-blend-mode: multiply;
                      opacity: 0.15;
                      stroke-width: 0px;
                    " />
                </g>
                <g>
                  <path
                    d="m97.2,65.4s2.57-6.98,6.54-3.76c6.15,4.98-3.79,12.3-3.79,12.3l-2.74-8.54Z"
                    style="fill: url(#o); stroke-width: 0px" />
                  <path
                    d="m97.7,66.94l2.25,7s2.74-2.01,4.45-4.65c1.2-2.51.44-5.05-1.76-5.75-2.27-.73-4.31,2.15-4.94,3.4Z"
                    style="
                      fill: url(#p);
                      mix-blend-mode: multiply;
                      opacity: 0.5;
                      stroke-width: 0px;
                    " />
                  <path
                    d="m104.12,62.92c1.15,1.19.48,3.59-1.5,5.37-1.98,1.77-4.52,2.25-5.67,1.06-1.15-1.19-.48-3.59,1.51-5.37,1.98-1.78,4.52-2.25,5.67-1.06Z"
                    style="
                      fill: url(#q);
                      mix-blend-mode: multiply;
                      opacity: 0.15;
                      stroke-width: 0px;
                    " />
                </g>
                <path
                  d="m100.06,70.35c.46,18.7-16.34,27.5-36.5,28-20.17.5-36.07-7.5-36.53-26.2-.46-18.7,7.83-38.65,35.6-38.65,30.54,0,36.97,18.15,37.43,36.85Z"
                  style="fill: url(#r); stroke-width: 0px" />
                <path
                  d="m76.98,78.27c.09,3.79-5.84,7.02-13.26,7.2-7.42.18-13.51-2.75-13.6-6.54-.09-3.79,5.84-7.02,13.26-7.2,7.42-.18,13.51,2.75,13.6,6.54Z"
                  style="
                    fill: url(#s);
                    mix-blend-mode: multiply;
                    opacity: 0.2;
                    stroke-width: 0px;
                  " />
                <path
                  d="m77.03,80.48c.07,2.77-6.13,5.17-13.84,5.36-7.71.19-14.02-1.9-14.09-4.68-.07-2.77,6.13-5.17,13.84-5.36,7.71-.19,14.02,1.9,14.09,4.68Z"
                  style="
                    fill: url(#t);
                    mix-blend-mode: multiply;
                    opacity: 0.2;
                    stroke-width: 0px;
                  " />
                <g>
                  <path
                    d="m63.43,88.46c4.59,0,7.04-4.07,5.73-5.83-1.31-1.77-10.28-1.55-11.43.02-1.15,1.56,1,5.82,5.7,5.82Z"
                    style="
                      fill: url(#u);
                      mix-blend-mode: screen;
                      opacity: 0.25;
                      stroke-width: 0px;
                    " />
                  <path
                    d="m63.43,88.11c4.43,0,6.79-3.93,5.53-5.64-1.26-1.71-9.92-1.5-11.02.01-1.11,1.51.96,5.63,5.49,5.63Z"
                    style="fill: url(#v); stroke-width: 0px" />
                  <path
                    d="m63.43,88.11c1.4,0,2.6-.4,3.54-.99-.33-.22-.73-.43-1.17-.52-1.16-.24-1.29.12-3.37,0-.9-.05-1.7.26-2.32.63.88.53,2,.88,3.32.88Z"
                    style="fill: url(#w); stroke-width: 0px" />
                  <path
                    d="m69.19,82.91c-.06-.16-.13-.3-.23-.44-1.26-1.71-9.92-1.5-11.02.01-.11.14-.18.31-.23.5,3.49.58,7.33.53,11.48-.07Z"
                    style="fill: url(#x); stroke-width: 0px" />
                </g>
                <path
                  d="m75.32,78.66c.07,3.03-5.55,5.63-12.56,5.8-7.01.17-12.75-2.14-12.83-5.17-.07-3.03,5.55-5.63,12.56-5.8,7.01-.17,12.75,2.14,12.83,5.17Z"
                  style="
                    fill: url(#y);
                    mix-blend-mode: multiply;
                    opacity: 0.7;
                    stroke-width: 0px;
                  " />
                <path
                  d="m74.66,42.96c.15,2.97-5.09,5.43-11.69,5.49-6.61.06-12.09-2.3-12.24-5.27-.15-2.97,5.08-5.42,11.7-5.48,6.61-.06,12.09,2.3,12.23,5.27Z"
                  style="
                    fill: url(#z);
                    mix-blend-mode: screen;
                    opacity: 0.4;
                    stroke-width: 0px;
                  " />
                <path
                  d="m57.52,64.27c.1,4.2-2.51,7.67-5.83,7.75-3.32.08-6.1-3.25-6.2-7.45-.1-4.2,2.51-7.67,5.83-7.75,3.32-.08,6.1,3.25,6.2,7.45Z"
                  style="
                    fill: url(#aa);
                    mix-blend-mode: multiply;
                    opacity: 0.4;
                    stroke-width: 0px;
                  " />
                <path
                  d="m80.4,63.54c.1,4.2-2.51,7.67-5.83,7.75-3.32.08-6.1-3.25-6.2-7.45-.1-4.2,2.51-7.67,5.83-7.75,3.32-.08,6.1,3.25,6.2,7.45Z"
                  style="
                    fill: url(#ab);
                    mix-blend-mode: multiply;
                    opacity: 0.4;
                    stroke-width: 0px;
                  " />
                <g>
                  <path
                    d="m53.45,66.42c.06,2.31-.44,4.19-1.73,4.22-1.29.03-1.88-1.82-1.94-4.13-.06-2.31.44-4.19,1.73-4.22,1.29-.03,1.88,1.82,1.94,4.13Z"
                    style="
                      fill: url(#ac);
                      mix-blend-mode: multiply;
                      opacity: 0.2;
                      stroke-width: 0px;
                    " />
                  <path
                    d="m53.27,65.93c.06,2.31-.44,4.19-1.73,4.22-1.29.03-1.88-1.82-1.94-4.13s.44-4.19,1.73-4.22c1.29-.03,1.88,1.82,1.94,4.13Z"
                    style="fill: url(#ad); stroke-width: 0px" />
                  <path
                    d="m52.36,63.19c.03.71-.32,1.28-.78,1.27-.46,0-.86-.59-.89-1.3-.03-.71.32-1.28.78-1.27.46,0,.86.59.89,1.29Z"
                    style="
                      fill: url(#ae);
                      mix-blend-mode: screen;
                      opacity: 0.7;
                      stroke-width: 0px;
                    " />
                  <path
                    d="m51.93,62.94c.02.39-.18.7-.43.7-.25,0-.47-.32-.49-.71-.02-.39.17-.7.43-.7.25,0,.47.32.49.71Z"
                    style="
                      fill: url(#af);
                      mix-blend-mode: screen;
                      opacity: 0.7;
                      stroke-width: 0px;
                    " />
                  <path
                    d="m76.33,65.69c.06,2.31-.44,4.19-1.73,4.22-1.29.03-1.88-1.82-1.94-4.13-.06-2.31.44-4.19,1.73-4.22,1.29-.03,1.88,1.82,1.94,4.13Z"
                    style="
                      fill: url(#ag);
                      mix-blend-mode: multiply;
                      opacity: 0.2;
                      stroke-width: 0px;
                    " />
                  <path
                    d="m76.15,65.2c.06,2.31-.44,4.19-1.73,4.22-1.29.03-1.88-1.82-1.94-4.13-.06-2.31.44-4.19,1.73-4.22,1.29-.03,1.88,1.82,1.94,4.13Z"
                    style="fill: url(#ah); stroke-width: 0px" />
                  <path
                    d="m75.24,62.46c.03.71-.32,1.28-.78,1.27-.46,0-.86-.59-.89-1.3-.03-.71.32-1.28.78-1.27.46,0,.86.59.89,1.29Z"
                    style="
                      fill: url(#ai);
                      mix-blend-mode: screen;
                      opacity: 0.7;
                      stroke-width: 0px;
                    " />
                  <path
                    d="m74.81,62.21c.02.39-.17.7-.43.69-.25,0-.47-.32-.49-.71-.02-.39.17-.7.43-.69.25,0,.47.32.48.71Z"
                    style="
                      fill: url(#aj);
                      mix-blend-mode: screen;
                      opacity: 0.7;
                      stroke-width: 0px;
                    " />
                </g>
                <path
                  d="m93.34,78.81c.16,6.52-5,11.94-11.52,12.1s-11.94-5-12.1-11.52c-.16-6.52,5-11.94,11.52-12.1,6.52-.16,11.94,5,12.1,11.52Z"
                  style="
                    fill: url(#ak);
                    mix-blend-mode: multiply;
                    opacity: 0.35;
                    stroke-width: 0px;
                  " />
                <path
                  d="m56.91,80.98c.16,6.52-5,11.94-11.52,12.1-6.52.16-11.94-5-12.1-11.52-.16-6.52,5-11.94,11.52-12.1,6.52-.16,11.94,5,12.1,11.52Z"
                  style="
                    fill: url(#al);
                    mix-blend-mode: multiply;
                    opacity: 0.35;
                    stroke-width: 0px;
                  " />
                <path
                  d="m60.27,75.07c-3,.15-6.12,2.1-6.48,4.83,3.29,3.5,14.7,3.5,19.02,0-.31-3.08-3.54-4.35-6.89-4.94l-5.66.1Z"
                  style="fill: url(#am); stroke-width: 0px" />
                <path
                  d="m67.73,71.48c.04,1.6-2.06,2.95-4.68,3.02-2.63.06-4.79-1.18-4.83-2.78-.04-1.6,2.06-2.95,4.68-3.02,2.63-.06,4.79,1.18,4.83,2.78Z"
                  style="
                    fill: url(#an);
                    mix-blend-mode: multiply;
                    opacity: 0.15;
                    stroke-width: 0px;
                  " />
                <path
                  d="m25.66,53.13c-1.99,3.53-.81,13.75,1.38,17.13,0-10.84,4.58-19.44,6.44-23.42l-7.82,6.29Z"
                  style="fill: url(#ao); stroke-width: 0px" />
                <path
                  d="m63.47,41s-10.52-7.88-19.22-3.59c-8.7,4.3-19.44,22.24-28.95,23.93-9.51,1.69-15.03-4.3-15.03-4.3,0,0,5.83-2.3,7.82-8.59,1.99-6.29,4.45-18.56,16.41-21.02,11.97-2.45,34.97-2.15,34.97-2.15l3.99,15.71Z"
                  style="fill: url(#ap); stroke-width: 0px" />
                <path
                  d="m100.07,68.68c1.32-2.65,3.21-14.17,1.37-20.61l-10.89-5.22c4.91,6.29,8.75,21.31,9.53,25.83Z"
                  style="fill: url(#aq); stroke-width: 0px" />
                <path
                  d="m63.47,41s10.26-7.85,19.48-3.65c9.21,4.2,9.52,12.48,23.94,12.18,14.42-.31,19.17-12.89,19.17-12.89,0,0-7.52,3.53-12.43-3.07-4.91-6.6-10.12-16.11-20.56-16.41-10.43-.31-27.3,12.27-27.3,12.27l-2.3,11.57Z"
                  style="fill: url(#ar); stroke-width: 0px" />
                <path
                  d="m63.47,41s-9.05-14.79-19.94-11.11c-10.89,3.68-16.26,10.74-23.93,11.04-7.67.31-17.33-7.36-17.33-7.36,0,0,9.2.77,13.04-4.45,3.84-5.22,11.66-24.08,27.3-21.17,15.65,2.91,20.86,12.58,20.86,12.58v20.46Z"
                  style="fill: url(#as); stroke-width: 0px" />
                <path
                  d="m63.47,41s-9.51-22.92,5.22-35.65c14.61-12.63,33.29,2.3,40.8,2.45,7.52.15,12.27-2.91,12.27-2.91,0,0-.77,15.34-13.81,19.02-13.04,3.68-22.08-1.15-29.91,1.38-9.97,3.22-14.57,15.71-14.57,15.71Z"
                  style="fill: url(#at); stroke-width: 0px" />
                <path
                  d="m67.54,106.64c0,1.86-1.88,3.36-4.18,3.36-2.31,0-4.17-1.52-4.17-3.38,0-1.86,1.88-3.36,4.18-3.36,2.31,0,4.17,1.52,4.17,3.38Z"
                  style="
                    fill: url(#au);
                    mix-blend-mode: multiply;
                    opacity: 0.6;
                    stroke-width: 0px;
                  " />
                <path
                  d="m67.54,106.64c0,1.86-1.88,3.36-4.18,3.36-2.31,0-4.17-1.52-4.17-3.38,0-1.86,1.88-3.36,4.18-3.36,2.31,0,4.17,1.52,4.17,3.38Z"
                  style="
                    fill: url(#au);
                    mix-blend-mode: multiply;
                    opacity: 0.6;
                    stroke-width: 0px;
                  " />
                <path
                  d="m63.12,105.77c0,2.22-1.88,4.01-4.19,4-2.31,0-4.17-1.81-4.17-4.02,0-2.22,1.88-4.01,4.19-4,2.31,0,4.17,1.81,4.17,4.02Z"
                  style="
                    fill: url(#av);
                    mix-blend-mode: multiply;
                    opacity: 0.6;
                    stroke-width: 0px;
                  " />
                <path
                  d="m63.12,105.77c0,2.22-1.88,4.01-4.19,4-2.31,0-4.17-1.81-4.17-4.02,0-2.22,1.88-4.01,4.19-4,2.31,0,4.17,1.81,4.17,4.02Z"
                  style="
                    fill: url(#aw);
                    mix-blend-mode: multiply;
                    opacity: 0.6;
                    stroke-width: 0px;
                  " />
                <path
                  d="m71.73,105.42c0,2.22-1.88,4.01-4.19,4-2.31,0-4.17-1.81-4.17-4.02,0-2.22,1.88-4.01,4.19-4,2.31,0,4.17,1.81,4.17,4.02Z"
                  style="
                    fill: url(#ax);
                    mix-blend-mode: multiply;
                    opacity: 0.6;
                    stroke-width: 0px;
                  " />
                <path
                  d="m71.73,105.42c0,2.22-1.88,4.01-4.19,4-2.31,0-4.17-1.81-4.17-4.02,0-2.22,1.88-4.01,4.19-4,2.31,0,4.17,1.81,4.17,4.02Z"
                  style="
                    fill: url(#ay);
                    mix-blend-mode: multiply;
                    opacity: 0.6;
                    stroke-width: 0px;
                  " />
                <path
                  d="m63.3,108.49c2.45,0,2.68-3.61,2.68-3.61.95-1.64-.36-1.99-2.91-1.63-2.37-.5-2.96.15-2.44,1.51,0,0,.23,3.72,2.68,3.72Z"
                  style="fill: url(#az); stroke-width: 0px" />
                <path
                  d="m63.07,103.05l-6.42-3.45c-2.3-.14-4.12.66-5.51,2.3,1.39,2.73,3.03,4.06,5.57,6.01,2.18-2.55,2.5-4.83,6.36-4.86Z"
                  style="fill: url(#ba); stroke-width: 0px" />
                <path
                  d="m63.07,103.04l6.35-3.85c2.25-.16,4.02.74,5.38,2.56-1.36,3.04-2.96,4.53-5.44,6.7-2.13-2.84-2.52-5.38-6.29-5.42Z"
                  style="fill: url(#bb); stroke-width: 0px" />
                <g>
                  <path
                    d="m69.24,72.37c.05,1.97-2.72,3.63-6.19,3.72-3.47.09-6.32-1.44-6.37-3.41-.05-1.97,2.72-3.63,6.19-3.72,3.47-.09,6.32,1.44,6.37,3.41Z"
                    style="
                      fill: url(#bc);
                      mix-blend-mode: multiply;
                      opacity: 0.15;
                      stroke-width: 0px;
                    " />
                  <path
                    d="m68.92,73.55c.05,2.05-2.64,3.79-6,3.87-3.37.08-6.14-1.52-6.19-3.57-.05-2.05,2.64-3.79,6-3.87,3.37-.08,6.14,1.51,6.19,3.57Z"
                    style="
                      fill: url(#bd);
                      mix-blend-mode: multiply;
                      opacity: 0.15;
                      stroke-width: 0px;
                    " />
                  <path
                    d="m69.23,71.92c.05,1.97-2.72,3.63-6.19,3.72-3.47.09-6.32-1.44-6.37-3.41-.05-1.97,2.72-3.63,6.19-3.72,3.47-.09,6.32,1.44,6.37,3.41Z"
                    style="fill: url(#be); stroke-width: 0px" />
                  <path
                    d="m66.22,69.68c.04.71-1.53,1.31-3.49,1.33-1.97.02-3.6-.53-3.64-1.25-.04-.71,1.52-1.31,3.49-1.33,1.97-.02,3.6.53,3.64,1.24Z"
                    style="
                      fill: url(#bf);
                      mix-blend-mode: screen;
                      opacity: 0.4;
                      stroke-width: 0px;
                    " />
                  <path
                    d="m64.63,69.69c.02.32-.68.59-1.57.6-.88.01-1.62-.24-1.63-.56-.02-.32.68-.59,1.57-.6.88-.01,1.62.24,1.63.56Z"
                    style="
                      fill: url(#bg);
                      mix-blend-mode: screen;
                      opacity: 0.4;
                      stroke-width: 0px;
                    " />
                </g>
                <path
                  d="m58.9,32.66s6.31-15.21-3.46-23.66c-9.7-8.38-22.09,1.53-27.08,1.63-4.99.1-8.14-1.93-8.14-1.93,0,0,.51,10.18,9.16,12.62,8.65,2.44,14.65-.76,19.85.92,6.62,2.14,9.67,10.42,9.67,10.42Z"
                  style="fill: url(#bh); stroke-width: 0px" />
              </g>
              <path
                d="m70.01,51.98c3.36-.13,6.72.94,9.35,3.05.49.4,1.21-.3.71-.7-2.83-2.27-6.41-3.48-10.05-3.34-.64.02-.65,1.02,0,.99h0Z"
                style="fill: #dddee6; stroke-width: 0px" />
              <path
                d="m44.83,53.94c2.9-1.7,6.37-2.34,9.68-1.72.62.12.92-.83.3-.95-3.57-.66-7.3-.05-10.44,1.79-.55.32-.09,1.2.46.88h0Z"
                style="fill: #dddee6; stroke-width: 0px" />
              <g>
                <g>
                  <path
                    d="m51.27,56.74c-5.05-1.45-10.31,1.48-11.76,6.52s1.48,10.31,6.52,11.76c5.05,1.45,10.31-1.48,11.76-6.52s-1.48-10.31-6.52-11.76Zm-4.88,17.05c-4.36-1.25-6.89-5.81-5.64-10.17,1.25-4.36,5.81-6.89,10.17-5.64,4.36,1.25,6.89,5.81,5.64,10.17-1.25,4.36-5.81,6.89-10.17,5.64Z"
                    style="fill: #2d2a2a; stroke-width: 0px" />
                  <circle
                    cx="48.65"
                    cy="65.88"
                    r="8.22"
                    transform="translate(-30.32 87.6) rotate(-68.93)"
                    style="
                      fill: #e4e4e4;
                      mix-blend-mode: soft-light;
                      stroke-width: 0px;
                    " />
                  <path
                    d="m43.2,72.03c.61.55,1.32,1.01,2.09,1.35l11.57-8.09c-.07-.96-.31-1.89-.69-2.75l-12.97,9.49Z"
                    style="
                      fill: #fff;
                      mix-blend-mode: soft-light;
                      stroke-width: 0px;
                    " />
                  <path
                    d="m50.92,57.98c-.5-.14-1-.24-1.49-.28l-8.68,5.97c-.28,1.01-.36,2.04-.26,3.02l12.58-7.75c-.65-.41-1.36-.74-2.14-.96Z"
                    style="
                      fill: #fff;
                      mix-blend-mode: soft-light;
                      stroke-width: 0px;
                    " />
                </g>
                <g>
                  <path
                    d="m80.54,57.55c-5.05-1.45-10.31,1.48-11.76,6.52s1.48,10.31,6.52,11.76c5.05,1.45,10.31-1.48,11.76-6.52s-1.48-10.31-6.52-11.76Zm-4.88,17.05c-4.36-1.25-6.89-5.81-5.64-10.17,1.25-4.36,5.81-6.89,10.17-5.64,4.36,1.25,6.89,5.81,5.64,10.17-1.25,4.36-5.81,6.89-10.17,5.64Z"
                    style="fill: #2d2a2a; stroke-width: 0px" />
                  <circle
                    cx="77.92"
                    cy="66.69"
                    r="8.22"
                    transform="translate(-.34 132.98) rotate(-80.82)"
                    style="
                      fill: #e4e4e4;
                      mix-blend-mode: soft-light;
                      stroke-width: 0px;
                    " />
                  <path
                    d="m72.47,72.84c.61.55,1.32,1.01,2.09,1.35l11.57-8.09c-.07-.96-.31-1.89-.69-2.75l-12.97,9.49Z"
                    style="
                      fill: #fff;
                      mix-blend-mode: soft-light;
                      stroke-width: 0px;
                    " />
                  <path
                    d="m80.19,58.79c-.5-.14-1-.24-1.49-.28l-8.68,5.97c-.28,1.01-.36,2.04-.26,3.02l12.58-7.75c-.65-.41-1.36-.74-2.14-.96Z"
                    style="
                      fill: #fff;
                      mix-blend-mode: soft-light;
                      stroke-width: 0px;
                    " />
                </g>
                <path
                  d="m69.26,65.47c-.1,0-.2-.04-.27-.12-.02-.02-2.21-2.11-5.62-2.21-3.41-.09-5.71,1.87-5.73,1.89-.17.15-.43.13-.57-.04-.15-.17-.13-.42.04-.57.1-.09,2.55-2.2,6.29-2.1,3.74.1,6.07,2.34,6.16,2.44.16.16.16.41,0,.57-.08.08-.19.12-.3.12Z"
                  style="fill: #2d2a2a; stroke-width: 0px" />
                <g>
                  <path
                    d="m101.68,64.36c-.12,0-.25-.06-.32-.17-.01-.02-1.47-2.05-3.92-2.39-3.58-.49-13.18-1.38-13.28-1.39-.22-.02-.39-.22-.37-.44.02-.22.22-.39.44-.37.09,0,9.71.9,13.31,1.4,2.81.39,4.41,2.63,4.48,2.73.13.18.08.44-.1.57-.07.05-.16.08-.24.07Z"
                    style="fill: #2d2a2a; stroke-width: 0px" />
                  <path
                    d="m25.25,62.25c-.08,0-.17-.03-.24-.09-.18-.14-.21-.39-.07-.57.07-.09,1.79-2.25,4.62-2.48,3.62-.3,13.14-.66,13.23-.67.22,0,.41.17.42.39,0,.22-.17.41-.39.42-.09,0-9.59.37-13.2.66-2.47.2-4.03,2.15-4.05,2.17-.08.1-.21.16-.33.15Z"
                    style="fill: #2d2a2a; stroke-width: 0px" />
                </g>
              </g>
              <path
                d="m65.07,107.63c0-.23.01-.36.01-.36l-.1-.02c-.09-.39-.14-.61-.14-.61l-1.41.29-1.41-.29s-.05.22-.14.61l-.1.02s0,.13.01.36c-.84,3.74-3.77,16.97-3.77,19.68,0,3.16,4.69,11.39,5.4,11.39s5.4-8.23,5.4-11.39c0-2.71-2.92-15.93-3.77-19.68Z"
                style="fill: url(#bi); stroke-width: 0px" />
              <path
                d="m84.17,99.01c-1.18-.38-2.76.57-3.35,1.66-3.89,7.18,3.27,12.6,5.8,15.89.62.81,1.65,2.13,3.1,3.98.78.97,2.71,3.3,3.7,4.56,0,0,8.48-8.99,8.49-9,.21-.22-5.15-6.57-5.59-7.11-3.1-3.85-6.6-7.8-11.3-9.67-.28-.11-.57-.22-.87-.31Z"
                style="fill: #6d8695; fill-rule: evenodd; stroke-width: 0px" />
              <path
                d="m85.19,132.09s-4.11-.93-5.97-.88c-1.85.04-6.39,3.25-6.39,4.19,0,.94.98.52,1.54.35.57-.18,2.71-1.63,4.91-1.82-2.92,1.75-7,4.98-5.8,5.97.69.57,1.98-1.11,4.08-2.2,1.93-1.09,3.01-1.67,3.01-1.67,0,0-4.93,3.05-4.95,4.93-.02,1.88,2.23-.53,3.07-1.07.84-.54,3.51-2.12,3.51-2.12,0,0-4.3,3.44-4.23,4.49.06,1.05.72.91,1.37.51.65-.39,3.61-2.63,3.61-2.63,0,0,2.86.27,5.75-1.05,2.89-1.33,14.2-9.83,15.07-13.79.97-4.37-4.01-6.52-6.78-4.65-1.19.81-11.81,11.43-11.81,11.43Z"
                style="fill: url(#bj); fill-rule: evenodd; stroke-width: 0px" />
              <path
                d="m101.92,116.1s2.52,6.01,2.26,7.46c-.26,1.45-.43,6.8-13.8,14.14h0l-4.78-6.53,6.34-6.61,9.99-8.46Z"
                style="fill: #6d8695; fill-rule: evenodd; stroke-width: 0px" />
              <path
                d="m40.1,147.18s-.23,1.9.73,2.67,24.85,3.15,29.59,2.9c4.75-.25,12.64-2.41,14.02-3.43,1.39-1.02,1.69-3.73,1.69-3.73,0,0-2.79.72-4.01,1.44s-13.78,3.08-20.56,2.45c-6.78-.63-21.07-3.85-21.48-2.3Z"
                style="fill: #536671; stroke-width: 0px" />
            </g>
            <g>
              <path
                d="m51.78,100.66c-.03-.4-.09-.79-.19-1.17-.3-1.22-.85-2.36-1.36-3.51-.22-.51-.42-1.15-.06-1.58.37-.43,1.07-.31,1.6-.09.9.38,1.67,1,2.32,1.71.41.45.72,1.01,1.11,1.47,2.95-2.56,6.66-4.13,10.43-5.17.48-.13.98-.25,1.46-.12.48.13.89.62.76,1.1-.1.37-.48.59-.82.78-1.28.68-2.56,1.37-3.84,2.05.36.09.71.23,1.02.41.04.02.07.04.11.06.68.42,1.26,1.25,1.71,1.91.84,1.23,1.42,2.69,1.31,4.17-.01.18-.04.36-.08.55-.27,1.28-1.13,2.47-2.37,2.87-.66.21-1.48.13-1.95-.32-.53.8-.99,1.65-1.38,2.52-.05.11-.1.22-.15.33-1.42,3.29-11.05-2.17-10.68-2.97.13-.29.26-.59.37-.89.23-.61.41-1.25.53-1.9.14-.73.19-1.47.14-2.21Z"
                style="fill: url(#bk); stroke-width: 0px" />
              <path
                d="m63.8,106.51s-.1,0-.14-.04c-.11-.07-.14-.21-.07-.32.64-.97,1.35-1.86,2.12-2.63.09-.09.24-.09.33,0,.09.09.09.24,0,.33-.75.75-1.45,1.61-2.06,2.56-.04.06-.11.1-.18.1Z"
                style="fill: url(#bl); stroke-width: 0px" />
              <path
                d="m51,105.94s-.07,0-.11-.02c-.12-.05-.17-.19-.11-.31.15-.33.29-.66.41-.98.68-1.81.85-3.64.48-5.14-.25-1.01-.69-2-1.11-2.95-.08-.18-.16-.35-.23-.53-.23-.52-.48-1.28-.02-1.82.38-.44,1.06-.49,1.86-.15.85.36,1.66.96,2.4,1.77.24.26.44.55.63.83.17.24.33.47.51.68.08.1.07.24-.03.33-.1.08-.24.07-.33-.03-.2-.23-.37-.48-.54-.72-.19-.28-.38-.54-.59-.78-.7-.77-1.45-1.32-2.24-1.66-.23-.09-.99-.37-1.33.03-.22.26-.19.68.09,1.33.08.18.15.35.23.53.43.97.88,1.97,1.14,3.02.4,1.6.22,3.52-.49,5.42-.12.33-.27.67-.42,1.01-.04.08-.11.13-.2.13Z"
                style="fill: url(#bm); stroke-width: 0px" />
              <path
                d="m55.28,97.96c-.07,0-.13-.02-.18-.07-.09-.09-.08-.24.01-.33,2.69-2.52,6.3-4.38,11.03-5.68.54-.15,1.06-.27,1.58-.12.58.16,1.09.76.92,1.38-.13.46-.55.71-.93.92l-3.36,1.79s.06.02.09.03c.21.08.4.18.58.29.11.07.14.21.08.32-.07.11-.21.14-.32.08-.15-.1-.33-.18-.51-.26-.04-.02-.08-.03-.12-.04-.15-.05-.34-.12-.48-.28-.07-.08-.07-.2-.01-.28.08-.11.19-.14.24-.15,0,0,.01,0,.02,0,.03-.01.08-.04.12-.06.03-.02.06-.03.09-.05l3.37-1.8c.31-.17.63-.35.7-.63.09-.34-.24-.72-.6-.82-.41-.12-.86,0-1.34.12-4.66,1.28-8.2,3.11-10.84,5.57-.04.04-.09.06-.14.06Z"
                style="fill: url(#bn); stroke-width: 0px" />
            </g>
            <path
              d="m44.14,105.08c-2.58-4.09-1.39-5.74-4.86-4.62-2.95.96-10.4,8-9.7,11.03,1.71,7.49,9.15,22.14,17.82,20.76,5.55-.89,13.24-17.82,14.46-22.11.83-3.64-10.65-6.16-11.49-4.91-2.53,3.74-5.97,10.62-5.97,10.62,0,0-1.48-1.36-3.72-4.89-.78-1.22,4.54-4.17,3.47-5.88Z"
              style="fill: #6d8695; fill-rule: evenodd; stroke-width: 0px" />
          </g>
        </g>
      </svg>
    </div>

    <div ref="refToSend" class="to-send">
      <input
        v-model="inputValue"
        @keyup.enter="userInputValue"
        class="to-send-input"
        type="text" />
      <div @click="userInputValue" class="to-send-message">
        <svg
          class=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 7.427 7.424">
          <g transform="translate(-449.152 -415.77)">
            <path
              d="M449.792,418.274l5.9-2.108a.371.371,0,0,1,.493.493l-2.109,5.9a.37.37,0,0,1-.722,0l-.93-2.416a.373.373,0,0,0-.223-.223L449.785,419a.371.371,0,0,1,.007-.723Z"
              fill="none"
              stroke="#fcfcfc"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.697" />
            <line
              y1="1.093"
              x2="1.093"
              transform="translate(452.36 418.897)"
              fill="none"
              stroke="#fcfcfc"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.697" />
          </g>
        </svg>
      </div>
      <!-- <div class="to-send-voice">
        <svg
          width="64px"
          height="64px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 1C9.79086 1 8 2.79086 8 5V12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12V5C16 2.79086 14.2091 1 12 1ZM10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12V5Z"
              fill="#FFF"
            ></path>
            <path
              d="M5 9C5.55228 9 6 9.44771 6 10V12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3679 10.4087 18 12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12V10C18 9.44771 18.4477 9 19 9C19.5523 9 20 9.44771 20 10V12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.3938 18.9199 14.7518 19.717 12.9981 19.9375C12.9993 19.9582 13 19.979 13 20V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V20C11 19.979 11.0006 19.9582 11.0019 19.9375C9.2482 19.717 7.60623 18.9199 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12V10C4 9.44771 4.44772 9 5 9Z"
              fill="#FFF"
            ></path>
          </g>
        </svg>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import request from "../config/request.js";
import MainHeader from "@/components/UI/MainHeader.vue";
import { useStore } from "vuex";
import { ref, reactive, watch, computed } from "vue";
import { useWindowSize, useElementSize, useScroll } from "@vueuse/core";
import router from "@/router/index.js";

const store = useStore();
const refToSend = ref(null);
const refLogo = ref(null);
const refChart = ref(null);
const messageRef = ref(null);
const window = useWindowSize();
const logo = useElementSize(refLogo);
const toSend = useElementSize(refToSend);
const message = useElementSize(messageRef);
const scrollChat = useScroll(refChart);

let counter = ref(0);
// const serverMessages = [
//   "Please enter your name",
//   "Please enter last name",
//   "Please enter your school name",
//   "Please enter your school code",
//   "Please enter your school year",
//   "Please enter your class code",
// ];
const serverMessages = [
  "你來自哪一所學校？",
  "您念幾年級？",
  "您念第幾班？",
  "可以告訢我你的全名嗎？",
];
const messages = ref([
  { name: "server", value: serverMessages[counter.value] },
]);
const inputValue = ref("");
const userAuthorizationKeys = [
  "school_name",
  "school_year",
  "class_code",
  "first_name",
];
const userData = reactive({
  school_name: "",
  school_year: "",
  class_code: "",
  first_name: "",
});

const userInputValue = () => {
  if (!inputValue.value) {
    return;
  }

  if (counter.value === userAuthorizationKeys.length) {
    return;
  }

  const currentKey = userAuthorizationKeys[counter.value];
  messages.value.push({ name: "client", value: inputValue.value });
  userData[currentKey] = inputValue.value;
  inputValue.value = "";
  counter.value++;
  if (!userData.first_name) {
    messages.value.push({
      name: "server",
      value: serverMessages[counter.value],
    });
  }
};

const chatSize = computed(() => {
  return (
    window.height.value - logo.height.value - toSend.height.value - 25 + "px"
  );
});

const signup = async () => {
  console.log("userData", userData);
  // router.push("/dashboard-links");
  try {
    const { data } = await request.post("auth", {
      school_code: "123",
      school_name: "test",
      school_year: "2222",
      class_code: "test123",
      first_name: "tip",
      last_name: "ppc",
    });

    if (data.error) {
      messages.value = [{ name: "server", value: data.message }];
      return;
    }

    store.commit("user/setUserData", data.data);
    store.commit("setIsAuth", true);
    store.commit("setToken", data.data.token);

    localStorage.setItem("token", data.data.token);

    router.push("/dashboard-links");
  } catch (error) {
    messages.value = [{ name: "server", value: error.message }];
  }
};

watch(
  () => counter.value,
  (n, o) => {
    if (n === serverMessages.length) {
      signup();
    }
  }
);
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px 0 14px;
  height: 100svh;
  width: 100%;
  background: url("../assets/bg.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}

.chat {
  flex: 1 0 auto;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 3px;
    height: 1px;
    transition: all 0.5s;
    z-index: 10;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #bec4c8;
    border-radius: 3px;
  }
  scroll-behavior: smooth;
}

.message-server {
  position: relative;
  margin: 40px auto 0;
  width: 80%;

  &-text {
    position: relative;
    padding: 16px 14px;
    outline: 5px solid var(--pink);
    outline-offset: 2px;
    border-radius: 8px;
    background: linear-gradient(to right, #eceef0 0%, #f9f9fa 100%);
    z-index: 12;

    color: #d3628f;
  }
  &-bg {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(to right, #f9f9fa 0%, #eceef0 100%);
    z-index: 1;
  }
  &-segment {
    max-width: 57px;
    position: absolute;
    left: -6px;
    bottom: -36px;

    & > svg {
      width: 100%;
      height: 100%;
    }
  }
}

.man {
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  max-width: 250px;
  margin: 20px auto 0;
}

.message-server:is(.client) {
  margin-top: 40px;
  .message-server-text {
    outline: 5px solid var(--blue);
    color: var(--blue);
  }
  .message-server-segment {
    left: auto;
    right: -6px;
  }
}

.to-send {
  flex: 0 0 auto;
  margin: 0 auto;
  width: 85%;
  position: relative;

  &-input {
    width: 100%;
    outline: none;
    border: 1px solid #cfd6da;
    border-radius: 23px;
    padding: 14px 90px 14px 15px;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    color: #787b7b;
  }

  &-message {
    top: 7px;
    right: 50px;
    position: absolute;
    padding: 6px;
    background-color: #8898df;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;

    & > svg {
      width: 20px;
      height: 20px;
    }
  }

  &-voice {
    top: 7px;
    right: 7px;
    position: absolute;
    padding: 6px;
    background-color: #8898df;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    & > svg {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
