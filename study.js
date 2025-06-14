const problems = [
  {
    title: "나머지 구하기",
    level: "Lv.0",
    description:
      "정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.",
    solution: `function solution(num1, num2) {
    var answer = 0;
    answer = Math.floor(num1 % num2);
    return answer;
}`,
    explanation:
      "산술연산자에서 /는 나누기의 몫을 구하는 것이고 %는 나머지를 구하는 연산자이다. 이를 사용해서 나머지 구하기 함수를 쉽게 만들 수 있었다",
  },

  {
    title: "두 수의 차 구하기",
    level: "Lv.0",
    description:
      "정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 soltuion 함수를 완성해주세요.",
    solution: `function solution(num1, num2) {
    var answer = 0;
    answer = Math.floor(num1 - num2);
    return answer;
}`,
    explanation:
      "앞에 있는 나머지 구하기 문제와 같이 산술연산자 - 를 이용해서 받은 매개변수 두 수의 차를 리턴해주었다.",
  },

  {
    title: "숫자 비교하기",
    level: "Lv.0",
    description:
      "정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.",
    solution: `function solution(num1, num2) {
    var answer = 0;
    if(num1==num2){
        answer=1;
    }else{
        answer=-1;
    }
    return answer;
}`,
    explanation:
      "조건문 if문을 사용해서 두 수가 같다면 1을 반환해주고 다르다면 -1을 반환하도록 함수를 만들었다.",
  },
  {
    title: "나이 출력",
    level: "Lv.0",
    description:
      "머쓱이는 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 2022년 기준 선생님의 나이 age가 주어질 때, 선생님의 출생 연도를 return 하는 solution 함수를 완성해주세요",
    solution: `function solution(age) {
    var answer = 0;
    answer = 2023-age;
    return answer;
}`,
    explanation:
      "문제의 기준 연도가 2022년이므로 출생 연도를 포함해서 나이를 세기 때문에 2023년에서 나이를 빼야한다. 따라서 2023-age를 하여 문제를 풀었다.",
  },
  {
    title: "두 수의 곱 구하기",
    level: "Lv.0",
    description:
      "정수 num1, num2가 매개변수 주어집니다. num1과 num2를 곱한 값을 return 하도록 solution 함수를 완성해주세요.",
    solution: `function solution(num1, num2) {
    var answer = 0;
    answer = num1 * num2;
    return answer;
}`,
    explanation:
      "처음 풀었던 앞에 두 문제와 같이 산술연산자 * 를 이용하여 문제를 쉽게 풀 수 있었다.",
  },
];

//슬라이드 생성
const slidesContainer = document.getElementById("slides-container");

problems.forEach((problem) => {
  const slide = document.createElement("div");
  slide.className = "slide2";

  slide.innerHTML = `
   <br/> <h2>${problem.title} <span style="font-size: 14px;">(${problem.level})</span></h2><br/>
    <div class="content-row">
      <div class="card"><strong>문제</strong><p>${problem.description}</p></div><br/>
      <div class="card"><strong>풀이</strong><pre><code>${problem.solution}</code></pre></div><br/>
      <div class="card"><strong>설명</strong><p>${problem.explanation}</p></div>
    </div>
  <br/><br/>`;

  slidesContainer.appendChild(slide);
});

//슬라이드 이동
let currentIndex = 0;

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % problems.length;
  updateSlide();
});
document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + problems.length) % problems.length;
  updateSlide();
});

function updateSlide() {
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

//타이핑효과
const titleText = "Progremmers 문제 풀이 기록";
const typedText = document.getElementById("typed-text");
let charIndex = 0;

function typeTitle() {
  if (charIndex < titleText.length) {
    typedText.textContent += titleText.charAt(charIndex);
    charIndex++;
    setTimeout(typeTitle, 100); // 타이핑 속도 조절
  } else {
    // 다 쳤으면 잠시 멈췄다가 초기화 후 다시 타이핑 시작
    setTimeout(() => {
      typedText.textContent = "";
      charIndex = 0;
      typeTitle();
    }, 2000); // 2초 멈춤
  }
}

window.addEventListener("DOMContentLoaded", typeTitle);
