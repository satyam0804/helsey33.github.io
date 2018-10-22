document.addEventListener("DOMContentLoaded", () => {
  anime
    .timeline({
      easing: "easeOutExpo"
    })
    .add({
      targets: ".home-container .one",
      top: ["-100%", 0],
      duration: 2500
    })
    .add({
      targets: ".home1 img",
      opacity: [0, 1],
      translateY: [40, 0],
      offset: "-=1000"
    })
    .add({
      targets: ".home1 img",
      opacity: [1, 0],
      translateY: [0, -40],
      complete: anim => {
        document.querySelector(".home1 img").remove();
      }
    })
    .add({
      targets: ".emo h1",
      translateY: [300, 0],
      offset: "-=1000"
    })
    .add({
      targets: ".home-container .two",
      top: ["-100%", 0],
      duration: 2500
    })
    .add({
      targets: ".content-wrapper",
      scale: [1.2, 1],
      offset: "-=2500",
      duration: 2000
    })
    .add({
      targets: ".content-up, .content-down span",
      opacity: [0, 1],
      translateY: [100, 0],
      offset: "-=2000",
      delay: (el, i) => i * 200,
      begin: anim => {
        document.querySelector(
          ".content-down span"
        ).style.webkitAnimationPlayState = "running";
      }
    })
    .add({
      targets: ".content-down .line",
      width: [0, "30vw"],
      offset: "-=300"
    })
    .add({
      targets: ".content-down .question-wrapper",
      scale: [0, 1],
      offset: "-=500"
    });

  document.querySelector(".question-wrapper").onclick = () => {
    anime
      .timeline({
        easing: "easeOutExpo"
      })
      .add({
        targets: ".three",
        top: ["-100%", 0],
        duration: 2000,
        run: anime =>
          (document.querySelector(".content-down span").style.zIndex = "0")
      })
      .add({
        targets: ".three .img-wrapper",
        scale: [1.5, 1],
        offset: "-=2000",
        duration: 2000
      })
      .add({
        targets: ".three .left div",
        opacity: [0, 1],
        translateX: [-100, 0],
        delay: (el, i) => 200 * i,
        offset: "-=1000",
        complete: anime => {
          document.querySelector(".two").style.top = "-100%";
          document.querySelector(".one").style.top = "-100%";
        }
      });
  };

  document.querySelector(".knowMore").onclick = () => {
    anime
      .timeline({
        easing: "easeOutSine"
      })
      .add({
        targets: ".three",
        scale: [1, 0],
        opacity: [1, 0]
      })
      .add({
        targets: ".four",
        right: ["-100%", 0],
        offset: "-=1000"
      })
      .add({
        targets: ".home4",
        scale: [1.5, 1],
        offset: "-=1000"
      })
      .add({
        targets: "#XMLID_8_",
        width: [0, 681.1],
        offset: "-=500"
      })
      .add({
        targets: "#XMLID_9_",
        height: [0, 427.2],
        offset: "-=1000"
      })
      .add({
        targets: "#XMLID_6_",
        width: [0, 681.1],
        offset: "-=1000"
      })
      .add({
        targets: "#XMLID_13_ path",
        strokeDashoffset: [anime.setDashoffset, 0],
        delay: (el, i) => i * 50,
        complete: () => {
          document.querySelectorAll("#XMLID_13_ path").forEach(el => {
            el.style.fill = "#2b2b2b";
          });
          document.querySelectorAll("#XMLID_12_ path").forEach(el => {
            el.style.fill = "#fff";
          });
        }
      })
      .add({
        targets: ".home4 .logo",
        translateX: [-200, 0],
        rotateZ: [-120, 0]
      })
      .add({
        targets: ".home4 .content div",
        opacity: [0, 1],
        translateY: [-20, 0],
        delay: (el, i) => i * 50,
        offset: "-=500",
        duration: 200
      });
  };

  document.querySelector(".home4").onmousemove = e => {
    let xPos = e.clientX / window.innerWidth - 0.5;
    let yPos = e.clientY / window.innerHeight - 0.5;
    console.log(xPos, yPos);
    anime({
      targets: "svg",
      rotateX: [15 * yPos],
      rotateY: [15 * xPos],
      duration: 50
    });
  };
});