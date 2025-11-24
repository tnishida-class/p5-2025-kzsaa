// 最終課題を制作しよう
let balls=[];//泡
const cycle = 100; // 1周期のフレーム数
let count; // 何フレーム目か

//全体の設定
function setup(){
  createCanvas(400, 400);
  count=0;
  noStroke();
  
//泡の設定
  for(let i=0;i<40;i++){
    balls.push({x:random(width),y:random(height),size:random(2,12),speed:random(0.5,2)
    });
   }
  }

//背景
function draw(){
  background(20);
  
//背景に格子を書く
  for(let x=0;x<width;x+=40){
  for(let y=0;y<height;y+=40){
    if((x+y)%80===0){
    fill(50,180,255);//濃い青
    }
    else{fill(30,120,200);//薄い青
    }
  rect(x,y,40,40);
    }
  }
  

//泡のアニメーション
  fill(255);//白
  for(let i=0;i<balls.length;i++){
    ellipse(balls[i].x,balls[i].y,balls[i].size);
  
　//★上にゆっくり動く★
  balls[i].y-=balls[i].speed;
  if(balls[i].y<0)balls[i].y=height;//ループ
 }
  

//ウニみたいなキャラクター
  let speed = 1; // アニメーションの速さ
  count = (count + speed) % cycle;

  let size;
  // 1周期の前半はサイズ拡大後半は縮小
   if(count<cycle/2){
    size=(cycle/2-count);
   }
   else{
    size=(count-cycle/2);
   }
  
  //★拡大の係数★
  let scale=map(size,0,cycle/2,1.2,0.8);
  
  //画面中央に持ってくる
  translate(width/2,height/2);
  
  //★とげとげの設定★
  let numSpikes=40;//とげの数
  let innerRadius=50;//内側の半径
  let outerRadius=100;//外側の半径
  let angleStep=360/numSpikes;//とげの角度の間隔
  
  if(keyIsPressed&&key===' '){//スペースキーが押された時
   fill(255,0,0);//赤(怒ってる感じ)
  }else{//押されてない時
   fill(0);//黒
  }
  noStroke();
  
  beginShape();
  for(let i=0;i<numSpikes;i++){
   let angle=radians(i*angleStep);
  
  //奇数と偶数で半径を変える
  let r;
  if(i%2===0){//偶数の時
    r=outerRadius;
  }else{//奇数の時
    r=innerRadius;
  }
 
  //★拡大縮小を適用★
  r*=scale;
 
  //★座標計算★
  let x=cos(angle)*r;
  let y=sin(angle)*r;
  vertex(x,y);
 }
  endShape(CLOSE);
  
}