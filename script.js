
const questionData = [
    {
        question:"ข้อใดต่อไปนี้<u>เป็นประพจน์</u>",
        a:"จังหวัดนครสวรรค์เคยน้ำท่วมหรือไม่",
        b:"จงเติมคำตอบต่อไปนี้ให้ถูกต้อง",
        c:"ลิซ่าสวยไหม",
        d:"x+4=7 เมื่อ x=1",
        correct:"d"
    },
    {
        question:"ข้อใดต่อไปนี้<u>ไม่เป็นประพจน์</u>",
        a:"`sqrt4` เป็นจำนวนเต็ม",
        b:"`bin{a,e,i,o,u}`",
        c:"เขาเป็นดารา",
        d:"วันพระตรงกับวันขึ้น 15 ค่ำ",
        correct:"c"
    },
    {
        question:"สมการ `x^2+1 = 5` x มีค่าเท่าใด จึงจะทำให้ข้อความข้างต้นมีค่าความจริงเป็นเท็จ",
        a:"-2",
        b:"0",
        c:"2",
        d:"ไม่มีข้อใดถูกต้อง",
        correct:"b"
    },
    {
        question:"ข้อความใตต่อไปนี้เป็นประพจน์ที่มีค่าความจริงเป็นจริง",
        a:"0 เป็นจำนวนเต็มบวกคู่",
        b:"`pi = 3.14`",
        c:"8 ไม่น้อยกว่า 10",
        d:"พระอาทิตย์ไม่ได้ขึ้นทางทิศตะวันตก",
        correct:"d"
    },
    {
        question:"ข้อความใตต่อไปนี้เป็นประพจน์ที่มีค่าความจริงเป็นเท็จ",
        a:"5 เป็นจำนวนเฉพาะ",
        b:"ประโยคขอร้องไม่เป็นประพจน์",
        c:"0 เป็นจำนวนนับ",
        d:"จังหวัดเชียงรายไม่ได้อยู่ภาคกลางของประเทศไทย",
        correct:"c"
    },
    {
        question:"นิเสธของประพจน์ในข้อใดต่อไปนี้ มีค่าความจริงเป็นจริง",
        a:"8 เป็นตัวประกอบของ 48",
        b:"เชียงใหม่ไม่ได้อยู่ภาคเหนือของประเทศไทย",
        c:"แม่น้ำเจ้าพระยาไหลผ่านจังหวัดนครสวรรค์",
        d:"4 และ 6 เป็นสมาชิกของ {4,6}",
        correct:"b"
    },
    {
        question:"ประพจน์ในข้อใดมีค่าความจริงแตกต่างจากข้ออื่น",
        a:"5 และ 9 เป็นจำนวนเฉพาะ",
        b:"ถ้า 2 เป็นจำนวนคู่แล้ว 2+7 เป็นจำนวนคี่",
        c:"5 เป็นจำนวนนับ ก็ต่อเมื่อ `5-:10=2`",
        d:"5 ไม่มากกว่า 3 หรือ 5 เท่ากับ 3",
        correct:"b"
    },
    {
        question:"`{:(กำหนดให้,p,แทนประพจน์,(-10)+10=0),(,q,แทนประพจน์,(2xx3)-7=1):}`<br>แล้ว `~pvvq\\ ` มีค่าความจริงตรงกับข้อใด",
        a:"`~pharrq`",
        b:"`pharr~q`",
        c:"`(pvvq)->p`",
        d:"`(pvvq)->q`",
        correct:"c"
    },
    {
        question:"กำหนดให้ p และ q เป็นประพจน์ ข้อใดต่อไปนี้ สามารถมีค่าความจริงได้มากกว่า 1 ค่า",
        a:"`(pvvq)->q`",
        b:"`(~p^^q)->q`",
        c:"`(~q^^q)->p`",
        d:"`pvv(p->q)`",
        correct:"a"
    },
    {
        question:"ค่าความจริงในข้อใดถูกต้องทุกรูปแบบ<br>`\\ \\ \\ \\ \\ {:(,p,q,pvv~q,p->~q,~(p^^q)),(1,T,T,\\ \\ \\ \\ T,\\ \\ \\ \\ F,\\ \\ \\ \\ T),(2,T,F,\\ \\ \\ \\ T,\\ \\ \\ \\ F,\\ \\ \\ \\ T),(3,F,T,\\ \\ \\ \\ F,\\ \\ \\ \\ T,\\ \\ \\ \\ F),(4,F,F,\\ \\ \\ \\ T,\\ \\ \\ \\ T,\\ \\ \\ \\ F):}`",
        a:"1",
        b:"2",
        c:"3",
        d:"4",
        correct:"b"
    },
    {
        question:"`\\ \\ \\ \\ \\ {:(p,q,p...q),(T,T,\\ \\ T),(T,F,\\ \\ T),(F,T,\\ \\ T),(F,F,\\ \\ F):}`<br>ตารางค่าความจริงควรเชื่อมประพจน์ p กับประพจน์ q ด้วยตัวเชื่อมประพจน์ใด",
        a:"และ",
        b:"`หรือ`",
        c:"`ถ้า...แล้ว`",
        d:"`ก็ต่อเมื่อ`",
        correct:"d"
    },
    {
        question:"กำหนดให้ p,q และ r เป็นประพจน์ที่มีค่าความจริงเป็น เท็จ จริง และ จริง ตามลำดับ <br>ประพจน์ `(r^^p)->q`<br>มีค่าความจริงตรงกับประพจน์ในข้อใด",
        a:"`~p`",
        b:"`rharrq`",
        c:"`q->r`",
        d:"`~qvvp`",
        correct:"d"
    },
    {
        question:"กำหนดให้ p,q และ r เป็นประพจน์ที่มีค่าความจริงเป็น เท็จ จริง และ จริง ตามลำดับ <br>ประพจน์ `~(r->p)^^q` <br>มีค่าความจริงตรงกับประพจน์ในข้อใด",
        a:"`qharr~p`",
        b:"`pharrr`",
        c:"`r^^p`",
        d:"`~r`",
        correct:"a"
    },
    {
        question:"กำหนดให้ p,q,r และ s เป็นประพจน์ที่มีค่าความจริงเป็น จริง เท็จ จริง และ เท็จ ตามลำดับ ประพจน์ต่อไปนี้มีกี่ประพจน์ที่มีค่าความจริง<u>เป็นจริง</u><br>`{:(ก.,(rvvs)->q),(ข.,(q->p)->r),(ค.,qharr(s->p)):}`",
        a:"1",
        b:"2",
        c:"3",
        d:"ไม่มีข้อใดถูกต้อง",
        correct:"a"
    },
    {
        question:"กำหนดให้ p,q และ r เป็นประพจน์ที่มีค่าความจริงเป็น จริง เท็จ และ จริง ตามลำดับ ประพจน์ในข้อใดมีค่าความจริง<u>เป็นจริง</u>",
        a:"`p^^(qvv~r)`",
        b:"`(~pvvq)^^r`",
        c:"`pharr(q->r)`",
        d:"`p->(qharrr)`",
        correct:"c"
    },
    {
        question:"ถ้า `p->q` มีค่าความจริงเป็นเท็จ ข้อใดถูกต้อง",
        a:"p มีค่าความจริงเป็นจริง , q มีค่าความจริงเป็นเท็จ",
        b:"p มีค่าความจริงเป็นจริง , q มีค่าความจริงเป็นเท็จ",
        c:"p มีค่าความจริงเป็นเท็จ , q มีค่าความจริงเป็นจริง",
        d:"p มีค่าความจริงเป็นเท็จ , q มีค่าความจริงเป็นเท็จ",
        correct:"b"
    },
    {
        question:"`{:(ถ้า,qvvr,มีค่าความจริงเป็นเท็จ,และ),(,pharrr,มีค่าความจริงเป็นเท็จ,ข้อใดถูกต้อง):}`",
        a:"p มีค่าความจริงเป็นเท็จ , q มีค่าความจริงเป็นเท็จ , r มีค่าความจริงเป็นจริง",
        b:"p มีค่าความจริงเป็นเท็จ , q มีค่าความจริงเป็นเท็จ , r มีค่าความจริงเป็นเท็จ",
        c:"p มีค่าความจริงเป็นจริง , q มีค่าความจริงเป็นเท็จ , r มีค่าความจริงเป็นเท็จ",
        d:"p มีค่าความจริงเป็นจริง , q มีค่าความจริงเป็นเท็จ , r มีค่าความจริงเป็นจริง",
        correct:"c"
    },
    {
        question:"ข้อใดต่อไปนี้ <u>ไม่ถูกต้อง</u>",
        a:"`ถ้า\\ p->q\\ เป็นเท็จ\\ แล้ว\\ pharrq\\ เป็นเท็จ`",
        b:"`ถ้า\\ pharrq\\ เป็นเท็จ\\ แล้ว\\ p^^q\\ เป็นเท็จ`",
        c:"`ถ้า\\ p^^q\\ เป็นเท็จ\\ แล้ว\\ pvvq\\ เป็นเท็จ`",
        d:"`ถ้า\\ pvvq\\ เป็นเท็จ\\ แล้ว\\ p->q\\ เป็นจริง`",
        correct:"c"
    },
    {
        question:"ประพจน์ใสข้อใดมีค่าความจริง<u>เป็นเท็จ</u>เสมอ",
        a:"`p->~p`",
        b:"`~(p^^~p)`",
        c:"`pvv~p`",
        d:"`pharr~p`",
        correct:"d"
    },
    {
        question:"กำหนดให้ `p,q,r` และ `s` เป็นประพจน์ โดยที่ `(p^^q)->(rvvs)]` เป็นเท็จ แล้วประพจน์ในข้อใดต่อไปนี้<mark><u>เป็นเท็จ</u></mark>",
        a:"`svv~p`",
        b:"`q->s`",
        c:"`rharr~s`",
        d:"`~(q^^p)`",
        correct:"a"
    },
    {
        question:"กำหนด`[~(p^^q)vv(r->s)]` มีค่าความจริงเป็นเท็จ แล้วค่าความจริงของ p,q,r และ s ตามลำดับตรงกับข้อใด",
        a:"T , F , T , F",
        b:"T , T , F , F",
        c:"T , F , F , T",
        d:"T , T , T , F",
        correct:"d"
    },
    {
        question:"กำหนดให้ประพจน์<br>`{:(,ถ้ามานีตั้งใจเรียนแล้วมานีสอบผ่าน,มีค่าความจริงเป็นเท็จ),(และ,มานีเป็นหัวหน้าห้องหรือมานีสอบผ่าน,มีค่าความจริงเป็นจริง):}`<br>ประพจน์ในข้อใดต่อไปนี้มีค่าความจริงเป็นจริง",
        a:"มานีไม่ตั้งใจเรียนหรือมานีสอบผ่าน",
        b:"มานีสอบผ่านและมานีไม่เป็นหัวหน้าห้อง",
        c:"มานีตั้งใจเรียนก็ต่อเมื่อมานีสอบผ่าน",
        d:"ถ้ามานีเป็นหัวหน้าห้องแล้วมานีไม่ตั้งใจเรียน",
        correct:"d"
    },
    {
        question:"กำหนดให้ <br>`{:(p,แทน,ฉันเก็บเงิน),(q,แทน,ฉันจะซื้อ \\ Iphon\\e14\\ ได้):}`<br>ข้อความใดต่อไปนี้เขียนแทนสัญลักษณ์ `~pvv(p->q)`",
        a:"ฉันไม่เก็บเงินและถ้าฉันเก็บเงินแล้วฉันจะซื้อ Iphone14 ได้",
        b:"ฉันไม่เก็บเงินหรือถ้าฉันเก็บเงินแล้วฉันจะซื้อ Iphone14 ได้",
        c:"ฉันเก็บเงินหรือฉันเก็บเงินถ้าแล้วฉันจะซื้อ Iphone14 ได้",
        d:"ฉันไม่เก็บเงินหรือฉันเก็บเงินก็ต่อเมื่อฉันจะซื้อ Iphone14 ได้",
        correct:"b"
    },
    {
        question:"กำหนดให้ ดรีมพูดจริงเสมอ อายพูดเท็จเสมอ เมย์พูดจริงบ้างเท็จบ้าง สามคนพูดคุยกันมีบทสนทนา ดังนี้<br>`{:(ดรีม,:, หนุ่มหรือขวัญมาจากเชียงใหม่),(อาย,:,แตงโมหรือหนุ่มมาจากเชียงใหม่),(เมย์,:, ถ้าแตงโมมาจากเชียงใหม่แล้วจิ๋วมาจากเชียงใหม่ด้วย):}`<br>ข้อความใดต่อไปนี้มีค่าความจริงเป็นจริง",
        a:"แตงโมมาจากเชียงใหม่",
        b:"หนุ่มมาจากเชียงใหม่",
        c:"ขวัญมาจากเชียงใหม่",
        d:"จิ๋วมาจากเชียงใหม่",
        correct:"c"
    },
    {
        question:"กำหนดให้ <br>`{:(p,แทน, นักเรียนเป็นคนขยัน),(q,แทน, นักเรียนเป็นคนมีวินัย),(r,แทน, นักเรียนเป็นคนมีน้ำใจ):}`<br>ข้อใดเขียนรูปสัญลักษณ์แทนประพจน์  \"ถ้านักเรียนเป็นคนมีวินัยแล้วนักเรียนเป็นคนขยันหรือไม่มีน้ำใจ\"",
        a:"`q->(pvv~r)`",
        b:"`q->(p^^~r)`",
        c:"`(q->p)vv~r`",
        d:"`(q->p)^^~r`",
        correct:"a"
    },
];

