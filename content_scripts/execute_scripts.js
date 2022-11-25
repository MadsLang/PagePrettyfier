(() => {
    /**
     * Check and set a global guard variable.
     * If this content script is injected into the same page again,
     * it will do nothing next time.
     */
    if (window.hasRun) {
      return;
    }
    window.hasRun = true;
  
    /**
     * Function 1: Justify all paragraphs. 
     */
    function doStuff() {
      document.querySelectorAll('[role=paragraph],p').forEach(function(node) {
        node.style.textAlign = "justify"
    });
    }

    /**
     * Add functions similar to doStuff here for more functions
     */

    function doStuff2() {
      document.querySelectorAll('[role=paragraph],p,h1,h2,h3,span').forEach(function(node) {
        node.style.fontFamily = "serif"
    });
    }

    function doStuff3() {
      document.querySelectorAll('img,source').forEach(function(node) {
        node.src = 'https://media.tenor.com/ShqRkUv63pAAAAAC/cat-vibing-vibing-cat.gif'
        node.srcset = 'https://media.tenor.com/ShqRkUv63pAAAAAC/cat-vibing-vibing-cat.gif'
    });
    }

    function wordart() {
      var wordArtArray = [
        `
          h1 {
            transform: scaleY(1.5) skewY(-8deg) rotateZ(-3deg) translateZ(0);
            font-family: Impact, sans-serif;
            color: transparent;
            background: linear-gradient(to bottom left, #fee601, #fee601 15%, #fe4201);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            &::before {
              @include pseudo;
              z-index: -1;
              text-shadow: 1px 0 0 #813300, 0 1px 0 #c14d00, 2px 1px 0.35px #813300, 1px 2px 0.35px #c14d00, 3px 2px 0.35px #813300, 2px 3px 0.35px #c14d00, 4px 3px 0.35px #813300, 3px 4px 0.35px #c14d00, 5px 4px 0.35px #813300, 4px 5px 0.35px #c14d00, 6px 5px 0.35px #813300, 5px 6px 0.35px #c14d00, 7px 6px 0.35px #813300, 6px 7px 0.35px #c14d00;
            }
          }
          `,
          `
          h1 {
            transform: scale(0.75, 1.65) translateZ(0);
            font-weight: 900;
            background: linear-gradient(#ccdfec 0%, #7a97bc 20%, #8aacc6 30%, #fff 50%, #b8908f 51%, #80302d 52%, #b84d4a 55%, #e7cfc9 75%, #916e66 100%);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            letter-spacing: -0.2vw;
            &::before {
              @include pseudo;
              z-index: -1;
              text-shadow: 1px 0 0 #000, 0 1px 1px #a1a1a1, 2px 1px 1px #000, 1px 2px 1px #a1a1a1, 3px 2px 1px #000, 2px 3px 1px #a1a1a1, 4px 3px 1px #000, 3px 4px 1px #a1a1a1, 5px 4px 1px #000, 4px 5px 1px #a1a1a1, 6px 5px 1px #000, 5px 6px 1px #a1a1a1, 7px 6px 1px #000, 6px 7px 1px #a1a1a1, 8px 7px 1px #000, 7px 8px 1px #a1a1a1, 9px 8px 1px #000, 8px 9px 1px #a1a1a1, 10px 9px 0 #000;
            }
          }
          `,
          `
          h1 {
            transform: scale(0.8, 1.2);
            font-family: Impact, sans-serif;
            font-weight: 900;
            color: #33ccff;
            -webkit-text-stroke: 1.25px #000099;
            text-shadow: 0.35rem -0.35rem 0 #000099;
            letter-spacing: -0.15vw;
          }
          `,
          `
          h1 {
            transform: perspective(200px) rotateX(30deg) scaleY(1.65);
            font-weight: 900;
            color: transparent;
            background: linear-gradient(#551700, #fecb00);
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 1px #b2b2b2;
            -webkit-background-clip: text;
            background-clip: text;
            letter-spacing: 0.1vw;
            &::before {
              @include pseudo;
              z-index: -1;
              color: #ab8d56;
              -webkit-text-fill-color: #ab8d56;
              -webkit-text-stroke: transparent;
              transform: perspective(250px) translateY(-0.643em) rotateX(70deg) scale(1) translateZ(-1em);
            }
          }
          `,
          `
          h1 {
            transform: scaleY(1.65);
            font-weight: 900;
            color: transparent;
            background: linear-gradient(to left, #a104ad, #0b2be0, #329941, #f7f658, #f16412, #e92153, #aa04a7);
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 0.016em #eaeaea;
            -webkit-background-clip: text;
            background-clip: text;
            letter-spacing: 0.1rem;
            &::before {
              @include pseudo;
              z-index: -1;
              color: #cdcdcd;
              -webkit-text-fill-color: #cdcdcd;
              -webkit-text-stroke: transparent;
              transform: rotateX(63deg) skew(60deg) scaleY(0.65) translate3d(2em, -2.15em, -1em);
            }
          }
          `,
          `
          h1 {
            transform: scale(0.65, 1.65);
            font-weight: 900;
            color: #896640;
            &::before {
              @include pseudo;
              z-index: -1;
              text-shadow: 1px 0 #1b0d00, 2px 0 #1b0d00, 3px 0 #1b0d00, 4px 0 #1b0d00, 5px 0 #1b0d00, 6px 0 #1b0d00, 7px 0 #1b0d00;
            }
          }
          `
      ];

      var randomNumber = Math.floor(Math.random()*wordArtArray.length);

      const style = document.createElement('style');
      style.innerHTML = wordArtArray[randomNumber];
      document.head.appendChild(style);
    }
  
    /**
     * Does not do anything. Refresh the page instead to rm edits
     */
    function removeStuff() {

    }
  
    /**
     * Listen for messages from the background script.
     * If receiving "justify", it calls doStuff function.
     * Add other messages and corresponding function to add more functions
     */
    browser.runtime.onMessage.addListener((message) => {
      if (message.command === "justify") {
        doStuff();
      } else if (message.command === "fontify") {
        doStuff2();
      } else if (message.command === "cats") {
        doStuff3();
      } else if (message.command === "wordart") {
        wordart();
      } else if (message.command === "reset") {
        removeStuff();
      }
    });
  })();
  




