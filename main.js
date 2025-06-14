//인덱스페이지

//  타이핑 애니메이션
const textTarget = document.getElementById("text");
const text = "학생 [송미강]에 대해 알아보시겠습니까?";
let i = 0;

function typingEffect() {
  if (i < text.length) {
    textTarget.innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 100); // 타이핑 속도
  } else {
    // 다 타이핑한 뒤, 잠시 기다렸다가 지우고 다시 시작
    setTimeout(() => {
      textTarget.innerHTML = "";
      i = 0;
      typingEffect();
    }, 2000); // 타이핑 후 멈춤 시간 (2초)
  }
}

window.addEventListener("DOMContentLoaded", typingEffect);

//박스 클릭시 내용물 변경
document.querySelectorAll(".box").forEach((box) => {
  const h1 = box.querySelector("h1");
  const originalText = h1.textContent;

  const toggleMap = {
    능력보기: `
<h2>
            HTML<br /><br />
            CSS<br /><br />
            C<br /><br />
            Python<br /><br />
            JavaScript
          </h2>
    `,
    학력보기: `
      면일초등학교 졸업 [2012.3~2018.2]<br /><br />
      면목중학교 졸업 [2018.3 ~ 2021.2]<br /><br />
      휘경여자고등학교 졸업 [2021.3 ~ 2024.2]<br /><br />
      중부대학교 재학 중 [2024.3 ~ ]
    `,
    전공보기: "중부대학교 정보보호학과이다",
    감시하기: `
    깃허브 감시
      <a href='https://github.com/Junbyung2' target='_blank'>
        <img src='/image/git.png' width='30px' /><br/>
        https://github.com/Junbyung2
      </a>
      <br /><br/>
      티스토리 감시
      <a href='https://das-geheimnis-stage.tistory.com/' target='_blank'>
        <img src='/image/tistory.png' width='30px' /><br/>
        https://das-geheimnis-stage.tistory.com
      </a>
    `,
  };

  let isChanged = false;

  box.addEventListener("click", () => {
    if (!isChanged) {
      box.innerHTML = toggleMap[originalText];
      isChanged = true;
    } else {
      box.innerHTML = `<h1>${originalText}</h1>`;
      isChanged = false;
    }
  });
});

//박스 둥둥띄우기 애니메이션
document.querySelectorAll(".box").forEach((box, index) => {
  let start = Date.now();
  const amplitude = 15; // 위아래 움직임 정도
  const speed = 0.002; // 속도 조절

  function float() {
    const timePassed = Date.now() - start;
    const offset = Math.sin(timePassed * speed + index) * amplitude;

    box.style.transform = `translateY(${offset}px)`;

    requestAnimationFrame(float);
  }

  float();
});

//화살 누를 시 밑으로 스크롤
document.getElementById("arrow").addEventListener("click", (e) => {
  e.preventDefault(); // 기본 앵커 이동 막기

  const target = document.getElementById("move");
  target.scrollIntoView({ behavior: "smooth" });
});

//프로젝트 페이지
document.querySelectorAll(".project").forEach((project) => {
  project.addEventListener("click", () => {
    const img = project.querySelector("img");
    const text = project.querySelector("p.input");

    if (img.style.display !== "none") {
      img.style.display = "none";
      text.style.display = "block";
    } else {
      img.style.display = "block";
      text.style.display = "none";
    }
  });
});

//팀페이지