const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const container = document.querySelector('.question-container');
const choiceA = document.getElementById('a-text');
const choiceB = document.getElementById('b-text');
const choiceC = document.getElementById('c-text');
const choiceD = document.getElementById('d-text');

const submitBtn = document.getElementById('submit');

// let no = random(0,questionData.length-1)

let no = random(0,questionData.length-1)

let currentQuestion = no;
let score=0;
let kor=1;
let d = new Date();
let myDate = d.toLocaleString();

loadQuestion();

function loadQuestion(){
    checkChoice();
    const currentQuizData = questionData[currentQuestion];
    questionEl.innerHTML=kor+". "+currentQuizData.question;
    choiceA.innerText=currentQuizData.a;
    choiceB.innerText=currentQuizData.b;
    choiceC.innerText=currentQuizData.c;
    choiceD.innerText=currentQuizData.d;
    // MathJax.typesetPromise()
}
function checkChoice(){
    answerEls.forEach(answerEl=>answerEl.checked=false)
}

submitBtn.addEventListener('click',()=>{
    //ตรวจสอบตัวเลือก
    let answer = getChaoiceAnswer();
    // console.log(answer);
    if(answer){
        if(answer === questionData[currentQuestion].correct){
            score++;
        }
        currentQuestion= random(0,questionData.length-1);
        // if(currentQuestion<questionData.length){
            if(kor<30){
            kor++;
            loadQuestion();
            MathJax.typesetPromise()
        }else{
            // container.innerHTML=`<h2>คุณได้คะแนน ${score}/${questionData.length}</h2>`;
            container.innerHTML="<h2>คุณได้คะแนน `"+score+"/"+kor+"`</h2><br>"+myDate;
            MathJax.typesetPromise()
        }
    }
});

function getChaoiceAnswer(){
    let answer;
    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

//เพิ่มเอง
function random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
  }

function gcd(t01,t02){
  let t1 = Math.abs(t01);
  let t2 = Math.abs(t02);
  do{
      m=Math.max(t1,t2);
      n=Math.min(t1,t2);
      k=m%n;
      t1=n;
      t2=k;
  }while(k>0);
  return n;
}